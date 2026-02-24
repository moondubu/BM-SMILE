import Link from "next/link"
import "./PageNavigation.css"

type PageNavigationLink = {
  label: string
  href: string
  chipLabel: string
  chipHref: string
}

type PageNavigationProps = {
  id?: string
  className?: string
  prev: PageNavigationLink
  next: PageNavigationLink
}

export default function PageNavigation({ id, className, prev, next }: PageNavigationProps) {
  const sectionClassName = className ? `PageNavigation ${className}` : "PageNavigation"

  return (
    <section className={sectionClassName} id={id}>
      <div className="PageNavigation-inner">
        <div className="PageNavigation-group">
          <Link href={prev.href} className="PageNavigation-direction">
            {prev.label}
          </Link>
          <Link href={prev.chipHref} className="PageNavigation-chip">
            {prev.chipLabel}
          </Link>
        </div>

        <div className="PageNavigation-group">
          <Link href={next.chipHref} className="PageNavigation-chip">
            {next.chipLabel}
          </Link>
          <Link href={next.href} className="PageNavigation-direction">
            {next.label}
          </Link>
        </div>
      </div>
    </section>
  )
}
