import "./RoadmapSection.css"

type RoadmapItem = {
  id: string
  title: string
  description: string
}

type RoadmapSectionProps = {
  className?: string
  label: string
  title: string
  description?: string
  items: readonly RoadmapItem[]
}

export default function RoadmapSection({
  className,
  label,
  title,
  description,
  items,
}: RoadmapSectionProps) {
  return (
    <section className={["RoadmapSection", className].filter(Boolean).join(" ")}>
      <div className="RoadmapSection-inner">
        <header className="RoadmapSection-header">
          <span className="RoadmapSection-label">{label}</span>
          <h2 className="RoadmapSection-title">{title}</h2>
          {description ? <p className="RoadmapSection-description">{description}</p> : null}
        </header>

        <div className="RoadmapSection-contents">
          <div className="RoadmapSection-list">
            {items.map((item) => (
              <article key={item.id} className="RoadmapSection-item">
                <div className="RoadmapSection-numBox">
                  <span className="RoadmapSection-num">{item.id}</span>
                </div>
                <div className="RoadmapSection-markerBox">
                  <div className="RoadmapSection-dot" />
                  <div className="RoadmapSection-line" />
                </div>
                <div className="RoadmapSection-textBox">
                  <h3 className="RoadmapSection-itemTitle">{item.title}</h3>
                  <p className="RoadmapSection-itemDescription">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
