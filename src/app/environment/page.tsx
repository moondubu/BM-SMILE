import SubHero from "@/components/SubHero/SubHero"
import { MediaSlide, SlideRow, type SlideRowTextPanel } from "@/components/MediaSlide"
import EnvironmentWorkLife from "@/components/EnvironmentWorkLife/EnvironmentWorkLife"
import EnvironmentCulture from "@/components/EnvironmentCulture/EnvironmentCulture"
import ImpactSection from "@/components/ImpactSection/ImpactSection"
import Contact from "@/components/Contact/Contact"
import { ENVIRONMENT_SLIDE_ITEMS } from "@/data/homeSections"
import "./page.css"

const ENV_HERO_POSTER = "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_env_hero_thumbnail_1771566174712.jpg"
const ENV_HERO_HVC = "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_env_hero_hevc_1771566174712.mp4"
const ENV_HERO_H264 = "https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_env_hero_h264_1771566174712.mp4"
const ENV_OFFICE_TEXT_PANEL: SlideRowTextPanel = {
  label: "Office View",
  title: (
    <>
      최고의
      <br />
      업무 환경에서
    </>
  ),
  body: "대한민국에서 가장 역동적인 상권 중심에 위치한\n비엠스마일의 최신식 업무 공간을 보여줍니다.",
}

const ENVIRONMENT_IMPACT_TEXT_LINES = [
  "비엠스마일의 오피스는 유기동물이 새로운 가족을 기다리는 따뜻한 정거장이 됩니다.",
  "우리는 사내 임시 보호 활동을 상시 운영하며, 아이들이 차가운 철창 대신 사람의 손길 속에서",
  "사회성을 기를 수 있도록 함께 돌봅니다. 반려동물과 공존하는 특별한 일상은 비즈니스",
  "그 이상의 가치를 실현하고자 하는 비엠스마일만의 진심 어린 행보입니다.",
]

export const metadata = {
  title: "BMSmile | Environment",
  description: "BMSmile Environment 페이지",
}

export default function EnvironmentPage() {
  return (
    <div className="EnvironmentPage">
      <SubHero
        type="video"
        videoPoster={ENV_HERO_POSTER}
        videoSrcHvc={ENV_HERO_HVC}
        videoSrcH264={ENV_HERO_H264}
        tone="dark"
        title={`NO.1\nENVIRONMENT`}
        subtext="몰입을 만드는 최고의 업무 환경"
      />

      <MediaSlide id="environment-office">
        <SlideRow textPanel={ENV_OFFICE_TEXT_PANEL} items={ENVIRONMENT_SLIDE_ITEMS} />
      </MediaSlide>

      <EnvironmentWorkLife />

      <EnvironmentCulture />

      <ImpactSection
        className="EnvironmentImpact"
        backgroundSrc="/images/environment/img_environment_impact_01.png"
        label="Pet Friendly"
        title={
          <>
            Life-Work Synergy
            <br />
            with Pets
          </>
        }
        subTextLines={ENVIRONMENT_IMPACT_TEXT_LINES}
        headerAlign="left"
      />

      <Contact />
    </div>
  )
}
