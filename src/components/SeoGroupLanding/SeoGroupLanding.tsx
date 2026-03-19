import Link from "next/link"
import "./SeoGroupLanding.css"

type SeoGroupLandingLink = {
  label: string
  href: string
  description: string
}

type SeoGroupLandingProps = {
  eyebrow: string
  title: string
  description: string
  links: SeoGroupLandingLink[]
}

export default function SeoGroupLanding({
  eyebrow,
  title,
  description,
  links,
}: SeoGroupLandingProps) {
  return (
    <section className="SeoGroupLanding">
      <div className="SeoGroupLanding-inner">
        <p className="SeoGroupLanding-eyebrow">{eyebrow}</p>
        <h1 className="SeoGroupLanding-title">{title}</h1>
        <p className="SeoGroupLanding-description">{description}</p>
        <p className="SeoGroupLanding-helper">아래 세부 메뉴를 통해 관련 페이지를 바로 확인할 수 있습니다.</p>

        <nav className="SeoGroupLanding-nav" aria-label={`${title} menu`}>
          <ul className="SeoGroupLanding-list">
            {links.map((link) => (
              <li key={link.href} className="SeoGroupLanding-item">
                <Link href={link.href} className="SeoGroupLanding-link">
                  {link.label}
                </Link>
                <p className="SeoGroupLanding-itemDescription">{link.description}</p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
