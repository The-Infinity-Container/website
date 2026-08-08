import type { Metadata } from "next";
import NewPostClient from "./NewPostClient";
import { getAllPostsForAdmin } from "@/lib/posts";

export const metadata: Metadata = {
  title: "New Post — Admin",
  robots: { index: false, follow: false },
};

export default async function NewPostPage() {
  const allPosts = await getAllPostsForAdmin();
  const otherPosts = allPosts.map((p) => ({ slug: p.slug, title: p.title }));

  return (
    <div className="px-6 py-10 max-w-2xl mx-auto">
      <h1 className="font-[family-name:var(--font-gordon)] text-3xl uppercase tracking-widest mb-8">
        New Post
      </h1>
      <NewPostClient otherPosts={otherPosts} />
    </div>
  );
}
