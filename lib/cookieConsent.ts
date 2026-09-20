import { useSyncExternalStore } from "react";

export type ConsentChoice = "accepted" | "declined";

const STORAGE_KEY = "tic-cookie-consent";
const CHANGE_EVENT = "tic-cookie-consent-change";

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): ConsentChoice | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "declined" ? value : null;
  } catch {
    return null;
  }
}

// "pending" on the server / first hydration pass so nothing consent-dependent
// renders until we've read the stored choice.
export function useCookieConsent(): ConsentChoice | null | "pending" {
  return useSyncExternalStore(subscribe, getSnapshot, () => "pending" as const);
}

export function setCookieConsent(choice: ConsentChoice | null) {
  try {
    if (choice) localStorage.setItem(STORAGE_KEY, choice);
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Storage blocked: the choice just won't persist past this page view.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}
