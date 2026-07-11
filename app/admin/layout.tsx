import { createClient } from "@/lib/supabase/server";
import LogoutButton from "./LogoutButton";

// proxy.ts is the security boundary for page navigation (redirects
// unauthenticated visitors to /admin/login). This layout just decides
// whether to show the "Admin · Log out" bar — it renders on /admin/login
// too (Next layouts wrap every nested route), so it checks for a session
// itself rather than assuming one exists.
export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="pt-14 pb-[5em] min-h-screen bg-white">
      {user && (
        <div className="flex items-center justify-between px-6 py-3 border-b-2 border-black">
          <span className="font-[family-name:var(--font-gordon)] text-sm uppercase tracking-widest">
            Admin
          </span>
          <LogoutButton />
        </div>
      )}
      {children}
    </main>
  );
}
