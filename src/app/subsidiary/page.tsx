import ContactBanner from "@/components/ContactBanner/ContactBanner"
import SectionCardGrid from "@/components/SectionCardGrid/SectionCardGrid"
import SubsidiarySlideSection from "@/components/SubsidiarySlideSection/SubsidiarySlideSection"
import Hero from "@/components/Hero/Hero"
import {
  SUBSIDIARY_CORE,
  SUBSIDIARY_HERO,
  SUBSIDIARY_HUMAN_IP,
  SUBSIDIARY_IP_EXPANSION,
  SUBSIDIARY_VIRTUAL_IP,
} from "@/data/subsidiarySections"
import "./page.css"

export const metadata = {
  title: "BMSmile | Subsidiary",
  description: "BMSmile Subsidiary 페이지",
}

export default function SubsidiaryPage() {
  return (
    <div className="SubsidiaryPage">
      <Hero
        className="SubsidiaryHero"
        type="image"
        imageSrc={SUBSIDIARY_HERO.imageSrc}
        tone="dark"
        title={SUBSIDIARY_HERO.title}
        subtext={SUBSIDIARY_HERO.subtext}
      />

      <SubsidiarySlideSection
        className="SubsidiaryCore"
        heading={SUBSIDIARY_CORE.heading}
        description={SUBSIDIARY_CORE.description}
        items={SUBSIDIARY_CORE.items}
      />

      <SectionCardGrid
        className="SubsidiaryIpExpansion"
        label={SUBSIDIARY_IP_EXPANSION.label}
        title={SUBSIDIARY_IP_EXPANSION.title}
        description={SUBSIDIARY_IP_EXPANSION.description}
        variant="plain"
        items={[...SUBSIDIARY_IP_EXPANSION.items]}
      />

      <SubsidiarySlideSection
        className="SubsidiaryVirtualIp"
        heading={SUBSIDIARY_VIRTUAL_IP.heading}
        description={SUBSIDIARY_VIRTUAL_IP.description}
        items={SUBSIDIARY_VIRTUAL_IP.items}
      />

      <SubsidiarySlideSection
        className="SubsidiaryHumanIp"
        heading={SUBSIDIARY_HUMAN_IP.heading}
        description={SUBSIDIARY_HUMAN_IP.description}
        items={SUBSIDIARY_HUMAN_IP.items}
      />

      <ContactBanner />
    </div>
  )
}
