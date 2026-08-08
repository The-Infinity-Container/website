import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  updated_at: string;
};

export async function getPageSeo(path: string): Promise<PageSeo | null> {
  const supabase = await createClient();
  const { data, error } = await supabase.from("page_seo").select("*").eq("path", path).maybeSingle();

  if (error) {
    console.error("getPageSeo:", error.message);
    return null;
  }
  return data;
}

export async function getAllPageSeo(): Promise<PageSeo[]> {
  const supabase = await createClient();
  const { data, error } = await supabase.from("page_seo").select("*").order("path");

  if (error) {
    console.error("getAllPageSeo:", error.message);
    return [];
  }
  return data ?? [];
}

// Static marketing pages store their title/description in the page_seo table
// (editable from /admin/seo) but fall back to this hardcoded copy if the row
// is missing — e.g. before the migration's seed has run, or if the database
// is briefly unreachable.
export async function resolvePageMetadata(
  path: string,
  fallback: { title: string; description: string }
): Promise<Metadata> {
  const seo = await getPageSeo(path);
  return {
    title: { absolute: seo?.title || fallback.title },
    description: seo?.description || fallback.description,
    alternates: { canonical: path },
  };
}
