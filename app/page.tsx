import Image from "next/image";
import Link from "next/link";
import InlineNewsletter from "@/components/InlineNewsletter";

const MEMBERSHIP_URL = "https://the-infinity-container.mn.co/landing";
const SIGNIN_URL = "https://the-infinity-container.mn.co/sign_in";

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <header className="relative bg-black text-center overflow-hidden px-6 pt-[110px] pb-[120px]">
        <div className="relative w-[84px] h-[84px] mx-auto mb-11 rounded-full overflow-hidden border-[1.5px] border-dashed border-tic-yellow flex items-center justify-center bg-black">
          <Image
            src="/assets/hero-logo.svg"
            alt="The Infinity Container"
            width={96}
            height={96}
            priority
            className="w-12 h-12 object-contain"
          />
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/assets/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>

        <p
          className="font-[family-name:var(--font-gordon)] text-tic-yellow uppercase tracking-[0.15em] max-w-[900px] mx-auto mb-9 leading-snug"
          style={{ fontSize: "clamp(1.125rem, 2.4vw, 1.75rem)" }}
        >
          Psychedelic Integration <span className="mx-2">·</span> Life Transitions{" "}
          <span className="mx-2">·</span> Expanded Experience
        </p>

        <h1
          className="font-[family-name:var(--font-gordon)] text-white uppercase tracking-[0.03em] leading-[1.12] max-w-[1300px] mx-auto mb-[26px]"
          style={{ fontSize: "clamp(2.75rem, 7.5vw, 6rem)" }}
        >
          This is where
          <br />
          the work
          <br />
          continues.
        </h1>

        <p
          className="font-[family-name:var(--font-noto-serif)] italic text-tic-yellow mb-[30px]"
          style={{ fontSize: "clamp(1.5rem, 3.2vw, 2rem)" }}
        >
          Prepare well. Integrate fully. Keep going.
        </p>

        <p
          className="font-[family-name:var(--font-noto-serif)] text-tic-grey max-w-[640px] mx-auto mb-11 leading-[1.75]"
          style={{ fontSize: "clamp(1.125rem, 2.2vw, 1.375rem)" }}
        >
          Psychedelic integration, life transitions, and expanded experience — for the people
          doing the work and the practitioners who hold that space.
        </p>

        <a
          href={MEMBERSHIP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-lg bg-tic-salmon text-black px-14 py-6 rounded-sm hover:bg-tic-pink transition-colors"
        >
          Find My Membership →
        </a>
        <a
          href={SIGNIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-5 text-lg text-tic-yellow"
        >
          Already a member? Sign in
        </a>
      </header>

      <WayDivider />

      {/* ── What is this? ──────────────────────────────────────────── */}
      <section className="bg-white px-6 py-[110px]">
        <div className="max-w-[1080px] mx-auto">
          <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.22em] text-[11px] text-tic-dark-grey mb-[18px]">
            What is this?
          </p>
          <h2
            className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.2] mb-[34px] max-w-[700px]"
            style={{ fontSize: "clamp(28px, 4.4vw, 44px)" }}
          >
            Integration support for the people who hold everyone else.
          </h2>

          {/* Mobile: stacked, Desktop: 2-column grid */}
          <div className="flex flex-col gap-8 md:gap-16 w-full md:grid" style={{ gridTemplateColumns: "1.4fr 1fr", alignItems: "start" }}>
            {/* Mobile: Integration image first */}
            <div className="md:hidden order-1 w-full">
              <Image
                src="/assets/integration.svg"
                alt="Integration"
                width={320}
                height={100}
                className="w-full h-auto mb-8"
              />
            </div>

            {/* Mobile: Poem appears after image, before text */}
            <div className="md:hidden order-2 w-full font-[family-name:var(--font-noto-serif)] italic text-[17px] leading-[1.9] text-black border-l-[3px] border-tic-yellow pl-[26px]">
              Integration is a birthday<br />
              &amp; a funeral.<br />
              It is playing in the unknown,<br />
              while knowing yourself more.<br />
              It is weaving.<br />
              It is collaborating.<br />
              It is titration &amp; digestion.<br />
              It is process.<br />
              It is practice with awareness.
              <p className="font-[family-name:var(--font-noto-serif)] not-italic text-[11px] text-tic-dark-grey mt-[14px]">
                [full poem + handwritten "Integration" SVG from current site]
              </p>
            </div>

            {/* Text content - appears third on mobile, first on desktop */}
            <div className="flex flex-col gap-[22px] order-3 md:order-1 w-full">
              <p className="font-[family-name:var(--font-noto-serif)] text-[16.5px] leading-[1.8] text-[#2a2a2a]">
                The Infinity Container is a community built for the full arc — preparation before the experience, and integration after. We work inside the Solar-Lunar Framework, a proprietary system rooted in behavioral science, somatic practice, and contemplative traditions.
              </p>
              <p className="font-[family-name:var(--font-noto-serif)] text-[16.5px] leading-[1.8] text-[#2a2a2a]">
                We are here for practitioners, therapists, coaches, healers, and helpers of all kinds — and for anyone navigating psychedelic experiences, life transitions, or expanded states who is ready to do the work with real support.
              </p>
              <p className="font-[family-name:var(--font-noto-serif)] text-[16.5px] leading-[1.8] text-[#2a2a2a]">
                Integration is not therapy. It is not a debrief. It is an ongoing practice of becoming — and TIC is built to hold that practice over time.
              </p>
            </div>

            {/* Desktop: Integration image and poem in right column */}
            <div className="hidden md:flex flex-col gap-8 md:order-2">
              <Image
                src="/assets/integration.svg"
                alt="Integration"
                width={320}
                height={100}
                className="w-full h-auto"
              />
              <div className="font-[family-name:var(--font-noto-serif)] italic text-[17px] leading-[1.9] text-black border-l-[3px] border-tic-yellow pl-[26px]">
                Integration is a birthday<br />
                &amp; a funeral.<br />
                It is playing in the unknown,<br />
                while knowing yourself more.<br />
                It is weaving.<br />
                It is collaborating.<br />
                It is titration &amp; digestion.<br />
                It is process.<br />
                It is practice with awareness.
                <p className="font-[family-name:var(--font-noto-serif)] not-italic text-[11px] text-tic-dark-grey mt-[14px]">
                  [full poem + handwritten "Integration" SVG from current site]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Integration Section ────────────────────────────────────── */}
      <section className="px-6 py-[66px] w-full overflow-hidden" style={{ backgroundColor: "#D5D06A" }}>
        <div className="max-w-[920px] mx-auto px-6 md:px-0">
          <Image
            src="/assets/integration.svg"
            alt="Integration"
            width={420}
            height={130}
            className="w-full h-auto mb-12"
          />
          <p className="font-[family-name:var(--font-noto-serif)] leading-[1.9] text-[28px] text-[#2a2a2a]">
            Integration is a birthday &amp; a funeral. It is playing in the unknown, while
            knowing yourself more. It is weaving. It is collaborating. It is titration &amp;
            digestion. It is process. It is practice with awareness. It is the evolution of a
            differentiated, connected self. It is intra-connected identity. It is WE, it is
            US. It is the link between possibility and actuality.
          </p>

          <p className="font-[family-name:var(--font-noto-serif)] leading-[1.9] text-[28px] text-[#2a2a2a] mt-8">
            And it happens in The Infinity Container.
            <br />
            A little at a time.
          </p>
        </div>
      </section>

      <WayDivider onBlack />

      {/* ── Two Paths ──────────────────────────────────────────────── */}
      <section className="bg-tic-grey px-6 py-[110px] overflow-hidden">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-14 relative">
            <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.15em] text-tic-dark-grey mb-[18px]" style={{ fontSize: "2.4em" }}>
              Who is this for?
            </p>
            <h2
              className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.02em] mb-4 break-words"
              style={{ fontSize: "clamp(28px, 7.5vw, 4.08em)" }}
            >
              Two containers. One ecosystem.
            </h2>
            <p className="font-[family-name:var(--font-noto-serif)] italic text-[#2a2a2a] max-w-[920px] mx-auto" style={{ fontSize: "2.4em" }}>
              Whether you are doing your own integration work or supporting others in theirs —
              there is a place for you here.
            </p>
            <Image
              src="/assets/closed-hand.svg"
              alt=""
              aria-hidden
              width={900}
              height={900}
              className="absolute top-0 -right-[294px] w-96 lg:w-[600px] h-auto opacity-20"
            />
          </div>

          <div className="grid gap-[160px] max-w-[95vw] mx-auto relative">
            <div className="relative z-10">
              <div className="text-white rounded py-[80px] px-[100px] flex flex-col" style={{ backgroundColor: "#1948A7" }}>
                <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.2em] text-[14px] opacity-85 mb-8">
                  For Practitioners
                </p>
                <h3
                  className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.02em] leading-[1.25] mb-[28px] max-w-[800px]"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 2.75rem)" }}
                >
                  You hold a lot.
                  <br />
                  This holds you.
                </h3>
                <p className="font-[family-name:var(--font-noto-serif)] text-[20px] leading-[1.7] mb-[40px] flex-grow max-w-[800px]">
                  For therapists, coaches, healers, bodyworkers, and space holders who are ready
                  for a consistent place to be held — not just to hold. Weekly practice. Real
                  tools. A community that understands the work.
                </p>
                <Link
                  href="/who-is-this-for"
                  className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-[15px] bg-white px-[35px] py-[18px] rounded-sm text-center hover:opacity-85 transition-opacity w-fit" style={{ color: "#286B80", boxShadow: "0 4px 12px rgba(40, 107, 128, 0.3)" }}
                >
                  Explore the Practitioner Path →
                </Link>
              </div>
            </div>

            <Image
              src="/assets/open-hand.svg"
              alt=""
              aria-hidden
              width={900}
              height={900}
              className="absolute -left-[374px] top-[430px] w-96 lg:w-[600px] h-auto opacity-20 z-0 pointer-events-none"
              style={{ transform: "scaleX(-1) rotate(45deg)" }}
            />

            <div className="relative z-10">
              <div className="text-black rounded py-[80px] px-[100px] flex flex-col" style={{ backgroundColor: "#F56E71" }}>
                <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.2em] text-[14px] opacity-85 mb-8">
                  For Helpers &amp; Seekers
                </p>
                <h3
                  className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.02em] leading-[1.25] mb-[28px] max-w-[800px]"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 2.75rem)" }}
                >
                  You don&apos;t have to figure this out alone.
                </h3>
                <p className="font-[family-name:var(--font-noto-serif)] text-[20px] leading-[1.7] mb-[40px] flex-grow max-w-[800px]">
                  For helpers, caregivers, educators, artists, and curious humans integrating
                  their own experiences. Drop-in practice. Integration frameworks. A community of
                  people doing the work alongside you.
                </p>
                <Link
                  href="/what-is-integration"
                  className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-[15px] bg-white px-[35px] py-[18px] rounded-sm text-center hover:opacity-85 transition-opacity w-fit" style={{ color: "#286B80", boxShadow: "0 4px 12px rgba(40, 107, 128, 0.3)" }}
                >
                  Explore the Practice Path →
                </Link>
              </div>
            </div>
          </div>

          <div className="relative mx-auto mt-[160px]">
            <Image
              src="/assets/spider-thick.svg"
              alt=""
              aria-hidden
              width={400}
              height={600}
              className="absolute right-[100px] -top-[160px] w-24 lg:w-36 h-auto opacity-20 z-20 pointer-events-none"
            />

            <div className="max-w-[95vw] mx-auto bg-white border border-black/10 rounded py-[80px] px-[100px] flex flex-col items-start justify-start gap-8 relative z-10">
            <div className="max-w-[800px]">
              <h4 className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.02em] leading-[1.25] mb-[28px]" style={{ fontSize: "clamp(2rem, 4.5vw, 2.75rem)" }}>
                Not ready for a membership? Start free.
              </h4>
              <p className="font-[family-name:var(--font-noto-serif)] text-[20px] leading-[1.7] text-[#3a3a3a] mb-[40px]">
                Join the free community for monthly community calls and a library of integration
                modules — each with one practice and one teaching video. A real taste of the work,
                at no cost.
              </p>
            </div>
            <a
              href={MEMBERSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-sm border-[1.5px] border-black text-black px-8 py-[16px] rounded-sm hover:bg-black hover:text-white transition-colors"
            >
              Join Free →
            </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href={MEMBERSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-noto-serif)] italic text-[36px] underline underline-offset-4 hover:text-tic-brown transition-colors"
            >
              Not sure which path fits you? Take the 7-question quiz →
            </a>
          </div>
        </div>
      </section>

      {/* ── Framework ──────────────────────────────────────────────── */}
      <section className="text-white px-6 py-[120px]" style={{ backgroundColor: "#0b0d10" }}>
        <div className="max-w-[1080px] mx-auto">
          <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.22em] text-[11px] text-tic-yellow mb-[18px]">
            Our approach
          </p>
          <h2
            className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.18] mb-[30px] max-w-[720px]"
            style={{ fontSize: "clamp(28px, 4.4vw, 46px)" }}
          >
            Integration is not an event.<br />
            It is a system.
          </h2>
          <p className="font-[family-name:var(--font-noto-serif)] text-tic-grey leading-[1.8] text-[17px] mb-[56px] max-w-[640px]">
            The Solar-Lunar Framework is TIC&apos;s proprietary integration system — built on
            behavioral science, somatic practice, and contemplative traditions. It maps the full
            arc across two spirals:
          </p>

          <div className="grid gap-7 mb-14 max-w-[920px]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            <div className="rounded-sm py-11 px-9.5 border border-white/15" style={{ background: "linear-gradient(145deg, rgba(242,95,193,0.14), rgba(235,115,31,0.14))" }}>
              <span className="text-[30px] mb-[18px] block">☀</span>
              <h3 className="font-[family-name:var(--font-gordon)] font-normal tracking-[0.06em] text-[22px] leading-[1.2] mb-[6px]" style={{ color: "#f56e71" }}>
                The Solar Spiral
              </h3>
              <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.14em] text-[12px] text-tic-grey mb-[18px]">
                7 Preparation Capacities
              </p>
              <p className="font-[family-name:var(--font-noto-serif)] text-tic-grey text-[15px] leading-[1.7] mb-[22px]">
                The capacities that help you arrive ready — grounded, receptive, and resourced
                before the experience begins.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.1em] text-[11px] border border-white/30 text-white rounded-full px-[14px] py-[7px]">
                  Ground
                </span>
                <span className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.1em] text-[11px] border border-dashed border-white/30 text-white rounded-full px-[14px] py-[7px] opacity-55">
                  + 6 more
                </span>
              </div>
            </div>

            <div className="rounded-sm py-11 px-9.5 border border-white/15" style={{ background: "linear-gradient(145deg, rgba(20,46,199,0.18), rgba(35,108,127,0.18))" }}>
              <span className="text-[30px] mb-[18px] block">☾</span>
              <h3 className="font-[family-name:var(--font-gordon)] font-normal tracking-[0.06em] text-[22px] leading-[1.2] mb-[6px]" style={{ color: "#7fb8c9" }}>
                The Lunar Spiral
              </h3>
              <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.14em] text-[12px] text-tic-grey mb-[18px]">
                13 Integration Capacities
              </p>
              <p className="font-[family-name:var(--font-noto-serif)] text-tic-grey text-[15px] leading-[1.7] mb-[22px]">
                The capacities that help you weave what you find into who you are becoming — a
                little at a time.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.1em] text-[11px] border border-white/30 text-white rounded-full px-[14px] py-[7px]">
                  Weave
                </span>
                <span className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.1em] text-[11px] border border-white/30 text-white rounded-full px-[14px] py-[7px]">
                  Conduct
                </span>
                <span className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.1em] text-[11px] border border-dashed border-white/30 text-white rounded-full px-[14px] py-[7px] opacity-55">
                  + 11 more
                </span>
              </div>
            </div>
          </div>

          <p className="font-[family-name:var(--font-noto-serif)] italic text-tic-grey leading-[1.8] text-[16px] mb-[30px] max-w-[620px]">
            Every program, session, and theme inside TIC is organized within this framework. It
            is not a curriculum you complete. It is a practice you return to.
          </p>
          <Link
            href="/what-is-integration"
            className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-[13px] text-tic-yellow border-b border-tic-yellow pb-[3px] hover:text-tic-pink hover:border-tic-pink transition-colors"
          >
            Learn more about the Solar-Lunar Framework →
          </Link>
        </div>
      </section>

      <WayDivider />

      {/* ── Testimonials ───────────────────────────────────────────── */}
      <section className="relative bg-white px-6 py-[110px] overflow-hidden">
        <Image
          src="/assets/spider-thick.svg"
          alt=""
          aria-hidden
          width={890}
          height={1386}
          className="hidden md:block absolute top-24 right-10 w-20 h-auto opacity-70"
        />
        <div className="max-w-[1080px] mx-auto">
          <h2
            className="font-[family-name:var(--font-gordon)] uppercase tracking-wide text-center mb-14"
            style={{ fontSize: "clamp(1.625rem, 4vw, 2.5rem)" }}
          >
            What practitioners say.
          </h2>

          <div className="grid md:grid-cols-2 gap-11 max-w-[920px] mx-auto">
            <div>
              <blockquote className="font-[family-name:var(--font-noto-serif)] italic leading-[1.8] text-lg border-l-[3px] border-tic-pink pl-6 mb-[18px]">
                &ldquo;Friday practice is a place where I don&apos;t have to do the holding. I get
                to be held — and I also learn techniques I can use with my clients.&rdquo;
              </blockquote>
              <cite className="font-[family-name:var(--font-gordon)] not-italic uppercase tracking-[0.16em] text-[11px] text-tic-dark-grey pl-[27px]">
                — Practice Member
              </cite>
            </div>
            <div>
              <blockquote className="font-[family-name:var(--font-noto-serif)] italic leading-[1.8] text-lg border-l-[3px] border-tic-pink pl-6 mb-[18px]">
                &ldquo;The consistency and the connection allows me to really grow and trust
                there&apos;s a place to grow with and in. I feel held by the ecosystem.&rdquo;
              </blockquote>
              <cite className="font-[family-name:var(--font-gordon)] not-italic uppercase tracking-[0.16em] text-[11px] text-tic-dark-grey pl-[27px]">
                — Practitioner Member
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ─────────────────────────────────────────────── */}
      <section className="bg-tic-yellow px-6 py-[100px] text-center">
        <h2
          className="font-[family-name:var(--font-gordon)] uppercase tracking-wide mb-[18px]"
          style={{ fontSize: "clamp(1.625rem, 4vw, 2.5rem)" }}
        >
          Integration as a practice, not an event.
        </h2>
        <p className="font-[family-name:var(--font-noto-serif)] text-base max-w-[560px] mx-auto mb-10 leading-[1.7] text-[#2a2a1a]">
          The TIC newsletter brings you integration frameworks, somatic tools, and practitioner
          resources — rooted in the Solar-Lunar system. Written by Dr. Victoria Sterkin.
        </p>
        <InlineNewsletter inputBg="bg-white" />
        <p className="mt-4 text-xs text-[#5a570f]">No spam. Unsubscribe anytime.</p>
      </section>

      {/* ── Closing CTA ────────────────────────────────────────────── */}
      <section className="relative bg-black text-white px-6 py-20 text-center overflow-hidden">
        <Image
          src="/assets/window-view.svg"
          alt="The Infinity Container membership portal"
          width={480}
          height={660}
          className="mx-auto w-full max-w-[180px] h-auto mb-8"
        />
        <p className="font-[family-name:var(--font-noto-serif)] italic text-tic-grey max-w-md mx-auto mb-8 leading-relaxed">
          Whenever you&apos;re ready, the container is open.
        </p>
        <a
          href={MEMBERSHIP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-[family-name:var(--font-gordon)] uppercase tracking-wider text-sm border border-tic-yellow text-tic-yellow px-9 py-4 rounded-sm hover:bg-tic-yellow hover:text-black transition-colors"
        >
          Enter Our Membership Portal
        </a>
      </section>
    </main>
  );
}

function WayDivider({ onBlack = false }: { onBlack?: boolean }) {
  return (
    <div
      className={`px-6 text-center ${
        onBlack ? "bg-black" : "bg-tic-olive"
      }`}
      style={{ padding: "90px 24px" }}
    >
      <span
        className={`font-[family-name:var(--font-gordon)] uppercase tracking-[0.32em] ${
          onBlack ? "text-white" : "text-tic-yellow"
        }`}
        style={{ fontSize: "clamp(20px, 3.4vw, 34px)" }}
      >
        Integration
        <br />
        is the way
      </span>
    </div>
  );
}
