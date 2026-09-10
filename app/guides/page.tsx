// app/guides/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2026 핵심 청년 지원금 완전정복 가이드 & FAQ",
  description: "K-패스, 청년월세지원, 청년도약계좌 2026년 최신 신청 자격과 핵심 혜택을 한눈에 정리했습니다.",
};

const GUIDES = [
  {
    title: "1. K-패스 (청년 대중교통비 환급)",
    desc: "월 15회 이상 대중교통 이용 시 지출 금액의 최대 30%를 현금 또는 마일리지로 환급해 주는 제도입니다.",
    target: "만 19세 ~ 34세 청년 (지자체 조례에 따라 최대 만 39세)",
    benefit: "청년 30% 환급 (월 62,500원 이용 시 월 약 18,750원 절감)",
    tip: "알뜰교통카드 후속 사업으로, 이동거리 측정 없이 카드 결의만으로 자동 정산되어 훨씬 간편합니다.",
  },
  {
    title: "2. 청년월세 한시 특별지원",
    desc: "부모와 별도로 거주하는 무주택 청년의 주거비 부담을 덜어주기 위해 실제 납부하는 월세를 지원합니다.",
    target: "만 19세 ~ 34세 무주택 청년 (중위소득 60% 이하 & 원가구 100% 이하)",
    benefit: "월 최대 20만 원씩 최대 12개월(또는 24개월) 연속 지원",
    tip: "보증금 5천만 원 이하 및 월세 70만 원 이하 주택 기준이며, 청약통장 가입이 필수 조건입니다.",
  },
  {
    title: "3. 청년도약계좌",
    desc: "청년의 중장기 자산 형성을 지원하기 위한 5년 만기 정부 매칭 저축 계좌입니다.",
    target: "만 19세 ~ 34세 중 개인소득 7,500만 원 이하 & 가구 중위 250% 이하",
    benefit: "매월 최대 70만 원 납입 시 정부 기여금 + 비과세 혜택으로 최대 약 5,000만 원 목돈 마련",
    tip: "육아휴직자나 일정 군 복무 기간이 있는 청년의 경우 복무 기간만큼 연령 계산에서 차감 적용됩니다.",
  },
];

export default function GuidesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-slate-800">
      <div className="mb-8">
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          ← MoneyFit 홈으로 돌아가기
        </Link>
        <h1 className="text-3xl font-bold mt-3 text-slate-900">2026 청년 정책 지원 가이드</h1>
        <p className="text-slate-600 mt-2">
          신청 전 필수 체크포인트와 정책별 세부 혜택을 정리해 드립니다.
        </p>
      </div>

      <div className="space-y-8">
        {GUIDES.map((item, idx) => (
          <article key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h2>
            <p className="text-slate-700 mb-4">{item.desc}</p>
            <div className="space-y-2 text-sm bg-slate-50 p-4 rounded-xl">
              <div><strong className="text-slate-900">지원 대상:</strong> {item.target}</div>
              <div><strong className="text-blue-600">지원 혜택:</strong> {item.benefit}</div>
              <div><strong className="text-emerald-700">신청 팁:</strong> {item.tip}</div>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-12 p-6 bg-slate-100 rounded-2xl">
        <h3 className="text-lg font-bold text-slate-900 mb-2">자주 묻는 질문 (FAQ)</h3>
        <div className="space-y-3 text-sm text-slate-700">
          <div>
            <strong>Q. 다른 지원금과 중복 수령이 가능한가요?</strong>
            <p className="mt-0.5 text-slate-600">교통비(K-패스)와 자산형성(도약계좌)은 성격이 달라 대다수 중복 가능하나, 생계급여 등 특정 복지급여와 월세 지원은 중복 제한이 있을 수 있으니 상세 지침을 확인해야 합니다.</p>
          </div>
          <div>
            <strong>Q. 소득 기준은 세전인가요 세후인가요?</strong>
            <p className="mt-0.5 text-slate-600">정부 지원금 심사의 기준 중위소득 및 소득 요건은 원칙적으로 건강보험료 산출 기준의 <strong>세전 소득</strong>을 바탕으로 판정합니다.</p>
          </div>
        </div>
      </section>
    </main>
  );
}