import type { Metadata, Viewport } from "next";
import { Noto_Serif } from "next/font/google";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

// The custom domain (theinfinitycontainer.com) is live. We still resolve it
// via env vars rather than hardcoding it here — hardcoding previously made
// og:image/twitter:image resolve to that domain even on preview deployments
// (where it 404s), so shared links fell back to whatever image a crawler had
// cached from an earlier, unrelated share of the same URL.
// NEXT_PUBLIC_SITE_URL takes precedence when set; otherwise
// VERCEL_PROJECT_PRODUCTION_URL/VERCEL_URL (set automatically by Vercel)
// track whatever domain is actually serving the deployment.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | The Infinity Container",
    default: "The Infinity Container",
  },
  description: "Integration and support for practitioners — The Infinity Container",
  openGraph: {
    siteName: "The Infinity Container",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

// viewportFit: "cover" lets section backgrounds paint edge to edge in landscape.
// Without it iOS letterboxes the page beside the notch and fills those bars with
// the body background, which reads as green stripes down both sides.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSerif.variable}>
      <body className="min-h-screen bg-tic-yellow text-black antialiased">
        <SiteNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
