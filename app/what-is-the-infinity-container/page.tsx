import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "What is The Infinity Container?",
  description: "A space for integration — for space holders, artists, and practitioners. The Infinity Container is where integration is the way.",
};

const PILLARS = [
  { label: "Community // Network", icon: "✦" },
  { label: "Inspiration", icon: "✦" },
  { label: "Therapeutic Education", icon: "✦" },
  { label: "Mentorship", icon: "✦" },
];

const VALUES = [
  "Process & Practice",
  "Creative Expression",
  "Inter & Intra Connection",
  "Experimentation",
  "Possibility",
];

const PROBLEMS = [
  "Burn out",
  "Over and under performing",
  "Isolation",
  "Overwhelm",
  "Confusion",
  "Stuckness",
  "Lack of mentorship",
  "Competition",
  "Shut down",
  "Codependence",
  "Limiting beliefs",
];

const FAQ = [
  {
    q: "What are office hours?",
    a: "Weekly group sessions with Dr. Victoria Sterkin for personalized guidance, Q&A, and deeper exploration of whatever is present for you.",
  },
  {
    q: "What does free get me?",
    a: "Monthly community calls open to all, plus social media resources and blog content. No cost, all welcome.",
  },
  {
    q: "What does the community offer?",
    a: "Exclusive courses, resource libraries, weekly group sessions, office hours, community discussions, collaborative learning, and special member-only events.",
  },
  {
    q: "Why does integration matter?",
    a: "Integration is the process of becoming. Without it, healing work can remain fragmented. Fragmentation is the root of most mental and societal dysfunction.",
  },
  {
    q: "What is your refund policy?",
    a: "Monthly and annual memberships can be cancelled anytime. No refunds given, though annual subscriptions offer steeper discounts.",
  },
  {
    q: "How do you handle community guidelines?",
    a: "We begin with individual conversations, escalating to removal for continued violations. The container is kept intentionally safe.",
  },
];

export default function WhatIsThisPage() {
  return (
    <main className="pt-14 pb-[5em]">

      {/* ── Hero banner ─────────────────────────────────────────── */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center px-6 py-20 text-center gap-8">
        <Image
          src="/assets/space-to-expand.svg"
          alt="A Space to Expand"
          width={400}
          height={140}
          className="w-full max-w-sm md:max-w-md h-auto"
        />
        <p className="font-[family-name:var(--font-noto-serif)] text-lg md:text-xl italic max-w-2xl leading-relaxed">
          We&apos;re here for the space holders, the artists, the ones pitching in.
          So the sustainers feel sustained. We&apos;re here to support effort so it
          feels less like distress — by helping the open hearts feel held and seen —
          by giving room to embrace the messy, to play, digest and update.
        </p>
      </section>

      {/* ── TIC statement ───────────────────────────────────────── */}
      <section className="bg-black text-tic-yellow py-16 px-6 text-center">
        <h1 className="font-[family-name:var(--font-gordon)] text-3xl md:text-5xl tracking-widest uppercase leading-snug max-w-4xl mx-auto mb-6">
          THIS IS THE INFINITY CONTAINER
        </h1>
        <p className="font-[family-name:var(--font-gordon)] text-xl md:text-2xl tracking-wide uppercase max-w-2xl mx-auto">
          A SPACE TO EXPAND, CONDENSE AND ACCESS THE PLANE OF POSSIBILITY.
        </p>
        <p className="font-[family-name:var(--font-noto-serif)] text-lg mt-6 italic opacity-80">
          Tune into presence and we&apos;ll meet you where you are.
        </p>
      </section>

      <Marquee
        text="INTEGRATION IS THE WAY"
        duration={22}
        className="py-4 border-y-2 border-black bg-tic-yellow"
        textClassName="font-[family-name:var(--font-gordon)] text-xl tracking-[0.2em] uppercase"
      />

      {/* ── Pillars ─────────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="font-[family-name:var(--font-gordon)] text-2xl tracking-widest uppercase text-center mb-12">
          Our Pillars
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PILLARS.map((p) => (
            <div key={p.label} className="border-2 border-black p-6 text-center">
              <p className="text-2xl mb-2">{p.icon}</p>
              <p className="font-[family-name:var(--font-gordon)] text-lg uppercase tracking-wide leading-tight">
                {p.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-tic-dark text-tic-yellow">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-gordon)] text-2xl tracking-widest uppercase text-center mb-10">
            Values
          </h2>
          <ul className="flex flex-wrap justify-center gap-4">
            {VALUES.map((v) => (
              <li
                key={v}
                className="border border-tic-yellow/60 px-5 py-2 font-[family-name:var(--font-noto-serif)] text-sm tracking-wide"
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Membership section ──────────────────────────────────── */}
      <section className="py-20 px-6 max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/2 space-y-4">
          <h2 className="font-[family-name:var(--font-gordon)] text-2xl tracking-widest uppercase">
            The Platform
          </h2>
          <p className="font-[family-name:var(--font-noto-serif)] text-base leading-relaxed">
            The Infinity Container is an integration platform hosted on Mighty Networks.
            Once you&apos;re a paying member, your login info gives you access to our entire platform.
          </p>
          <a
            href="https://the-infinity-container.mn.co/landing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-black px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-tic-yellow transition-colors mt-2"
          >
            Membership Info ↗
          </a>
        </div>
        <div className="md:w-1/2">
          <h2 className="font-[family-name:var(--font-gordon)] text-2xl tracking-widest uppercase mb-6">
            We address
          </h2>
          <ul className="grid grid-cols-2 gap-2">
            {PROBLEMS.map((p) => (
              <li key={p} className="font-[family-name:var(--font-noto-serif)] text-sm flex items-center gap-2">
                <span className="text-tic-orange">✦</span> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-black text-tic-yellow">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-gordon)] text-2xl tracking-widest uppercase text-center mb-12">
            Questions
          </h2>
          <dl className="space-y-8">
            {FAQ.map(({ q, a }) => (
              <div key={q}>
                <dt className="font-[family-name:var(--font-gordon)] text-lg uppercase tracking-wide mb-2">
                  {q}
                </dt>
                <dd className="font-[family-name:var(--font-noto-serif)] text-sm leading-relaxed opacity-80">
                  {a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Newsletter ──────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <NewsletterForm
          heading="Stay in the loop"
          description="Subscribe to receive updates on community calls and new offerings."
          dark={false}
        />
      </section>

      {/* ── Nav links ───────────────────────────────────────────── */}
      <div className="flex flex-wrap justify-center gap-6 py-6 px-6 border-t border-black/20 text-sm font-medium tracking-wide uppercase">
        <Link href="/who-is-this-for" className="hover:opacity-60">Who is this for?</Link>
        <Link href="/what-is-integration" className="hover:opacity-60">What is integration?</Link>
        <Link href="/community-call" className="hover:opacity-60">Community Call</Link>
        <Link href="/about-us" className="hover:opacity-60">About Us</Link>
      </div>
    </main>
  );
}
