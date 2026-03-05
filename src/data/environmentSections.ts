import type { SectionCardGridItem } from "@/components/SectionCardGrid/SectionCardGrid"

export const ENVIRONMENT_HERO_VIDEO = {
  poster: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_env_hero_thumbnail_1771844226788.jpg",
  hvc: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_env_hero_hevc_1771844226788.mp4",
  h264: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_env_hero_h264_1771844226788.mp4",
} as const

export const ENVIRONMENT_OFFICE_PANEL = {
  label: "Office View",
  titleLine1: "최고의",
  titleLine2: "업무 환경에서",
  body: "대한민국에서 가장 역동적인 상권 중심에 위치한\n비엠스마일의 최신식 업무 공간을 보여줍니다.",
} as const

export const ENVIRONMENT_WORK_LIFE_ITEMS: SectionCardGridItem[] = [
  {
    key: "yeouido-location-map",
    imageSrc: "/images/environment/img_environment_work_life_01.png",
    imageAlt: "여의도 주요 동선 지도",
  },
  {
    key: "the-hyundai-seoul",
    imageSrc: "/images/environment/img_environment_work_life_02.png",
    imageAlt: "더현대 서울 외관",
    label: "도보 1분",
    title: "The Hyundai Seoul",
    description:
      "'더현대 서울'이 바로 옆에 위치하여, 점심시간이나 퇴근 후 언제든 최신 트렌드를 직접 경험하고 미식을 즐길 수 있습니다.",
  },
  {
    key: "yeouido-hangang-park",
    imageSrc: "/images/environment/img_environment_work_life_03.png",
    imageAlt: "여의도 한강공원 풍경",
    label: "도보 5분",
    title: "Yeouido Hangang Park",
    description: "업무 중 휴식이 필요할 때 5분 거리의 한강공원을 산책하며 에너지를 충전합니다.",
  },
]
