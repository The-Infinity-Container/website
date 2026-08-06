import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getPostsBySlugs } from "@/lib/posts";
import { estimateReadingTime } from "@/lib/readingTime";
import { categoryColor, categoryLabel } from "@/lib/categories";
import { sanitizePostBody } from "@/lib/sanitizeHtml";
import { injectHeadingAnchors, POST_HEADING_ANCHORS } from "@/lib/postAnchors";
import SectionLabel from "@/components/SectionLabel";
import SectionHeading from "@/components/SectionHeading";
import BodyText from "@/components/BodyText";
import SharePostLinks from "@/components/SharePostLinks";
import WayDivider from "@/components/WayDivider";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found — The Infinity Container" };
  return {
    title: `${post.seo_title || post.title} — The Infinity Container`,
    description: post.meta_description || post.excerpt || undefined,
  };
}

function formatDate(iso: string | null): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const anchors = POST_HEADING_ANCHORS[slug];
  const safeBody = anchors
    ? injectHeadingAnchors(sanitizePostBody(post.body), anchors)
    : sanitizePostBody(post.body);

  const readingTime = post.reading_time_minutes ?? estimateReadingTime(post.body);
  const relatedPosts = await getPostsBySlugs(post.related_slugs);

  return (
    <main className="bg-white">
      {/* ── Breadcrumb ───────────────────────────────────────────── */}
      <div className="max-w-[1290px] mx-auto px-6 pt-5">
        <Link
          href="/blog"
          className="font-[family-name:var(--font-gordon)] text-[11px] tracking-[0.14em] uppercase text-tic-dark-grey hover:text-tic-cobalt transition-colors"
        >
          Blog
        </Link>
        <span className="text-tic-grey mx-2">→</span>
        <span
          className="font-[family-name:var(--font-gordon)] text-[11px] tracking-[0.14em] uppercase"
          style={{ color: categoryColor(post.category) }}
        >
          {categoryLabel(post.category)}
        </span>
      </div>

      {/* ── Post header ──────────────────────────────────────────── */}
      <header className="max-w-[1290px] mx-auto px-6 pt-11 pb-14 grid md:grid-cols-[680px_1fr] gap-16 items-start">
        <div className="flex flex-col gap-5">
          <p
            className="font-[family-name:var(--font-gordon)] text-[11px] tracking-[0.2em] uppercase"
            style={{ color: categoryColor(post.category) }}
          >
            {categoryLabel(post.category)}
          </p>
          <h1
            className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.12] text-black"
            style={{ fontSize: "clamp(28px, 4.5vw, 48px)" }}
          >
            {post.title}
          </h1>
          <div className="flex items-center gap-3 flex-wrap">
            {post.author && (
              <>
                <span className="font-[family-name:var(--font-gordon)] text-xs tracking-[0.1em] uppercase text-tic-dark-grey">
                  {post.author}
                </span>
                <span className="text-tic-grey">·</span>
              </>
            )}
            {post.published_at && (
              <>
                <span className="text-[13px] text-tic-dark-grey">{formatDate(post.published_at)}</span>
                <span className="text-tic-grey">·</span>
              </>
            )}
            <span className="font-[family-name:var(--font-gordon)] text-[11px] tracking-[0.12em] uppercase text-tic-dark-grey">
              {readingTime} min read
            </span>
          </div>
          {post.excerpt && (
            <BodyText className="italic text-[#444] border-l-[3px] border-tic-yellow pl-5">
              {post.excerpt}
            </BodyText>
          )}
        </div>

        <div className="hidden md:block pt-2">
          {post.cover_image_url ? (
            <Image
              src={post.cover_image_url}
              alt={post.alt_text || post.title}
              width={800}
              height={600}
              className="w-full h-auto aspect-4/3 object-cover rounded mb-7"
              priority
            />
          ) : (
            <div className="bg-tic-grey rounded aspect-4/3 flex items-center justify-center text-xs italic text-tic-dark-grey mb-7">
              [Featured image]
            </div>
          )}
          <SharePostLinks slug={post.slug} />
        </div>
      </header>

      <hr className="border-t border-tic-grey max-w-[1242px] mx-auto" />

      {/* ── Post body ────────────────────────────────────────────── */}
      <article
        className="max-w-[680px] mx-auto px-6 py-14 font-[family-name:var(--font-noto-serif)]
          [&>p]:text-body [&>p]:text-[#222] [&>p]:mb-7
          [&_h1]:font-[family-name:var(--font-gordon)] [&_h1]:font-normal [&_h1]:tracking-[0.02em] [&_h1]:leading-[1.2] [&_h1]:text-black [&_h1]:mt-14 [&_h1]:mb-5 [&_h1]:first:mt-0
          [&_h1]:text-[length:clamp(22px,3vw,32px)]
          [&_h2]:font-[family-name:var(--font-gordon)] [&_h2]:font-normal [&_h2]:tracking-[0.04em] [&_h2]:text-black [&_h2]:mt-9 [&_h2]:mb-3.5
          [&_h2]:text-[length:clamp(16px,2vw,20px)]
          [&_strong]:font-semibold [&_strong]:text-black
          [&_em]:italic
          [&_a]:text-tic-cobalt [&_a]:border-b [&_a]:border-tic-cobalt [&_a]:no-underline hover:[&_a]:text-tic-rose hover:[&_a]:border-tic-rose
          [&_ul]:list-none [&_ul]:pl-0 [&_ul]:mb-7 [&_ul]:mt-0
          [&_li]:relative [&_li]:pl-6 [&_li]:py-1.5 [&_li]:border-b [&_li]:border-black/[0.06]
          [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[18px] [&_li]:before:w-[7px] [&_li]:before:h-[7px] [&_li]:before:rounded-full [&_li]:before:bg-tic-yellow
          [&_li_p]:text-body [&_li_p]:text-[#222] [&_li_p]:m-0
          [&_blockquote]:italic [&_blockquote]:text-[22px] [&_blockquote]:leading-[1.65] [&_blockquote]:text-tic-brown [&_blockquote]:border-l-[3px] [&_blockquote]:border-tic-brown [&_blockquote]:pl-6 [&_blockquote]:my-10"
        dangerouslySetInnerHTML={{ __html: safeBody }}
      />

      {post.images.length > 0 && (
        <div className="max-w-[680px] mx-auto px-6 pb-14 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {post.images.map((url) => (
            <Image
              key={url}
              src={url}
              alt=""
              width={400}
              height={400}
              className="w-full aspect-square object-cover rounded border border-tic-grey"
            />
          ))}
        </div>
      )}

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-tic-yellow px-6 py-20 text-center">
        <SectionHeading className="text-center max-w-2xl mx-auto" marginBottom="16px">
          Start your integration practice.
        </SectionHeading>
        <BodyText className="max-w-xl mx-auto mb-9 text-[#2a2a1a]">
          The Infinity Container exists for exactly this. Monthly community calls, weekly practice sessions, a
          framework that holds the rhythm, and a community of people doing the same work.
        </BodyText>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="/community-call"
            className="font-[family-name:var(--font-gordon)] text-xs tracking-[0.12em] uppercase bg-tic-orange text-black px-4 md:px-7 py-3.5 rounded hover:bg-tic-pink transition-colors"
          >
            Join a Free Community Call →
          </a>
          <a
            href="/find-my-membership"
            className="font-[family-name:var(--font-gordon)] text-xs tracking-[0.12em] uppercase border-2 border-black text-black px-4 md:px-7 py-3.5 rounded hover:bg-black hover:text-white transition-colors"
          >
            Find My Membership →
          </a>
        </div>
      </section>

      {/* ── Related posts ───────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="max-w-[1290px] mx-auto px-6 py-20">
          <SectionLabel>More from the blog</SectionLabel>
          <div className="grid md:grid-cols-3 gap-9">
            {relatedPosts.map((related) => (
              <article
                key={related.slug}
                className="flex flex-col gap-3.5 p-7 bg-white border border-tic-grey rounded hover:border-tic-dark-grey transition-colors"
              >
                <p
                  className="font-[family-name:var(--font-gordon)] text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: categoryColor(related.category) }}
                >
                  {categoryLabel(related.category)}
                </p>
                <Link
                  href={`/blog/${related.slug}`}
                  className="font-[family-name:var(--font-gordon)] font-normal text-black text-lg tracking-[0.02em] leading-[1.3] grow hover:text-tic-brown transition-colors"
                >
                  {related.title}
                </Link>
                <Link
                  href={`/blog/${related.slug}`}
                  className="self-start font-[family-name:var(--font-gordon)] text-[10px] tracking-[0.14em] uppercase text-tic-cobalt border-b border-tic-cobalt pb-[2px] hover:text-tic-rose hover:border-tic-rose transition-colors"
                >
                  Read →
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      <WayDivider />
    </main>
  );
}
