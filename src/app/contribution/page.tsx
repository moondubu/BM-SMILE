import SubHero from "@/components/SubHero/SubHero"
import ContributionWay from "@/components/ContributionWay/ContributionWay"
import Contribution1004 from "@/components/Contribution1004/Contribution1004"
import AdoptionConnection from "@/components/AdoptionConnection/AdoptionConnection"
import ContributionPrinciples from "@/components/ContributionPrinciples/ContributionPrinciples"
import ImpactSection, { type ImpactSectionMetric } from "@/components/ImpactSection/ImpactSection"
import ContributionConnectProject from "@/components/ContributionConnectProject/ContributionConnectProject"
import "./page.css"

const CONTRIBUTION_IMPACT_DATA: ImpactSectionMetric[] = [
    { label: "누적 기부금", value: "736,682,905+" },
    { label: "마당개 집짓기 프로젝트", value: "총 16호 완공" },
    { label: "입양 연결 성과", value: "30마리+" },
]

export default function ContributionPage() {
    return (
        <div className="ContributionPage">
            <SubHero
                type="image"
                imageSrc="/images/contribution/img_hero_contribution.png"
                tone="light"
                title={`No.1\nCONTRIBUTION`}
                subtext={`비엠스마일은 구조동물들의 삶이 바뀌는 구조를 만들어왔습니다.`}
            />

            <ContributionWay />
            <Contribution1004 />
            <AdoptionConnection />
            <ContributionPrinciples />
            <ImpactSection
                className="ContributionImpact"
                backgroundSrc="/images/contribution/img_contribution_impact_01.png"
                label="Impact"
                title="비엠스마일의 따듯한 성과"
                subTextLines={[
                    "정기적인 기부, 보호소 후원, 봉사활동, 입양 커넥션 등",
                    "비엠스마일은 최선을 다해 구조동물들을 위한 활동을 이어가고 있습니다.",
                ]}
                metrics={CONTRIBUTION_IMPACT_DATA}
                footerText="(2025년 12월 기준)"
            />
            <ContributionConnectProject />
        </div>
    )
}
