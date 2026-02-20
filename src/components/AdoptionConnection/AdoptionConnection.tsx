'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import { prefixPath } from '@/utils/path'
import './AdoptionConnection.css'

const PET_DATA = [
    { src: prefixPath('/images/contribution/img_contribution_adoption_01.png'), name: '감자' },
    { src: prefixPath('/images/contribution/img_contribution_adoption_02.png'), name: '두유' },
    { src: prefixPath('/images/contribution/img_contribution_adoption_03.png'), name: '또봉' },
    { src: prefixPath('/images/contribution/img_contribution_adoption_04.png'), name: '로니' },
    { src: prefixPath('/images/contribution/img_contribution_adoption_05.png'), name: '생강' },
    { src: prefixPath('/images/contribution/img_contribution_adoption_06.png'), name: '올리버' },
    { src: prefixPath('/images/contribution/img_contribution_adoption_07.png'), name: '초코' },
    { src: prefixPath('/images/contribution/img_contribution_adoption_08.png'), name: '파인' },
    { src: prefixPath('/images/contribution/img_contribution_adoption_09.png'), name: '??' },
    { src: prefixPath('/images/contribution/img_contribution_adoption_10.png'), name: '??' },
    { src: prefixPath('/images/contribution/img_contribution_adoption_11.png'), name: '??' },
    { src: prefixPath('/images/contribution/img_contribution_adoption_12.png'), name: '??' },
]

export default function AdoptionConnection() {
    const trackRef = useRef<HTMLDivElement>(null)
    const requestRef = useRef<number | null>(null)
    const xRef = useRef(0)
    const isDragging = useRef(false)
    const startX = useRef(0)
    const [isHovered, setIsHovered] = useState(false)

    const animate = useCallback(() => {
        if (!isDragging.current && !isHovered) {
            // Speed: ~1 pixel per frame at 60fps
            xRef.current -= 1.2

            if (trackRef.current) {
                const groupWidth = trackRef.current.scrollWidth / 2

                // Wrap logic for seamless loop
                if (Math.abs(xRef.current) >= groupWidth) {
                    xRef.current = 0
                }
                trackRef.current.style.transform = `translate3d(${xRef.current}px, 0, 0)`
            }
        }
        requestRef.current = requestAnimationFrame(animate)
    }, [isHovered])

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate)
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current)
        }
    }, [animate])

    // Mouse Events
    const handleMouseDown = (e: React.MouseEvent) => {
        isDragging.current = true
        startX.current = e.pageX - xRef.current

        if (trackRef.current) {
            trackRef.current.style.transition = 'none'
        }
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current) return
        e.preventDefault()

        const x = e.pageX - startX.current
        if (trackRef.current) {
            const groupWidth = trackRef.current.scrollWidth / 2
            let wrappedX = x

            // Seamless wrapping during drag
            if (wrappedX > 0) wrappedX -= groupWidth
            if (Math.abs(wrappedX) >= groupWidth) wrappedX += groupWidth

            xRef.current = wrappedX
            trackRef.current.style.transform = `translate3d(${xRef.current}px, 0, 0)`
        }
    }

    const handleMouseUp = () => {
        isDragging.current = false
    }

    // Touch Events
    const handleTouchStart = (e: React.TouchEvent) => {
        isDragging.current = true
        startX.current = e.touches[0].pageX - xRef.current

        if (trackRef.current) {
            trackRef.current.style.transition = 'none'
        }
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging.current) return

        const x = e.touches[0].pageX - startX.current
        if (trackRef.current) {
            const groupWidth = trackRef.current.scrollWidth / 2
            let wrappedX = x

            if (wrappedX > 0) wrappedX -= groupWidth
            if (Math.abs(wrappedX) >= groupWidth) wrappedX += groupWidth

            xRef.current = wrappedX
            trackRef.current.style.transform = `translate3d(${xRef.current}px, 0, 0)`
        }
    }

    const handleMouseEnter = () => {
        console.log('enter')
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        console.log('leave')
        setIsHovered(false)
        isDragging.current = false
    }

    return (
        <section className="AdoptionConnection">
            <div className="AdoptionConnection-inner">
                <header className="AdoptionConnection-header">
                    <span className="AdoptionConnection-label">Adoption Connection</span>
                    <h2 className="AdoptionConnection-title">따듯한 보금자리와 함께</h2>
                    <div className="AdoptionConnection-subtext">
                        <p>페스룸 1004을 통해 새로운 가족과 함께 따듯한 삶을</p>
                        <p>살아가는 아이들의 행복한 모습을 담았습니다.</p>
                    </div>
                </header>

                <div
                    className="AdoptionConnection-marqueeContainer"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleMouseUp}
                >
                    <div className="AdoptionConnection-marqueeTrack" ref={trackRef}>
                        <div className="AdoptionConnection-marqueeGroup">
                            {PET_DATA.map((item, idx) => (
                                <div key={`pet-1-${idx}`} className="AdoptionConnection-imageItem">
                                    <div className="AdoptionConnection-imageWrapper">
                                        <img src={item.src} alt={item.name} draggable="false" />
                                        <span className="AdoptionConnection-petName">{item.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Duplicate for seamless loop */}
                        <div className="AdoptionConnection-marqueeGroup" aria-hidden="true">
                            {PET_DATA.map((item, idx) => (
                                <div key={`pet-2-${idx}`} className="AdoptionConnection-imageItem">
                                    <div className="AdoptionConnection-imageWrapper">
                                        <img src={item.src} alt="" draggable="false" />
                                        <span className="AdoptionConnection-petName">{item.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
