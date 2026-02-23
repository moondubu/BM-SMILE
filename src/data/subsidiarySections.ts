import type { SectionCardGridItem } from "@/components/SectionCardGrid/SectionCardGrid"
import type { SlideRowItem } from "@/components/MediaSlide"

const TRANSPARENT_PIXEL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="

export const SUBSIDIARY_HERO = {
  imageSrc: "/images/subsidiary/img_subsidiaries_hero.png",
  title: "BM Smile Group",
  subtext: "BM Smile은 핵심 산업을 중심으로,\n전문 조직과 전략적 포트폴리오를 함께 운영합니다.",
} as const

export const SUBSIDIARY_CORE = {
  id: "subsidiary-core",
  heading: "비엠스마일 그룹의 핵심",
  description:
    "비엠스마일의 반려동물 산업 수직계열화 전략을 직접 실행하고 고도화하는 핵심 관계 회사입니다.",
  items: [
    {
      imageSrc: "/images/subsidiary/img_subsidiaries_keypoint_01.png",
      imageAlt: "국내 1위 펫 IP, PETHROOM",
      number: "국내 1위 펫 IP, PETHROOM",
      caption:
        "비엠스마일은 1위 반려동물 IP 페스룸을 기반으로 그룹 전반의\n사업 구조와 방향성을 설계하는 핵심 조직입니다.",
    },
    {
      imageSrc: "/images/subsidiary/img_subsidiaries_keypoint_02.png",
      imageAlt: "Infinishow",
      number: "Infinishow",
      caption:
        "다양한 서비스에서 축적되는 데이터를 분석해 AI 기반 인사이트를 제공하며,\n반려동물 산업 전반을 연결하는 핵심 데이터 엔진입니다.",
    },
    {
      imageSrc: "/images/subsidiary/img_subsidiaries_keypoint_03.png",
      imageAlt: "JL C&T",
      number: "JL C&T",
      caption:
        "반려동물 제품의 제조 및 공급망을 담당하며,\n제품 기획·생산·공급의 전 과정을 유기적으로 연결합니다.",
    },
  ] satisfies SlideRowItem[],
} as const

export const SUBSIDIARY_IP_EXPANSION = {
  label: "",
  title: "IP 기반 확장 전략 비즈니스",
  description:
    "다양한 산업 경험과 Virtual & Human IP·브랜드·콘텐츠 역량을 기반으로\n그룹의 장기적 확장을 지원하는 전략적 관계회사들입니다.",
  items: [
    {
      key: "artshare",
      imageSrc: TRANSPARENT_PIXEL,
      imageAlt: "",
      label: "Virtual IP Brand",
      title: "아트쉐어",
      description:
        "아트쉐어는 IP 기반 콘텐츠와 브랜드 협업을 중심으로 한 크리에이티브 플랫폼입니다.\n위글위글 IP를 운영하며 그룹 전반의 브랜드 감각과 확장 가능성을 강화합니다.",
    },
    {
      key: "crere",
      imageSrc: TRANSPARENT_PIXEL,
      imageAlt: "",
      label: "Global Beauty Brand",
      title: "크레르",
      description:
        "크레르는 글로벌 코스메틱 브랜드 운영 조직입니다.\n고객 경험 중심의 브랜드 운영 노하우로 비엠스마일의 프리미엄 전략에 기여합니다.",
    },
    {
      key: "newipia",
      imageSrc: TRANSPARENT_PIXEL,
      imageAlt: "",
      label: "Human IP-based MCN Platform",
      title: "뉴아이피아",
      description:
        "개인의 캐릭터와 전문성을 IP로 발전시키고, 이를 미디어와 비즈니스로 확장하는\n휴먼 IP 중심 MCN 플랫폼으로 콘텐츠와 크리에이터, 브랜드를 연결합니다.",
    },
  ] satisfies SectionCardGridItem[],
} as const

export const SUBSIDIARY_VIRTUAL_IP = {
  id: "subsidiary-virtual-ip",
  heading: "Virtual IP",
  description:
    "디지털 기술로 설계된 캐릭터 & 세계관을 중심으로, 콘텐츠와 브랜드 경험을 확장하는 IP입니다.",
  items: [
    {
      imageSrc: "/images/subsidiary/img_subsidiaries_virtual_ip_01.png",
      imageAlt: "Wiggle Wiggle",
      number: "Wiggle Wiggle / 위글위글",
      caption:
        "국내 회원 수 900K+ · 카카오 64K+\n대한민국 최대 규모의 IP OSMU 브랜드입니다.",
    },
    {
      imageSrc: "/images/subsidiary/img_subsidiaries_virtual_ip_02.png",
      imageAlt: "MUMUKI",
      number: "MUMUKI / 무무키",
      caption:
        "일상적인 피부 고민을 중심으로 기본에 충실한 포뮬러와\n사용 경험을 설계하는 프리미엄 스킨케어 브랜드입니다.",
    },
    {
      imageSrc: "/images/subsidiary/img_subsidiaries_virtual_ip_03.png",
      imageAlt: "DERMAGENCY",
      number: "DERMAGENCY / 더마젼시",
      caption:
        "피부 과학과 임상 기준을 바탕으로 전문적인 더마 코스메틱 솔루션을\n제안하는 글로벌 더마 코스메틱 브랜드입니다.",
    },
  ] satisfies SlideRowItem[],
} as const

export const SUBSIDIARY_HUMAN_IP = {
  id: "subsidiary-human-ip",
  heading: "Human IP",
  description:
    "실제 인물의 전문성·스토리·영향력을 기반으로 콘텐츠와 비즈니스로 확장되는 IP입니다.",
  items: [
    {
      imageSrc: "/images/subsidiary/img_subsidiaries_human_ip_01.png",
      imageAlt: "Aori / 김민영",
      number: "Aori / 김민영",
      caption:
        "Youtube 780K+ · Instagram 608K+\n패션·뷰티·라이프스타일 전반으로 확장된 플랫폼형 크리에이터 IP입니다.",
    },
    {
      imageSrc: "/images/subsidiary/img_subsidiaries_human_ip_02.png",
      imageAlt: "Imvely / 임지현",
      number: "Imvely / 임지현",
      caption:
        "Instagram 673K+\n패션과 뷰티를 기반으로 비즈니스를 확장해온 사업가형 인플루언서입니다.",
    },
  ] satisfies SlideRowItem[],
} as const
