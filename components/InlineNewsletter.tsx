"use client";

import { useState } from "react";

export default function InlineNewsletter({
  inputBg = "bg-tic-pink",
}: {
  inputBg?: string;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
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
    <form onSubmit={handleSubmit} className="flex flex-wrap justify-center gap-3">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className={`${inputBg} px-5 py-3 text-black placeholder-black/60 outline-none min-w-[180px]`}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={`${inputBg} px-5 py-3 text-black placeholder-black/60 outline-none min-w-[200px]`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-[#555] text-white px-6 py-3 font-medium hover:bg-[#333] transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Subscribing…" : "Subscribe to Newsletter"}
      </button>
      {status === "error" && (
        <p className="w-full text-center text-sm text-red-700">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
