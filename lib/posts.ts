import { createClient } from "@/lib/supabase/server";
import type { Post } from "@/types/post";

// Defensive: `images` was added in a later migration. If it hasn't been run
// yet, Supabase simply omits the column rather than erroring, which would
// otherwise crash every `post.images.length` access.
function normalize(post: Post): Post {
  return {
    ...post,
    images: post.images ?? [],
    focus_keyphrase: post.focus_keyphrase ?? "",
    seo_title: post.seo_title ?? "",
    meta_description: post.meta_description ?? "",
    alt_text: post.alt_text ?? "",
    claude_readability_score: post.claude_readability_score ?? null,
    author: post.author ?? "",
    reading_time_minutes: post.reading_time_minutes ?? null,
    related_slugs: post.related_slugs ?? [],
  };
}

// Falls back to this whenever a post is published without an explicit
// reading_time_minutes so the byline never has to omit it.
export function estimateReadingTime(body: string): number {
  const words = body.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export async function getPublishedPosts(): Promise<Post[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("getPublishedPosts:", error.message);
    return [];
  }
  return (data ?? []).map(normalize);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    console.error("getPostBySlug:", error.message);
    return null;
  }
  return data ? normalize(data) : null;
}

export async function getPostsBySlugs(slugs: string[]): Promise<Post[]> {
  if (slugs.length === 0) return [];
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .in("slug", slugs)
    .eq("status", "published");

  if (error) {
    console.error("getPostsBySlugs:", error.message);
    return [];
  }

  const bySlug = new Map((data ?? []).map((row) => [row.slug, normalize(row)]));
  return slugs.map((slug) => bySlug.get(slug)).filter((p): p is Post => !!p);
}

export async function getAllPostsForAdmin(): Promise<Post[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("getAllPostsForAdmin:", error.message);
    return [];
  }
  return (data ?? []).map(normalize);
}

export async function getPostById(id: string): Promise<Post | null> {
  const supabase = await createClient();
  const { data, error } = await supabase.from("posts").select("*").eq("id", id).maybeSingle();

  if (error) {
    console.error("getPostById:", error.message);
    return null;
  }
  return data ? normalize(data) : null;
}
