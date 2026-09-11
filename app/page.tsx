// app/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { YOUTH_POLICIES, Policy } from "@/data/policies";

export default function HomePage() {
  // 사용자 입력 상태
  const [age, setAge] = useState<number>(24);
  const [employmentStatus, setEmploymentStatus] = useState<"employed" | "unemployed">("unemployed");
  const [isIndependent, setIsIndependent] = useState<boolean>(true); // 단독 거주(월세 등) 여부
  const [incomeLevel, setIncomeLevel] = useState<"low" | "mid" | "high">("low"); // 중위소득 기준 (low: 60%이하, mid: 100~120%이하, high: 120%초과)

  const [matchedPolicies, setMatchedPolicies] = useState<Policy[] | null>(null);

  const handleCalculate = () => {
    const results = YOUTH_POLICIES.filter((policy) => {
      // 1. 연령 필터
      if (age < policy.ageRange.min || age > policy.ageRange.max) {
        return false;
      }

      // 2. 취업 상태 필터
      if (policy.statusCondition !== "all" && policy.statusCondition !== employmentStatus) {
        return false;
      }

      // 3. 정책별 특정 조건 필터
      if (policy.id === "youth-rent" && !isIndependent) return false;
      if (policy.id === "youth-tomorrow-savings" && incomeLevel === "high") return false;
      if (policy.id === "kua-type-1" && incomeLevel === "high") return false;

      return true;
    });

    setMatchedPolicies(results);
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-slate-800">
      {/* 헤더 섹션 */}
      <section className="text-center mb-10">
        <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100">
          2026 청년 지원 정책 최신 반영
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
          내가 받을 수 있는 청년 지원금은?
        </h1>
        <p className="text-slate-600 mt-2 text-sm sm:text-base">
          조건을 30초 만에 입력하고 신청 가능한 정책과 최대 혜택을 확인하세요.
        </p>
      </section>

      {/* 입력 폼 카드 */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="space-y-6">
          {/* 나이 선택 */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-slate-900">만 나이</label>
              <span className="text-sm font-bold text-blue-600">만 {age}세</span>
            </div>
            <input
              type="range"
              min={18}
              max={39}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>만 18세</span>
              <span>만 39세</span>
            </div>
          </div>

          {/* 취업 상태 */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">취업 여부</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setEmploymentStatus("employed")}
                className={`py-3 rounded-xl text-sm font-medium border transition ${
                  employmentStatus === "employed"
                    ? "border-blue-600 bg-blue-50/50 text-blue-600 font-semibold"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                재직자 / 직장인
              </button>
              <button
                type="button"
                onClick={() => setEmploymentStatus("unemployed")}
                className={`py-3 rounded-xl text-sm font-medium border transition ${
                  employmentStatus === "unemployed"
                    ? "border-blue-600 bg-blue-50/50 text-blue-600 font-semibold"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                미취업 / 취준생 / 학생
              </button>
            </div>
          </div>

          {/* 주거 형태 */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">주거 형태</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setIsIndependent(true)}
                className={`py-3 rounded-xl text-sm font-medium border transition ${
                  isIndependent
                    ? "border-blue-600 bg-blue-50/50 text-blue-600 font-semibold"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                독립 거주 (자취/월세/전세)
              </button>
              <button
                type="button"
                onClick={() => setIsIndependent(false)}
                className={`py-3 rounded-xl text-sm font-medium border transition ${
                  !isIndependent
                    ? "border-blue-600 bg-blue-50/50 text-blue-600 font-semibold"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                부모님과 동거
              </button>
            </div>
          </div>

          {/* 소득 분위 */}
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-2">소득 수준 (가구 기준)</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setIncomeLevel("low")}
                className={`py-2.5 px-2 rounded-xl text-xs sm:text-sm font-medium border transition ${
                  incomeLevel === "low"
                    ? "border-blue-600 bg-blue-50/50 text-blue-600 font-semibold"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                중위 60% 이하<br /><span className="text-[11px] text-slate-400 font-normal">(저소득/차상위)</span>
              </button>
              <button
                type="button"
                onClick={() => setIncomeLevel("mid")}
                className={`py-2.5 px-2 rounded-xl text-xs sm:text-sm font-medium border transition ${
                  incomeLevel === "mid"
                    ? "border-blue-600 bg-blue-50/50 text-blue-600 font-semibold"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                중위 60~120%<br /><span className="text-[11px] text-slate-400 font-normal">(일반 청년층)</span>
              </button>
              <button
                type="button"
                onClick={() => setIncomeLevel("high")}
                className={`py-2.5 px-2 rounded-xl text-xs sm:text-sm font-medium border transition ${
                  incomeLevel === "high"
                    ? "border-blue-600 bg-blue-50/50 text-blue-600 font-semibold"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                중위 120% 초과<br /><span className="text-[11px] text-slate-400 font-normal">(고소득/상위)</span>
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCalculate}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-base shadow-sm transition active:scale-[0.99]"
          >
            지원 가능한 맞춤 혜택 판독하기 ➔
          </button>
        </div>
      </section>

      {/* 결과 섹션 */}
      {matchedPolicies && (
        <section className="mt-12 space-y-6">
          <div className="p-6 bg-blue-50/70 border border-blue-200 rounded-3xl text-center">
            <p className="text-xs sm:text-sm font-semibold text-blue-700">판독 결과 완료</p>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              현재 조건으로 신청 가능한 정책이 <span className="text-blue-600">{matchedPolicies.length}개</span> 있습니다.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              각 정책 카드의 상세 내용과 공식 신청 링크를 확인해 보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {matchedPolicies.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold px-2 py-0.5 bg-slate-100 text-slate-600 rounded">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      만 {item.ageRange.min}~{item.ageRange.max}세
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">{item.summary}</p>
                  <div className="mt-3 p-2.5 bg-slate-50 rounded-xl text-xs text-blue-700 font-semibold">
                    혜택: {item.benefit}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">정부 공식 사이트</span>
                  <a
                    href={item.officialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-blue-600 hover:text-blue-800"
                  >
                    공식 신청처 ↗
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/guides"
              className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 underline underline-offset-4"
            >
              전체 12개 청년 정책 한눈에 비교하러 가기 ➔
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}