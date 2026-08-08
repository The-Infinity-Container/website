import { NextRequest, NextResponse } from "next/server";
import { upsertSubscriber, addSubscriberToForm, resolveTagId, tagSubscriberByEmail } from "@/lib/quiz/kit";
import { calculateResult, isValidQuizScores } from "@/lib/quiz/data";
import type { QuizScores, ResultType } from "@/lib/quiz/types";
import { isRateLimited, clientKey } from "@/lib/rateLimit";
import { isValidEmail } from "@/lib/validate";

interface QuizSubmitBody {
  name: string;
  email: string;
  answers: QuizScores;
}

const FORM_ID_BY_RESULT: Record<ResultType, string | undefined> = {
  free: process.env.KIT_FORM_FREE,
  practice: process.env.KIT_FORM_PRACTICE,
  practitioner: process.env.KIT_FORM_PRACTITIONER,
};

const TAG_NAME_BY_RESULT: Record<ResultType, string> = {
  free: "infinity-quiz-free",
  practice: "infinity-quiz-practice",
  practitioner: "infinity-quiz-practitioner",
};

export async function POST(req: NextRequest) {
  if (isRateLimited(clientKey(req))) {
    return NextResponse.json({ success: false, error: "Too many requests" }, { status: 429 });
  }

  let body: QuizSubmitBody;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const { name, email, answers } = body;

  if (!name || !isValidEmail(email) || !isValidQuizScores(answers)) {
    return NextResponse.json({ success: false, error: "Missing or invalid fields" }, { status: 422 });
  }

  // The result is derived from answers here, not trusted from the client —
  // the client only sends raw option indices.
  const result = calculateResult(answers);

  // The client always advances to the result screen regardless of this
  // response — a failed Kit call should never block the user from seeing
  // their result.
  try {
    await upsertSubscriber(email, name);
    await addSubscriberToForm(email, FORM_ID_BY_RESULT[result] as string);

    const tagId = await resolveTagId(TAG_NAME_BY_RESULT[result]);
    if (tagId) {
      await tagSubscriberByEmail(email, tagId);
    } else {
      console.error(`Kit tag not found: "${TAG_NAME_BY_RESULT[result]}". Create it in Kit first.`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Kit quiz-submit error:", err);
    return NextResponse.json({ success: false }, { status: 200 });
  }
}
