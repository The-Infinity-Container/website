import { createClient } from "@/lib/supabase/client";

// Kept in sync with the post-images bucket's allowed_mime_types / file_size_limit
// (supabase/migrations/0010_restrict_post_images_bucket.sql), which is the
// real enforcement boundary since uploads go browser-to-Storage directly.
const ALLOWED_TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};
const MAX_BYTES = 5 * 1024 * 1024;

export async function uploadImage(file: File): Promise<string | null> {
  const ext = ALLOWED_TYPES[file.type];
  if (!ext) {
    console.error("uploadImage: unsupported file type", file.type);
    return null;
  }
  if (file.size > MAX_BYTES) {
    console.error("uploadImage: file too large", file.size);
    return null;
  }

  const supabase = createClient();
  const path = `${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage.from("post-images").upload(path, file);
  if (error) {
    console.error("uploadImage:", error.message);
    return null;
  }

  const { data } = supabase.storage.from("post-images").getPublicUrl(path);
  return data.publicUrl;
}
