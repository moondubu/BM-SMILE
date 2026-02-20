'use client'

import './ContributionWay.css'

export default function ContributionWay() {
    return (
        <section className="ContributionWay">
            <div className="ContributionWay-inner">
                <div className="ContributionWay-header">
                    <div className="ContributionWay-titleGroup">
                        <span className="ContributionWay-label">CSR</span>
                        <h2 className="ContributionWay-title">우리가 기여하는 방식</h2>
                    </div>
                    <p className="ContributionWay-description">
                        우리는 '페스룸 1004 프로젝트'를 통해 단순히 <br />
                        보호소를 돕는 것에서 나아가, 구조 {'->'} 보호 {'->'} 입양 {'->'} 이후의 삶까지 <br />
                        구조동물의 삶이 실제로 바뀔 수 있는 흐름을 만들어왔습니다.
                    </p>
                </div>
                <div className="ContributionWay-image">
                    <img
                        src="/images/contribution/img_contribution_csr_01.png"
                        alt="구조동물들과 함께하는 활동 모습"
                    />
                </div>
            </div>
        </section>
    )
}
