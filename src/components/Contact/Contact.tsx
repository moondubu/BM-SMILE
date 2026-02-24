import ContactBannerShell from "@/components/ContactBanner/ContactBannerShell"

export default function Contact() {
  return (
    <ContactBannerShell
      id="contact"
      title={
        <>
          Contact
          <br />
          BM Smile
        </>
      }
      body={
        <>
          우리는 뉴미디어 전략을 통해 글로벌 반려동물 산업을 선도하고,
          <br />
          수직계열화를 통해 국내 생태계를 주도하고 있습니다.
          <br />
          비엠스마일은 이 모든 여정을 함께할 준비가 되어있습니다.
        </>
      }
      ctaLabel="Contact"
      ctaHref="/contact"
    />
  )
}
