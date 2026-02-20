import { prefixPath } from "@/utils/path"
import Hero from "@/components/Hero/Hero"
import ContributionWay from "@/components/ContributionWay/ContributionWay"
import Contribution1004 from "@/components/Contribution1004/Contribution1004"
import AdoptionConnection from "@/components/AdoptionConnection/AdoptionConnection"
import ContributionPrinciples from "@/components/ContributionPrinciples/ContributionPrinciples"
import ContributionImpact from "@/components/ContributionImpact/ContributionImpact"

export default function ContributionPage() {
    return (
        <div className="ContributionPage">
            <Hero
                type="image"
                imageSrc={prefixPath("/images/contribution/img_hero_contribution.png")}
                isLight={true}
                title={`No.1\nCONTRIBUTION`}
                subtext={`비엠스마일은 구조동물들의 삶이 바뀌는 구조를 만들어왔습니다.`}
            />

            <ContributionWay />
            <Contribution1004 />
            <AdoptionConnection />
            <ContributionPrinciples />
            <ContributionImpact />
        </div>
    )
}
