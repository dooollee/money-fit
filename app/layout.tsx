import type { Metadata } from "next";
import "./globals.css";
import { SITE_CONFIG } from "./siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: "%s | MoneyFit",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "청년지원금",
    "청년정책",
    "2026청년지원금",
    "K패스",
    "청년월세지원",
    "청년도약계좌",
    "청년주택드림",
    "국민취업지원제도",
    "지원금모의계산",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_CONFIG.url,
    title: "내가 받을 수 있는 청년 지원금은 얼마일까? | MoneyFit",
    description: SITE_CONFIG.description,
    siteName: "MoneyFit",
  },
  // verification은 추후 구글/네이버 키 발급 시 여기에 추가
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}