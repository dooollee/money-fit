import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MoneyFit - 청년 지원금 진단기",
  description: "내 조건에 맞는 청년 정책 지원금 모의 계산기",
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