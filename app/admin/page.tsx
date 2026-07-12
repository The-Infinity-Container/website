import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsForAdmin } from "@/lib/posts";
import { categoryLabel } from "@/lib/categories";
import { deletePost, togglePublish } from "@/lib/actions/posts";

export const metadata: Metadata = {
  title: "Admin · Posts — The Infinity Container",
};

export default async function AdminDashboardPage() {
  const posts = await getAllPostsForAdmin();

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8 gap-4">
        <h1 className="font-[family-name:var(--font-gordon)] text-3xl uppercase tracking-widest">
          Posts
        </h1>
        <Link
          href="/admin/posts/new"
          className="shrink-0 bg-black text-tic-yellow font-[family-name:var(--font-gordon)] uppercase tracking-widest text-sm px-6 py-3 cursor-pointer hover:bg-tic-yellow hover:text-black transition-colors"
        >
          New Post
        </Link>
      </div>

      {posts.length === 0 && (
        <p className="font-[family-name:var(--font-noto-serif)] text-black/60">No posts yet.</p>
      )}

      <div className="divide-y-2 divide-black">
        {posts.map((post) => (
          <div key={post.id} className="py-5 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="font-[family-name:var(--font-gordon)] uppercase tracking-wide truncate">
                {post.title}
              </p>
              <p className="text-sm text-black/60">
                {categoryLabel(post.category)} · {post.status}
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0 text-sm font-bold uppercase tracking-wide">
              <Link href={`/admin/posts/${post.id}/edit`} className="underline cursor-pointer hover:opacity-70">
                Edit
              </Link>
              <form action={togglePublish.bind(null, post.id, post.status)}>
                <button type="submit" className="underline cursor-pointer hover:opacity-70">
                  {post.status === "published" ? "Unpublish" : "Publish"}
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
