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

  return (
    <section className={containerClass}>
      {type === "video" && videoPoster && videoSrcHvc && videoSrcH264 ? (
        <>
          <link rel="preload" as="image" href={videoPoster} fetchPriority="high" />
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={videoPoster}
            preload="metadata"
            className="Hero-media"
          >
            <source src={videoSrcHvc} type="video/mp4; codecs=hvc1" />
            <source src={videoSrcH264} type="video/mp4" />
          </video>
        </>
      ) : (
        imageSrc && (
          <img
            src={imageSrc}
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
