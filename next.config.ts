import type { NextConfig } from "next";

// Derived from env rather than hardcoded so the allow-listed hostname always
// matches whichever Supabase project .env.local points at.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseHostname = supabaseUrl ? new URL(supabaseUrl).hostname : undefined;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Lets the dev server be reached from a phone on the same Wi-Fi for
  // on-device testing (npm run dev prints the LAN URL to use).
  allowedDevOrigins: ["192.168.4.26"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  images: {
    // SVG files in /public are served as static assets; next/image needs dangerouslyAllowSVG
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: supabaseHostname
      ? [
          {
            protocol: "https",
            hostname: supabaseHostname,
            pathname: "/storage/v1/object/public/post-images/**",
          },
        ]
      : [],
  },
};

export default nextConfig;
