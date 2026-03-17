import { prefixPath } from "@/utils/path"
import AppImage from "@/components/AppImage/AppImage"
import "./EnvironmentCulture.css"

const CULTURE_IMAGE_01 = prefixPath("/images/environment/img_environment_culture_01.png")
const CULTURE_IMAGE_02 = prefixPath("/images/environment/img_environment_culture_02.png")
const CULTURE_IMAGE_03 = prefixPath("/images/environment/img_environment_culture_03.png")

const CULTURE_ITEMS = [
  {
    title: "Year-end party",
    description:
      "한 해 동안 함께 만든 성과와 여정을 돌아보는 밤.\n최고급 디너와 다양한 이벤트, 축하 공연이 어우러져\n팀 모두가 함께하는 일 년 중 가장 특별한 순간을 만듭니다.",
    imageSrc: CULTURE_IMAGE_01,
    imageAlt: "연말 파티 현장",
    performanceInfo: "Performance by John Park / Hosted by Lee Hye-sung",
  },
  {
    title: "Monthly Townhall",
    description: "매달 라운지에 모여 비전을 공유하고, 이벤트,\n이달의 MVP 시상식 등 서로의 성과를 축하합니다.",
    imageSrc: CULTURE_IMAGE_02,
    imageAlt: "월간 타운홀 현장",
  },
  {
    title: "MVP Awards",
    description: "이달의 탁월한 성과를 낸 팀과 개인을 위한 MVP 시상식.\n전 직원의 박수와 함께 자긍심을 높입니다.",
    imageSrc: CULTURE_IMAGE_03,
    imageAlt: "MVP 어워즈 무대",
  },
]

export default function EnvironmentCulture() {
  const [firstItem, ...otherItems] = CULTURE_ITEMS

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
            <p>
              매달 열리는 타운홀과 MVP 시상식,
              <br className="EnvironmentCulture-descriptionBreakMobile" />
              유쾌한 사내 이벤트부터 화려한 송년회까지.
              <br />
              비엠스마일은 성취를 함께 축하하고 즐겁게 몰입하는
              <br className="EnvironmentCulture-descriptionBreakMobile" />
              우리만의 에너지를 나눕니다.
            </p>
          </div>
        </header>

        <div className="EnvironmentCulture-contents">
          {/* Top Large Card with Video Support */}
          <article className="EnvironmentCulture-largeCard">
            <div className="EnvironmentCulture-mediaContainer">
              <video
                className="EnvironmentCulture-video"
                autoPlay
                muted
                loop
                playsInline
                poster="https://d2dusau7i4u1ud.cloudfront.net/products/714/video_env_culture_thumbnail_1773384667539.jpg"
              >
                <source src="https://d2dusau7i4u1ud.cloudfront.net/products/714/video_env_culture_hevc_1773384667539.mp4" type="video/mp4; codecs=hvc1" />
                <source src="https://d2dusau7i4u1ud.cloudfront.net/products/714/video_env_culture_h264_1773384667539.mp4" type="video/mp4" />
              </video>
              <div className="EnvironmentCulture-mediaOverlay" />
            </div>
            <div className="EnvironmentCulture-largeCardText">
              <h3 className="EnvironmentCulture-largeCardTitle">{firstItem.title}</h3>
              <p className="EnvironmentCulture-largeCardDescription">{firstItem.description}</p>
              {firstItem.performanceInfo && (
                <p className="EnvironmentCulture-performanceInfo">{firstItem.performanceInfo}</p>
              )}
            </div>
          </article>

          {/* Bottom 2-column Grid */}
          <div className="EnvironmentCulture-grid">
            {otherItems.map((item) => (
              <article key={item.title} className="EnvironmentCulture-card">
                <div className="EnvironmentCulture-cardImageWrapper">
                  <AppImage src={item.imageSrc} alt={item.imageAlt} className="EnvironmentCulture-cardImage" />
                </div>
                <div className="EnvironmentCulture-cardText">
                  <h3 className="EnvironmentCulture-cardTitle">{item.title}</h3>
                  <p className="EnvironmentCulture-cardDescription">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
