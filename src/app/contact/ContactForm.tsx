"use client"

import { FormEvent, useState } from "react"

type ContactFormProps = {
  privacyPolicy: string
}

export default function ContactForm({ privacyPolicy }: ContactFormProps) {
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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
        <pre className="ContactPage-policyText">{privacyPolicy}</pre>
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
