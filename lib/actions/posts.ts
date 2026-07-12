"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { PostStatus } from "@/types/post";
import type { CategoryKey } from "@/lib/categories";

// Proxy gates page navigation, but Server Actions are reachable directly via
// POST regardless of proxy matchers — every mutation re-checks auth itself.
async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("Unauthorized");
  }
  return supabase;
}

export async function deletePost(id: string) {
  const supabase = await requireAdmin();
  const { error } = await supabase.from("posts").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin");
  revalidatePath("/blog");
}

export type PostActionState = { error: string } | null;

export type PostInput = {
  title: string;
  slug: string;
  category: CategoryKey;
  excerpt: string;
  body: string;
  coverImageUrl: string | null;
  images: string[];
  status: PostStatus;
};

function deriveExcerpt(input: PostInput): string | null {
  if (input.excerpt.trim()) return input.excerpt.trim();
  const text = input.body.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return text ? text.slice(0, 200) : null;
}

export async function createPost(input: PostInput): Promise<PostActionState> {
  const supabase = await requireAdmin();

  if (!input.title.trim()) return { error: "Title is required." };
  if (!input.slug.trim()) return { error: "Slug is required." };
  if (input.images.length > 5) return { error: "Up to 5 gallery images allowed." };

  const { error } = await supabase.from("posts").insert({
    title: input.title.trim(),
    slug: input.slug.trim(),
    category: input.category,
    excerpt: deriveExcerpt(input),
    body: input.body,
    cover_image_url: input.coverImageUrl,
    images: input.images,
    status: input.status,
    published_at: input.status === "published" ? new Date().toISOString() : null,
  });

  if (error) {
    if (error.code === "23505") return { error: "That slug is already taken." };
    return { error: error.message };
  }

  revalidatePath("/admin");
  revalidatePath("/blog");
  redirect("/admin");
}

export async function updatePost(id: string, input: PostInput): Promise<PostActionState> {
  const supabase = await requireAdmin();

  if (!input.title.trim()) return { error: "Title is required." };
  if (!input.slug.trim()) return { error: "Slug is required." };
  if (input.images.length > 5) return { error: "Up to 5 gallery images allowed." };

  const existing = await supabase.from("posts").select("status").eq("id", id).maybeSingle();
  const wasPublished = existing.data?.status === "published";

  const { error } = await supabase
    .from("posts")
    .update({
      title: input.title.trim(),
      slug: input.slug.trim(),
      category: input.category,
      excerpt: deriveExcerpt(input),
      body: input.body,
      cover_image_url: input.coverImageUrl,
      images: input.images,
      status: input.status,
      published_at:
        input.status === "published"
          ? wasPublished
            ? undefined
            : new Date().toISOString()
          : null,
    })
    .eq("id", id);

  if (error) {
    if (error.code === "23505") return { error: "That slug is already taken." };
    return { error: error.message };
  }

  revalidatePath("/admin");
  revalidatePath("/blog");
  revalidatePath(`/blog/${input.slug}`);
  redirect("/admin");
}

export async function togglePublish(id: string, currentStatus: PostStatus) {
  const supabase = await requireAdmin();
  const nextStatus: PostStatus = currentStatus === "published" ? "draft" : "published";

  const { error } = await supabase
    .from("posts")
    .update({
      status: nextStatus,
      published_at: nextStatus === "published" ? new Date().toISOString() : null,
    })
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin");
  revalidatePath("/blog");
}
