import Image from "next/image";
import Link from "next/link";
import InlineNewsletter from "@/components/InlineNewsletter";

const MEMBERSHIP_URL = "https://the-infinity-container.mn.co/landing";
const SIGNIN_URL = "https://the-infinity-container.mn.co/sign_in";

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <header className="relative bg-black text-center overflow-hidden px-6 pt-28 pb-28 md:pt-32 md:pb-32">
        <div className="relative w-24 h-24 mx-auto mb-11 rounded-full overflow-hidden border border-tic-yellow/40 flex items-center justify-center bg-black">
          <Image
            src="/assets/hero-logo.svg"
            alt="The Infinity Container"
            width={96}
            height={96}
            priority
            className="w-16 h-16 object-contain"
          />
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/assets/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>

        <p className="font-[family-name:var(--font-gordon)] text-tic-yellow uppercase tracking-[0.24em] text-xs mb-9">
          Psychedelic Integration <span className="mx-2">·</span> Life Transitions{" "}
          <span className="mx-2">·</span> Expanded Experience
        </p>

        <h1
          className="font-[family-name:var(--font-gordon)] text-white uppercase tracking-wide leading-[1.12] max-w-3xl mx-auto mb-6"
          style={{ fontSize: "clamp(2.375rem, 6.5vw, 4.25rem)" }}
        >
          This is where
          <br />
          the work continues.
        </h1>

        <p
          className="font-[family-name:var(--font-noto-serif)] italic text-tic-yellow mb-7"
          style={{ fontSize: "clamp(1.19rem, 2.6vw, 1.56rem)" }}
        >
          Prepare well. Integrate fully. Keep going.
        </p>

        <p className="font-[family-name:var(--font-noto-serif)] text-tic-grey max-w-xl mx-auto mb-11 leading-[1.75] text-[15px] md:text-[17px]">
          Psychedelic integration, life transitions, and expanded experience — for the people
          doing the work and the practitioners who hold that space.
        </p>

        <a
          href={MEMBERSHIP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-[family-name:var(--font-gordon)] uppercase tracking-wider text-sm bg-tic-orange text-black px-10 py-4 rounded-sm hover:bg-tic-pink transition-colors"
        >
          Find My Membership →
        </a>
        <a
          href={SIGNIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-5 text-sm text-tic-dark-grey hover:text-tic-yellow transition-colors"
        >
          Already a member? Sign in
        </a>
      </header>

      <WayDivider />

      {/* ── What is this? ──────────────────────────────────────────── */}
      <section className="bg-white px-6 py-24 md:py-28">
        <div className="max-w-[1080px] mx-auto">
          <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.22em] text-[11px] text-tic-dark-grey mb-4">
            What is this?
          </p>
          <h2
            className="font-[family-name:var(--font-gordon)] uppercase tracking-wide leading-tight max-w-2xl mb-10"
            style={{ fontSize: "clamp(1.75rem, 4.4vw, 2.75rem)" }}
          >
            Integration support for the people who hold everyone else.
          </h2>

          <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-start">
            <div className="font-[family-name:var(--font-noto-serif)] text-[16.5px] leading-[1.8] text-[#2a2a2a] flex flex-col gap-5">
              <p>
                The Infinity Container is a community built for the full arc — preparation before
                the experience, and integration after. We work inside the Solar-Lunar Framework, a
                proprietary system rooted in behavioral science, somatic practice, and
                contemplative traditions.
              </p>
              <p>
                We are here for practitioners, therapists, coaches, healers, and helpers of all
                kinds — and for anyone navigating psychedelic experiences, life transitions, or
                expanded states who is ready to do the work with real support.
              </p>
              <p>
                Integration is not therapy. It is not a debrief. It is an ongoing practice of
                becoming — and TIC is built to hold that practice over time.
              </p>
            </div>

            <div className="relative">
              <Image
                src="/assets/eye-witness.svg"
                alt=""
                aria-hidden
                width={103}
                height={68}
                className="hidden md:block absolute -top-10 right-0 w-16 h-auto opacity-80"
              />
              <Image
                src="/assets/integration.svg"
                alt="Integration"
                width={420}
                height={130}
                className="w-full max-w-xs h-auto mb-6"
              />
              <p className="font-[family-name:var(--font-noto-serif)] italic leading-[1.9] text-[17px] border-l-[3px] border-tic-yellow pl-6">
                Integration is a birthday &amp; a funeral. It is playing in the unknown, while
                knowing yourself more. It is weaving. It is collaborating. It is titration &amp;
                digestion. It is process. It is practice with awareness. It is the evolution of a
                differentiated, connected self. It is intra-connected identity. It is WE, it is
                US. It is the link between possibility and actuality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WayDivider onBlack />

      {/* ── Two Paths ──────────────────────────────────────────────── */}
      <section className="bg-tic-grey px-6 py-24 md:py-28">
        <div className="max-w-[1080px] mx-auto">
          <div className="text-center mb-14">
            <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.22em] text-[11px] text-tic-dark-grey mb-4">
              Who is this for?
            </p>
            <h2
              className="font-[family-name:var(--font-gordon)] uppercase tracking-wide mb-5"
              style={{ fontSize: "clamp(1.75rem, 4.4vw, 2.75rem)" }}
            >
              Two containers. One ecosystem.
            </h2>
            <p className="font-[family-name:var(--font-noto-serif)] italic text-[17px] text-[#2a2a2a] max-w-lg mx-auto">
              Whether you are doing your own integration work or supporting others in theirs —
              there is a place for you here.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-[920px] mx-auto">
            <div className="bg-tic-turquoise text-white rounded p-10 md:p-11 flex flex-col">
              <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.2em] text-[10px] opacity-85 mb-5">
                For Practitioners
              </p>
              <h3
                className="font-[family-name:var(--font-gordon)] uppercase tracking-wide leading-tight mb-4"
                style={{ fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)" }}
              >
                You hold a lot.
                <br />
                This holds you.
              </h3>
              <p className="font-[family-name:var(--font-noto-serif)] text-[15px] leading-[1.7] mb-8 flex-grow">
                For therapists, coaches, healers, bodyworkers, and space holders who are ready for
                a consistent place to be held — not just to hold. Weekly practice. Real tools. A
                community that understands the work.
              </p>
              <Image
                src="/assets/closed-hand.svg"
                alt=""
                aria-hidden
                width={220}
                height={220}
                className="w-16 h-auto mb-6 opacity-90"
              />
              <Link
                href="/who-is-this-for"
                className="font-[family-name:var(--font-gordon)] uppercase tracking-wider text-xs bg-white text-tic-turquoise px-6 py-3 rounded-sm text-center hover:opacity-85 transition-opacity"
              >
                Explore the Practitioner Path →
              </Link>
            </div>

            <div className="bg-tic-salmon text-black rounded p-10 md:p-11 flex flex-col">
              <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.2em] text-[10px] opacity-85 mb-5">
                For Helpers &amp; Seekers
              </p>
              <h3
                className="font-[family-name:var(--font-gordon)] uppercase tracking-wide leading-tight mb-4"
                style={{ fontSize: "clamp(1.3rem, 2.6vw, 1.7rem)" }}
              >
                You don&apos;t have to figure this out alone.
              </h3>
              <p className="font-[family-name:var(--font-noto-serif)] text-[15px] leading-[1.7] mb-8 flex-grow">
                For helpers, caregivers, educators, artists, and curious humans integrating their
                own experiences. Drop-in practice. Integration frameworks. A community of people
                doing the work alongside you.
              </p>
              <Image
                src="/assets/open-hand.svg"
                alt=""
                aria-hidden
                width={220}
                height={192}
                className="w-16 h-auto mb-6 opacity-90"
              />
              <Link
                href="/what-is-integration"
                className="font-[family-name:var(--font-gordon)] uppercase tracking-wider text-xs bg-black text-white px-6 py-3 rounded-sm text-center hover:opacity-85 transition-opacity"
              >
                Explore the Practice Path →
              </Link>
            </div>
          </div>

          <div className="max-w-[920px] mx-auto mt-7 bg-white border border-black/10 rounded p-9 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="font-[family-name:var(--font-gordon)] uppercase tracking-wide text-lg mb-2">
                Not ready for a membership? Start free.
              </h4>
              <p className="font-[family-name:var(--font-noto-serif)] text-sm leading-[1.65] text-[#3a3a3a] max-w-md">
                Join the free community for monthly community calls and a library of integration
                modules — each with one practice and one teaching video. A real taste of the work,
                at no cost.
              </p>
            </div>
            <a
              href={MEMBERSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 whitespace-nowrap font-[family-name:var(--font-gordon)] uppercase tracking-wider text-xs border border-black text-black px-7 py-3 rounded-sm hover:bg-black hover:text-white transition-colors"
            >
              Join Free →
            </a>
          </div>

          <div className="text-center mt-11">
            <a
              href={MEMBERSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-noto-serif)] italic text-base underline underline-offset-4 hover:text-tic-brown transition-colors"
            >
              Not sure which path fits you? Take the 7-question quiz →
            </a>
          </div>
        </div>
      </section>

      {/* ── Framework ──────────────────────────────────────────────── */}
      <section className="bg-black text-white px-6 py-28 md:py-32">
        <div className="max-w-[1080px] mx-auto">
          <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.22em] text-[11px] text-tic-yellow mb-4">
            Our approach
          </p>
          <h2
            className="font-[family-name:var(--font-gordon)] uppercase tracking-wide leading-[1.18] max-w-2xl mb-8"
            style={{ fontSize: "clamp(1.75rem, 4.4vw, 2.9rem)" }}
          >
            Integration is not an event.
            <br />
            It is a system.
          </h2>
          <p className="font-[family-name:var(--font-noto-serif)] text-tic-grey max-w-xl leading-[1.8] text-[17px] mb-10">
            The Solar-Lunar Framework is TIC&apos;s proprietary integration system — built on
            behavioral science, somatic practice, and contemplative traditions. It maps the full
            arc across two spirals:
          </p>

          <Image
            src="/assets/solar-lunar-spiral.svg"
            alt=""
            aria-hidden
            width={113}
            height={113}
            style={{ filter: "invert(1)" }}
            className="w-20 h-auto mx-auto mb-14 opacity-90"
          />

          <div className="grid md:grid-cols-2 gap-7 max-w-[920px] mx-auto mb-14">
            <div className="rounded p-10 md:p-11 border border-white/10 bg-gradient-to-br from-tic-pink/15 to-tic-orange/15">
              <span className="text-3xl mb-4 block" aria-hidden>☀</span>
              <h3 className="font-[family-name:var(--font-gordon)] uppercase tracking-wide text-xl text-tic-salmon mb-1.5">
                The Solar Spiral
              </h3>
              <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.14em] text-xs text-tic-grey mb-4">
                7 Preparation Capacities
              </p>
              <p className="font-[family-name:var(--font-noto-serif)] text-tic-grey text-[15px] leading-[1.7] mb-5">
                The capacities that help you arrive ready — grounded, receptive, and resourced
                before the experience begins.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="font-[family-name:var(--font-gordon)] uppercase tracking-wide text-[11px] border border-white/30 rounded-full px-3.5 py-1.5">
                  Ground
                </span>
                <span className="font-[family-name:var(--font-gordon)] uppercase tracking-wide text-[11px] border border-dashed border-white/30 rounded-full px-3.5 py-1.5 opacity-55">
                  + 6 more
                </span>
              </div>
            </div>

            <div className="rounded p-10 md:p-11 border border-white/10 bg-gradient-to-br from-tic-cobalt/20 to-tic-turquoise/20">
              <span className="text-3xl mb-4 block" aria-hidden>☾</span>
              <h3 className="font-[family-name:var(--font-gordon)] uppercase tracking-wide text-xl text-[#7fb8c9] mb-1.5">
                The Lunar Spiral
              </h3>
              <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.14em] text-xs text-tic-grey mb-4">
                13 Integration Capacities
              </p>
              <p className="font-[family-name:var(--font-noto-serif)] text-tic-grey text-[15px] leading-[1.7] mb-5">
                The capacities that help you weave what you find into who you are becoming — a
                little at a time.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="font-[family-name:var(--font-gordon)] uppercase tracking-wide text-[11px] border border-white/30 rounded-full px-3.5 py-1.5">
                  Weave
                </span>
                <span className="font-[family-name:var(--font-gordon)] uppercase tracking-wide text-[11px] border border-white/30 rounded-full px-3.5 py-1.5">
                  Conduct
                </span>
                <span className="font-[family-name:var(--font-gordon)] uppercase tracking-wide text-[11px] border border-dashed border-white/30 rounded-full px-3.5 py-1.5 opacity-55">
                  + 11 more
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div>
              <p className="font-[family-name:var(--font-noto-serif)] italic text-tic-grey max-w-lg leading-relaxed text-base mb-6">
                Every program, session, and theme inside TIC is organized within this framework.
                It is not a curriculum you complete. It is a practice you return to.
              </p>
              <Link
                href="/what-is-integration"
                className="font-[family-name:var(--font-gordon)] uppercase tracking-wider text-xs text-tic-yellow border-b border-tic-yellow pb-1 hover:text-tic-pink hover:border-tic-pink transition-colors"
              >
                Learn more about the Solar-Lunar Framework →
              </Link>
            </div>
            <Image
              src="/assets/mushrooms-trio.svg"
              alt=""
              aria-hidden
              width={98}
              height={151}
              style={{ filter: "invert(1)" }}
              className="w-16 h-auto opacity-80 shrink-0"
            />
          </div>
        </div>
      </section>

      <WayDivider />

      {/* ── Testimonials ───────────────────────────────────────────── */}
      <section className="bg-white px-6 py-24 md:py-28">
        <div className="max-w-[1080px] mx-auto">
          <h2
            className="font-[family-name:var(--font-gordon)] uppercase tracking-wide text-center mb-14"
            style={{ fontSize: "clamp(1.625rem, 4vw, 2.5rem)" }}
          >
            What practitioners say.
          </h2>

          <div className="relative grid md:grid-cols-2 gap-11 max-w-[920px] mx-auto">
            <Image
              src="/assets/spider-thick.svg"
              alt=""
              aria-hidden
              width={890}
              height={1386}
              className="hidden md:block absolute -top-16 -right-10 w-14 h-auto opacity-70"
            />
            <div>
              <blockquote className="font-[family-name:var(--font-noto-serif)] italic leading-[1.8] text-lg border-l-[3px] border-tic-pink pl-6 mb-4">
                &ldquo;Friday practice is a place where I don&apos;t have to do the holding. I get
                to be held — and I also learn techniques I can use with my clients.&rdquo;
              </blockquote>
              <cite className="font-[family-name:var(--font-gordon)] not-italic uppercase tracking-[0.16em] text-[11px] text-tic-dark-grey pl-6">
                — Practice Member
              </cite>
            </div>
            <div>
              <blockquote className="font-[family-name:var(--font-noto-serif)] italic leading-[1.8] text-lg border-l-[3px] border-tic-pink pl-6 mb-4">
                &ldquo;The consistency and the connection allows me to really grow and trust
                there&apos;s a place to grow with and in. I feel held by the ecosystem.&rdquo;
              </blockquote>
              <cite className="font-[family-name:var(--font-gordon)] not-italic uppercase tracking-[0.16em] text-[11px] text-tic-dark-grey pl-6">
                — Practitioner Member
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ─────────────────────────────────────────────── */}
      <section className="bg-tic-yellow px-6 py-24 md:py-28 text-center">
        <h2
          className="font-[family-name:var(--font-gordon)] uppercase tracking-wide mb-4"
          style={{ fontSize: "clamp(1.625rem, 4vw, 2.5rem)" }}
        >
          Integration as a practice, not an event.
        </h2>
        <p className="font-[family-name:var(--font-noto-serif)] text-base max-w-lg mx-auto mb-10 leading-[1.7] text-[#2a2a1a]">
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
    <div className={`px-6 py-20 text-center ${onBlack ? "bg-black" : "bg-tic-olive"}`}>
      <span
        className={`font-[family-name:var(--font-gordon)] uppercase tracking-[0.32em] ${
          onBlack ? "text-white" : "text-tic-yellow"
        }`}
        style={{ fontSize: "clamp(1.25rem, 3.4vw, 2.125rem)" }}
      >
        Integration is the way
      </span>
    </div>
  );
}
