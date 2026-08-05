"use client";

import { useState } from "react";

const linkClass =
  "font-[family-name:var(--font-gordon)] text-[11px] tracking-[0.12em] uppercase text-tic-dark-grey border border-tic-grey px-3.5 py-2 rounded hover:border-tic-dark-grey hover:text-black transition-colors cursor-pointer";

export default function SharePostLinks({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const url = `${window.location.origin}/blog/${slug}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div>
      <p className="font-[family-name:var(--font-gordon)] text-[10px] tracking-[0.2em] uppercase text-tic-dark-grey mb-3">
        Share
      </p>
      <div className="flex gap-3 flex-wrap">
        <a
          href="https://www.instagram.com/theinfinitycontainer"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Instagram
        </a>
        <a
          href="https://substack.com/@theinfinitycontainer"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Substack
        </a>
        <button type="button" onClick={handleCopy} className={linkClass}>
          {copied ? "Copied!" : "Copy link"}
        </button>
      </div>
    </div>
  );
}
