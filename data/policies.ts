// data/policies.ts

export type PolicyCategory = "주거" | "금융/자산" | "취업/구직" | "생활/교통/문화";

export interface Policy {
  id: string;
  category: PolicyCategory;
  title: string;
  summary: string;
  benefit: string;
  target: string;
  ageRange: { min: number; max: number };
  incomeCondition: string;
  officialUrl: string;
  statusCondition: "all" | "employed" | "unemployed";
}

export const YOUTH_POLICIES: Policy[] = [
  // 1. 생활 / 교통 / 문화
  {
    id: "k-pass",
    category: "생활/교통/문화",
    title: "K-패스 (청년 대중교통비 환급)",
    summary: "월 15회 이상 대중교통 이용 시 지출액의 30%를 사후 환급해주는 교통 복지 카드",
    benefit: "월 이용금액의 30% 환급 (연 최대 약 25만~30만 원 절감)",
    target: "만 19세 ~ 34세 청년 (지자체별 최대 39세)",
    ageRange: { min: 19, max: 34 },
    incomeCondition: "소득 무관",
    statusCondition: "all",
    officialUrl: "https://korea-pass.kr",
  },
  {
    id: "culture-art-pass",
    category: "생활/교통/문화",
    title: "청년 문화예술패스",
    summary: "사회에 첫 발을 내딛는 19~20세 청년을 위한 순수예술 관람비 및 도서 구입비 바우처",
    benefit: "1인당 최대 15만~20만 원 상당 공연·전시·도서 관람 포인트 지급",
    target: "만 19세 ~ 20세 청년 (생애 최초 1회)",
    ageRange: { min: 19, max: 20 },
    incomeCondition: "소득 무관",
    statusCondition: "all",
    officialUrl: "https://youthculturepass.or.kr",
  },
  {
    id: "national-cert-fee",
    category: "생활/교통/문화",
    title: "청년 국가기술자격시험 응시료 지원",
    summary: "취업 준비 비용 절감을 위한 한국산업인력공단(Q-Net) 국가기술자격 시험 응시료 감면",
    benefit: "시험 응시료 50% 감면 지원 (1인당 연 최대 3회 지원)",
    target: "만 19세 ~ 34세 청년",
    ageRange: { min: 19, max: 34 },
    incomeCondition: "소득 무관",
    statusCondition: "all",
    officialUrl: "https://www.q-net.or.kr",
  },

  // 2. 주거 지원
  {
    id: "youth-rent",
    category: "주거",
    title: "청년월세 특별지원",
    summary: "부모와 별도 거주하는 무주택 청년 대상 실제 납부하는 월세를 정부가 보조",
    benefit: "월 최대 20만 원씩 최장 24개월 지급 (총 480만 원 한도)",
    target: "만 19세 ~ 34세 무주택 청년 (보증금 5천 이하, 월세 70 이하)",
    ageRange: { min: 19, max: 34 },
    incomeCondition: "청년가구 중위 60% 이하 & 원가구 중위 100% 이하",
    statusCondition: "all",
    officialUrl: "https://www.bokjiro.go.kr",
  },
  {
    id: "housing-dream",
    category: "주거",
    title: "청년주택드림 청약통장 & 대출",
    summary: "최대 연 4.5% 우대금리로 목돈을 모으고, 청약 당첨 시 연 2.2% 저리 분양대출 연계",
    benefit: "최대 4.5% 금리 우대 + 비과세 + 주택드림 대출(최저 2.2%) 전환",
    target: "만 19세 ~ 34세 무주택 청년",
    ageRange: { min: 19, max: 34 },
    incomeCondition: "연소득 5,000만 원 이하",
    statusCondition: "all",
    officialUrl: "https://nhuf.molit.go.kr",
  },
  {
    id: "sme-rent-loan",
    category: "주거",
    title: "중소기업 취업청년 전월세보증금 대출",
    summary: "중소·중견기업 취업 청년 및 청년 창업자의 주거비 안정을 위한 초저금리 전세자금 대출",
    benefit: "최대 1억 원 한도 (연 1.5% 고정금리)",
    target: "만 19세 ~ 34세 중소·중견기업 재직 청년",
    ageRange: { min: 19, max: 34 },
    incomeCondition: "단독 연소득 3,500만 원 이하 (부부합산 5,000만 원)",
    statusCondition: "employed",
    officialUrl: "https://nhuf.molit.go.kr",
  },

  // 3. 금융 / 자산 형성
  {
    id: "youth-leap",
    category: "금융/자산",
    title: "청년도약계좌",
    summary: "5년 만기 매월 최대 70만 원 납입 시 정부 매칭 기여금과 비과세 혜택 제공",
    benefit: "만기 시 최대 약 5,000만 원 상당 자산 형성 (정부기여금 최대 월 3.3만 원 매칭)",
    target: "만 19세 ~ 34세 (병역 복무 기간 최대 6년 제외 가능)",
    ageRange: { min: 19, max: 34 },
    incomeCondition: "개인소득 7,500만 원 이하 & 가구 중위소득 250% 이하",
    statusCondition: "all",
    officialUrl: "https://ylaccount.kinfa.or.kr",
  },
  {
    id: "youth-tomorrow-savings",
    category: "금융/자산",
    title: "청년내일저축계좌",
    summary: "일하는 저소득 청년이 매월 10만 원 저축 시 정부가 10만~30만 원을 매칭 적립",
    benefit: "3년 만기 시 최대 1,440만 원 + 예금이자 + 정책인센티브 수령",
    target: "만 19세 ~ 34세 (기초생활수급·차상위는 만 15세 ~ 39세)",
    ageRange: { min: 19, max: 34 },
    incomeCondition: "기준중위소득 100% 이하 가구 (근로·사업소득 월 50만~250만 원)",
    statusCondition: "employed",
    officialUrl: "https://www.bokjiro.go.kr",
  },
  {
    id: "military-savings",
    category: "금융/자산",
    title: "장병내일준비적금",
    summary: "군 복무 중인 청년 장병의 전역 후 사회복귀 자금 마련을 위한 고금리 매칭 적금",
    benefit: "은행 기본금리(약 5%) + 정부 매칭 100% (원리금 전액에 상응하는 정부재정지원)",
    target: "현역병, 상근예비역, 사회복무요원 등 현역 복무 청년",
    ageRange: { min: 18, max: 30 },
    incomeCondition: "소득 무관",
    statusCondition: "all",
    officialUrl: "https://mnd.go.kr",
  },

  // 4. 취업 / 구직
  {
    id: "kua-type-1",
    category: "취업/구직",
    title: "국민취업지원제도 1유형",
    summary: "취준생에게 맞춤형 취업지원서비스와 구직활동 기간 생계유지를 위한 촉진수당 지급",
    benefit: "구직촉진수당 월 60만 원 × 6개월 (최대 360만 원 + 가족수당 추가)",
    target: "만 15세 ~ 34세 구직자 및 취업준비생",
    ageRange: { min: 15, max: 34 },
    incomeCondition: "가구 중위소득 120% 이하 & 재산 5억 원 이하",
    statusCondition: "unemployed",
    officialUrl: "https://www.kua.go.kr",
  },
  {
    id: "tomorrow-learning-card",
    category: "취업/구직",
    title: "국민내일배움카드",
    summary: "직무 기술 습득, IT·코딩 국비 부트캠프, 자격증 취득 등 교육 훈련비 전액/일부 지원",
    benefit: "1인당 기본 300만 원 (최대 500만 원 한도 국비 훈련 바우처)",
    target: "직업훈련을 희망하는 국민 (대학 졸업예정자 포함)",
    ageRange: { min: 19, max: 75 },
    incomeCondition: "고소득자 및 공무원 제외 일반 구직자/재직자",
    statusCondition: "all",
    officialUrl: "https://www.hrd.go.kr",
  },
  {
    id: "youth-job-jump",
    category: "취업/구직",
    title: "청년일자리도약장려금 (취업 근속 인센티브)",
    summary: "중소기업(특히 비수도권 우대)에 정규직으로 취업해 장기 근속하는 청년에게 지원금 지급",
    benefit: "비수도권 정규직 취업 청년 2년간 최대 480만~720만 원 근속 인센티브",
    target: "만 15세 ~ 34세 청년 중 취업애로청년 및 비수도권 중소기업 신규 취업자",
    ageRange: { min: 15, max: 34 },
    incomeCondition: "소득 무관",
    statusCondition: "employed",
    officialUrl: "https://www.work24.go.kr",
  },
];