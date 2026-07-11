import type { NextConfig } from "next";

// Derived from env rather than hardcoded so the allow-listed hostname always
// matches whichever Supabase project .env.local points at.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseHostname = supabaseUrl ? new URL(supabaseUrl).hostname : undefined;

const nextConfig: NextConfig = {
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
