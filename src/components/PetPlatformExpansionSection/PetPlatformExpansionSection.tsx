import { prefixPath } from "@/utils/path"
import "./PetPlatformExpansionSection.css"

type PetPlatformExpansionItem = {
  title: string
  description: string
}

type PetPlatformExpansionSectionProps = {
  className?: string
  label?: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  items: PetPlatformExpansionItem[]
}

export default function PetPlatformExpansionSection({
  className,
  label,
  title,
  description,
  imageSrc,
  imageAlt,
  items,
}: PetPlatformExpansionSectionProps) {
  const rootClassName = ["PetPlatformExpansionSection", className].filter(Boolean).join(" ")

  return (
    <section className={rootClassName}>
      <div className="PetPlatformExpansionSection-inner">
        <header className="PetPlatformExpansionSection-header">
          {label ? <p className="PetPlatformExpansionSection-label">{label}</p> : null}
          <h2 className="PetPlatformExpansionSection-title">{title}</h2>
          <p className="PetPlatformExpansionSection-description">{description}</p>
        </header>

        <div className="PetPlatformExpansionSection-contents">
          <div className="PetPlatformExpansionSection-visual">
            <img src={prefixPath(imageSrc)} alt={imageAlt} className="PetPlatformExpansionSection-visualImage" />
          </div>

          <div className="PetPlatformExpansionSection-featureList">
            {items.map((item) => (
              <article key={item.title} className="PetPlatformExpansionSection-featureItem">
                <h3 className="PetPlatformExpansionSection-featureTitle">{item.title}</h3>
                <p className="PetPlatformExpansionSection-featureDescription">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
