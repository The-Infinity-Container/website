"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "What is this?", href: "/what-is-the-infinity-container" },
  { label: "Membership Info", href: "https://the-infinity-container.mn.co/landing", external: true },
  { label: "Who is this for?", href: "/who-is-this-for" },
  { label: "What is integration?", href: "/what-is-integration" },
  { label: "Community Call", href: "/community-call" },
  { label: "Blog", href: "/blog" },
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3">
      {/* Logo */}
      <Link
        href="/"
        className="font-[family-name:var(--font-gordon)] text-xl tracking-widest uppercase hover:opacity-70 transition-opacity"
      >
        TIC INDEX
      </Link>

      {/* Desktop nav — centre links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
        <Link href="/" className="hover:opacity-60 transition-opacity">Home</Link>
        <Link
          href="https://the-infinity-container.mn.co/landing"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-60 transition-opacity"
        >
          Membership
        </Link>
        <Link href="/community-call" className="hover:opacity-60 transition-opacity">
          Community Calls
        </Link>
      </div>

      {/* Sign In + hamburger */}
      <div className="flex items-center gap-4">
        <a
          href="https://the-infinity-container.mn.co/sign_in"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block text-sm font-medium tracking-wide uppercase hover:opacity-60 transition-opacity"
        >
          Sign In
        </a>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-full bg-black transition-transform origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block h-0.5 w-full bg-black transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-full bg-black transition-transform origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-tic-yellow border-t border-black/10 py-4 md:hidden">
          <ul className="flex flex-col gap-2 px-5">
            {NAV_LINKS.map((link) =>
              link.external ? (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-sm font-medium uppercase tracking-wide hover:opacity-60"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 text-sm font-medium uppercase tracking-wide hover:opacity-60"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
            <li>
              <a
                href="https://the-infinity-container.mn.co/sign_in"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-sm font-medium uppercase tracking-wide hover:opacity-60"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
