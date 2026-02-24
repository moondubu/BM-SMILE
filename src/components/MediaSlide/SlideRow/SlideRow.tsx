"use client"

import type { ReactNode } from "react"
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
  body?: string
  ctaLabel?: string
  ctaHref?: string
}

export type SlideRowItem = {
  imageSrc: string
  imageAlt?: string
  caption?: string
  label?: string
  /** People 슬라이드 등: 카드 오버레이 상단 번호 (01, 02, 03) */
  number?: string
  showActionIcon?: boolean
  actionHref?: string
}

type SlideRowProps = {
  textPanel: SlideRowTextPanel
  items: SlideRowItem[]
  linkWholeCard?: boolean
}

const SPACE_BETWEEN = 24

export default function SlideRow({ textPanel, items, linkWholeCard = false }: SlideRowProps) {
  const { label, title, body, ctaLabel, ctaHref } = textPanel

  return (
    <section className="SlideRow">
      <div className="SlideRow-inner">
        <Swiper
          className="SlideRow-swiper"
          modules={[FreeMode]}
          freeMode={{ enabled: true, momentum: true }}
          slidesPerView="auto"
          spaceBetween={SPACE_BETWEEN}
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
                imageAlt={item.imageAlt}
                caption={item.caption}
                label={item.label}
                number={item.number}
                showActionIcon={item.showActionIcon}
                actionHref={item.actionHref}
                linkWholeCard={linkWholeCard}
              />
            </SwiperSlide>
          ))}
          <SwiperSlide className="SlideRow-slide SlideRow-slide--pad" aria-hidden />
        </Swiper>
      </div>
    </section>
  )
}
