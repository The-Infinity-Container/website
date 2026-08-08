import { NextRequest, NextResponse } from "next/server";
import { upsertSubscriber, addSubscriberToForm } from "@/lib/quiz/kit";
import { isRateLimited, clientKey } from "@/lib/rateLimit";
import { isValidEmail } from "@/lib/validate";

interface NewsletterSubscribeBody {
  name?: string;
  email: string;
}

export async function POST(req: NextRequest) {
  if (isRateLimited(clientKey(req))) {
    return NextResponse.json({ success: false, error: "Too many requests" }, { status: 429 });
  }

  let body: NewsletterSubscribeBody;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const { name = "", email } = body;
  const formId = process.env.KIT_FORM_NEWSLETTER;

  if (!isValidEmail(email) || !formId) {
    return NextResponse.json({ success: false, error: "Missing or invalid fields" }, { status: 422 });
  }

  try {
    await upsertSubscriber(email, name);
    await addSubscriberToForm(email, formId);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Kit newsletter-subscribe error:", err);
    return NextResponse.json({ success: false }, { status: 502 });
  }
}
