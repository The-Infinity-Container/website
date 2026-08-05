-- Blog v2 category rebuild: retires professional-support / community /
-- therapeutic-education / inspiration in favor of
-- integration / psychedelics / practitioners / reflection.
-- Run this in the Supabase SQL Editor after reviewing the mapping below.

-- Drop the old constraint first so the reassignment below isn't rejected
-- mid-transition (rows briefly hold new category values before the new
-- constraint is added back at the end).
alter table posts drop constraint posts_category_check;

update posts set category = 'psychedelics' where slug = 'what-is-psychedelic-integration-a-behavioral-scientist-s-guide';
update posts set category = 'integration' where slug = 'blog-what-is-integration';
update posts set category = 'reflection' where slug = 'Revision-of-patriotism';
update posts set category = 'reflection' where slug = 'when-we-are-truly-seen-we-find-ourselves';
update posts set category = 'practitioners' where slug = 'were-here-for-the-space-holders-the-artists-the-ones-pitching-in';
update posts set category = 'practitioners' where slug = 'defining-the-role-of-a-practitioner';

-- Fail loudly rather than silently mis-tagging: if any post wasn't covered by
-- the mapping above and still holds an old category value, stop and list it
-- so it can be assigned by hand before the constraint locks the old values out.
do $$
declare
  orphans text;
begin
  select string_agg(slug, ', ') into orphans
  from posts
  where category in ('professional-support', 'community', 'therapeutic-education', 'inspiration');

  if orphans is not null then
    raise exception 'Posts still on old categories, assign new ones before running this migration: %', orphans;
  end if;
end $$;

alter table posts add constraint posts_category_check
  check (category in ('integration', 'psychedelics', 'practitioners', 'reflection'));
