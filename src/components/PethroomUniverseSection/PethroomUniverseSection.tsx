import { prefixPath } from "@/utils/path"
import "./PethroomUniverseSection.css"

type PethroomUniverseImage = {
  imageSrc: string
  imageAlt: string
}

type PethroomUniverseSectionProps = {
  className?: string
  label: string
  title: string
  description: string
  items: readonly PethroomUniverseImage[]
}

export default function PethroomUniverseSection({
  className,
  label,
  title,
  description,
  items,
}: PethroomUniverseSectionProps) {
  const rootClassName = ["PethroomUniverseSection", className].filter(Boolean).join(" ")

  return (
    <section className={rootClassName}>
      <div className="PethroomUniverseSection-header">
        <p className="PethroomUniverseSection-label">{label}</p>
        <h2 className="PethroomUniverseSection-title">{title}</h2>
        <p className="PethroomUniverseSection-description">{description}</p>
      </div>

      <div className="PethroomUniverseSection-grid">
        {items.map((item, index) => (
          <div key={`${item.imageSrc}-${index}`} className="PethroomUniverseSection-item">
            <img src={prefixPath(item.imageSrc)} alt={item.imageAlt} className="PethroomUniverseSection-image" loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
    </section>
  )
}
