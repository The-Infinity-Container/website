import { createClient } from "@/lib/supabase/server";
import type { Post, PostStatus } from "@/types/post";

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
    scheduled_at: post.scheduled_at ?? null,
  };
}

// A "scheduled" post has no cron job flipping its status at the right time —
// it's publicly visible the moment scheduled_at passes (see the anon RLS
// policy in 0013_scheduled_posts.sql), regardless of whether the DB row
// still says "scheduled". This is what a page's effective status should be
// treated as everywhere the site or admin UI decides what to show.
export function effectiveStatus(post: Pick<Post, "status" | "scheduled_at">): PostStatus {
  if (post.status === "scheduled" && post.scheduled_at && new Date(post.scheduled_at) <= new Date()) {
    return "published";
  }
  return post.status;
}

// Publicly-visible rows: published, or scheduled with a due date. Matches
// the anon RLS policy so the query filter and row security agree.
function visibleNowFilter(): string {
  return `status.eq.published,and(status.eq.scheduled,scheduled_at.lte.${new Date().toISOString()})`;
}

export async function getPublishedPosts(): Promise<Post[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .or(visibleNowFilter())
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
    .or(visibleNowFilter())
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
    .or(visibleNowFilter());

  if (error) {
    console.error("getPostsBySlugs:", error.message);
    return [];
  }

  const bySlug = new Map((data ?? []).map((row) => [row.slug, normalize(row)]));
  return slugs.map((slug) => bySlug.get(slug)).filter((p): p is Post => !!p);
}

// Admin requests run as an authenticated admin (RLS grants them UPDATE), so
// this is the one place that can safely tidy up rows the public visibility
// filter has already been treating as live for a while.
async function publishDuePosts(supabase: Awaited<ReturnType<typeof createClient>>) {
  await supabase
    .from("posts")
    .update({ status: "published" })
    .eq("status", "scheduled")
    .lte("scheduled_at", new Date().toISOString());
}

export async function getAllPostsForAdmin(): Promise<Post[]> {
  const supabase = await createClient();
  await publishDuePosts(supabase);
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
