"use client";

import { useId, useState } from "react";
import { HONEYPOT_FIELD } from "@/lib/honeypot";

export default function InlineNewsletter({
  inputBg = "bg-tic-pink",
  onSuccess,
}: {
  inputBg?: string;
  onSuccess?: () => void;
}) {
  const nameId = useId();
  const emailId = useId();
  const honeypotId = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, [HONEYPOT_FIELD]: honeypot }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) onSuccess?.();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-center font-[family-name:var(--font-noto-serif)] italic text-body">
        Thanks for subscribing!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap justify-center gap-3">
      <label htmlFor={nameId} className="sr-only">Name</label>
      <input
        id={nameId}
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className={`${inputBg} px-5 py-3 text-black placeholder-black/60 outline-none min-w-[180px]`}
      />
      <label htmlFor={emailId} className="sr-only">Email</label>
      <input
        id={emailId}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={`${inputBg} px-5 py-3 text-black placeholder-black/60 outline-none min-w-[200px]`}
      />
      <div style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }} aria-hidden="true">
        <label htmlFor={honeypotId}>Website</label>
        <input
          id={honeypotId}
          name={HONEYPOT_FIELD}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>
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
