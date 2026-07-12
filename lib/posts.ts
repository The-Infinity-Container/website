import { createClient } from "@/lib/supabase/server";
import type { Post } from "@/types/post";

// Defensive: `images` was added in a later migration. If it hasn't been run
// yet, Supabase simply omits the column rather than erroring, which would
// otherwise crash every `post.images.length` access.
function normalize(post: Post): Post {
  return { ...post, images: post.images ?? [] };
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
