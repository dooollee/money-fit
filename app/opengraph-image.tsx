import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MoneyFit - 청년 정책 지원금 판독기";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #4f46e5 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          color: "white",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.15)",
            padding: "10px 24px",
            borderRadius: "9999px",
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "28px",
          }}
        >
          ✨ 2026 청년 지원금 맞춤 판독기
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: "900",
            lineHeight: 1.2,
            marginBottom: "20px",
          }}
        >
          내가 놓치고 있는 청년 지원금은 얼마일까?
        </div>
        <div
          style={{
            fontSize: "26px",
            color: "#bfdbfe",
            maxWidth: "800px",
          }}
        >
          생년월일 · 지역 · 소득 조건으로 30초 만에 수령 가능한 최대 혜택 확인
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}