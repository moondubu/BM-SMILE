import { prefixPath } from "@/utils/path"
import "./Hero.css"

type HeroProps = {
  type?: "video" | "image"
  videoPoster?: string
  videoSrcHvc?: string
  videoSrcH264?: string
  imageSrc?: string
  imageAlt?: string
  title?: React.ReactNode
  subtext?: React.ReactNode
  tone?: "light" | "dark"
  className?: string
}

export default function Hero({
  type = "video",
  videoPoster,
  videoSrcHvc,
  videoSrcH264,
  imageSrc,
  imageAlt = "",
  title,
  subtext,
  tone = "light",
  className,
}: HeroProps) {
  const prefixedPoster = videoPoster ? prefixPath(videoPoster) : undefined
  const prefixedHvc = videoSrcHvc ? prefixPath(videoSrcHvc) : undefined
  const prefixedH264 = videoSrcH264 ? prefixPath(videoSrcH264) : undefined
  const prefixedImage = imageSrc ? prefixPath(imageSrc) : undefined
  const rootClass = ["Hero", tone === "dark" ? "Hero--dark" : "Hero--light", className].filter(Boolean).join(" ")

  return (
    <section className={rootClass}>
      {type === "video" && prefixedPoster && prefixedHvc && prefixedH264 ? (
        <>
          <link rel="preload" as="image" href={prefixedPoster} fetchPriority="high" />
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={prefixedPoster}
            preload="none"
            className="Hero-media"
          >
            <source src={prefixedHvc} type="video/mp4; codecs=hvc1" />
            <source src={prefixedH264} type="video/mp4" />
          </video>
        </>
      ) : (
        prefixedImage ? <img src={prefixedImage} alt={imageAlt} className="Hero-media" fetchPriority="high" /> : null
      )}

      {(title || subtext) ? (
        <div className="Hero-overlay">
          <div className="Hero-content">
            <h1 className="Hero-title">{title}</h1>
            {subtext ? <p className="Hero-subtext">{subtext}</p> : null}
          </div>
        </div>
      ) : null}
    </section>
  )
}
