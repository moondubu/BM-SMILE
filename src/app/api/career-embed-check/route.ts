import { NextResponse } from "next/server"

export const runtime = "nodejs"

const CAREER_URL = "https://bmsmile.career.greetinghr.com/ko/apply"

const parseFrameAncestors = (contentSecurityPolicy: string) => {
  const directives = contentSecurityPolicy.split(";").map((directive) => directive.trim()).filter(Boolean)
  const frameAncestorsDirective = directives.find((directive) => directive.toLowerCase().startsWith("frame-ancestors"))
  if (frameAncestorsDirective == null) return null
  return frameAncestorsDirective
}

export async function GET() {
  try {
    const response = await fetch(CAREER_URL, {
      method: "GET",
      redirect: "follow",
      cache: "no-store",
    })

    const xFrameOptions = response.headers.get("x-frame-options") ?? ""
    const contentSecurityPolicy = response.headers.get("content-security-policy") ?? ""
    const frameAncestors = parseFrameAncestors(contentSecurityPolicy)
    const reasons: string[] = []
    const normalizedXFrameOptions = xFrameOptions.toLowerCase()

    if (normalizedXFrameOptions.includes("deny")) {
      reasons.push("X-Frame-Options가 DENY로 설정되어 iframe 임베드가 차단됩니다.")
    } else if (normalizedXFrameOptions.includes("sameorigin")) {
      reasons.push("X-Frame-Options가 SAMEORIGIN이라 다른 도메인에서 iframe 임베드가 차단됩니다.")
    }

    if (frameAncestors != null) {
      const normalizedFrameAncestors = frameAncestors.toLowerCase()
      if (normalizedFrameAncestors.includes("'none'")) {
        reasons.push("CSP frame-ancestors가 'none'으로 설정되어 임베드가 차단됩니다.")
      } else if (normalizedFrameAncestors.includes("'self'")) {
        reasons.push("CSP frame-ancestors가 'self'로 제한되어 교차 도메인 임베드가 차단될 수 있습니다.")
      } else {
        reasons.push(`CSP frame-ancestors 제한이 감지되었습니다. (${frameAncestors})`)
      }
    }

    if (!response.ok) {
      reasons.push(`채용 페이지 응답 상태가 ${response.status}로 확인되었습니다.`)
    }

    return NextResponse.json({
      ok: true,
      embeddable: reasons.length === 0,
      reasons,
      inspected: {
        xFrameOptions: xFrameOptions || null,
        frameAncestors: frameAncestors || null,
      },
      url: CAREER_URL,
    })
  } catch {
    return NextResponse.json(
      {
        ok: true,
        embeddable: false,
        reasons: ["채용 도메인 연결 확인 중 네트워크 오류가 발생했습니다."],
        inspected: {
          xFrameOptions: null,
          frameAncestors: null,
        },
        url: CAREER_URL,
      },
      { status: 200 },
    )
  }
}
