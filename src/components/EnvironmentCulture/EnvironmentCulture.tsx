import { prefixPath } from "@/utils/path"
import "./EnvironmentCulture.css"

const CULTURE_IMAGE_01 = prefixPath("/images/environment/img_environment_culture_01.png")
const CULTURE_IMAGE_02 = prefixPath("/images/environment/img_environment_culture_02.png")
const CULTURE_IMAGE_03 = prefixPath("/images/environment/img_environment_culture_03.png")

const CULTURE_ITEMS = [
  {
    title: "Year-end party",
    description:
      "한 해의 발자취를 돌아보며, 최고급 디너, 이벤트, 축하 공연이 함께하는 일 년 중 가장 화려한 하루를 보냅니다.",
    imageSrc: CULTURE_IMAGE_01,
    imageAlt: "연말 파티 현장",
  },
  {
    title: "Monthly Townhall",
    description: "매달 라운지에 모여 비전을 공유하고, 이벤트, 이달의 MVP 시상 등 서로의 성과를 축하합니다.",
    imageSrc: CULTURE_IMAGE_02,
    imageAlt: "월간 타운홀 현장",
  },
  {
    title: "MVP Awards",
    description: "이달의 탁월한 성과를 낸 팀과 개인을 위한 MVP 시상식. 전 직원의 박수와 함께 자긍심을 높입니다.",
    imageSrc: CULTURE_IMAGE_03,
    imageAlt: "MVP 어워즈 무대",
  },
]

export default function EnvironmentCulture() {
  return (
    <section className="EnvironmentCulture">
      <div className="EnvironmentCulture-inner">
        <header className="EnvironmentCulture-header">
          <span className="EnvironmentCulture-label">Culture</span>
          <h2 className="EnvironmentCulture-title">
            함께 즐기고
            <br />
            함께 축하하는 문화
          </h2>
          <div className="EnvironmentCulture-description">
            <p>매달 열리는 타운홀과 MVP 시상식, 유쾌한 사내 이벤트부터 화려한 송년회까지.</p>
            <p>비엠스마일은 성취를 함께 축하하고 즐겁게 몰입하는 우리만의 에너지를 나눕니다.</p>
          </div>
        </header>

        <div className="EnvironmentCulture-grid">
          {CULTURE_ITEMS.map((item) => (
            <article key={item.title} className="EnvironmentCulture-card">
              <img src={item.imageSrc} alt={item.imageAlt} className="EnvironmentCulture-cardImage" />
              <div className="EnvironmentCulture-cardText">
                <h3 className="EnvironmentCulture-cardTitle">{item.title}</h3>
                <p className="EnvironmentCulture-cardDescription">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
