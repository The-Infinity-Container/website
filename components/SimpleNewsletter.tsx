"use client";

import { useState } from "react";

export default function SimpleNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-center font-[family-name:var(--font-noto-serif)] italic text-lg">
        Thanks for subscribing!
      </p>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-3 justify-center">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-5 py-3 text-black placeholder-black/60 outline-none border border-black/20 min-w-[300px]"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-black text-white px-8 py-3 font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-[14px] hover:bg-[#333] transition-colors disabled:opacity-60"
        >
          {status === "loading" ? "Joining…" : "Join"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-center text-sm text-red-700 mt-3">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
