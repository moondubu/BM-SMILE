import "./MediaSlide.css"
import Media from "./Media/Media"

type MediaSlideProps = {
  id?: string
  videoPoster?: string
  videoSrcHvc?: string
  videoSrcH264?: string
  imageSrc?: string
  imageAlt?: string
  number?: string
  title?: React.ReactNode
  mediaAspectRatio?: string
  /** true면 children을 미디어 위에 오버레이(MediaSlide-overlay), false면 슬라이드 영역(MediaSlide-slide) */
  overlay?: boolean
  children?: React.ReactNode
}

export default function MediaSlide({
  id,
  videoPoster,
  videoSrcHvc,
  videoSrcH264,
  imageSrc,
  imageAlt,
  number,
  title,
  mediaAspectRatio,
  overlay = false,
  children,
}: MediaSlideProps) {
  const hasVideo =
    videoPoster != null && videoSrcHvc != null && videoSrcH264 != null
  const hasImage = imageSrc != null && imageSrc !== ""
  const hasMedia = hasVideo || hasImage
  const className = id != null ? `MediaSlide MediaSlide--${id}` : "MediaSlide"

  const childWrapperClass = overlay ? "MediaSlide-overlay" : "MediaSlide-slide"

  return (
    <section className={className}>
      <div className="MediaSlide-inner">
        {hasMedia && (
          <Media
            videoPoster={videoPoster}
            videoSrcHvc={videoSrcHvc}
            videoSrcH264={videoSrcH264}
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            number={overlay ? undefined : number}
            title={overlay ? undefined : title}
            aspectRatio={mediaAspectRatio}
          />
        )}
        {children != null && (
          <div className={childWrapperClass}>{children}</div>
        )}
      </div>
    </section>
  )
}
