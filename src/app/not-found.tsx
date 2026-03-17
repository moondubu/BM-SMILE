import { redirect } from "next/navigation"

export default function NotFound() {
  // 정의되지 않은 모든 경로는 홈으로 리다이렉트
  redirect("/")
}
