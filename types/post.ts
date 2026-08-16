import type { CategoryKey } from "@/lib/categories";

export type PostStatus = "draft" | "published" | "scheduled";

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
  claude_readability_score: number | null;
  author: string;
  reading_time_minutes: number | null;
  related_slugs: string[];
  status: PostStatus;
  scheduled_at: string | null;
  created_at: string;
  updated_at: string;
  published_at: string | null;
};
