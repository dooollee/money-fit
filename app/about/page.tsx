// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "서비스 소개",
  description: "MoneyFit 서비스의 미션, 데이터 산출 기준 및 법적 면책 고지입니다.",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-slate-800 leading-relaxed">
      <div className="mb-8">
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          ← MoneyFit 홈으로 돌아가기
        </Link>
        <h1 className="text-3xl font-bold mt-3 text-slate-900">서비스 소개 (About Us)</h1>
      </div>

      <section className="space-y-8 text-sm sm:text-base">
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">💡 MoneyFit의 시작</h2>
          <p>
            매년 중앙정부와 각 지자체에서 수많은 청년 지원 정책(월세, 교통비, 자산 형성 등)을 발표하지만, 복잡한 신청 자격 요건과 산재된 정보 탓에 정작 혜택을 놓치는 청년들이 많습니다.
          </p>
          <p className="mt-2">
            <strong>MoneyFit</strong>은 복잡한 서류 준비 전, 단 30초 만에 나의 기본 조건(나이, 가구원수, 소득 구간)으로 신청 가능한 정책의 윤곽과 예상 수령액을 손쉽게 판독할 수 있도록 돕는 비영리성 모의 계산 플랫폼입니다.
          </p>
        </div>

        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
          <h2 className="text-lg font-bold text-amber-900 mb-2">⚠️ 법적 고지 및 면책사항 (Disclaimer)</h2>
          <ul className="list-disc pl-5 space-y-1 text-amber-800 text-sm">
            <li>MoneyFit은 정부 및 공공기관의 공식 제휴 사이트가 아닌 <strong>독립적인 정보 제공 서비스</strong>입니다.</li>
            <li>본 사이트의 판독 결과는 정부 발표 가이드라인을 기반으로 한 모의 연산 결과이며, 최종 선발 여부는 정부 주관 부처(보건복지부, 국토교통부 등)의 공식 심사 결과와 다를 수 있습니다.</li>
            <li>실제 신청 및 정확한 자격 심사는 <strong>복지로(bokjiro.go.kr)</strong> 및 <strong>온통청년</strong> 공식 홈페이지를 통해 직접 확인하셔야 합니다.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">📮 제휴 및 제안</h2>
          <p>
            정책 업데이트 오류 제보나 서비스 개선 아이디어는 언제나 환영합니다.
          </p>
          <p className="mt-1">
            이메일: <a href="mailto:contact@money-fit.kr" className="text-blue-600 underline">contact@money-fit.kr</a>
          </p>
        </div>
      </section>
    </main>
  );
}