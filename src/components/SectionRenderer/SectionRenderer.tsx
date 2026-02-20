import type { ReactNode } from "react"
import Hero from "@/components/Hero/Hero"
import Slogan from "@/components/Slogan/Slogan"
import MediaSlide from "@/components/MediaSlide/MediaSlide"
import { Slide, SlideRow } from "@/components/MediaSlide"
import SectionTextPanel from "@/components/MediaSlide/SectionTextPanel/SectionTextPanel"
import Friends from "@/components/Friends/Friends"
import Strategy from "@/components/Strategy/Strategy"
import Growth from "@/components/Growth/Growth"
import Contact from "@/components/Contact/Contact"
import type { HomeSection } from "@/data/homeSections"
import "./SectionShared.css"

function titleToNode(title: { line1: string; line2: string }): ReactNode {
  return (
    <>
      {title.line1}
      <br />
      {title.line2}
    </>
  )
}

type SectionRendererProps = { section: HomeSection }

export default function SectionRenderer({ section }: SectionRendererProps) {
  switch (section.type) {
    case "hero":
      return (
        <Hero
          type="video"
          videoPoster={section.poster}
          videoSrcHvc={section.hvc}
          videoSrcH264={section.h264}
        />
      )
    case "slogan":
      return <Slogan />
    case "mediaSlide": {
      const titleNode = titleToNode(section.title)
      const slideNode =
        section.slide.type === "slideRow" ? (
          <SlideRow
            textPanel={{
              ...section.slide.textPanel,
              title: titleToNode(section.slide.textPanel.title),
            }}
            items={section.slide.items}
          />
        ) : (
          <Slide contentKey={section.slide.contentKey} />
        )
      return (
        <MediaSlide
          id={section.id}
          videoPoster={section.videoPoster}
          videoSrcHvc={section.videoSrcHvc}
          videoSrcH264={section.videoSrcH264}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          number={section.number}
          title={titleNode}
          mediaAspectRatio={section.mediaAspectRatio}
        >
          {slideNode}
        </MediaSlide>
      )
    }
    case "mediaSection": {
      const titleNode = titleToNode(section.title)
      const overlayContent =
        section.textPanel != null ? (
          <div className="MediaSlide-overlayInner">
            <div className="MediaSlide-overlayHead SectionHead">
              {section.number != null && section.number !== "" && (
                <span className="SectionNumber">{section.number}</span>
              )}
              <h2 className="MediaSlide-overlayTitle SectionTitle">{titleNode}</h2>
            </div>
            <SectionTextPanel
              label={section.textPanel.label}
              title={titleToNode(section.textPanel.title)}
              body={section.textPanel.body}
              ctaLabel={section.textPanel.ctaLabel}
              ctaHref={section.textPanel.ctaHref}
            />
          </div>
        ) : null
      return (
        <MediaSlide
          id={section.id}
          videoPoster={section.videoPoster}
          videoSrcHvc={section.videoSrcHvc}
          videoSrcH264={section.videoSrcH264}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          number={section.number}
          title={titleNode}
          mediaAspectRatio={section.mediaAspectRatio}
          overlay
        >
          {overlayContent}
        </MediaSlide>
      )
    }
    case "friends":
      return <Friends />
    case "strategy":
      return <Strategy />
    case "growth":
      return <Growth />
    case "contact":
      return <Contact />
    case "contribution":
      return (
        <section className="HomePlaceholder" data-section="contribution">
          Contribution
        </section>
      )
    default:
      return null
  }
}
