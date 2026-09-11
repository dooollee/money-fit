// app/guides/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { YOUTH_POLICIES, PolicyCategory } from "@/data/policies";

const CATEGORIES: ("전체" | PolicyCategory)[] = [
  "전체",
  "주거",
  "금융/자산",
  "취업/구직",
  "생활/교통/문화",
];

export default function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState<"전체" | PolicyCategory>("전체");

  const filtered =
    selectedCategory === "전체"
      ? YOUTH_POLICIES
      : YOUTH_POLICIES.filter((p) => p.category === selectedCategory);

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-slate-800">
      <div className="mb-8">
        <Link href="/" className="text-sm font-medium text-blue-600 hover:underline">
          ← MoneyFit 홈으로 돌아가기
        </Link>
        <h1 className="text-3xl font-bold mt-3 text-slate-900 tracking-tight">
          2026 대한민국 청년 지원금 완전정복 가이드
        </h1>
        <p className="text-slate-600 mt-2 text-sm sm:text-base">
          중앙정부 및 주요 공공기관에서 운영 중인 핵심 청년 지원 정책 12선을 카테고리별로 확인하세요.
        </p>
      </div>

      {/* 카테고리 필터 탭 */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {cat} {cat === "전체" ? `(${YOUTH_POLICIES.length})` : `(${YOUTH_POLICIES.filter(p => p.category === cat).length})`}
          </button>
        ))}
      </div>

      {/* 정책 카드 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:border-blue-300 transition"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md">
                  {item.category}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  만 {item.ageRange.min}세 ~ {item.ageRange.max}세
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h2>
              <p className="text-sm text-slate-600 mb-4">{item.summary}</p>

              <div className="space-y-1.5 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <div>
                  <span className="font-semibold text-blue-700">혜택: </span>
                  <span className="text-slate-800 font-medium">{item.benefit}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-600">소득 조건: </span>
                  <span className="text-slate-700">{item.incomeCondition}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">공식 기관 안내</span>
              <a
                href={item.officialUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                신청 바로가기 ↗
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* 하단 공통 FAQ */}
      <section className="mt-14 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
        <h3 className="text-lg font-bold text-slate-900 mb-3">자주 묻는 질문 (FAQ)</h3>
        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <div>
            <p className="font-semibold text-slate-900">Q. 여러 지원금을 동시에 중복으로 신청할 수 있나요?</p>
            <p className="mt-0.5 text-slate-600 text-xs sm:text-sm">
              교통 지원(K-패스)과 청약(주택드림통장), 자산형성(청년도약계좌)은 대부분 상호 중복이 가능합니다. 단, 생계비 성격의 현금 수당(국민취업지원제도 1유형 vs 지자체 청년수당) 간에는 동시 참여가 제한될 수 있습니다.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Q. 군 복무 기간은 나이 산정에 반영되나요?</p>
            <p className="mt-0.5 text-slate-600 text-xs sm:text-sm">
              청년도약계좌, 청년주택드림 등 주요 국가 사업은 병역을 이행한 기간(최대 6년)만큼 현재 연령에서 차감 계산해 주므로, 만 35~39세여도 군필자는 수혜 대상이 될 수 있습니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}