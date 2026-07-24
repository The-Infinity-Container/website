import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ApproachCards from "@/components/ApproachCards";
import MembershipCards from "@/components/MembershipCards";
import SimpleNewsletter from "@/components/SimpleNewsletter";

export const metadata: Metadata = {
  title: "What is Integration? | The Infinity Container",
  description: "Integration is how an experience becomes part of who you are. Learn what psychedelic integration is, why it doesn't happen on its own, and how the Solar-Lunar Framework maps the full arc from preparation to becoming.",
};

const SOLAR_CAPACITIES = ["Ground", "Anchor"];
const LUNAR_CAPACITIES = ["Weave", "Conduct", "Titrate", "Play", "Kindle", "Shed"];

export default function WhatIsIntegrationPage() {
  return (
    <main className="bg-white">

      {/* ── PAGE HERO ────────────────────────────────────────────────── */}
      <section className="bg-tic-olive px-4 text-center flex flex-col items-center justify-center" style={{ minHeight: "100vh" }}>
        <div className="max-w-[1200px] mx-auto scale-[0.97] md:scale-100">
          <p className="font-[family-name:var(--font-gordon)] text-tic-yellow uppercase tracking-[0.24em] mb-[80px]" style={{ fontSize: "clamp(20px, 6vw, 30px)" }}>
            What is Integration?
          </p>
          <h1 className="font-[family-name:var(--font-gordon)] text-white uppercase tracking-[0.02em] leading-[1.15] mx-auto" style={{ fontSize: "clamp(31px, 4.95vw, 50px)" }}>
            How an experience
          </h1>
          <Image
            src="/assets/integration_handwritten.png"
            alt="becomes a part of who you are"
            width={792}
            height={216}
            className="block mx-auto my-[8px]"
            style={{
              maxWidth: "min(1008px, 95vw)",
              height: "auto"
            }}
          />
          <h2 className="font-[family-name:var(--font-gordon)] text-white uppercase tracking-[0.02em] leading-[1.4] mx-auto mb-[60px]" style={{ fontSize: "clamp(31px, 4.95vw, 50px)", fontWeight: "normal" }}>
            becomes a part of
            <br />
            who you are.
          </h2>
          <p className="font-[family-name:var(--font-noto-serif)] italic text-tic-yellow max-w-[820px] mx-auto" style={{ fontSize: "clamp(20px, 2.57vw, 24px)" }}>
            A journey — psychedelic or otherwise — opens something. Integration is what you do with what opened.
          </p>
        </div>
      </section>

      {/* ── THE WORK SECTION ──────────────────────────────────────── */}
      <section className="bg-white px-3 pt-[100px] pb-[140px]">
        <div className="max-w-[1290px] mx-auto">
          {/* Header row */}
          <div className="mb-[28px]">
            <p className="font-[family-name:var(--font-gordon)] text-tic-dark-grey uppercase mb-[18px]" style={{ fontSize: "25px", letterSpacing: "0.42px", marginBottom: "60px" }}>
              The work
            </p>
            <h3 className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.4] w-full" style={{ fontSize: "clamp(27px, 4.14vw, 43px)" }}>
              More than a conversation
              <br />
              after the fact.
            </h3>
          </div>

          {/* Two-column row: paragraphs and poem */}
          <div className="grid md:grid-cols-[1.35fr_1fr] gap-[72px] items-start mb-[40px]">
            <div className="space-y-[24px] font-[family-name:var(--font-noto-serif)] text-[25px] text-[#222]" style={{ lineHeight: "41px" }}>
              <p>
                Integration is often described as "making meaning" from a psychedelic experience — a session or two of talking about what happened. But meaning that stays in language stays in your head. Real integration lives in the body, in behavior, in relationship, in time.
              </p>
              <p>
                Integration is how insight becomes practice. How an opening becomes a capacity. How the person who returned from the journey and the person living your Tuesday afternoon become the same person.
              </p>
              <p>
                And it applies far beyond psychedelics. Life transitions, grief, awe, birth, loss, love — any experience big enough to change you asks to be integrated. The question is whether it gets what it needs.
              </p>
            </div>

            <div className="font-[family-name:var(--font-noto-serif)] italic text-[22px] leading-[1.65] text-black border-l-[3px] border-tic-yellow pl-[26px]">
              <p>Integration is a birthday<br />
                & a funeral.<br />
                It is playing in the unknown,<br />
                while knowing yourself more.<br />
                It is weaving.<br />
                It is collaborating.<br />
                It is titration & digestion.<br />
                It is process.<br />
                It is practice with awareness.<br />
                It is the evolution of a differentiated,<br />
                connected self.<br />
                It is intra-connected identity.<br />
                It is WE, it is us.<br />
                It is the link between possibility and actuality.<br />
                <br />
                It happens in The Infinity Container.
              </p>
            </div>
          </div>

          {/* Full-width blue link */}
          <div className="mb-[60px]">
            <a href="/blog/blog-what-is-integration" className="font-[family-name:var(--font-gordon)] text-tic-cobalt uppercase tracking-[0.12em] text-[22px] hover:opacity-70 transition-opacity block w-full" style={{ marginTop: "80px" }}>
              <span className="border-b-[1.5px] border-tic-cobalt pb-[3px] inline-block">Dive deeper: read the full essay on the blog →</span>
            </a>
          </div>

          {/* Full-width snake image */}
          <div className="overflow-hidden flex justify-center items-center -mb-[265px] md:mb-0">
            <Image
              src="/assets/snake-shape.svg"
              alt="Integration journey"
              width={600}
              height={800}
              className="w-full max-w-full rotate-[60deg] scale-[0.85] md:scale-100"
              style={{ height: "90vh", objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      {/* ── INTEGRATION IS THE WAY SECTION ───────────────────────── */}
      <section className="bg-white px-6 pt-[100px] pb-[140px]">
        <div className="max-w-[1290px] mx-auto text-center">
          <h2 className="font-[family-name:var(--font-gordon)] uppercase font-bold" style={{ fontSize: "clamp(24px, 8vw, 115px)", color: "#E64E59", letterSpacing: "0.09em", marginBottom: "-68px" }}>
            Integration
            <br />
            is the way
          </h2>
        </div>
      </section>

      {/* ── THE GAP SECTION ───────────────────────────────────────── */}
      <section className="bg-tic-grey px-6 pt-[100px] pb-[140px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Row 1: Label, heading, first paragraph */}
          <div className="mb-[24px] md:mb-[-36px]">
            <p className="font-[family-name:var(--font-gordon)] text-tic-dark-grey uppercase mb-[18px]" style={{ fontSize: "25px", letterSpacing: "0.42px", marginBottom: "60px" }}>
              The gap
            </p>
            <h2 className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.4] mb-[28px]" style={{ fontSize: "clamp(21px, 3.24vw, 34px)" }}>
              It doesn't happen on its own.
            </h2>
            <p className="font-[family-name:var(--font-noto-serif)] text-[23px] text-[#222]" style={{ lineHeight: "37px" }}>
              The experience is a doorway — but most people are handed the doorway and nothing else. No preparation beforehand. No container afterward. No community to witness the becoming.
            </p>
          </div>

          {/* Row 2: Two-column grid with italic text and hand image */}
          <div className="grid md:grid-cols-[2fr_3fr] gap-[60px] items-center mb-[60px]">
            <div className="flex items-center font-[family-name:var(--font-noto-serif)] italic text-tic-brown border-l-[3px] border-tic-brown pl-[28px] min-h-[300px]" style={{ fontSize: "32px", lineHeight: "1.6" }}>
              Insight without integration fades. The journey that could have changed everything becomes a story you tell.
            </div>
            <div>
              <Image
                src="/assets/red-hand.svg"
                alt=""
                width={600}
                height={600}
                className="h-auto"
                style={{ width: "90%", marginTop: "3em" }}
                aria-hidden
              />
            </div>
          </div>

          {/* Row 3: Full-width paragraph and link */}
          <div>
            <p className="font-[family-name:var(--font-noto-serif)] text-[23px] mb-[24px] text-[#222]" style={{ lineHeight: "37px" }}>
              Integration takes structure, rhythm, and relationship. It takes a system that honors both the preparation before and the long, spiraling work after. That is what The Infinity Container was built for.
            </p>

            <a href="/blog/what-is-integration" className="font-[family-name:var(--font-gordon)] text-tic-cobalt uppercase tracking-[0.12em] text-[22px] hover:opacity-70 transition-opacity inline-block" style={{ marginTop: "4px" }}>
              <span className="border-b-[1.5px] border-tic-cobalt pb-[3px] inline-block">Dive deeper: why integration needs a container →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY CAPACITIES SECTION ───────────────────────────────── */}
      <section className="bg-white px-6 pt-[100px] pb-[140px]">
        <div className="max-w-[90vw] mx-auto">
          <div className="grid md:grid-cols-[1fr_1fr] gap-[60px] items-start mb-[60px]">
            <div>
              <p className="font-[family-name:var(--font-gordon)] text-tic-dark-grey uppercase mb-[18px]" style={{ fontSize: "25px", letterSpacing: "0.42px", marginBottom: "60px" }}>
                Why capacities
              </p>
              <h2 className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.4] w-full mb-[28px]" style={{ fontSize: "clamp(21px, 3.24vw, 34px)" }}>
                Who are you becoming?
              </h2>

              <p className="font-[family-name:var(--font-noto-serif)] text-[23px] mb-[24px] text-[#222]" style={{ lineHeight: "37px" }}>
                Most learning asks: what can you do? Integration asks a different question — who are you becoming?
              </p>

              <p className="font-[family-name:var(--font-noto-serif)] text-[23px] mb-[24px] text-[#222]" style={{ lineHeight: "37px" }}>
                That is why the framework is built around behavioral capacities, not skills. A skill is something you deploy in a context. A capacity changes what you are able to be — across contexts, across relationships, across time.
              </p>
            </div>

            <Image
              src="/assets/head-olive.svg"
              alt=""
              width={570}
              height={600}
              className="w-full h-auto"
              aria-hidden
            />
          </div>

          <div className="grid md:grid-cols-2 gap-[24px] my-[44px]">
            <div className="bg-tic-grey rounded px-[28px] py-[32px]">
              <h4 className="font-[family-name:var(--font-gordon)] font-normal text-[24px] uppercase tracking-[0.14em] mb-[14px]">
                Skills, learned in isolation
              </h4>
              <p className="font-[family-name:var(--font-noto-serif)] text-[23px] text-[#2a2a2a] font-medium" style={{ lineHeight: "37px" }}>
                Acquired in a course. Practiced alone. Deployed when remembered. They add to what you can do — but leave who you are untouched.
              </p>
            </div>
            <div className="bg-tic-yellow rounded px-[28px] py-[32px]">
              <h4 className="font-[family-name:var(--font-gordon)] font-normal text-[24px] uppercase tracking-[0.14em] mb-[14px]">
                Capacities, built in community
              </h4>
              <p className="font-[family-name:var(--font-noto-serif)] text-[23px] text-[#2a2a2a] font-medium" style={{ lineHeight: "37px" }}>
                Developed in relationship, over time, inside a container. They change what is available to you — more resilience, less burnout, a deeper sense of oneness with your life and the people in it.
              </p>
            </div>
          </div>

          <p className="font-[family-name:var(--font-noto-serif)] text-[23px] text-[#222]" style={{ marginTop: "6rem", marginBottom: "6rem", lineHeight: "37px" }}>
            This is why we integrate rather than simply learn. Insight that stays intellectual fades. Capacity that is practiced in community becomes who you are.
          </p>

          <a href="/blog/what-is-integration" className="font-[family-name:var(--font-gordon)] text-tic-cobalt uppercase tracking-[0.12em] text-[22px] hover:opacity-70 transition-opacity inline-block" style={{ marginTop: "4px" }}>
            <span className="border-b-[1.5px] border-tic-cobalt pb-[3px] inline-block">Dive deeper: capacities, not skills →</span>
          </a>
        </div>
      </section>

      {/* ── INTEGRATION IS THE WAY / OUR SYSTEM ────────────────────── */}
      <section className="bg-black px-6 pt-[100px] pb-[140px]">
        <div className="max-w-[1290px] mx-auto text-center mb-[80px]">
          <h2 className="font-[family-name:var(--font-gordon)] uppercase font-bold" style={{ fontSize: "clamp(24px, 8vw, 115px)", color: "white", letterSpacing: "0.09em", marginBottom: "-68px" }}>
            Integration
            <br />
            is the way
          </h2>
          <Image
            src="/assets/lunar-pink-transparent-bg.svg"
            alt="Solar-Lunar Framework"
            width={729}
            height={729}
            className="mx-auto w-full h-auto -mb-[50px] mt-[73px] md:mb-0 md:mt-0"
            style={{ maxWidth: "875px" }}
            aria-hidden
          />
        </div>

        <div id="our-system">
          <div className="max-w-[1280px] mx-auto">
            <p className="font-[family-name:var(--font-gordon)] uppercase" style={{ fontSize: "25px", letterSpacing: "0.42px", marginBottom: "60px", color: "#D5D06A" }}>
              Our system
            </p>
            <h2 className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.4] mb-[28px]" style={{ fontSize: "clamp(23px, 3.6vw, 38px)", color: "white" }}>
              The Solar-Lunar Framework
            </h2>
            <p className="font-[family-name:var(--font-noto-serif)] text-[25px] mb-[44px]" style={{ color: "white", lineHeight: "41px" }}>
              Our proprietary integration system — built on behavioral science, somatic practice, and contemplative traditions. It maps the full arc of transformative experience across two spirals:
            </p>
          </div>

          <div className="max-w-[1280px] mx-auto">
            <ApproachCards />
          </div>

<div className="mb-[60px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] mb-[44px] max-w-[1280px] mx-auto">
              {["Ground", "Anchor", "Weave", "Titrate", "Play", "Kindle", "Shed"].map((capacity, index) => {
                const isPink = capacity === "Ground" || capacity === "Play";
                const borderColor = isPink ? "#7C3537" : "#236C80";
                const textColor = isPink ? "#F56E71" : "#6FB3C5";

                return (
                  <div key={capacity} className="rounded overflow-hidden flex flex-col" style={{ border: `3px solid ${borderColor}` }}>
                    <div className="flex-1 bg-black overflow-hidden">
                      <Image
                        src={`/assets/${capacity.toLowerCase()}.png`}
                        alt={capacity}
                        width={225}
                        height={270}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-black text-center py-[16px]">
                      <p className="font-[family-name:var(--font-gordon)] text-[14px] uppercase tracking-[0.12em]" style={{ color: textColor }}>
                        {capacity}
                      </p>
                    </div>
                  </div>
                );
              })}
              <div className="border-2 border-dashed rounded flex items-center justify-center bg-black" style={{ borderColor: "#236C80" }}>
                <p className="font-[family-name:var(--font-noto-serif)] text-[14px] leading-[1.6] text-white text-center px-[16px]">
                  ...and thirteen more,<br />practiced inside<br />the container.
                </p>
              </div>
            </div>
          </div>

          <p className="font-[family-name:var(--font-noto-serif)] italic text-[25px] text-white text-center max-w-[1000px] mx-auto" style={{ lineHeight: "41px" }}>
            The framework is not a curriculum you complete. It is a practice you return to — a spiral you travel again and again, each time from somewhere new.
          </p>
        </div>
      </section>

      {/* ── HOW YOU LIVE IT ───────────────────────────────────────── */}
      <section className="bg-white px-6 pt-[100px] pb-[140px]">
        <div className="max-w-[90vw] mx-auto">
          <p className="font-[family-name:var(--font-gordon)] text-tic-dark-grey uppercase mb-[18px]" style={{ fontSize: "25px", letterSpacing: "0.42px", marginBottom: "60px" }}>
            How you live it
          </p>
          <h2 className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.4] mb-[44px]" style={{ fontSize: "clamp(21px, 3.24vw, 34px)" }}>
            The framework isn't something
            <br />
            you read about here.<br />
            It's something you practice inside of.
          </h2>

          <div className="grid md:grid-cols-[70%_30%] gap-[60px] items-start mb-[44px]">
            <p className="font-[family-name:var(--font-noto-serif)] text-[23px] text-[#222]" style={{ lineHeight: "37px" }}>
              Every session, theme, and program inside The Infinity Container is organized within the Solar-Lunar Framework. Each month moves through a capacity. The community moves through it together.
            </p>
            <Image
              src="/assets/shell.svg"
              alt="Shell"
              width={360}
              height={450}
              className="h-auto mx-auto md:mx-0"
              style={{ width: "43%" }}
              aria-hidden
            />
          </div>

          <MembershipCards
            cards={[
              {
                label: "PRACTICE MEMBERSHIP",
                heading: "PRACTICE THE FRAMEWORK, LIVE.",
                description: "Weekly Friday practice sessions, monthly integration themes, and a community moving through the spirals together. You don't study the framework — you experience it, one capacity at a time.",
                buttonText: "EXPLORE THE PRACTICE MEMBERSHIP →",
                buttonHref: "https://the-infinity-container.mn.co/users/onboarding/plans/1898747",
                backgroundColor: "red",
              },
              {
                label: "PRACTITIONER MEMBERSHIP",
                heading: "PRACTICE IT — AND LEARN TO HOLD IT.",
                description: "Everything in Practice, plus the professional layer: frameworks you can bring to your clients, practitioner-focused teaching, and a community of peers doing their own work alongside their client work.",
                buttonText: "EXPLORE THE PRACTITIONER MEMBERSHIP →",
                buttonHref: "https://the-infinity-container.mn.co/users/onboarding/plans/1483936",
                backgroundColor: "blue",
              },
            ]}
          />

          <div className="text-center" style={{ marginTop: "80px" }}>
            <a href="/find-my-membership" className="font-[family-name:var(--font-noto-serif)] italic text-black hover:opacity-70 transition-opacity inline-block underline" style={{ fontSize: "23px", lineHeight: "37px" }}>
              Not sure which fits? Take the 7-question quiz →
            </a>
          </div>
        </div>
      </section>

      {/* ── KEEP GOING ──────────────────────────────────────────────── */}
      <section className="px-6 pt-[100px] pb-[140px]" style={{ backgroundColor: "#D5D06A" }}>
        <div className="max-w-[90vw] mx-auto">
          <p className="font-[family-name:var(--font-gordon)] uppercase mb-[44px] text-center" style={{ fontSize: "clamp(57px, 9.72vw, 96px)", color: "black", letterSpacing: "0.09em", marginBottom: "-20px" }}>
            Keep going.
          </p>
          <p className="font-[family-name:var(--font-noto-serif)] italic text-[23px] mx-auto text-center mb-[30px]" style={{ color: "#7C3537", lineHeight: "37px", maxWidth: "70vw" }}>
            You don't have to be ready to join anything. Integration happens a little at a time — start at whatever depth feels right.
          </p>

          <div className="flex justify-center mb-[60px]" style={{ position: "relative", zIndex: 10 }}>
            <Image
              src="/assets/dropper.svg"
              alt=""
              width={200}
              height={200}
              className="h-auto -mb-[122px] md:mb-0"
              style={{ width: "calc(var(--spacing) * 51)" }}
              aria-hidden
            />
          </div>

          <div className="grid grid-cols-1 xl:[grid-template-columns:1fr_1.1fr_1fr] gap-[44px] max-w-[1200px] mx-auto xl:-mt-[135px]">
            <div className="bg-white px-[26px] py-[36px] rounded flex flex-col justify-between">
              <div>
                <h3 className="font-[family-name:var(--font-gordon)] text-[16px] uppercase tracking-[0.02em] mb-[24px]" style={{ color: "#3A3A3A" }}>
                  Read
                </h3>
                <p className="font-[family-name:var(--font-gordon)] text-[23px] leading-[1.3] mb-[18px]" style={{ color: "#2a2a2a" }}>
                  Go deeper on the blog
                </p>
                <p className="font-[family-name:var(--font-noto-serif)] text-[13px] leading-[1.6] text-[#2a2a2a]">
                  The complete guide to integration — the science, the practice, and the lived experience of the work. Free, no signup.
                </p>
              </div>
              <a href="/blog/blog-what-is-integration" className="font-[family-name:var(--font-gordon)] text-tic-cobalt uppercase tracking-[0.12em] text-[12px] border-b-[1.5px] border-tic-cobalt pb-[3px] hover:opacity-70 transition-opacity inline-block mt-[28px]">
                What is Integration? The Complete Guide →
              </a>
            </div>

            <div className="bg-white px-[26px] py-[36px] rounded flex flex-col justify-between">
              <div>
                <h3 className="font-[family-name:var(--font-gordon)] text-[16px] uppercase tracking-[0.02em] mb-[24px]" style={{ color: "#3A3A3A" }}>
                  Receive
                </h3>
                <p className="font-[family-name:var(--font-gordon)] text-[23px] leading-[1.3] mb-[18px]" style={{ color: "#2a2a2a" }}>
                  Get the newsletter
                </p>
                <p className="font-[family-name:var(--font-noto-serif)] text-[13px] leading-[1.6] text-[#2a2a2a]">
                  Integration frameworks, somatic tools, and practitioner resources — rooted in the Solar-Lunar system. Written by Dr. Victoria Sterkin.
                </p>
              </div>
              <div className="mt-[28px]">
                <SimpleNewsletter />
              </div>
            </div>

            <div className="bg-white px-[26px] py-[36px] rounded flex flex-col justify-between">
              <div>
                <h3 className="font-[family-name:var(--font-gordon)] text-[16px] uppercase tracking-[0.02em] mb-[24px]" style={{ color: "#3A3A3A" }}>
                  Join a call
                </h3>
                <p className="font-[family-name:var(--font-gordon)] text-[23px] leading-[1.3] mb-[18px]" style={{ color: "#2a2a2a" }}>
                  Come to a community call
                </p>
                <p className="font-[family-name:var(--font-noto-serif)] text-[12px] leading-[1.6] text-[#2a2a2a]">
                  Come to a community call. A free monthly gathering — experience the community and the practice before committing to anything. Join the free membership to get the call link.
                </p>
              </div>
              <a href="/community-call" className="font-[family-name:var(--font-gordon)] text-tic-cobalt uppercase tracking-[0.12em] text-[12px] border-b-[1.5px] border-tic-cobalt pb-[3px] hover:opacity-70 transition-opacity inline-block mt-[28px]">
                About the community call →
              </a>
            </div>
          </div>

          <div className="flex justify-center mt-[60px]">
            <Image
              src="/assets/satellite.svg"
              alt=""
              width={200}
              height={200}
              className="h-auto"
              style={{ width: "calc(var(--spacing) * 100)" }}
              aria-hidden
            />
          </div>
        </div>
      </section>

    </main>
  );
}
