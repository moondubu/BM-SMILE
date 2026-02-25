import type { SlideRowItem } from "@/components/MediaSlide"

export const MAIN_HERO_VIDEO = {
  poster: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_main_hero_thumbnail_1771996429202.jpg",
  hvc: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_main_hero_hevc_1771996429202.mp4",
  h264: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_main_hero_h264_1771996429202.mp4",
} as const

export const ENVIRONMENT_SLIDE_ITEMS: SlideRowItem[] = [
  { imageSrc: "/images/main/img_evm_lobby_01.png", imageAlt: "Lobby", caption: "Lobby" },
  { imageSrc: "/images/main/img_evm_lounge_01.png", imageAlt: "Lounge", caption: "Lounge" },
  { imageSrc: "/images/main/img_evm_lounge_02.png", imageAlt: "Lounge", caption: "Lounge" },
  { imageSrc: "/images/main/img_evm_lounge_03.png", imageAlt: "Lounge", caption: "Lounge" },
  { imageSrc: "/images/main/img_evm_office_01.png", imageAlt: "Office", caption: "Office" },
  { imageSrc: "/images/main/img_evm_toilet_01.png", imageAlt: "Toilet", caption: "Toilet" },
  { imageSrc: "/images/main/img_evm_conference_01.png", imageAlt: "Conference", caption: "Conference" },
  { imageSrc: "/images/main/img_evm_conference_02.png", imageAlt: "Conference", caption: "Conference" },
  { imageSrc: "/images/main/img_evm_mettingroom_01.png", imageAlt: "Meeting Room", caption: "Meeting Room" },
  { imageSrc: "/images/main/img_evm_mettingroom_02.png", imageAlt: "Meeting Room", caption: "Meeting Room" },
]

export const MAIN_ENVIRONMENT_SECTION = {
  id: "environment",
  videoPoster: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_main_environment_thumbnail_1771843930604.jpg",
  videoSrcHvc: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_main_environment_hevc_1771843930604.mp4",
  videoSrcH264: "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_main_environment_h264_1771843930604.mp4",
  number: "01",
  titleLine1: "No.1",
  titleLine2: "Environment",
  mediaAspectRatio: "2560 / 720",
  panelLabel: "Workspace",
  panelTitleLine1: "최고의",
  panelTitleLine2: "업무 환경에서",
  panelBody: "대한민국 비즈니스의 중심에서 \n실행과 몰입을 극대화하는 환경을 설계합니다.",
  panelCtaLabel: "업무 환경 자세히 보기",
  panelCtaHref: "/environment",
} as const

export const MAIN_IP_SECTION = {
  id: "ip",
  imageSrc: "/images/main/img_main_ip.png",
  imageAlt: "Pet IP",
  number: "02",
  titleLine1: "No.1",
  titleLine2: "Pet IP",
  panelLabel: "Korea No.1 Pet IP",
  panelTitleLine1: "최고의 IP, 페스룸으로",
  panelTitleLine2: "",
  panelBody:
    "페스룸은 국내에서 가장 빠르고 안정적으로 성장해 온 반려동물 중심 IP입니다.\n\n연 매출 500억 원을 돌파하며, 자사몰·오픈마켓·글로벌 커머스 전 채널에서 \n제품 경쟁력과 콘텐츠 브랜딩 역량을 확장하고 있습니다.\n\n제품 개발, 콘텐츠, 커머스를 연결하는 통합 구조를 기반으로 \n지속 가능한 성장을 이어가고 있습니다.",
  panelCtaLabel: "페스룸 IP 자세히 보기",
  panelCtaHref: "/pethroom",
} as const

export const MAIN_PEOPLE_SECTION = {
  id: "people",
  imageSrc: "/images/main/img_main_people.png",
  imageAlt: "People",
  number: "03",
  titleLine1: "No.1",
  titleLine2: "People",
  mediaAspectRatio: "2560 / 720",
  panelLabel: "BM Smile Team",
  panelTitleLine1: "최고의",
  panelTitleLine2: "인재들과 함께",
  panelBody: "글로벌 SNS·숏폼 마케팅 실전 경험과 \nK-뷰티 성공 공식을 실제로 경험한 팀이 \n빠른 실행과 확산, 스케일업을 이끌고 있습니다.",
  panelCtaLabel: "People 자세히 보기",
  panelCtaHref: "/people",
  items: [
    {
      imageSrc: "/images/main/img_main_people_01.png",
      imageAlt: "반려동물을 깊이 이해하는 관점",
      number: "01",
      label: "반려동물을 깊이 \n이해하는 관점",
      hoverText:
        "반려동물을 사랑하는 사람들이\n같은 마음으로 모였습니다.\n\n반려동물과 함께 출근하며,\n함께하는 경험을 일에 담아냅니다.",
    },
    {
      imageSrc: "/images/main/img_main_people_02.png",
      imageAlt: "콘텐츠와 SNS를 성장 전략으로",
      number: "02",
      label: "콘텐츠와 SNS를 \n성장 전략으로",
      hoverText:
        "UGC·숏폼 기반 확산 전략은\n우리의 핵심 역량입니다.\n\n브랜드의 성장은\n콘텐츠에서 시작됩니다.",
    },
    {
      imageSrc: "/images/main/img_main_people_03.png",
      imageAlt: "변화를 기회로 전환하는 실행력",
      number: "03",
      label: "변화를 기회로 \n전환하는 실행력",
      hoverText:
        "새로운 흐름을\n두려워하지 않고,\n데이터와 실행으로\n빠르게 전환합니다.",
    },
    {
      imageSrc: "/images/main/img_main_people_04.png",
      imageAlt: "변화를 기회로 전환하는 실행력",
      number: "04",
      label: "빠른 실행과 \n데이터 기반의 지속적 개선",
      hoverText:
        "빠르게 만들고, 개선하며,\n완성도를 높입니다.\n\n속도는 경쟁력이고,\n품질은 신뢰입니다.",
    },
  ] satisfies SlideRowItem[],
} as const

export const MAIN_CONTRIBUTION_SECTION = {
  id: "contribution",
  imageSrc: "/images/main/img_main_contribution.png",
  imageAlt: "Contribution",
  number: "06",
  titleLine1: "No.1",
  titleLine2: "Contribution",
  mediaAspectRatio: "2560 / 720",
  panelLabel: "CSR",
  panelTitleLine1: "최고로 좋은",
  panelTitleLine2: "영향력을 만들어냅니다",
  panelBody:
    "유기 동물 보호, 입양 연계, 정기 후원 활동을 통해\n반려동물 복지 향상에 실질적으로 기여하고 있습니다.\n단순 기부를 넘어 지속 가능한 지원 구조를 만들어갑니다.",
  panelCtaLabel: "CSR 자세히 보기",
  panelCtaHref: "/contribution",
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
  ] satisfies SlideRowItem[],
} as const
