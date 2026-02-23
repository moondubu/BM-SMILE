import ImpactSection from "@/components/ImpactSection/ImpactSection"
import RoadmapSection from "@/components/RoadmapSection/RoadmapSection"
import StrategySectionHeader from "@/components/StrategySectionHeader/StrategySectionHeader"
import {
  STRATEGY_DOMESTIC_HEADER,
  STRATEGY_DOMESTIC_IMPACT,
  STRATEGY_DOMESTIC_IMPACT_DATA,
  STRATEGY_DOMESTIC_ROADMAP,
} from "@/data/strategySections"
import { prefixPath } from "@/utils/path"
import "./StrategyDomestic.css"

export default function StrategyDomestic() {
  const impactTitleLines = STRATEGY_DOMESTIC_IMPACT.title.split("\n")

  return (
    <section className="StrategyDomestic">
      <div className="StrategyDomestic-darkBlock">
        <div className="StrategyDomestic-bg">
          <img src={prefixPath(STRATEGY_DOMESTIC_HEADER.backgroundSrc)} alt="" aria-hidden="true" />
        </div>

        <div className="StrategyDomestic-inner">
          <StrategySectionHeader
            label={STRATEGY_DOMESTIC_HEADER.label}
            title={STRATEGY_DOMESTIC_HEADER.title}
            description={STRATEGY_DOMESTIC_HEADER.description}
            pillars={STRATEGY_DOMESTIC_HEADER.pillars}
          />
        </div>
      </div>

      <RoadmapSection
        className="StrategyDomestic-roadmapSection"
        label={STRATEGY_DOMESTIC_ROADMAP.label}
        title={STRATEGY_DOMESTIC_ROADMAP.title}
        description={STRATEGY_DOMESTIC_ROADMAP.description}
        items={STRATEGY_DOMESTIC_ROADMAP.items}
      />

      <ImpactSection
        className="StrategyDomestic-impactSection"
        backgroundSrc={STRATEGY_DOMESTIC_IMPACT.backgroundSrc}
        label={STRATEGY_DOMESTIC_IMPACT.label}
        title={
          <>
            {impactTitleLines[0]}
            <br />
            {impactTitleLines[1]}
          </>
        }
        subTextLines={[...STRATEGY_DOMESTIC_IMPACT.subTextLines]}
        headerAlign="left"
        metrics={STRATEGY_DOMESTIC_IMPACT_DATA}
      />
    </section>
  )
}
