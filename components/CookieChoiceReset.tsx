"use client";

import { setCookieConsent, useCookieConsent } from "@/lib/cookieConsent";

// Lets visitors revisit a saved choice — reopens the banner.
export default function CookieChoiceReset() {
  const consent = useCookieConsent();
  if (consent === "pending" || consent === null) return null;

  return (
    <p className="font-[family-name:var(--font-noto-serif)] text-[16px] text-[#222] mb-6">
      Your current choice: <strong>{consent === "accepted" ? "optional cookies allowed" : "optional cookies declined"}</strong>.{" "}
      <button
        type="button"
        onClick={() => setCookieConsent(null)}
        className="underline underline-offset-2 hover:opacity-70"
      >
        Change my choice
      </button>
    </p>
  );
}
