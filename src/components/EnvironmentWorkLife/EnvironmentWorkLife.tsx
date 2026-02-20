import { prefixPath } from "@/utils/path"
import "./EnvironmentWorkLife.css"

const WORK_LIFE_IMAGE_01 = prefixPath("/images/environment/img_environment_work_life_01.png")
const WORK_LIFE_IMAGE_02 = prefixPath("/images/environment/img_environment_work_life_02.png")

const WORK_LIFE_ITEMS = [
  {
    walkTime: "도보 1분",
    title: "The Hyundai Seoul",
    description:
      "'더현대 서울'이 바로 옆에 위치하여, 점심시간이나 퇴근 후 언제든 최신 트렌드를 직접 경험하고 미식을 즐길 수 있습니다.",
    imageSrc: WORK_LIFE_IMAGE_01,
    imageAlt: "더현대 서울 외관",
  },
  {
    walkTime: "도보 5분",
    title: "Yeouido Hangang Park",
    description: "업무 중 휴식이 필요할 땐 5분 거리의 한강공원을 산책하며 에너지를 충전합니다.",
    imageSrc: WORK_LIFE_IMAGE_02,
    imageAlt: "여의도 한강공원 풍경",
  },
]

export default function EnvironmentWorkLife() {
  return (
    <section className="EnvironmentWorkLife">
      <div className="EnvironmentWorkLife-inner">
        <header className="EnvironmentWorkLife-header">
          <span className="EnvironmentWorkLife-label">Work-Life Balance</span>
          <h2 className="EnvironmentWorkLife-title">
            휴식과 즐거움이
            <br />
            함께하는 공간
          </h2>
          <p className="EnvironmentWorkLife-description">트렌드의 중심지에서 누리는 여유</p>
        </header>

        <div className="EnvironmentWorkLife-grid">
          {WORK_LIFE_ITEMS.map((item) => (
            <article key={item.title} className="EnvironmentWorkLife-card">
              <img src={item.imageSrc} alt={item.imageAlt} className="EnvironmentWorkLife-cardImage" />
              <div className="EnvironmentWorkLife-cardText">
                <p className="EnvironmentWorkLife-cardWalkTime">{item.walkTime}</p>
                <h3 className="EnvironmentWorkLife-cardTitle">{item.title}</h3>
                <p className="EnvironmentWorkLife-cardDescription">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
