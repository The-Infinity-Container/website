// Kit (ConvertKit) v4 API — https://developers.kit.com
// Reuses the same KIT_API_KEY / auth convention as lib/kit.ts.

const KIT_BASE_URL = "https://api.kit.com/v4";

function kitHeaders(): HeadersInit {
  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) throw new Error("KIT_API_KEY is not configured.");
  return { "Content-Type": "application/json", "X-Kit-Api-Key": apiKey };
}

async function kitFetch(path: string, init: RequestInit) {
  const res = await fetch(`${KIT_BASE_URL}${path}`, { ...init, headers: kitHeaders() });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Kit API ${path} failed: ${res.status} ${body}`);
  }
  return res.json();
}

/** Create the subscriber if new, or update them if the email already exists. */
export async function upsertSubscriber(email: string, firstName: string) {
  return kitFetch("/subscribers", {
    method: "POST",
    body: JSON.stringify({ email_address: email, first_name: firstName }),
  });
}

/** Add an existing subscriber to a form by email address. */
export async function addSubscriberToForm(email: string, formId: string) {
  return kitFetch(`/forms/${formId}/subscribers`, {
    method: "POST",
    body: JSON.stringify({ email_address: email }),
  });
}

interface KitTag {
  id: number;
  name: string;
}

// Kit's v4 API has no "tag by name" endpoint — tagging requires a numeric
// tag_id, so this resolves it at request time via GET /v4/tags. The tags
// (infinity-quiz-free / infinity-quiz-practice / infinity-quiz-practitioner)
// must already exist in the Kit account; this does not create them.
export async function resolveTagId(tagName: string): Promise<number | null> {
  const data = await kitFetch("/tags", { method: "GET" });
  const tags: KitTag[] = data?.tags ?? [];
  const match = tags.find((t) => t.name === tagName);
  return match ? match.id : null;
}

/** Tag an existing subscriber by email address, given a numeric tag_id. */
export async function tagSubscriberByEmail(email: string, tagId: number) {
  return kitFetch(`/tags/${tagId}/subscribers`, {
    method: "POST",
    body: JSON.stringify({ email_address: email }),
  });
}
