export type Score = "f" | "p" | "pr";
export type ResultType = "free" | "practice" | "practitioner";

export interface Option {
  text: string;
  score: Score;
}

export interface Question {
  id: number;
  text: string;
  subtext?: string;
  multiSelect: boolean;
  options: Option[];
}

// Answers collected so far: single-select questions store one Score,
// the multi-select question (id 0) stores an array of Score.
export type QuizScores = Record<number, Score | Score[]>;

export interface OtherCard {
  title: string;
  body: string;
  href: string;
}

export interface ResultContent {
  eyebrow: string;
  badgeLabel: string;
  badgeClassName: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  otherOptionsHeading: string;
  otherCards: OtherCard[];
}
