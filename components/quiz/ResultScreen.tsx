import type { ResultType } from "@/lib/quiz/types";
import { results } from "@/lib/quiz/data";

interface ResultScreenProps {
  result: ResultType;
  onRetake: () => void;
}

export default function ResultScreen({ result, onRetake }: ResultScreenProps) {
  const content = results[result];

  return (
    <div className="text-center">
      <p className="font-[family-name:var(--font-gordon)] text-[11px] tracking-[0.22em] uppercase text-tic-dark-grey mb-5">
        {content.eyebrow}
      </p>

      <span
        className={[
          "inline-block font-[family-name:var(--font-gordon)] text-[13px] tracking-[0.18em] uppercase px-7 py-[10px] rounded-full mb-7",
          content.badgeClassName,
        ].join(" ")}
      >
        {content.badgeLabel}
      </span>

      <h2 className="font-[family-name:var(--font-gordon)] text-[clamp(24px,4vw,38px)] tracking-[0.02em] leading-[1.2] mb-5">
        {content.heading}
      </h2>

      <p className="font-[family-name:var(--font-noto-serif)] text-[23px] leading-[37px] max-w-[560px] mx-auto mb-9">
        {content.body}
      </p>

      <a
        href={content.ctaHref}
        className="inline-block font-[family-name:var(--font-gordon)] text-sm tracking-[0.12em] uppercase bg-tic-orange text-black px-11 py-[17px] rounded-[3px] mb-5 hover:bg-tic-pink transition-colors"
      >
        {content.ctaLabel}
      </a>

      <button
        type="button"
        onClick={onRetake}
        className="block mx-auto font-[family-name:var(--font-noto-serif)] italic text-sm text-tic-dark-grey hover:text-black bg-transparent border-none cursor-pointer mt-3"
      >
        Retake the quiz
      </button>

      <hr className="border-0 border-t border-tic-grey my-11" />

      <div>
        <h3 className="font-[family-name:var(--font-gordon)] text-lg tracking-[0.04em] text-tic-dark-grey mb-6">
          {content.otherOptionsHeading}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {content.otherCards.map((card) => (
            <div
              key={card.title}
              className="border-[1.5px] border-tic-grey rounded px-5 py-6 text-left"
            >
              <h4 className="font-[family-name:var(--font-gordon)] text-[15px] tracking-[0.06em] mb-2">
                {card.title}
              </h4>
              <p className="font-[family-name:var(--font-noto-serif)] text-[13px] leading-[1.65] text-[#444] mb-[14px]">
                {card.body}
              </p>
              <a
                href={card.href}
                className="font-[family-name:var(--font-gordon)] text-[11px] tracking-[0.1em] uppercase text-tic-cobalt border-b border-tic-cobalt pb-[2px] no-underline"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
