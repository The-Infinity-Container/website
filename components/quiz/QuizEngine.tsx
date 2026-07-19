"use client";

import { useState } from "react";
import QuizProgress from "./QuizProgress";
import QuizQuestion from "./QuizQuestion";
import EmailGate from "./EmailGate";
import ResultScreen from "./ResultScreen";
import { questions, calculateResult } from "@/lib/quiz/data";
import type { QuizScores, ResultType } from "@/lib/quiz/types";

type Stage = "quiz" | "email" | "result";

export default function QuizEngine() {
  const [stage, setStage] = useState<Stage>("quiz");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<QuizScores>({});
  const [result, setResult] = useState<ResultType | null>(null);

  // Linear-progress counter (index+1 on select, index-1 on back), not a
  // derived count of Object.keys(scores).length — matches the client's
  // original mockup behavior.
  const [answeredCount, setAnsweredCount] = useState(0);

  function handleSelectSingle(optionIndex: number) {
    setScores((prev) => ({ ...prev, [currentIndex]: optionIndex }));
    setAnsweredCount(currentIndex + 1);
  }

  function handleToggleMulti(optionIndex: number) {
    setScores((prev) => {
      const existing = Array.isArray(prev[currentIndex]) ? (prev[currentIndex] as number[]) : [];
      const next = existing.includes(optionIndex)
        ? existing.filter((i) => i !== optionIndex)
        : [...existing, optionIndex];
      setAnsweredCount(next.length > 0 ? 1 : 0);
      return { ...prev, [currentIndex]: next };
    });
  }

  function handleNext() {
    const answer = scores[currentIndex];
    const hasAnswer = Array.isArray(answer) ? answer.length > 0 : answer !== undefined;
    if (!hasAnswer) return;

    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setStage("email");
    }
  }

  function handleBack() {
    if (currentIndex === 0) return;
    setCurrentIndex((i) => i - 1);
    setAnsweredCount(currentIndex - 1);
  }

  function handleEmailSubmit(name: string, email: string) {
    const computedResult = calculateResult(scores);
    setResult(computedResult);
    setStage("result");

    // Fire-and-forget: a failed/slow Kit call must never block the result
    // screen from showing.
    fetch("/api/quiz-submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, result: computedResult }),
    }).catch((err) => {
      console.error("quiz-submit request failed:", err);
    });
  }

  function handleRetake() {
    setScores({});
    setCurrentIndex(0);
    setAnsweredCount(0);
    setResult(null);
    setStage("quiz");
  }

  return (
    <div className="max-w-[720px] mx-auto">
      {stage === "quiz" && (
        <>
          <QuizProgress answeredCount={answeredCount} />
          <QuizQuestion
            question={questions[currentIndex]}
            index={currentIndex}
            selected={scores[currentIndex]}
            onSelectSingle={handleSelectSingle}
            onToggleMulti={handleToggleMulti}
            onBack={handleBack}
            onNext={handleNext}
          />
        </>
      )}

      {stage === "email" && <EmailGate onSubmit={handleEmailSubmit} />}

      {stage === "result" && result && <ResultScreen result={result} onRetake={handleRetake} />}
    </div>
  );
}
