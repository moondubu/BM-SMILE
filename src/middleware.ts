import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// 1. 레거시 URL 매핑 정보 (301 리다이렉트용)
const REDIRECT_MAP: Record<string, string> = {
  "/company/location.html": "/location/",
  "/business/ip-virtual.html": "/subsidiary/",
  "/business/ip-human.html": "/subsidiary/",
  "/board/gallery/value.html": "/contribution/",
  "/career/culture.html": "/environment/",
  "/culture/life.html": "/environment/",
  "/board/consult/contact.html": "/contact/",
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // 1. 명시적 매핑 매칭
  if (REDIRECT_MAP[pathname]) {
    const url = new URL(REDIRECT_MAP[pathname], request.url)
    url.search = "" // 쿼리 파라미터(?board_no=... 등)를 완전히 제거
    return NextResponse.redirect(url, 301)
  }

  // 2. company 레거시 경로는 location만 예외로 두고 strategy로 통합
  if (pathname.startsWith("/company/")) {
    const url = new URL("/strategy/", request.url)
    url.search = ""
    return NextResponse.redirect(url, 301)
  }

  // 3. 나머지 레거시 디렉토리 Fallback (패턴 매칭)
  const legacyDirectories = ["/business/", "/board/"]
  if (legacyDirectories.some((dir) => pathname.startsWith(dir))) {
    const url = new URL("/", request.url)
    url.search = "" // 쿼리 파라미터 제거 후 홈으로 리다이렉트
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

// 4. 미들웨어가 실행될 경로 최적화 (레거시 경로들만 가로챔)
export const config = {
  matcher: [
    "/company/:path*",
    "/business/:path*",
    "/board/:path*",
    "/career/:path*",
    "/culture/:path*",
  ],
}
