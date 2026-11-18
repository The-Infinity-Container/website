"use client";

import { useEffect, useState } from "react";

const JOIN_URL = "https://join.theinfinitycontainer.com/theendisthebeginning";

// Signups close 11/25/2026 at 11:59pm Pacific (PST, UTC-8) — hide the banner
// from midnight onward. Checked in the browser so it works on a cached/static
// page with no redeploy needed.
const HIDE_AT = new Date("2026-11-26T00:00:00-08:00").getTime();

export default function AnnouncementBanner() {
  // Start hidden so an expired banner never flashes before the check runs.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const msLeft = HIDE_AT - Date.now();
    if (msLeft <= 0) return;
    setVisible(true);
    // setTimeout overflows past ~24.8 days; skip the live hide for far-off dates
    if (msLeft > 2_000_000_000) return;
    const t = setTimeout(() => setVisible(false), msLeft);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Announcement"
      className="bg-[#0a0e10] border-b border-tic-yellow/25 px-4 md:px-6 py-3 md:py-4 text-tic-yellow"
    >
      <div className="max-w-[1290px] mx-auto">
        <div className="flex items-center justify-center">
          {/* Decorative artwork — plain <img>: these are large SVGs that next/image would not optimize */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/banner-sun.svg"
            alt=""
            aria-hidden="true"
            className="w-[74px] sm:w-[116px] md:w-[185px] lg:w-[225px] h-auto shrink-0"
          />

          <div className="min-w-0">
            <h2 className="font-[family-name:var(--font-gordon)] font-normal uppercase text-center">
              <span
                className="block tracking-[0.08em] leading-[1.05]"
                style={{ fontSize: "clamp(22px, 4.6vw, 64px)" }}
              >
                The End is
              </span>
              <span
                className="block tracking-[0.08em] leading-[1.15] mt-[0.12em]"
                style={{ fontSize: "clamp(15px, 3.1vw, 43px)" }}
              >
                The Beginning
              </span>
            </h2>

            <p className="mt-3 md:mt-4 text-center font-[family-name:var(--font-noto-serif)] italic text-[16px] md:text-[18px] leading-[1.5]">
              A 5-week holiday container starts 11/28.{" "}
              <a
                href={JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap not-italic font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-[14px] md:text-[15px] ml-1 hover:text-white focus-visible:text-white transition-colors"
              >
                <span className="border-b-[1.5px] border-current pb-[2px] inline-block">
                  Join us →
                </span>
              </a>
            </p>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/banner-moon.svg"
            alt=""
            aria-hidden="true"
            className="w-[60px] sm:w-[92px] md:w-[150px] lg:w-[182px] h-auto shrink-0"
          />
        </div>
      </div>
    </aside>
  );
}
