import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Agentation } from "agentation";
import "./globals.css";

import Header from "@/components/Header/Header"
import FooterSlot from "@/components/Footer/FooterSlot"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bm-hp-dev.itsmile.net"

const nanumSquareNeo = localFont({
  src: "../../public/fonts/NanumSquareNeo-Variable/woff2/NanumSquareNeo-Variable.woff2",
  variable: "--font-nanumSquareNeo",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "BMSmile | 홈",
  description: "AI기반 글로벌 펫테크 기업",
  icons: {
    icon: [
      { url: "/images/common/favicon/favicon.ico" },
      { url: "/images/common/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/images/common/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/images/common/favicon/apple-touch-icon.png",
  },
  manifest: "/images/common/favicon/site.webmanifest",
  openGraph: {
    title: "BMSmile | 홈",
    description: "AI기반 글로벌 펫테크 기업",
    images: [
      {
        url: "/images/common/og_img.png",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const enableAgentation = process.env.NODE_ENV === "development" && process.env.NEXT_PUBLIC_ENABLE_AGENTATION === "true"

  return (
    <html lang="ko" className={nanumSquareNeo.variable}>
      <head>
        <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" rel="stylesheet" />
      </head>
      <body>
        {enableAgentation ? <Agentation /> : null}
        <Header />
        <main className="main">
          {children}
        </main>
        <FooterSlot />
      </body>
    </html>
  );
}
