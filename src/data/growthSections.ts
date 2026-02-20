import type { ImpactSectionMetric } from "@/components/ImpactSection/ImpactSection"
import type { SectionCardGridItem } from "@/components/SectionCardGrid/SectionCardGrid"

export const GROWTH_HERO = {
  imageSrc: "/images/growth/img_growth_hero.png",
  title: "NO.1\nGROWTH",
  subtext: "최단기간 최고성장을 이루다",
} as const

export const GROWTH_IMPACT = {
  backgroundSrc: "/images/growth/img_growth_impact_01.png",
  label: "Global Expansion",
  titleLine1: "국내를 넘어",
  titleLine2: "글로벌로 확산합니다",
  subTextLines: [
    "국내 반려동물 시장에서 수직계열화를 이루어낸 비엠스마일은,",
    "기술과 역량을 바탕으로 전세계적으로 뻗어나가고 있습니다.",
  ],
} as const

export const GROWTH_GLOBAL_STATS: ImpactSectionMetric[] = [
  {
    label: "해외 진출 국가 수",
    value: "11개국",
    subText: "한국・중국・일본・태국・대만・홍콩・인도・필리핀・미국・인도네시아・싱가포르",
  },
  {
    label: "해외 진출 예정 국가",
    value: "4개국 +",
    subText: "영국・호주・캄보디아・말레이시아 등",
  },
]

export const GROWTH_GOAL_SECTION = {
  label: "Goals",
  title: "Growth & Expansion Goals",
  descriptionLine1: "차별화된 글로벌 뉴미디어 & 국내 수직 계열화 전략을 바탕으로,",
  descriptionLine2: "비엠스마일은 다음과 같은 목표를 향해 달려나갑니다.",
  caption: "(페스룸 연 매출 기준)",
} as const

export const GROWTH_GOAL_ITEMS: SectionCardGridItem[] = [
  {
    key: "global",
    imageSrc: "/images/growth/img_growth_graph_01.png",
    imageAlt: "Global Growth Graph",
    title: "Global",
  },
  {
    key: "domestic",
    imageSrc: "/images/growth/img_growth_graph_02.png",
    imageAlt: "Domestic Growth Graph",
    title: "Domestic",
  },
]
