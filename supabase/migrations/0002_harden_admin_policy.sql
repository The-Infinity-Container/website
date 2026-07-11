-- Optional hardening step — run this AFTER creating the one admin user
-- (Authentication → Users → Add user in the Supabase dashboard).
--
-- 1. Copy that user's UID from the dashboard (Authentication → Users → click
--    the user → "User UID").
-- 2. Replace REPLACE_WITH_ADMIN_UID below with that UID.
-- 3. Run this whole file in the SQL Editor.
--
-- This scopes write access to that specific user instead of "any
-- authenticated user", so it no longer depends on self-signup staying
-- disabled.

drop policy if exists "authenticated can insert posts" on posts;
drop policy if exists "authenticated can update posts" on posts;
drop policy if exists "authenticated can delete posts" on posts;

create policy "admin can insert posts"
  on posts for insert
  to authenticated
  with check (auth.uid() = 'REPLACE_WITH_ADMIN_UID'::uuid);

create policy "admin can update posts"
  on posts for update
  to authenticated
  using (auth.uid() = 'REPLACE_WITH_ADMIN_UID'::uuid)
  with check (auth.uid() = 'REPLACE_WITH_ADMIN_UID'::uuid);

create policy "admin can delete posts"
  on posts for delete
  to authenticated
  using (auth.uid() = 'REPLACE_WITH_ADMIN_UID'::uuid);

drop policy if exists "authenticated can upload post-images" on storage.objects;
drop policy if exists "authenticated can delete post-images" on storage.objects;

create policy "admin can upload post-images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'post-images' and auth.uid() = 'REPLACE_WITH_ADMIN_UID'::uuid);

create policy "admin can delete post-images"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'post-images' and auth.uid() = 'REPLACE_WITH_ADMIN_UID'::uuid);
