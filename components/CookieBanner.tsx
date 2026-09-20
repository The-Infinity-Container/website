"use client";

import Link from "next/link";
import { setCookieConsent, useCookieConsent } from "@/lib/cookieConsent";

const buttonClass =
  "font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-[15px] px-6 py-[10px] rounded-[4px] border-[1.5px] border-black transition-opacity hover:opacity-80";

export default function CookieBanner() {
  const consent = useCookieConsent();
  if (consent !== null) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[110] bg-tic-yellow border-t-[1.5px] border-black px-6 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
    >
      <div className="max-w-[1290px] mx-auto flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <p className="font-[family-name:var(--font-noto-serif)] text-[15px] leading-[24px] text-black flex-1">
          We use cookies and similar tools to embed third-party content, like our Spotify playlist.
          Choose whether to allow them. Read our{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:opacity-70">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={() => setCookieConsent("declined")}
            className={`${buttonClass} bg-transparent text-black`}
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => setCookieConsent("accepted")}
            className={`${buttonClass} bg-black text-tic-yellow`}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
