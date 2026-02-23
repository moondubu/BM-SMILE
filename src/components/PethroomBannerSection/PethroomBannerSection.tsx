import { prefixPath } from "@/utils/path"
import "./PethroomBannerSection.css"

type PethroomBannerSectionProps = {
  className?: string
  imageSrc: string
  imageAlt: string
  title: string
  description: string
}

export default function PethroomBannerSection({
  className,
  imageSrc,
  imageAlt,
  title,
  description,
}: PethroomBannerSectionProps) {
  const rootClassName = ["PethroomBannerSection", className].filter(Boolean).join(" ")

  return (
    <section className={rootClassName}>
      <div className="PethroomBannerSection-inner">
        <img
          src={prefixPath(imageSrc)}
          alt={imageAlt}
          className="PethroomBannerSection-image"
          loading="lazy"
          decoding="async"
        />
        <div className="PethroomBannerSection-overlay" />
        <div className="PethroomBannerSection-text">
          <h2 className="PethroomBannerSection-title">{title}</h2>
          <p className="PethroomBannerSection-description">{description}</p>
        </div>
      </div>
    </section>
  )
}
