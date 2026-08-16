import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsForAdmin, effectiveStatus } from "@/lib/posts";
import { categoryLabel } from "@/lib/categories";
import { publishNow, unschedulePost } from "@/lib/actions/posts";

export const metadata: Metadata = {
  title: "Admin · Scheduled Posts",
  robots: { index: false, follow: false },
};

export default async function ScheduledPostsPage() {
  const allPosts = await getAllPostsForAdmin();
  const posts = allPosts
    .filter((post) => effectiveStatus(post) === "scheduled")
    .sort((a, b) => new Date(a.scheduled_at!).getTime() - new Date(b.scheduled_at!).getTime());

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <h1 className="font-[family-name:var(--font-gordon)] text-3xl uppercase tracking-widest mb-8">
        Scheduled Posts
      </h1>

      {posts.length === 0 && (
        <p className="font-[family-name:var(--font-noto-serif)] text-black/60">
          No posts scheduled. Set a publish date from a post&apos;s Schedule button.
        </p>
      )}

      <div className="divide-y-2 divide-black">
        {posts.map((post) => (
          <div key={post.id} className="py-5 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="font-[family-name:var(--font-gordon)] uppercase tracking-wide truncate">
                {post.title}
              </p>
              <p className="text-sm text-black/60">
                {categoryLabel(post.category)} · publishes{" "}
                {new Date(post.scheduled_at!).toLocaleString(undefined, {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0 text-sm font-bold uppercase tracking-wide">
              <Link href={`/admin/posts/${post.id}/edit`} className="underline cursor-pointer hover:opacity-70">
                Edit
              </Link>
              <form action={publishNow.bind(null, post.id)}>
                <button type="submit" className="underline cursor-pointer hover:opacity-70">
                  Publish Now
                </button>
              </form>
              <form action={unschedulePost.bind(null, post.id)}>
                <button
                  type="submit"
                  title="Cancels the schedule and moves this post back to Drafts — it won't be deleted."
                  className="underline text-tic-coral cursor-pointer hover:opacity-70"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
