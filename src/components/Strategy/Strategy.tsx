import Link from "next/link"
import "./Strategy.css"

export default function Strategy() {
  return (
    <section className="Strategy">
      <div className="Strategy-bg">
        <img
          src="/images/main/img_main_strategy_bg.png"
          alt=""
          className="Strategy-bgImg"
          aria-hidden
        />
      </div>
      <div className="Strategy-inner">
        <div className="Strategy-head SectionHead">
          <span className="SectionNumber">04</span>
          <h2 className="SectionTitle">
            No.1<br />
            Strategy
          </h2>
        </div>
        <p className="Strategy-introHead">구조적 성장을 만드는 전략으로</p>
        <p className="Strategy-introBody">
          글로벌 뉴미디어 전략과 국내 수직계열화를 결합해, <br />비엠스마일만이 구현할 수 있는 압도적 성장 구조를 구축하고 있습니다.
        </p>
        <div className="Strategy-columns">
          <div className="Strategy-column">
            <span className="Strategy-columnLabel">Global</span>
            <h3 className="Strategy-columnTitle">NEW-MEDIA <br />DOMINANCE</h3>
            <p className="Strategy-columnBody">
              K-뷰티 성공 공식을 펫 산업에 적용해 콘텐츠, <br />트래픽, 커머스를 유기적으로 연결합니다. <br />확산과 전환이 동시에 일어나는 성장 구조를 설계합니다.
            </p>
          </div>
          <div className="Strategy-column">
            <span className="Strategy-columnLabel">Domestic</span>
            <h3 className="Strategy-columnTitle">VERTICAL <br />INTEGRATION</h3>
            <p className="Strategy-columnBody">
              IP와 플랫폼 데이터를 중심으로 <br />제품, 커머스, 케어 전 영역을 연결합니다. <br />분절된 펫 산업을 하나의 데이터 기반 구조로 통합합니다.
            </p>
          </div>
        </div>
        <div className="Strategy-ctaWrap">
          <Link href="/strategy" className="Strategy-cta">
            Strategy 자세히 보기
            <svg className="Strategy-ctaIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M5 15L15 5M15 5H6M15 5V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
