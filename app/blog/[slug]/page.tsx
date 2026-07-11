import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import sanitizeHtml from "sanitize-html";
import { getPostBySlug } from "@/lib/posts";
import { categoryLabel } from "@/lib/categories";

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
      <article className="px-6 py-16 max-w-2xl mx-auto">
        <p className="text-sm font-bold uppercase tracking-widest text-black/50 mb-4">
          {categoryLabel(post.category)}
        </p>
        <h1 className="font-[family-name:var(--font-gordon)] text-4xl md:text-5xl uppercase tracking-wide mb-8">
          {post.title}
        </h1>
        {post.cover_image_url && (
          <Image
            src={post.cover_image_url}
            alt=""
            width={800}
            height={450}
            className="w-full h-auto mb-10"
          />
        )}
        <div
          className="font-[family-name:var(--font-noto-serif)] prose max-w-none"
          dangerouslySetInnerHTML={{ __html: safeBody }}
        />
        <Link
          href="/blog"
          className="inline-block mt-12 text-sm font-bold uppercase tracking-widest underline hover:opacity-60 transition-opacity"
        >
          ← Back to Blog
        </Link>
      </article>
    </main>
  );
}
