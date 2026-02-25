import type { SectionCardGridItem } from "@/components/SectionCardGrid/SectionCardGrid"
import type { ImpactSectionMetric } from "@/components/ImpactSection/ImpactSection"

export const PETHROOM_HERO = {
  imageSrc: "/images/pethroom/img_pethroom_hero.png",
  title: "No.1\nPet IP",
  subtext: "국내 1위 반려동물 IP, 페스룸",
} as const

export const PETHROOM_OVERVIEW = {
  label: "Overview",
  title: "페스룸",
  description:
    "페스룸은 국내에서 가장 빠르고 안정적으로 성장하여,\n현재 국내 연 매출 500억 돌파 및 반려동물 업계 1위를 유지하고 있는 IP입니다.\n자사몰, 오픈마켓, 글로벌 커머스 전 채널에서 반려동물 중심의 제품 개발과\n콘텐츠 중심 브랜딩으로 강력한 팬층을 구축하고 있습니다.",
  imageSrc: "/images/pethroom/img_pethroom_oveview_01.png",
  imageAlt: "페스룸 소개",
  ctaLabel: "페스룸 공식 스토어 바로가기",
  ctaHref: "https://pethroom.com",
} as const

export const PETHROOM_SCALE_ITEMS = [
  { key: "awareness", imageSrc: "", imageAlt: "", label: "국내 브랜드 인지도", title: "1위" },
  { key: "sales", imageSrc: "", imageAlt: "", label: "국내 연매출", title: "500억+" },
  { key: "members", imageSrc: "", imageAlt: "", label: "누적 회원 수", title: "200만+" },
  { key: "subscribers", imageSrc: "", imageAlt: "", label: "구독자 수", title: "2.5만+" },
] satisfies SectionCardGridItem[]

export const PETHROOM_STRENGTH_ITEMS = [
  {
    key: "no1-ip",
    imageSrc: "/images/pethroom/img_pethroom_icon_01.svg",
    imageAlt: "국내 1위 펫 IP",
    title: "국내 1위 펫 IP",
    description:
      "제품 중심 개발과 강력한 콘텐츠 브랜딩으로\n국내 인지도 1위 프리미엄 펫 IP로\n포지셔닝하였습니다.",
  },
  {
    key: "subscription",
    imageSrc: "/images/pethroom/img_pethroom_icon_02.svg",
    imageAlt: "구독 생태계 구축",
    title: "구독 생태계 구축",
    description:
      "지속적인 매출 성장, 브랜드 충성도, 재구매율,\nLTV를 크게 높이는 핵심 성장 동력인\n구독 시스템을 구축하였습니다.",
  },
  {
    key: "factory",
    imageSrc: "/images/pethroom/img_pethroom_icon_03.svg",
    imageAlt: "제조 시설 자체 보유",
    title: "제조 시설 자체 보유",
    description:
      "3,000평 규모의 국내 최대 고양이 모래\n제조 설비 관계 회사인 JL C&T를 통해\n품질·원가·공급망을 직접 통제합니다.",
  },
] satisfies SectionCardGridItem[]

export const PETHROOM_BANNERS = [
  {
    key: "korea",
    imageSrc: "/images/pethroom/img_pethroom_banner_01.png",
    imageAlt: "케이펫페어 현장",
    videoPoster: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_petip_banner_thumbnail_1772002851176.jpg",
    videoSrcHvc: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_petip_banner_hevc_1772002851176.mp4",
    videoSrcH264: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_petip_banner_h264_1772002851176.mp4",
    title: "Korea",
    description: "2022 케이펫페어 최대 규모 부스\n단일 브랜드 역대 최고 매출 달성",
  },
  {
    key: "global",
    imageSrc: "/images/pethroom/img_pethroom_banner_02.png",
    imageAlt: "글로벌 행사",
    videoPoster: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_petip_banner_02_thumbnail_1772002978252.jpg",
    videoSrcHvc: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_petip_banner_02_hevc_1772002978252.mp4",
    videoSrcH264: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_petip_banner_02_h264_1772002978252.mp4",
    title: "China",
    description: "2023 상하이 아시아 펫 박람회\n국내 브랜드 최대 규모 단독 부스",
  },
  {
    key: "culture",
    imageSrc: "/images/pethroom/img_pethroom_banner_03.png",
    imageAlt: "브랜드 문화",
    videoPoster: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_petip_banner_03_thumbnail_1772003007622.jpg",
    videoSrcHvc: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_petip_banner_03_hevc_1772003007622.mp4",
    videoSrcH264: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_petip_banner_03_h264_1772003007622.mp4",
    title: "Japan",
    description: "국내 최초 아마존 재팬 펫 브랜드 1위\n2024 도쿄 인터펫 박람회 참여",
  },
] as const

export const PETHROOM_IMPACT = {
  backgroundSrc: "/images/pethroom/img_pethroom_impact.png",
  backgroundAlt: "Pet Humanization",
  label: "Pet Humanization",
  title: "Pet\nHumanization",
  subTextLines: [
    "페스룸은 펫 휴머나이제이션을 기반으로,\n사람이 아닌 반려동물의 시선과 인지 특성에서 출발해 제품을 설계합니다.\n반려동물의 색각 특성을 고려한 블루 & 옐로우 컬러 시스템을 적용해\n기능성과 직관성을 동시에 만족하는 제품 경험을 제공합니다.",
  ],
  metricsCaption: "글로벌 디자인 어워드 4회 수상",
  metricsDescriptionLines: ["설계 철학과 디자인 완성도를 바탕으로,", "세계적으로도 페스룸의 철학과 경쟁력을 인정받았습니다."],
  metrics: [
    {
      label: "Red Dot Design Award 2025 Winner",
      value: " ",
      logoSrc: "/images/pethroom/img_pethroom_award_01.png",
      logoAlt: "Red Dot",
      subText: "Brands & Communication\n/ Retail Packaging",
    },
    {
      label: "German Design Award",
      value: " ",
      logoSrc: "/images/pethroom/img_pethroom_award_02.png",
      logoAlt: "IDSA",
      subText: "2025 Winner\nBrand Identity & Packaging",
    },
    {
      label: "IDEA 2024 Gallery Selection",
      value: " ",
      logoSrc: "/images/pethroom/img_pethroom_award_03.png",
      logoAlt: "German Design Award",
      subText: "Branding & Packaging",
    },
    {
      label: "Good Design Award (Japan)",
      value: " ",
      logoSrc: "/images/pethroom/img_pethroom_award_04.png",
      logoAlt: "Good Design Award",
      subText: "2024 Winner\nPet Supplies Brand",
    },
  ] satisfies ImpactSectionMetric[],
} as const

export const PETHROOM_BESTSELLER_PRODUCTS = [
  {
    imageSrc: "/images/pethroom/img_pethroom_prod_01.png",
    imageAlt: "더스트 프리 벤토나이트",
    title: "더스트 프리 벤토나이트",
    productNo: 18,
  },
  {
    imageSrc: "/images/pethroom/img_pethroom_prod_02.png",
    imageAlt: "이지 페이셜 콤",
    title: "이지 페이셜 콤",
    productNo: 260,
  },
  {
    imageSrc: "/images/pethroom/img_pethroom_prod_03.png",
    imageAlt: "이지 탱글 커터",
    title: "이지 탱글 커터",
    productNo: 709,
  },
  {
    imageSrc: "/images/pethroom/img_pethroom_prod_04.png",
    imageAlt: "스마트 네일 클리퍼",
    title: "스마트 네일 클리퍼",
    productNo: 141,
  },
  {
    imageSrc: "/images/pethroom/img_pethroom_prod_05.png",
    imageAlt: "덴탈 클린 딥 포인트 칫솔",
    title: "덴탈 클린 & 딥 포인트 칫솔",
    productNo: 152,
  },
] as const

export const PETHROOM_BESTSELLER_SECTION = {
  id: "pethroom-best-seller",
  label: "Best Seller",
  title: "페스룸\n베스트셀러",
  description:
    "페스룸의 디자인 철학을 바탕으로\n많은 반려인들에게 사랑받은\n베스트셀러 제품들을 소개합니다.",
} as const

export const PETHROOM_ARCHIVE_ITEMS = [
  {
    key: "archive-01",
    imageSrc: "/images/pethroom/img_pethroom_desgin_01.png",
    imageAlt: "페스룸 디자인 아카이브 1",
    title: "브랜드 아이덴티티",
  },
  {
    key: "archive-02",
    imageSrc: "/images/pethroom/img_pethroom_desgin_02.png",
    imageAlt: "페스룸 디자인 아카이브 2",
    title: "패키지 디자인",
  },
  {
    key: "archive-03",
    imageSrc: "/images/pethroom/img_pethroom_desgin_03.png",
    imageAlt: "페스룸 디자인 아카이브 3",
    title: "비주얼 시스템",
  },
  {
    key: "archive-04",
    imageSrc: "/images/pethroom/img_pethroom_desgin_04.png",
    imageAlt: "페스룸 디자인 아카이브 4",
    title: "콘텐츠 디자인",
  },
] satisfies SectionCardGridItem[]

export const PETHROOM_UNIVERSE = {
  label: "Universe",
  title: "페스룸 유니버스",
  description: "펫 휴머나이제이션 철학을 바탕으로 전개하는 페스룸의 IP 유니버스 세계관",
  items: [
    { imageSrc: "/images/pethroom/img_pethroom_universe_01.gif", imageAlt: "페스룸 유니버스 1" },
    { imageSrc: "/images/pethroom/img_pethroom_universe_02.gif", imageAlt: "페스룸 유니버스 2" },
    { imageSrc: "/images/pethroom/img_pethroom_universe_03.gif", imageAlt: "페스룸 유니버스 3" },
    { imageSrc: "/images/pethroom/img_pethroom_universe_04.gif", imageAlt: "페스룸 유니버스 4" },
    { imageSrc: "/images/pethroom/img_pethroom_universe_05.gif", imageAlt: "페스룸 유니버스 5" },
    { imageSrc: "/images/pethroom/img_pethroom_universe_06.gif", imageAlt: "페스룸 유니버스 6" },
  ],
} as const
