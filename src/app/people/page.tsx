import SubHero from "@/components/SubHero/SubHero"
import { MediaSlide, SlideRow, type SlideRowTextPanel } from "@/components/MediaSlide"
import ImpactSection from "@/components/ImpactSection/ImpactSection"
import Contact from "@/components/Contact/Contact"
import CareerBanner from "@/components/CareerBanner/CareerBanner"
import {
  PeopleCultureSection,
  PeoplePagerSection,
  PeopleRecruitSection,
  PeopleSupportSection,
} from "@/components/PeopleSections/PeopleSections"
import { MAIN_PEOPLE_SECTION } from "@/data/mainSections"
import { PEOPLE_HERO, PEOPLE_TEAM_PANEL, PEOPLE_VISION } from "@/data/peopleSections"
import "./page.css"

const PEOPLE_TEAM_TEXT_PANEL: SlideRowTextPanel = {
  label: PEOPLE_TEAM_PANEL.label,
  title: (
    <>
      {PEOPLE_TEAM_PANEL.titleLine1}
      <br />
      {PEOPLE_TEAM_PANEL.titleLine2}
    </>
  ),
  body: PEOPLE_TEAM_PANEL.body.join("\n"),
}

export const metadata = {
  title: "BMSmile | People",
  description: "BMSmile People 페이지",
}

export default function PeoplePage() {
  return (
    <div className="PeoplePage">
      <SubHero
        type="image"
        imageSrc={PEOPLE_HERO.imageSrc}
        tone="dark"
        title={PEOPLE_HERO.title}
        subtext={PEOPLE_HERO.subtext}
      />

      <MediaSlide id="people-team">
        <SlideRow textPanel={PEOPLE_TEAM_TEXT_PANEL} items={MAIN_PEOPLE_SECTION.items} />
      </MediaSlide>

      <ImpactSection
        className="PeopleVision-impact"
        backgroundSrc={PEOPLE_VISION.backgroundSrc}
        label={PEOPLE_VISION.label}
        title={
          <>
            {PEOPLE_VISION.titleLine1}
            <br />
            {PEOPLE_VISION.titleLine2}
          </>
        }
        subTextLines={PEOPLE_VISION.description}
        ctaLabel={PEOPLE_VISION.ctaLabel}
        ctaHref={PEOPLE_VISION.ctaHref}
        headerAlign="left"
      />

      <PeopleCultureSection />
      <PeopleSupportSection />
      <PeopleRecruitSection />
      <CareerBanner />
      <PeoplePagerSection />
      <Contact />
    </div>
  )
}
