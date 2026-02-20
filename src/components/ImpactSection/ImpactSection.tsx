import type { ReactNode } from "react"
import { prefixPath } from "@/utils/path"
import "./ImpactSection.css"

export type ImpactSectionMetric = {
  label: string
  value: string
  subText?: string
}

type ImpactSectionProps = {
  className?: string
  backgroundSrc: string
  backgroundAlt?: string
  label: string
  title: ReactNode
  subTextLines?: readonly string[]
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
  const metricCount = metrics?.length ?? 0
  const hasMetricSubText = Boolean(metrics?.some((item) => item.subText && item.subText.trim() !== ""))
  const metricSubTextLines = footerText?.split("\n").map((line) => line.trim()).filter(Boolean) ?? []
  const showMetricSubText = hasMetrics && (hasMetricSubText || metricSubTextLines.length > 0)
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
              {metrics?.map((item, index) => (
                <div key={item.label} className="ImpactSection-metric">
                  <p className="ImpactSection-metricLabel">{item.label}</p>
                  <p className="ImpactSection-metricValue">{item.value}</p>
                  {showMetricSubText ? (
                    <span className="ImpactSection-metricSubText">
                      {item.subText
                        ? item.subText
                        : metricSubTextLines.length === metricCount
                          ? metricSubTextLines[index]
                          : metricSubTextLines[0]}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
            {!showMetricSubText && footerText ? <p className={footerClassName}>{footerText}</p> : null}
          </div>
        ) : footerText ? (
          <p className={footerClassName}>{footerText}</p>
        ) : null}
      </div>
    </section>
  )
}
