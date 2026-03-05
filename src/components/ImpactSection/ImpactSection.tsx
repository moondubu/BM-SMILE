import type { ReactNode } from "react"
import { prefixPath } from "@/utils/path"
import Link from "next/link"
import "./ImpactSection.css"

const CTA_ICON = (
  <svg className="ImpactSection-ctaIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <path d="M5 15L15 5M15 5H6M15 5V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

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
  backgroundMobileSrc?: string
  backgroundAlt?: string
  label: string
  title: ReactNode
  subText?: ReactNode
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
  backgroundMobileSrc,
  backgroundAlt = "",
  label,
  title,
  subText,
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
        {backgroundMobileSrc ? (
          <picture>
            <source media="(max-width: 768px)" srcSet={prefixPath(backgroundMobileSrc)} />
            <img src={prefixPath(backgroundSrc)} alt={backgroundAlt} aria-hidden={backgroundAlt ? undefined : "true"} />
          </picture>
        ) : (
          <img src={prefixPath(backgroundSrc)} alt={backgroundAlt} aria-hidden={backgroundAlt ? undefined : "true"} />
        )}
      </div>

      <div className="ImpactSection-inner">
        <header className={headerClassName}>
          <span className="ImpactSection-label">{label}</span>
          <h2 className="ImpactSection-title">{title}</h2>
          {subText ? (
            <div className="ImpactSection-subText">{subText}</div>
          ) : subTextLines?.length ? (
            <div className="ImpactSection-subText">
              {subTextLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ) : null}
          {ctaLabel && ctaHref ? (
            <Link href={ctaHref} className="ImpactSection-cta CtaButton CtaButton--onDark">
              {ctaLabel}
              {CTA_ICON}
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
