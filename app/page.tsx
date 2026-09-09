"use client";

import React, { useState } from "react";
import { CheckCircle2, ChevronRight, RefreshCw, Award, ArrowRight, Sparkles } from "lucide-react";

interface Policy {
  id: string;
  name: string;
  category: string;
  benefitSummary: string;
  estimatedAnnualAmount: number;
  minAge: number;
  maxAge: number;
  regions: string[];
  employmentStatus: string[];
  maxIncome: number;
  link: string;
}

const POLICIES_DATA: Policy[] = [
  {
    id: "p1",
    name: "K-패스 / The 경기패스 대중교통 환급",
    category: "교통/생활",
    benefitSummary: "대중교통 이용금액 30% 환급 (청년 기본 30%, 경기도민 무제한 지원)",
    estimatedAnnualAmount: 28,
    minAge: 19,
    maxAge: 39,
    regions: ["전국", "서울", "경기", "인천", "기타 지역"],
    employmentStatus: ["전체", "미취업", "재직자", "프리랜서"],
    maxIncome: 0,
    link: "https://korea-pass.kr",
  },
  {
    id: "p2",
    name: "청년월세 특별지원",
    category: "주거",
    benefitSummary: "실제 납부 임차료 월 최대 20만 원 (최대 12개월 총 240만 원 지원)",
    estimatedAnnualAmount: 240,
    minAge: 19,
    maxAge: 34,
    regions: ["전국", "서울", "경기", "인천", "기타 지역"],
    employmentStatus: ["전체", "미취업", "재직자", "프리랜서"],
    maxIncome: 2400,
    link: "https://www.bokjiro.go.kr",
  },
  {
    id: "p3",
    name: "청년도약계좌 정부기여금 & 비과세",
    category: "금융/자산",
    benefitSummary: "월 최대 70만 원 납입 시 정부기여금(월 최대 3.3만) + 이자소득 100% 비과세",
    estimatedAnnualAmount: 40,
    minAge: 19,
    maxAge: 34,
    regions: ["전국", "서울", "경기", "인천", "기타 지역"],
    employmentStatus: ["재직자", "프리랜서"],
    maxIncome: 7500,
    link: "https://ylaccount.kinfa.or.kr",
  },
  {
    id: "p4",
    name: "국민취업지원제도 (I유형)",
    category: "취업/역량",
    benefitSummary: "구직촉진수당 월 50만 원 x 6개월(총 300만 원) 지원 및 취업 프로그램",
    estimatedAnnualAmount: 300,
    minAge: 18,
    maxAge: 34,
    regions: ["전국", "서울", "경기", "인천", "기타 지역"],
    employmentStatus: ["미취업"],
    maxIncome: 2400,
    link: "https://www.kua.go.kr",
  },
  {
    id: "p5",
    name: "청년 주택드림 청약통장",
    category: "금융/자산",
    benefitSummary: "최대 연 4.5% 우대금리 및 청약 당첨 시 연 2%대 저리 전용 대출 연계",
    estimatedAnnualAmount: 35,
    minAge: 19,
    maxAge: 34,
    regions: ["전국", "서울", "경기", "인천", "기타 지역"],
    employmentStatus: ["재직자", "프리랜서"],
    maxIncome: 5000,
    link: "https://nhuf.molit.go.kr",
  },
];

// 만 나이 정밀 계산 (년/월/일 개별 숫자 기준)
function calculateAge(y: string, m: string, d: string): number | null {
  const year = parseInt(y, 10);
  const month = parseInt(m, 10);
  const day = parseInt(d, 10);

  if (isNaN(year) || isNaN(month) || isNaN(day)) return null;
  if (year < 1950 || year > 2026 || month < 1 || month > 12 || day < 1 || day > 31) return null;

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  let age = currentYear - year;
  const hasBirthdayPassed = currentMonth > month || (currentMonth === month && currentDay >= day);

  if (!hasBirthdayPassed) {
    age -= 1;
  }

  return age >= 0 ? age : null;
}

export default function YouthFitPage() {
  const [step, setStep] = useState(1);

  // 년/월/일 분리 상태
  const [birthYear, setBirthYear] = useState("2000");
  const [birthMonth, setBirthMonth] = useState("01");
  const [birthDay, setBirthDay] = useState("01");

  const [region, setRegion] = useState("경기");
  const [employment, setEmployment] = useState("미취업");
  const [income, setIncome] = useState(2400);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const calculatedAge = calculateAge(birthYear, birthMonth, birthDay);
  const isStep1Valid = calculatedAge !== null && calculatedAge >= 15 && calculatedAge <= 50;

  const userAge = calculatedAge ?? 26;
  const matchedPolicies = POLICIES_DATA.filter((policy) => {
    if (userAge < policy.minAge || userAge > policy.maxAge) return false;
    if (!policy.regions.includes("전국") && !policy.regions.includes(region)) return false;
    if (!policy.employmentStatus.includes("전체") && !policy.employmentStatus.includes(employment)) return false;
    if (policy.maxIncome > 0 && income > policy.maxIncome) return false;
    return true;
  });

  const totalBenefit = matchedPolicies.reduce((acc, cur) => acc + cur.estimatedAnnualAmount, 0);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center p-4 sm:p-8">
      <header className="w-full max-w-xl text-center py-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mb-3">
          <Sparkles className="w-3.5 h-3.5" /> 2026 청년 지원금 진단
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          내 조건으로 받을 수 있는 <br className="sm:hidden" />
          <span className="text-blue-600">청년 지원금</span>은 얼마일까?
        </h1>
        <p className="text-sm text-slate-500 mt-2">
          서류 없이 30초 만에 확인해 보세요.
        </p>
      </header>

      <div className="w-full max-w-xl bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
        {!isSubmitted ? (
          <div>
            {/* 상단 프로그레스 바 */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold text-blue-600">진행률 {step} / 4</span>
              <div className="w-32 bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 h-full transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>

            {/* 스텝 1: 년 / 월 / 일 개별 입력 */}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-center sm:text-left">
                  생년월일을 입력해 주세요.
                </h2>

                <div className="py-2 flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2">
                    {/* 년 */}
                    <div className="relative w-28">
                      <input
                        type="text"
                        inputMode="numeric"
                        maxLength={4}
                        placeholder="2000"
                        value={birthYear}
                        onChange={(e) => setBirthYear(e.target.value.replace(/[^0-9]/g, ""))}
                        className="w-full text-center text-xl font-bold py-3 pr-6 pl-2 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none text-slate-800"
                      />
                      <span className="absolute right-2.5 top-3.5 text-xs text-slate-400 font-medium">년</span>
                    </div>

                    {/* 월 */}
                    <div className="relative w-20">
                      <input
                        type="text"
                        inputMode="numeric"
                        maxLength={2}
                        placeholder="01"
                        value={birthMonth}
                        onChange={(e) => setBirthMonth(e.target.value.replace(/[^0-9]/g, ""))}
                        className="w-full text-center text-xl font-bold py-3 pr-5 pl-2 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none text-slate-800"
                      />
                      <span className="absolute right-2.5 top-3.5 text-xs text-slate-400 font-medium">월</span>
                    </div>

                    {/* 일 */}
                    <div className="relative w-20">
                      <input
                        type="text"
                        inputMode="numeric"
                        maxLength={2}
                        placeholder="01"
                        value={birthDay}
                        onChange={(e) => setBirthDay(e.target.value.replace(/[^0-9]/g, ""))}
                        className="w-full text-center text-xl font-bold py-3 pr-5 pl-2 border-2 border-slate-200 rounded-xl focus:border-blue-600 focus:outline-none text-slate-800"
                      />
                      <span className="absolute right-2.5 top-3.5 text-xs text-slate-400 font-medium">일</span>
                    </div>
                  </div>

                  {/* 나이 결과 뱃지만 깔끔하게 표시 */}
                  <div className="min-h-[32px] flex items-center justify-center">
                    {calculatedAge !== null ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">
                        만 {calculatedAge}세
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400">생년월일을 올바르게 입력해 주세요.</span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* 스텝 2: 지역 선택 */}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">현재 거주 지역을 선택해 주세요.</h2>
                <div className="grid grid-cols-2 gap-3 py-2">
                  {["서울", "경기", "인천", "기타 지역"].map((reg) => (
                    <button
                      key={reg}
                      type="button"
                      onClick={() => setRegion(reg)}
                      className={`p-4 rounded-xl border text-sm font-medium transition-all ${
                        region === reg
                          ? "border-blue-600 bg-blue-50 text-blue-700 font-bold ring-2 ring-blue-600/20"
                          : "border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {reg}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 스텝 3: 고용 상태 */}
            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">현재 취업 상태는 어떠신가요?</h2>
                <div className="space-y-2.5">
                  {[
                    { key: "미취업", label: "미취업 / 취업준비생 / 이직준비" },
                    { key: "재직자", label: "직장인 (정규직, 계약직, 인턴)" },
                    { key: "프리랜서", label: "프리랜서 / 개인사업자" },
                  ].map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setEmployment(item.key)}
                      className={`w-full p-4 text-left rounded-xl border text-sm font-medium transition-all flex items-center justify-between ${
                        employment === item.key
                          ? "border-blue-600 bg-blue-50 text-blue-700 font-bold ring-2 ring-blue-600/20"
                          : "border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                      {employment === item.key && <CheckCircle2 className="w-5 h-5 text-blue-600" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 스텝 4: 소득 구간 */}
            {step === 4 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">작년 기준 연간 소득(세전) 구간은?</h2>
                <div className="space-y-2.5">
                  {[
                    { val: 0, label: "소득 없음 (무소득)" },
                    { val: 2400, label: "연 2,400만 원 이하 (월 약 200만 원)" },
                    { val: 3600, label: "연 3,600만 원 이하 (월 약 300만 원)" },
                    { val: 5000, label: "연 5,000만 원 이하" },
                    { val: 8000, label: "연 5,000만 원 초과" },
                  ].map((item) => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => setIncome(item.val)}
                      className={`w-full p-3.5 text-left rounded-xl border text-sm font-medium transition-all flex items-center justify-between ${
                        income === item.val
                          ? "border-blue-600 bg-blue-50 text-blue-700 font-bold ring-2 ring-blue-600/20"
                          : "border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                      {income === item.val && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 하단 버튼 */}
            <div className="flex gap-3 mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="w-1/3 py-3 rounded-xl border border-slate-200 text-slate-600 font-medium text-sm hover:bg-slate-50"
                >
                  이전
                </button>
              )}

              {step < 4 ? (
                <button
                  type="button"
                  disabled={step === 1 && !isStep1Valid}
                  onClick={() => setStep(step + 1)}
                  className={`flex-1 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-1.5 transition-colors ${
                    step === 1 && !isStep1Valid
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                  }`}
                >
                  다음 <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsSubmitted(true)}
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-1.5 shadow-sm transition-all"
                >
                  결과 바로 확인하기 <Sparkles className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* 진단 리포트 */
          <div className="space-y-6">
            <div className="bg-blue-600 rounded-xl p-6 text-white text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-100">
                맞춤 진단 리포트
              </span>
              <p className="text-sm text-blue-100 mt-1">
                만 {userAge}세 ({birthYear}.{birthMonth.padStart(2, "0")}.{birthDay.padStart(2, "0")}) · {region} · {employment}
              </p>
              <div className="mt-4">
                <span className="text-xs text-blue-200">예상되는 최대 연간 혜택 가치</span>
                <div className="text-3xl sm:text-4xl font-extrabold mt-1">
                  약 {totalBenefit}만 원+
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-slate-800 text-sm flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-600" />
                신청 가능한 정책 ({matchedPolicies.length}건)
              </h3>

              {matchedPolicies.map((p) => (
                <div key={p.id} className="p-4 rounded-xl border border-slate-200 bg-white">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {p.category}
                    </span>
                    <span className="text-xs font-bold text-blue-600">
                      연 약 {p.estimatedAnnualAmount}만 원 상당
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{p.name}</h4>
                  <p className="text-xs text-slate-500 mt-1">{p.benefitSummary}</p>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex justify-end">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      공식 신청처 바로가기 <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                setStep(1);
                setIsSubmitted(false);
              }}
              className="w-full py-3 rounded-xl border border-slate-200 text-slate-600 font-medium text-sm hover:bg-slate-50 flex items-center justify-center gap-1.5"
            >
              <RefreshCw className="w-4 h-4" /> 조건 다시 설정하고 진단하기
            </button>
          </div>
        )}
      </div>

      <footer className="mt-8 text-center text-xs text-slate-400">
        © 2026 MoneyFit. 최신 고시 정책 기반 모의 진단 결과입니다.
      </footer>
    </main>
  );
}