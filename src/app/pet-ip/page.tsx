import type { Metadata } from "next"
import SeoGroupLandingRedirect from "@/components/SeoGroupLanding/SeoGroupLandingRedirect"
import SeoGroupLanding from "@/components/SeoGroupLanding/SeoGroupLanding"

export const metadata: Metadata = {
  title: "BMSmile | Pet IP",
  description: "BMSmile Pet IP 메뉴 허브. Pethroom과 Pethroom Friends 페이지를 연결합니다.",
}

const PET_IP_LINKS = [
  { label: "PETHROOM", href: "/pethroom", description: "국내 1위 반려동물 IP 페스룸의 브랜드와 제품 경험을 소개합니다." },
  { label: "PETHROOM FRIENDS", href: "/pethroom-friends", description: "페스룸 프렌즈 플랫폼과 서비스 확장 방향을 확인할 수 있습니다." },
] as const

export default function PetIpPage() {
  return (
    <>
      <style>{`
        main.main {
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `}</style>
      <SeoGroupLandingRedirect href="/pethroom" />
      <SeoGroupLanding
        eyebrow="Pet IP"
        title="BMSmile Pet IP"
        description={"비엠스마일의 펫 IP 포트폴리오는 페스룸 브랜드와 플랫폼 확장으로 구성됩니다.\n아래 세부 메뉴를 통해 각 서비스를 바로 확인할 수 있습니다."}
        links={[...PET_IP_LINKS]}
      />
    </>
  )
}
