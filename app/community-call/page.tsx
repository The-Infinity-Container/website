import type { Metadata } from "next";
import Image from "next/image";
import { Rock_Salt } from "next/font/google";
import InlineNewsletter from "@/components/InlineNewsletter";

const rockSalt = Rock_Salt({
  variable: "--font-rock-salt",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Community Call — The Infinity Container",
  description:
    "Free monthly virtual integration circle hosted by Dr. Victoria Sterkin. First Saturday of each month, 10am–11:20ish PST. All are welcome.",
};

const REGISTER_URL = "https://the-infinity-container.mn.co/landing";

const LEFT_REASONS = [
  "To integrate a journey",
  "To integrate a life experience",
  "To connect",
  "To receive support",
  "To offer support",
  "To gain perspective",
];

const RIGHT_REASONS = [
  "To give yourself time to feel",
  "To meditate",
  "To listen",
  "To shift states / frequencies",
  "To share a part of yourself",
  "To have a voice",
];

export default function CommunityCallPage() {
  return (
    <main className={`${rockSalt.variable} bg-tic-olive text-white pt-14 pb-[5em]`}>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="px-6 pt-14 pb-12">
        <h1 className="font-[family-name:var(--font-gordon)] text-6xl md:text-8xl uppercase leading-none text-tic-yellow text-center">
          Community Call
        </h1>
        <p className="font-[family-name:var(--font-gordon)] text-tic-pink text-lg md:text-xl mt-4 leading-snug text-center">
          Join us in our Virtual Monthly Integration Circle hosted by Dr. Victoria Sterkin
        </p>

        <div className="mt-10 flex flex-col md:flex-row items-center gap-8">
          {/* Real satellite SVG */}
          <div className="shrink-0 w-full md:w-1/2">
            <Image
              src="/assets/satellite.svg"
              alt="Satellite dish illustration"
              width={1074}
              height={1012}
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="text-left">
            <p className="font-[family-name:var(--font-rock-salt)] text-5xl md:text-6xl text-white leading-tight">
              No Cost<br />
              All Are Welcome
            </p>
            <p className="font-[family-name:var(--font-gordon)] text-2xl uppercase text-tic-yellow mt-8 leading-tight">
              First Saturday of<br />Each Month
            </p>
            <p className="text-lg mt-2">10am - 11:20ish PST</p>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-tic-orange text-black font-[family-name:var(--font-gordon)] uppercase tracking-widest text-lg px-8 py-3 hover:opacity-90 transition-opacity"
            >
              Register
            </a>
          </div>
        </div>
      </section>

      {/* ── Body copy ──────────────────────────────────────────────── */}
      <section className="px-6 py-10 max-w-2xl mx-auto space-y-8">
        <p className="font-[family-name:var(--font-noto-serif)] leading-relaxed">
          It&apos;s so important to have space to feel spacious. To process all that we are
          experiencing. To learn how to incorporate new awarenesses into new ways of
          behaving, existing. To keep us more awake alive.
        </p>

        <p className="font-[family-name:var(--font-noto-serif)] italic text-tic-pink text-lg text-right leading-relaxed">
          Our community call is welcome to all conscious explorers.
        </p>

        <p className="font-[family-name:var(--font-noto-serif)] leading-relaxed">
          There are many forms of medicine, substances &amp; experiences that open up our
          consciousness. It&apos;s important we have accessible spaces to make better sense
          of it all and learn new ways of being in the world with our new found insights.
        </p>

        <p className="font-[family-name:var(--font-noto-serif)] italic text-tic-pink text-lg text-right leading-relaxed">
          We listen &amp; speak. Give &amp; receive.<br />
          Somatically explore. Meditate. Share heart space.
        </p>
      </section>

      {/* ── Newsletter ─────────────────────────────────────────────── */}
      <section className="overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src="/assets/love-journal.webp"
            alt="Open journal with handwritten notes"
            width={874}
            height={1164}
            className="w-full md:w-[45%] shrink-0 object-cover md:-ml-8"
          />

          <div className="w-full md:w-[55%] px-10 py-12 flex flex-col justify-center">
            <p className="font-[family-name:var(--font-noto-serif)] text-black text-2xl leading-snug mb-8 text-center">
              To receive email updates on community calls and other Infinity Containers
              subscribe to our newsletter.
            </p>
            <InlineNewsletter inputBg="bg-tic-pink" />
          </div>
        </div>
      </section>

      {/* ── Why Come ───────────────────────────────────────────────── */}
      <section className="px-6 py-16 max-w-2xl mx-auto">
        <h2 className="font-[family-name:var(--font-gordon)] text-3xl md:text-4xl uppercase text-tic-yellow text-right leading-tight mb-12">
          Why Come to a<br />Community Call?
        </h2>

        <div className="grid grid-cols-2 gap-x-6 gap-y-5">
          <ul className="space-y-5">
            {LEFT_REASONS.map((r) => (
              <li
                key={r}
                className="font-[family-name:var(--font-noto-serif)] text-sm flex gap-2 leading-snug"
              >
                <span className="shrink-0 text-tic-pink">∞</span>
                {r}
              </li>
            ))}
            <li className="font-[family-name:var(--font-noto-serif)] text-sm flex gap-2 leading-snug">
              <span className="shrink-0 text-tic-pink">∞</span>
              <span>
                Your curious about joining our{" "}
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tic-pink underline underline-offset-2"
                >
                  membership
                </a>
              </span>
            </li>
          </ul>

          <ul className="space-y-5">
            {RIGHT_REASONS.map((r) => (
              <li
                key={r}
                className="font-[family-name:var(--font-noto-serif)] text-sm flex gap-2 leading-snug"
              >
                <span className="shrink-0 text-tic-pink">∞</span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-12">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-tic-orange text-black font-[family-name:var(--font-gordon)] uppercase tracking-widest text-base px-8 py-3 hover:opacity-90 transition-opacity"
          >
            Register
          </a>
        </div>
      </section>

    </main>
  );
}
