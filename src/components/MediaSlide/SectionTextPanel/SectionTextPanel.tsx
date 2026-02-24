import { Fragment, type ReactNode } from "react"
import Link from "next/link"
import "./SectionTextPanel.css"

export type SectionTextPanelProps = {
  label?: string
  title: ReactNode
  body?: string
  ctaLabel?: string
  ctaHref?: string
}

const CTA_ICON = (
  <svg className="SectionTextPanel-ctaIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <path d="M5 15L15 5M15 5H6M15 5V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function SectionTextPanel({
  label,
  title,
  body,
  ctaLabel,
  ctaHref,
}: SectionTextPanelProps) {
  return (
    <div className="SectionTextPanel">
      {label != null && label !== "" && (
        <p className="SectionTextPanel-label">{label}</p>
      )}
      <h2 className="SectionTextPanel-title">{title}</h2>
      {body != null && body !== "" && (
        <p className="SectionTextPanel-body">
          {body.split("\n").map((line, i, lines) => (
            <Fragment key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </Fragment>
          ))}
        </p>
      )}
      {ctaLabel != null && ctaHref != null && (
        <Link href={ctaHref} className="SectionTextPanel-cta CtaButton CtaButton--onDark">
          {ctaLabel}
          {CTA_ICON}
        </Link>
      )}
    </div>
  )
}
