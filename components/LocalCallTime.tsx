"use client";

import { useSyncExternalStore } from "react";

// Call is 10:00am–11:30am Pacific. Always shown in the viewer's local zone (Pacific viewers just see PST/PDT).
const FALLBACK_LABEL = "10:00am – 11:30am PT";

function computeLabel(): string {
  try {
    const startUTC = new Date(Date.UTC(2000, 0, 1, 18, 0, 0));
    const endUTC = new Date(Date.UTC(2000, 0, 1, 19, 30, 0));

    const userTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: userTZ,
    });
    const tzFmt = new Intl.DateTimeFormat("en-US", {
      timeZoneName: "short",
      hour: "numeric",
      timeZone: userTZ,
    });

    const startLocal = fmt.format(startUTC);
    const endLocal = fmt.format(endUTC);
    const tzName = tzFmt.formatToParts(startUTC).find((p) => p.type === "timeZoneName")?.value;

    if (tzName) {
      return `${startLocal} – ${endLocal} ${tzName}`;
    }
  } catch {
    // Intl not available — fall back to the static Pacific time.
  }
  return FALLBACK_LABEL;
}

// Never changes after mount, so subscribe is a no-op.
function subscribe() {
  return () => {};
}

let cachedLabel: string | null = null;
function getSnapshot() {
  if (cachedLabel === null) cachedLabel = computeLabel();
  return cachedLabel;
}
function getServerSnapshot() {
  return FALLBACK_LABEL;
}

export default function LocalCallTime() {
  const label = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return <>{label}</>;
}
