import type { Metadata } from "next";
import Image from "next/image";
import Marquee from "@/components/Marquee";

export const metadata: Metadata = {
  title: "Who is The Infinity Container For?",
  description: "For therapists, teachers, space holders, artists, coaches, doulas, and all practitioners who need space to be held.",
};

const PRACTITIONERS = [
  "Therapists",
  "Teachers",
  "Doulas",
  "Space holders",
  "Artists",
  "Doctors",
  "Indigenous Wisdom Keepers",
  "Managers / Team Leaders",
  "Founders / CEO",
  "Designers",
  "Parents",
  "Body Workers",
  "Sound & Energy Practitioners",
  "Somatic Specialists",
  "Counselors",
  "Social Workers",
  "Nurses",
  "Elders",
];

export default function WhoIsThisForPage() {
  return (
    <main className="pt-14 pb-[5em]">

      {/* ── Opening question ────────────────────────────────────── */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center px-6 py-20 text-center gap-8">
        <Image
          src="/assets/are-you-a-practitioner.svg"
          alt="Are you a practitioner?"
          width={380}
          height={130}
          className="w-full max-w-xs md:max-w-sm h-auto"
        />
        <div className="font-[family-name:var(--font-noto-serif)] text-lg md:text-xl max-w-xl leading-loose space-y-2">
          <p>Are you holding &amp; creating without feeling held?</p>
          <p>Perhaps you&apos;re lacking mentorship?</p>
          <p>Feeling burnt out? Uninspired?</p>
          <p>Are you doing a lot of giving without enough receiving?</p>
          <p className="italic mt-4">Do YOU need space to expand and condense in?</p>
          <p className="italic">Us too.</p>
        </div>
      </section>

      {/* ── CTA bar ─────────────────────────────────────────────── */}
      <section className="bg-black text-tic-yellow py-16 px-6 text-center">
        <h1 className="font-[family-name:var(--font-gordon)] text-3xl md:text-4xl tracking-widest uppercase leading-snug max-w-3xl mx-auto mb-6">
          Get in The Infinity Container.
        </h1>
        <p className="font-[family-name:var(--font-noto-serif)] text-base md:text-lg max-w-xl mx-auto leading-relaxed opacity-90 mb-8">
          We&apos;re embodying what we learn. Exploring what we teach. &amp; Teaching better ways to practice.
          We&apos;re supporting the supporters.
        </p>
        <p className="font-[family-name:var(--font-gordon)] text-xl uppercase tracking-widest">
          Integration is the Way.
        </p>
      </section>

      <Marquee
        text="INTEGRATION IS THE WAY"
        duration={22}
        className="py-4 border-y-2 border-black bg-tic-yellow"
        textClassName="font-[family-name:var(--font-gordon)] text-xl tracking-[0.2em] uppercase"
      />

      {/* ── What is a practitioner? ─────────────────────────────── */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="font-[family-name:var(--font-gordon)] text-2xl tracking-widest uppercase mb-8">
          What is a practitioner?
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-2/3 space-y-4">
            <p className="font-[family-name:var(--font-noto-serif)] text-base leading-relaxed">
              Practitioners practice with an awareness of process — an awareness of the subtleties
              that everything takes focus, repetition, exploration and that everything grows a
              little at a time.
            </p>
            <p className="font-[family-name:var(--font-noto-serif)] text-base leading-relaxed">
              They hold space for people to process, explore, and be curious. They may offer
              teachings, services, and or guidance to others in their communities.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/assets/closed-hand.svg"
              alt=""
              width={140}
              height={180}
              aria-hidden
              className="w-32 h-auto opacity-80"
            />
          </div>
        </div>
      </section>

      {/* ── Practitioner list ───────────────────────────────────── */}
      <section className="py-16 px-6 border-y-2 border-black">
        <div className="max-w-5xl mx-auto">
          <Image
            src="/assets/who-is-this-for.png"
            alt="Who is this for — practitioners"
            width={800}
            height={512}
            className="w-full max-w-2xl mx-auto h-auto mb-10 block"
          />
          <ul className="flex flex-wrap justify-center gap-3">
            {PRACTITIONERS.map((p) => (
              <li
                key={p}
                className="border border-black px-4 py-2 font-[family-name:var(--font-noto-serif)] text-sm"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Quote ───────────────────────────────────────────────── */}
      <section className="py-20 px-8 max-w-3xl mx-auto text-center">
        <blockquote className="font-[family-name:var(--font-noto-serif)] text-lg md:text-xl italic leading-relaxed mb-6">
          &ldquo;Whatever you know is just words, names of finite phenomena. It is the infinite
          that is the source of abiding joy because it is not subject to change. Therefore,
          seek to know the infinite.&rdquo;
        </blockquote>
        <cite className="font-[family-name:var(--font-gordon)] text-sm uppercase tracking-widest not-italic">
          — The Upanishads (attributed to Sage Sanatkumara)
        </cite>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="py-10 px-6 flex flex-col items-center gap-4 border-t-2 border-black">
        <a
          href="https://the-infinity-container.mn.co/landing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-tic-yellow border-2 border-black px-10 py-4 font-[family-name:var(--font-gordon)] text-xl uppercase tracking-widest hover:bg-transparent hover:text-black transition-colors"
        >
          Join the Container
        </a>
      </section>

    </main>
  );
}
