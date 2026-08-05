"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES, categoryColor, categoryLabel, type CategoryKey } from "@/lib/categories";
import type { Post } from "@/types/post";

const ALL_COLOR = "#d5d068";

export default function BlogPostList({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState<CategoryKey | "all">("all");

  const usedCategories = new Set(posts.map((p) => p.category));
  const tabs: { key: CategoryKey | "all"; label: string; color: string }[] = [
    { key: "all", label: "All", color: ALL_COLOR },
    ...CATEGORIES.filter((c) => usedCategories.has(c.key)),
  ];

  const [featured, ...rest] = posts;
  const featuredVisible = !!featured && (active === "all" || featured.category === active);
  const visibleGrid = rest.filter((p) => active === "all" || p.category === active);
  const isEmpty = !featuredVisible && visibleGrid.length === 0;

  return (
    <>
      {/* ── Category filters ────────────────────────────────────── */}
      <div className="bg-black border-b border-white/[0.08] sticky top-[97px] md:top-[49px] z-40">
        <div className="max-w-[1290px] mx-auto px-6 flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => {
            const isActive = active === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActive(tab.key)}
                className="font-[family-name:var(--font-gordon)] text-[11px] tracking-[0.16em] uppercase px-6 py-[18px] whitespace-nowrap border-b-2 transition-colors cursor-pointer"
                style={{
                  color: isActive ? tab.color : "rgba(252,252,252,0.4)",
                  borderBottomColor: isActive ? tab.color : "transparent",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Posts ────────────────────────────────────────────────── */}
      <main className="bg-white px-6 pt-[72px] pb-[100px]">
        <div className="max-w-[1290px] mx-auto">
        {featured && (
          <article
            className={`grid md:grid-cols-2 gap-8 md:gap-14 items-center pb-16 mb-16 border-b border-tic-grey ${
              featuredVisible ? "" : "hidden"
            }`}
          >
            {featured.cover_image_url ? (
              <Image
                src={featured.cover_image_url}
                alt={featured.alt_text || featured.title}
                width={800}
                height={600}
                className="w-full h-auto aspect-4/3 object-cover rounded"
              />
            ) : (
              <div className="bg-tic-grey rounded aspect-4/3 flex items-center justify-center text-xs italic text-tic-dark-grey">
                [Featured image placeholder]
              </div>
            )}
            <div className="flex flex-col gap-4">
              <p
                className="font-[family-name:var(--font-gordon)] text-[10px] tracking-[0.2em] uppercase"
                style={{ color: categoryColor(featured.category) }}
              >
                {categoryLabel(featured.category)}
              </p>
              <Link
                href={`/blog/${featured.slug}`}
                className="font-[family-name:var(--font-gordon)] font-normal text-black tracking-[0.02em] leading-[1.2] hover:text-tic-brown transition-colors"
                style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
              >
                {featured.title}
              </Link>
              <p className="text-[16px] leading-[1.8] text-[#333]">{featured.excerpt}</p>
              <Link
                href={`/blog/${featured.slug}`}
                className="self-start font-[family-name:var(--font-gordon)] text-[11px] tracking-[0.14em] uppercase text-tic-cobalt border-b border-tic-cobalt pb-[2px] hover:text-tic-rose hover:border-tic-rose transition-colors"
              >
                Read the guide →
              </Link>
            </div>
          </article>
        )}

        <div className="grid md:grid-cols-3 gap-9">
          {visibleGrid.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col gap-3.5 p-7 bg-white border border-tic-grey rounded hover:border-tic-dark-grey transition-colors"
            >
              <p
                className="font-[family-name:var(--font-gordon)] text-[10px] tracking-[0.2em] uppercase"
                style={{ color: categoryColor(post.category) }}
              >
                {categoryLabel(post.category)}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="font-[family-name:var(--font-gordon)] font-normal text-black text-lg tracking-[0.02em] leading-[1.3] grow hover:text-tic-brown transition-colors"
              >
                {post.title}
              </Link>
              <p className="text-sm leading-[1.7] text-[#444]">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="self-start font-[family-name:var(--font-gordon)] text-[10px] tracking-[0.14em] uppercase text-tic-cobalt border-b border-tic-cobalt pb-[2px] hover:text-tic-rose hover:border-tic-rose transition-colors"
              >
                Read →
              </Link>
            </article>
          ))}
        </div>

        {isEmpty && (
          <p className="font-[family-name:var(--font-noto-serif)] italic text-[17px] text-tic-dark-grey text-center py-20">
            Nothing here yet — check back soon.
          </p>
        )}
        </div>
      </main>
    </>
  );
}
