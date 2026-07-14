import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "What is Integration? | The Infinity Container",
  description: "Integration is how an experience becomes part of who you are. Learn what psychedelic integration is, why it doesn't happen on its own, and how the Solar-Lunar Framework maps the full arc from preparation to becoming.",
};

export default function WhatIsIntegrationPage() {
  return (
    <main className="bg-white">

      {/* ── PAGE HERO ────────────────────────────────────────────────── */}
      <section className="bg-tic-olive px-6 text-center" style={{ padding: "100px 24px 90px" }}>
        <div className="max-w-[1080px] mx-auto">
          <p className="font-[family-name:var(--font-gordon)] text-tic-yellow uppercase tracking-[0.24em] mb-[24px]" style={{ fontSize: "11px" }}>
            What is Integration?
          </p>
          <h1 className="font-[family-name:var(--font-gordon)] text-white uppercase tracking-[0.02em] leading-[1.15] max-w-[760px] mx-auto" style={{ fontSize: "clamp(34px, 5.5vw, 56px)" }}>
            How an experience
          </h1>
          <Image
            src="/assets/integration_handwritten.png"
            alt="becomes a part of who you are"
            width={440}
            height={120}
            className="block mx-auto my-[4px]"
            style={{
              maxWidth: "min(440px, 72vw)",
              height: "auto"
            }}
          />
          <p className="font-[family-name:var(--font-noto-serif)] italic text-tic-yellow max-w-[560px] mx-auto" style={{ fontSize: "clamp(17px, 2.2vw, 21px)" }}>
            A journey — psychedelic or otherwise — opens something. Integration is what you do with what opened.
          </p>
        </div>
      </section>

      {/* ── THE WORK SECTION ──────────────────────────────────────── */}
      <section className="bg-white px-6 py-[100px]">
        <div className="max-w-[1080px] mx-auto grid md:grid-cols-[1.35fr_1fr] gap-[72px] items-start">
          <div>
            <p className="font-[family-name:var(--font-gordon)] text-tic-dark-grey uppercase tracking-[0.22em] mb-[18px]" style={{ fontSize: "11px" }}>
              The work
            </p>
            <h2 className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.2] mb-[28px]" style={{ fontSize: "clamp(26px, 4vw, 42px)" }}>
              More than a conversation after the fact.
            </h2>
            <div className="space-y-[24px] font-[family-name:var(--font-noto-serif)] text-[17px] leading-[1.85] text-[#222]">
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
            <div className="mt-[40px]">
              <a href="/blog/what-is-integration" className="font-[family-name:var(--font-gordon)] text-tic-cobalt uppercase tracking-[0.12em] text-[12px] border-b-[1.5px] border-tic-cobalt pb-[3px] hover:opacity-70 transition-opacity inline-block" style={{ marginTop: "4px" }}>
                Dive deeper: read the full essay on the blog →
              </a>
            </div>
          </div>

          <div>
            <div className="font-[family-name:var(--font-noto-serif)] italic text-[15.5px] leading-[1.65] text-black border-l-[3px] border-tic-yellow pl-[26px]">
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
        </div>
      </section>

      {/* ── DIVIDER ────────────────────────────────────────────────── */}
      <WayDivider />

      {/* ── THE GAP SECTION ───────────────────────────────────────── */}
      <section className="bg-tic-grey px-6 py-[100px]">
        <div className="max-w-[680px] mx-auto">
          <p className="font-[family-name:var(--font-gordon)] text-tic-dark-grey uppercase tracking-[0.22em] mb-[18px]" style={{ fontSize: "11px" }}>
            The gap
          </p>
          <h2 className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.2] mb-[28px]" style={{ fontSize: "clamp(26px, 4vw, 42px)" }}>
            It doesn't happen on its own.
          </h2>

          <Image
            src="/assets/red-hand.svg"
            alt=""
            width={200}
            height={200}
            className="float-right ml-[24px] mb-[16px] w-[200px] h-auto"
            aria-hidden
          />

          <p className="font-[family-name:var(--font-noto-serif)] text-[17px] leading-[1.85] mb-[24px] text-[#222]">
            The experience is a doorway — but most people are handed the doorway and nothing else. No preparation beforehand. No container afterward. No community to witness the becoming.
          </p>

          <p className="font-[family-name:var(--font-noto-serif)] italic text-tic-brown border-l-[3px] border-tic-brown pl-[28px] my-[36px]" style={{ fontSize: "clamp(20px, 3vw, 26px)", lineHeight: "1.6" }}>
            Insight without integration fades. The journey that could have changed everything becomes a story you tell.
          </p>

          <p className="font-[family-name:var(--font-noto-serif)] text-[17px] leading-[1.85] mb-[24px] text-[#222]">
            Integration takes structure, rhythm, and relationship. It takes a system that honors both the preparation before and the long, spiraling work after. That is what The Infinity Container was built for.
          </p>

          <a href="/blog/what-is-integration" className="font-[family-name:var(--font-gordon)] text-tic-cobalt uppercase tracking-[0.12em] text-[12px] border-b-[1.5px] border-tic-cobalt pb-[3px] hover:opacity-70 transition-opacity inline-block" style={{ marginTop: "4px" }}>
            Dive deeper: why integration needs a container →
          </a>
        </div>
      </section>

      {/* ── WHY CAPACITIES SECTION ───────────────────────────────── */}
      <section className="bg-white px-6 py-[100px]">
        <div className="max-w-[680px] mx-auto">
          <p className="font-[family-name:var(--font-gordon)] text-tic-dark-grey uppercase tracking-[0.22em] mb-[18px]" style={{ fontSize: "11px" }}>
            Why capacities
          </p>
          <h2 className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.2] mb-[28px]" style={{ fontSize: "clamp(26px, 4vw, 42px)" }}>
            Who are you becoming?
          </h2>

          <Image
            src="/assets/head.svg"
            alt=""
            width={190}
            height={200}
            className="float-right -mt-[20px] mb-[16px] ml-[24px] w-[190px] h-auto"
            aria-hidden
          />

          <p className="font-[family-name:var(--font-noto-serif)] text-[17px] leading-[1.85] mb-[24px] text-[#222]">
            Most learning asks: what can you do? Integration asks a different question — who are you becoming?
          </p>

          <p className="font-[family-name:var(--font-noto-serif)] text-[17px] leading-[1.85] mb-[24px] text-[#222]">
            That is why the framework is built around behavioral capacities, not skills. A skill is something you deploy in a context. A capacity changes what you are able to be — across contexts, across relationships, across time.
          </p>

          <div className="grid md:grid-cols-2 gap-[24px] my-[44px]">
            <div className="bg-tic-grey rounded px-[28px] py-[32px]">
              <h4 className="font-[family-name:var(--font-gordon)] font-normal text-[15px] uppercase tracking-[0.14em] mb-[14px]">
                Skills, learned in isolation
              </h4>
              <p className="text-[14.5px] leading-[1.7] text-[#2a2a2a]">
                Acquired in a course. Practiced alone. Deployed when remembered. They add to what you can do — but leave who you are untouched.
              </p>
            </div>
            <div className="bg-tic-yellow rounded px-[28px] py-[32px]">
              <h4 className="font-[family-name:var(--font-gordon)] font-normal text-[15px] uppercase tracking-[0.14em] mb-[14px]">
                Capacities, built in community
              </h4>
              <p className="text-[14.5px] leading-[1.7] text-[#2a2a2a]">
                Developed in relationship, over time, inside a container. They change what is available to you — more resilience, less burnout, a deeper sense of oneness with your life and the people in it.
              </p>
            </div>
          </div>

          <p className="font-[family-name:var(--font-noto-serif)] text-[17px] leading-[1.85] mb-[24px] text-[#222]">
            This is why we integrate rather than simply learn. Insight that stays intellectual fades. Capacity that is practiced in community becomes who you are.
          </p>

          <a href="/blog/what-is-integration" className="font-[family-name:var(--font-gordon)] text-tic-cobalt uppercase tracking-[0.12em] text-[12px] border-b-[1.5px] border-tic-cobalt pb-[3px] hover:opacity-70 transition-opacity inline-block" style={{ marginTop: "4px" }}>
            Dive deeper: capacities, not skills →
          </a>
        </div>
      </section>

      {/* ── DIVIDER ────────────────────────────────────────────────── */}
      <WayDivider />

    </main>
  );
}

function WayDivider() {
  return (
    <div className="bg-tic-olive px-6 text-center" style={{ padding: "90px 24px" }}>
      <span
        className="font-[family-name:var(--font-gordon)] text-tic-yellow uppercase tracking-[0.32em]"
        style={{ fontSize: "clamp(20px, 3.4vw, 34px)" }}
      >
        Integration
        <br />
        is the way
      </span>
    </div>
  );
}
