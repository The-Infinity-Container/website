// Falls back to this whenever a post is published without an explicit
// reading_time_minutes so the byline never has to omit it.
export function estimateReadingTime(body: string): number {
  const words = body.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
