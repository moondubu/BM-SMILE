"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

type SeoGroupLandingRedirectProps = {
  href: string
}

export default function SeoGroupLandingRedirect({ href }: SeoGroupLandingRedirectProps) {
  const router = useRouter()

  useEffect(() => {
    router.replace(href)
  }, [href, router])

  return null
}
