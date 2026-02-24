import { prefixPath } from "@/utils/path"
import ContactForm from "./ContactForm"
import "./page.css"

export const metadata = {
  title: "BMSmile | Contact",
  description: "BMSmile Contact 페이지",
}

const PRIVACY_POLICY = [
  "■ 개인정보의 수집·이용 목적",
  "서비스 제공 및 계약의 이행, 구매 및 대금결제, 물품배송 또는 청구지 발송, 회원관리 등을 위한 목적",
  "",
  "■ 수집하려는 개인정보의 항목",
  "이름, 주소, 연락처, 이메일 등",
  "",
  "■ 개인정보의 보유 및 이용 기간",
  "회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외없이 해당정보를 파기합니다.",
].join("\n")

export default function ContactPage() {
  return (
    <section className="ContactPage">
      <div className="ContactPage-inner">
        <h1 className="ContactPage-title">Contact</h1>

        <div className="ContactPage-content">
          <article className="ContactPage-visualCard">
            <img
              src={prefixPath("/images/subsidiary/img_subsidiaries_keypoint_01.png")}
              alt=""
              className="ContactPage-visualImage"
              loading="lazy"
              decoding="async"
            />
            <p className="ContactPage-visualText">
              IP 제안 / 협업 / B2B 사업 문의 등,
              <br />
              소중한 문의에 정성을 다해 답변드리겠습니다.
            </p>
          </article>

          <ContactForm privacyPolicy={PRIVACY_POLICY} />
        </div>
      </div>
    </section>
  )
}
