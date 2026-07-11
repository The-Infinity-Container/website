"use client";

import { useActionState } from "react";
import { login, type LoginState } from "@/lib/actions/auth";

export default function LoginForm() {
  const [state, formAction, pending] = useActionState<LoginState, FormData>(login, null);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div>
        <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wide mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="username"
          required
          className="w-full border-2 border-black px-4 py-2 bg-white"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-bold uppercase tracking-wide mb-1">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="w-full border-2 border-black px-4 py-2 bg-white"
        />
      </div>
      {state?.error && <p className="text-sm text-tic-coral font-bold">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="mt-2 bg-black text-tic-yellow font-[family-name:var(--font-gordon)] uppercase tracking-widest py-3 hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {pending ? "Signing in…" : "Sign In"}
      </button>
    </form>
  );
}
