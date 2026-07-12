"use client";

import { useState } from "react";
import Link from "next/link";
import CategoryBanner from "./CategoryBanner";
import { categoryColor } from "@/lib/categories";
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
      <CategoryBanner active={active} onToggle={toggle} />

      {/* ── Post list ───────────────────────────────────────────── */}
      <section className="bg-black pt-16 pb-[7em] px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          {visiblePosts.length === 0 && (
            <p className="font-[family-name:var(--font-noto-serif)] text-center py-10 text-white/60">
              No posts in this category yet.
            </p>
          )}
          {visiblePosts.map((post) => (
            <article key={post.slug} className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
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
                <p className="font-[family-name:var(--font-noto-serif)] text-lg leading-relaxed text-white">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
