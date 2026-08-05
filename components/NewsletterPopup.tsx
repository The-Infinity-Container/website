"use client";

import { useEffect, useState } from "react";
import InlineNewsletter from "@/components/InlineNewsletter";

const DISMISSED_KEY = "tic-newsletter-popup-dismissed";
const SHOW_DELAY_MS = 6000;

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(DISMISSED_KEY)) return;
    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function close() {
    setOpen(false);
    localStorage.setItem(DISMISSED_KEY, "1");
  }

  function handleSuccess() {
    localStorage.setItem(DISMISSED_KEY, "1");
    setTimeout(() => setOpen(false), 1800);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-6"
      onClick={close}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Newsletter signup"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[560px] bg-tic-yellow rounded-[6px] px-8 py-12 md:px-12 md:py-14 text-center"
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 text-2xl leading-none font-light text-[#0b0d10] hover:opacity-60 transition-opacity"
        >
          ×
        </button>
        <h2
          className="font-[family-name:var(--font-gordon)] uppercase tracking-wide mb-[18px]"
          style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)" }}
        >
          Integration as<br className="md:hidden" /> a practice,<br className="md:hidden" /> not an event.
        </h2>
        <p className="font-[family-name:var(--font-noto-serif)] text-body max-w-[460px] mx-auto mb-8 text-[#2a2a1a]">
          The TIC newsletter brings you integration frameworks, somatic tools, and practitioner
          resources — rooted in the Solar-Lunar system. Written by<br className="md:hidden" /> Dr. Victoria Sterkin.
        </p>
        <InlineNewsletter inputBg="bg-white" onSuccess={handleSuccess} />
        <p className="mt-4 text-xs text-[#5a570f]">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}
