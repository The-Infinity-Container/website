import Image from "next/image";
import Link from "next/link";
import InlineNewsletter from "@/components/InlineNewsletter";
import ApproachCards from "@/components/ApproachCards";
import MembershipCards from "@/components/MembershipCards";

const MEMBERSHIP_URL = "https://the-infinity-container.mn.co/landing";
const SIGNIN_URL = "https://the-infinity-container.mn.co/sign_in";

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <header className="relative bg-black text-center overflow-hidden px-6 pt-[77px] pb-[84px]">
        <div className="relative w-[59px] h-[59px] mx-auto mb-8 rounded-full overflow-hidden border-[1.5px] border-dashed border-tic-yellow flex items-center justify-center bg-black">
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
          className="font-[family-name:var(--font-gordon)] text-tic-yellow uppercase tracking-[0.15em] max-w-[900px] mx-auto mb-6 leading-snug"
          style={{ fontSize: "clamp(0.788rem, 1.68vw, 1.225rem)" }}
        >
          Psychedelic Integration <span className="mx-2">·</span> Life Transitions{" "}
          <span className="mx-2">·</span> Expanded Experience
        </p>

        <h1
          className="font-[family-name:var(--font-gordon)] text-white uppercase tracking-[0.03em] leading-[1.12] max-w-[1300px] mx-auto mb-[18px]"
          style={{ fontSize: "clamp(1.925rem, 5.25vw, 4.2rem)" }}
        >
          This is where
          <br />
          the work
          <br />
          continues.
        </h1>

        <p
          className="font-[family-name:var(--font-noto-serif)] italic text-tic-yellow mb-[21px]"
          style={{ fontSize: "clamp(1.05rem, 2.24vw, 1.4rem)" }}
        >
          Prepare well. Integrate fully. Keep going.
        </p>

        <p
          className="font-[family-name:var(--font-noto-serif)] text-tic-grey max-w-[640px] mx-auto mb-8 leading-[1.75]"
          style={{ fontSize: "clamp(0.788rem, 1.54vw, 0.963rem)" }}
        >
          Psychedelic integration, life transitions, and expanded experience — for the people
          doing the work and the practitioners who hold that space.
        </p>

        <a
          href={MEMBERSHIP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-sm bg-tic-salmon text-black px-10 py-4 rounded-sm hover:bg-tic-pink transition-colors"
        >
          Find My Membership →
        </a>
        <a
          href={SIGNIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-3 text-sm text-tic-yellow"
        >
          Already a member? Sign in
        </a>
      </header>

      <WayDivider />

      {/* ── What is this? ──────────────────────────────────────────── */}
      <section className="bg-white px-6 py-[110px]">
        <div className="max-w-[1080px] mx-auto">
          <p className="font-[family-name:var(--font-gordon)] uppercase text-tic-dark-grey mb-[18px]" style={{ fontSize: "28px", letterSpacing: "0.42px", marginBottom: "60px" }}>
            What is this?
          </p>
          <h2
            className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.4] mb-[34px] max-w-[700px]"
            style={{ fontSize: "clamp(28px, 4.4vw, 44px)" }}
          >
            Integration support for the people who hold everyone else.
          </h2>

          {/* Mobile: stacked, Desktop: 2-column grid */}
          <div className="flex flex-col gap-8 md:gap-16 w-full md:grid" style={{ gridTemplateColumns: "1.4fr 1fr", alignItems: "start" }}>
            {/* Mobile: Integration image second */}
            <div className="md:hidden order-2 w-full">
              <Image
                src="/assets/integration.svg"
                alt="Integration"
                width={320}
                height={100}
                className="w-full h-auto mb-8"
              />
            </div>

            {/* Mobile: Poem appears third */}
            <div className="md:hidden order-3 w-full font-[family-name:var(--font-noto-serif)] italic text-[17px] leading-[1.9] text-black border-l-[3px] border-tic-yellow pl-[26px]">
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

            {/* Text content - appears first on mobile, first on desktop */}
            <div className="flex flex-col gap-[22px] order-1 md:order-1 w-full">
              <p className="font-[family-name:var(--font-noto-serif)] text-[28px] leading-[1.8] text-[#2a2a2a]">
                The Infinity Container is a community built for the full arc — preparation before the experience, and integration after. We work inside the Solar-Lunar Framework, a proprietary system rooted in behavioral science, somatic practice, and contemplative traditions.
              </p>
              <p className="font-[family-name:var(--font-noto-serif)] text-[28px] leading-[1.8] text-[#2a2a2a]">
                We are here for practitioners, therapists, coaches, healers, and helpers of all kinds — and for anyone navigating psychedelic experiences, life transitions, or expanded states who is ready to do the work with real support.
              </p>
              <p className="font-[family-name:var(--font-noto-serif)] text-[28px] leading-[1.8] text-[#2a2a2a]">
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
      <section className="hidden px-6 py-[66px] w-full overflow-hidden" style={{ backgroundColor: "#D5D06A" }}>
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

      <div className="hidden">
        <WayDivider onBlack />
      </div>

      {/* ── Two Paths ──────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-[110px]">
        <div className="max-w-[1080px] mx-auto">
          <p className="font-[family-name:var(--font-gordon)] uppercase text-tic-dark-grey mb-[18px]" style={{ fontSize: "28px", letterSpacing: "0.42px", marginBottom: "60px" }}>
            Who is this for?
          </p>
          <h2
            className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.4] mb-[44px]"
            style={{ fontSize: "clamp(30px, 4.6vw, 48px)" }}
          >
            Two containers. One ecosystem.
          </h2>

          <MembershipCards
            cards={[
              {
                label: "FOR PRACTITIONERS",
                heading: "YOU HOLD A LOT. THIS HOLDS YOU.",
                description: "For therapists, coaches, healers, bodyworkers, and space holders who are ready for a consistent place to be held — not just to hold. Weekly practice. Real tools. A community that understands the work.",
                buttonText: "EXPLORE THE PRACTITIONER PATH →",
                buttonHref: "/who-is-this-for",
                backgroundColor: "blue",
              },
              {
                label: "FOR HELPERS & SEEKERS",
                heading: "YOU DON'T HAVE TO FIGURE THIS OUT ALONE.",
                description: "For helpers, caregivers, educators, artists, and curious humans integrating their own experiences. Drop-in practice. Integration frameworks. A community of people doing the work alongside you.",
                buttonText: "EXPLORE THE PRACTICE PATH →",
                buttonHref: "/what-is-integration",
                backgroundColor: "red",
              },
            ]}
          />

          <div className="relative mx-auto mt-[160px]">
            <Image
              src="/assets/spider-thick.svg"
              alt=""
              aria-hidden
              width={400}
              height={600}
              className="absolute right-[100px] -top-[160px] w-24 lg:w-36 h-auto opacity-20 z-20 pointer-events-none"
            />

            <div className="max-w-[95vw] mx-auto bg-white border border-black/10 rounded py-[40px] px-6 md:py-[80px] md:px-[100px] flex flex-col items-start justify-start gap-8 relative z-10">
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
      <section className="relative text-white py-[120px] overflow-hidden" style={{ backgroundColor: "#0A0E10" }}>
        <Image
          src="/assets/solar-lunar-spiral.svg"
          alt=""
          aria-hidden
          width={890}
          height={1386}
          style={{ filter: "invert(1)" }}
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[20px] w-[486px] h-auto opacity-20 z-0 pointer-events-none"
        />

        <div className="max-w-[1280px] mx-auto px-6">
          <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.22em] text-[19px] text-tic-yellow mb-[18px]">
            Our approach
          </p>
          <h2
            className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.02em] leading-[1.18] mb-[30px]"
            style={{ fontSize: "clamp(2.1rem, 4.4vw, 3.45rem)" }}
          >
            Integration is not an event.
            <br />
            It is a system.
          </h2>
          <p className="font-[family-name:var(--font-noto-serif)] text-tic-grey leading-[1.8] text-[20px] mb-[56px]">
            The Solar-Lunar Framework is TIC&apos;s proprietary integration system — built on
            behavioral science, somatic practice, and contemplative traditions. It maps the full
            arc across two spirals:
          </p>

          <ApproachCards />

          <Image
            src="/assets/solar-lunar-spiral.svg"
            alt=""
            aria-hidden
            width={890}
            height={1386}
            style={{ filter: "invert(1)" }}
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-[350px] h-auto opacity-15 z-0 pointer-events-none"
          />

          <p className="font-[family-name:var(--font-noto-serif)] italic text-tic-grey leading-relaxed text-[24px] mb-[40px] relative z-10">
            Every program, session, and theme inside TIC is organized within this framework. It
            is not a curriculum you complete. It is a practice you return to.
          </p>
          <Link
            href="/what-is-integration"
            className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-[20px] text-tic-yellow border-b border-tic-yellow pb-[3px] hover:text-tic-pink hover:border-tic-pink transition-colors"
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
