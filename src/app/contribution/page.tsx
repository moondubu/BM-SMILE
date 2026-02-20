import SubHero from "@/components/SubHero/SubHero"
import ContributionWay from "@/components/ContributionWay/ContributionWay"
import Contribution1004 from "@/components/Contribution1004/Contribution1004"
import AdoptionConnection from "@/components/AdoptionConnection/AdoptionConnection"
import ContributionPrinciples from "@/components/ContributionPrinciples/ContributionPrinciples"
import ImpactSection from "@/components/ImpactSection/ImpactSection"
import ContributionConnectProject from "@/components/ContributionConnectProject/ContributionConnectProject"
import { CONTRIBUTION_HERO, CONTRIBUTION_IMPACT, CONTRIBUTION_IMPACT_DATA } from "@/data/contributionSections"
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
            <ContributionPrinciples />
            <ImpactSection
                className="ContributionImpact"
                backgroundSrc={CONTRIBUTION_IMPACT.backgroundSrc}
                label={CONTRIBUTION_IMPACT.label}
                title={CONTRIBUTION_IMPACT.title}
                subTextLines={[...CONTRIBUTION_IMPACT.subTextLines]}
                metrics={CONTRIBUTION_IMPACT_DATA}
            />
            <ContributionConnectProject />
        </div>
    )
}
