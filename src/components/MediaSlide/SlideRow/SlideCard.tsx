import { prefixPath } from "@/utils/path"
import { Fragment } from "react"
import "./SlideCard.css"

type SlideCardProps = {
  imageSrc: string
  imageAlt?: string
  caption?: string
  label?: string
  /** People 슬라이드: 오버레이 상단 번호 (01, 02, 03) */
  number?: string
  showActionIcon?: boolean
  actionHref?: string
}

export default function SlideCard({
  imageSrc,
  imageAlt = "",
  caption,
  label,
  number,
  showActionIcon = false,
  actionHref,
}: SlideCardProps) {
  const text = caption ?? label ?? ""
  const hasOverlay =
    (number != null && number !== "") || (text !== "")
  const href = actionHref ?? "#"
  const isExternal = href.startsWith("http://") || href.startsWith("https://")

  return (
    <div className="SlideCard">
      <img src={prefixPath(imageSrc)} alt={imageAlt} className="SlideCard-img" loading="lazy" decoding="async" />
      {hasOverlay && (
        <div className="SlideCard-overlay">
          {number != null && number !== "" && (
            <span className="SlideCard-number">{number}</span>
          )}
          {text !== "" && (
            <p className="SlideCard-caption">
              {text.split("\n").map((line, i, lines) => (
                <Fragment key={i}>
                  {line}
                  {i < lines.length - 1 && <br />}
                </Fragment>
              ))}
            </p>
          )}
        </div>
      )}
      {showActionIcon && (
        <a
          className="SlideCard-actionIcon"
          href={href}
          aria-label={text !== "" ? `${text} 상세 보기` : "상세 보기"}
          onClick={actionHref == null ? (event) => event.preventDefault() : undefined}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      )}
    </div>
  )
}
