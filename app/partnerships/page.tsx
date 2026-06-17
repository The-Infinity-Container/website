import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Partnerships — The Infinity Container",
  description: "Our curated partners — chosen for care, integrity, and a shared commitment to supporting the body, community and conscious evolution.",
};

const PARTNERS = [
  {
    name: "Lacuna Medicinals",
    description:
      "A women-owned apothecary combining ancient practices with the evolving field of modern medicine. They cultivate mushroom medicines in-house and offer handcrafted products.",
    discount: "10% off with code INFINITY",
    url: "https://lacunamedicinals.com/?ref=INFINITY",
    code: "INFINITY",
  },
  {
    name: "The Reset Academy",
    description:
      "Dr. Mindy Pelz's membership program teaching women to improve metabolic health, balance hormones, and build a sustainable fasting lifestyle. Features courses from expert teachers including Dr. Victoria Sterkin.",
    discount: null,
    url: "https://resetacademy.drmindypelz.com",
    code: null,
  },
];

export default function PartnershipsPage() {
  return (
    <main className="pt-14 pb-[5em]">

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 text-center border-b-2 border-black">
        <h1 className="font-[family-name:var(--font-gordon)] text-5xl md:text-7xl uppercase tracking-widest mb-6">
          Partnerships
        </h1>
        <p className="font-[family-name:var(--font-noto-serif)] text-lg md:text-xl italic max-w-2xl mx-auto leading-relaxed">
          Partnership for us, is relational. We&apos;re creating an ecosystem.
        </p>
      </section>

      {/* ── Philosophy ──────────────────────────────────────────── */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <p className="font-[family-name:var(--font-noto-serif)] text-base leading-relaxed">
          We select partners based on care, integrity, and a shared commitment to supporting
          the body, community and conscious evolution. Some partnerships include affiliate commissions
          and community discounts that help maintain affordable membership rates.
        </p>
      </section>

      {/* ── Partner cards ───────────────────────────────────────── */}
      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {PARTNERS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-black p-8 flex flex-col gap-4 hover:bg-black hover:text-tic-yellow transition-colors"
            >
              <div className="flex items-start justify-between">
                <h2 className="font-[family-name:var(--font-gordon)] text-2xl uppercase tracking-wide leading-tight">
                  {p.name}
                </h2>
                <span className="text-2xl ml-2 shrink-0 group-hover:translate-x-1 transition-transform">↗</span>
              </div>
              <p className="font-[family-name:var(--font-noto-serif)] text-sm leading-relaxed flex-1">
                {p.description}
              </p>
              {p.discount && (
                <div className="border border-current px-4 py-2 text-sm font-bold uppercase tracking-widest self-start">
                  {p.discount}
                </div>
              )}
            </a>
          ))}
        </div>
      </section>

      {/* ── Decorative ──────────────────────────────────────────── */}
      <section className="flex justify-center gap-12 py-10 px-6 border-t-2 border-black">
        <Image src="/assets/mush-gio.svg" alt="" width={60} height={80} aria-hidden className="w-14 h-auto opacity-60" />
        <Image src="/assets/mush-gio-mirrored.svg" alt="" width={60} height={80} aria-hidden className="w-14 h-auto opacity-60" />
      </section>

      {/* ── Nav ─────────────────────────────────────────────────── */}
      <div className="flex flex-wrap justify-center gap-6 py-6 px-6 border-t border-black/20 text-sm font-medium uppercase tracking-wide">
        <Link href="/what-is-the-infinity-container" className="hover:opacity-60">What is this?</Link>
        <Link href="/community-call" className="hover:opacity-60">Community Call</Link>
        <Link href="/" className="hover:opacity-60">Home</Link>
      </div>
    </main>
  );
}
