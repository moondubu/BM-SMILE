import Hero from "@/components/Hero/Hero"
import "./SubHero.css"

type SubHeroProps = {
  type?: "video" | "image"
  videoPoster?: string
  videoSrcHvc?: string
  videoSrcH264?: string
  imageSrc?: string
  imageAlt?: string
  title: React.ReactNode
  subtext?: React.ReactNode
  tone?: "light" | "dark"
  className?: string
}

export default function SubHero({
  type = "image",
  videoPoster,
  videoSrcHvc,
  videoSrcH264,
  imageSrc,
  imageAlt = "",
  title,
  subtext,
  tone = "light",
  className,
}: SubHeroProps) {
  const rootClass = className ? `SubHero ${className}` : "SubHero"

  return (
    <div className={rootClass}>
      <Hero
        type={type}
        videoPoster={videoPoster}
        videoSrcHvc={videoSrcHvc}
        videoSrcH264={videoSrcH264}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        isLight={tone === "light"}
      >
        <div className={`SubHero-text SubHero-text--${tone}`}>
          <h1 className="SubHero-title">{title}</h1>
          {subtext && <p className="SubHero-subtext">{subtext}</p>}
        </div>
      </Hero>
    </div>
  )
}
