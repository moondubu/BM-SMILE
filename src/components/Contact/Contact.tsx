import Link from "next/link"
import "./Contact.css"

export default function Contact() {
  return (
    <section className="Contact" id="contact">
      <div className="Contact-inner">
        <h2 className="Contact-title">
          Contact<br />
          BM Smile
        </h2>
        <p className="Contact-body">
          우리는 뉴미디어 전략을 통해 글로벌 반려동물 산업을 선도하고,<br />
          수직계열화를 통해 국내 생태계를 주도하고 있습니다.<br />
          비엠스마일은 이 모든 여정을 함께할 준비가 되어있습니다.
        </p>
        <Link href="/contact" className="Contact-cta">
          Contact
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path d="M5 15L15 5M15 5H6M15 5V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
