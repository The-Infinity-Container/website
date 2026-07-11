-- Blog CMS schema: posts table, RLS, storage bucket.
-- Run this in the Supabase SQL Editor (Project → SQL Editor → New query) after
-- creating the project. This does NOT require the Supabase CLI.

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  body text not null,
  category text not null check (category in ('professional-support', 'community', 'therapeutic-education', 'inspiration')),
  cover_image_url text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at timestamptz
);

create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists posts_set_updated_at on posts;
create trigger posts_set_updated_at
  before update on posts
  for each row
  execute function set_updated_at();

alter table posts enable row level security;

-- Public site can only ever see published posts.
create policy "anon can read published posts"
  on posts for select
  to anon
  using (status = 'published');

-- Interim write policy: any authenticated user can manage posts. Safe for now
-- because self-signup is disabled and only the one admin account exists.
-- Once that admin user is created, run 0002_harden_admin_policy.sql to scope
-- these policies to that specific user's UID instead (defense in depth, so
-- write access doesn't silently depend on self-signup staying disabled).
create policy "authenticated can insert posts"
  on posts for insert
  to authenticated
  with check (true);

create policy "authenticated can update posts"
  on posts for update
  to authenticated
  using (true)
  with check (true);

create policy "authenticated can delete posts"
  on posts for delete
  to authenticated
  using (true);

-- Storage bucket for cover images + inline body images.
insert into storage.buckets (id, name, public)
values ('post-images', 'post-images', true)
on conflict (id) do nothing;

create policy "anon can read post-images"
  on storage.objects for select
  to anon
  using (bucket_id = 'post-images');

create policy "authenticated can upload post-images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'post-images');

create policy "authenticated can delete post-images"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'post-images');
