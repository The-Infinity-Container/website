"use client";

import { useState } from "react";

interface NewsletterFormProps {
  heading?: string;
  description?: string;
  dark?: boolean;
}

export default function NewsletterForm({
  heading,
  description = "To receive email updates on community calls and other Infinity Container news, subscribe to our newsletter.",
  dark = false,
}: NewsletterFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const textColor = dark ? "text-tic-yellow" : "text-black";
  const borderColor = dark ? "border-tic-yellow" : "border-black";
  const inputBg = dark ? "bg-transparent placeholder-tic-yellow/60 text-tic-yellow" : "bg-transparent placeholder-black/50 text-black";

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
      <p className={`font-[family-name:var(--font-noto-serif)] italic text-lg ${textColor}`}>
        You&apos;re in. We&apos;ll meet you where you are. ✦
      </p>
    );
  }

  return (
    <div className="w-full">
      {heading && (
        <h3 className={`font-[family-name:var(--font-gordon)] text-2xl tracking-widest uppercase mb-3 ${textColor}`}>
          {heading}
        </h3>
      )}
      {description && (
        <p className={`font-[family-name:var(--font-noto-serif)] text-sm mb-4 ${textColor}`}>
          {description}
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-xl">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={`flex-1 border-b-2 ${borderColor} ${inputBg} bg-transparent py-2 px-1 text-sm outline-none focus:opacity-80 transition-opacity`}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`flex-1 border-b-2 ${borderColor} ${inputBg} bg-transparent py-2 px-1 text-sm outline-none focus:opacity-80 transition-opacity`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`border-2 ${borderColor} ${textColor} px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-tic-yellow transition-colors shrink-0 disabled:opacity-60`}
        >
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className={`text-[11px] mt-2 ${textColor}`}>
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
