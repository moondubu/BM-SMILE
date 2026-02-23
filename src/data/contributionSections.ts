import type { ImpactSectionMetric } from "@/components/ImpactSection/ImpactSection"

type ContributionPrincipleItem = {
  id: string
  title: string
  description: string
}

export const CONTRIBUTION_HERO = {
  imageSrc: "/images/contribution/img_hero_contribution.png",
  title: "No.1\nCONTRIBUTION",
  subtext: "비엠스마일은 구조동물들의 삶이 바뀌는 구조를 만들어왔습니다.",
} as const

export const CONTRIBUTION_IMPACT = {
  backgroundSrc: "/images/contribution/img_contribution_impact_01.png",
  label: "Impact",
  title: "비엠스마일의 따듯한 성과",
  subTextLines: [
    "정기적인 기부, 보호소 후원, 봉사활동, 입양 커넥션 등",
    "비엠스마일은 최선을 다해 구조동물들을 위한 활동을 이어가고 있습니다.",
  ],
} as const

export const CONTRIBUTION_IMPACT_DATA: ImpactSectionMetric[] = [
  { label: "누적 기부금", value: "736,682,905+" },
  { label: "마당개 집짓기 프로젝트", value: "총 16호 완공", subText: "(2025년 12월 기준)" },
  { label: "입양 연결 성과", value: "30마리+" },
]

export const CONTRIBUTION_PRINCIPLES = {
  label: "How We Operate",
  title: "구조동물을 위한\n우리의 원칙",
  items: [
    {
      id: "01",
      title: "페스룸 = 기부",
      description:
        "매출 기부, SNS 캠페인 등을 통해,\n소비자들의 모든 페스룸 참여가\n선한 영향력으로 이어지도록 합니다.",
    },
    {
      id: "02",
      title: "봉사 활동",
      description:
        "임직원이 직접 보호센터에 가서\n교감·산책·목욕·미용·케어까지\n구조동물과 일상을 함께합니다.",
    },
    {
      id: "03",
      title: "현장 기록",
      description:
        "방문·기록·콘텐츠 제작까지\n현장에서 직접 진행하고 그 변화는\n실제 입양으로 이어집니다.",
    },
    {
      id: "04",
      title: "입양 지원",
      description:
        "봉사&기부로 끝내지 않습니다.\n아이들의 매력이 드러나는 콘텐츠로 가족을\n만나는 순간까지 페스룸이 함께 합니다.",
    },
  ] satisfies ContributionPrincipleItem[],
} as const
