import "./page.css"
import SectionRenderer from "@/components/SectionRenderer/SectionRenderer"
import { HOME_SECTIONS } from "@/data/homeSections"

function sectionKey(section: (typeof HOME_SECTIONS)[number]): string {
  switch (section.type) {
    case "mediaSlide":
    case "mediaSection":
      return section.id
    default:
      return section.type
  }
}

export default function Home() {
  return (
    <>
      {HOME_SECTIONS.map((section) => (
        <SectionRenderer key={sectionKey(section)} section={section} />
      ))}
    </>
  )
}
