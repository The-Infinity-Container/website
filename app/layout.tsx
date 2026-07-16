import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "The Infinity Container",
  description: "Integration and support for practitioners — The Infinity Container",
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
