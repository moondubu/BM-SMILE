import ImpactSection from "@/components/ImpactSection/ImpactSection"
import { MediaSlide, SlideRow, type SlideRowTextPanel } from "@/components/MediaSlide"
import PageNavigation from "@/components/PageNavigation/PageNavigation"
import PethroomBannerSection from "@/components/PethroomBannerSection/PethroomBannerSection"
import PethroomScaleSection from "@/components/PethroomScaleSection/PethroomScaleSection"
import PethroomUniverseSection from "@/components/PethroomUniverseSection/PethroomUniverseSection"
import SectionCardGrid from "@/components/SectionCardGrid/SectionCardGrid"
import SplitIntroSection from "@/components/SplitIntroSection/SplitIntroSection"
import Hero from "@/components/Hero/Hero"
import {
  PETHROOM_ARCHIVE_ITEMS,
  PETHROOM_BANNERS,
  PETHROOM_BESTSELLER_PRODUCTS,
  PETHROOM_BESTSELLER_SECTION,
  PETHROOM_HERO,
  PETHROOM_IMPACT,
  PETHROOM_OVERVIEW,
  PETHROOM_SCALE_ITEMS,
  PETHROOM_STRENGTH_ITEMS,
  PETHROOM_UNIVERSE,
} from "@/data/pethroomSections"
import { prefixPath } from "@/utils/path"
import { Fragment } from "react"
import "./page.css"

export const metadata = {
  title: "BMSmile | Pethroom",
  description: "BMSmile Pethroom 페이지",
}

const PETHROOM_BESTSELLER_TEXT_PANEL: SlideRowTextPanel = {
  label: PETHROOM_BESTSELLER_SECTION.label,
  title: PETHROOM_BESTSELLER_SECTION.title.split("\n").map((line, index, lines) => (
    <Fragment key={line}>
      {line}
      {index < lines.length - 1 ? <br /> : null}
    </Fragment>
  )),
  body: PETHROOM_BESTSELLER_SECTION.description,
}

const buildPethroomProductLink = (productNo: number) =>
  `https://pethroom.com/product/detail.html?product_no=${productNo}&cate_no=111&display_group=1`

const PETHROOM_IMPACT_MOBILE_LOGOS = [
  "/images/pethroom/img_pethroom_award_01_mo.png",
  "/images/pethroom/img_pethroom_award_02_mo.png",
  "/images/pethroom/img_pethroom_award_03_mo.png",
  "/images/pethroom/img_pethroom_award_04_mo.png",
] as const

export default function PethroomPage() {
  return (
    <div className="PethroomPage">
      <Hero
        className="PethroomHero"
        type="image"
        imageSrc={PETHROOM_HERO.imageSrc}
        mobileImageSrc="/images/pethroom/img_pethroom_hero_mo.png"
        tone="dark"
        title={PETHROOM_HERO.title}
        subtext={PETHROOM_HERO.subtext}
      />

      <SplitIntroSection
        className="PethroomOverview"
        label={PETHROOM_OVERVIEW.label}
        title={PETHROOM_OVERVIEW.title}
        description={PETHROOM_OVERVIEW.description}
        imageSrc={PETHROOM_OVERVIEW.imageSrc}
        mobileImageSrc="/images/pethroom/img_pethroom_oveview_01_mo.png"
        imageAlt={PETHROOM_OVERVIEW.imageAlt}
        ctaLabel={PETHROOM_OVERVIEW.ctaLabel}
        ctaHref={PETHROOM_OVERVIEW.ctaHref}
      />

      <PethroomScaleSection
        label="No.1 Pet IP"
        title="국내 1위 반려동물 IP"
        description={"제품 중심 개발과 강력한 콘텐츠 브랜딩으로\n국내 인지도 1위 프리미엄 펫 IP 포지셔닝을 구축하였습니다."}
        statItems={PETHROOM_SCALE_ITEMS}
        strengthItems={PETHROOM_STRENGTH_ITEMS}
      />

      {PETHROOM_BANNERS.map((banner) => (
        <PethroomBannerSection
          key={banner.key}
          className="PethroomBanner"
          imageSrc={banner.imageSrc}
          imageAlt={banner.imageAlt}
          videoPoster={banner.videoPoster}
          videoSrcHvc={banner.videoSrcHvc}
          videoSrcH264={banner.videoSrcH264}
          title={banner.title}
          description={banner.description}
        />
      ))}

      <ImpactSection
        className="PethroomImpact"
        backgroundSrc={PETHROOM_IMPACT.backgroundSrc}
        backgroundAlt={PETHROOM_IMPACT.backgroundAlt}
        label={PETHROOM_IMPACT.label}
        title={PETHROOM_IMPACT.title}
        subText={
          <>
            페스룸은 펫 휴머나이제이션을 기반으로,
            <br />
            사람이 아닌 반려동물의 시선과 인지 특성에서
            <br className="PethroomImpact-subTextBreakMobileOnly" />
            출발해 제품을 설계합니다.
            <br />
            <br className="PethroomImpact-subTextBreakMobileOnly" />
            반려동물의 색각 특성을 고려한
            <br className="PethroomImpact-subTextBreakMobileOnly" />
            블루 & 옐로우 컬러 시스템을 적용해
            <br />
            기능성과 직관성을 동시에 만족하는
            <br className="PethroomImpact-subTextBreakMobileOnly" />
            제품 경험을 제공합니다.
          </>
        }
        metricsCaption={PETHROOM_IMPACT.metricsCaption}
        metricsDescriptionLines={PETHROOM_IMPACT.metricsDescriptionLines}
        metrics={[...PETHROOM_IMPACT.metrics]}
      />

      <section className="PethroomImpactAwardsMobile">
        <div className="PethroomImpactAwardsMobile-inner">
          <header className="PethroomImpactAwardsMobile-header">
            <h3 className="PethroomImpactAwardsMobile-title">
              “{PETHROOM_IMPACT.metricsCaption}”
            </h3>
            <div className="PethroomImpactAwardsMobile-description">
              {PETHROOM_IMPACT.metricsDescriptionLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </header>

          <div className="PethroomImpactAwardsMobile-grid">
            {PETHROOM_IMPACT.metrics.map((item, index) => (
              <article key={item.label} className="PethroomImpactAwardsMobile-item">
                <div className="PethroomImpactAwardsMobile-logoWrap">
                  {PETHROOM_IMPACT_MOBILE_LOGOS[index] ? (
                    <img
                      src={prefixPath(PETHROOM_IMPACT_MOBILE_LOGOS[index])}
                      alt={item.logoAlt ?? item.label}
                      className="PethroomImpactAwardsMobile-logo"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : null}
                </div>
                <p className="PethroomImpactAwardsMobile-text">
                  {item.label}
                  {"\n"}
                  {item.subText ?? ""}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <MediaSlide id={PETHROOM_BESTSELLER_SECTION.id}>
        <SlideRow
          linkWholeCard
          textPanel={PETHROOM_BESTSELLER_TEXT_PANEL}
          items={PETHROOM_BESTSELLER_PRODUCTS.map((item) => ({
            imageSrc: item.imageSrc,
            imageAlt: item.imageAlt,
            caption: item.title,
            showActionIcon: true,
            actionHref: buildPethroomProductLink(item.productNo),
          }))}
        />
      </MediaSlide>

      <SectionCardGrid
        className="PethroomArchive"
        label="Archive"
        title="페스룸 디자인"
        description="페스룸의 펫 휴머나이제이션 철학이 담긴 디자인 아카이브"
        variant="overlay"
        items={[...PETHROOM_ARCHIVE_ITEMS]}
      />

      <PethroomUniverseSection
        className="PethroomUniverse"
        label={PETHROOM_UNIVERSE.label}
        title={PETHROOM_UNIVERSE.title}
        description={PETHROOM_UNIVERSE.description}
        items={PETHROOM_UNIVERSE.items}
      />

      <PageNavigation
        prev={{ label: "< Prev", href: "/environment", chipLabel: "No.1 Environment", chipHref: "/environment" }}
        next={{ label: "Next >", href: "/pethroom-friends", chipLabel: "No.1 Platform", chipHref: "/pethroom-friends" }}
      />
    </div>
  )
}
