import './ContributionImpact.css'

const IMPACT_DATA = [
    { label: '누적 기부금', value: '736,682,905+' },
    { label: '마당개 집짓기 프로젝트', value: '총 16호 완공' },
    { label: '입양 연결 성과', value: '30마리+' },
]

export default function ContributionImpact() {
    return (
        <section className="ContributionImpact">
            <div className="ContributionImpact-bg">
                <img
                    src="/images/contribution/img_contribution_csr_01.png"
                    alt=""
                    aria-hidden="true"
                />
            </div>

            <div className="ContributionImpact-inner">
                <header className="ContributionImpact-header">
                    <span className="ContributionImpact-label">Impact</span>
                    <h2 className="ContributionImpact-title">비엠스마일의 따듯한 성과</h2>
                    <div className="ContributionImpact-subText">
                        <p>정기적인 기부, 보호소 후원, 봉사활동, 입양 커넥션 등</p>
                        <p>비엠스마일은 최선을 다해 구조동물들을 위한 활동을 이어가고 있습니다.</p>
                    </div>
                </header>

                <div className="ContributionImpact-metrics">
                    {IMPACT_DATA.map((item) => (
                        <div key={item.label} className="ContributionImpact-metric">
                            <p className="ContributionImpact-metricLabel">{item.label}</p>
                            <p className="ContributionImpact-metricValue">{item.value}</p>
                        </div>
                    ))}
                </div>

                <p className="ContributionImpact-date">(2025년 12월 기준)</p>
            </div>
        </section>
    )
}
