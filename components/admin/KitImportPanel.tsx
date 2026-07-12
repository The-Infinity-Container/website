"use client";

import { useState } from "react";
import { fetchKitBroadcasts, importKitBroadcast } from "@/lib/actions/kit";
import type { KitBroadcastSummary } from "@/lib/kit";

export default function KitImportPanel({
  onImport,
}: {
  onImport: (content: { title: string; body: string }) => void;
}) {
  const [open, setOpen] = useState(false);
  const [broadcasts, setBroadcasts] = useState<KitBroadcastSummary[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [importingId, setImportingId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleOpen() {
    setOpen(true);
    if (broadcasts) return;
    setLoading(true);
    setError(null);
    try {
      setBroadcasts(await fetchKitBroadcasts());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load newsletters.");
    } finally {
      setLoading(false);
    }
  }

  async function handleImport(id: number) {
    setImportingId(id);
    setError(null);
    try {
      onImport(await importKitBroadcast(id));
      setOpen(false);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to import newsletter.");
    } finally {
      setImportingId(null);
    }
  }

  return (
    <div className="border-2 border-black mb-8">
      <button
        type="button"
        onClick={() => (open ? setOpen(false) : handleOpen())}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-4 py-3 text-left cursor-pointer hover:bg-black hover:text-tic-yellow transition-colors"
      >
        <span className="font-[family-name:var(--font-gordon)] uppercase tracking-widest text-lg">
          Import from Kit
        </span>
        <span aria-hidden className="text-xl leading-none">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="p-4 border-t-2 border-black flex flex-col gap-3">
          {loading && <p className="text-sm text-black/60">Loading newsletters…</p>}
          {error && <p className="text-sm text-tic-coral font-bold">{error}</p>}
          {broadcasts?.length === 0 && !loading && (
            <p className="text-sm text-black/60">No sent newsletters found.</p>
          )}
          {broadcasts?.map((b) => (
            <div key={b.id} className="flex items-center justify-between gap-4 border-2 border-black px-4 py-2">
              <div className="min-w-0">
                <p className="font-bold truncate">{b.subject}</p>
                {b.publishedAt && (
                  <p className="text-xs text-black/50">{new Date(b.publishedAt).toLocaleDateString()}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => handleImport(b.id)}
                disabled={importingId !== null}
                className="shrink-0 border-2 border-black px-3 py-1.5 text-xs font-bold uppercase tracking-wide cursor-pointer hover:bg-black hover:text-tic-yellow transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {importingId === b.id ? "Importing…" : "Use This"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
