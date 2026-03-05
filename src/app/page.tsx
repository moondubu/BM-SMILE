import "./page.css"
import Hero from "@/components/Hero/Hero"
import Slogan from "@/components/Slogan/Slogan"
import MediaSlide from "@/components/MediaSlide/MediaSlide"
import { SlideRow } from "@/components/MediaSlide"
import SectionTextPanel from "@/components/MediaSlide/SectionTextPanel/SectionTextPanel"
import Friends from "@/components/Friends/Friends"
import Strategy from "@/components/Strategy/Strategy"
import Growth from "@/components/Growth/Growth"
import ContactBanner from "@/components/ContactBanner/ContactBanner"
import {
  ENVIRONMENT_SLIDE_ITEMS,
  MAIN_CONTRIBUTION_SECTION,
  MAIN_ENVIRONMENT_SECTION,
  MAIN_HERO_VIDEO,
  MAIN_IP_SECTION,
  MAIN_PEOPLE_SECTION,
} from "@/data/mainSections"

export default function Home() {
  return (
    <>
      <Hero
        type="video"
        videoPoster={MAIN_HERO_VIDEO.poster}
        videoSrcHvc={MAIN_HERO_VIDEO.hvc}
        videoSrcH264={MAIN_HERO_VIDEO.h264}
        mobileVideoSrcHvc={MAIN_HERO_VIDEO.mobileHvc}
        mobileVideoSrcH264={MAIN_HERO_VIDEO.mobileH264}
      />

      <Slogan />

      <MediaSlide
        id={MAIN_ENVIRONMENT_SECTION.id}
        videoPoster={MAIN_ENVIRONMENT_SECTION.videoPoster}
        videoSrcHvc={MAIN_ENVIRONMENT_SECTION.videoSrcHvc}
        videoSrcH264={MAIN_ENVIRONMENT_SECTION.videoSrcH264}
        number={MAIN_ENVIRONMENT_SECTION.number}
        title={
          <>
            {MAIN_ENVIRONMENT_SECTION.titleLine1}
            <br />
            {MAIN_ENVIRONMENT_SECTION.titleLine2}
          </>
        }
        mediaAspectRatio={MAIN_ENVIRONMENT_SECTION.mediaAspectRatio}
      >
        <SlideRow
          mobileSlidesPerView={1.2}
          textPanel={{
            label: MAIN_ENVIRONMENT_SECTION.panelLabel,
            title: (
              <>
                {MAIN_ENVIRONMENT_SECTION.panelTitleLine1}
                <br />
                {MAIN_ENVIRONMENT_SECTION.panelTitleLine2}
              </>
            ),
            body: MAIN_ENVIRONMENT_SECTION.panelBody,
            ctaLabel: MAIN_ENVIRONMENT_SECTION.panelCtaLabel,
            ctaHref: MAIN_ENVIRONMENT_SECTION.panelCtaHref,
          }}
          items={ENVIRONMENT_SLIDE_ITEMS}
        />
      </MediaSlide>

      <MediaSlide
        id={MAIN_IP_SECTION.id}
        imageSrc={MAIN_IP_SECTION.imageSrc}
        mobileImageSrc={MAIN_IP_SECTION.mobileImageSrc}
        imageAlt={MAIN_IP_SECTION.imageAlt}
        number={MAIN_IP_SECTION.number}
        title={
          <>
            {MAIN_IP_SECTION.titleLine1}
            <br />
            {MAIN_IP_SECTION.titleLine2}
          </>
        }
        overlay
      >
        <div className="MediaSlide-overlayInner">
          <div className="MediaSlide-overlayHead SectionHead">
            <span className="SectionNumber">{MAIN_IP_SECTION.number}</span>
            <h2 className="MediaSlide-overlayTitle SectionTitle">
              {MAIN_IP_SECTION.titleLine1}
              <br />
              {MAIN_IP_SECTION.titleLine2}
            </h2>
          </div>
          <SectionTextPanel
            label={MAIN_IP_SECTION.panelLabel}
            title={
              <>
                {MAIN_IP_SECTION.panelTitleLine1}
                <br />
                {MAIN_IP_SECTION.panelTitleLine2}
              </>
            }
            body={(
              <p className="SectionTextPanel-body IpBody">
                페스룸은 국내에서 가장 빠르고 안정적으로
                <br className="IpBodyBreak" />
                성장해 온 반려동물 중심 IP입니다.
                <br />
                <br />
                연 매출 500억 원을 돌파하며,
                <br className="IpBodyBreak" />
                자사몰·오픈마켓·글로벌 커머스 전 채널에서
                <br />
                제품 경쟁력과 콘텐츠 브랜딩 역량을 확장하고 있습니다.
                <br />
                <br />
                제품 개발, 콘텐츠, 커머스를 연결하는 통합 구조를 기반으로
                <br className="IpBodyBreak" />
                지속 가능한 성장을 이어가고 있습니다.
              </p>
            )}
            ctaLabel={MAIN_IP_SECTION.panelCtaLabel}
            ctaHref={MAIN_IP_SECTION.panelCtaHref}
          />
        </div>
      </MediaSlide>

      <Friends />

      <MediaSlide
        id={MAIN_PEOPLE_SECTION.id}
        imageSrc={MAIN_PEOPLE_SECTION.imageSrc}
        imageAlt={MAIN_PEOPLE_SECTION.imageAlt}
        number={MAIN_PEOPLE_SECTION.number}
        title={
          <>
            {MAIN_PEOPLE_SECTION.titleLine1}
            <br />
            {MAIN_PEOPLE_SECTION.titleLine2}
          </>
        }
        mediaAspectRatio={MAIN_PEOPLE_SECTION.mediaAspectRatio}
      >
        <SlideRow
          textPanel={{
            label: MAIN_PEOPLE_SECTION.panelLabel,
            title: (
              <>
                {MAIN_PEOPLE_SECTION.panelTitleLine1}
                <br />
                {MAIN_PEOPLE_SECTION.panelTitleLine2}
              </>
            ),
            body: MAIN_PEOPLE_SECTION.panelBody,
            ctaLabel: MAIN_PEOPLE_SECTION.panelCtaLabel,
            ctaHref: MAIN_PEOPLE_SECTION.panelCtaHref,
          }}
          items={[...MAIN_PEOPLE_SECTION.items]}
        />
      </MediaSlide>

      <Strategy />
      <Growth />

      <MediaSlide
        id={MAIN_CONTRIBUTION_SECTION.id}
        imageSrc={MAIN_CONTRIBUTION_SECTION.imageSrc}
        imageAlt={MAIN_CONTRIBUTION_SECTION.imageAlt}
        number={MAIN_CONTRIBUTION_SECTION.number}
        title={
          <>
            {MAIN_CONTRIBUTION_SECTION.titleLine1}
            <br />
            {MAIN_CONTRIBUTION_SECTION.titleLine2}
          </>
        }
        mediaAspectRatio={MAIN_CONTRIBUTION_SECTION.mediaAspectRatio}
      >
        <SlideRow
          textPanel={{
            label: MAIN_CONTRIBUTION_SECTION.panelLabel,
            title: (
              <>
                {MAIN_CONTRIBUTION_SECTION.panelTitleLine1}
                <br />
                {MAIN_CONTRIBUTION_SECTION.panelTitleLine2}
              </>
            ),
            body: MAIN_CONTRIBUTION_SECTION.panelBody,
            ctaLabel: MAIN_CONTRIBUTION_SECTION.panelCtaLabel,
            ctaHref: MAIN_CONTRIBUTION_SECTION.panelCtaHref,
          }}
          items={[...MAIN_CONTRIBUTION_SECTION.items]}
        />
      </MediaSlide>

      <ContactBanner />
    </>
  )
}
