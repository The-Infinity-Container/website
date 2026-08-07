import type { Metadata } from "next";
import Image from "next/image";
import LocalCallTime from "@/components/LocalCallTime";
import SectionLabel from "@/components/SectionLabel";
import SectionHeading from "@/components/SectionHeading";
import BodyText from "@/components/BodyText";
import MembershipCards from "@/components/MembershipCards";

export const metadata: Metadata = {
  title: "Community Call | The Infinity Container",
  description:
    "Join The Infinity Container's free monthly Community Call — a 90-minute integration session with teaching, embodied practice, and community sharing. First Saturday of the month, 10am PST.",
};

const SIGN_IN_URL = "https://the-infinity-container.mn.co/sign_in";
const FREE_MEMBERSHIP_URL = "https://the-infinity-container.mn.co/users/onboarding/plans/1484020";

const LEFT_REASONS = [
  "To integrate a journey",
  "To integrate a life experience",
  "To connect",
  "To receive support",
  "To offer support",
  "To gain perspective",
  "Because you're curious about membership",
];

const RIGHT_REASONS = [
  "To give yourself time to feel",
  "To meditate",
  "To listen",
  "To shift states",
  "To share part of yourself",
  "To have a voice",
  "To simply lay down and rest",
];

const TESTIMONIALS = [
  {
    quote:
      "I always leave these containers feeling much more grounded in myself and with a new tool to go forward with on my journey. The variety of people who join are also wonderful — hearing their thoughts and experiences helps me feel more connected to not only them, but everyone around me in my life.",
    cite: "— A.W.",
  },
  {
    quote:
      "As a practitioner it can be easy to overlook integration for myself. Being part of the Infinity Container has worked as a gentle reminder to carve out time for my own work. There's an ease that comes from equipping yourself in the presence of others — a collective strength.",
    cite: "— W.Z.",
  },
  {
    quote:
      "Witnessing others explore their humanity and Self with such courage, levity, real-ness is incredibly inspiring, validating and a gift. We heal together, we are an organism.",
    cite: "— S.G.",
  },
];

export default function CommunityCallPage() {
  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <header className="bg-[#d5d069] px-6 pt-[55px] md:pt-[110px] pb-[45px] md:pb-[90px] text-center">
        <h1
          className="font-[family-name:var(--font-gordon)] font-normal tracking-[0.02em] leading-[1.15] text-[#0b0d10] max-w-[1100px] mx-auto mb-6"
          style={{ fontSize: "clamp(34px, 5.5vw, 58px)" }}
        >
          Meet us before you join anything.
        </h1>
        <p className="font-[family-name:var(--font-noto-serif)] italic text-body text-[#817202] max-w-[820px] mx-auto mb-[52px]">
          Once a month, we gather. You don&apos;t have to be ready for anything else.
        </p>

        <div className="relative inline-flex flex-col items-center border border-[#0b0d10]/20 rounded px-2.5 pt-0 pb-0 md:px-24 md:pt-14 md:pb-24 mb-[52px] max-w-[1100px] w-full">
          <Image
            src="/assets/bee-disco-2.png"
            alt=""
            width={480}
            height={417}
            className="hidden md:block absolute w-[140px] left-6 top-6 rotate-[8deg] z-10"
          />
          <Image
            src="/assets/bee-disco-1.png"
            alt=""
            width={480}
            height={370}
            className="hidden md:block absolute w-[120px] right-[9px] bottom-6 rotate-[8deg] z-10"
          />
          <p
            className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-[#0b0d10] py-8 md:py-3.5"
            style={{ fontSize: "clamp(14px, 1.8vw, 17px)" }}
          >
            First Saturday<br className="md:hidden" /> of the month
          </p>
          <p
            className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-[#0b0d10] py-8 md:py-3.5 w-full text-center border-t border-[#0b0d10]/12"
            style={{ fontSize: "clamp(14px, 1.8vw, 17px)" }}
          >
            <LocalCallTime />
          </p>
          <p
            className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-[#0b0d10] py-8 md:py-3.5 w-full text-center border-t border-[#0b0d10]/12"
            style={{ fontSize: "clamp(14px, 1.8vw, 17px)" }}
          >
            Free to attend · Zoom link inside the free membership
          </p>
        </div>

        <br />
        <br />

        <a
          href={FREE_MEMBERSHIP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-[family-name:var(--font-gordon)] text-sm uppercase tracking-[0.12em] bg-[#eb731f] text-[#0b0d10] px-10 py-[17px] rounded-[3px] mb-5 hover:bg-tic-pink transition-colors"
        >
          Join Free to Get the Link →
        </a>
        <a
          href={SIGN_IN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-[13px] text-[#817202] hover:text-[#0b0d10] transition-colors"
        >
          Already a member? Sign in →
        </a>

        <div className="mx-auto">
          <div className="grid grid-cols-[1fr_2.2fr_1fr] gap-2 mt-[2em] mb-[2em] md:grid-cols-3 md:gap-10 md:mt-0 md:mb-0 items-center max-w-[1400px] mx-auto">
            <Image
              src="/assets/satellite.svg"
              alt=""
              width={1074}
              height={1012}
              className="w-[246px] justify-self-end"
              priority
            />
            <Image
              src="/assets/no-cost-v2.svg"
              alt="No cost. All are welcome."
              width={414}
              height={156}
              className="w-[332px] mx-auto rotate-[-1deg]"
            />
            <Image
              src="/assets/satellite.svg"
              alt=""
              width={1074}
              height={1012}
              className="w-[246px] justify-self-start scale-x-[-1]"
            />
          </div>
        </div>
      </header>

      {/* ── What is it? ────────────────────────────────────────────── */}
      <section className="bg-[#fcfcfc] px-6 py-[50px] md:py-[100px]" style={{ marginTop: "-2em", paddingBottom: "0px" }}>
        <div className="max-w-[1290px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:mb-[-50px]">
            <div className="order-1 md:order-none">
              <SectionLabel>What is it?</SectionLabel>
              <SectionHeading>
                90 minutes. A teaching,
                <br />
                a practice, and each other.
              </SectionHeading>
            </div>
            <Image
              src="/assets/lunar-rebuilt-final.svg"
              alt=""
              width={556}
              height={538}
              className="w-[336px] shrink-0 mt-1 mb-2 md:mb-0 order-0 md:order-none md:-translate-x-[50px] md:-translate-y-[100px]"
            />
          </div>

          <div>
            <BodyText className="text-[#222] mb-6">
              Each Community Call holds a teaching and an embodied practice led by behaviorist and TIC founder Dr. Victoria Sterkin. There&apos;s always an inquiry that opens into community sharing — a chance to hear how many different people are living the same question. We expand and learn from listening, and from holding space for the many.
            </BodyText>
            <BodyText className="text-[#222] mb-6">
              Calls are tied to the capacity we&apos;re focusing on that month inside the Solar-Lunar Framework. They&apos;re robust, real, and always bring together people who&apos;ve been in the container for years alongside people who just found us.
            </BodyText>
            <BodyText className="text-[#222] mb-6">
              Recordings are edited (member shares removed) and archived in the free membership library and on YouTube.
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-center mt-10">
            <Image
              src="/assets/solar.png"
              alt=""
              width={500}
              height={500}
              className="w-[80%] h-auto mx-auto md:mx-0"
            />
            <p
              className="font-[family-name:var(--font-noto-serif)] italic leading-[1.6] text-tic-brown border-l-[3px] border-tic-brown pl-7 mb-[3em] md:mb-0"
              style={{ fontSize: "clamp(20px, 3vw, 26px)" }}
            >
              &quot;It&apos;s so important to have space to feel spacious. To process all that we are experiencing. To keep us more awake alive.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* ── Come as you are ────────────────────────────────────────── */}
      <section className="bg-tic-grey px-6 py-[50px] md:py-[100px]">
        <div className="max-w-[1290px] mx-auto">
          <div>
            <SectionLabel>The only requirement</SectionLabel>
            <SectionHeading>Come as you are.</SectionHeading>
            <p className="font-[family-name:var(--font-noto-serif)] italic text-body text-[#2a2a2a] mb-11">
              No requirement to share. No requirement to be on camera. No requirement to be ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-0 mb-[52px] text-left">
            <div>
              {LEFT_REASONS.map((r) => (
                <p
                  key={r}
                  className="relative text-body text-[#2a2a2a] py-2.5 pl-7 border-b border-[#0b0d10]/[0.07] before:content-['∞'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-sm before:text-[#eb731f] before:font-serif before:leading-none"
                >
                  {r}
                </p>
              ))}
            </div>
            <div className="md:w-[69%]">
              {RIGHT_REASONS.map((r) => (
                <p
                  key={r}
                  className="relative text-body text-[#2a2a2a] py-2.5 pl-7 border-b border-[#0b0d10]/[0.07] before:content-['∞'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-sm before:text-[#eb731f] before:font-serif before:leading-none"
                >
                  {r}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:[grid-template-columns:minmax(0,65%)_minmax(0,35%)] gap-8 text-center">
            <p
              className="font-[family-name:var(--font-noto-serif)] italic text-body text-tic-brown text-center pt-0 md:pt-0"
            >
              Turn off your video. Lay down if you need to. Any level of participation is welcome.
              <br />
              The only requirement is respectful presence.
            </p>
            <Image
              src="/assets/plant-pot-maroon.svg"
              alt=""
              width={147}
              height={293}
              className="relative z-10 w-[171px] mx-auto md:w-[270px] md:mx-0 md:ml-auto md:-mt-[447px]"
            />
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────────── */}
      <section className="bg-[#fcfcfc] px-6 py-[50px] md:py-[100px]">
        <div className="max-w-[1290px] mx-auto">
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div>
                <SectionLabel>What members say</SectionLabel>
                <SectionHeading>Real people. Real calls.</SectionHeading>
              </div>
              <Image
                src="/assets/postage-stamp.svg"
                alt=""
                width={76}
                height={82}
                className="relative w-[130px] shrink-0 self-end mb-12 md:w-[234px] md:bottom-[4em] md:self-auto md:mb-0"
                style={{
                  // Overhangs the 1290px container by up to 6em on wide screens, but
                  // shrinks on narrower ones so it never crosses the viewport edge
                  // (the page hides horizontal overflow instead of scrolling to it).
                  marginRight: "calc(-1 * min(6em, 8px + max(0px, (100vw - 1338px) / 2)))",
                }}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 md:-mt-[3em]">
              {TESTIMONIALS.map((t) => (
                <div key={t.cite} className="flex flex-col">
                  <blockquote className="font-[family-name:var(--font-noto-serif)] italic text-body text-[#0b0d10] border-l-[3px] border-tic-pink pl-[22px] mb-[18px] grow">
                    &quot;{t.quote}&quot;
                  </blockquote>
                  <cite className="font-[family-name:var(--font-gordon)] not-italic text-[11px] tracking-[0.16em] uppercase text-tic-dark-grey pl-[25px]">
                    {t.cite}
                  </cite>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────────────────── */}
      <div className="px-2 pt-[50px] md:pt-[100px] pb-[118px] md:pb-[168px] text-center bg-[#817202]">
        <h2 className="font-[family-name:var(--font-gordon)] uppercase font-bold text-[#d5d069]" style={{ fontSize: "clamp(24px, 8vw, 115px)", letterSpacing: "0.09em", marginBottom: "-68px" }}>
          Integration
          <br />
          is the way
        </h2>
      </div>

      {/* ── Free membership ────────────────────────────────────────── */}
      <section id="join" className="bg-[#d5d069] px-6 py-[50px] md:py-[100px] text-[#0b0d10]">
        <div className="max-w-[1290px] mx-auto">
          <div className="relative">
            <Image
              src="/assets/bee-disco.svg"
              alt=""
              width={222}
              height={166}
              className="hidden md:block absolute w-[136px] -top-[140px] right-[8%] rotate-[10deg] z-10"
            />
            <Image
              src="/assets/bee-disco-1.png"
              alt=""
              width={480}
              height={370}
              className="hidden md:block absolute -top-[40px] -right-[2%] rotate-[4deg] z-10"
              style={{ width: "162px" }}
            />
            <Image
              src="/assets/bee-disco-2.png"
              alt=""
              width={480}
              height={417}
              className="hidden md:block absolute w-[136px] top-[80px] right-[10%] rotate-[-6deg] z-10"
            />
            <SectionLabel>The free membership</SectionLabel>
            <SectionHeading color="text-[#0b0d10]">
              The call is just the
              <br />
              beginning.
            </SectionHeading>
          </div>
          <BodyText className="text-[#0b0d10] mb-[1cm] md:mb-[52px]">
            When you join the free membership, you get access to:
          </BodyText>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mb-[52px]">
            <Image
              src="/assets/bee-disco-2.png"
              alt=""
              width={480}
              height={417}
              className="hidden md:block absolute w-[76px] -bottom-10 -left-[2%] rotate-[-16deg] scale-x-[-1] z-10"
            />
            <Image
              src="/assets/bee-disco-1.png"
              alt=""
              width={480}
              height={370}
              className="md:hidden absolute w-[66px] -top-8 right-3 rotate-[4deg] z-10"
            />

            <div className="bg-[#fcfcfc] rounded-[4px] p-9 px-7">
              <h4 className="font-[family-name:var(--font-gordon)] font-normal text-[18px] tracking-[0.04em] text-[#817202] mb-3.5">
                The monthly Community Call
              </h4>
              <p className="text-body text-[#2a2a2a]">
                Join live on the first Saturday of each month. Zoom link sent to your inbox once you&apos;re in.
              </p>
            </div>
            <div className="bg-[#fcfcfc] rounded-[4px] p-9 px-7">
              <h4 className="font-[family-name:var(--font-gordon)] font-normal text-[18px] tracking-[0.04em] text-[#817202] mb-3.5">
                The integration library
              </h4>
              <p className="text-body text-[#2a2a2a]">
                Teaching videos and practice recordings from past calls — each tied to a capacity in the Solar-Lunar Framework. One teaching and one practice per capacity.
              </p>
            </div>
            <div className="bg-[#fcfcfc] rounded-[4px] p-9 px-7">
              <h4 className="font-[family-name:var(--font-gordon)] font-normal text-[18px] tracking-[0.04em] text-[#817202] mb-3.5">
                The community
              </h4>
              <p className="text-body text-[#2a2a2a]">
                A home base inside Mighty Network where you can connect with other members between calls.
              </p>
            </div>

            <Image
              src="/assets/bee-disco-2.png"
              alt=""
              width={480}
              height={417}
              className="md:hidden absolute w-[60px] -bottom-6 left-3 z-10"
            />
          </div>

          <div className="text-center">
            <a
              href={FREE_MEMBERSHIP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-[family-name:var(--font-gordon)] text-sm uppercase tracking-[0.12em] bg-[#eb731f] text-[#0b0d10] px-11 py-[17px] rounded-[3px] mb-5 hover:bg-tic-pink transition-colors"
            >
              Join the Free Membership →
            </a>
            <p className="font-[family-name:var(--font-noto-serif)] italic text-body mt-[5px] text-[#817202]">
              Already in the Practice or Practitioner membership? The call link is already yours — check your membership space.
            </p>
          </div>
        </div>
      </section>

      {/* ── Go deeper ──────────────────────────────────────────────── */}
      <section className="bg-[#fcfcfc] px-6 pt-[50px] md:pt-[100px] pb-[70px] md:pb-[140px]">
        <div className="max-w-[90vw] mx-auto">
          <div className="flex items-start justify-between md:block">
            <SectionLabel>Keep going</SectionLabel>
            <Image
              src="/assets/shell.svg"
              alt="Shell"
              width={1203}
              height={1662}
              className="md:hidden h-auto w-12"
              aria-hidden
            />
          </div>
          <SectionHeading>
            The call is where many people start.
            <br />
            The memberships are
            <br />
            where the work continues.
          </SectionHeading>
          <div className="grid md:grid-cols-[70%_30%] gap-[60px] items-start mb-[44px]">
            <BodyText className="text-[#222]">
              The Practice and Practitioner memberships include everything in the free tier — plus weekly Friday practice sessions, monthly integration themes, the full capacity library, and a community moving through the Solar-Lunar Framework together.
            </BodyText>
            <Image
              src="/assets/shell.svg"
              alt="Shell"
              width={1203}
              height={1662}
              className="hidden md:block h-auto md:w-[51%]"
              style={{
                // Full -13em (-208px) pull-up only kicks in at >=1728px wide, where the
                // shell clears the heading text horizontally. Below that it scales down
                // to 0 by 1280px wide, so it never rises into the heading on narrow screens.
                marginTop: "clamp(-208px, calc((1280px - 100vw) * 0.4643), 0px)",
              }}
              aria-hidden
            />
          </div>

          <MembershipCards
            cards={[
              {
                label: "For Helpers & Seekers",
                heading: "Weekly practice. Real support.",
                description:
                  "Weekly Friday sessions, monthly themes, the full integration library. For anyone ready to practice the capacities, not just learn about them.",
                buttonText: "Explore the Practice Membership →",
                buttonHref: "https://the-infinity-container.mn.co/users/onboarding/plans/1898747",
                backgroundColor: "red",
              },
              {
                label: "For Practitioners",
                heading: "Practice it — and learn to hold it.",
                description:
                  "Everything in Practice, plus professional tools, practitioner-focused teaching, and a peer community doing their own work alongside their client work.",
                buttonText: "Explore the Practitioner Membership →",
                buttonHref: "https://the-infinity-container.mn.co/users/onboarding/plans/1483936",
                backgroundColor: "blue",
              },
            ]}
          />

          <div className="text-center" style={{ marginTop: "80px" }}>
            <a
              href="/find-my-membership"
              className="font-[family-name:var(--font-noto-serif)] text-body italic text-[#0b0d10] underline decoration-1 underline-offset-4 hover:text-tic-brown transition-colors"
            >
              Not sure which fits?<br className="md:hidden" /> Take the 7-question quiz →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
