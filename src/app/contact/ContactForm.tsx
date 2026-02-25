"use client"

import { FormEvent, type MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from "react"

type ContactFormProps = {
  privacyPolicy: string
}

export default function ContactForm({ privacyPolicy }: ContactFormProps) {
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const policyScrollRef = useRef<HTMLDivElement | null>(null)
  const [policyThumbHeight, setPolicyThumbHeight] = useState(40)
  const [policyThumbTop, setPolicyThumbTop] = useState(0)
  const [hasPolicyOverflow, setHasPolicyOverflow] = useState(false)
  const isDraggingPolicyThumbRef = useRef(false)
  const policyThumbDragStartYRef = useRef(0)
  const policyThumbDragStartScrollTopRef = useRef(0)

  const syncPolicyScrollbar = () => {
    const scrollElement = policyScrollRef.current
    if (scrollElement == null) return

    const viewportHeight = scrollElement.clientHeight
    const contentHeight = scrollElement.scrollHeight
    const maxScrollTop = contentHeight - viewportHeight

    if (maxScrollTop <= 0) {
      setHasPolicyOverflow(false)
      setPolicyThumbTop(0)
      setPolicyThumbHeight(40)
      return
    }

    const minThumbHeight = 40
    const thumbHeight = Math.max((viewportHeight / contentHeight) * viewportHeight, minThumbHeight)
    const thumbTop = (scrollElement.scrollTop / maxScrollTop) * (viewportHeight - thumbHeight)

    setHasPolicyOverflow(true)
    setPolicyThumbHeight(thumbHeight)
    setPolicyThumbTop(thumbTop)
  }

  useEffect(() => {
    syncPolicyScrollbar()
    window.addEventListener("resize", syncPolicyScrollbar)
    return () => {
      window.removeEventListener("resize", syncPolicyScrollbar)
    }
  }, [privacyPolicy])

  useEffect(() => {
    const onWindowMouseMove = (event: MouseEvent) => {
      if (!isDraggingPolicyThumbRef.current) return

      const scrollElement = policyScrollRef.current
      if (scrollElement == null) return

      const viewportHeight = scrollElement.clientHeight
      const contentHeight = scrollElement.scrollHeight
      const maxScrollTop = contentHeight - viewportHeight
      const trackMovableHeight = viewportHeight - policyThumbHeight

      if (maxScrollTop <= 0 || trackMovableHeight <= 0) return

      const deltaY = event.clientY - policyThumbDragStartYRef.current
      const nextScrollTop =
        policyThumbDragStartScrollTopRef.current + (deltaY / trackMovableHeight) * maxScrollTop

      scrollElement.scrollTop = Math.min(maxScrollTop, Math.max(0, nextScrollTop))
    }

    const onWindowMouseUp = () => {
      isDraggingPolicyThumbRef.current = false
    }

    window.addEventListener("mousemove", onWindowMouseMove)
    window.addEventListener("mouseup", onWindowMouseUp)
    return () => {
      window.removeEventListener("mousemove", onWindowMouseMove)
      window.removeEventListener("mouseup", onWindowMouseUp)
    }
  }, [policyThumbHeight])

  const onPolicyThumbMouseDown = (event: ReactMouseEvent<HTMLSpanElement>) => {
    const scrollElement = policyScrollRef.current
    if (scrollElement == null) return

    event.preventDefault()
    isDraggingPolicyThumbRef.current = true
    policyThumbDragStartYRef.current = event.clientY
    policyThumbDragStartScrollTopRef.current = scrollElement.scrollTop
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (email.trim() === "" || subject.trim() === "" || content.trim() === "") {
      alert("이메일, 제목, 내용을 모두 입력해주세요.")
      return
    }

    if (!consent) {
      alert("개인정보처리방침 동의가 필요합니다.")
      return
    }

    try {
      setIsSubmitting(true)

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          subject: subject.trim(),
          content: content.trim(),
        }),
      })

      const result = (await response.json().catch(() => ({}))) as { message?: string }

      if (!response.ok) {
        alert(result.message ?? "문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요.")
        return
      }

      alert("문의가 정상적으로 접수되었습니다.")
      setEmail("")
      setSubject("")
      setContent("")
      setConsent(false)
    } catch {
      alert("문의 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="ContactPage-form" onSubmit={onSubmit}>
      <input
        type="email"
        className="ContactPage-input"
        placeholder="이메일을 입력해주세요."
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="text"
        className="ContactPage-input"
        placeholder="제목을 입력해주세요."
        value={subject}
        onChange={(event) => setSubject(event.target.value)}
      />
      <textarea
        className="ContactPage-textarea"
        placeholder="내용을 입력해주세요."
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />

      <div className="ContactPage-policyBox" role="region" aria-label="개인정보처리방침">
        <div className="ContactPage-policyScroll" ref={policyScrollRef} onScroll={syncPolicyScrollbar}>
          <pre className="ContactPage-policyText">{privacyPolicy}</pre>
        </div>
        {hasPolicyOverflow ? (
          <div className="ContactPage-policyScrollbar" aria-hidden="true">
            <span
              className="ContactPage-policyScrollbarThumb"
              onMouseDown={onPolicyThumbMouseDown}
              style={{ height: `${policyThumbHeight}px`, transform: `translateY(${policyThumbTop}px)` }}
            />
          </div>
        ) : null}
      </div>

      <div className="ContactPage-submitRow">
        <label className="ContactPage-consent">
          <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} />
          <span className="ContactPage-consentTitle">개인정보처리방침 동의</span>
          <span className="ContactPage-consentDescription">개인정보 수집 및 이용에 동의합니다.</span>
        </label>

        <button type="submit" className="ContactPage-submitButton" disabled={isSubmitting}>
          {isSubmitting ? "전송중..." : "작성하기"}
        </button>
      </div>
    </form>
  )
}
