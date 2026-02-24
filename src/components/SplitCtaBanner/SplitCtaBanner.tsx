import Link from "next/link"
import type { ReactNode } from "react"
import "./SplitCtaBanner.css"

type SplitCtaBannerProps = {
  id?: string
  className?: string
  title: ReactNode
  body: ReactNode
  ctaLabel: string
  ctaHref: string
}

export default function SplitCtaBanner({ id, className, title, body, ctaLabel, ctaHref }: SplitCtaBannerProps) {
  const sectionClassName = className ? `SplitCtaBanner ${className}` : "SplitCtaBanner"
  const isExternal = ctaHref.startsWith("http")

  return (
    <section className={sectionClassName} id={id}>
      <div className="SplitCtaBanner-inner">
        <h2 className="SplitCtaBanner-title">{title}</h2>
        <div className="SplitCtaBanner-content">
          <p className="SplitCtaBanner-body">{body}</p>
          {isExternal ? (
            <a href={ctaHref} className="SplitCtaBanner-cta CtaButton CtaButton--onBlue" target="_blank" rel="noopener noreferrer">
              {ctaLabel}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path
                  d="M5 15L15 5M15 5H6M15 5V14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ) : (
            <Link href={ctaHref} className="SplitCtaBanner-cta CtaButton CtaButton--onBlue">
              {ctaLabel}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path
                  d="M5 15L15 5M15 5H6M15 5V14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
