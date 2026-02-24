import SubHero from "@/components/SubHero/SubHero"
import ContributionWay from "@/components/ContributionWay/ContributionWay"
import Contribution1004 from "@/components/Contribution1004/Contribution1004"
import AdoptionConnection from "@/components/AdoptionConnection/AdoptionConnection"
import RoadmapSection from "@/components/RoadmapSection/RoadmapSection"
import ImpactSection from "@/components/ImpactSection/ImpactSection"
import ContributionConnectProject from "@/components/ContributionConnectProject/ContributionConnectProject"
import PageNavigation from "@/components/PageNavigation/PageNavigation"
import {
    CONTRIBUTION_HERO,
    CONTRIBUTION_IMPACT,
    CONTRIBUTION_IMPACT_DATA,
    CONTRIBUTION_PRINCIPLES,
} from "@/data/contributionSections"
import "./page.css"

export default function ContributionPage() {
    return (
        <div className="ContributionPage">
            <SubHero
                type="image"
                imageSrc={CONTRIBUTION_HERO.imageSrc}
                tone="light"
                title={CONTRIBUTION_HERO.title}
                subtext={CONTRIBUTION_HERO.subtext}
            />

            <ContributionWay />
            <Contribution1004 />
            <AdoptionConnection />
            <RoadmapSection
                label={CONTRIBUTION_PRINCIPLES.label}
                title={CONTRIBUTION_PRINCIPLES.title}
                items={CONTRIBUTION_PRINCIPLES.items}
            />
            <ImpactSection
                className="ContributionImpact"
                backgroundSrc={CONTRIBUTION_IMPACT.backgroundSrc}
                label={CONTRIBUTION_IMPACT.label}
                title={CONTRIBUTION_IMPACT.title}
                subTextLines={[...CONTRIBUTION_IMPACT.subTextLines]}
                headerAlign="center"
                metrics={CONTRIBUTION_IMPACT_DATA}
            />
            <ContributionConnectProject />
            <PageNavigation
                prev={{ label: "< Prev", href: "/growth", chipLabel: "No.1 Growth", chipHref: "/growth" }}
                next={{ label: "Next >", href: "/environment", chipLabel: "No.1 Environment", chipHref: "/environment" }}
            />
        </div>
    )
}
