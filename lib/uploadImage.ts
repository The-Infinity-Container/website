import { createClient } from "@/lib/supabase/client";

export async function uploadImage(file: File): Promise<string | null> {
  const supabase = createClient();
  const ext = file.name.split(".").pop();
  const path = `${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage.from("post-images").upload(path, file);
  if (error) {
    console.error("uploadImage:", error.message);
    return null;
  }

  const { data } = supabase.storage.from("post-images").getPublicUrl(path);
  return data.publicUrl;
}
