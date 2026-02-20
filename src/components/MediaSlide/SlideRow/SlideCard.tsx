import { Fragment } from "react"
import "./SlideCard.css"

type SlideCardProps = {
  imageSrc: string
  imageAlt?: string
  caption?: string
  label?: string
  /** People 슬라이드: 오버레이 상단 번호 (01, 02, 03) */
  number?: string
}

export default function SlideCard({
  imageSrc,
  imageAlt = "",
  caption,
  label,
  number,
}: SlideCardProps) {
  const text = caption ?? label ?? ""
  const hasOverlay =
    (number != null && number !== "") || (text !== "")

  return (
    <div className="SlideCard">
      <img src={imageSrc} alt={imageAlt} className="SlideCard-img" loading="lazy" decoding="async" />
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
    </div>
  )
}
