"use client";

import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

export default function CategoryBanner({
  active,
  onToggle,
}: {
  active?: Set<string>;
  onToggle?: (key: string) => void;
}) {
  return (
    <section className="relative bg-black overflow-hidden px-4 md:px-10 pt-24 pb-14 md:pb-16">
      <div className="relative max-w-[1600px] mx-auto">
        <Link href="/blog" className="block">
          <h1
            className="relative z-10 font-[family-name:var(--font-gordon)] text-tic-pink text-center uppercase tracking-widest leading-none"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
          >
            TIC Blog
          </h1>
        </Link>

        <Image
          src="/assets/bee-right-facing.png"
          alt=""
          aria-hidden
          width={278}
          height={282}
          className="absolute left-[13%] md:left-1/4 bottom-0 -translate-x-1/2 translate-y-1/2 w-auto h-14 sm:h-20 md:h-28 pointer-events-none select-none"
          priority
        />
        <Image
          src="/assets/bee-left-facing.png"
          alt=""
          aria-hidden
          width={287}
          height={283}
          className="absolute left-[88%] md:left-3/4 bottom-0 -translate-x-1/2 translate-y-1/2 w-auto h-14 sm:h-20 md:h-28 pointer-events-none select-none"
        />
      </div>

      <div className="relative mt-8 sm:mt-10 max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {CATEGORIES.map((cat) => {
          const isActive = active?.has(cat.key) ?? false;
          const sharedClassName =
            "aspect-square rounded-full flex items-center justify-center text-center px-6 transition-transform hover:scale-105";
          const sharedStyle = {
            backgroundColor: cat.color,
            boxShadow: isActive ? "0 0 0 4px rgba(255,255,255,0.7)" : "none",
            transform: isActive ? "scale(1.05)" : undefined,
          };
          const label = (
            <span className="font-[family-name:var(--font-gordon)] text-white uppercase tracking-wide text-sm md:text-xl leading-tight">
              {cat.label}
            </span>
          );

          return onToggle ? (
            <button
              key={cat.key}
              type="button"
              onClick={() => onToggle(cat.key)}
              aria-pressed={isActive}
              className={sharedClassName}
              style={sharedStyle}
            >
              {label}
            </button>
          ) : (
            <Link key={cat.key} href="/blog" className={sharedClassName} style={sharedStyle}>
              {label}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
