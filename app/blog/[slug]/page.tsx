import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import sanitizeHtml from "sanitize-html";
import { getPostBySlug } from "@/lib/posts";
import { categoryColor, categoryLabel } from "@/lib/categories";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found — The Infinity Container" };
  return {
    title: `${post.title} — The Infinity Container`,
    description: post.excerpt ?? undefined,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const safeBody = sanitizeHtml(post.body, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "h1", "h2"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt"],
      a: ["href", "target", "rel"],
    },
  });

  return (
    <main className="pt-14 pb-[5em]">
      <article className="px-6 pt-16 pb-10 max-w-2xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <span
            className="w-3 h-3 rounded-full shrink-0"
            style={{ backgroundColor: categoryColor(post.category) }}
            aria-hidden
          />
          <p className="text-sm font-bold uppercase tracking-widest text-black/50">
            {categoryLabel(post.category)}
          </p>
        </div>
        <h1 className="font-[family-name:var(--font-gordon)] text-4xl md:text-5xl uppercase tracking-wide mb-8">
          {post.title}
        </h1>
        {post.cover_image_url && (
          <Image
            src={post.cover_image_url}
            alt=""
            width={800}
            height={450}
            className="w-full h-auto mb-10 border-2 border-black"
          />
        )}
        <div
          className="font-[family-name:var(--font-noto-serif)] prose max-w-none"
          dangerouslySetInnerHTML={{ __html: safeBody }}
        />

        {post.images.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-12">
            {post.images.map((url) => (
              <Image
                key={url}
                src={url}
                alt=""
                width={400}
                height={400}
                className="w-full aspect-square object-cover border-2 border-black"
              />
            ))}
          </div>
        )}
      </article>

      {/* ── Membership CTA ──────────────────────────────────────── */}
      <section className="relative bg-black text-tic-yellow py-16 px-6 text-center overflow-hidden">
        <Image
          src="/assets/spider-heart.svg"
          alt=""
          aria-hidden
          width={305}
          height={531}
          className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 w-28 lg:w-36 h-auto opacity-90"
        />
        <p className="font-[family-name:var(--font-gordon)] text-2xl md:text-3xl uppercase tracking-widest max-w-xl mx-auto mb-8">
          We&apos;re supporting the supporters.
        </p>
        <a
          href="https://the-infinity-container.mn.co/landing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-tic-yellow text-tic-yellow px-10 py-4 font-[family-name:var(--font-gordon)] text-xl uppercase tracking-widest hover:bg-tic-yellow hover:text-black transition-colors"
        >
          Join the Container
        </a>
      </section>

      <div className="px-6 py-10 max-w-2xl mx-auto">
        <Link
          href="/blog"
          className="inline-block text-sm font-bold uppercase tracking-widest underline hover:opacity-60 transition-opacity"
        >
          ← Back to Blog
        </Link>
      </div>
    </main>
  );
}
