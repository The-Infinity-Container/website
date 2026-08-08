// Best-effort, in-memory rate limiter for public API routes. This is
// per-instance (resets on cold start, doesn't coordinate across concurrent
// serverless instances), so it blunts casual scripted abuse rather than
// guaranteeing a hard cap — a shared store (Upstash/Vercel KV) would be
// needed for a real guarantee, but that's new infrastructure, not something
// to add unasked. Good enough as a first line of defense.
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const MAX_TRACKED_KEYS = 10_000;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);

  if (hits.size > MAX_TRACKED_KEYS) {
    for (const [k, timestamps] of hits) {
      if (timestamps.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }

  return recent.length > MAX_REQUESTS;
}

export function clientKey(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}
