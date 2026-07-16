"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Routes that render the nav in its dark variant (pink links, yellow logo) —
// used on pages that open with a black section at the top.
const DARK_NAV_ROUTES = ["/", "/blog"];

type NavLink =
  | { label: string; href: string; external?: boolean }
  | { label: string; children: { label: string; href: string }[] };

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "What is this?", href: "/what-is-the-infinity-container" },
  { label: "Membership Info", href: "https://the-infinity-container.mn.co/landing", external: true },
  { label: "Who is this for?", href: "/who-is-this-for" },
  { label: "What is integration?", href: "/what-is-integration" },
  { label: "Community Call", href: "/community-call" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Blog", href: "/blog" },
  {
    label: "About",
    children: [
      { label: "About us", href: "/about-us" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const isDark = DARK_NAV_ROUTES.some((r) => (r === "/" ? pathname === "/" : pathname.startsWith(r)));
  const isSticky = !pathname.startsWith("/what-is-integration");

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  function closeDrawer() {
    setDrawerOpen(false);
  }

  const linkBase =
    "block w-full text-right px-6 py-4 font-[family-name:var(--font-gordon)] text-xl uppercase tracking-wide transition-colors hover:bg-tic-pink";

  return (
    <>
      {/* Top bar */}
      <nav
        className={`${
          isSticky ? "sticky top-0" : ""
        } left-0 right-0 z-50 flex items-center justify-between bg-white border-b border-black/8 px-6 py-4 md:px-8`}
      >
        <button
          onClick={() => setDrawerOpen(true)}
          className="font-[family-name:var(--font-gordon)] text-xs tracking-[0.14em] uppercase text-black hover:text-tic-pink transition-colors"
          aria-label="Open navigation"
          aria-expanded={drawerOpen}
        >
          TIC: INDEX
        </button>

        <div className="absolute left-1/2 -translate-x-1/2">
          <a
            href="/find-my-membership"
            className="font-[family-name:var(--font-gordon)] text-xs tracking-[0.1em] uppercase bg-tic-orange text-black px-5 py-2.5 rounded hover:bg-tic-pink transition-colors"
          >
            Find My Membership
          </a>
        </div>

        <a
          href="/sign-in"
          className="font-[family-name:var(--font-gordon)] text-xs tracking-[0.12em] uppercase text-black hover:text-tic-pink transition-colors"
        >
          Sign In
        </a>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Left sliding drawer */}
      <div
        className={`fixed top-0 left-0 h-full z-50 w-[65vw] max-w-md bg-tic-yellow flex flex-col transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!drawerOpen}
      >
        {/* Close button */}
        <div className="flex justify-end px-5 py-4">
          <button
            onClick={closeDrawer}
            className="text-3xl leading-none font-light hover:opacity-60 transition-opacity"
            aria-label="Close navigation"
          >
            ×
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col flex-1 overflow-y-auto mt-6">
          {NAV_LINKS.map((link) => {
            if ("children" in link) {
              const childActive = link.children.some((c) => isActive(c.href));
              return (
                <li key={link.label}>
                  <button
                    className={`${linkBase} flex items-center justify-end gap-3 ${
                      childActive || aboutOpen ? "bg-tic-pink" : ""
                    }`}
                    onClick={() => setAboutOpen((o) => !o)}
                    aria-expanded={aboutOpen}
                  >
                    {link.label}
                    <span className="text-xl">{aboutOpen ? "^" : "v"}</span>
                  </button>
                  <ul
                    className={`overflow-hidden transition-all duration-200 ${
                      aboutOpen ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`block w-full text-right px-6 py-3 font-[family-name:var(--font-gordon)] text-base uppercase tracking-wide transition-colors hover:bg-tic-pink ${
                            isActive(child.href) ? "opacity-60" : ""
                          }`}
                          onClick={closeDrawer}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            return (
              <li key={link.href}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkBase}
                    onClick={closeDrawer}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={`${linkBase} ${isActive(link.href) ? "text-tic-olive" : ""}`}
                    onClick={closeDrawer}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Member Sign In */}
        <div className="border-t border-black/20">
          <a
            href="https://the-infinity-container.mn.co/sign_in"
            target="_blank"
            rel="noopener noreferrer"
            className={linkBase}
            onClick={closeDrawer}
          >
            Member Sign In
          </a>
        </div>
      </div>
    </>
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
