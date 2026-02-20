import type { ReactNode } from "react"
import { prefixPath } from "@/utils/path"
import "./ImpactSection.css"

export type ImpactSectionMetric = {
  label: string
  value: string
}

type ImpactSectionProps = {
  className?: string
  backgroundSrc: string
  backgroundAlt?: string
  label: string
  title: ReactNode
  subTextLines?: string[]
  headerAlign?: "left" | "center"
  metrics?: ImpactSectionMetric[]
  footerText?: string
}

export default function ImpactSection({
  className,
  backgroundSrc,
  backgroundAlt = "",
  label,
  title,
  subTextLines,
  headerAlign = "center",
  metrics,
  footerText,
}: ImpactSectionProps) {
  const sectionClassName = ["ImpactSection", className].filter(Boolean).join(" ")
  const hasMetrics = Boolean(metrics?.length)
  const headerClassName = ["ImpactSection-header", headerAlign === "left" ? "ImpactSection-header--left" : ""]
    .filter(Boolean)
    .join(" ")
  const footerClassName = ["ImpactSection-footer", headerAlign === "left" ? "ImpactSection-footer--left" : ""]
    .filter(Boolean)
    .join(" ")

  return (
    <section className={sectionClassName}>
      <div className="ImpactSection-bg">
        <img src={prefixPath(backgroundSrc)} alt={backgroundAlt} aria-hidden={backgroundAlt ? undefined : "true"} />
      </div>

      <div className="ImpactSection-inner">
        <header className={headerClassName}>
          <span className="ImpactSection-label">{label}</span>
          <h2 className="ImpactSection-title">{title}</h2>
          {subTextLines?.length ? (
            <div className="ImpactSection-subText">
              {subTextLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ) : null}
        </header>

        {hasMetrics ? (
          <div className="ImpactSection-metrics">
            <div className="ImpactSection-metricsGrid">
              {metrics?.map((item) => (
                <div key={item.label} className="ImpactSection-metric">
                  <p className="ImpactSection-metricLabel">{item.label}</p>
                  <p className="ImpactSection-metricValue">{item.value}</p>
                </div>
              ))}
            </div>
            {footerText ? <p className={footerClassName}>{footerText}</p> : null}
          </div>
        ) : footerText ? (
          <p className={footerClassName}>{footerText}</p>
        ) : null}
      </div>
    </section>
  )
}
