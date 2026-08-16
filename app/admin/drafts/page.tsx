import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsForAdmin, effectiveStatus } from "@/lib/posts";
import { categoryLabel } from "@/lib/categories";
import { deletePost, togglePublish } from "@/lib/actions/posts";

export const metadata: Metadata = {
  title: "Admin · Drafts",
  robots: { index: false, follow: false },
};

export default async function DraftsPage() {
  const allPosts = await getAllPostsForAdmin();
  const posts = allPosts.filter((post) => effectiveStatus(post) === "draft");

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <h1 className="font-[family-name:var(--font-gordon)] text-3xl uppercase tracking-widest mb-8">
        Drafts
      </h1>

      {posts.length === 0 && (
        <p className="font-[family-name:var(--font-noto-serif)] text-black/60">No drafts.</p>
      )}

      <div className="divide-y-2 divide-black">
        {posts.map((post) => (
          <div key={post.id} className="py-5 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="font-[family-name:var(--font-gordon)] uppercase tracking-wide truncate">
                {post.title}
              </p>
              <p className="text-sm text-black/60">{categoryLabel(post.category)}</p>
            </div>
            <div className="flex items-center gap-4 shrink-0 text-sm font-bold uppercase tracking-wide">
              <Link href={`/admin/posts/${post.id}/edit`} className="underline cursor-pointer hover:opacity-70">
                Edit
              </Link>
              <form action={togglePublish.bind(null, post.id, "draft")}>
                <button type="submit" className="underline cursor-pointer hover:opacity-70">
                  Publish
                </button>
              </form>
              <form action={deletePost.bind(null, post.id)}>
                <button type="submit" className="underline text-tic-coral cursor-pointer hover:opacity-70">
                  Delete
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
