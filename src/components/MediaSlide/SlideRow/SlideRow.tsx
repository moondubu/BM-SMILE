"use client"

import { useState, type ReactNode } from "react"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper/modules"
import "swiper/css"
import "swiper/css/free-mode"
import "./SlideRow.css"
import SlideCard from "./SlideCard"
import SectionTextPanel from "../SectionTextPanel/SectionTextPanel"

export type SlideRowTextPanel = {
  label?: string
  title: ReactNode
  body?: ReactNode
  ctaLabel?: string
  ctaHref?: string
}

export type SlideRowItem = {
  imageSrc: string
  imageSrcMobile?: string
  imageAlt?: string
  caption?: string
  label?: string
  hoverText?: string
  /** People 슬라이드 등: 카드 오버레이 상단 번호 (01, 02, 03) */
  number?: string
  showActionIcon?: boolean
  actionHref?: string
  actionIcon?: "arrow" | "instagram"
}

type SlideRowProps = {
  textPanel: SlideRowTextPanel
  items: SlideRowItem[]
  linkWholeCard?: boolean
  mobileSlidesPerView?: number | "auto"
}

const SPACE_BETWEEN_DESKTOP = 24
const SPACE_BETWEEN_MOBILE = 16

const CTA_ICON = (
  <svg className="SlideRow-mobileCtaIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <path d="M5 15L15 5M15 5H6M15 5V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function SlideRow({
  textPanel,
  items,
  linkWholeCard = false,
  mobileSlidesPerView = "auto",
}: SlideRowProps) {
  const [activeDesktopIndex, setActiveDesktopIndex] = useState<number | null>(null)
  const [activeMobileIndex, setActiveMobileIndex] = useState<number | null>(null)
  const { label, title, body, ctaLabel, ctaHref } = textPanel

  return (
    <div className="SlideRow">
      <div className="SlideRow-inner SlideRow-inner--desktop">
        <Swiper
          className="SlideRow-swiper"
          modules={[FreeMode]}
          freeMode={{ enabled: true, momentum: true }}
          slidesPerView="auto"
          spaceBetween={SPACE_BETWEEN_DESKTOP}
          speed={400}
          resistanceRatio={0.85}
          grabCursor
          watchSlidesProgress
        >
          <SwiperSlide className="SlideRow-slide SlideRow-slide--pad" aria-hidden />
          <SwiperSlide className="SlideRow-slide SlideRow-slide--text">
            <SectionTextPanel
              label={label}
              title={title}
              body={body}
              ctaLabel={ctaLabel}
              ctaHref={ctaHref}
            />
          </SwiperSlide>
          {items.map((item, i) => (
            <SwiperSlide key={i} className="SlideRow-slide SlideRow-slide--card">
              <SlideCard
                imageSrc={item.imageSrc}
                imageSrcMobile={item.imageSrcMobile}
                imageAlt={item.imageAlt}
                caption={item.caption}
                label={item.label}
                hoverText={item.hoverText}
                number={item.number}
                showActionIcon={item.showActionIcon}
                actionHref={item.actionHref}
                actionIcon={item.actionIcon}
                linkWholeCard={linkWholeCard}
                isActive={activeDesktopIndex === i}
                onToggleActive={() => {
                  setActiveDesktopIndex((prev) => (prev === i ? null : i))
                }}
              />
            </SwiperSlide>
          ))}
          <SwiperSlide className="SlideRow-slide SlideRow-slide--pad" aria-hidden />
        </Swiper>
      </div>

      <div className="SlideRow-mobile">
        <SectionTextPanel
          label={label}
          title={title}
          body={body}
        />

        <Swiper
          className="SlideRow-swiper SlideRow-swiper--mobile"
          slidesPerView={mobileSlidesPerView}
          spaceBetween={SPACE_BETWEEN_MOBILE}
          loop
          speed={400}
          resistanceRatio={0.85}
          grabCursor
          watchSlidesProgress
        >
          {items.map((item, i) => (
            <SwiperSlide key={`mobile-${i}`} className="SlideRow-slide SlideRow-slide--card">
              <SlideCard
                imageSrc={item.imageSrc}
                imageSrcMobile={item.imageSrcMobile}
                imageAlt={item.imageAlt}
                caption={item.caption}
                label={item.label}
                hoverText={item.hoverText}
                number={item.number}
                showActionIcon={item.showActionIcon}
                actionHref={item.actionHref}
                actionIcon={item.actionIcon}
                linkWholeCard={linkWholeCard}
                isActive={activeMobileIndex === i}
                onToggleActive={() => {
                  setActiveMobileIndex((prev) => (prev === i ? null : i))
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {ctaLabel != null && ctaHref != null && (
          <Link href={ctaHref} className="SlideRow-mobileCta CtaButton CtaButton--onDark">
            {ctaLabel}
            {CTA_ICON}
          </Link>
        )}
      </div>
    </div>
  )
}
