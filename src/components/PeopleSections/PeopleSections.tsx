import Link from "next/link"
import "./PeopleSections.css"

const SUPPORT_ROWS = [
  [
    {
      heading: "교육 및 도서지원",
      title: "개인의 성장은 곧 모두의 성장",
      items: ["임직원 업무관련 교육/수강 비용 지원", "업무 관련 도서구매 지원"],
    },
    {
      heading: "근무시간 편의 지원",
      title: "신뢰에 기반한 자유로운 근무",
      items: ["자유로운 연차/반차/반반차 제도 운영", "여유로운 점심시간 (70분)", "자유로운 휴식"],
    },
    {
      heading: "임직원 할인",
      title: "함께하는 이들에게 아낌없이",
      items: ["자사몰 임직원 할인 혜택 제공 (50~60%)", "피부과 제휴혜택 제공"],
    },
  ],
  [
    {
      heading: "근무환경 지원",
      title: "최상의 환경에서 최고를 목표로",
      items: [
        "업무에 필요한 사무기기 지원",
        "사무용품 및 필요 물품 지원",
        "듀얼 모니터 지원",
        "최고급 커피머신/스낵/음료 무제한 제공",
      ],
    },
    {
      heading: "경조사 지원",
      title: "기쁨도, 슬픔도 함께",
      items: ["경조휴무, 경조금, 경조화환 지원", "반려동물 경조사 지원", "생일 반차 지원"],
    },
  ],
  [
    {
      heading: "기념일 선물 및 포상",
      title: "열정과 성과에 보답하는",
      items: ["설/추석 명절 선물 & 입사 웰컴 키트 지급", "창립기념일 휴일", "우수사원 포상", "MVP제도 운영"],
    },
    {
      heading: "종합검진 지원",
      title: "건강은 항상 최우선으로",
      items: ["임직원 종합검진 비용 지원 (2년에 1번)", "검진당일 유급 반차 지원"],
    },
    {
      heading: "조직활성화비 및 야근식대 지원",
      title: "공동체의 활력을 위해서",
      items: ["매월 부서별 조직활성화비 제공", "야근 식대 지원"],
    },
  ],
] as const

const RECRUIT_STEPS = ["서류전형", "인터뷰", "처우 협의", "최종 합격", "입사"] as const

export function PeopleCultureSection() {
  return (
    <section className="PeopleCulture">
      <div className="PeopleSection-inner">
        <header className="PeopleSection-header PeopleSection-header--center">
          <p className="PeopleSection-label">Culture</p>
          <h2 className="PeopleSection-title">빠르게 성장하는 문화</h2>
          <p className="PeopleSection-description">
            우리는 직급이나 연차보다 역할, 책임, 그리고 실행력을 기준으로 사람을 평가합니다.
            <br />
            개인의 성장이 곧 조직의 성장이라고 믿기 때문에, 빠르게 성장할 수 있는 환경을 의도적으로 설계했습니다.
          </p>
        </header>

        <div className="PeopleCulture-grid">
          <article className="PeopleCulture-card">
            <p className="PeopleCulture-number">01</p>
            <h3 className="PeopleCulture-cardTitle">
              직책은 직급이 아니라
              <br />
              역할로 정해집니다
            </h3>
            <p className="PeopleCulture-cardBody">
              비엠스마일에서는 어떤 직급이라도 프로젝트 책임자나 팀장 역할을 맡을 수 있습니다.
              <br />
              직급은 단순한 구분일 뿐, 의사결정과 리딩은 역할과 역량을 기준으로 이루어집니다.
            </p>
          </article>

          <article className="PeopleCulture-card">
            <p className="PeopleCulture-number">02</p>
            <h3 className="PeopleCulture-cardTitle">
              누구나 프로젝트의
              <br />
              주도자가 될 수 있습니다
            </h3>
            <p className="PeopleCulture-cardBody">
              인턴 역시 보조 인력이 아닙니다.
              <br />
              명확한 목표와 책임이 주어지며, 자율성을 기반으로 실제 비즈니스에 영향을 주는 무게감 있는 프로젝트를 직접
              수행할 수 있습니다.
            </p>
          </article>

          <article className="PeopleCulture-card">
            <p className="PeopleCulture-number">03</p>
            <h3 className="PeopleCulture-cardTitle">
              성과는 빠르게
              <br />
              보상으로 연결됩니다
            </h3>
            <p className="PeopleCulture-cardBody">
              개인의 기여와 성과가 명확히 드러나며, 그에 따른 급여·직위·역할의 성장이 빠르게 반영됩니다.
              <br />
              본인의 가치는 연차가 아니라 결과로 증명되고, 그 결과는 곧 커리어의 속도가 됩니다.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export function PeopleSupportSection() {
  return (
    <section className="PeopleSupport">
      <div className="PeopleSection-inner">
        <header className="PeopleSection-header">
          <p className="PeopleSection-label">Support</p>
          <h2 className="PeopleSection-title">복리 후생</h2>
          <p className="PeopleSection-description">모두가 즐겁게 일할 수 있도록 아낌없이 지원합니다.</p>
        </header>

        <div className="PeopleSupport-rows">
          {SUPPORT_ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className={`PeopleSupport-row PeopleSupport-row--${row.length}`}>
              {row.map((card) => (
                <article key={card.heading} className="PeopleSupport-card">
                  <p className="PeopleSupport-cardHeading">{card.heading}</p>
                  <h3 className="PeopleSupport-cardTitle">{card.title}</h3>
                  <ul className="PeopleSupport-list">
                    {card.items.map((item) => (
                      <li key={item} className="PeopleSupport-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PeopleRecruitSection() {
  return (
    <section className="PeopleRecruit">
      <div className="PeopleRecruit-bg" aria-hidden />

      <div className="PeopleSection-inner PeopleRecruit-inner">
        <header className="PeopleSection-header">
          <p className="PeopleSection-label">Recruitment Process</p>
          <h2 className="PeopleSection-title">합류하는 여정</h2>
          <p className="PeopleSection-description">비엠스마일의 함께하기 위한 채용 진행절차입니다.</p>
        </header>

        <div className="PeopleRecruit-content">
          <div className="PeopleRecruit-stepWrap">
            <ol className="PeopleRecruit-steps">
              {RECRUIT_STEPS.map((step, index) => (
                <li key={step} className="PeopleRecruit-step">
                  <span className="PeopleRecruit-stepBadge">{step}</span>
                  {index < RECRUIT_STEPS.length - 1 ? <span className="PeopleRecruit-arrow">▶</span> : null}
                </li>
              ))}
            </ol>
            <div className="PeopleRecruit-divider" />
            <p className="PeopleRecruit-note">• 절차는 직무 및 회사 사정에 따라 변경될 수 있습니다.</p>
          </div>

          <article className="PeopleRecruit-location">
            <div className="PeopleRecruit-locationImage" aria-hidden />
            <div className="PeopleRecruit-locationText">
              <h3 className="PeopleRecruit-locationTitle">인터뷰 장소</h3>
              <p className="PeopleRecruit-locationAddress">
                서울특별시 영등포구 여의대로 108, 파크원 타워1 47F (비엠스마일 본사)
              </p>
            </div>
            <Link href="/location" className="PeopleRecruit-locationCta">
              회사 위치 자세히 보기
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path
                  d="M5 15L15 5M15 5H6M15 5V14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </article>
        </div>
      </div>
    </section>
  )
}

export function PeoplePagerSection() {
  return (
    <section className="PeoplePager">
      <div className="PeopleSection-inner PeoplePager-inner">
        <Link href="/environment" className="PeoplePager-link">
          <span className="PeoplePager-label">Previous</span>
          <span className="PeoplePager-title">Environment</span>
        </Link>
        <Link href="/contribution" className="PeoplePager-link PeoplePager-link--next">
          <span className="PeoplePager-label">Next</span>
          <span className="PeoplePager-title">Contribution</span>
        </Link>
      </div>
    </section>
  )
}
