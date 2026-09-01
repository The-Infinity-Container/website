// Bots that auto-fill every field on a form tend to fill this one; real
// users never see it. A filled honeypot is treated as a fake success so the
// bot has no signal to adapt on.
export const HONEYPOT_FIELD = "website";

export function isHoneypotFilled(value: unknown): boolean {
  return typeof value === "string" && value.length > 0;
}
