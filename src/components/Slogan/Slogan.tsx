import { prefixPath } from "@/utils/path"
import "./Slogan.css"

export default function Slogan() {
  return (
    <section className="Slogan">
      <img src={prefixPath("/images/main/img_main_slogan.svg")} alt="No.1 Corporation" fetchPriority="high" />
    </section>
  )
}
