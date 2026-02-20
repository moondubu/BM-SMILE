import { prefixPath } from "@/utils/path"
import "./GrowthOverview.css"

const GROWTH_STATS = [
  { label: "연매출", value: "1500억원 +" },
  { label: "자사몰 누적 회원 수", value: "200만 +" },
  { label: "전사 임직원", value: "500명 +" },
]

export default function GrowthOverview() {
  return (
    <section className="GrowthOverview">
      <div className="GrowthOverview-inner">
        <div className="GrowthOverview-header">
          <div className="GrowthOverview-heading">
            <p className="GrowthOverview-label">Growth</p>
            <h2 className="GrowthOverview-title">
              가장 빠르고 안정적으로
              <br />
              성장하고 있습니다
            </h2>
          </div>
          <p className="GrowthOverview-body">
            우리의 성장률은 한국 펫 산업 평균 대비 10배 이상이며,
            <br />
            이는 뉴미디어 활용 역량과 AI 기반의 Pet OS가 만드는 구조적 성장입니다.
          </p>
        </div>

        <div className="GrowthOverview-content">
          <div className="GrowthOverview-statList">
            {GROWTH_STATS.map((item) => (
              <div key={item.label} className="GrowthOverview-statItem">
                <p className="GrowthOverview-statLabel">{item.label}</p>
                <p className="GrowthOverview-statValue">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="GrowthOverview-visual">
            <img src={prefixPath("/images/main/img_main_growth_graph.png")} alt="Growth Performance Graph" />
          </div>
        </div>
      </div>
    </section>
  )
}
