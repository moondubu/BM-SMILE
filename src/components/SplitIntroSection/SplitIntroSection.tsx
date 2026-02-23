import { prefixPath } from "@/utils/path"
import "./SplitIntroSection.css"

type SplitIntroSectionProps = {
  className?: string
  label: string
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  ctaLabel?: string
  ctaHref?: string
}

export default function SplitIntroSection({
  className,
  label,
  title,
  description,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaHref,
}: SplitIntroSectionProps) {
  const rootClassName = ["SplitIntroSection", className].filter(Boolean).join(" ")

  return (
    <section className={rootClassName}>
      <div className="SplitIntroSection-inner">
        <header className="SplitIntroSection-header">
          <div className="SplitIntroSection-titleGroup">
            <p className="SplitIntroSection-label">{label}</p>
            <h2 className="SplitIntroSection-title">{title}</h2>
          </div>
          <p className="SplitIntroSection-description">{description}</p>
        </header>

        <div className="SplitIntroSection-imageWrap">
          <img
            src={prefixPath(imageSrc)}
            alt={imageAlt}
            className="SplitIntroSection-image"
            loading="lazy"
            decoding="async"
          />
          {ctaLabel ? (
            <a
              href={ctaHref ?? "#"}
              className="SplitIntroSection-cta"
              target={ctaHref?.startsWith("http") ? "_blank" : undefined}
              rel={ctaHref?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {ctaLabel}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}
