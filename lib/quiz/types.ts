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

// Answers collected so far, keyed by question index: single-select
// questions store the selected option's index, the multi-select question
// (id 0) stores an array of selected option indices. Selection is tracked
// by index rather than Score because options within a question routinely
// share a Score (e.g. question 1 has three "p" options) — Score is only
// resolved from the index when computing the result.
export type QuizScores = Record<number, number | number[]>;

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
