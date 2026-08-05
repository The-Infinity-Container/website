import type { Metadata } from "next";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import SectionHeading from "@/components/SectionHeading";
import BodyText from "@/components/BodyText";

export const metadata: Metadata = {
  title: "Partnerships — The Infinity Container",
  description:
    "TIC partnerships — companies and communities Victoria trusts personally.",
};

export default function PartnershipsPage() {
  return (
    <main className="bg-white">

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <header className="px-6 pt-[55px] md:pt-[100px] pb-[45px] md:pb-[80px] text-center">
        <SectionLabel className="text-center">Partnerships</SectionLabel>
        <h1
          className="font-[family-name:var(--font-gordon)] font-normal tracking-[0.02em] leading-[1.15] text-black max-w-[680px] mx-auto mb-6"
          style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
        >
          People and places we trust personally.
        </h1>
        <p className="font-[family-name:var(--font-noto-serif)] italic text-body text-[#444] max-w-[560px] mx-auto">
          TIC partnerships are relational, not transactional. Every company here is one we&apos;ve worked with, learned from, or leaned on — and recommend because we mean it.
        </p>
      </header>

      {/* ── Partners ───────────────────────────────────────────────── */}
      <section className="bg-tic-grey px-6 py-[60px] md:py-[100px]">
        <div className="max-w-[1290px] mx-auto flex flex-col gap-[60px]">

          {/* Lacuna Medicinals */}
          <div id="lacuna-medicinals" className="bg-white rounded-[6px] p-8 md:p-16 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-9 md:gap-16 md:items-stretch">
            <div className="flex items-center justify-center md:justify-start">
              <Image
                src="/assets/lacuna-medicinals-logo.png"
                alt="Lacuna Medicinals"
                width={800}
                height={1171}
                className="w-[122px] md:w-[76.5%] h-auto"
              />
            </div>
            <div className="flex flex-col">
              <SectionLabel>Mycology · Microdosing</SectionLabel>
              <SectionHeading>Lacuna Medicinals</SectionHeading>
              <p
                className="font-[family-name:var(--font-noto-serif)] italic text-tic-brown border-l-[3px] border-tic-yellow pl-5 mb-5"
                style={{ fontSize: "17px", lineHeight: "1.8" }}
              >
                &quot;It&apos;s important to have a relationship with the people growing your medicine. The mycologist behind Lacuna is deeply rooted in integrity, wisdom, and science.&quot;
              </p>
              <BodyText className="text-[#333] mb-5">
                Lacuna Medicinals is a women-owned apothecary and education hub rooted in deep love and reverence for plants and fungi. Their medicine is grown with integrity and care — cultivated in-house, crafted by their own hands, with full presence at every step of the process. For TIC members exploring microdosing or functional mushroom support, this is where we send people.
              </BodyText>
              <div className="flex items-center gap-6 flex-wrap">
                <a
                  href="https://lacunamedicinals.com/?ref=INFINITY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-[family-name:var(--font-gordon)] uppercase text-xs tracking-[0.12em] bg-tic-orange text-black px-7 py-3 rounded-sm hover:bg-tic-pink transition-colors"
                >
                  Visit Lacuna Medicinals →
                </a>
                <div className="flex items-center gap-3">
                  <span className="font-[family-name:var(--font-gordon)] uppercase text-[10px] tracking-[0.18em] text-tic-dark-grey">
                    TIC discount
                  </span>
                  <span className="font-[family-name:var(--font-gordon)] uppercase text-sm tracking-[0.18em] bg-tic-yellow text-black px-4 py-2 rounded-sm">
                    INFINITY
                  </span>
                  <span className="font-[family-name:var(--font-gordon)] uppercase text-[10px] tracking-[0.18em] text-tic-dark-grey">
                    · 10% off
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Reset Academy */}
          <div id="reset-academy" className="bg-white rounded-[6px] p-8 md:p-16 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-9 md:gap-16 md:items-stretch">
            <div className="flex items-center justify-center md:justify-start">
              <Image
                src="/assets/reset-academy-logo.png"
                alt="Reset Academy — Empowering Women To Believe In Their Minds & Bodies, with Dr. Mindy Pelz"
                width={888}
                height={781}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col">
              <SectionLabel>Women&apos;s Health · Fasting · Hormones</SectionLabel>
              <SectionHeading>Reset Academy</SectionHeading>
              <p
                className="font-[family-name:var(--font-noto-serif)] italic text-tic-brown border-l-[3px] border-tic-yellow pl-5 mb-5"
                style={{ fontSize: "17px", lineHeight: "1.8" }}
              >
                &quot;Dr. Mindy is a dear and trusted friend. Her commitment to women&apos;s health began before most people started talking about menopause and perimenopause — she was the first to link cycles to lifestyle protocols. She has been offering free teachings online before it became a trend and paved the way for much of the information we receive today.&quot;
              </p>
              <BodyText className="text-[#333] mb-5">
                Reset Academy is Dr. Mindy Pelz&apos;s membership community for women navigating metabolic health, fasting, and hormonal wellbeing. Dr. Victoria Sterkin is a Master Teacher inside Reset Academy, where she offers a course called <em>Integrating with Authenticity</em> — bringing the Solar-Lunar integration framework to women ready to make lasting change. Not just information, but embodied practice.
              </BodyText>
              <a
                href="https://resetacademy.drmindypelz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-[family-name:var(--font-gordon)] uppercase text-xs tracking-[0.12em] bg-tic-orange text-black px-7 py-3 rounded-sm hover:bg-tic-pink transition-colors w-fit"
              >
                Visit Reset Academy →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── Divider ────────────────────────────────────────────────── */}
      <div className="bg-tic-olive text-center px-2 pt-[50px] md:pt-[100px] pb-[118px] md:pb-[168px]">
        <h2 className="font-[family-name:var(--font-gordon)] uppercase font-bold text-tic-yellow" style={{ fontSize: "clamp(24px, 8vw, 115px)", letterSpacing: "0.09em", marginBottom: "-68px" }}>
          Integration<br />is the way
        </h2>
      </div>

      {/* ── FTC Disclosure ─────────────────────────────────────────── */}
      <section className="bg-white px-6 py-[52px]">
        <div className="max-w-[680px] mx-auto">
          <SectionLabel>Disclosure</SectionLabel>
          <p className="font-[family-name:var(--font-noto-serif)] text-[13px] leading-[1.75] text-tic-dark-grey">
            Some links on this page are affiliate links, which means The Infinity Container may receive a small commission if you make a purchase — at no additional cost to you. We only partner with companies we personally use and trust. Our recommendations are our own and are not influenced by compensation.
          </p>
        </div>
      </section>

    </main>
  );
}
