// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SITE_CONFIG } from "./siteConfig";
import Footer from "@/components/Footer";

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
  verification: {
    google: "mfNqZmNY8DJsbdfaddyBOxD-E9j4febrtPunM85t5A0",
    other: {
      "naver-site-verification": "113dcc85051f0d8054f9f97e0903451903fad084",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1029546769204659"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}