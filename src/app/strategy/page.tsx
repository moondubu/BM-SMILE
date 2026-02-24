import ContactBanner from "@/components/ContactBanner/ContactBanner"
import PageNavigation from "@/components/PageNavigation/PageNavigation"
import StrategyDomestic from "@/components/StrategyDomestic/StrategyDomestic"
import StrategyGlobal from "@/components/StrategyGlobal/StrategyGlobal"
import StrategyPetPlatform from "@/components/StrategyPetPlatform/StrategyPetPlatform"
import SubHero from "@/components/SubHero/SubHero"
import { STRATEGY_HERO } from "@/data/strategySections"
import "./page.css"

export const metadata = {
  title: "BMSmile | Strategy",
  description: "BMSmile Strategy 페이지",
}

export default function StrategyPage() {
  return (
    <div className="StrategyPage">
      <SubHero
        type="image"
        imageSrc={STRATEGY_HERO.imageSrc}
        tone="dark"
        title={STRATEGY_HERO.title}
        subtext={STRATEGY_HERO.subtext}
      />
      <StrategyGlobal />
      <StrategyDomestic />
      <StrategyPetPlatform />
      <ContactBanner />
      <PageNavigation
        prev={{ label: "< Prev", href: "/people", chipLabel: "No.1 People", chipHref: "/people" }}
        next={{ label: "Next >", href: "/growth", chipLabel: "No.1 Growth", chipHref: "/growth" }}
      />
    </div>
  )
}
