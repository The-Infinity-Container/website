import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/posts";

const BASE_URL = "https://theinfinitycontainer.com";

const STATIC_ROUTES: {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/what-is-integration", changeFrequency: "monthly", priority: 0.8 },
  { path: "/what-is-the-infinity-container", changeFrequency: "monthly", priority: 0.8 },
  { path: "/who-is-this-for", changeFrequency: "monthly", priority: 0.7 },
  { path: "/community-call", changeFrequency: "monthly", priority: 0.7 },
  { path: "/find-my-membership", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.6 },
  { path: "/testimonials", changeFrequency: "monthly", priority: 0.5 },
  { path: "/partnerships", changeFrequency: "monthly", priority: 0.5 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedPosts();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updated_at,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
