"use client";

import { useState } from "react";

export default function InlineNewsletter({
  inputBg = "bg-tic-pink",
}: {
  inputBg?: string;
}) {
  const [name, setName] = useState("");
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
        className="bg-[#555] text-white px-6 py-3 font-medium hover:bg-[#333] transition-colors"
      >
        Subscribe to Newsletter
      </button>
    </form>
  );
}
