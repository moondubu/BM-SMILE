'use client'

import { useEffect, useState } from 'react'
import { prefixPath } from '@/utils/path'
import './ContributionConnectProject.css'

const CONNECT_VIDEO_POSTER = 'https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_contribution_connect_thumbnail_1771563774892.jpg'
const CONNECT_VIDEO_HVC = 'https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_contribution_connect_hevc_1771563774892.mp4'
const CONNECT_VIDEO_H264 = 'https://d2dusau7i4u1ud.cloudfront.net/products/714/vedeo_contribution_connect_h264_1771563774892.mp4'

const getConnectImage = (index: number) =>
    prefixPath(`/images/contribution/img_contribution_connect_${String(index).padStart(2, '0')}.png`)
const getConnectThumbImage = (index: number) =>
    prefixPath(`/images/contribution/img_contribution_connect_${String(index).padStart(2, '0')}_thumb.png`)
const getConnectTopImage = (index: number) =>
    prefixPath(`/images/contribution/img_contribution_connec_top_${String(index).padStart(2, '0')}.png`)

const PROJECT_ITEMS = [
    { title: '구조 & 입양', image: getConnectTopImage(1) },
    { title: '집 지어주기', image: getConnectTopImage(2) },
    { title: '가을 운동회', image: getConnectTopImage(3) },
    { title: '보호소 봉사', image: getConnectTopImage(4) },
]

const JOURNEY_ITEMS = Array.from({ length: 12 }, (_, index) => ({
    alt: `따듯한 여정의 순간 ${index + 1}`,
    image: getConnectImage(index + 1),
    thumb: getConnectThumbImage(index + 1),
}))

export default function ContributionConnectProject() {
    const [activeJourneyIndex, setActiveJourneyIndex] = useState<number | null>(null)
    const isLightboxOpen = activeJourneyIndex !== null

    useEffect(() => {
        if (!isLightboxOpen) return

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = previousOverflow
        }
    }, [isLightboxOpen])

    const closeLightbox = () => setActiveJourneyIndex(null)

    const showPrev = () => {
        if (activeJourneyIndex === null) return
        const prevIndex = (activeJourneyIndex - 1 + JOURNEY_ITEMS.length) % JOURNEY_ITEMS.length
        setActiveJourneyIndex(prevIndex)
    }

    const showNext = () => {
        if (activeJourneyIndex === null) return
        const nextIndex = (activeJourneyIndex + 1) % JOURNEY_ITEMS.length
        setActiveJourneyIndex(nextIndex)
    }

    return (
        <section className="ContributionConnectProject">
            <div className="ContributionConnectProject-inner">
                <div className="ContributionConnectProject-top">
                    <header className="ContributionConnectProject-header">
                        <span className="ContributionConnectProject-label">Connect & Project</span>
                        <h2 className="ContributionConnectProject-title">활동 & 프로젝트</h2>
                        <div className="ContributionConnectProject-description">
                            <p>비엠스마일이 추구하는 CSR은 일회성 기부나 캠페인이 아닙니다.</p>
                            <p>구조동물들이 가족을 만나고 새로운 삶으로 이어질 수 있도록 책임지는 방식입니다.</p>
                        </div>
                    </header>

                    <div className="ContributionConnectProject-cards">
                        <div className="ContributionConnectProject-videoCard">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                controlsList="nodownload"
                                poster={CONNECT_VIDEO_POSTER}
                                preload="none"
                            >
                                <source src={CONNECT_VIDEO_HVC} type="video/mp4; codecs=hvc1" />
                                <source src={CONNECT_VIDEO_H264} type="video/mp4" />
                            </video>
                        </div>

                        {PROJECT_ITEMS.map((item) => (
                            <article key={item.title} className="ContributionConnectProject-card">
                                <img src={item.image} alt={item.title} />
                                <p>{item.title}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="ContributionConnectProject-journey">
                    <h3 className="ContributionConnectProject-journeyTitle">따듯한 여정의 순간들</h3>
                    <div className="ContributionConnectProject-journeyGrid">
                        {JOURNEY_ITEMS.map((item, index) => (
                            <figure key={item.alt} className="ContributionConnectProject-journeyItem">
                                <button
                                    type="button"
                                    className="ContributionConnectProject-journeyButton"
                                    onClick={() => setActiveJourneyIndex(index)}
                                    aria-label={`${item.alt} 크게 보기`}
                                >
                                    <img src={item.thumb} alt={item.alt} />
                                </button>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>

            {isLightboxOpen && activeJourneyIndex !== null && (
                <div
                    className="ContributionConnectProject-lightbox"
                    onClick={closeLightbox}
                    role="button"
                    tabIndex={0}
                    aria-label="이미지 크게 보기 닫기"
                    onKeyDown={(event) => {
                        if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
                            closeLightbox()
                        }
                    }}
                >
                    <div
                        className="ContributionConnectProject-lightboxPanel"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={JOURNEY_ITEMS[activeJourneyIndex].image}
                            alt={JOURNEY_ITEMS[activeJourneyIndex].alt}
                        />

                        <button
                            type="button"
                            className="ContributionConnectProject-lightboxClose"
                            onClick={closeLightbox}
                            aria-label="닫기"
                        >
                            ×
                        </button>

                        <button
                            type="button"
                            className="ContributionConnectProject-lightboxNav ContributionConnectProject-lightboxNav--prev"
                            onClick={showPrev}
                            aria-label="이전 이미지"
                        >
                            ‹
                        </button>

                        <button
                            type="button"
                            className="ContributionConnectProject-lightboxNav ContributionConnectProject-lightboxNav--next"
                            onClick={showNext}
                            aria-label="다음 이미지"
                        >
                            ›
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}
