"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper/modules"
import "swiper/css"
import "swiper/css/free-mode"
import type { SlideRowItem } from "@/components/MediaSlide"
import SlideCard from "@/components/MediaSlide/SlideRow/SlideCard"
import "./SubsidiarySlideSection.css"

type SubsidiarySlideSectionProps = {
  className?: string
  heading: string
  description: string
  items: readonly SlideRowItem[]
}

const SPACE_BETWEEN = 24
const SLIDE_OFFSET = 48
const SPACE_BETWEEN_MOBILE = 12
const SLIDE_OFFSET_MOBILE = 16

export default function SubsidiarySlideSection({
  className,
  heading,
  description,
  items,
}: SubsidiarySlideSectionProps) {
  const rootClassName = ["SubsidiarySlideSection", className].filter(Boolean).join(" ")

  return (
    <section className={rootClassName}>
      <div className="SubsidiarySlideSection-inner">
        <div className="SubsidiarySlideSection-header">
          <h2 className="SubsidiarySlideSection-title">{heading}</h2>
          <p className="SubsidiarySlideSection-description">{description}</p>
        </div>

        <Swiper
          className="SubsidiarySlideSection-swiper"
          modules={[FreeMode]}
          freeMode={{ enabled: true, momentum: true }}
          slidesPerView="auto"
          spaceBetween={SPACE_BETWEEN}
          slidesOffsetBefore={SLIDE_OFFSET}
          slidesOffsetAfter={SLIDE_OFFSET}
          breakpoints={{
            0: {
              spaceBetween: SPACE_BETWEEN_MOBILE,
              slidesOffsetBefore: SLIDE_OFFSET_MOBILE,
              slidesOffsetAfter: SLIDE_OFFSET_MOBILE,
            },
            769: {
              spaceBetween: SPACE_BETWEEN,
              slidesOffsetBefore: SLIDE_OFFSET,
              slidesOffsetAfter: SLIDE_OFFSET,
            },
          }}
          speed={400}
          resistanceRatio={0.85}
          grabCursor
          watchSlidesProgress
        >
          {items.map((item) => (
            <SwiperSlide key={`${item.imageSrc}-${item.number ?? item.caption ?? ""}`} className="SubsidiarySlideSection-slide">
              <SlideCard
                imageSrc={item.imageSrc}
                imageSrcMobile={item.imageSrcMobile}
                imageAlt={item.imageAlt}
                number={item.number}
                caption={item.caption}
                showActionIcon
                actionHref={item.actionHref}
                actionIcon={item.actionIcon}
                linkWholeCard
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
