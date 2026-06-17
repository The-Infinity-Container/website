"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "What is this?", href: "/what-is-the-infinity-container" },
  { label: "Membership Info", href: "https://the-infinity-container.mn.co/landing", external: true },
  { label: "Who is this for?", href: "/who-is-this-for" },
  { label: "What is integration?", href: "/what-is-integration" },
  { label: "Community Call", href: "/community-call" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Blog", href: "/blog" },
  { label: "About us", href: "/about-us" },
  { label: "Testimonials", href: "/testimonials" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3">
      {/* Logo */}
      <Link
        href="/"
        className="font-[family-name:var(--font-gordon)] text-xl tracking-widest uppercase hover:opacity-70 transition-opacity"
      >
        TIC INDEX
      </Link>

      {/* Desktop — condensed nav */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
        <NavLink href="/" active={isActive("/")}>Home</NavLink>
        <NavLink
          href="https://the-infinity-container.mn.co/landing"
          external
          active={false}
        >
          Membership
        </NavLink>
        <NavLink href="/community-call" active={isActive("/community-call")}>
          Community Calls
        </NavLink>
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

        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block h-0.5 w-full bg-black transition-transform origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-0.5 w-full bg-black transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-full bg-black transition-transform origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-tic-yellow border-t-2 border-black py-4 md:hidden shadow-lg">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-5 py-3 text-sm font-medium uppercase tracking-wide hover:bg-black/5"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label} ↗
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-5 py-3 text-sm font-medium uppercase tracking-wide hover:bg-black/5 ${isActive(link.href) ? "font-bold" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="border-t border-black/10 mt-2 pt-2">
              <a
                href="https://the-infinity-container.mn.co/sign_in"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-5 py-3 text-sm font-medium uppercase tracking-wide hover:bg-black/5"
                onClick={() => setMenuOpen(false)}
              >
                Sign In ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  children,
  active,
  external,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
  external?: boolean;
}) {
  const cls = `hover:opacity-60 transition-opacity ${active ? "underline underline-offset-4 decoration-2" : ""}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
