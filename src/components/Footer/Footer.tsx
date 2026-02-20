import Link from "next/link"
import { prefixPath } from "@/utils/path"
import "./Footer.css"

const COMPANY = {
  name: "비엠스마일",
  owner: "Warren",
  businessLicense: "394-81-01000",
  email: "contact@bmsmile.com",
  address: "서울특별시 영등포구 여의대로 108, 파크원 타워1 47층",
} as const

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-inner">
        <Link href="/" className="Footer-logo">
          <img src={prefixPath("/images/common/img_footer_logo.png")} alt="Business Makes the earth Smile" className="Footer-logoImg" loading="lazy" decoding="async" />
        </Link>
        <div className="Footer-info">
          <p>Corporate Name / {COMPANY.name}</p>
          <p>Owner / {COMPANY.owner}</p>
          <p>Business License / {COMPANY.businessLicense}</p>
          <p>E-Mail / {COMPANY.email}</p>
          <p>Address / {COMPANY.address}</p>
        </div>
        <p className="Footer-copyright">
          Copyright © BMSMILE Co., Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
