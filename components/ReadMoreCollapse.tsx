"use client";

import { useState } from "react";

export default function ReadMoreCollapse({
  children,
  buttonClassName = "",
}: {
  children: React.ReactNode;
  buttonClassName?: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className={expanded ? "block" : "hidden md:block"}>{children}</div>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className={`md:hidden font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-[15px] underline mb-6 ${buttonClassName}`}
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </>
  );
}
