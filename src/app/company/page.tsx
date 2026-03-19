import type { Metadata } from "next"
import SeoGroupLandingRedirect from "@/components/SeoGroupLanding/SeoGroupLandingRedirect"
import SeoGroupLanding from "@/components/SeoGroupLanding/SeoGroupLanding"

export const metadata: Metadata = {
  title: "BMSmile | Company",
  description: "BMSmile Company 메뉴 허브. Environment, People, Strategy, Growth, Contribution, Location 페이지를 연결합니다.",
}

const COMPANY_LINKS = [
  { label: "ENVIRONMENT", href: "/environment", description: "비엠스마일의 업무 환경과 문화, 펫 프렌들리 오피스를 소개합니다." },
  { label: "PEOPLE", href: "/people", description: "비엠스마일 팀과 인재상, 함께 일하는 사람들의 모습을 담았습니다." },
  { label: "STRATEGY", href: "/strategy", description: "비엠스마일의 사업 전략과 성장 방향을 확인할 수 있습니다." },
  { label: "GROWTH", href: "/growth", description: "브랜드와 비즈니스의 성장 지표와 확장 스토리를 보여줍니다." },
  { label: "CONTRIBUTION", href: "/contribution", description: "비엠스마일이 실천하는 사회공헌 프로젝트를 안내합니다." },
  { label: "LOCATION", href: "/location", description: "여의도 오피스 위치와 방문 정보를 제공합니다." },
] as const

export default function CompanyPage() {
  return (
    <>
      <style>{`
        main.main {
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `}</style>
      <SeoGroupLandingRedirect href="/environment" />
      <SeoGroupLanding
        eyebrow="Company"
        title="BMSmile Company"
        description={"비엠스마일의 기업 경쟁력은 환경, 사람, 전략, 성장, 사회공헌, 오피스 경험으로 이어집니다.\n아래 세부 메뉴를 통해 각 영역을 확인할 수 있습니다."}
        links={[...COMPANY_LINKS]}
      />
    </>
  )
}
