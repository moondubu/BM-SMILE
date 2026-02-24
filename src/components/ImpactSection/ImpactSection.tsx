import type { ReactNode } from "react"
import { prefixPath } from "@/utils/path"
import Link from "next/link"
import "./ImpactSection.css"

export type ImpactSectionMetric = {
  label: string
  value: string
  subText?: string
  logoSrc?: string
  logoAlt?: string
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
  metricsCaption?: string
  metricsDescriptionLines?: readonly string[]
  ctaLabel?: string
  ctaHref?: string
  footerText?: string
}

export default function ImpactSection({
  className,
  backgroundSrc,
  backgroundAlt = "",
  label,
  title,
  subTextLines,
  headerAlign = "left",
  metrics,
  metricsCaption,
  metricsDescriptionLines,
  ctaLabel,
  ctaHref,
  footerText,
}: ImpactSectionProps) {
  const sectionClassName = ["ImpactSection", className].filter(Boolean).join(" ")
  const hasMetrics = Boolean(metrics?.length)
  const metricCount = metrics?.length ?? 0
  const hasMetricSubText = Boolean(metrics?.some((item) => item.subText && item.subText.trim() !== ""))
  const metricSubTextLines = footerText?.split("\n").map((line) => line.trim()).filter(Boolean) ?? []
  const showMetricSubText = hasMetrics && (hasMetricSubText || metricSubTextLines.length > 0)
  const headerClassName = [
    "ImpactSection-header",
    headerAlign === "center" ? "ImpactSection-header--center" : "",
  ]
    .filter(Boolean)
    .join(" ")
  const footerClassName = [
    "ImpactSection-footer",
    headerAlign === "center" ? "ImpactSection-footer--center" : "",
  ]
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
          {ctaLabel && ctaHref ? (
            <Link href={ctaHref} className="ImpactSection-cta">
              {ctaLabel}
            </Link>
          ) : null}
        </header>

        {hasMetrics ? (
          <div className="ImpactSection-metrics">
            {metricsCaption || metricsDescriptionLines?.length ? (
              <div className="ImpactSection-metricsText">
                {metricsCaption ? <p className="ImpactSection-metricsCaption">{metricsCaption}</p> : null}
                {metricsDescriptionLines?.length ? (
                  <div className="ImpactSection-metricsDescription">
                    {metricsDescriptionLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}
            <div className="ImpactSection-metricsGrid">
              {metrics?.map((item, index) => (
                <div
                  key={item.label}
                  className={[
                    "ImpactSection-metric",
                    headerAlign === "center" ? "ImpactSection-metric--center" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {item.logoSrc ? (
                    <img
                      src={prefixPath(item.logoSrc)}
                      alt={item.logoAlt ?? item.label}
                      className="ImpactSection-metricLogo"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : null}
                  <p className="ImpactSection-metricLabel">{item.label}</p>
                  {item.value.trim() ? <p className="ImpactSection-metricValue">{item.value}</p> : null}
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
