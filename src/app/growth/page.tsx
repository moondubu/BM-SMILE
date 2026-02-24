import SubHero from "@/components/SubHero/SubHero"
import ContactBanner from "@/components/ContactBanner/ContactBanner"
import ImpactSection from "@/components/ImpactSection/ImpactSection"
import PageNavigation from "@/components/PageNavigation/PageNavigation"
import SectionCardGrid from "@/components/SectionCardGrid/SectionCardGrid"
import GrowthOverview from "@/components/GrowthOverview/GrowthOverview"
import {
  GROWTH_GLOBAL_STATS,
  GROWTH_GOAL_ITEMS,
  GROWTH_GOAL_SECTION,
  GROWTH_HERO,
  GROWTH_IMPACT,
} from "@/data/growthSections"
import "./page.css"

export const metadata = {
  title: "BMSmile | Growth",
  description: "BMSmile Growth 페이지",
}

export default function GrowthPage() {
  return (
    <div className="GrowthPage">
      <SubHero
        type="image"
        imageSrc={GROWTH_HERO.imageSrc}
        tone="dark"
        title={GROWTH_HERO.title}
        subtext={GROWTH_HERO.subtext}
      />

      <GrowthOverview />
      <ImpactSection
        className="GrowthImpact"
        backgroundSrc={GROWTH_IMPACT.backgroundSrc}
        label={GROWTH_IMPACT.label}
        title={
          <>
            {GROWTH_IMPACT.titleLine1}
            <br />
            {GROWTH_IMPACT.titleLine2}
          </>
        }
        subTextLines={[...GROWTH_IMPACT.subTextLines]}
        headerAlign="left"
        metrics={GROWTH_GLOBAL_STATS}
      />
      <SectionCardGrid
        className="GrowthGoals"
        label={GROWTH_GOAL_SECTION.label}
        title={GROWTH_GOAL_SECTION.title}
        description={
          <>
            {GROWTH_GOAL_SECTION.descriptionLine1}
            <br />
            {GROWTH_GOAL_SECTION.descriptionLine2}
          </>
        }
        caption={GROWTH_GOAL_SECTION.caption}
        items={GROWTH_GOAL_ITEMS}
      />

      <ContactBanner />
      <PageNavigation
        prev={{ label: "< Prev", href: "/strategy", chipLabel: "No.1 Strategy", chipHref: "/strategy" }}
        next={{ label: "Next >", href: "/contribution", chipLabel: "No.1 Contribution", chipHref: "/contribution" }}
      />
    </div>
  )
}
