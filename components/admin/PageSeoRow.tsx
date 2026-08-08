"use client";

import { useActionState, useState } from "react";
import { updatePageSeo } from "@/lib/actions/pageSeo";
import SerpPreview from "./SerpPreview";
import CharCounter from "./CharCounter";
import type { PageSeo } from "@/lib/pageSeo";

const TITLE_MAX = 70;
const DESCRIPTION_MAX = 160;

const inputClass = "w-full border-2 border-black px-4 py-2 bg-white";
const labelClass = "block text-sm font-bold uppercase tracking-wide mb-1";

export default function PageSeoRow({ page }: { page: PageSeo }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(page.title);
  const [description, setDescription] = useState(page.description);

  const [state, formAction, pending] = useActionState(
    async () => updatePageSeo(page.path, title, description),
    null
  );

  return (
    <div className="border-2 border-black">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left cursor-pointer hover:bg-black hover:text-tic-yellow transition-colors"
      >
        <span className="min-w-0">
          <span className="block font-[family-name:var(--font-gordon)] uppercase tracking-wide truncate">
            {page.path === "/" ? "Home" : page.path}
          </span>
          <span className="block text-sm opacity-60 truncate">{title}</span>
        </span>
        <span aria-hidden className="text-xl leading-none shrink-0">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <form action={formAction} className="p-4 flex flex-col gap-4 border-t-2 border-black">
          <SerpPreview title={title} path={page.path} description={description} />

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor={`title-${page.path}`} className={labelClass}>
                Title
              </label>
              <CharCounter value={title} max={TITLE_MAX} />
            </div>
            <input
              id={`title-${page.path}`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={TITLE_MAX}
              required
              className={inputClass}
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor={`description-${page.path}`} className={labelClass}>
                Meta Description
              </label>
              <CharCounter value={description} max={DESCRIPTION_MAX} />
            </div>
            <textarea
              id={`description-${page.path}`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={DESCRIPTION_MAX}
              rows={3}
              className={inputClass}
            />
          </div>

          {state && "error" in state && <p className="text-sm text-tic-coral font-bold">{state.error}</p>}
          {state && "success" in state && <p className="text-sm text-tic-olive font-bold">Saved.</p>}

          <button
            type="submit"
            disabled={pending}
            className="self-start bg-black text-tic-yellow font-[family-name:var(--font-gordon)] uppercase tracking-widest px-6 py-2.5 cursor-pointer hover:bg-tic-yellow hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {pending ? "Saving…" : "Save"}
          </button>
        </form>
      )}
    </div>
  );
}
