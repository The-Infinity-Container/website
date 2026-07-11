-- Bug fix: 0001_init.sql granted authenticated users insert/update/delete on
-- posts but never gave them a SELECT policy. With RLS enabled and no
-- matching policy, reads silently return zero rows instead of erroring —
-- which made the admin dashboard show "No posts yet" even after a
-- successful create. This adds the missing read access for admins to see
-- all posts (draft + published), not just the anon "published only" policy.

create policy "authenticated can read all posts"
  on posts for select
  to authenticated
  using (true);
