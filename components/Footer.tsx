// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8 text-slate-600 text-xs sm:text-sm">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-slate-800">MoneyFit (머니핏)</p>
          <p className="text-slate-500 mt-0.5">
            본 사이트는 모의 판독 플랫폼으로 공식 기관의 심사 결과와 상이할 수 있습니다.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/guides" className="hover:text-slate-900 transition">
            정책 가이드
          </Link>
          <span>·</span>
          <Link href="/about" className="hover:text-slate-900 transition">
            서비스 소개
          </Link>
          <span>·</span>
          <Link href="/privacy" className="hover:text-slate-900 transition font-medium">
            개인정보처리방침
          </Link>
        </div>
      </div>
    </footer>
  );
}