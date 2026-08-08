-- lib/uploadImage.ts uploads straight from the browser to Supabase Storage
-- with the public anon key, so app-level validation alone isn't a real
-- boundary — anyone can call the Storage API directly and skip it. This
-- enforces the same allowlist/size cap at the bucket level, where Supabase
-- rejects non-matching uploads regardless of how the request was made.
--
-- Notably restricts out SVG: this project's next.config.ts sets
-- dangerouslyAllowSVG for next/image, but that only sandboxes SVGs served
-- through Next's image proxy — the direct Supabase Storage public URL has
-- no such sandboxing, so an uploaded SVG with an inline <script> would run
-- if opened directly.

update storage.buckets
set
  allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  file_size_limit = 5242880 -- 5 MB
where id = 'post-images';
