import Image from "next/image";
import Link from "next/link";
import InlineNewsletter from "@/components/InlineNewsletter";
import NewsletterPopup from "@/components/NewsletterPopup";
import ApproachCards from "@/components/ApproachCards";
import MembershipCards from "@/components/MembershipCards";
import SpotifyEmbed from "@/components/SpotifyEmbed";
import SectionLabel from "@/components/SectionLabel";
import SectionHeading from "@/components/SectionHeading";
import BodyText from "@/components/BodyText";

const FIND_MEMBERSHIP_URL = "https://the-infinity-container.mn.co/users/onboarding/plans";
const JOIN_FREE_URL = "https://the-infinity-container.mn.co/users/onboarding/plans/1484020";
const SIGNIN_URL = "https://the-infinity-container.mn.co/sign_in";

export default function HomePage() {
  return (
    <main>
      <NewsletterPopup />
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <header className="bg-black">
        {/* Logo-open animation, extended height, text overlaid below the globe */}
        <div className="relative w-full h-[120vh] md:h-[200vh] overflow-hidden bg-black">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 md:top-1/2 left-1/2 min-w-full min-h-[120vh] md:min-h-full w-auto h-auto -translate-x-1/2 md:-translate-y-1/2 object-cover"
          >
            <source src="/assets/videos/hero-mobile-extended.mp4" media="(max-width: 767px)" type="video/mp4" />
            <source src="/assets/videos/hero-desktop.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-x-0 top-1/2 z-10 text-center px-6 pt-0 md:pt-[60px] pb-8 md:pb-[84px] mt-[-25px] md:mt-[4em]">
          <p
            className="font-[family-name:var(--font-gordon)] text-tic-yellow uppercase tracking-[0.15em] max-w-[900px] mx-auto mt-[15px] md:mt-0 mb-4 md:mb-6 leading-snug"
            style={{ fontSize: "clamp(0.788rem, 1.68vw, 1.225rem)" }}
          >
            Psychedelic Integration
            <span className="mx-2 hidden md:inline">·</span>
            <br className="md:hidden" />
            Life Transitions
            <span className="mx-2 hidden md:inline">·</span>
            <br className="md:hidden" />
            Expanded Experience
          </p>

          <h1
            className="font-[family-name:var(--font-gordon)] text-white uppercase tracking-[0.03em] leading-[1.12] max-w-[1300px] mx-auto mb-2 md:mb-[18px]"
            style={{ fontSize: "clamp(1.925rem, 5.25vw, 4.2rem)" }}
          >
            This is where
            <br />
            the work
            <br />
            continues.
          </h1>

          <p
            className="font-[family-name:var(--font-noto-serif)] italic text-tic-yellow mb-4 md:mb-[21px]"
            style={{ fontSize: "clamp(1.05rem, 2.24vw, 1.4rem)" }}
          >
            Prepare well. Integrate fully. Keep going.
          </p>

          <p
            className="font-[family-name:var(--font-noto-serif)] text-tic-grey max-w-[640px] mx-auto mb-5 md:mb-8 leading-[1.75]"
            style={{ fontSize: "clamp(0.788rem, 1.54vw, 0.963rem)" }}
          >
            Psychedelic integration, life transitions, and expanded experience — for the people
            doing the work and the practitioners who hold that space.
          </p>

          <Link
            href="/find-my-membership"
            className="inline-block font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-sm bg-tic-salmon text-black px-10 py-4 rounded-sm hover:bg-tic-pink transition-colors"
          >
            Find My Membership →
          </Link>
          <a
            href={SIGNIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-5 md:mt-3 mb-7 md:mb-0 text-sm text-tic-yellow"
          >
            Already a member? Sign in
          </a>
          </div>
        </div>
      </header>

      <WayDivider />

      {/* ── What is this? ──────────────────────────────────────────── */}
      <section className="bg-white px-6 py-[55px]">
        <div className="max-w-[1080px] mx-auto md:mt-[6em]">
          <div className="relative">
            <SectionLabel>What is TIC</SectionLabel>
            <SectionHeading className="md:max-w-[68%]">
              Integration support for the people who hold everyone else.
            </SectionHeading>
            <Image
              src="/assets/eye-grey.svg"
              alt=""
              aria-hidden
              width={463}
              height={305}
              className="hidden md:block absolute -top-[100px] -right-[20px] lg:-right-[56px] pointer-events-none w-[364px] h-auto mt-[7em] text-transparent"
            />
          </div>

          {/* Mobile: stacked, Desktop: 2-column grid */}
          <div className="flex flex-col gap-8 md:gap-16 w-full md:grid md:mt-[7em]" style={{ gridTemplateColumns: "1.4fr 1fr", alignItems: "start" }}>
            {/* Mobile: Integration image second */}
            <div className="md:hidden order-2 w-full">
              <Image
                src="/assets/integration.svg"
                alt="Integration"
                width={320}
                height={100}
                className="w-full h-auto"
              />
            </div>

            {/* Mobile: Poem appears third */}
            <div className="md:hidden order-3 w-full font-[family-name:var(--font-noto-serif)] italic text-[22px] leading-[1.65] text-black border-l-[3px] border-tic-yellow pl-[26px]">
              Integration is a birthday<br />
              <span className="pl-8 inline-block">&amp; a funeral.</span><br />
              It is playing in the unknown,<br />
              <span className="pl-8 inline-block">while knowing yourself more.</span><br />
              It is weaving.<br />
              It is collaborating.<br />
              It is titration &amp; digestion.<br />
              It is process.<br />
              It is practice with awareness.<br />
              It is the evolution of a differentiated,<br />
              <span className="pl-8 inline-block">connected self.</span><br />
              It is intra-connected identity.<br />
              It is WE, it is us.<br />
              It is the link between possibility and<br />
              <span className="pl-8 inline-block">actuality.</span>
              <br /><br />
              And it happens in The Infinity<br />
              <span className="pl-8 inline-block">Container.</span><br />
              A little at a time.
            </div>

            {/* Text content - appears first on mobile, first on desktop */}
            <div className="flex flex-col gap-[22px] order-1 md:order-1 w-full text-[#2a2a2a] mt-0 md:mt-[4em]">
              <BodyText>
                The Infinity Container is a community built for the full arc — preparation before the experience, and integration after. We work inside the Solar-Lunar Framework, a proprietary system rooted in behavioral science, somatic practice, and contemplative traditions.
              </BodyText>
              <BodyText>
                We are here for practitioners, therapists, coaches, healers, and helpers of all kinds — and for anyone navigating psychedelic experiences, life transitions, or expanded states who is ready to do the work with real support.
              </BodyText>
              <BodyText>
                Integration is not therapy. It is not a debrief. It is an ongoing practice of becoming — and TIC is built to hold that practice over time.
              </BodyText>
            </div>

            {/* Desktop: Integration image and poem in right column */}
            <div className="hidden md:flex flex-col gap-8 md:order-2 md:mt-[3em] relative">
              <div className="absolute left-0 -top-[12px] bottom-0 w-[3px] bg-tic-yellow" />
              <Image
                src="/assets/integration.svg"
                alt="Integration"
                width={320}
                height={100}
                className="w-[89%] h-auto ml-[2em]"
              />
              <div className="font-[family-name:var(--font-noto-serif)] italic text-body text-black pl-[26px]">
                Integration is a birthday<br />
                <span className="pl-8 inline-block">&amp; a funeral.</span><br />
                It is playing in the unknown,<br />
                <span className="pl-8 inline-block">while knowing yourself more.</span><br />
                It is weaving.<br />
                It is collaborating.<br />
                It is titration &amp; digestion.<br />
                It is process.<br />
                It is practice with awareness.<br />
                It is the evolution of a differentiated,<br />
                <span className="pl-8 inline-block">connected self.</span><br />
                It is intra-connected identity.<br />
                It is WE, it is us.<br />
                It is the link between possibility and<br />
                <span className="pl-8 inline-block">actuality.</span>
                <br /><br />
                And it happens in The Infinity<br />
                <span className="pl-8 inline-block">Container.</span><br />
                A little at a time.
              </div>
            </div>
          </div>

          {/* Spotify Playlist + Mushrooms */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-end justify-items-center gap-4 md:gap-8 mt-8 lg:-mt-69" style={{ marginBottom: "-2rem" }}>
            <div className="hidden lg:flex lg:justify-end flex-shrink-0 relative z-0 -mr-[12.5rem]">
              <Image
                src="/assets/mushrooms-trio.svg"
                alt=""
                aria-hidden
                width={233}
                height={359}
                className="w-[422.5px] h-auto scale-x-[-1]"
              />
            </div>
            <div className="w-full max-w-md relative z-10" style={{ marginBottom: "-7em" }}>
              <SpotifyEmbed />
            </div>
            <div className="hidden lg:flex lg:justify-start flex-shrink-0 relative z-0 -ml-[17.5rem]">
              <Image
                src="/assets/mushrooms-trio.svg"
                alt=""
                aria-hidden
                width={233}
                height={359}
                className="w-[225px] h-auto"
              />
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

      <WayDivider onBlack />

      {/* ── Two Paths ──────────────────────────────────────────────── */}
      <section className="px-6 py-[55px] md:py-[110px] overflow-hidden" style={{ backgroundColor: "#DFE3DE" }}>
        <div className="max-w-[1080px] mx-auto">
          <div className="relative">
            <SectionLabel>Who is this for?</SectionLabel>
            <SectionHeading>Two containers. One ecosystem.</SectionHeading>
            <Image
              src="/assets/closed-hand.svg"
              alt=""
              aria-hidden
              width={900}
              height={900}
              unoptimized
              className="hidden md:block absolute top-0 -right-16 lg:-right-24 w-56 lg:w-80 h-auto pointer-events-none"
              style={{ marginRight: "-9em", marginTop: "-3em" }}
            />
          </div>

          <div className="relative z-0">
            <Image
              src="/assets/open-hand.svg"
              alt=""
              aria-hidden
              width={900}
              height={900}
              unoptimized
              className="hidden md:block absolute -left-16 lg:-left-24 top-1/3 w-56 lg:w-[27rem] h-auto -z-10 pointer-events-none"
              style={{ transform: "scaleX(-1) rotate(45deg)", marginLeft: "-11em", marginTop: "13em" }}
            />

            <MembershipCards
              cards={[
              {
                label: "FOR PRACTITIONERS",
                heading: "YOU HOLD A LOT. THIS HOLDS YOU.",
                description: "For therapists, coaches, healers, bodyworkers, and space holders who are ready for a consistent place to be held — not just to hold. Weekly practice. Real tools. A community that understands the work.",
                buttonText: "EXPLORE THE PRACTITIONER PATH →",
                buttonHref: "https://the-infinity-container.mn.co/users/onboarding/plans/1483936",
                backgroundColor: "blue",
              },
              {
                label: "FOR HELPERS & SEEKERS",
                heading: "YOU DON'T HAVE TO FIGURE THIS OUT ALONE.",
                description: "For helpers, caregivers, educators, artists, and curious humans integrating their own experiences. Drop-in practice. Integration frameworks. A community of people doing the work alongside you.",
                buttonText: "EXPLORE THE PRACTICE PATH →",
                buttonHref: "https://the-infinity-container.mn.co/users/onboarding/plans/1898747",
                backgroundColor: "red",
              },
            ]}
          />
          </div>

          <div className="relative mx-auto mt-11 md:mt-[192px]">
            <div className="md:w-[75%] mx-auto bg-white border border-black/10 rounded px-[26px] py-[36px] flex flex-col items-start justify-start gap-8 relative z-10">
            <div className="max-w-[800px]">
              <h4 className="font-[family-name:var(--font-gordon)] text-[26px] uppercase tracking-[0.02em] leading-[1.3] font-normal mb-[24px]">
                Not ready<br className="md:hidden" /> for a membership? Start free.
              </h4>
              <p className="font-[family-name:var(--font-noto-serif)] text-body text-[#3a3a3a]">
                Join the free community for monthly community calls and a library of integration
                modules — each with one practice and one teaching video. A real taste of the work,
                at no cost.
              </p>
            </div>
            <a
              href={JOIN_FREE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.06em] text-[12px] border-[1.5px] border-black text-black px-[24px] py-[16px] rounded-sm hover:bg-black hover:text-white transition-colors w-[24em] md:w-[61em] text-center"
            >
              Join Free →
            </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/find-my-membership"
              className="font-[family-name:var(--font-noto-serif)] italic text-body underline underline-offset-4 hover:text-tic-brown transition-colors"
            >
              Not sure which path fits you? Take the 7-question quiz →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Framework ──────────────────────────────────────────────── */}
      <section className="relative text-white pt-[60px] md:pt-[120px] pb-[50px] md:pb-[100px] overflow-hidden" style={{ backgroundColor: "#0A0E10" }}>
        {/* Spiral image row — scoped to the whole section so the group centers between the section's top and bottom edges, independent of the text content's height */}
        <div className="hidden lg:flex flex-col justify-around items-center gap-[40px] absolute inset-0 pointer-events-none" aria-hidden>
          <Image
            src="/assets/solar-lunar-spiral.svg"
            alt=""
            width={890}
            height={1386}
            style={{ filter: "invert(1)" }}
            className="h-[27.3%] w-auto opacity-20"
          />
          <Image
            src="/assets/solar-lunar-spiral.svg"
            alt=""
            width={890}
            height={1386}
            style={{ filter: "invert(1)" }}
            className="h-[27.3%] w-auto opacity-20"
          />
          <Image
            src="/assets/solar-lunar-spiral.svg"
            alt=""
            width={890}
            height={1386}
            style={{ filter: "invert(1)" }}
            className="h-[27.3%] w-auto opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 flex flex-col lg:justify-center">
          <div>
            <SectionLabel color="text-tic-yellow">Our approach</SectionLabel>
            <SectionHeading>
              Integration is not an event.
              <br />
              It is a system.
            </SectionHeading>
            <BodyText className="text-tic-grey mb-[44px]">
              The Solar-Lunar Framework is TIC&apos;s proprietary integration system — built on
              behavioral science, somatic practice, and contemplative traditions. It maps the full
              arc across two spirals:
            </BodyText>

            <div className="mt-10 lg:mt-[4em]">
              <ApproachCards />
            </div>

            <Link
              href="/what-is-integration#our-system"
              className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-[22px] text-tic-yellow border-b border-tic-yellow pb-[55px] lg:pb-0 hover:text-tic-pink hover:border-tic-pink transition-colors block w-fit mx-auto text-center mt-10 lg:mt-0"
            >
              Learn more about the Solar-Lunar Framework →
            </Link>
          </div>

          <p className="font-[family-name:var(--font-noto-serif)] italic text-tic-grey text-[25px] mt-12 text-center max-w-[650px] mx-auto" style={{ lineHeight: "41px" }}>
            Every program, session, and theme inside TIC is organized within this framework. It
            is not a curriculum you complete. It is a practice you return to.
          </p>
        </div>
      </section>

      <WayDivider />

      {/* ── Testimonials ───────────────────────────────────────────── */}
      <section className="relative bg-white px-6 py-[55px] md:py-[110px] overflow-hidden">
        <Image
          src="/assets/frog.svg"
          alt=""
          aria-hidden
          width={306}
          height={207}
          className="hidden md:block absolute h-auto pointer-events-none"
          style={{ bottom: "33px", right: "62px", width: "244px" }}
        />
        <div className="max-w-[1080px] mx-auto">
          <h2
            className="font-[family-name:var(--font-gordon)] uppercase tracking-wide text-center mb-14"
            style={{ fontSize: "clamp(1.625rem, 4vw, 2.5rem)" }}
          >
            What our members say.
          </h2>

          <div className="grid md:grid-cols-2 gap-11 max-w-[920px] mx-auto">
            <div>
              <blockquote className="font-[family-name:var(--font-noto-serif)] italic text-body border-l-[3px] border-tic-pink pl-6 mb-[18px]">
                &ldquo;Friday practice is a place where I don&apos;t have to do the holding. I get
                to be held — and I also learn techniques I can use with my clients.&rdquo;
              </blockquote>
              <cite className="font-[family-name:var(--font-gordon)] not-italic uppercase tracking-[0.16em] text-[11px] text-tic-dark-grey pl-[27px]">
                — Practice Member
              </cite>
            </div>
            <div>
              <blockquote className="font-[family-name:var(--font-noto-serif)] italic text-body border-l-[3px] border-tic-pink pl-6 mb-[18px]">
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
      <section className="bg-tic-yellow px-6 py-[50px] md:py-[100px] text-center">
        <h2
          className="font-[family-name:var(--font-gordon)] uppercase tracking-wide mb-[18px]"
          style={{ fontSize: "clamp(1.625rem, 4vw, 2.5rem)" }}
        >
          Integration as<br className="md:hidden" /> a practice,<br className="md:hidden" /> not an event.
        </h2>
        <p className="font-[family-name:var(--font-noto-serif)] text-body max-w-[560px] mx-auto mb-10 text-[#2a2a1a]">
          The TIC newsletter brings you integration frameworks, somatic tools, and practitioner
          resources — rooted in the Solar-Lunar system. Written by Dr. Victoria Sterkin.
        </p>
        <InlineNewsletter inputBg="bg-white" />
        <p className="mt-4 text-xs text-[#5a570f]">No spam. Unsubscribe anytime.</p>
      </section>

    </main>
  );
}

function WayDivider({ onBlack = false }: { onBlack?: boolean }) {
  return (
    <div
      className={`px-6 pt-[50px] md:pt-[100px] pb-[118px] md:pb-[168px] text-center ${
        onBlack ? "bg-black" : "bg-tic-olive"
      }`}
    >
      <h2
        className={`font-[family-name:var(--font-gordon)] uppercase font-bold ${
          onBlack ? "text-white" : "text-tic-yellow"
        }`}
        style={{ fontSize: "clamp(24px, 8vw, 115px)", letterSpacing: "0.09em", marginBottom: "-68px" }}
      >
        Integration
        <br />
        is the way
      </h2>
    </div>
  );
}
