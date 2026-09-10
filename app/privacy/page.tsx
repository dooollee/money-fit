// app/privacy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "MoneyFit 서비스의 개인정보 수집, 이용 및 보호 정책 안내입니다.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-slate-800 leading-relaxed">
      <div className="mb-8">
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          ← MoneyFit 홈으로 돌아가기
        </Link>
        <h1 className="text-3xl font-bold mt-3 text-slate-900">개인정보처리방침</h1>
        <p className="text-sm text-slate-500 mt-1">시행일자: 2026년 1월 1일</p>
      </div>

      <section className="space-y-6 text-sm sm:text-base">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">1. 개인정보의 수집 및 이용 목적</h2>
          <p>
            MoneyFit(이하 &apos;서비스&apos;)은 청년 정책 지원금 모의 판독 서비스를 제공하며, 사용자가 모의 계산기 입력창에 기입하는 나이, 소득, 거주지 등의 정보는 <strong>서버 데이터베이스에 영구 저장되지 않고 브라우저 세션 내에서만 즉시 연산</strong>됩니다.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">2. 제3자 광고 사업자 및 쿠키(Cookie) 안내</h2>
          <p>
            본 웹사이트는 운영 및 트래픽 분석, 맞춤형 광고 게재를 위해 Google AdSense를 포함한 제3자 광고 사업자의 기술을 활용할 수 있습니다.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Google 등의 제3자 공급업체는 사용자가 웹사이트를 방문한 기록을 바탕으로 광고를 게재하기 위해 쿠키(Cookie)를 사용합니다.</li>
            <li>사용자는 브라우저 설정 조정을 통해 언제든지 쿠키 저장을 거부하거나 삭제할 수 있습니다.</li>
            <li>Google 맞춤 광고 설정 해제는 <a href="https://adssettings.google.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">Google 광고 설정</a>에서 관리하실 수 있습니다.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">3. 데이터 보관 및 파기</h2>
          <p>
            서비스는 별도의 회원가입 없이 이용 가능하며, 어떠한 개인 식별 정보(주민등록번호, 연락처 등)도 요구하거나 서버에 보관하지 않습니다.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-2">4. 개인정보 보호책임자 및 문의</h2>
          <p>
            서비스 이용 중 발생하는 개인정보 보호 관련 질의 및 제휴 문의는 아래 연락처로 접수해 주시기 바랍니다.
          </p>
          <p className="mt-2 text-slate-700 font-medium">
            이메일 문의: <a href="mailto:contact@money-fit.kr" className="text-blue-600 underline">contact@money-fit.kr</a>
          </p>
        </div>
      </section>
    </main>
  );
}