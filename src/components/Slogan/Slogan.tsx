import { prefixPath } from "@/utils/path"
import AppImage from "@/components/AppImage/AppImage"
import "./Slogan.css"

export default function Slogan() {
  return (
    <section className="Slogan">
      <AppImage
        src={prefixPath("/images/main/img_main_slogan.svg?v=1")}
        alt="BMSMILE Slogan Image"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </section>
  )
}
