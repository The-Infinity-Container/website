import type { Metadata } from "next";
import BlogHero from "@/components/BlogHero";
import BlogPostList from "@/components/BlogPostList";
import WayDivider from "@/components/WayDivider";
import { getPublishedPosts } from "@/lib/posts";
import { resolvePageMetadata } from "@/lib/pageSeo";

export async function generateMetadata(): Promise<Metadata> {
  return resolvePageMetadata("/blog", {
    title: "Blog | The Infinity Container",
    description: "Articles on integration, practitioner life, and conscious exploration from The Infinity Container.",
  });
}

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <BlogHero />
      <BlogPostList posts={posts} />
      <WayDivider />
    </>
  );
}
