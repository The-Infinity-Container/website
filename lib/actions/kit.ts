"use server";

import { createClient } from "@/lib/supabase/server";
import { listKitBroadcasts, getKitBroadcastContent, type KitBroadcastSummary } from "@/lib/kit";

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
}

export async function fetchKitBroadcasts(): Promise<KitBroadcastSummary[]> {
  await requireAdmin();
  return listKitBroadcasts();
}

export async function importKitBroadcast(id: number): Promise<{ title: string; body: string }> {
  await requireAdmin();
  return getKitBroadcastContent(id);
}
