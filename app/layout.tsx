import type { Metadata } from "next";
import "./globals.css";

// ★ 본인의 실제 Vercel 주소로 변경해 주세요. (끝에 슬래시 / 없이)
const SITE_URL = "https://money-fit.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MoneyFit - 2026 청년 정책 지원금 30초 모의 판독기",
    template: "%s | MoneyFit",
  },
  description:
    "내 나이, 소득, 지역 조건으로 30초 만에 찾는 숨은 청년 정책 지원금. K-패스, 청년월세, 청년도약계좌 등 맞춤형 혜택과 예상 수령액을 즉시 확인하세요.",
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
  authors: [{ name: "MoneyFit" }],
  creator: "MoneyFit",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    title: "내가 받을 수 있는 청년 지원금은 얼마일까? | MoneyFit",
    description:
      "서류 없이 30초 만에 확인하는 2026 맞춤형 청년 정책 지원금 모의 진단기. 지금 바로 확인해 보세요!",
    siteName: "MoneyFit",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoneyFit - 청년 정책 지원금 30초 모의 판독기",
    description: "내 조건으로 받을 수 있는 청년 혜택과 지원금을 30초 만에 확인하세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
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