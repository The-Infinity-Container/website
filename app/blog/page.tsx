import type { Metadata } from "next";
import BlogHero from "@/components/BlogHero";
import { getPublishedPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — The Infinity Container",
  description: "Articles on integration, practitioner life, and conscious exploration from The Infinity Container.",
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <main className="pb-[5em]">
      <BlogHero posts={posts} />
    </main>
  );
}
