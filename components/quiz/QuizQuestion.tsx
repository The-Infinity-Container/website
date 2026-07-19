import type { Question, Score } from "@/lib/quiz/types";
import { TOTAL_QUESTIONS } from "@/lib/quiz/data";

interface QuizQuestionProps {
  question: Question;
  index: number; // 0-based
  selected: Score | Score[] | undefined;
  onSelectSingle: (score: Score) => void;
  onToggleMulti: (score: Score) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function QuizQuestion({
  question,
  index,
  selected,
  onSelectSingle,
  onToggleMulti,
  onBack,
  onNext,
}: QuizQuestionProps) {
  const isMulti = question.multiSelect;
  const selectedArray = Array.isArray(selected) ? selected : [];
  const hasAnswer = isMulti ? selectedArray.length > 0 : selected !== undefined;
  const isLastQuestion = index === TOTAL_QUESTIONS - 1;

  return (
    <div>
      <p className="font-[family-name:var(--font-gordon)] text-[11px] tracking-[0.2em] uppercase text-tic-dark-grey mb-4">
        Question {index + 1} of {TOTAL_QUESTIONS}
      </p>

      <p className="font-[family-name:var(--font-gordon)] text-[clamp(20px,3vw,28px)] tracking-[0.02em] leading-[1.3] text-black mb-9">
        {question.text}
        {question.subtext && (
          <span className="block mt-2 text-[0.7em] tracking-[0.14em] uppercase text-tic-dark-grey font-[family-name:var(--font-gordon)]">
            {question.subtext}
          </span>
        )}
      </p>

      <div className="flex flex-col gap-3">
        {question.options.map((option) => {
          const isSelected = isMulti
            ? selectedArray.includes(option.score)
            : selected === option.score;

          return (
            <button
              key={option.text}
              type="button"
              onClick={() => (isMulti ? onToggleMulti(option.score) : onSelectSingle(option.score))}
              className={[
                "font-[family-name:var(--font-noto-serif)] text-base leading-normal text-left bg-white border-[1.5px] rounded text-black px-[22px] py-[18px] cursor-pointer transition-colors",
                "hover:border-tic-pink hover:bg-tic-pink/4",
                isMulti ? "relative pl-[52px]" : "",
                isSelected ? "border-tic-orange bg-tic-orange/6" : "border-tic-grey",
              ].join(" ")}
            >
              {isMulti && (
                <span
                  aria-hidden="true"
                  className={[
                    "absolute left-[18px] top-1/2 -translate-y-1/2 w-[18px] h-[18px] rounded-[3px] border-[1.5px] flex items-center justify-center transition-colors",
                    isSelected ? "bg-tic-orange border-tic-orange" : "bg-white border-tic-grey",
                  ].join(" ")}
                >
                  {isSelected && (
                    <svg viewBox="0 0 12 10" className="w-[10px] h-[10px]" fill="none">
                      <path
                        d="M1 5l3.5 3.5L11 1"
                        stroke="#fcfcfc"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              )}
              {option.text}
            </button>
          );
        })}
      </div>

      <div className="flex justify-between items-center mt-11">
        {index > 0 ? (
          <button
            type="button"
            onClick={onBack}
            className="font-[family-name:var(--font-gordon)] text-xs tracking-[0.12em] uppercase text-tic-dark-grey hover:text-black bg-transparent border-none p-0 cursor-pointer"
          >
            ← Back
          </button>
        ) : (
          <span />
        )}

        <button
          type="button"
          onClick={onNext}
          disabled={!hasAnswer}
          className={[
            "font-[family-name:var(--font-gordon)] text-[13px] tracking-[0.12em] uppercase bg-tic-orange text-black border-none px-8 py-[14px] rounded-[3px] transition-opacity",
            hasAnswer ? "opacity-100 cursor-pointer hover:brightness-110" : "opacity-35 pointer-events-none",
          ].join(" ")}
        >
          {isLastQuestion ? "See my result" : "Next →"}
        </button>
      </div>
    </div>
  );
}
