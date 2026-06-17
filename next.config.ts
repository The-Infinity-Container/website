import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // SVG files in /public are served as static assets; next/image needs dangerouslyAllowSVG
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
