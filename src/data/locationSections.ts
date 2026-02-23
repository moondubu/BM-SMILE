export type LocationOffice = {
  key: "korea" | "china" | "japan" | "singapore"
  tabLabel: "KOREA" | "CHINA" | "JAPAN" | "SINGAPORE"
  title: string
  descriptionLines: string[]
  address: string
  mapQuery: string
  mapLink?: string
}

export const LOCATION_OFFICES: LocationOffice[] = [
  {
    key: "korea",
    tabLabel: "KOREA",
    title: "BMSMILE Group (SEOUL)",
    descriptionLines: [
      "브랜드 전략, 제품 기획, 디자인, 콘텐츠, 마케팅 등",
      "비엠스마일의 핵심 기능이 집약된 컨트롤 타워입니다.",
      "다양한 글로벌 프로젝트를 총괄하며, 각 법인과의 유기적 협업을 통해",
      "IP의 일관성과 확장성을 이끌어갑니다.",
    ],
    address: "서울특별시 영등포구 여의대로 108, 파크원 타워1 47층",
    mapQuery: "비엠스마일, 서울특별시 영등포구 여의대로 108 파크원타워 1 47층",
  },
  {
    key: "china",
    tabLabel: "CHINA",
    title: "BMSMILE Group (CHINA)",
    descriptionLines: [
      "중국 내 비엠스마일 그룹사의 사업 전략과 지원하며,",
      "글로벌 생산 및 물류 거점로 기능합니다.",
      "현지 시장에 대한 풍부한 이해를 바탕으로",
      "중국 진출의 교두보 역할을 수행합니다.",
    ],
    address: "500 Yan An Xi Lu, Chang Ning Qu, Shang Hai Shi, 중국 200031",
    mapQuery: "500 Yan An Xi Lu, Chang Ning Qu, Shang Hai Shi, 중국 200031",
  },
  {
    key: "japan",
    tabLabel: "JAPAN",
    title: "BM JAPAN (TOKYO)",
    descriptionLines: [
      "일본 내 온/오프라인 유통을 지원하며,",
      "IP 콜라보레이션과 라이선스 분야에 특화되어 있습니다.",
      "현지 IP 및 기업과의 긴밀한 협업을 통해",
      "브랜드 확장을 이끌고 있습니다.",
    ],
    address: "일본 〒150-0001 Tokyo, Shibuya, Jingumae, 1 Chome−8−1 Daisy原宿",
    mapQuery: "WIGGLE WIGGLE HARAJUKU, 1 Chome-8-1 Jingumae, Shibuya City, Tokyo 150-0001, Japan",
  },
  {
    key: "singapore",
    tabLabel: "SINGAPORE",
    title: "BMSMILE SINGAPORE PTE. LTD.",
    descriptionLines: [
      "비엠스마일의 동남아시아 사업을 총괄하며,",
      "싱가포르를 중심으로 말레이시아, 인도네시아, 태국 등지에서",
      "B2B 비즈니스를 전개하고 있습니다.",
    ],
    address: "6A Shenton Wy, Level 04-01 Downtown Gallery, Singapore 068815",
    mapQuery: "6A Shenton Wy, Level 04-01 Downtown Gallery, Singapore 068815",
  },
]
