import { NextResponse } from "next/server"
import { Resend } from "resend"

export const runtime = "nodejs"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type ContactPayload = {
  email?: string
  subject?: string
  content?: string
}

export async function POST(request: Request) {
  try {
    const { email, subject, content } = (await request.json()) as ContactPayload

    const senderEmail = email?.trim() ?? ""
    const senderSubject = subject?.trim() ?? ""
    const senderContent = content?.trim() ?? ""

    if (senderEmail === "" || senderSubject === "" || senderContent === "") {
      return NextResponse.json({ message: "이메일, 제목, 내용을 모두 입력해주세요." }, { status: 400 })
    }

    if (!EMAIL_REGEX.test(senderEmail)) {
      return NextResponse.json({ message: "올바른 이메일 형식이 아닙니다." }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (apiKey == null || apiKey.trim() === "") {
      return NextResponse.json({ message: "메일 서버 설정이 누락되었습니다." }, { status: 500 })
    }

    const resend = new Resend(apiKey)

    const result = await resend.emails.send({
      from: process.env.RESEND_FROM ?? "onboarding@resend.dev",
      to: process.env.CONTACT_TO ?? "tmdgns0806@artshare.kr",
      replyTo: senderEmail,
      subject: `[Contact] ${senderSubject}`,
      text: `발신자 이메일: ${senderEmail}\n\n${senderContent}`,
    })

    if (result.error != null) {
      return NextResponse.json({ message: result.error.message ?? "메일 전송에 실패했습니다." }, { status: 500 })
    }

    return NextResponse.json({ ok: true, id: result.data?.id ?? null })
  } catch {
    return NextResponse.json({ message: "메일 전송 중 오류가 발생했습니다." }, { status: 500 })
  }
}
