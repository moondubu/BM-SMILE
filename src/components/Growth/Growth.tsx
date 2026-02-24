import Link from "next/link"
import { prefixPath } from "@/utils/path"
import "./Growth.css"



export default function Growth() {
    return (
        <section className="Growth">
            <div className="Growth-inner">

                {/* Header */}
                <div className="Growth-head SectionHead">
                    <span className="SectionNumber">05</span>
                    <h2 className="SectionTitle">
                        No.1<br />
                        Growth
                    </h2>
                </div>

                {/* Local Growth Section */}
                <div className="Growth-local">
                    <div className="Growth-localContent">
                        <div className="Growth-textContent">
                            <span className="Growth-subTitle">Our Growth</span>
                            <h3 className="Growth-title">
                                최단기간 최고성장을 이루고
                            </h3>
                            <p className="Growth-desc">
                                AI 기반 뉴미디어 전략과 통합 구조를 결합해 <br />
                                산업 평균을 상회하는 성장 속도를 기록하고 있습니다.
                            </p>

                            <Link href="/growth" className="Growth-cta CtaButton CtaButton--onLight">
                                성장 자세히 보기
                                <svg className="Growth-ctaIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                                    <path d="M5 15L15 5M15 5H6M15 5V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>

                        <div className="Growth-stats">
                            <div className="Growth-statItem">
                                <span className="Growth-statLabel">연매출</span>
                                <p className="Growth-statValue">1500억원 +</p>
                            </div>
                            <div className="Growth-statItem">
                                <span className="Growth-statLabel">자사몰 누적 회원 수</span>
                                <p className="Growth-statValue">200만 +</p>
                            </div>
                            <div className="Growth-statItem">
                                <span className="Growth-statLabel">전사 임직원</span>
                                <p className="Growth-statValue">500명 +</p>
                            </div>
                        </div>
                    </div>
                    <div className="Growth-localVisual">
                        <img src={prefixPath("/images/main/img_main_growth_graph.png")} alt="Growth Graph" />
                    </div>
                </div>

                {/* Global Expansion Section */}
                <div className="Growth-global">
                    <div className="Growth-globalBg">
                        <img src={prefixPath("/images/main/img_main_growth_bg.png")} alt="" aria-hidden />
                    </div>

                    <div className="Growth-globalInner">
                        <div className="Growth-globalHeader">
                            <h3 className="Growth-globalTitle">Global Expansion</h3>
                            <p className="Growth-globalDesc">
                                국내에서 검증된 전략과 운영 구조를 기반으로 <br />
                                글로벌 시장 전반으로 확장을 이어가고 있습니다.
                            </p>
                            <span className="Growth-globalDate">(As of Q4 2025)</span>
                        </div>

                        <div className="Growth-globalStats">
                            <div className="Growth-globalStatItem">
                                <div className="Growth-globalStatTop">
                                    <span className="Growth-globalStatLabel">해외 진출 국가 수</span>
                                    <p className="Growth-globalStatValue">11개국</p>
                                </div>
                                <p className="Growth-globalStatList">
                                    한국·중국·일본·태국·대만·홍콩·인도·필리핀·미국·인도네시아·싱가포르
                                </p>
                            </div>
                            <div className="Growth-globalStatItem">
                                <div className="Growth-globalStatTop">
                                    <span className="Growth-globalStatLabel">해외 진출 예정 국가</span>
                                    <p className="Growth-globalStatValue">4개국 +</p>
                                </div>
                                <p className="Growth-globalStatList">
                                    영국·호주·캄보디아·말레이시아 등
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
