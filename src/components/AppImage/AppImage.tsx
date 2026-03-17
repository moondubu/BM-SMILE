import type { CSSProperties, ImgHTMLAttributes } from "react"
import { getImageProps } from "next/image"
import { IMAGE_DIMENSIONS } from "./imageDimensions"

type BaseImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "width" | "height">

type AppImageProps = BaseImageProps & {
  src: string
  alt: string
  width?: number
  height?: number
  mobileSrc?: string
  mobileWidth?: number
  mobileHeight?: number
  sizes?: string
}

type ImageDimensions = {
  width: number
  height: number
}

const DEFAULT_SIZES = "100vw"
const MOBILE_MEDIA_QUERY = "(max-width: 768px)"

function normalizeImagePath(path: string): string {
  return path.split("?")[0]
}

function resolveImageDimensions(path: string, width?: number, height?: number): ImageDimensions {
  if (width && height) {
    return { width, height }
  }

  if (path.startsWith("data:image/")) {
    return { width: 1, height: 1 }
  }

  const normalizedPath = normalizeImagePath(path)
  const dimensions = IMAGE_DIMENSIONS[normalizedPath as keyof typeof IMAGE_DIMENSIONS]

  if (!dimensions) {
    throw new Error(`Missing image dimensions for ${path}`)
  }

  return dimensions
}

export default function AppImage({
  src,
  alt,
  width,
  height,
  mobileSrc,
  mobileWidth,
  mobileHeight,
  className,
  style,
  sizes = DEFAULT_SIZES,
  loading,
  decoding,
  fetchPriority,
  ...imgProps
}: AppImageProps) {
  const desktopDimensions = resolveImageDimensions(src, width, height)
  const commonProps = {
    alt,
    className,
    style: style as CSSProperties | undefined,
    sizes,
    loading,
    decoding,
    fetchPriority,
    unoptimized: true,
  }

  const { props: desktopResolvedProps } = getImageProps({
    src,
    width: desktopDimensions.width,
    height: desktopDimensions.height,
    ...commonProps,
  })
  const { alt: desktopAlt, ...desktopImageProps } = desktopResolvedProps

  if (mobileSrc) {
    const mobileDimensions = resolveImageDimensions(mobileSrc, mobileWidth, mobileHeight)
    const {
      props: { srcSet: mobileSrcSet },
    } = getImageProps({
      src: mobileSrc,
      width: mobileDimensions.width,
      height: mobileDimensions.height,
      ...commonProps,
    })

    return (
      <picture>
        <source media={MOBILE_MEDIA_QUERY} srcSet={mobileSrcSet} />
        <img alt={desktopAlt} {...desktopImageProps} {...imgProps} />
      </picture>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={desktopAlt} {...desktopImageProps} {...imgProps} />
  )
}
