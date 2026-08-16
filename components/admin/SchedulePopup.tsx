"use client";

import { useEffect, useState } from "react";

function toLocalInputValue(iso: string | null): string {
  const date = iso ? new Date(iso) : new Date(Date.now() + 60 * 60 * 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

// Confirming schedules the post immediately (calls onConfirm, which awaits a
// real save) rather than just staging a value for a later Save click — a
// button called "Schedule" should schedule the post, not half-schedule it.
// Parent mounts this only while the popup should be visible, so each open
// is a fresh mount — that's what resets `value`/`localError` per-open
// without needing an effect to resync state from props.
export default function SchedulePopup({
  initialValue,
  pending,
  error,
  onCancel,
  onConfirm,
}: {
  initialValue: string | null;
  pending: boolean;
  error: string | null;
  onCancel: () => void;
  onConfirm: (iso: string) => void;
}) {
  const [value, setValue] = useState(() => toLocalInputValue(initialValue));
  const [localError, setLocalError] = useState<string | null>(null);
  const displayError = localError ?? error;

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && !pending) onCancel();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onCancel, pending]);

  function handleConfirm() {
    if (!value) {
      setLocalError("Pick a date and time.");
      return;
    }
    const date = new Date(value);
    if (date <= new Date()) {
      setLocalError("Pick a time in the future.");
      return;
    }
    setLocalError(null);
    onConfirm(date.toISOString());
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-6"
      onClick={() => !pending && onCancel()}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Schedule post"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[420px] bg-white border-2 border-black p-6"
      >
        <h2 className="font-[family-name:var(--font-gordon)] uppercase tracking-widest text-lg mb-4">
          Schedule Post
        </h2>
        <label htmlFor="schedule-datetime" className="block text-sm font-bold uppercase tracking-wide mb-1">
          Publish date &amp; time
        </label>
        <input
          id="schedule-datetime"
          type="datetime-local"
          value={value}
          disabled={pending}
          onChange={(e) => {
            setValue(e.target.value);
            setLocalError(null);
          }}
          className="w-full border-2 border-black px-4 py-2 bg-white mb-2 disabled:opacity-50"
        />
        {displayError && <p className="text-sm text-tic-coral font-bold mb-2">{displayError}</p>}
        <p className="text-xs text-black/50 mb-6">
          Uses your browser&apos;s local timezone. The post saves and goes live automatically once this time
          passes.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleConfirm}
            disabled={pending}
            className="flex-1 bg-black text-tic-yellow font-[family-name:var(--font-gordon)] uppercase tracking-widest py-2.5 cursor-pointer hover:bg-tic-yellow hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {pending ? "Scheduling…" : "Confirm"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            disabled={pending}
            className="flex-1 border-2 border-black font-[family-name:var(--font-gordon)] uppercase tracking-widest py-2.5 cursor-pointer hover:bg-black hover:text-tic-yellow transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
