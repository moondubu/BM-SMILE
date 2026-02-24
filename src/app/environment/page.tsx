import SubHero from "@/components/SubHero/SubHero"
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
      <SubHero
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
        label="Work-Life Balance"
        title={
          <>
            휴식과 즐거움이
            <br />
            함께하는 공간
          </>
        }
        description="트렌드의 중심지에서 누리는 여유"
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
