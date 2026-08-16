-- Scheduled posts: adds a "scheduled" status + scheduled_at timestamp.
--
-- Publishing is lazy, not cron-driven: the public read policy below treats a
-- scheduled post as visible once its scheduled_at has passed, so it goes
-- live on the next page load with no background job required. The admin
-- app additionally flips due rows to a real "published" status the next
-- time an admin loads the posts list (see publishDuePosts in lib/posts.ts),
-- so the DB stays tidy without ever needing write access from anon.

alter table posts add column if not exists scheduled_at timestamptz;

alter table posts drop constraint if exists posts_status_check;
alter table posts add constraint posts_status_check
  check (status in ('draft', 'published', 'scheduled'));

drop policy if exists "anon can read published posts" on posts;
create policy "anon can read published posts"
  on posts for select
  to anon
  using (status = 'published' or (status = 'scheduled' and scheduled_at <= now()));
