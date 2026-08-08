-- SEO (title + meta description) for static marketing pages, editable from
-- /admin/seo instead of requiring a code change. One row per public,
-- indexable route. RLS mirrors the two-admin model established in
-- 0009_scope_policies_to_both_admins.sql — same two UIDs, same shape.

create table if not exists page_seo (
  path text primary key,
  title text not null,
  description text not null default '',
  updated_at timestamptz not null default now()
);

drop trigger if exists page_seo_set_updated_at on page_seo;
create trigger page_seo_set_updated_at
  before update on page_seo
  for each row
  execute function set_updated_at();

alter table page_seo enable row level security;

-- Every page request (including anonymous visitors) resolves metadata from
-- this table server-side, same trust model as "anon can read published posts".
create policy "anon can read page seo"
  on page_seo for select
  to anon
  using (true);

create policy "admin can read page seo"
  on page_seo for select
  to authenticated
  using (auth.uid() in ('cda494cf-0aa9-4f47-a816-5e155823ce17'::uuid, '7402a443-3804-4b57-95f3-d90cecbb4f78'::uuid));

create policy "admin can insert page seo"
  on page_seo for insert
  to authenticated
  with check (auth.uid() in ('cda494cf-0aa9-4f47-a816-5e155823ce17'::uuid, '7402a443-3804-4b57-95f3-d90cecbb4f78'::uuid));

create policy "admin can update page seo"
  on page_seo for update
  to authenticated
  using (auth.uid() in ('cda494cf-0aa9-4f47-a816-5e155823ce17'::uuid, '7402a443-3804-4b57-95f3-d90cecbb4f78'::uuid))
  with check (auth.uid() in ('cda494cf-0aa9-4f47-a816-5e155823ce17'::uuid, '7402a443-3804-4b57-95f3-d90cecbb4f78'::uuid));

-- Seed with the exact copy currently hardcoded in each page.tsx, so nothing
-- changes on deploy — only future edits through /admin/seo diverge from this.
insert into page_seo (path, title, description) values
  ('/', 'Psychedelic Integration Community | The Infinity Container', 'A psychedelic integration community for practitioners and seekers navigating life transitions and expanded states — built on the Solar-Lunar Framework.'),
  ('/about-us', 'About | The Infinity Container', 'Meet Dr. Victoria Sterkin — behavior analyst, therapist, and integration specialist with 25 years of clinical experience — and the story behind The Infinity Container.'),
  ('/partnerships', 'Partnerships | The Infinity Container', 'TIC partnerships — companies and communities Victoria trusts personally.'),
  ('/community-call', 'Community Call | The Infinity Container', 'Join The Infinity Container''s free monthly Community Call — a 90-minute integration session with teaching, embodied practice, and community sharing. First Saturday of the month, 10am PST.'),
  ('/find-my-membership', 'Find My Membership | The Infinity Container', 'Not sure where to start? Answer 7 questions and find the right TIC membership for where you actually are.'),
  ('/testimonials', 'Testimonials | The Infinity Container', 'What members of The Infinity Container say about their experience.'),
  ('/what-is-integration', 'What is Integration? | The Infinity Container', 'Integration is how an experience becomes part of who you are. Learn what psychedelic integration is, why it doesn''t happen on its own, and how the Solar-Lunar Framework maps the full arc from preparation to becoming.'),
  ('/what-is-the-infinity-container', 'What is The Infinity Container?', 'A space for integration — for space holders, artists, and practitioners. The Infinity Container is where integration is the way.'),
  ('/who-is-this-for', 'Who is The Infinity Container For?', 'For therapists, teachers, space holders, artists, coaches, doulas, and all practitioners who need space to be held.'),
  ('/blog', 'Blog | The Infinity Container', 'Articles on integration, practitioner life, and conscious exploration from The Infinity Container.')
on conflict (path) do nothing;
