import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Community Call — The Infinity Container",
  description: "Free monthly virtual integration circle hosted by Dr. Victoria Sterkin. First Saturday of each month, 10am–11:20ish PST. All are welcome.",
};

const WHY_ATTEND = [
  "To integrate a journey",
  "To connect with like-minded practitioners",
  "To meditate and be held",
  "To build perspective",
  "To shift states",
  "To share your voice",
  "To receive support",
  "To explore consciousness",
  "To practice somatic awareness",
  "To give and receive heart-centered space",
  "To feel less alone in the work",
  "To reset and repair",
];

export default function CommunityCallPage() {
  return (
    <main className="pt-14 pb-[5em]">

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 text-center gap-8">
        <h1 className="font-[family-name:var(--font-gordon)] text-4xl md:text-6xl uppercase tracking-widest leading-tight">
          Community Call
        </h1>
        <p className="font-[family-name:var(--font-noto-serif)] text-lg md:text-xl italic max-w-2xl leading-relaxed">
          Join us in our Virtual Monthly Integration Circle hosted by Dr. Victoria Sterkin
        </p>
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <div className="border-2 border-black px-8 py-4 text-center">
            <p className="font-[family-name:var(--font-gordon)] text-2xl uppercase tracking-wide">No Cost</p>
          </div>
          <div className="border-2 border-black px-8 py-4 text-center">
            <p className="font-[family-name:var(--font-gordon)] text-2xl uppercase tracking-wide">All Are Welcome</p>
          </div>
        </div>
      </section>

      {/* ── Details bar ─────────────────────────────────────────── */}
      <section className="bg-black text-tic-yellow py-12 px-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-center text-center md:text-left">
          <div>
            <p className="font-[family-name:var(--font-gordon)] text-3xl uppercase tracking-wide mb-1">
              First Saturday of Each Month
            </p>
            <p className="font-[family-name:var(--font-noto-serif)] text-xl">
              10am – 11:20ish PST
            </p>
          </div>
          <div className="md:border-l-2 border-tic-yellow/40 md:pl-8">
            <a
              href="https://the-infinity-container.mn.co/landing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-tic-yellow text-tic-yellow px-8 py-3 font-[family-name:var(--font-gordon)] text-xl uppercase tracking-widest hover:bg-tic-yellow hover:text-black transition-colors"
            >
              Register
            </a>
          </div>
        </div>
      </section>

      {/* ── About the call ──────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-2/3 space-y-5">
            <h2 className="font-[family-name:var(--font-gordon)] text-2xl uppercase tracking-widest">
              About the call
            </h2>
            <p className="font-[family-name:var(--font-noto-serif)] text-base leading-relaxed">
              It&apos;s so important to have space to feel spacious. The calls are designed to help
              attendees process experiences and incorporate new awarenesses into new ways of behaving.
            </p>
            <p className="font-[family-name:var(--font-noto-serif)] text-base leading-relaxed">
              Our community call is welcome to all conscious explorers. There are many forms of
              medicine, substances &amp; experiences that invite us to explore and expand our
              consciousness — and we need space to integrate them.
            </p>
            <p className="font-[family-name:var(--font-noto-serif)] text-base leading-relaxed">
              We listen &amp; speak. Give &amp; receive. Somatically explore. Meditate. Share heart space.
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col gap-4 items-center">
            <Image
              src="/assets/hearts.svg"
              alt=""
              width={100}
              height={100}
              aria-hidden
              className="w-24 h-auto"
            />
            <Image
              src="/assets/dropper-learn-more.svg"
              alt=""
              width={100}
              height={120}
              aria-hidden
              className="w-20 h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── Why attend ──────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-tic-dark text-tic-yellow">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-gordon)] text-2xl uppercase tracking-widest text-center mb-10">
            Why Attend?
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {WHY_ATTEND.map((reason) => (
              <li key={reason} className="flex items-start gap-2 font-[family-name:var(--font-noto-serif)] text-sm leading-relaxed">
                <span className="text-tic-pink shrink-0 mt-0.5">✦</span>
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Newsletter ──────────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <NewsletterForm
          heading="Get Call Updates"
          description="To receive email updates on community calls and other Infinity Container news, subscribe to our newsletter."
        />
      </section>

      {/* ── Nav ─────────────────────────────────────────────────── */}
      <div className="flex flex-wrap justify-center gap-6 py-6 px-6 border-t border-black/20 text-sm font-medium uppercase tracking-wide">
        <Link href="/what-is-the-infinity-container" className="hover:opacity-60">What is this?</Link>
        <Link href="/who-is-this-for" className="hover:opacity-60">Who is this for?</Link>
        <Link href="/about-us" className="hover:opacity-60">About Us</Link>
      </div>
    </main>
  );
}
