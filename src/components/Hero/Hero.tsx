import { prefixPath } from "@/utils/path"
import "./Hero.css"

type HeroProps = {
  /** 'video' (기본값) 또는 'image' */
  type?: "video" | "image"
  /** 비디오 타입일 때 필수 */
  videoPoster?: string
  videoSrcHvc?: string
  videoSrcH264?: string
  /** 이미지 타입일 때 필수 */
  imageSrc?: string
  imageAlt?: string
  /** 라이트 테마 (검은색 텍스트, 서브페이지용) */
  isLight?: boolean
  /** 텍스트 오버레이 영역 */
  title?: React.ReactNode
  subtext?: React.ReactNode
  children?: React.ReactNode
}

export default function Hero({
  type = "video",
  videoPoster,
  videoSrcHvc,
  videoSrcH264,
  imageSrc,
  imageAlt = "",
  isLight = false,
  title,
  subtext,
  children,
}: HeroProps) {
  const containerClass = isLight ? "Hero Hero--light" : "Hero"

  const prefixedPoster = videoPoster ? prefixPath(videoPoster) : undefined
  const prefixedHvc = videoSrcHvc ? prefixPath(videoSrcHvc) : undefined
  const prefixedH264 = videoSrcH264 ? prefixPath(videoSrcH264) : undefined
  const prefixedImage = imageSrc ? prefixPath(imageSrc) : undefined

  return (
    <section className={containerClass}>
      {type === "video" && prefixedPoster && prefixedHvc && prefixedH264 ? (
        <>
          <link rel="preload" as="image" href={prefixedPoster} fetchPriority="high" />
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={prefixedPoster}
            preload="metadata"
            className="Hero-media"
          >
            <source src={prefixedHvc} type="video/mp4; codecs=hvc1" />
            <source src={prefixedH264} type="video/mp4" />
          </video>
        </>
      ) : (
        prefixedImage && (
          <img
            src={prefixedImage}
            alt={imageAlt}
            className="Hero-media"
            fetchPriority="high"
          />
        )
      )}

      {(title || subtext || children) && (
        <div className="Hero-overlay">
          <div className="Hero-content">
            {title && <h1 className="Hero-title">{title}</h1>}
            {subtext && <p className="Hero-subtext">{subtext}</p>}
            {children}
          </div>
        </div>
      )}
    </section>
  )
}
