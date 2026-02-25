import Hero from "@/components/Hero/Hero"
import { MediaSlide, SlideRow, type SlideRowTextPanel } from "@/components/MediaSlide"
import SectionCardGrid from "@/components/SectionCardGrid/SectionCardGrid"
import EnvironmentCulture from "@/components/EnvironmentCulture/EnvironmentCulture"
import ImpactSection from "@/components/ImpactSection/ImpactSection"
import CareerBanner from "@/components/CareerBanner/CareerBanner"
import PageNavigation from "@/components/PageNavigation/PageNavigation"
import { ENVIRONMENT_SLIDE_ITEMS } from "@/data/mainSections"
import {
  ENVIRONMENT_HERO_VIDEO,
  ENVIRONMENT_IMPACT_TEXT_LINES,
  ENVIRONMENT_OFFICE_PANEL,
  ENVIRONMENT_WORK_LIFE_ITEMS,
} from "@/data/environmentSections"
import "./page.css"

const ENV_OFFICE_TEXT_PANEL: SlideRowTextPanel = {
  label: ENVIRONMENT_OFFICE_PANEL.label,
  title: (
    <>
      {ENVIRONMENT_OFFICE_PANEL.titleLine1}
      <br />
      {ENVIRONMENT_OFFICE_PANEL.titleLine2}
    </>
  ),
  body: ENVIRONMENT_OFFICE_PANEL.body,
}

export const metadata = {
  title: "BMSmile | Environment",
  description: "BMSmile Environment 페이지",
}

export default function EnvironmentPage() {
  return (
    <div className="EnvironmentPage">
      <Hero
        type="video"
        videoPoster={ENVIRONMENT_HERO_VIDEO.poster}
        videoSrcHvc={ENVIRONMENT_HERO_VIDEO.hvc}
        videoSrcH264={ENVIRONMENT_HERO_VIDEO.h264}
        tone="dark"
        title={`NO.1\nENVIRONMENT`}
        subtext="몰입을 만드는 최고의 업무 환경"
      />

      <MediaSlide id="environment-office">
        <SlideRow textPanel={ENV_OFFICE_TEXT_PANEL} items={ENVIRONMENT_SLIDE_ITEMS} />
      </MediaSlide>

      <SectionCardGrid
        className="EnvironmentWorkLife"
        label="Traffic & Location"
        title={
          <>
            최고의 접근성&입지
          </>
        }
        description={
          <>
            지하철 5·9호선 여의도역 3번 출구에서 5분, 여의나루역 1번 출구에서 3분, 아침 출근길의 피로를 최소화합니다.
            <br />
            수도권 전역을 잇는 광역 버스 및 시내 버스 정류장이 오피스 바로 앞에 위치해 있습니다.
          </>
        }
        variant="overlay"
        items={ENVIRONMENT_WORK_LIFE_ITEMS}
      />

      <EnvironmentCulture />

      <ImpactSection
        className="EnvironmentImpact"
        backgroundSrc="/images/environment/img_environment_impact_01.png"
        label="Pet Friendly"
        title={
          <>
            Life-Work Synergy
            <br />
            with Pets
          </>
        }
        subTextLines={ENVIRONMENT_IMPACT_TEXT_LINES}
        headerAlign="left"
      />

      <CareerBanner />
      <PageNavigation
        prev={{ label: "< Prev", href: "/contribution", chipLabel: "No.1 Contribution", chipHref: "/contribution" }}
        next={{ label: "Next >", href: "/pethroom", chipLabel: "No.1 Pet IP", chipHref: "/pethroom" }}
      />
    </div>
  )
}
