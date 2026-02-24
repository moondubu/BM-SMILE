import Link from "next/link"
import type { ReactNode } from "react"
import "./ContactBannerShell.css"

type ContactBannerShellProps = {
  id?: string
  className?: string
  title: ReactNode
  body: ReactNode
  ctaLabel: string
  ctaHref: string
}

export default function ContactBannerShell({
  id,
  className,
  title,
  body,
  ctaLabel,
  ctaHref,
}: ContactBannerShellProps) {
  const sectionClassName = className ? `ContactBanner ${className}` : "ContactBanner"

  return (
    <section className={sectionClassName} id={id}>
      <div className="ContactBanner-inner">
        <h2 className="ContactBanner-title">{title}</h2>
        <div className="ContactBanner-content">
          <p className="ContactBanner-body">{body}</p>
          <Link href={ctaHref} className="ContactBanner-cta">
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
        </div>
      </div>
    </section>
  )
}
