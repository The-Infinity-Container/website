-- Stores each /find-my-membership quiz submission: the visitor's name, email,
-- raw answers, and the computed result.
--
-- Written only by the server (app/api/quiz-submit) using the service-role key,
-- which bypasses RLS. RLS is enabled with NO policies, and table privileges are
-- revoked from anon/authenticated, so nothing can read or write this table from
-- the browser. View rows in the Supabase dashboard.

create table if not exists quiz_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  -- Option indices keyed by question index (see QuizScores in lib/quiz/types.ts).
  answers jsonb not null,
  result text not null check (result in ('free', 'practice', 'practitioner')),
  created_at timestamptz not null default now()
);

create index if not exists quiz_submissions_email_idx on quiz_submissions (email);

alter table quiz_submissions enable row level security;

revoke all on quiz_submissions from anon, authenticated;
