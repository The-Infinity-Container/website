import type { Metadata } from "next";
import Link from "next/link";
import { getAllPageSeo } from "@/lib/pageSeo";
import { getAllPostsForAdmin } from "@/lib/posts";
import { analyzeSeo, seoScore, SEO_SCORE_META, type SeoScore } from "@/lib/seoAnalysis";
import PageSeoRow from "@/components/admin/PageSeoRow";

export const metadata: Metadata = {
  title: "Admin · SEO",
  robots: { index: false, follow: false },
};

const SCORE_RANK: Record<SeoScore, number> = { red: 0, orange: 1, green: 2 };

export default async function AdminSeoPage() {
  const [pages, posts] = await Promise.all([getAllPageSeo(), getAllPostsForAdmin()]);

  const postsWithScore = posts
    .map((post) => {
      const usedKeyphrases = posts.filter((p) => p.id !== post.id).map((p) => p.focus_keyphrase);
      const checks = analyzeSeo({
        focusKeyphrase: post.focus_keyphrase,
        seoTitle: post.seo_title,
        metaDescription: post.meta_description,
        slug: post.slug,
        altText: post.alt_text,
        body: post.body,
        usedKeyphrases,
        claudeReadabilityScore: post.claude_readability_score,
      });
      return { post, score: seoScore(checks) };
    })
    .sort((a, b) => SCORE_RANK[a.score] - SCORE_RANK[b.score]);

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto flex flex-col gap-14">
      <div>
        <h1 className="font-[family-name:var(--font-gordon)] text-3xl uppercase tracking-widest mb-2">SEO</h1>
        <p className="font-[family-name:var(--font-noto-serif)] text-black/60">
          Titles and descriptions that show up in Google search results and when links are shared.
        </p>
      </div>

      <section>
        <h2 className="font-[family-name:var(--font-gordon)] text-xl uppercase tracking-widest mb-4">Pages</h2>
        {pages.length === 0 ? (
          <p className="font-[family-name:var(--font-noto-serif)] text-black/60">
            No page SEO rows found — run the 0011_page_seo migration.
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {pages.map((page) => (
              <PageSeoRow key={page.path} page={page} />
            ))}
          </div>
        )}
      </section>

      <section>
        <div className="flex items-center justify-between mb-4 gap-4">
          <h2 className="font-[family-name:var(--font-gordon)] text-xl uppercase tracking-widest">Blog Posts</h2>
          <Link href="/admin" className="shrink-0 text-sm font-bold uppercase tracking-wide underline cursor-pointer hover:opacity-70">
            Manage posts →
          </Link>
        </div>

        {postsWithScore.length === 0 ? (
          <p className="font-[family-name:var(--font-noto-serif)] text-black/60">No posts yet.</p>
        ) : (
          <div className="divide-y-2 divide-black">
            {postsWithScore.map(({ post, score }) => (
              <Link
                key={post.id}
                href={`/admin/posts/${post.id}/edit`}
                className="py-4 flex items-center gap-4 hover:bg-black/5 transition-colors"
              >
                <span
                  aria-hidden
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: SEO_SCORE_META[score].color }}
                />
                <div className="min-w-0 flex-1">
                  <p className="font-[family-name:var(--font-gordon)] uppercase tracking-wide truncate">
                    {post.seo_title || post.title}
                  </p>
                  <p className="text-sm text-black/60 truncate">
                    {post.meta_description || post.excerpt || "No meta description set"}
                  </p>
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-wide shrink-0"
                  style={{ color: SEO_SCORE_META[score].color }}
                >
                  {SEO_SCORE_META[score].label}
                </span>
                <span className="text-xs uppercase tracking-wide text-black/40 shrink-0">{post.status}</span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
