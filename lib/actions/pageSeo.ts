"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

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

export type PageSeoActionState = { error: string } | { success: true } | null;

const TITLE_MAX = 70;
const DESCRIPTION_MAX = 160;

export async function updatePageSeo(path: string, title: string, description: string): Promise<PageSeoActionState> {
  const supabase = await requireAdmin();

  const trimmedTitle = title.trim();
  const trimmedDescription = description.trim();
  if (!trimmedTitle) return { error: "Title is required." };
  if (trimmedTitle.length > TITLE_MAX) return { error: `Title must be ${TITLE_MAX} characters or fewer.` };
  if (trimmedDescription.length > DESCRIPTION_MAX) {
    return { error: `Description must be ${DESCRIPTION_MAX} characters or fewer.` };
  }

  const { error } = await supabase
    .from("page_seo")
    .update({ title: trimmedTitle, description: trimmedDescription })
    .eq("path", path);

  if (error) return { error: error.message };

  revalidatePath("/admin/seo");
  revalidatePath(path);
  return { success: true };
}
