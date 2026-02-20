import './ContributionPrinciples.css'

const PRINCIPLES_DATA = [
    {
        id: '01',
        title: '페스룸 = 기부',
        desc: '매출 기부, SNS 캠페인 등을 통해,\n소비자들의 모든 페스룸 참여가\n선한 영향력으로 이어지도록 합니다.'
    },
    {
        id: '02',
        title: '봉사 활동',
        desc: '임직원이 직접 보호센터에 가서\n교감·산책·목욕·미용·케어까지\n구조동물과 일상을 함께합니다.'
    },
    {
        id: '03',
        title: '현장 기록',
        desc: '방문·기록·콘텐츠 제작까지\n현장에서 직접 진행하고 그 변화는\n실제 입양으로 이어집니다.'
    },
    {
        id: '04',
        title: '입양 지원',
        desc: '봉사&기부로 끝내지 않습니다.\n아이들의 매력이 드러나는 콘텐츠로 가족을\n만나는 순간까지 페스룸이 함께 합니다.'
    }
]

export default function ContributionPrinciples() {
    return (
        <section className="ContributionPrinciples">
            <div className="ContributionPrinciples-inner">
                <header className="ContributionPrinciples-header">
                    <span className="ContributionPrinciples-label">How We Operate</span>
                    <h2 className="ContributionPrinciples-title">
                        구조동물을 위한<br />우리의 원칙
                    </h2>
                </header>

                <div className="ContributionPrinciples-contents">
                    <div className="ContributionPrinciples-list">
                        {PRINCIPLES_DATA.map((item) => (
                            <div key={item.id} className="ContributionPrinciples-item">
                                <div className="ContributionPrinciples-numBox">
                                    <span className="ContributionPrinciples-num">{item.id}</span>
                                </div>
                                <div className="ContributionPrinciples-markerBox">
                                    <div className="ContributionPrinciples-dot" />
                                    <div className="ContributionPrinciples-line" />
                                </div>
                                <div className="ContributionPrinciples-textBox">
                                    <h3 className="ContributionPrinciples-itemTitle">{item.title}</h3>
                                    <p className="ContributionPrinciples-itemDesc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
