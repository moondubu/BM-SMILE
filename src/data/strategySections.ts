import type { ImpactSectionMetric } from "@/components/ImpactSection/ImpactSection"

type StrategyRoadmapItem = {
  id: string
  title: string
  description: string
}

type StrategySectionHeaderPillar = {
  title: string
  description: string
}

export const STRATEGY_HERO = {
  imageSrc: "/images/strategy/img_strategy_hero.png",
  title: "NO.1\nSTRATEGY",
  subtext: "최고의 전략을 통해서 나아가다",
} as const

export const STRATEGY_GLOBAL_HEADER = {
  label: "01",
  title: "Global Strategy",
  description:
    "글로벌 뷰티 산업 시장을 재편한 뉴미디어 전략을 통해\n글로벌 반려동물 산업을 선도합니다.",
  pillars: [
    {
      title: "K-뷰티 플레이북 이식",
      description:
        "뉴미디어/숏폼 마케팅을 펫 산업에 적용하고, 바이럴을\n기반으로 폭발적인 트래픽과 성장을 만들어냅니다.",
    },
    {
      title: "글로벌 확장 컨텐츠",
      description:
        "언어/지역 무관한 비주얼 숏폼 콘텐츠로\n빠르고 안정적으로 글로벌로 확장합니다.",
    },
    {
      title: "디지털 네이티브 IP",
      description:
        "MZ세대 반려인과의 커뮤니케이션을 중심으로\n디지털 플랫폼에 최적화된 IP를 구축합니다.",
    },
  ] satisfies StrategySectionHeaderPillar[],
} as const

export const STRATEGY_GLOBAL_ROADMAP = {
  label: "Global Roadmap",
  title: "뉴미디어 기반 글로벌 확산",
  description:
    "압도적인 뉴미디어 활용 역량을 보유한 비엠스마일 팀을 기반으로,\n누구보다 빠르게 글로벌 반려동물 시장의 뉴미디어화를 선도합니다.",
  items: [
    {
      id: "01",
      title: "1위 IP 기반 뉴미디어 바이럴",
      description:
        "국내 1위 IP 페스룸 기반 컨텐츠 제작 & 크리에이터 시딩을 통해 숏폼 컨텐츠 바이럴 후 UGC 챌린지를 유도합니다.",
    },
    {
      id: "02",
      title: "틱톡 샵 & 아마존 유입",
      description:
        "컨텐츠 확산 및 바이럴을 기반으로 구매 연결 및 틱톡 샵 & 아마존 판매 랭킹 상위에 등극합니다.",
    },
    {
      id: "03",
      title: "B2B 연결",
      description: "판매 성장 성과를 기반으로 글로벌 B2B 업계를 확대합니다.",
    },
    {
      id: "04",
      title: "국가별 확산",
      description: "전세계적으로 페스룸 판매 및\n유통 채널을 구축합니다.",
    },
  ] satisfies StrategyRoadmapItem[],
} as const

export const STRATEGY_DOMESTIC_HEADER = {
  label: "02",
  title: "Domestic Strategy",
  description:
    "파편화된 국내 반려동물 산업을 수직계열화하여\n'반려동물의 전 생애주기'를 통합합니다.",
  backgroundSrc: "/images/strategy/img_strategy_domestic.png",
  pillars: [
    {
      title: "수직 계열화",
      description:
        "제조-유통-서비스-데이터를 직접 운영하여\n산업 전 과정을 하나의 시스템으로 통합합니다.",
    },
    {
      title: "Pet 토탈 OS 구축",
      description:
        "IP-커머스-데이터를 하나로 연결한\n국내 반려동물 산업의 새로운 운영 플랫폼을 만듭니다.",
    },
    {
      title: "독보적 LTV",
      description:
        "평생 머무는 생태계 설계로,\n가장 높은 고객 생애가치(LTV)를 확보합니다.",
    },
  ] satisfies StrategySectionHeaderPillar[],
} as const

export const STRATEGY_DOMESTIC_ROADMAP = {
  label: "Domestic Roadmap",
  title: "국내 반려동물 산업 수직계열화",
  description: "국내 전략의 최종 목적지는 '반려동물의 전 생애주기 통합'입니다.",
  items: [
    {
      id: "01",
      title: "고객 유입 & 락인",
      description:
        "페스룸의 이미 검증된 고품질 제품과 콘텐츠 커뮤니티를 기반으로 강한 유입 구조를 형성하고 반복 구매 및 구독 락인 구조를 구축합니다.",
    },
    {
      id: "02",
      title: "AI 기반 펫 데이터 구축",
      description:
        "유입 고객의 소비/행동/라이프스타일 데이터를 통합하여 AI 기반 건강·케어·상담 데이터 시스템을 구축합니다.",
    },
    {
      id: "03",
      title: "예측 중심 산업으로 전환",
      description:
        "AI 데이터 인프라를 바탕으로 질병, 행동문제, 건강 변화 등을 사전 예측하고 솔루션을 제공하는 구조로 확장합니다.",
    },
    {
      id: "04",
      title: "반려동물 전 생애주기 통합",
      description:
        "반려동물의 삶을 넘어 반려인의 전 생애 케어까지 확장하여 라이프 전체를 아우르는 종합 플랫폼으로 진화합니다.",
    },
  ] satisfies StrategyRoadmapItem[],
} as const

export const STRATEGY_DOMESTIC_IMPACT = {
  backgroundSrc: "/images/strategy/img_strategy_domestic_impact.png",
  label: "No.1 Pet IP",
  title: "국내 1위 IP\n'페스룸'으로 통합합니다",
  subTextLines: [
    "비엠스마일은 국내 인지도 1위 반려동물 IP '페스룸'을 보유한 기업입니다.",
    "페스룸은 비엠스마일이 실현하고자 하는 수직계열화 전략의 핵심 기반으로써 작동합니다.",
  ],
} as const

export const STRATEGY_DOMESTIC_IMPACT_DATA: ImpactSectionMetric[] = [
  { label: "국내 브랜드 인지도", value: "1위" },
  { label: "국내 연매출", value: "500억+" },
  { label: "누적 회원 수", value: "200만+" },
  { label: "구독자 수", value: "2.5만+" },
]
