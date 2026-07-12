"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES, categoryColor } from "@/lib/categories";
import type { Post } from "@/types/post";

export default function BlogHero({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState<Set<string>>(new Set());

  function toggle(key: string) {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const visiblePosts = active.size === 0 ? posts : posts.filter((p) => active.has(p.category));

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative bg-black overflow-hidden px-4 md:px-10 pt-24 pb-14 md:pb-16">
        <div className="relative max-w-[1600px] mx-auto">
          <h1 className="relative z-10 font-[family-name:var(--font-gordon)] text-tic-pink text-center uppercase tracking-widest leading-none"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
          >
            TIC Blog
          </h1>

          <Image
            src="/assets/bee-right-facing.png"
            alt=""
            aria-hidden
            width={278}
            height={282}
            className="absolute left-1/4 bottom-0 -translate-x-1/2 translate-y-1/2 w-auto h-14 sm:h-20 md:h-28 pointer-events-none select-none"
            priority
          />
          <Image
            src="/assets/bee-left-facing.png"
            alt=""
            aria-hidden
            width={287}
            height={283}
            className="absolute left-3/4 bottom-0 -translate-x-1/2 translate-y-1/2 w-auto h-14 sm:h-20 md:h-28 pointer-events-none select-none"
          />
        </div>

        <div className="relative mt-8 sm:mt-10 max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {CATEGORIES.map((cat) => {
            const isActive = active.has(cat.key);
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => toggle(cat.key)}
                aria-pressed={isActive}
                className="aspect-square rounded-full flex items-center justify-center text-center px-6 transition-transform hover:scale-105"
                style={{
                  backgroundColor: cat.color,
                  boxShadow: isActive ? "0 0 0 4px rgba(255,255,255,0.7)" : "none",
                  transform: isActive ? "scale(1.05)" : undefined,
                }}
              >
                <span className="font-[family-name:var(--font-gordon)] text-white uppercase tracking-wide text-sm md:text-xl leading-tight">
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Post list ───────────────────────────────────────────── */}
      <section className="py-10 px-6 max-w-4xl mx-auto divide-y-2 divide-black">
        {visiblePosts.length === 0 && (
          <p className="font-[family-name:var(--font-noto-serif)] text-center py-10 text-black/60">
            No posts in this category yet.
          </p>
        )}
        {visiblePosts.map((post) => (
          <article key={post.slug} className="py-10 flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
            <Link
              href={`/blog/${post.slug}`}
              className="group shrink-0 w-44 h-44 md:w-52 md:h-52 rounded-full flex flex-col items-center justify-center text-center px-5 transition-transform hover:scale-105"
              style={{ backgroundColor: categoryColor(post.category) }}
            >
              <span className="font-[family-name:var(--font-noto-serif)] font-bold text-white text-lg md:text-xl leading-tight">
                {post.title}
              </span>
              <span className="mt-3 text-white text-xs font-bold uppercase tracking-widest group-hover:underline">
                Read More »
              </span>
            </Link>
            <div className="flex-1">
              <p className="font-[family-name:var(--font-noto-serif)] text-lg leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
