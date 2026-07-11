import type { Metadata } from "next";
import Image from "next/image";
import Marquee from "@/components/Marquee";

export const metadata: Metadata = {
  title: "What is Integration?",
  description: "Integration is the process of becoming. Learn what it means to integrate and why it matters for practitioners and conscious explorers.",
};

const DEFINITIONS = [
  "To bring together or incorporate (parts) into a whole.",
  "To combine, mingle, fuse, merge, UNITE.",
  "To deepen our relationship with our inner and outer worlds, fostering a wholeness.",
];

const FOUR_STEPS = [
  "Identify separate parts with individual value",
  "Connect, communicate, and harmonize different parts",
  "Apply discernment; determine what needs decomposing",
  "Integration results in a third entity — what emerges in the field",
];

const INTEGRATED = [
  "Peaceful", "Balanced", "Loving", "Compassionate", "Thoughtful", "Curious",
  "Reciprocal", "Focused", "Organized", "Patient", "Creative", "Belonging",
  "Playful", "Resilient", "In Flow", "Mindful",
];

const FRAGMENTED = [
  "Insecure", "Compulsive", "Reactive", "Unable to think", "Anxious", "Scared",
  "Untrusting", "Depressed", "Self-centered", "Selfish", "Scarce", "Judgemental",
  "Impatient", "Constricted", "Disorganized", "Rigid", "Not fitting in", "Chaotic",
];

const CONTINUUMS = [
  ["Stuckness", "Movement"],
  ["Fast", "Slow"],
  ["Rigid", "Flexible"],
  ["Trance", "Awake"],
  ["Distress", "Focused effort"],
  ["Chaotic", "Organized"],
  ["Numb", "Openly experiencing"],
  ["Closed", "Curious"],
  ["Narrow mind", "Multi perspective"],
  ["One", "Many"],
  ["Parts", "Whole"],
];

export default function WhatIsIntegrationPage() {
  return (
    <main className="pt-14 pb-[5em]">

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center px-6 py-20 text-center gap-8">
        <Image
          src="/assets/integration.svg"
          alt="Integration"
          width={220}
          height={280}
          className="w-40 md:w-52 h-auto"
        />
        <h1 className="font-[family-name:var(--font-gordon)] text-4xl md:text-6xl uppercase tracking-widest">
          Integration is the process of becoming.
        </h1>
      </section>

      {/* ── Definitions ─────────────────────────────────────────── */}
      <section className="bg-black text-tic-yellow py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-[family-name:var(--font-gordon)] text-xl tracking-widest uppercase mb-8 text-center">
            What does integrate mean?
          </h2>
          {DEFINITIONS.map((d, i) => (
            <p
              key={i}
              className="font-[family-name:var(--font-noto-serif)] text-lg leading-relaxed border-l-4 border-tic-yellow pl-6"
            >
              {d}
            </p>
          ))}
        </div>
      </section>

      {/* ── Why it matters ──────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-2/3 space-y-5">
            <h2 className="font-[family-name:var(--font-gordon)] text-2xl uppercase tracking-wide">
              In order to integrate…
            </h2>
            <p className="font-[family-name:var(--font-noto-serif)] text-base leading-relaxed">
              Ensuring to take time for integration is the opportunity to process and embed healing
              work from therapeutic sessions. It applies to medicine journeys, hypnotherapy, yoga,
              retreats, bodywork, sound healing, and meditation.
            </p>
            <p className="font-[family-name:var(--font-gordon)] text-xl uppercase tracking-wide text-tic-dark">
              Integration isn&apos;t optional — it&apos;s a crucial part of the healing journey.
            </p>
            <p className="font-[family-name:var(--font-noto-serif)] text-base leading-relaxed">
              Fragmentation is the root of most mental and societal illness and dysfunction.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <Image src="/assets/spider.svg" alt="" width={160} height={200} aria-hidden className="w-36 h-auto opacity-70" />
          </div>
        </div>
      </section>

      <Marquee
        text="INTEGRATION IS THE WAY"
        duration={22}
        className="py-4 border-y-2 border-black"
        textClassName="font-[family-name:var(--font-gordon)] text-xl tracking-[0.2em] uppercase"
      />

      {/* ── Four steps ──────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="font-[family-name:var(--font-gordon)] text-2xl uppercase tracking-widest mb-10 text-center">
          Four steps to integration
        </h2>
        <ol className="space-y-6">
          {FOUR_STEPS.map((step, i) => (
            <li key={i} className="flex gap-5 items-start">
              <span className="font-[family-name:var(--font-gordon)] text-4xl leading-none shrink-0 opacity-30">
                {i + 1}
              </span>
              <p className="font-[family-name:var(--font-noto-serif)] text-base leading-relaxed pt-1">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Interaction stage ───────────────────────────────────── */}
      <section className="bg-tic-dark text-tic-yellow py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-gordon)] text-2xl uppercase tracking-widest mb-6">
            Interaction with integration
          </h2>
          <p className="font-[family-name:var(--font-noto-serif)] text-base leading-relaxed opacity-90">
            Interaction is the early stage of integration. Within interaction, we are introduced to
            a new idea, a new feeling, a discovery that is an opening. We are born with certain
            capacities — we shape and become shaped with our environments.
          </p>
        </div>
      </section>

      {/* ── TIC helps us ────────────────────────────────────────── */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h2 className="font-[family-name:var(--font-gordon)] text-2xl uppercase tracking-widest mb-6">
          TIC helps us feel held in the energetics of the container
        </h2>
        <p className="font-[family-name:var(--font-noto-serif)] text-base leading-relaxed">
          Sequence &amp; development — the practice of returning, refining, and deepening.
        </p>
      </section>

      {/* ── States grid ─────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[family-name:var(--font-gordon)] text-2xl uppercase tracking-widest text-tic-yellow text-center mb-12">
            Integrated States vs Fragmented States
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-[family-name:var(--font-gordon)] text-lg uppercase tracking-wide text-tic-yellow mb-4 border-b border-tic-yellow/40 pb-2">
                Integrated
              </h3>
              <ul className="flex flex-wrap gap-2">
                {INTEGRATED.map((s) => (
                  <li key={s} className="text-tic-yellow border border-tic-yellow/40 px-3 py-1 text-sm font-[family-name:var(--font-noto-serif)]">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-gordon)] text-lg uppercase tracking-wide text-tic-pink mb-4 border-b border-tic-pink/40 pb-2">
                Fragmented
              </h3>
              <ul className="flex flex-wrap gap-2">
                {FRAGMENTED.map((s) => (
                  <li key={s} className="text-tic-pink border border-tic-pink/40 px-3 py-1 text-sm font-[family-name:var(--font-noto-serif)]">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="font-[family-name:var(--font-noto-serif)] text-tic-yellow/70 text-sm text-center mt-10 italic max-w-2xl mx-auto">
            While these states indicate a more integrated self, the goal is not to always be in
            these states but to move through that which arises and return here.
          </p>
        </div>
      </section>

      {/* ── Continuums ──────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="font-[family-name:var(--font-gordon)] text-2xl uppercase tracking-widest text-center mb-10">
          Continuums to Titrate
        </h2>
        <div className="space-y-4">
          {CONTINUUMS.map(([from, to]) => (
            <div key={from} className="flex items-center gap-4">
              <span className="font-[family-name:var(--font-noto-serif)] text-sm w-40 text-right text-black/60">{from}</span>
              <div className="flex-1 h-px bg-black/20 relative">
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-tic-dark" />
              </div>
              <span className="font-[family-name:var(--font-noto-serif)] text-sm w-40 text-black/60">{to}</span>
            </div>
          ))}
        </div>
        <p className="font-[family-name:var(--font-noto-serif)] text-center mt-10 text-base italic">
          The more integrated we are, the more ease we find in choosing where on the continuum
          feels best for the present moment.
        </p>
      </section>

      {/* ── Closing statement ───────────────────────────────────── */}
      <section className="py-14 px-6 bg-black text-tic-yellow text-center">
        <p className="font-[family-name:var(--font-gordon)] text-2xl md:text-4xl uppercase tracking-widest max-w-3xl mx-auto leading-snug">
          Fragmentation is at the core of all dysfunction and discomfort.
          <br />
          <span className="text-tic-pink">Integration is the way.</span>
        </p>
        <a
          href="https://the-infinity-container.mn.co/landing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 border-2 border-tic-yellow text-tic-yellow px-10 py-4 font-[family-name:var(--font-gordon)] text-xl uppercase tracking-widest hover:bg-tic-yellow hover:text-black transition-colors"
        >
          Become a Member
        </a>
      </section>

    </main>
  );
}
