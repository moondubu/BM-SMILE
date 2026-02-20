import type { ReactNode } from "react"
import { prefixPath } from "@/utils/path"
import "./SectionCardGrid.css"

export type SectionCardGridItem = {
  key: string
  imageSrc: string
  imageAlt: string
  label?: ReactNode
  title?: ReactNode
  description?: ReactNode
}

type SectionCardGridProps = {
  className?: string
  label: ReactNode
  title: ReactNode
  description?: ReactNode
  caption?: ReactNode
  variant?: "plain" | "overlay"
  items: SectionCardGridItem[]
}

export default function SectionCardGrid({
  className,
  label,
  title,
  description,
  caption,
  variant = "plain",
  items,
}: SectionCardGridProps) {
  const rootClassName = ["SectionCardGrid", className].filter(Boolean).join(" ")
  const cardClassName = ["SectionCardGrid-card", `SectionCardGrid-card--${variant}`].join(" ")

  return (
    <section className={rootClassName}>
      <div className="SectionCardGrid-inner">
        <header className="SectionCardGrid-header">
          <p className="SectionCardGrid-label">{label}</p>
          <h2 className="SectionCardGrid-title">{title}</h2>
          {description ? <p className="SectionCardGrid-description">{description}</p> : null}
          {caption ? <p className="SectionCardGrid-caption">{caption}</p> : null}
        </header>
        <div className="SectionCardGrid-grid">
          {items.map((item) => (
            <article key={item.key} className={cardClassName}>
              <img src={prefixPath(item.imageSrc)} alt={item.imageAlt} className="SectionCardGrid-cardImage" />
              {(item.label || item.title || item.description) ? (
                <div className="SectionCardGrid-cardText">
                  {item.label ? <p className="SectionCardGrid-cardLabel">{item.label}</p> : null}
                  {item.title ? <h3 className="SectionCardGrid-cardTitle">{item.title}</h3> : null}
                  {item.description ? <p className="SectionCardGrid-cardDescription">{item.description}</p> : null}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
