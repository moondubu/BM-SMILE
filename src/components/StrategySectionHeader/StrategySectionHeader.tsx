import "./StrategySectionHeader.css"

type StrategySectionHeaderPillar = {
  title: string
  description: string
}

type StrategySectionHeaderProps = {
  className?: string
  label: string
  title: string
  description: string
  pillars: readonly StrategySectionHeaderPillar[]
}

export default function StrategySectionHeader({
  className,
  label,
  title,
  description,
  pillars,
}: StrategySectionHeaderProps) {
  return (
    <div className={["StrategySectionHeader", className].filter(Boolean).join(" ")}>
      <header className="StrategySectionHeader-header">
        <span className="StrategySectionHeader-label">{label}</span>
        <h2 className="StrategySectionHeader-title">{title}</h2>
        <p className="StrategySectionHeader-description">{description}</p>
      </header>

      <div className="StrategySectionHeader-pillarGrid">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="StrategySectionHeader-pillarCard">
            <h3 className="StrategySectionHeader-pillarTitle">{pillar.title}</h3>
            <p className="StrategySectionHeader-pillarDescription">{pillar.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
