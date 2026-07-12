import type { CategoryKey } from "@/lib/categories";

export type PostStatus = "draft" | "published";

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  body: string;
  category: CategoryKey;
  cover_image_url: string | null;
  images: string[];
  status: PostStatus;
  created_at: string;
  updated_at: string;
  published_at: string | null;
};
