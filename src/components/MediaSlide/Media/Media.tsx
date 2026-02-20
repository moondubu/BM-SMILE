import "./Media.css"

type MediaProps = {
  videoPoster?: string
  videoSrcHvc?: string
  videoSrcH264?: string
  imageSrc?: string
  imageAlt?: string
  title?: React.ReactNode
  number?: string
  /** 있으면 고정 비율(예: "3 / 1"), 없으면 이미지/비디오 원본 높이에 맞춤 */
  aspectRatio?: string
}

export default function Media({
  videoPoster,
  videoSrcHvc,
  videoSrcH264,
  imageSrc,
  imageAlt = "",
  title,
  number = "",
  aspectRatio,
}: MediaProps) {
  const isImage = imageSrc != null && imageSrc !== ""
  const style = { display: "block" as const, width: "100%", ...(aspectRatio != null && aspectRatio !== "" ? { aspectRatio } : {}) }

  if (isImage) {
    return (
      <div className="Media">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          style={style}
        />
        <div className="Media-text-overlay SectionHead">
          {number != null && number !== "" && (
            <span className="SectionNumber">{number}</span>
          )}
          <h2 className="SectionTitle">{title}</h2>
        </div>
      </div>
    )
  }

  const hasVideo =
    videoPoster != null && videoSrcHvc != null && videoSrcH264 != null
  if (!hasVideo) return null

  return (
    <div className="Media">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={videoPoster}
        preload="none"
        style={style}
      >
        <source src={videoSrcHvc} type="video/mp4; codecs=hvc1" />
        <source src={videoSrcH264} type="video/mp4" />
      </video>
      <div className="Media-text-overlay SectionHead">
        {number != null && number !== "" && (
          <span className="SectionNumber">{number}</span>
        )}
        <h2 className="SectionTitle">{title}</h2>
      </div>
    </div>
  )
}
