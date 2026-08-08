"use client";

import { useEffect, useRef, useState } from "react";

const MOBILE_QUERY = "(max-width: 767px)";
const AUTOPLAY_FALLBACK_DELAY_MS = 1500;

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showPosterFallback, setShowPosterFallback] = useState(false);

  useEffect(() => {
    if (!window.matchMedia(MOBILE_QUERY).matches) return;
    setIsMobile(true);

    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;
    const fallbackTimer = setTimeout(() => {
      if (!cancelled && video.paused) setShowPosterFallback(true);
    }, AUTOPLAY_FALLBACK_DELAY_MS);

    video.play()?.catch(() => {
      if (!cancelled) setShowPosterFallback(true);
    });

    return () => {
      cancelled = true;
      clearTimeout(fallbackTimer);
    };
  }, []);

  if (showPosterFallback) {
    return (
      <img
        src="/assets/hero-poster-mobile.jpg"
        alt=""
        className="absolute top-0 left-1/2 min-w-full min-h-[130vh] w-auto h-auto -translate-x-1/2 object-cover"
        aria-hidden
      />
    );
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      poster={isMobile ? "/assets/hero-poster-mobile.jpg" : undefined}
      className="absolute top-0 md:top-1/2 left-1/2 min-w-full min-h-[130vh] md:min-h-full w-auto h-auto -translate-x-1/2 md:-translate-y-1/2 object-cover"
    >
      <source src="/assets/videos/hero-mobile-extended.mp4" media={MOBILE_QUERY} type="video/mp4" />
      <source src="/assets/videos/hero-desktop.mp4" type="video/mp4" />
    </video>
  );
}
