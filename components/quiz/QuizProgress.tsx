import { TOTAL_QUESTIONS } from "@/lib/quiz/data";

interface QuizProgressProps {
  answeredCount: number;
}

export default function QuizProgress({ answeredCount }: QuizProgressProps) {
  const pct = (answeredCount / TOTAL_QUESTIONS) * 100;

  return (
    <div className="mb-[52px]">
      <p className="font-[family-name:var(--font-gordon)] text-[11px] tracking-[0.16em] uppercase text-tic-dark-grey mb-3">
        {answeredCount} of {TOTAL_QUESTIONS} answered
      </p>
      <div className="bg-tic-grey rounded-full h-1">
        <div
          className="bg-tic-orange rounded-full h-1 transition-[width] duration-[400ms] ease"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
