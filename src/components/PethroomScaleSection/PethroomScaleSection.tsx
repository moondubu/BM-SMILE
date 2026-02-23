import type { ReactNode } from "react"
import { prefixPath } from "@/utils/path"
import "./PethroomScaleSection.css"

type StatItem = {
  key: string
  label?: ReactNode
  title?: ReactNode
}

type StrengthItem = {
  key: string
  imageSrc: string
  imageAlt: string
  title?: ReactNode
  description?: ReactNode
}

type PethroomScaleSectionProps = {
  className?: string
  label: string
  title: string
  description: string
  statItems: readonly StatItem[]
  strengthItems: readonly StrengthItem[]
}

export default function PethroomScaleSection({
  className,
  label,
  title,
  description,
  statItems,
  strengthItems,
}: PethroomScaleSectionProps) {
  const rootClassName = ["PethroomScaleSection", className].filter(Boolean).join(" ")

  return (
    <section className={rootClassName}>
      <div className="PethroomScaleSection-inner">
        <header className="PethroomScaleSection-header">
          <p className="PethroomScaleSection-label">{label}</p>
          <h2 className="PethroomScaleSection-title">{title}</h2>
          <p className="PethroomScaleSection-description">{description}</p>
        </header>

        <div className="PethroomScaleSection-statGrid">
          {statItems.map((item) => (
            <article key={item.key} className="PethroomScaleSection-statCard">
              <p className="PethroomScaleSection-statLabel">{item.label}</p>
              <h3 className="PethroomScaleSection-statValue">{item.title}</h3>
            </article>
          ))}
        </div>

        <div className="PethroomScaleSection-strengthGrid">
          {strengthItems.map((item) => (
            <article key={item.key} className="PethroomScaleSection-strengthCard">
              <img src={prefixPath(item.imageSrc)} alt={item.imageAlt} className="PethroomScaleSection-strengthIcon" loading="lazy" decoding="async" />
              <div className="PethroomScaleSection-strengthText">
                <h3 className="PethroomScaleSection-strengthTitle">{item.title}</h3>
                <p className="PethroomScaleSection-strengthDescription">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
