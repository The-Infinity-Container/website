-- Single-post page v2: adds byline/reading-time fields and a manual
-- related-posts list, editable per-post in the admin editor.
alter table posts add column if not exists author text not null default '';
alter table posts add column if not exists reading_time_minutes integer;
alter table posts add column if not exists related_slugs text[] not null default '{}';

-- Backfill the psychedelic integration guide with the real byline/reading
-- time and the related posts chosen for it.
update posts set
  author = 'Dr. Victoria Sterkin',
  reading_time_minutes = 9,
  related_slugs = array['defining-the-role-of-a-practitioner', 'blog-what-is-integration', 'when-we-are-truly-seen-we-find-ourselves']
where slug = 'what-is-psychedelic-integration-a-behavioral-scientist-s-guide';
