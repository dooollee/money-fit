// data/policies.ts

export type PolicyCategory = "주거" | "금융/자산" | "취업/구직" | "교육/건강" | "생활/교통/문화";

export type IncomeLevel = "low" | "mid" | "high";

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
  /** 신청 가능 시기 */
  applyPeriod: string;
  /** 신청 방법 / 신청처 */
  howToApply: string;
  /** 놓치기 쉬운 주의사항 */
  notice?: string;
  /** 부모와 별도 거주(독립)해야 신청 가능한 정책 */
  requiresIndependent?: boolean;
  /** 판독기에서 허용하는 최대 소득 수준 (미지정 시 소득 무관) */
  maxIncomeLevel?: IncomeLevel;
}

/** 정책 정보 기준일 — 데이터 갱신 시 함께 수정 */
export const POLICY_DATA_UPDATED_AT = "2026년 9월";

/** 2026년 기준 중위소득 (월, 원) — 보건복지부 고시 */
export const MEDIAN_INCOME_2026: { household: string; amount: number }[] = [
  { household: "1인 가구", amount: 2_564_238 },
  { household: "2인 가구", amount: 4_199_292 },
  { household: "3인 가구", amount: 5_359_036 },
  { household: "4인 가구", amount: 6_494_738 },
];

export const YOUTH_POLICIES: Policy[] = [
  // 1. 생활 / 교통 / 문화
  {
    id: "k-pass",
    category: "생활/교통/문화",
    title: "K-패스 · 모두의 카드 (대중교통비 환급)",
    summary: "월 15회 이상 대중교통 이용 시 지출액의 30%를 환급, 교통비가 많으면 정액 초과분을 전액 돌려주는 '모두의 카드' 방식이 자동 적용",
    benefit: "청년 이용금액 30% 환급 / 모두의 카드: 기준금액(청년 월 5.5만 원) 초과 이용분 환급",
    target: "만 19세 ~ 34세 청년 (지자체별 최대 39세)",
    ageRange: { min: 19, max: 34 },
    incomeCondition: "소득 무관",
    statusCondition: "all",
    applyPeriod: "상시 (카드 발급 후 홈페이지 회원가입)",
    howToApply: "K-패스 제휴 카드 발급 → korea-pass.kr 회원가입 및 카드 등록",
    notice: "카드 발급만 하고 홈페이지에 등록하지 않으면 환급이 되지 않습니다. 환급 방식(기본형/모두의 카드)은 매달 유리한 쪽으로 자동 적용됩니다.",
    officialUrl: "https://korea-pass.kr",
  },
  {
    id: "culture-art-pass",
    category: "생활/교통/문화",
    title: "청년 문화예술패스",
    summary: "19~20세 청년에게 공연·전시 관람비를 포인트로 지원하는 문화 바우처 (비수도권 청년 추가 지원)",
    benefit: "1인당 최대 15만 원 관람 포인트 (비수도권 거주 청년 5만 원 추가)",
    target: "만 19세 ~ 20세 청년",
    ageRange: { min: 19, max: 20 },
    incomeCondition: "소득 무관",
    statusCondition: "all",
    applyPeriod: "연초 공고 후 선착순 (예산 소진 시 조기 마감)",
    howToApply: "청년 문화예술패스 누리집에서 본인인증 후 신청",
    notice: "선착순이라 공고 직후 신청하는 것이 유리하며, 기한 내 쓰지 않은 포인트는 소멸됩니다.",
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
    applyPeriod: "상시 (시험 원서 접수 시 자동 적용)",
    howToApply: "Q-Net에서 원서 접수 시 청년 감면 대상 확인 후 결제",
    officialUrl: "https://www.q-net.or.kr",
  },

  // 2. 주거 지원
  {
    id: "youth-rent",
    category: "주거",
    title: "청년월세 지원",
    summary: "부모와 별도 거주하는 무주택 청년 대상 실제 납부하는 월세를 정부가 보조 (2026년부터 상시 신청)",
    benefit: "월 최대 20만 원씩 최장 24개월 지급 (총 480만 원 한도)",
    target: "만 19세 ~ 34세 독립거주 무주택 청년 (보증금 5천 이하, 월세 70 이하)",
    ageRange: { min: 19, max: 34 },
    incomeCondition: "청년가구 중위 60% 이하 & 원가구 중위 100% 이하",
    statusCondition: "all",
    applyPeriod: "상시 신청",
    howToApply: "복지로 온라인 신청 또는 주민등록상 주소지 행정복지센터 방문",
    notice: "임대차계약서상 본인 명의 계약과 전입신고가 필수입니다. 부모 등 원가구 소득·재산도 함께 심사합니다.",
    requiresIndependent: true,
    maxIncomeLevel: "low",
    officialUrl: "https://www.bokjiro.go.kr",
  },
  {
    id: "youth-housing-benefit",
    category: "주거",
    title: "청년 주거급여 분리지급",
    summary: "주거급여를 받는 가구의 20대 미혼 청년이 학업·취업으로 부모와 따로 살 경우 청년 몫 임차료를 별도로 지급",
    benefit: "지역별 기준임대료 한도 내 실제 월세 지원 (부모 가구와 별도 지급)",
    target: "주거급여 수급가구 내 만 19세 ~ 29세 미혼 청년 (부모와 다른 시·군 거주)",
    ageRange: { min: 19, max: 29 },
    incomeCondition: "원가구가 주거급여 수급 대상 (중위 48% 이하)",
    statusCondition: "all",
    applyPeriod: "상시 신청",
    howToApply: "청년 본인 주소지 행정복지센터 방문 또는 복지로 신청",
    notice: "부모 가구가 주거급여를 받고 있어야 하며, 부모와 같은 시·군에 살면 분리지급 대상이 아닙니다.",
    requiresIndependent: true,
    maxIncomeLevel: "low",
    officialUrl: "https://www.bokjiro.go.kr",
  },
  {
    id: "beotimok-youth",
    category: "주거",
    title: "청년전용 버팀목 전세자금대출",
    summary: "무주택 청년의 전세보증금을 시중은행보다 낮은 금리로 빌려주는 주택도시기금 정책 대출",
    benefit: "최대 2억 원 한도, 연 1.0% ~ 4.3% (소득·보증금에 따라 차등, 비수도권 금리 추가 인하)",
    target: "만 19세 ~ 34세 무주택 세대주 (예비 세대주 포함)",
    ageRange: { min: 19, max: 34 },
    incomeCondition: "부부합산 연소득 5,000만 원 이하 (순자산 기준 별도)",
    statusCondition: "all",
    applyPeriod: "상시 (잔금일 및 전입일 중 빠른 날부터 3개월 이내)",
    howToApply: "기금e든든 온라인 신청 또는 수탁은행(우리·국민·신한·하나·농협 등) 방문",
    notice: "전세사기 예방을 위해 전세보증금반환보증 가입 가능 여부를 계약 전에 꼭 확인하세요.",
    requiresIndependent: true,
    maxIncomeLevel: "mid",
    officialUrl: "https://nhuf.molit.go.kr",
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
    applyPeriod: "상시",
    howToApply: "취급 은행 앱 또는 영업점에서 가입 (기존 청약통장은 전환 신청)",
    notice: "기존 주택청약종합저축 가입자도 납입 기록을 유지한 채 전환할 수 있습니다.",
    maxIncomeLevel: "mid",
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
    applyPeriod: "상시",
    howToApply: "기금e든든 온라인 신청 또는 수탁은행 방문",
    notice: "대출 기간 중 퇴사해 중소기업 재직 요건을 잃으면 가산금리가 붙을 수 있습니다.",
    requiresIndependent: true,
    maxIncomeLevel: "mid",
    officialUrl: "https://nhuf.molit.go.kr",
  },

  // 3. 금융 / 자산 형성
  {
    id: "youth-future-savings",
    category: "금융/자산",
    title: "청년미래적금",
    summary: "3년간 매월 최대 50만 원 납입 시 정부가 납입액의 6%(우대형 12%)를 기여금으로 얹어주는 비과세 적금 (청년도약계좌 후속)",
    benefit: "월 50만 원 × 3년 납입 시 정부기여금 일반형 108만 원 / 우대형 216만 원 + 이자 비과세",
    target: "만 19세 ~ 34세 (병역 복무 기간 최대 6년 제외 가능)",
    ageRange: { min: 19, max: 34 },
    incomeCondition: "총급여 7,500만 원 이하 & 가구 중위소득 200% 이하 (우대형: 총급여 3,600만 원 이하 중소기업 재직 등)",
    statusCondition: "all",
    applyPeriod: "연 2회 (매년 6월·12월) — 다음 신청: 2026년 12월 예정",
    howToApply: "참여 은행 앱에서 가입 신청 → 소득·가구 요건 심사 후 개설",
    notice: "국세청에서 확인되는 소득이 있어야 가입할 수 있습니다. 청년도약계좌는 2025년 12월로 신규 가입이 종료되었습니다.",
    officialUrl: "https://www.fsc.go.kr",
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
    applyPeriod: "연 1~2회 모집 공고 기간",
    howToApply: "복지로 온라인 신청 또는 주소지 행정복지센터 방문",
    notice: "3년간 근로를 유지하고 교육 이수·자금사용계획서 제출까지 마쳐야 정부지원금 전액을 받습니다.",
    maxIncomeLevel: "mid",
    officialUrl: "https://www.bokjiro.go.kr",
  },
  {
    id: "military-savings",
    category: "금융/자산",
    title: "장병내일준비적금",
    summary: "군 복무 중인 청년 장병(2026년부터 초급간부 포함)의 사회복귀 자금 마련을 위한 매칭 적금",
    benefit: "은행 금리 + 정부 매칭 100% (월 최대 55만 원 납입)",
    target: "현역병, 상근예비역, 사회복무요원 등 복무 중인 청년 (군 초급간부 확대)",
    ageRange: { min: 18, max: 30 },
    incomeCondition: "소득 무관",
    statusCondition: "all",
    applyPeriod: "복무 기간 중 상시",
    howToApply: "취급 은행 앱 또는 부대 내 은행 창구에서 가입",
    notice: "군 복무 중인 경우에만 가입할 수 있습니다. 입대 직후 가입할수록 매칭 혜택을 오래 받습니다.",
    officialUrl: "https://mnd.go.kr",
  },

  // 4. 취업 / 구직
  {
    id: "kua-type-1",
    category: "취업/구직",
    title: "국민취업지원제도 1유형",
    summary: "취준생에게 맞춤형 취업지원서비스와 구직활동 기간 생계유지를 위한 촉진수당 지급 (2026년 월 60만 원으로 인상)",
    benefit: "구직촉진수당 월 60만 원 × 6개월 (최대 360만 원 + 가족수당 추가)",
    target: "만 15세 ~ 34세 구직자 및 취업준비생",
    ageRange: { min: 15, max: 34 },
    incomeCondition: "가구 중위소득 120% 이하 & 재산 5억 원 이하",
    statusCondition: "unemployed",
    applyPeriod: "상시",
    howToApply: "고용24(work24.go.kr) 온라인 신청 또는 거주지 관할 고용센터 방문",
    notice: "지자체 청년수당(예: 서울 청년수당)과는 동시에 받을 수 없으니 금액·기간을 비교해 선택하세요.",
    maxIncomeLevel: "mid",
    officialUrl: "https://www.work24.go.kr",
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
    applyPeriod: "상시",
    howToApply: "고용24에서 카드 발급 신청 (온라인 사전교육 수강 필요) → 카드사 발급",
    notice: "훈련 과정별로 자부담률이 다르고, 중도 포기 시 이후 수강에 불이익이 있을 수 있습니다.",
    officialUrl: "https://www.work24.go.kr",
  },
  {
    id: "youth-job-jump",
    category: "취업/구직",
    title: "청년일자리도약장려금 (취업 근속 인센티브)",
    summary: "비수도권 중소기업에 정규직으로 취업해 장기 근속하는 청년에게 지원금 지급",
    benefit: "2년 근속 시 기본 480만 원 / 우대지역 600만 원 / 특별지역 720만 원",
    target: "만 15세 ~ 34세 비수도권 중소기업 신규 정규직 취업 청년",
    ageRange: { min: 15, max: 34 },
    incomeCondition: "소득 무관",
    statusCondition: "employed",
    applyPeriod: "취업 후 요건 충족 시 (기업 참여 신청 선행)",
    howToApply: "재직 기업이 고용24에 참여 신청 → 청년 본인이 근속 인센티브 신청",
    notice: "회사가 먼저 사업에 참여 신청해야 하므로 입사 시 인사 담당자에게 참여 여부를 확인하세요.",
    officialUrl: "https://www.work24.go.kr",
  },

  // 5. 교육 / 건강
  {
    id: "national-scholarship",
    category: "교육/건강",
    title: "국가장학금 (Ⅰ유형)",
    summary: "대학생의 가구 소득 구간에 따라 등록금을 차등 지원하는 한국장학재단 대표 장학금",
    benefit: "학자금 지원구간에 따라 등록금 일부 ~ 전액 지원 (기초·차상위 가구 우대)",
    target: "국내 대학 재학생·신입생·편입생 (성적 요건 충족)",
    ageRange: { min: 18, max: 39 },
    incomeCondition: "학자금 지원구간 기준 (가구 소득·재산 환산)",
    statusCondition: "unemployed",
    applyPeriod: "학기별 연 2회 (1차: 전 학기 말 / 2차: 학기 초)",
    howToApply: "한국장학재단 누리집 또는 앱에서 신청 → 가구원 정보제공 동의",
    notice: "부모 등 가구원 정보제공 동의까지 완료해야 심사가 시작됩니다. 재학생은 가급적 1차 신청을 하세요.",
    maxIncomeLevel: "mid",
    officialUrl: "https://www.kosaf.go.kr",
  },
  {
    id: "breakfast-1000",
    category: "교육/건강",
    title: "천원의 아침밥",
    summary: "참여 대학 학생식당에서 아침 식사를 1,000원에 제공 (2026년 540만 식으로 확대)",
    benefit: "아침 한 끼 1,000원 (나머지 비용은 정부·지자체·학교 부담)",
    target: "참여 대학 재학생",
    ageRange: { min: 18, max: 39 },
    incomeCondition: "소득 무관",
    statusCondition: "unemployed",
    applyPeriod: "학기 중 상시 (학교별 운영)",
    howToApply: "별도 신청 없이 참여 대학 학생식당 이용 (학교 공지 확인)",
    notice: "모든 대학이 참여하는 것은 아니므로 재학 중인 학교 공지사항을 확인하세요.",
    officialUrl: "https://www.mafra.go.kr",
  },
  {
    id: "mental-health-voucher",
    category: "교육/건강",
    title: "정신건강 심리상담 바우처",
    summary: "우울·불안 등 마음의 어려움이 있는 국민에게 전문 심리상담 8회를 지원 (기존 청년마음건강지원사업 통합 개편)",
    benefit: "전문 심리상담 총 8회 (회당 7만~8만 원 지원, 본인부담 10~30%)",
    target: "정신건강복지센터·병원 의뢰서 또는 자가검진(PHQ-9 등) 기준 충족자",
    ageRange: { min: 18, max: 99 },
    incomeCondition: "소득 무관 (소득 구간별 본인부담 차등, 기초·차상위·자립준비청년 면제)",
    statusCondition: "all",
    applyPeriod: "상시 (지역별 예산 소진 시 마감)",
    howToApply: "복지로 온라인 신청 또는 주소지 행정복지센터 방문",
    notice: "서울 등 일부 지자체는 청년 전용 마음건강 사업을 별도로 운영하니 함께 확인해 보세요.",
    officialUrl: "https://www.bokjiro.go.kr",
  },
];

const INCOME_ORDER: Record<IncomeLevel, number> = { low: 0, mid: 1, high: 2 };

export interface EligibilityInput {
  age: number;
  employmentStatus: "employed" | "unemployed";
  isIndependent: boolean;
  incomeLevel: IncomeLevel;
}

/** 입력 조건으로 신청 가능성이 있는 정책만 추려냄 (모의 판독용) */
export function findEligiblePolicies(input: EligibilityInput): Policy[] {
  return YOUTH_POLICIES.filter((policy) => {
    if (input.age < policy.ageRange.min || input.age > policy.ageRange.max) return false;
    if (policy.statusCondition !== "all" && policy.statusCondition !== input.employmentStatus) return false;
    if (policy.requiresIndependent && !input.isIndependent) return false;
    if (policy.maxIncomeLevel && INCOME_ORDER[input.incomeLevel] > INCOME_ORDER[policy.maxIncomeLevel]) return false;
    return true;
  });
}
