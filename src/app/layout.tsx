import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Agentation } from "agentation";
import "./globals.css";

import Header from "@/components/Header/Header"
import FooterSlot from "@/components/Footer/FooterSlot"

const nanumSquareNeo = localFont({
  src: "../../public/fonts/NanumSquareNeo-Variable/woff2/NanumSquareNeo-Variable.woff2",
  variable: "--font-nanumSquareNeo",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BMSmile | 홈",
  description: "BMSmile 공식 홈페이지",
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
    description: "BMSmile 공식 홈페이지",
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
  return (
    <html lang="ko" className={nanumSquareNeo.variable}>
      <head>
        <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" rel="stylesheet" />
      </head>
      <body>
        {process.env.NODE_ENV === "development" ? <Agentation /> : null}
        <Header />
        <main className="main">
          {children}
        </main>
        <FooterSlot />
      </body>
    </html>
  );
}
