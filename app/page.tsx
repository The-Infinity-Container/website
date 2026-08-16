import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { resolvePageMetadata } from "@/lib/pageSeo";
import HeroVideo from "@/components/HeroVideo";
import InlineNewsletter from "@/components/InlineNewsletter";
import NewsletterPopup from "@/components/NewsletterPopup";
import ApproachCards from "@/components/ApproachCards";
import MembershipCards from "@/components/MembershipCards";
import SpotifyEmbed from "@/components/SpotifyEmbed";
import SectionLabel from "@/components/SectionLabel";
import SectionHeading from "@/components/SectionHeading";
import BodyText from "@/components/BodyText";
import FAQ, { FAQParagraph, type FAQItem } from "@/components/FAQ";
import ConsoleMessage from "@/components/ConsoleMessage";

const FIND_MEMBERSHIP_URL = "https://the-infinity-container.mn.co/users/onboarding/plans";
const JOIN_FREE_URL = "https://the-infinity-container.mn.co/users/onboarding/plans/1484020";
const SIGNIN_URL = "https://the-infinity-container.mn.co/sign_in";

export async function generateMetadata(): Promise<Metadata> {
  return resolvePageMetadata("/", {
    title: "Psychedelic Integration Community | The Infinity Container",
    description:
      "A psychedelic integration community for practitioners and seekers navigating life transitions and expanded states — built on the Solar-Lunar Framework.",
  });
}

const homeFaqItems: FAQItem[] = [
  {
    question: "What is The Infinity Container?",
    answer: (
      <FAQParagraph>
        The Infinity Container is a psychedelic integration community built around the
        Solar-Lunar Framework — a proprietary system rooted in behavioral science, somatic
        practice, and contemplative traditions. We exist for practitioners, helpers, and anyone
        navigating a psychedelic experience, life transition, or expanded state who is ready to do
        the work with real support. Integration is not something we teach about here. It&apos;s
        something we practice together.
      </FAQParagraph>
    ),
  },
  {
    question: "What is psychedelic integration?",
    answer: (
      <FAQParagraph>
        Psychedelic integration is the process of making what happens in an expanded state a
        permanent part of who you are. The experience is the doorway. Integration is everything
        that happens after you walk through it — in the body, in behavior, in relationship, and
        over time. Without integration, even the most profound experiences fade. With it, they
        become capacity. TIC is built to hold that process — through weekly practice, a consistent
        framework, and a community doing the same work alongside you.
      </FAQParagraph>
    ),
  },
  {
    question: "Is TIC therapy?",
    answer: (
      <FAQParagraph>
        No. The Infinity Container is not therapy and is not a substitute for clinical care. It is
        an ongoing integration practice community — built around embodied practice, a consistent
        framework, and relational support. Many members work with therapists alongside their TIC
        membership and find the two complement each other well. If you are in crisis or need
        clinical support, please seek professional care.
      </FAQParagraph>
    ),
  },
  {
    question: "Who is TIC for?",
    answer: (
      <FAQParagraph>
        TIC is for two communities: practitioners, therapists, coaches, healers, and space-holders
        who give endlessly and need a place to be held themselves — and helpers, seekers, and
        curious humans integrating their own experiences, life transitions, or psychedelic
        journeys. If you&apos;re not sure where you fit, the Free membership is open to everyone,
        and our 7-question quiz can help you find the right tier.
      </FAQParagraph>
    ),
  },
  {
    question: "Is TIC affiliated with a religion or specific psychedelic substance or protocol?",
    answer: (
      <FAQParagraph>
        No. The Infinity Container is not affiliated with any religion, church, or spiritual
        tradition. We are not tied to any specific medicine, substance, or protocol. The
        Solar-Lunar Framework is built on behavioral science, somatic practice, interpersonal
        neurobiology, and contemplative traditions — drawing from multiple lineages without being
        doctrine-based. What you work with, how you work with it, and what your beliefs are is
        yours. TIC holds the practice container. The path is your own.
      </FAQParagraph>
    ),
  },
  {
    question: "Do I need a psychedelic experience to join?",
    answer: (
      <FAQParagraph>
        No. Integration is the process of weaving any significant experience into who you are —
        grief, birth, a major life transition, a creative breakthrough, a spiritual moment. The
        tools, practices, and framework are the same regardless of whether psychedelics are part
        of your path. If they are, you&apos;re in the right place. If they&apos;re not, you&apos;re
        still in the right place.
      </FAQParagraph>
    ),
  },
  {
    question: "How do I integrate a psychedelic experience?",
    answer: (
      <>
        <FAQParagraph>Integration begins before the journey.</FAQParagraph>
        <FAQParagraph>
          Preparation is the first half of the work — arriving grounded, resourced, and
          intentional before an experience significantly shapes what you&apos;re able to receive
          and how you&apos;re able to integrate afterward. This is why the Solar-Lunar Framework
          includes seven Solar preparation capacities alongside thirteen Lunar integration
          capacities. The arc is complete: prepare well, integrate fully.
        </FAQParagraph>
        <FAQParagraph>
          After an experience, begin with slowing down. Before you try to make meaning of what
          happened, give yourself time to simply be with it — in your body, not just your head.
          Journaling, movement, rest, and nature are all integration practices. So is talking with
          someone who understands the territory. The most important thing is not to rush back into
          ordinary life as if nothing happened. Something did happen. Give it room.
        </FAQParagraph>
        <FAQParagraph>
          At TIC, we practice both preparation and integration through the Solar-Lunar Framework —
          a system that maps the full arc of transformative experience. Each month the community
          moves through one capacity together, with guided practice, teaching, and community
          support. You don&apos;t have to figure out what to do next. The framework holds the
          sequence.
        </FAQParagraph>
      </>
    ),
  },
  {
    question: "What if I had a difficult or overwhelming experience?",
    answer: (
      <>
        <FAQParagraph>
          You&apos;re not alone, and what you went through doesn&apos;t mean something went wrong
          with you. Difficult experiences — what some call &ldquo;challenging journeys&rdquo; —
          often carry the most important material. They&apos;re harder to integrate, not
          impossible.
        </FAQParagraph>
        <FAQParagraph>
          What helps: grounding practices, rest, time in nature, gentle movement, and support from
          someone who understands psychedelic experiences without pathologizing them. What
          doesn&apos;t help: rushing to make it mean something before you&apos;ve had time to
          settle, or isolating yourself because you don&apos;t know who to tell.
        </FAQParagraph>
        <FAQParagraph>
          TIC&apos;s Community Call is a free, low-pressure space to land. You don&apos;t have to
          share. You don&apos;t have to have it figured out. Come as you are. The first Saturday of
          every month, 10:00–11:30am PST.
        </FAQParagraph>
        <FAQParagraph>
          If you are in crisis or having thoughts of harming yourself, please reach out to a crisis
          line or mental health professional immediately.
        </FAQParagraph>
      </>
    ),
  },
  {
    question: "What's the difference between psychedelic therapy and integration?",
    answer: (
      <>
        <FAQParagraph>
          Psychedelic therapy typically refers to a clinical model — a therapist-guided session
          using a psychedelic substance in a therapeutic context, like MDMA-assisted therapy or
          psilocybin-assisted therapy in a clinical trial or legal setting. It is a specific,
          structured clinical intervention.
        </FAQParagraph>
        <FAQParagraph>
          Integration is what happens after — and it applies whether or not the experience
          happened in a clinical setting. Integration is the ongoing practice of making what you
          found in an expanded state part of who you are: in your body, your behavior, your
          relationships, and your daily life. It requires time, practice, and support — and it is
          rarely provided by the clinical model that facilitated the experience.
        </FAQParagraph>
        <FAQParagraph>
          TIC is an integration community, not a therapy practice. We don&apos;t facilitate
          psychedelic experiences. We support the work that comes after.
        </FAQParagraph>
      </>
    ),
  },
  {
    question: "How long does integration take?",
    answer: (
      <>
        <FAQParagraph>
          Honestly: it depends on the experience, and on what it opened. Some experiences
          integrate relatively quickly — weeks to a few months of consistent practice. Others,
          particularly those that touch deep grief, trauma, or identity, spiral for years.
          Integration is not linear and it doesn&apos;t have a finish line.
        </FAQParagraph>
        <FAQParagraph>
          The more honest question is not &ldquo;how long will this take&rdquo; but &ldquo;am I
          giving this what it needs&rdquo; — which means consistent practice, embodied support, a
          container to return to, and community. TIC is built for the long game. The Solar-Lunar
          Framework moves through capacities month by month, and many members have been in the
          container for years — not because they&apos;re stuck, but because integration is an
          ongoing practice of becoming, not a problem to solve.
        </FAQParagraph>
      </>
    ),
  },
];

export default function HomePage() {
  return (
    <main>
      <ConsoleMessage
        messages={[
          "From me: You are supported to grow.",
          "This ecosystem creates generative power for the good of the planet.",
          "Cheers to collective health!",
        ]}
      />
      <NewsletterPopup />
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <header className="bg-black">
        {/* Logo-open animation, extended height, text overlaid below the globe */}
        <div className="relative w-full h-[130vh] md:h-[200vh] overflow-hidden bg-black">
          <HeroVideo />

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
            className="font-[family-name:var(--font-noto-serif)] text-tic-grey max-w-[640px] mx-auto mb-[calc(var(--spacing)*6.5)] md:mb-8 leading-[1.75]"
            style={{ fontSize: "clamp(0.788rem, 1.54vw, 0.963rem)" }}
          >
            Psychedelic integration, life transitions, and expanded experience — for the people
            doing the work and the practitioners who hold that space.
          </p>

          <Link
            href="/find-my-membership"
            className="inline-block font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-sm bg-tic-salmon text-black px-5 py-4 rounded-sm hover:bg-tic-pink transition-colors"
          >
            Find My Membership →
          </Link>
          <a
            href={SIGNIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-[calc(var(--spacing)*6.5)] md:mt-3 mb-[68px] md:mb-0 text-sm text-tic-yellow"
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
          <div className="flex flex-col gap-8 md:gap-16 w-full md:grid md:mt-[2em]" style={{ gridTemplateColumns: "1.4fr 1fr", alignItems: "start" }}>
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
            <div className="w-full max-w-md relative z-10" style={{ marginBottom: "-7em", marginTop: "5em" }}>
              <Image
                src="/assets/mushrooms-trio.svg"
                alt=""
                aria-hidden
                width={233}
                height={359}
                className="lg:hidden absolute -top-21 left-2 z-0 w-14 h-auto scale-x-[-1] pointer-events-none"
              />
              <Image
                src="/assets/mushrooms-trio.svg"
                alt=""
                aria-hidden
                width={233}
                height={359}
                className="lg:hidden absolute -top-21 right-2 z-0 w-14 h-auto pointer-events-none"
              />
              <div className="relative z-10">
                <SpotifyEmbed />
              </div>
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
              Not sure which path fits you?<br className="md:hidden" /> Take the 7-question quiz →
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

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <FAQ items={homeFaqItems} />

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
