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

export async function getUsedFocusKeyphrases(excludeId?: string): Promise<string[]> {
  const supabase = await requireAdmin();
  let query = supabase.from("posts").select("focus_keyphrase").neq("focus_keyphrase", "");
  if (excludeId) query = query.neq("id", excludeId);

  const { data, error } = await query;
  if (error) return [];
  return (data ?? []).map((row) => row.focus_keyphrase as string).filter(Boolean);
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
  focusKeyphrase: string;
  seoTitle: string;
  metaDescription: string;
  altText: string;
  claudeReadabilityScore: number | null;
  author: string;
  readingTimeMinutes: number | null;
  relatedSlugs: string[];
  status: PostStatus;
  scheduledAt: string | null;
};

function validateSeoLengths(input: PostInput): string | null {
  if (input.focusKeyphrase.length > 60) return "Focus keyphrase must be 60 characters or fewer.";
  if (input.seoTitle.length > 60) return "SEO title must be 60 characters or fewer.";
  if (input.metaDescription.length > 160) return "Meta description must be 160 characters or fewer.";
  if (input.altText.length > 125) return "Alt text must be 125 characters or fewer.";
  if (
    input.claudeReadabilityScore !== null &&
    (input.claudeReadabilityScore < 1 || input.claudeReadabilityScore > 100)
  ) {
    return "Claude readability score must be between 1 and 100.";
  }
  return null;
}

function deriveExcerpt(input: PostInput): string | null {
  if (input.excerpt.trim()) return input.excerpt.trim();
  const text = input.body.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return text ? text.slice(0, 200) : null;
}

function validateSchedule(input: PostInput): string | null {
  if (input.status !== "scheduled") return null;
  if (!input.scheduledAt) return "Pick a date and time to schedule this post.";
  if (new Date(input.scheduledAt) <= new Date()) return "Scheduled time must be in the future.";
  return null;
}

// published_at doubles as the sort key for the public post list, so a
// scheduled post gets it set up front to scheduled_at rather than left null
// — it needs to sort into place among already-published posts immediately,
// not just once an admin flips its status after the fact.
function resolvePublishFields(input: PostInput, wasPublished: boolean) {
  if (input.status === "scheduled") {
    return { published_at: input.scheduledAt, scheduled_at: input.scheduledAt };
  }
  if (input.status === "published") {
    return { published_at: wasPublished ? undefined : new Date().toISOString(), scheduled_at: null };
  }
  return { published_at: null, scheduled_at: null };
}

export async function createPost(input: PostInput): Promise<PostActionState> {
  const supabase = await requireAdmin();

  if (!input.title.trim()) return { error: "Title is required." };
  if (!input.slug.trim()) return { error: "Slug is required." };
  if (input.images.length > 5) return { error: "Up to 5 gallery images allowed." };
  const seoError = validateSeoLengths(input);
  if (seoError) return { error: seoError };
  const scheduleError = validateSchedule(input);
  if (scheduleError) return { error: scheduleError };

  const { error } = await supabase.from("posts").insert({
    title: input.title.trim(),
    slug: input.slug.trim(),
    category: input.category,
    excerpt: deriveExcerpt(input),
    body: input.body,
    cover_image_url: input.coverImageUrl,
    images: input.images,
    focus_keyphrase: input.focusKeyphrase.trim(),
    seo_title: input.seoTitle.trim(),
    meta_description: input.metaDescription.trim(),
    alt_text: input.altText.trim(),
    claude_readability_score: input.claudeReadabilityScore,
    author: input.author.trim(),
    reading_time_minutes: input.readingTimeMinutes,
    related_slugs: input.relatedSlugs,
    status: input.status,
    ...resolvePublishFields(input, false),
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
  const seoError = validateSeoLengths(input);
  if (seoError) return { error: seoError };
  const scheduleError = validateSchedule(input);
  if (scheduleError) return { error: scheduleError };

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
      focus_keyphrase: input.focusKeyphrase.trim(),
      seo_title: input.seoTitle.trim(),
      meta_description: input.metaDescription.trim(),
      alt_text: input.altText.trim(),
      claude_readability_score: input.claudeReadabilityScore,
      author: input.author.trim(),
      reading_time_minutes: input.readingTimeMinutes,
      related_slugs: input.relatedSlugs,
      status: input.status,
      ...resolvePublishFields(input, wasPublished),
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

// currentStatus should be the post's *effective* status (see effectiveStatus
// in lib/posts.ts) — a due-but-unflipped scheduled post reads as "published"
// here too, so toggling it correctly unpublishes rather than re-scheduling.
export async function togglePublish(id: string, currentStatus: PostStatus) {
  const supabase = await requireAdmin();
  const nextStatus: PostStatus = currentStatus === "published" ? "draft" : "published";

  const { error } = await supabase
    .from("posts")
    .update({
      status: nextStatus,
      published_at: nextStatus === "published" ? new Date().toISOString() : null,
      scheduled_at: null,
    })
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin");
  revalidatePath("/blog");
}

export async function publishNow(id: string) {
  const supabase = await requireAdmin();
  const { error } = await supabase
    .from("posts")
    .update({ status: "published", published_at: new Date().toISOString(), scheduled_at: null })
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin");
  revalidatePath("/admin/scheduled");
  revalidatePath("/blog");
}

export async function unschedulePost(id: string) {
  const supabase = await requireAdmin();
  const { error } = await supabase
    .from("posts")
    .update({ status: "draft", published_at: null, scheduled_at: null })
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin");
  revalidatePath("/admin/scheduled");
  revalidatePath("/blog");
}
