import SplitCtaBanner from "@/components/SplitCtaBanner/SplitCtaBanner"

export default function CareerBanner() {
  return (
    <SplitCtaBanner
      className="SplitCtaBanner--career"
      title={
        <>
          BM Smile
          <br />
          Careers
        </>
      }
      body={
        <>
          비엠스마일은 일한 만큼 빠르게 성장하고,
          <br />
          책임진 만큼 더 큰 기회를 얻는 조직입니다.
        </>
      }
      ctaLabel="Career"
      ctaHref="https://bmsmile.career.greetinghr.com/ko/apply"
    />
  )
}
