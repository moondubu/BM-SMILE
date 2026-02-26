"use client"

import { useEffect, useRef, useState } from "react"

const CAREER_URL = "https://bmsmile.career.greetinghr.com/ko/apply?embed=1"
const CAREER_ORIGIN = "https://bmsmile.career.greetinghr.com"
const EMBED_HEIGHT_MESSAGE_TYPE = "BM_GREETING_EMBED_HEIGHT"
const EMBED_HEIGHT_REQUEST_TYPE = "BM_GREETING_REQUEST_HEIGHT"
const EMBED_MODAL_OPEN_TYPE = "BM_GREETING_MODAL_OPEN"
const EMBED_MODAL_CLOSE_TYPE = "BM_GREETING_MODAL_CLOSE"
const EMBED_PRESERVE_SCROLL_TYPE = "BM_GREETING_PRESERVE_SCROLL"
const EMBED_RESTORE_SCROLL_TYPE = "BM_GREETING_RESTORE_SCROLL"
const CAREER_MIN_HEIGHT = 200
const MODAL_SIGNAL_STABILIZE_MS = 120

export default function CareerEmbed() {
  const [loaded, setLoaded] = useState(false)
  const [frameKey, setFrameKey] = useState(0)
  const [iframeHeight, setIframeHeight] = useState<number | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const modalOpenRef = useRef(false)
  const prevBodyOverflowRef = useRef("")
  const modalSignalTimerRef = useRef<number | null>(null)

  useEffect(() => {
    document.body.classList.add("CareerPageActive")

    const headerElement = document.querySelector(".Header") as HTMLElement | null

    const syncShellHeights = () => {
      const headerHeight = headerElement?.getBoundingClientRect().height ?? 80
      document.body.style.setProperty("--career-header-height", `${headerHeight}px`)
    }

    const resizeObserver = new ResizeObserver(() => {
      syncShellHeights()
    })

    if (headerElement != null) resizeObserver.observe(headerElement)
    syncShellHeights()

    const requestEmbedHeight = () => {
      const frameWindow = iframeRef.current?.contentWindow
      if (frameWindow == null) return
      frameWindow.postMessage({ type: EMBED_HEIGHT_REQUEST_TYPE }, CAREER_ORIGIN)
    }

    const postToEmbed = (type: string) => {
      const frameWindow = iframeRef.current?.contentWindow
      if (frameWindow == null) return
      frameWindow.postMessage({ type }, CAREER_ORIGIN)
    }

    const requestEmbedHeightBurst = () => {
      requestEmbedHeight()
      setTimeout(requestEmbedHeight, 60)
      setTimeout(requestEmbedHeight, 180)
    }

    const handleWindowResize = () => {
      syncShellHeights()
      requestEmbedHeightBurst()
    }
    window.addEventListener("resize", handleWindowResize)

    const handleWindowFocus = () => {
      requestEmbedHeightBurst()
    }
    window.addEventListener("focus", handleWindowFocus)

    const handlePageShow = () => {
      requestEmbedHeightBurst()
    }
    window.addEventListener("pageshow", handlePageShow)

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        requestEmbedHeightBurst()
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)

    const resetCareerIframe = () => {
      setLoaded(false)
      if (modalSignalTimerRef.current != null) {
        window.clearTimeout(modalSignalTimerRef.current)
        modalSignalTimerRef.current = null
      }
      modalOpenRef.current = false
      setModalOpen(false)
      setIframeHeight(null)
      setFrameKey((prev) => prev + 1)
    }
    window.addEventListener("career:reset-iframe", resetCareerIframe)

    const handleCareerMessage = (event: MessageEvent) => {
      if (event.origin !== CAREER_ORIGIN) return
      if (typeof event.data !== "object" || event.data === null) return

      const data = event.data as { type?: unknown; height?: unknown }
      console.debug("[career/embed] message", data.type, data.height)

      if (data.type === EMBED_MODAL_OPEN_TYPE) {
        if (modalSignalTimerRef.current != null) {
          window.clearTimeout(modalSignalTimerRef.current)
        }
        modalSignalTimerRef.current = window.setTimeout(() => {
          modalSignalTimerRef.current = null
          if (modalOpenRef.current) return
          postToEmbed(EMBED_PRESERVE_SCROLL_TYPE)
          modalOpenRef.current = true
          setModalOpen(true)
          setTimeout(() => {
            postToEmbed(EMBED_RESTORE_SCROLL_TYPE)
          }, 20)
          setTimeout(() => {
            postToEmbed(EMBED_RESTORE_SCROLL_TYPE)
          }, 80)
          setTimeout(() => {
            postToEmbed(EMBED_RESTORE_SCROLL_TYPE)
          }, 180)
          setTimeout(() => {
            postToEmbed(EMBED_RESTORE_SCROLL_TYPE)
          }, 320)
          console.debug("[career/embed] modal open applied")
        }, MODAL_SIGNAL_STABILIZE_MS)
        return
      }

      if (data.type === EMBED_MODAL_CLOSE_TYPE) {
        if (modalSignalTimerRef.current != null) {
          window.clearTimeout(modalSignalTimerRef.current)
        }
        modalSignalTimerRef.current = window.setTimeout(() => {
          modalSignalTimerRef.current = null
          if (!modalOpenRef.current) return
          modalOpenRef.current = false
          setModalOpen(false)
          requestEmbedHeightBurst()
          console.debug("[career/embed] modal close applied")
        }, MODAL_SIGNAL_STABILIZE_MS)
        return
      }

      if (data.type !== EMBED_HEIGHT_MESSAGE_TYPE) return
      if (modalOpenRef.current) return
      if (typeof data.height !== "number" || Number.isFinite(data.height) === false) return
      if (data.height < CAREER_MIN_HEIGHT) return

      const nextHeight = Math.ceil(data.height)
      setIframeHeight((prev) => (prev === nextHeight ? prev : nextHeight))
    }
    window.addEventListener("message", handleCareerMessage)

    return () => {
      if (modalSignalTimerRef.current != null) {
        window.clearTimeout(modalSignalTimerRef.current)
      }
      resizeObserver.disconnect()
      window.removeEventListener("resize", handleWindowResize)
      window.removeEventListener("focus", handleWindowFocus)
      window.removeEventListener("pageshow", handlePageShow)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      window.removeEventListener("career:reset-iframe", resetCareerIframe)
      window.removeEventListener("message", handleCareerMessage)
      document.body.classList.remove("CareerPageActive")
      document.body.style.removeProperty("--career-header-height")
    }
  }, [])

  useEffect(() => {
    if (modalOpen) {
      prevBodyOverflowRef.current = document.body.style.overflow

      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prevBodyOverflowRef.current
      }
    }

    document.body.style.overflow = prevBodyOverflowRef.current
    return () => {
      document.body.style.overflow = prevBodyOverflowRef.current
    }
  }, [modalOpen])

  return (
    <section className="CareerPage">
      <iframe
        ref={iframeRef}
        key={frameKey}
        src={CAREER_URL}
        title="BMSmile Career"
        className="CareerPage-iframe"
        style={
          modalOpen
            ? { height: "calc(100vh - var(--career-header-height))", minHeight: "calc(100vh - var(--career-header-height))" }
            : iframeHeight == null
              ? undefined
              : { height: `${iframeHeight}px` }
        }
        onLoad={() => {
          setLoaded(true)
          const frameWindow = iframeRef.current?.contentWindow
          if (frameWindow == null) return
          frameWindow.postMessage({ type: EMBED_HEIGHT_REQUEST_TYPE }, CAREER_ORIGIN)
          setTimeout(() => {
            frameWindow.postMessage({ type: EMBED_HEIGHT_REQUEST_TYPE }, CAREER_ORIGIN)
          }, 60)
          setTimeout(() => {
            frameWindow.postMessage({ type: EMBED_HEIGHT_REQUEST_TYPE }, CAREER_ORIGIN)
          }, 180)
          setTimeout(() => {
            frameWindow.postMessage({ type: EMBED_HEIGHT_REQUEST_TYPE }, CAREER_ORIGIN)
          }, 500)
        }}
        scrolling="no"
        loading="lazy"
      />

      {!loaded ? (
        <div className="CareerPage-overlay">
          <p>채용 페이지를 불러오는 중입니다.</p>
        </div>
      ) : null}
    </section>
  )
}
