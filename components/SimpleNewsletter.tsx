"use client";

import { useState } from "react";

export default function SimpleNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up ConvertKit form ID
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-center font-[family-name:var(--font-noto-serif)] italic text-lg">
        Thanks for subscribing!
      </p>
    );
  }

  return (
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
        className="bg-black text-white px-8 py-3 font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-[14px] hover:bg-[#333] transition-colors"
      >
        Join
      </button>
    </form>
  );
}
