import { prefixPath } from "@/utils/path"
import "./PethroomBannerSection.css"

type PethroomBannerSectionProps = {
  className?: string
  imageSrc?: string
  imageAlt?: string
  videoPoster?: string
  videoSrcHvc?: string
  videoSrcH264?: string
  title: string
  description: string
}

export default function PethroomBannerSection({
  className,
  imageSrc,
  imageAlt = "",
  videoPoster,
  videoSrcHvc,
  videoSrcH264,
  title,
  description,
}: PethroomBannerSectionProps) {
  const rootClassName = ["PethroomBannerSection", className].filter(Boolean).join(" ")
  const prefixedImage = imageSrc ? prefixPath(imageSrc) : undefined
  const prefixedPoster = videoPoster ? prefixPath(videoPoster) : undefined
  const prefixedHvc = videoSrcHvc ? prefixPath(videoSrcHvc) : undefined
  const prefixedH264 = videoSrcH264 ? prefixPath(videoSrcH264) : undefined
  const hasVideo = prefixedPoster != null && prefixedHvc != null && prefixedH264 != null

  return (
    <section className={rootClassName}>
      <div className="PethroomBannerSection-inner">
        {hasVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={prefixedPoster}
            preload="none"
            className="PethroomBannerSection-media"
          >
            <source src={prefixedHvc} type="video/mp4; codecs=hvc1" />
            <source src={prefixedH264} type="video/mp4" />
          </video>
        ) : prefixedImage ? (
          <img
            src={prefixedImage}
            alt={imageAlt}
            className="PethroomBannerSection-media"
            loading="lazy"
            decoding="async"
          />
        ) : null}
        <div className="PethroomBannerSection-overlay" />
        <div className="PethroomBannerSection-text">
          <h2 className="PethroomBannerSection-title">{title}</h2>
          <p className="PethroomBannerSection-description">{description}</p>
        </div>
      </div>
    </section>
  )
}
