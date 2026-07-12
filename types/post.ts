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
  focus_keyphrase: string;
  seo_title: string;
  meta_description: string;
  alt_text: string;
  status: PostStatus;
  created_at: string;
  updated_at: string;
  published_at: string | null;
};
