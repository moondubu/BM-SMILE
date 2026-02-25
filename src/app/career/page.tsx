import type { Metadata } from "next"
import CareerEmbed from "./CareerEmbed"
import "./page.css"

export const metadata: Metadata = {
  title: "BMSmile | Career",
  description: "BMSmile Career 페이지",
}

export default function CareerPage() {
  return <CareerEmbed />
}
