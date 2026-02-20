import type { SlideRowItem } from "@/components/MediaSlide"

/** Serializable title for media/slide (no JSX in data). */
export type TitleData = { line1: string; line2: string }

/** Slide content data: discriminated so SectionRenderer can build React nodes. */
export type HomeSlideData =
  | { type: "slideRow"; textPanel: SlideRowTextPanelData; items: SlideRowItem[] }
  | { type: "slide"; contentKey: string }

export type SlideRowTextPanelData = {
  label?: string
  title: TitleData
  body?: string
  ctaLabel?: string
  ctaHref?: string
}

const BASE_VIDEO = "https://d13u09gq3bwcu4.cloudfront.net/products/704"

const ENVIRONMENT_SLIDE: { textPanel: SlideRowTextPanelData; items: SlideRowItem[] } = {
  textPanel: {
    label: "Workspace",
    title: { line1: "최고의", line2: "업무 환경에서" },
    body: "대한민국 비즈니스의 중심에서 \n실행과 몰입을 극대화하는 환경을 설계합니다.",
    ctaLabel: "업무 환경 자세히 보기",
    ctaHref: "/environment",
  },
  items: [
    { imageSrc: "/images/main/img_evm_lounge_01.png", imageAlt: "Lounge", caption: "Lounge" },
    { imageSrc: "/images/main/img_evm_lounge_02.png", imageAlt: "Lounge", caption: "Lounge" },
    { imageSrc: "/images/main/img_evm_lounge_03.png", imageAlt: "Lounge", caption: "Lounge" },
    { imageSrc: "/images/main/img_evm_meeting_room_01.png", imageAlt: "Meeting Room", caption: "Meeting Room" },
    { imageSrc: "/images/main/img_evm_meeting_room_02.png", imageAlt: "Meeting Room", caption: "Meeting Room" },
    { imageSrc: "/images/main/img_evm_office_01.png", imageAlt: "Office", caption: "Office" },
    { imageSrc: "/images/main/img_evm_lobby_01.png", imageAlt: "Lobby", caption: "Lobby" },
    { imageSrc: "/images/main/img_evm_lobby_02.png", imageAlt: "Lobby", caption: "Lobby" },
    { imageSrc: "/images/main/img_evm_conference_01.png", imageAlt: "Conference", caption: "Conference" },
    { imageSrc: "/images/main/img_evm_conference_02.png", imageAlt: "Conference", caption: "Conference" },
    { imageSrc: "/images/main/img_evm_toliet_01.png", imageAlt: "Toilet", caption: "Toilet" },
  ],
}

/** People 슬라이드 - 시안 4411-851: 좌측 텍스트 패널 + 우측 3장 카드 */
const PEOPLE_SLIDE: { textPanel: SlideRowTextPanelData; items: SlideRowItem[] } = {
  textPanel: {
    label: "BM Smile Team",
    title: { line1: "최고의", line2: "인재들과 함께" },
    body: "글로벌 SNS·숏폼 마케팅 실전 경험과 \nK-뷰티 성공 공식을 실제로 경험한 팀이 \n빠른 실행과 확산, 스케일업을 이끌고 있습니다.",
    ctaLabel: "People 자세히 보기",
    ctaHref: "/people",
  },
  items: [
    {
      imageSrc: "/images/main/img_main_people_01.png",
      imageAlt: "반려동물을 깊이 이해하는 관점",
      number: "01",
      label: "반려동물을 깊이 \n이해하는 관점",
    },
    {
      imageSrc: "/images/main/img_main_people_02.png",
      imageAlt: "콘텐츠와 SNS를 성장 전략으로",
      number: "02",
      label: "콘텐츠와 SNS를 \n성장 전략으로",
    },
    {
      imageSrc: "/images/main/img_main_people_03.png",
      imageAlt: "변화를 기회로 전환하는 실행력",
      number: "03",
      label: "변화를 기회로 \n전환하는 실행력",
    },
    {
      imageSrc: "/images/main/img_main_people_04.png",
      imageAlt: "변화를 기회로 전환하는 실행력",
      number: "04",
      label: "빠른 실행과 \n데이터 기반의 지속적 개선",
    },
  ],
}

const CONTRIBUTION_SLIDE: { textPanel: SlideRowTextPanelData; items: SlideRowItem[] } = {
  textPanel: {
    label: "CSR",
    title: { line1: "최고로 좋은", line2: "영향력을 만들어냅니다" },
    body: "유기 동물 보호, 입양 연계, 정기 후원 활동을 통해\n반려동물 복지 향상에 실질적으로 기여하고 있습니다.\n단순 기부를 넘어 지속 가능한 지원 구조를 만들어갑니다.",
    ctaLabel: "CSR 자세히 보기",
    ctaHref: "/contribution",
  },
  items: [
    {
      imageSrc: "/images/main/img_main_contribution_01.png",
      imageAlt: "구조동물 보호 활동",
      caption: "구조동물 보호 활동",
    },
    {
      imageSrc: "/images/main/img_main_contribution_02.png",
      imageAlt: "정기 후원 및 물품 지원",
      caption: "정기 후원 및 물품 지원",
    },
    {
      imageSrc: "/images/main/img_main_contribution_03.png",
      imageAlt: "입양 연계 프로그램",
      caption: "입양 연계 프로그램",
    },
  ],
}

/** 미디어 필드 공통 (mediaSlide / mediaSection) */
type MediaSectionFields = {
  id: string
  videoPoster?: string
  videoSrcHvc?: string
  videoSrcH264?: string
  imageSrc?: string
  imageAlt?: string
  number?: string
  title: TitleData
  mediaAspectRatio?: string
}

/** mediaSection 전용: 슬라이드 없이 미디어 + 텍스트 패널(선택) */
type MediaSectionExtra = {
  /** 있으면 SlideRow-text와 동일 스타일의 텍스트 패널 표시 (IP 등) */
  textPanel?: SlideRowTextPanelData
}

/** Discriminated union: all home sections rendered by SectionRenderer. */
export type HomeSection =
  | { type: "hero"; poster: string; hvc: string; h264: string }
  | { type: "slogan" }
  | (MediaSectionFields & { type: "mediaSlide"; slide: HomeSlideData })
  | (MediaSectionFields & MediaSectionExtra & { type: "mediaSection" })
  | { type: "friends"; id?: string }
  | { type: "strategy"; id?: string }
  | { type: "growth"; id?: string }
  | { type: "contact"; id?: string }
  | { type: "contribution"; id?: string }

export const HOME_SECTIONS: HomeSection[] = [
  {
    type: "hero",
    poster: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_main_hero_thumbnail_1771563641863.jpg",
    hvc: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_main_hero_hevc_1771563641863.mp4",
    h264: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_main_hero_h264_1771563641863.mp4",
  },
  { type: "slogan" },
  {
    type: "mediaSlide",
    id: "environment",
    videoPoster: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_main_environment_thumbnail_1771563771574.jpg",
    videoSrcHvc: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_main_environment_hevc_1771563771574.mp4",
    videoSrcH264: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_main_environment_h264_1771563771574.mp4",
    number: "01",
    title: { line1: "No.1", line2: "Environment" },
    mediaAspectRatio: "2560 / 720",
    slide: { type: "slideRow", textPanel: ENVIRONMENT_SLIDE.textPanel, items: ENVIRONMENT_SLIDE.items },
  },
  {
    type: "mediaSection",
    id: "ip",
    imageSrc: "/images/main/img_main_ip.png",
    imageAlt: "Pet IP",
    number: "02",
    title: { line1: "No.1", line2: "Pet IP" },
    textPanel: {
      label: "Korea No.1 Pet IP",
      title: { line1: "최고의 IP, 페스룸으로", line2: "" },
      body: "페스룸은 국내에서 가장 빠르고 안정적으로 성장해 온 반려동물 중심 IP입니다.\n\n연 매출 500억 원을 돌파하며, 자사몰·오픈마켓·글로벌 커머스 전 채널에서 \n제품 경쟁력과 콘텐츠 브랜딩 역량을 확장하고 있습니다.\n\n제품 개발, 콘텐츠, 커머스를 연결하는 통합 구조를 기반으로 \n지속 가능한 성장을 이어가고 있습니다.",
      ctaLabel: "No.1 Pet IP",
      ctaHref: "/pet-ip",
    },
  },
  { type: "friends", id: "friends" },
  {
    type: "mediaSlide",
    id: "people",
    imageSrc: "/images/main/img_main_people.png",
    imageAlt: "People",
    number: "03",
    title: { line1: "No.1", line2: "People" },
    slide: { type: "slideRow", textPanel: PEOPLE_SLIDE.textPanel, items: PEOPLE_SLIDE.items },
  },
  { type: "strategy", id: "strategy" },
  { type: "growth", id: "growth" },
  {
    type: "mediaSlide",
    id: "contribution",
    imageSrc: "/images/main/img_main_contribution.png",
    imageAlt: "Contribution",
    number: "06",
    title: { line1: "No.1", line2: "Contribution" },
    slide: { type: "slideRow", textPanel: CONTRIBUTION_SLIDE.textPanel, items: CONTRIBUTION_SLIDE.items },
  },
  { type: "contact", id: "contact" },
]
