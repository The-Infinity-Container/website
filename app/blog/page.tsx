import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — The Infinity Container",
  description: "Articles on integration, practitioner life, and conscious exploration from The Infinity Container.",
};

const POSTS = [
  {
    slug: "what-does-it-mean-to-be-a-practitioner",
    title: "What Does It Mean to be a Practitioner?",
    excerpt:
      "When we began researching the term practitioner we found some definitions but they didn't seem quite right. We wanted to understand who we're here for — and why that word matters.",
  },
  {
    slug: "when-we-are-truly-seen-we-find-ourselves",
    title: "When We Are Truly Seen, We Find Ourselves",
    excerpt:
      "This weekend a private Infinity Container was created in our ceremonial yurt space. I wrote this in reflection of some things that came up for me as the space holder and wanted to share.",
  },
  {
    slug: "what-is-integration",
    title: "What is Integration?",
    excerpt:
      "Describing what is integration is a large question, with an even more expansive answer. Ensuring to take time for integration is the opportunity to process and embed the healing work from therapeutic sessions.",
  },
  {
    slug: "were-here-for-the-space-holders",
    title: "We're Here for the Space Holders, the Artists, the Ones Pitching In",
    excerpt:
      "When I was earning my doctorate in the early 2000s, I felt inspired by the incredible minds I collaborated with — but also constrained by a rigid mold I couldn't quite fit into.",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-14 pb-[5em]">

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 text-center border-b-2 border-black">
        <h1 className="font-[family-name:var(--font-gordon)] text-5xl md:text-7xl uppercase tracking-widest">
          Blog
        </h1>
      </section>

      {/* ── Post list ───────────────────────────────────────────── */}
      <section className="py-10 px-6 max-w-3xl mx-auto divide-y-2 divide-black">
        {POSTS.map((post) => (
          <article key={post.slug} className="py-10">
            {/* Link to the WordPress post since we're not porting blog content yet */}
            <a
              href={`https://theinfinitycontainer.com/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <h2 className="font-[family-name:var(--font-gordon)] text-2xl md:text-3xl uppercase tracking-wide mb-4 group-hover:opacity-70 transition-opacity">
                {post.title}
              </h2>
              <p className="font-[family-name:var(--font-noto-serif)] text-base leading-relaxed text-black/70">
                {post.excerpt}
              </p>
              <span className="inline-block mt-4 text-sm font-bold uppercase tracking-widest group-hover:opacity-60 transition-opacity">
                Read → ↗
              </span>
            </a>
          </article>
        ))}
      </section>

      {/* ── Nav ─────────────────────────────────────────────────── */}
      <div className="flex flex-wrap justify-center gap-6 py-6 px-6 border-t border-black/20 text-sm font-medium uppercase tracking-wide">
        <Link href="/what-is-integration" className="hover:opacity-60">What is Integration?</Link>
        <Link href="/community-call" className="hover:opacity-60">Community Call</Link>
        <Link href="/" className="hover:opacity-60">Home</Link>
      </div>
    </main>
  );
}
