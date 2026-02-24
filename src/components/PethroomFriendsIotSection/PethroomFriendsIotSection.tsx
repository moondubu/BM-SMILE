import { MediaSlide, SlideRow, type SlideRowTextPanel } from "@/components/MediaSlide"
import { prefixPath } from "@/utils/path"
import "./PethroomFriendsIotSection.css"

const IOT_DEVICES = [
  {
    title: "스마트 자동 급수기",
    description: "섬세한 음수 패턴 관리가 가능한 스마트 자동 급수기입니다. 음수량, 패턴, 주기 등의 데이터를 축적합니다.",
    imageSrc: "/images/friends/img_friends_iot_01.png",
  },
  {
    title: "스마트 자동 급식기",
    description: "섬세한 급여 스케줄 관리가 가능한 스마트 자동 급식기입니다. 식사량, 패턴, 주기 등의 데이터를 축적합니다.",
    imageSrc: "/images/friends/img_friends_iot_02.png",
  },
  {
    title: "고양이 자동 화장실",
    description: "자동으로 배변 관리가 가능한 고양이 자동 화장실입니다. 배변량, 배변 패턴 데이터를 축적합니다.",
    imageSrc: "/images/friends/img_friends_iot_03.png",
  },
  {
    title: "강아지 자동 화장실",
    description: "자동으로 배변 관리가 가능한 강아지 자동 화장실입니다. 배변량, 배변 패턴 데이터를 축적합니다.",
    imageSrc: "/images/friends/img_friends_iot_04.png",
  },
  {
    title: "웨어러블 인식 태그",
    description: "급수기, 급식기, 자동 화장실과 연동되는 초경량 스마트 트래커입니다.",
    imageSrc: "/images/friends/img_friends_iot_05.png",
  },
]

const IOT_TEXT_PANEL: SlideRowTextPanel = {
  label: "02",
  title: (
    <>
      IoT 디바이스
      <br />
      연동 케어 리포트
    </>
  ),
  body: "페스룸 IoT 디바이스를 통해 수집되는 급식량·급수량·체중·배변 패턴 등 다양한 데이터를 하나의 케어 리포트로 통합해 제공합니다.\n반려동물의 일상 변화를 지속적으로 확인할 수 있는 데이터 기반 건강 관리 경험을 제공합니다.\n\n※ 본 자료의 IoT 디바이스 이미지는 제품 개발 단계의 콘셉트 시안으로, 최종 출시 제품의 사양 및 디자인은 변경될 수 있습니다.",
}

export default function PethroomFriendsIotSection() {
  return (
    <section className="PethroomFriendsIot">
      <MediaSlide id="pethroom-friends-iot">
        <SlideRow
          textPanel={IOT_TEXT_PANEL}
          items={IOT_DEVICES.map((item) => ({
            imageSrc: item.imageSrc,
            imageAlt: item.title,
            number: item.title,
            caption: item.description,
          }))}
        />
      </MediaSlide>

      <div className="PethroomFriendsIot-dashboard">
        <img
          src={prefixPath("/images/friends/img_friends_dashboard_01.png")}
          alt="건강지표 대시보드"
          className="PethroomFriendsIot-dashboardImage"
        />
        <div className="PethroomFriendsIot-dashboardText">
          <h3 className="PethroomFriendsIot-dashboardTitle">건강지표 대시보드</h3>
          <p className="PethroomFriendsIot-dashboardDescription">
            반려동물의 건강 상태를 한눈에,
            체중, 체온, 음수량, 배변 등
            실시간 지표로 더 스마트한 케어
          </p>
        </div>
      </div>

      <div className="PethroomFriendsIot-report">
        <img
          src={prefixPath("/images/friends/img_friends_dashboard_02.png")}
          alt="반려동물 케어 리포트 예시"
          className="PethroomFriendsIot-reportImage"
        />
      </div>
    </section>
  )
}
