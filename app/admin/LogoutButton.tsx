import { logout } from "@/lib/actions/auth";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button type="submit" className="text-sm underline cursor-pointer hover:opacity-70 transition-opacity">
        Log out
      </button>
    </form>
  );
}
