"use client";

import { setCookieConsent, useCookieConsent } from "@/lib/cookieConsent";

const PLAYLIST_URL = "https://open.spotify.com/playlist/4dXmXxaXA2PDX0janyZoM3";

export default function SpotifyEmbed() {
  const consent = useCookieConsent();

  if (consent !== "accepted") {
    return (
      <div
        className="w-full rounded-[12px] bg-black/85 text-white flex flex-col items-center justify-center text-center gap-4 px-6"
        style={{ height: 280 }}
      >
        <p className="font-[family-name:var(--font-noto-serif)] text-[15px] leading-[24px] max-w-[380px]">
          The Spotify player uses cookies, so it only loads if you allow them.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {consent !== "pending" && (
            <button
              type="button"
              onClick={() => setCookieConsent("accepted")}
              className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-[15px] px-5 py-[9px] rounded-[4px] bg-tic-yellow text-black hover:opacity-80 transition-opacity"
            >
              Allow &amp; load player
            </button>
          )}
          <a
            href={PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-[15px] px-5 py-[9px] rounded-[4px] border-[1.5px] border-white hover:opacity-80 transition-opacity"
          >
            Open in Spotify
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <iframe
        src="https://open.spotify.com/embed/playlist/4dXmXxaXA2PDX0janyZoM3?utm_source=generator"
        style={{ borderRadius: 12, width: "100%", height: 280 }}
        frameBorder={0}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        title="The Infinity Container Playlist"
      />
    </div>
  );
}
