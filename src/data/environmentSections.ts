import type { SectionCardGridItem } from "@/components/SectionCardGrid/SectionCardGrid"

export const ENVIRONMENT_HERO_VIDEO = {
  poster: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_env_hero_thumbnail_1771566174712.jpg",
  hvc: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_env_hero_hevc_1771566174712.mp4",
  h264: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_env_hero_h264_1771566174712.mp4",
} as const

export const ENVIRONMENT_OFFICE_PANEL = {
  label: "Office View",
  titleLine1: "최고의",
  titleLine2: "업무 환경에서",
  body: "대한민국에서 가장 역동적인 상권 중심에 위치한\n비엠스마일의 최신식 업무 공간을 보여줍니다.",
} as const

export const ENVIRONMENT_WORK_LIFE_ITEMS: SectionCardGridItem[] = [
  {
    key: "the-hyundai-seoul",
    imageSrc: "/images/environment/img_environment_work_life_01.png",
    imageAlt: "더현대 서울 외관",
    label: "도보 1분",
    title: "The Hyundai Seoul",
    description:
      "'더현대 서울'이 바로 옆에 위치하여, 점심시간이나 퇴근 후 언제든 최신 트렌드를 직접 경험하고 미식을 즐길 수 있습니다.",
  },
  {
    key: "yeouido-hangang-park",
    imageSrc: "/images/environment/img_environment_work_life_02.png",
    imageAlt: "여의도 한강공원 풍경",
    label: "도보 5분",
    title: "Yeouido Hangang Park",
    description: "업무 중 휴식이 필요할 땐 5분 거리의 한강공원을 산책하며 에너지를 충전합니다.",
  },
]

export const ENVIRONMENT_IMPACT_TEXT_LINES = [
  "비엠스마일의 오피스는 유기동물이 새로운 가족을 기다리는 따뜻한 정거장이 됩니다.",
  "우리는 사내 임시 보호 활동을 상시 운영하며, 아이들이 차가운 철창 대신 사람의 손길 속에서",
  "사회성을 기를 수 있도록 함께 돌봅니다. 반려동물과 공존하는 특별한 일상은 비즈니스",
  "그 이상의 가치를 실현하고자 하는 비엠스마일만의 진심 어린 행보입니다.",
] as const
