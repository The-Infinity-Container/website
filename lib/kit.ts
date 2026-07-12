import { sanitizePostBody } from "@/lib/sanitizeHtml";

const KIT_API_BASE = "https://api.kit.com/v4";

function kitHeaders(): HeadersInit {
  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) throw new Error("KIT_API_KEY is not configured.");
  return { "X-Kit-Api-Key": apiKey };
}

export type KitBroadcastSummary = {
  id: number;
  subject: string;
  publishedAt: string | null;
};

export async function listKitBroadcasts(): Promise<KitBroadcastSummary[]> {
  const res = await fetch(`${KIT_API_BASE}/broadcasts?per_page=25&status=completed&slim=true`, {
    headers: kitHeaders(),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Kit API error (${res.status})`);

  const data: { broadcasts: { id: number; subject: string; published_at: string | null }[] } = await res.json();
  return data.broadcasts.map((b) => ({
    id: b.id,
    subject: b.subject,
    publishedAt: b.published_at,
  }));
}

export async function getKitBroadcastContent(id: number): Promise<{ title: string; body: string }> {
  const res = await fetch(`${KIT_API_BASE}/broadcasts/${id}`, {
    headers: kitHeaders(),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Kit API error (${res.status})`);

  const data: { broadcast: { subject: string; content: string | null } } = await res.json();
  return {
    title: data.broadcast.subject,
    body: sanitizePostBody(data.broadcast.content ?? ""),
  };
}
