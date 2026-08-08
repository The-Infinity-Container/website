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

// The custom domain isn't live yet — the site is only reachable at whatever
// Vercel deployment URL is serving it. Hardcoding theinfinitycontainer.com
// here made og:image/twitter:image resolve to that (WordPress, 404s the
// image) domain instead of the real one, so shared links fell back to
// whatever image a crawler had cached from an earlier, unrelated share of
// the same URL. VERCEL_PROJECT_PRODUCTION_URL/VERCEL_URL are set
// automatically by Vercel and will track the custom domain once it's added.
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
