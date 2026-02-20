import "./page.css"
import Hero from "@/components/Hero/Hero"
import Slogan from "@/components/Slogan/Slogan"
import MediaSlide from "@/components/MediaSlide/MediaSlide"
import { SlideRow } from "@/components/MediaSlide"
import SectionTextPanel from "@/components/MediaSlide/SectionTextPanel/SectionTextPanel"
import Friends from "@/components/Friends/Friends"
import Strategy from "@/components/Strategy/Strategy"
import Growth from "@/components/Growth/Growth"
import Contact from "@/components/Contact/Contact"
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
            body={MAIN_IP_SECTION.panelBody}
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

      <Contact />
    </>
  )
}
