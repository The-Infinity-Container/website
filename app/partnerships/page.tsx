import type { Metadata } from "next";
import Image from "next/image";
import ScribbleBall from "@/components/ScribbleBall";

export const metadata: Metadata = {
  title: "Partnerships — The Infinity Container",
  description:
    "Our curated partners — chosen for care, integrity, and a shared commitment to supporting the body, community and conscious evolution.",
};

export default function PartnershipsPage() {
  return (
    <main className="pt-14">

      {/* ── Header — olive, scribble balls, intro copy ────────────── */}
      <section className="relative bg-tic-yellow px-6 md:px-10 pt-14 pb-16 overflow-hidden">
        <div className="flex items-center justify-center gap-4 md:gap-10">
          <ScribbleBall color="#e64e59" className="hidden sm:block sm:w-14 sm:h-14 md:w-20 md:h-20 shrink-0" />
          <h1
            className="text-center font-[family-name:var(--font-gordon)] uppercase tracking-wide leading-none text-[2rem] md:text-[clamp(2.5rem,8vw,5.5rem)]"
            style={{ color: "#7c3537" }}
          >
            Partnerships
          </h1>
          <ScribbleBall color="#e64e59" className="hidden sm:block sm:w-14 sm:h-14 md:w-20 md:h-20 shrink-0" />
        </div>

        {/* Spacer matches the image column (w-48) + gap-10 used below, so this
            paragraph's left edge lines up with the Lacuna/Reset paragraph text. */}
        <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row gap-10 items-start">
          <div className="hidden md:block w-48 shrink-0" aria-hidden="true" />

          <div className="relative max-w-2xl">
            <ScribbleBall
              color="#dfe3de"
              className="hidden md:block absolute -left-28 top-0 w-24 h-24"
            />
            <ScribbleBall
              color="#ed7e21"
              className="hidden md:block absolute -right-24 top-2 w-14 h-14"
            />
            <ScribbleBall
              color="#0b0d10"
              className="hidden md:block absolute -right-32 top-24 w-16 h-16"
            />

            <p
              className="font-[family-name:var(--font-noto-serif)] font-bold text-[23px] text-[#222]"
              style={{ lineHeight: "37px" }}
            >
              Partnership for us, is relational. We&apos;re creating an ecosystem.
            </p>
            <p
              className="font-[family-name:var(--font-noto-serif)] text-[23px] text-[#222] mt-3"
              style={{ lineHeight: "37px" }}
            >
              Each offering shared here reflects work we engage with personally and feel
              confident standing behind. We choose partnerships rooted in care, integrity,
              and a shared commitment to supporting the body, community and conscious
              evolution.
            </p>
            <p
              className="font-[family-name:var(--font-noto-serif)] text-[23px] text-[#222] mt-6"
              style={{ lineHeight: "37px" }}
            >
              Some of these partnerships include affiliate links. If you feel called to
              purchase through them, we receive a small commission at no extra cost to
              you. Some of these partnerships also include a discount for you, as a gift
              to our community. This reciprocity supports the ongoing creation of The
              Infinity Container, keeping memberships at an affordable rate.
            </p>
          </div>
        </div>
      </section>

      {/* ── Lacuna Medicinals — orange ─────────────────────────────── */}
      <section className="bg-tic-orange px-6 md:px-10 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-48 shrink-0 flex justify-center md:justify-start">
            <Image
              src="/assets/lacuna-medicinals-logo.png"
              alt="Lacuna Medicinals"
              width={800}
              height={1171}
              className="w-40 md:w-48 h-auto"
            />
          </div>

          <div
            className="font-[family-name:var(--font-noto-serif)] text-[23px] text-[#222] space-y-5"
            style={{ lineHeight: "37px" }}
          >
            <p>
              <strong>Lacuna Medicinals</strong> is a small, women-owned endeavor rooted
              in deep love and reverence for plants and fungi. Through our own mystical
              experiences with the natural world, we have come to understand
              that—contrary to many modern paradigms—plants and fungi are not merely
              isolated chemicals offering miraculous cures. They are conscious,
              intelligent life-forms that are constantly communicating with us.
            </p>
            <p>
              With that said, Lacuna Medicinals is both an apothecary and an education
              hub—a space where people can learn &amp; source medicine grown with
              integrity and deep consideration for the communities we live among. Our
              mushroom medicines are cultivated in-house and our entire product line is
              crafted by our very own hands, allowing us to be present for every step of
              the process.
            </p>
            <p>
              Bridging ancient practices with the evolving field of modern medicine is
              both our passion and our life&apos;s work. Our intention is not only to
              enrich lives, but to remind each of us of the innate power we carry
              within.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 pt-2">
              <a
                href="https://lacunamedicinals.com/?ref=INFINITY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-tic-olive text-tic-yellow font-[family-name:var(--font-gordon)] uppercase tracking-wide text-center leading-tight text-sm px-6 py-3 shadow-[3px_4px_0_rgba(0,0,0,0.25)] -rotate-1 hover:rotate-0 transition-transform"
              >
                Explore With<br />Our Link
              </a>
              <p className="font-bold text-center md:text-left">10% off Discount Code: INFINITY</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reset Academy — sage ───────────────────────────────────── */}
      <section className="px-6 md:px-10 py-16" style={{ backgroundColor: "#dfe3de" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          <div className="w-full md:w-48 shrink-0 flex justify-center md:justify-start mt-1">
            <Image
              src="/assets/reset-academy-logo.png"
              alt="Reset Academy — Empowering Women To Believe In Their Minds & Bodies, with Dr. Mindy Pelz"
              width={1235}
              height={360}
              className="w-82 md:w-48 h-auto shrink-0 2xl:w-[348px] 2xl:-ml-[157px]"
            />
          </div>

          <div
            className="font-[family-name:var(--font-noto-serif)] text-[23px] text-[#222] space-y-5"
            style={{ lineHeight: "37px" }}
          >
            <p>
              <strong>The Reset Academy</strong> is <strong>Dr. Mindy Pelz&apos;s
              membership program</strong> designed to help women improve metabolic
              health, balance hormones, and build a sustainable fasting lifestyle using
              science-backed tools.
            </p>
            <p>
              Inside the Academy, members learn how to work with their body instead of
              against it. Dr. Mindy teaches women how to align fasting, food, movement,
              and lifestyle habits with their hormonal cycle so they can improve
              metabolism, support brain health, and increase energy.
            </p>
            <p>
              The Reset Academy also includes courses taught by a group of expert
              Master Teachers, <strong>including Dr Victoria Sterkin, founder of The
              Infinity Container.</strong> These practitioners bring specialized
              training in areas such as nervous system regulation, functional
              nutrition, hormone health, mindset, and emotional healing. Their courses
              give members practical tools to address deeper root causes of health
              challenges while supporting the fasting lifestyle Dr. Mindy teaches.
            </p>

            <div className="pt-2 text-center md:text-left">
              <a
                href="https://resetacademy.drmindypelz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-tic-yellow font-[family-name:var(--font-gordon)] uppercase tracking-wide text-center leading-tight text-sm px-6 py-3 shadow-[3px_4px_0_rgba(0,0,0,0.25)] rotate-1 hover:rotate-0 transition-transform"
                style={{ backgroundColor: "#f56e71" }}
              >
                Explore With<br />Our Link
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
