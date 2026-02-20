import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

const nanumSquareNeo = localFont({
  src: "../../public/fonts/NanumSquareNeo-Variable/woff2/NanumSquareNeo-Variable.woff2",
  variable: "--font-nanumSquareNeo",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BMSmile | 홈",
  description: "BMSmile 공식 홈페이지",
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
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
