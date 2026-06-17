import type { Metadata } from "next";
import Link from "next/link";
import Marquee from "@/components/Marquee";

export const metadata: Metadata = {
  title: "Testimonials — The Infinity Container",
  description: "What members of The Infinity Container say about their experience.",
};

const TESTIMONIALS = [
  {
    initials: "A.B.",
    quote: "In memory of our old selves / Herein lies the death of growing in isolation / RIP to giving without receiving",
  },
  {
    initials: "J.S.",
    quote: "So much more than just what I write here, I learned and experienced some parts of myself. I learned so much through this beautiful group's co-intelligence. One aspect of my learning — and there were many — was witnessing the capacity for transformation when we are held and held accountable.",
  },
  {
    initials: "L.F.",
    quote: "It was an experience for a lifetime and I am so grateful to have been part of its evidence based magic!",
  },
  {
    initials: "A.W.",
    quote: "Coming together to hear and share the uncomfortable parts of each of our journeys shows us we are not alone. In our daily life we rarely have time to connect with growth minded individuals in a space that is intentional and supportive.",
  },
  {
    initials: "W.Z.",
    quote: "As a practitioner it can be easy to overlook integration for myself. Being part of the Infinity Container has reminded me that my integration matters just as much as my clients' — maybe more.",
  },
  {
    initials: "C.H.",
    quote: "Dr Victoria Sterkin, founder of The Infinity Container, has created many containers of healing for me. I have become more balanced and better at my job. Life and work have become more playful.",
  },
  {
    initials: "S.G.",
    quote: "I have experienced several benefits of being part of this community. The first one that comes to mind is embodied healing. A safe container for neuro-plasticity to do its thing — expanding and contracting with the breath of life.",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="pt-14 pb-[5em]">

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 text-center">
        <h1 className="font-[family-name:var(--font-gordon)] text-5xl md:text-7xl uppercase tracking-widest">
          Testimonials
        </h1>
      </section>

      <Marquee
        text="INTEGRATION IS THE WAY"
        duration={22}
        className="py-4 border-y-2 border-black"
        textClassName="font-[family-name:var(--font-gordon)] text-xl tracking-[0.2em] uppercase"
      />

      {/* ── Testimonials grid ───────────────────────────────────── */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {TESTIMONIALS.map((t) => (
            <figure key={t.initials} className="border-l-4 border-black pl-6">
              <blockquote className="font-[family-name:var(--font-noto-serif)] text-base md:text-lg italic leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="font-[family-name:var(--font-gordon)] text-sm uppercase tracking-widest">
                — {t.initials}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-black text-tic-yellow py-20 px-6 text-center">
        <p className="font-[family-name:var(--font-gordon)] text-3xl uppercase tracking-widest max-w-2xl mx-auto mb-8">
          Your story could be here.
        </p>
        <a
          href="https://the-infinity-container.mn.co/landing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-tic-yellow text-tic-yellow px-10 py-4 font-[family-name:var(--font-gordon)] text-xl uppercase tracking-widest hover:bg-tic-yellow hover:text-black transition-colors"
        >
          Join the Container
        </a>
      </section>

      <div className="flex flex-wrap justify-center gap-6 py-6 px-6 border-t border-black/20 text-sm font-medium uppercase tracking-wide">
        <Link href="/about-us" className="hover:opacity-60">About Us</Link>
        <Link href="/community-call" className="hover:opacity-60">Community Call</Link>
        <Link href="/" className="hover:opacity-60">Home</Link>
      </div>
    </main>
  );
}
