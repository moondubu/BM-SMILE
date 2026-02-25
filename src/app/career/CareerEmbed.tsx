"use client"

import { useEffect, useState } from "react"

const CAREER_URL = "https://bmsmile.career.greetinghr.com/ko/apply"

export default function CareerEmbed() {
  const [loaded, setLoaded] = useState(false)
  const [frameKey, setFrameKey] = useState(0)

  useEffect(() => {
    document.body.classList.add("CareerPageActive")

    const headerElement = document.querySelector(".Header") as HTMLElement | null
    const footerElement = document.querySelector(".Footer") as HTMLElement | null

    const syncShellHeights = () => {
      const headerHeight = headerElement?.getBoundingClientRect().height ?? 80
      const footerHeight = footerElement?.getBoundingClientRect().height ?? 0
      document.body.style.setProperty("--career-header-height", `${headerHeight}px`)
      document.body.style.setProperty("--career-footer-height", `${footerHeight}px`)
    }

    const resizeObserver = new ResizeObserver(() => {
      syncShellHeights()
    })

    if (headerElement != null) resizeObserver.observe(headerElement)
    if (footerElement != null) resizeObserver.observe(footerElement)

    syncShellHeights()
    window.addEventListener("resize", syncShellHeights)

    const resetCareerIframe = () => {
      setLoaded(false)
      setFrameKey((prev) => prev + 1)
    }
    window.addEventListener("career:reset-iframe", resetCareerIframe)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", syncShellHeights)
      window.removeEventListener("career:reset-iframe", resetCareerIframe)
      document.body.classList.remove("CareerPageActive")
      document.body.style.removeProperty("--career-header-height")
      document.body.style.removeProperty("--career-footer-height")
    }
  }, [])

  return (
    <section className="CareerPage">
      <div className="CareerPage-embedBox">
        <iframe
          key={frameKey}
          src={CAREER_URL}
          title="BMSmile Career"
          className="CareerPage-iframe"
          onLoad={() => setLoaded(true)}
          loading="lazy"
        />

        {!loaded ? (
          <div className="CareerPage-overlay">
            <p>채용 페이지를 불러오는 중입니다.</p>
          </div>
        ) : null}
      </div>
    </section>
  )
}
