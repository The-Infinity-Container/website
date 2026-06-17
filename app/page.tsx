import Image from "next/image";
import Marquee from "@/components/Marquee";
import SpotifyEmbed from "@/components/SpotifyEmbed";
import NewsletterForm from "@/components/NewsletterForm";
import Link from "next/link";

const INTEGRATION_POETRY = [
  "It is playing in the unknown, while knowing yourself more.",
  "It is weaving. It is collaborating.",
  "It is titration & digestion.",
  "It is process. It is practice with awareness.",
  "It is the evolution of a differentiated, connected self.",
  "It is intra-connected identity.",
  "It is WE, it is US.",
  "It is the link between possibility and actuality.",
];

export default function HomePage() {
  return (
    <main className="pt-14 pb-[5em]">

      {/* ── Section 1: Space holders intro ─────────────────────── */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center px-6 py-20 text-center gap-6">
        <p className="font-[family-name:var(--font-noto-serif)] text-xl md:text-2xl max-w-xl leading-relaxed italic">
          We&apos;re here for the space holders, the artists, the ones pitching in.
          <br />
          So the sustainers feel sustained.
        </p>
        <div className="flex items-center gap-3">
          <Image src="/assets/mush-gio.svg" alt="" width={60} height={80} aria-hidden />
          <Image src="/assets/mush-gio-mirrored.svg" alt="" width={60} height={80} aria-hidden />
        </div>
        <h2 className="font-[family-name:var(--font-gordon)] text-3xl md:text-5xl tracking-widest uppercase leading-tight max-w-2xl">
          This is THE INFINITY CONTAINER
          <br />
          <span className="text-2xl md:text-3xl">A place for integration</span>
        </h2>
      </section>

      {/* ── Marquee ─────────────────────────────────────────────── */}
      <Marquee
        text="INTEGRATION IS THE WAY"
        separator="  ✦  "
        duration={22}
        className="py-4 border-y-2 border-black"
        textClassName="font-[family-name:var(--font-gordon)] text-2xl tracking-[0.2em] uppercase"
      />

      {/* ── Section 2: What integration is ─────────────────────── */}
      <section className="py-20 px-6 md:px-16 max-w-4xl mx-auto">
        <p className="font-[family-name:var(--font-noto-serif)] text-lg md:text-xl mb-6 text-center italic">
          Tune into presence &amp; we&apos;ll meet you where you are.
        </p>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3 flex justify-center shrink-0">
            <Image
              src="/assets/integration.svg"
              alt="Integration"
              width={180}
              height={220}
              className="w-40 md:w-48 h-auto"
            />
          </div>
          <div className="md:w-2/3 space-y-3">
            <p className="font-[family-name:var(--font-gordon)] text-2xl uppercase tracking-wide mb-4">
              Integration is a birthday &amp; a funeral.
            </p>
            {INTEGRATION_POETRY.map((line) => (
              <p key={line} className="font-[family-name:var(--font-noto-serif)] text-base leading-relaxed">
                {line}
              </p>
            ))}
            <p className="font-[family-name:var(--font-noto-serif)] text-base mt-4 italic">
              It happens in The Infinity Container,{" "}
              <span className="font-bold not-italic">where integration is the way.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3: Spotify ──────────────────────────────────── */}
      <section className="px-6 md:px-16 max-w-3xl mx-auto pb-16">
        <p className="font-[family-name:var(--font-gordon)] text-sm tracking-widest uppercase mb-4 text-center opacity-60">
          Listen with us
        </p>
        <SpotifyEmbed />
      </section>

      {/* ── Section 4: Are you a practitioner? ─────────────────── */}
      <section className="py-20 px-6 bg-black text-tic-yellow">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 space-y-4">
            <Image
              src="/assets/are-you-a-practitioner.svg"
              alt="Are you a practitioner?"
              width={340}
              height={120}
              className="w-full max-w-sm h-auto"
            />
            <div className="font-[family-name:var(--font-noto-serif)] text-base leading-loose space-y-1">
              <p>Are you holding &amp; creating without feeling held?</p>
              <p>Perhaps you&apos;re lacking mentorship?</p>
              <p>Feeling burnt out? Uninspired?</p>
              <p>Are you doing a lot of giving without enough receiving?</p>
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <p className="font-[family-name:var(--font-gordon)] text-2xl md:text-3xl uppercase tracking-wide leading-tight">
              Join us in The Infinity Container.
            </p>
            <p className="font-[family-name:var(--font-noto-serif)] text-base leading-relaxed">
              We&apos;re embodying what we learn, exploring what we teach, &amp; teaching better ways
              to practice. We&apos;re offering integration and expanded possibilities.
            </p>
            <a
              href="https://the-infinity-container.mn.co/landing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-tic-yellow text-tic-yellow px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-tic-yellow hover:text-black transition-colors"
            >
              Become a Member
            </a>
          </div>
        </div>
      </section>

      {/* ── Section 5: Newsletter ───────────────────────────────── */}
      <section className="py-20 px-6 md:px-16 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/3 shrink-0">
            <Image src="/assets/hearts.svg" alt="" width={120} height={120} aria-hidden className="w-24 h-auto" />
          </div>
          <div className="md:w-2/3">
            <NewsletterForm
              heading="Stay Connected"
              description="To receive email updates on community calls and other Infinity Container news, subscribe to our newsletter."
            />
          </div>
        </div>
      </section>

      {/* ── Section 6: Hero / closing CTA ──────────────────────── */}
      <section className="min-h-[90vh] flex flex-col border-t-2 border-black">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.15em] uppercase px-4 pt-10 pb-4 font-[family-name:var(--font-gordon)]">
          PRESENCE IS THE ONLY THING THAT HAS NO END
        </h2>

        <div className="flex-1 flex items-center justify-between px-6 md:px-14 gap-4 py-8">
          {/* Left CTA */}
          <div className="hidden sm:flex flex-col justify-center max-w-[200px]">
            <a
              href="https://the-infinity-container.mn.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-gordon)] font-bold text-xl md:text-2xl tracking-widest uppercase leading-tight hover:opacity-70 transition-opacity"
            >
              JOIN US IN THE
              <br />
              INFINITY
              <br />
              CONTAINER
            </a>
          </div>

          {/* Arch SVG */}
          <div className="flex-1 flex items-center justify-center min-w-0">
            <Image
              src="/assets/window-view.svg"
              alt="The Infinity Container portal — stained glass arch"
              width={480}
              height={660}
              priority
              className="w-full max-w-[300px] md:max-w-[440px] h-auto"
            />
          </div>

          {/* Right CTA */}
          <div className="hidden sm:flex flex-col justify-center items-end max-w-[200px] text-right">
            <a
              href="https://the-infinity-container.mn.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-gordon)] font-bold text-xl md:text-2xl tracking-widest uppercase leading-tight hover:opacity-70 transition-opacity"
            >
              ENTER OUR
              <br />
              MEMBERSHIP
              <br />
              PORTAL
            </a>
          </div>
        </div>

        {/* Mobile CTAs */}
        <div className="sm:hidden flex flex-col items-center gap-6 px-6 pb-10 text-center">
          <a
            href="https://the-infinity-container.mn.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-gordon)] font-bold text-2xl tracking-widest uppercase leading-tight"
          >
            JOIN US IN THE INFINITY CONTAINER
          </a>
          <a
            href="https://the-infinity-container.mn.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-gordon)] font-bold text-2xl tracking-widest uppercase leading-tight"
          >
            ENTER OUR MEMBERSHIP PORTAL
          </a>
        </div>

        {/* Subnav links */}
        <div className="flex flex-wrap justify-center gap-6 py-6 px-6 border-t border-black/20 text-sm font-medium tracking-wide uppercase">
          <Link href="/what-is-the-infinity-container" className="hover:opacity-60 transition-opacity">What is this?</Link>
          <Link href="/who-is-this-for" className="hover:opacity-60 transition-opacity">Who is this for?</Link>
          <Link href="/what-is-integration" className="hover:opacity-60 transition-opacity">What is integration?</Link>
          <Link href="/community-call" className="hover:opacity-60 transition-opacity">Community Call</Link>
          <Link href="/blog" className="hover:opacity-60 transition-opacity">Blog</Link>
          <Link href="/about-us" className="hover:opacity-60 transition-opacity">About Us</Link>
        </div>
      </section>

    </main>
  );
}
