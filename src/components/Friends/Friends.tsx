import Link from "next/link"
import "./Friends.css"

const CTA_ICON = (
  <svg className="Friends-ctaIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <path d="M5 15L15 5M15 5H6M15 5V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Friends() {
  return (
    <section className="Friends">
      <div className="Friends-inner">
        <div className="Friends-content">
          <h2 className="Friends-title">페스룸 프렌즈</h2>
          <p className="Friends-body">
            페스룸 프렌즈는 반려동물 보호자를 위한 <br />
            버티컬 숏폼 콘텐츠, 리워드, 케어 서비스를 <br />
            하나로 연결한 통합 플랫폼입니다.
          </p>
          <p className="Friends-body">
            단순한 앱을 넘어, <br />
            사용자 행동과 반려동물 데이터를 축적·연결해 <br />
            국내 수직계열화 전략의 핵심 인프라로 확장하고 있습니다.
          </p>
          <div className="Friends-ctaGroup">
            <Link href="/friends" className="Friends-ctaButton">
              플랫폼 자세히 보기
              {CTA_ICON}
            </Link>
          </div>
        </div>
        <div className="Friends-visual">
          <img
            src="/images/main/img_main_friends_logo.png"
            alt="페스룸 프렌즈"
            className="Friends-visualImage"
          />
        </div>
      </div>
      <div className="Friends-bg">
        <img
          src="/images/main/img_main_friends_bg.png"
          alt="페스룸 프렌즈"
          className="Friends-bgImage"
        />
      </div>
    </section>
  )
}
