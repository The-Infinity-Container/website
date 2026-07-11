import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin Login — The Infinity Container",
};

export default function AdminLoginPage() {
  return (
    <div className="flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-sm">
        <h1 className="font-[family-name:var(--font-gordon)] text-3xl uppercase tracking-widest text-center mb-8">
          Admin Login
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
