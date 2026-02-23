import RoadmapSection from "@/components/RoadmapSection/RoadmapSection"
import StrategySectionHeader from "@/components/StrategySectionHeader/StrategySectionHeader"
import { STRATEGY_GLOBAL_HEADER, STRATEGY_GLOBAL_ROADMAP } from "@/data/strategySections"
import "./StrategyGlobal.css"

const TEAM_CARDS = [
  {
    title: "CEO - Warren",
    description:
      "에이피알(APR)을 창업하여 메디큐브,\n에이프릴스킨 등의 다수 브랜드를 성공시키며\n조 단위 기업으로 키워낸 핵심 인물",
    emphasized: true,
  },
  {
    title: "Core Team",
    description:
      "글로벌 SNS 숏폼 마케팅 실전 경험과\nK-뷰티 성공 공식을 실제로 검증한 팀이\n빠른 실행력 혁신, 스케일업을 이끌고 있습니다.",
    emphasized: false,
  },
] as const

const DIFFERENTIATION_LEGACY_CARDS = [
  {
    title: "마케팅 채널",
    description: "TV 광고, 오프라인 프로모션",
  },
  {
    title: "데이터 활용 방식",
    description: "단순 구매 이력 기반 마케팅",
  },
  {
    title: "팬덤 형성 구조",
    description: "브랜드 로열티에 의존한 형성",
  },
  {
    title: "유통 전략",
    description: "대형 마트 및 전통적 유통 위주",
  },
] as const

const DIFFERENTIATION_BMSMILE_CARDS = [
  {
    title: "마케팅 채널",
    description: "숏폼, UGC기반 컨텐츠 플랫폼",
  },
  {
    title: "데이터 활용 방식",
    description: "IoT & 커뮤니티 데이터 기반 케어",
  },
  {
    title: "팬덤 형성 구조",
    description: "커뮤니티 기반의 자발적 확산",
  },
  {
    title: "유통 전략",
    description: "D2C 앱, 이커머스, 버티컬 플랫폼",
  },
] as const

export default function StrategyGlobal() {
  return (
    <section className="StrategyGlobal">
      <div className="StrategyGlobal-darkBlock">
        <div className="StrategyGlobal-inner">
          <StrategySectionHeader
            label={STRATEGY_GLOBAL_HEADER.label}
            title={STRATEGY_GLOBAL_HEADER.title}
            description={STRATEGY_GLOBAL_HEADER.description}
            pillars={STRATEGY_GLOBAL_HEADER.pillars}
          />

          <div className="StrategyGlobal-teamRow">
            <div className="StrategyGlobal-teamCards">
              {TEAM_CARDS.map((card) => (
                <article
                  key={card.title}
                  className={[
                    "StrategyGlobal-teamCard",
                    ...(card.emphasized ? ["StrategyGlobal-teamCard--primary"] : []),
                  ].join(" ")}
                >
                  <h3 className="StrategyGlobal-teamCardTitle">{card.title}</h3>
                  <p className="StrategyGlobal-teamCardDescription">{card.description}</p>
                </article>
              ))}
            </div>

            <article className="StrategyGlobal-teamSummary">
              <h3 className="StrategyGlobal-teamSummaryTitle">
                압도적 뉴미디어
                {"\n"}
                활용 역량을 &apos;탑재한 팀&apos;
              </h3>
              <p className="StrategyGlobal-teamSummaryDescription">
                비엠스마일은 시도하는 팀이 아니라,
                {"\n"}
                글로벌 활용 공식을 이미
                {"\n"}
                &apos;경험해본 팀&apos;이기에 가능합니다.
              </p>
            </article>
          </div>
        </div>
      </div>

      <RoadmapSection
        className="StrategyGlobal-roadmapSection"
        label={STRATEGY_GLOBAL_ROADMAP.label}
        title={STRATEGY_GLOBAL_ROADMAP.title}
        description={STRATEGY_GLOBAL_ROADMAP.description}
        items={STRATEGY_GLOBAL_ROADMAP.items}
      />

      <div className="StrategyGlobal-lightBlock StrategyGlobal-lightBlock--differentiation">
        <div className="StrategyGlobal-inner">
          <header className="StrategyGlobal-diffHeader">
            <span className="StrategyGlobal-diffLabel">Differentiation</span>
            <h2 className="StrategyGlobal-diffTitle">차별화된 성공 구조</h2>
            <p className="StrategyGlobal-diffDescription">
              기존 FMCG 조직 구조와 차별화된 비엠스마일의 성공 경험 기반의
              {"\n"}
              뉴미디어 전략을 통해 폭발적 확산을 이루어냅니다.
            </p>
          </header>

          <div className="StrategyGlobal-diffCompare">
            <article className="StrategyGlobal-diffColumn">
              <h3 className="StrategyGlobal-diffColumnTitle">Legacy Giants</h3>
              <p className="StrategyGlobal-diffColumnSubtitle">구조상의 한계로 인한 정체 및 전통적 성장</p>
              <div className="StrategyGlobal-diffGrid">
                {DIFFERENTIATION_LEGACY_CARDS.map((card) => (
                  <div key={card.title} className="StrategyGlobal-diffCard">
                    <h4 className="StrategyGlobal-diffCardTitle">{card.title}</h4>
                    <p className="StrategyGlobal-diffCardDescription">{card.description}</p>
                  </div>
                ))}
              </div>
            </article>

            <div className="StrategyGlobal-diffDivider" />

            <article className="StrategyGlobal-diffColumn StrategyGlobal-diffColumn--highlight">
              <h3 className="StrategyGlobal-diffColumnTitle">BM Smile</h3>
              <p className="StrategyGlobal-diffColumnSubtitle">뉴미디어 마케팅 기반의 빠른 실행 및 폭발적 성장</p>
              <div className="StrategyGlobal-diffGrid">
                {DIFFERENTIATION_BMSMILE_CARDS.map((card) => (
                  <div key={card.title} className="StrategyGlobal-diffCard StrategyGlobal-diffCard--dark">
                    <h4 className="StrategyGlobal-diffCardTitle">{card.title}</h4>
                    <p className="StrategyGlobal-diffCardDescription">{card.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
