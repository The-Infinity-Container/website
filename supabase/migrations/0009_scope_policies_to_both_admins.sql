-- Supersedes 0002's write policies and 0003's read policy.
--
-- 0002 only scoped access to a single admin UID, but this project has two
-- admin accounts. This migration is safe to run regardless of whether 0001's
-- interim policies or 0002's single-UID policies are currently live — it
-- defensively drops every prior name before recreating clean ones scoped to
-- both admins, for both read and write (0003 granted "authenticated can read
-- all posts" to *any* authenticated user and was never tightened).
--
-- Admin UIDs (Authentication → Users in the Supabase dashboard):
--   cda494cf-0aa9-4f47-a816-5e155823ce17
--   7402a443-3804-4b57-95f3-d90cecbb4f78
-- If you add or remove an admin, update the two literals below and re-run
-- this whole file in the SQL Editor.

drop policy if exists "authenticated can insert posts" on posts;
drop policy if exists "authenticated can update posts" on posts;
drop policy if exists "authenticated can delete posts" on posts;
drop policy if exists "authenticated can read all posts" on posts;
drop policy if exists "admin can insert posts" on posts;
drop policy if exists "admin can update posts" on posts;
drop policy if exists "admin can delete posts" on posts;
drop policy if exists "admin can read all posts" on posts;

create policy "admin can read all posts"
  on posts for select
  to authenticated
  using (auth.uid() in ('cda494cf-0aa9-4f47-a816-5e155823ce17'::uuid, '7402a443-3804-4b57-95f3-d90cecbb4f78'::uuid));

create policy "admin can insert posts"
  on posts for insert
  to authenticated
  with check (auth.uid() in ('cda494cf-0aa9-4f47-a816-5e155823ce17'::uuid, '7402a443-3804-4b57-95f3-d90cecbb4f78'::uuid));

create policy "admin can update posts"
  on posts for update
  to authenticated
  using (auth.uid() in ('cda494cf-0aa9-4f47-a816-5e155823ce17'::uuid, '7402a443-3804-4b57-95f3-d90cecbb4f78'::uuid))
  with check (auth.uid() in ('cda494cf-0aa9-4f47-a816-5e155823ce17'::uuid, '7402a443-3804-4b57-95f3-d90cecbb4f78'::uuid));

create policy "admin can delete posts"
  on posts for delete
  to authenticated
  using (auth.uid() in ('cda494cf-0aa9-4f47-a816-5e155823ce17'::uuid, '7402a443-3804-4b57-95f3-d90cecbb4f78'::uuid));

drop policy if exists "authenticated can upload post-images" on storage.objects;
drop policy if exists "authenticated can delete post-images" on storage.objects;
drop policy if exists "admin can upload post-images" on storage.objects;
drop policy if exists "admin can delete post-images" on storage.objects;

create policy "admin can upload post-images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'post-images' and auth.uid() in ('cda494cf-0aa9-4f47-a816-5e155823ce17'::uuid, '7402a443-3804-4b57-95f3-d90cecbb4f78'::uuid));

create policy "admin can delete post-images"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'post-images' and auth.uid() in ('cda494cf-0aa9-4f47-a816-5e155823ce17'::uuid, '7402a443-3804-4b57-95f3-d90cecbb4f78'::uuid));
