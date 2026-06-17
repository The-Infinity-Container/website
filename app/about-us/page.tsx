import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — The Infinity Container",
  description: "Meet the team behind The Infinity Container.",
};

const TEAM = [
  {
    name: "Victoria Sterkin, PhD",
    role: "Founder / Creator",
    bio: "A behavior analyst focused on therapeutic learning with individuals, couples, families and organizations. Victoria emphasizes flexibility, discernment, collaboration, and curiosity. She holds degrees from Teachers College, Columbia University and works across behavioral science, psychology, and biology. Based in Santa Cruz, CA (native New Yorker). Co-hosts the podcast Ghost Stories.",
    link: null,
  },
  {
    name: "Edu Cerro",
    role: "Artist",
    bio: "Argentine artist and tattoo specialist with 30+ years experience. Works under the “La Luz Mala” banner — referencing Argentine folklore. Influenced by 1970s comics and heavy metal album aesthetics.",
    link: null,
  },
  {
    name: "Catie Hart",
    role: "Developer / Coder",
    bio: "Developer and coder based in Oakland, CA. Also works as teacher, life coach, and sociology explorer.",
    link: "https://catiehart.com",
  },
  {
    name: "Erika Kaempfer",
    role: "Reiki 3 Practitioner & End of Life Doula",
    bio: "A professional blending corporate innovation and compassionate care. Reiki 3 Practitioner and End of Life Doula with a marketing background.",
    link: null,
  },
  {
    name: "Mariana Martin Capriles (MPeach)",
    role: "Motion Designer / Musician",
    bio: "Venezuelan-born Brooklyn artist — motion designer, video editor, producer, vocalist, DJ. Clients include Microsoft and Coca-Cola. Music featured in HBO's Betty.",
    link: null,
  },
  {
    name: "Daniela Matos",
    role: "Creative Director",
    bio: "Venezuelan-born LA creative director; founder of Hum783 studio. Directed creative strategy for Becky G's albums.",
    link: null,
  },
];

export default function AboutUsPage() {
  return (
    <main className="pt-14 pb-[5em]">

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 text-center">
        <h1 className="font-[family-name:var(--font-gordon)] text-5xl md:text-7xl uppercase tracking-widest">
          About Us
        </h1>
      </section>

      {/* ── Team ────────────────────────────────────────────────── */}
      <section className="px-6 py-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {TEAM.map((member) => (
            <article key={member.name} className="border-t-2 border-black pt-6">
              <h2 className="font-[family-name:var(--font-gordon)] text-2xl uppercase tracking-wide mb-1">
                {member.name}
              </h2>
              <p className="font-[family-name:var(--font-gordon)] text-sm uppercase tracking-widest text-black/50 mb-4">
                {member.role}
              </p>
              <p className="font-[family-name:var(--font-noto-serif)] text-sm leading-relaxed">
                {member.bio}
              </p>
              {member.link && (
                <a
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm underline hover:opacity-60 transition-opacity"
                >
                  {member.link.replace("https://", "")} ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-black text-tic-yellow py-20 px-6 text-center">
        <p className="font-[family-name:var(--font-gordon)] text-3xl uppercase tracking-widest max-w-2xl mx-auto mb-8">
          We&apos;re embodying what we learn.
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

      {/* ── Nav ─────────────────────────────────────────────────── */}
      <div className="flex flex-wrap justify-center gap-6 py-6 px-6 border-t border-black/20 text-sm font-medium uppercase tracking-wide">
        <Link href="/testimonials" className="hover:opacity-60">Testimonials</Link>
        <Link href="/community-call" className="hover:opacity-60">Community Call</Link>
        <Link href="/" className="hover:opacity-60">Home</Link>
      </div>
    </main>
  );
}
