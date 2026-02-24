import Hero from "@/components/Hero/Hero"
import PageNavigation from "@/components/PageNavigation/PageNavigation"
import SplitIntroSection from "@/components/SplitIntroSection/SplitIntroSection"
import SectionCardGrid from "@/components/SectionCardGrid/SectionCardGrid"
import PethroomFriendsIotSection from "@/components/PethroomFriendsIotSection/PethroomFriendsIotSection"
import PethroomFriendsAiVetSection from "@/components/PethroomFriendsAiVetSection/PethroomFriendsAiVetSection"
import PetPlatformExpansionSection from "@/components/PetPlatformExpansionSection/PetPlatformExpansionSection"
import "./page.css"

export const metadata = {
  title: "BMSmile | Pethroom Friends",
  description: "BMSmile Pethroom Friends 페이지",
}

export default function PethroomFriendsPage() {
  return (
    <div className="PethroomFriendsPage">
      <Hero
        className="PethroomFriendsHero"
        type="image"
        imageSrc="/images/friends/img_friends_hero.png"
        tone="dark"
        title={`NO.1\nPlatform`}
        subtext="버티컬 숏폼 콘텐츠, 리워드, 케어 서비스를 하나의 앱으로"
      />

      <SplitIntroSection
        className="PethroomFriendsOverview"
        label="Overview"
        title="페스룸 프렌즈"
        description="페스룸 프렌즈는 반려동물 보호자를 위한 버티컬 숏폼 콘텐츠, 리워드, 케어 서비스를 하나의 앱으로 통합한 플랫폼입니다. 단순한 앱 서비스가 아닌, 사용자 행동과 반려동물 데이터를 축적·연결해 국내 수직계열화 전략의 핵심 플랫폼 역할을 수행합니다."
        imageSrc="/images/friends/img_friends_overview.png"
        imageAlt="페스룸 프렌즈"
        ctaLabel="페스룸 프렌즈 더 알아보기"
        ctaHref="https://friends.pethroom.com/"
      />

      <SectionCardGrid
        className="PethroomFriendsFlow"
        label="01"
        title={"국내 최초 반려동물\n숏폼 & 리워드 플랫폼"}
        description="반려동물 보호자를 위한 펫 버티컬 숏폼 콘텐츠를 중심으로, 시청·참여·미션을 통해 리워드를 제공하는 펫 특화 콘텐츠 플랫폼입니다."
        items={[
          {
            key: "watch",
            imageSrc: "/images/friends/img_friends_app_01.png",
            imageAlt: "Watch",
            title: "Watch",
            description: "반려동물 보호자를 위한\n펫 버티컬 숏폼 콘텐츠를 시청합니다.",
          },
          {
            key: "engage",
            imageSrc: "/images/friends/img_friends_app_02.png",
            imageAlt: "Engage",
            title: "Engage",
            description: "좋아요, 댓글, 참여형 미션을 통해\n콘텐츠와 상호작용합니다.",
          },
          {
            key: "create",
            imageSrc: "/images/friends/img_friends_app_03.png",
            imageAlt: "Create",
            title: "Create",
            description: "직접 콘텐츠를 업로드하며\nUGC 기반의 확산 구조에 참여합니다.",
          },
          {
            key: "earn",
            imageSrc: "/images/friends/img_friends_app_04.png",
            imageAlt: "Earn Rewards",
            title: "Earn Rewards",
            description: "시청·참여·업로드 활동을 통해\n리워드가 적립됩니다.",
          },
          {
            key: "use",
            imageSrc: "/images/friends/img_friends_app_05.png",
            imageAlt: "Use Rewards",
            title: "Use Rewards",
            description: "리워드는 페스룸 제품 구매,\n래플 응모, AI 생성 등에 사용됩니다.",
          },
        ]}
      />

      <PethroomFriendsIotSection />

      <PethroomFriendsAiVetSection />

      <PetPlatformExpansionSection
        className="PethroomFriendsExpansion"
        label="04"
        title={"페스룸 프렌즈를 중심으로\n확장되는 무한한 펫 비즈니스"}
        description={"콘텐츠 참여와 데이터 축적을 통해 형성된 보호자-반려동물 관계 데이터는\n보험, 의료, 이동, 레저, 장묘 등 고관여 펫 서비스로 자연스럽게 확장됩니다."}
        imageSrc="/images/strategy/img_strategy_petplatform_diagram.png"
        imageAlt="페스룸 프렌즈 비즈니스 확장 구조"
        items={[
          {
            title: "독자적인 마케팅 & 유통 채널",
            description: "외부 플랫폼 의존을 최소화하고,\n펫 인플루언서 네트워크\n자동 형성 생태계를 보유합니다.",
          },
          {
            title: "수직계열화를 위한\n반려동물 데이터 축적",
            description: "페스룸 IoT 디바이스 연동\n& AI 컨설팅 서비스를 통해\n반려동물 데이터를 축적합니다.",
          },
          {
            title: "확장 가능성",
            description: "반려동물 데이터와\n마케팅 자산을 기반으로\n무한한 비즈니스 확장성을 가집니다.",
          },
        ]}
      />

      <PageNavigation
        prev={{ label: "< Prev", href: "/pethroom", chipLabel: "No.1 Pet IP", chipHref: "/pethroom" }}
        next={{ label: "Next >", href: "/people", chipLabel: "No.1 People", chipHref: "/people" }}
      />
    </div>
  )
}
