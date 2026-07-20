import type { Metadata } from "next";
import Image from "next/image";
import LocalCallTime from "@/components/LocalCallTime";

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
      <header className="bg-[#d5d069] px-6 pt-[110px] pb-[90px] text-center">
        <h1
          className="font-[family-name:var(--font-gordon)] font-normal tracking-[0.02em] leading-[1.15] text-[#0b0d10] max-w-[1100px] mx-auto mb-6"
          style={{ fontSize: "clamp(34px, 5.5vw, 58px)" }}
        >
          Meet us before you join anything.
        </h1>
        <p
          className="font-[family-name:var(--font-noto-serif)] italic text-[#817202] max-w-[820px] mx-auto mb-[52px] leading-[1.7]"
          style={{ fontSize: "clamp(17px, 2.2vw, 21px)" }}
        >
          Once a month, we gather. You don&apos;t have to be ready for anything else.
        </p>

        <div className="relative inline-flex flex-col items-center border border-[#0b0d10]/20 rounded px-24 pt-14 pb-24 mb-[52px] max-w-[1100px] w-full">
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
            className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-[#0b0d10] py-3.5"
            style={{ fontSize: "clamp(14px, 1.8vw, 17px)" }}
          >
            First Saturday of the month
          </p>
          <p
            className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-[#0b0d10] py-3.5 w-full text-center border-t border-[#0b0d10]/12"
            style={{ fontSize: "clamp(14px, 1.8vw, 17px)" }}
          >
            10:00am – 11:30am PST
            <LocalCallTime />
          </p>
          <p
            className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-[#0b0d10] py-3.5 w-full text-center border-t border-[#0b0d10]/12"
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
          className="block text-[13px] text-[#817202] mb-16 hover:text-[#0b0d10] transition-colors"
        >
          Already a member? Sign in →
        </a>

        <div className="mx-auto">
          <div className="hidden md:grid grid-cols-2 gap-12 items-center max-w-[1400px] mx-auto">
            <Image
              src="/assets/satellite.svg"
              alt=""
              width={1074}
              height={1012}
              className="w-[600px] ml-auto block"
              priority
            />
            <Image
              src="/assets/no-cost-note.png"
              alt="No cost. All are welcome."
              width={748}
              height={263}
              className="w-[510px] mr-auto rotate-[-6deg]"
            />
          </div>
          <div className="md:hidden max-w-[260px] mx-auto">
            <Image
              src="/assets/satellite.svg"
              alt=""
              width={1074}
              height={1012}
              className="w-[200px] mx-auto block"
              priority
            />
            <Image
              src="/assets/no-cost-note.png"
              alt="No cost. All are welcome."
              width={748}
              height={263}
              className="w-[150px] mx-auto mt-4 rotate-[-3deg]"
            />
          </div>
        </div>
      </header>

      {/* ── What is it? ────────────────────────────────────────────── */}
      <section className="bg-[#fcfcfc] px-6 py-[100px]">
        <div className="max-w-[1290px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:mb-[-50px]">
            <div className="order-1 md:order-none">
              <p
                className="font-[family-name:var(--font-gordon)] text-tic-dark-grey uppercase"
                style={{ fontSize: "25px", letterSpacing: "0.42px", marginBottom: "60px" }}
              >
                What is it?
              </p>
              <h2
                className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.4] mb-[28px]"
                style={{ fontSize: "clamp(21px, 3.24vw, 34px)" }}
              >
                90 minutes. A teaching,
                <br />
                a practice, and each other.
              </h2>
            </div>
            <Image
              src="/assets/Lunar.png"
              alt=""
              width={500}
              height={500}
              className="w-[336px] shrink-0 mt-1 mb-2 md:mb-0 order-0 md:order-none md:-translate-x-[50px] -translate-y-[100px]"
            />
          </div>

          <div>
            <p className="text-[#222] mb-6" style={{ fontSize: "23px", lineHeight: "37px" }}>
              Each Community Call holds a teaching and an embodied practice led by behaviorist and TIC founder Dr. Victoria Sterkin. There&apos;s always an inquiry that opens into community sharing — a chance to hear how many different people are living the same question. We expand and learn from listening, and from holding space for the many.
            </p>
            <p className="text-[#222] mb-6" style={{ fontSize: "23px", lineHeight: "37px" }}>
              Calls are tied to the capacity we&apos;re focusing on that month inside the Solar-Lunar Framework. They&apos;re robust, real, and always bring together people who&apos;ve been in the container for years alongside people who just found us.
            </p>
            <p className="text-[#222] mb-6" style={{ fontSize: "23px", lineHeight: "37px" }}>
              Recordings are edited (member shares removed) and archived in the free membership library and on YouTube.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 items-center mt-10">
            <Image
              src="/assets/solar.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-auto"
            />
            <p
              className="font-[family-name:var(--font-noto-serif)] italic leading-[1.6] text-tic-brown border-l-[3px] border-tic-brown pl-7"
              style={{ fontSize: "clamp(20px, 3vw, 26px)" }}
            >
              &quot;It&apos;s so important to have space to feel spacious. To process all that we are experiencing. To keep us more awake alive.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* ── Come as you are ────────────────────────────────────────── */}
      <section className="bg-tic-grey px-6 py-[100px]">
        <div className="max-w-[1290px] mx-auto">
          <div className="max-w-[760px] mx-auto">
            <p
              className="font-[family-name:var(--font-gordon)] text-tic-dark-grey uppercase"
              style={{ fontSize: "25px", letterSpacing: "0.42px", marginBottom: "60px" }}
            >
              The only requirement
            </p>
            <h2
              className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.4] mb-[28px]"
              style={{ fontSize: "clamp(21px, 3.24vw, 34px)" }}
            >
              Come as you are.
            </h2>
            <p className="font-[family-name:var(--font-noto-serif)] italic text-[18px] text-[#2a2a2a] mb-11 leading-[1.7]">
              No requirement to share. No requirement to be on camera. No requirement to be ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-0 mb-[52px] max-w-[760px] mx-auto text-left">
            <div>
              {LEFT_REASONS.map((r) => (
                <p
                  key={r}
                  className="relative text-[16px] leading-[1.6] text-[#2a2a2a] py-2.5 pl-7 border-b border-[#0b0d10]/[0.07] before:content-['∞'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-sm before:text-[#eb731f] before:font-serif before:leading-none"
                >
                  {r}
                </p>
              ))}
            </div>
            <div>
              {RIGHT_REASONS.map((r) => (
                <p
                  key={r}
                  className="relative text-[16px] leading-[1.6] text-[#2a2a2a] py-2.5 pl-7 border-b border-[#0b0d10]/[0.07] before:content-['∞'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-sm before:text-[#eb731f] before:font-serif before:leading-none"
                >
                  {r}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:[grid-template-columns:minmax(0,35%)_minmax(0,65%)] gap-8 items-center text-center md:text-left">
            <Image
              src="/assets/plant-pot-maroon.svg"
              alt=""
              width={147}
              height={293}
              className="w-[120px] mx-auto md:mx-0 md:ml-auto"
            />
            <p
              className="font-[family-name:var(--font-noto-serif)] italic leading-[1.7] text-tic-brown text-center md:text-left pt-10 md:pt-0"
              style={{ fontSize: "clamp(18px, 2.5vw, 22px)" }}
            >
              Turn off your video. Lay down if you need to.
              <br />
              Any level of participation is welcome.
              <br />
              The only requirement is respectful presence.
            </p>
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────────── */}
      <section className="bg-[#fcfcfc] px-6 py-[100px]">
        <div className="max-w-[1290px] mx-auto">
          <div className="max-w-[980px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
              <div>
                <p
                  className="font-[family-name:var(--font-gordon)] text-tic-dark-grey uppercase"
                  style={{ fontSize: "25px", letterSpacing: "0.42px", marginBottom: "60px" }}
                >
                  What members say
                </p>
                <h2
                  className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.4] mb-[28px]"
                  style={{ fontSize: "clamp(21px, 3.24vw, 34px)" }}
                >
                  Real people. Real calls.
                </h2>
              </div>
              <Image
                src="/assets/postage-stamp.svg"
                alt=""
                width={76}
                height={82}
                className="w-[130px] shrink-0"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-14">
              {TESTIMONIALS.map((t) => (
                <div key={t.cite} className="flex flex-col">
                  <blockquote className="font-[family-name:var(--font-noto-serif)] italic text-[16px] leading-[1.85] text-[#0b0d10] border-l-[3px] border-tic-pink pl-[22px] mb-[18px] grow">
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
      <div className="py-[70px] px-2 text-center bg-[#817202]">
        <span
          className="font-[family-name:var(--font-gordon)] tracking-[0.03em] leading-[1.12] uppercase text-[#d5d069] block"
          style={{ fontSize: "clamp(40px, 9.5vw, 124px)" }}
        >
          Integration
          <br />
          is the way
        </span>
      </div>

      {/* ── Free membership ────────────────────────────────────────── */}
      <section id="join" className="bg-[#d5d069] px-6 py-[100px] text-[#0b0d10]">
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
            <p
              className="font-[family-name:var(--font-gordon)] text-tic-dark-grey uppercase"
              style={{ fontSize: "25px", letterSpacing: "0.42px", marginBottom: "60px" }}
            >
              The free membership
            </p>
            <h2
              className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.4] mb-[28px] text-[#0b0d10]"
              style={{ fontSize: "clamp(21px, 3.24vw, 34px)" }}
            >
              The call is just the
              <br />
              beginning.
            </h2>
          </div>
          <p className="text-[#0b0d10] mb-[52px]" style={{ fontSize: "23px", lineHeight: "37px" }}>
            When you join the free membership, you get access to:
          </p>

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
              className="md:hidden w-[60px] mx-auto mb-2.5"
            />

            <div className="bg-[#fcfcfc] rounded-[4px] p-9 px-7">
              <h4 className="font-[family-name:var(--font-gordon)] font-normal text-[18px] tracking-[0.04em] text-[#817202] mb-3.5">
                The monthly Community Call
              </h4>
              <p className="text-[15px] leading-[1.7] text-[#2a2a2a]">
                Join live on the first Saturday of each month. Zoom link sent to your inbox once you&apos;re in.
              </p>
            </div>
            <div className="bg-[#fcfcfc] rounded-[4px] p-9 px-7">
              <h4 className="font-[family-name:var(--font-gordon)] font-normal text-[18px] tracking-[0.04em] text-[#817202] mb-3.5">
                The integration library
              </h4>
              <p className="text-[15px] leading-[1.7] text-[#2a2a2a]">
                Teaching videos and practice recordings from past calls — each tied to a capacity in the Solar-Lunar Framework. One teaching and one practice per capacity.
              </p>
            </div>
            <div className="bg-[#fcfcfc] rounded-[4px] p-9 px-7">
              <h4 className="font-[family-name:var(--font-gordon)] font-normal text-[18px] tracking-[0.04em] text-[#817202] mb-3.5">
                The community
              </h4>
              <p className="text-[15px] leading-[1.7] text-[#2a2a2a]">
                A home base inside Mighty Network where you can connect with other members between calls.
              </p>
            </div>

            <Image
              src="/assets/bee-disco-2.png"
              alt=""
              width={480}
              height={417}
              className="md:hidden w-[60px] mx-auto mt-2.5"
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
            <p className="font-[family-name:var(--font-noto-serif)] italic text-[13px] text-[#817202]">
              Already in the Practice or Practitioner membership? The call link is already yours — check your membership space.
            </p>
          </div>
        </div>
      </section>

      {/* ── Go deeper ──────────────────────────────────────────────── */}
      <section className="bg-[#fcfcfc] px-6 py-[100px]">
        <div className="max-w-[1290px] mx-auto">
          <div className="max-w-[920px] mx-auto">
            <p
              className="font-[family-name:var(--font-gordon)] text-tic-dark-grey uppercase"
              style={{ fontSize: "25px", letterSpacing: "0.42px", marginBottom: "60px" }}
            >
              Keep going
            </p>
            <h2
              className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.4] mb-[28px]"
              style={{ fontSize: "clamp(21px, 3.24vw, 34px)" }}
            >
              The call is where many people start.
              <br />
              The memberships are where the work continues.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-[52px]">
              <p className="order-2 md:order-1 text-[#222]" style={{ fontSize: "23px", lineHeight: "37px" }}>
                The Practice and Practitioner memberships include everything in the free tier — plus weekly Friday practice sessions, monthly integration themes, the full capacity library, and a community moving through the Solar-Lunar Framework together.
              </p>
              <div className="order-1 md:order-2 flex justify-center md:justify-end">
                <Image
                  src="/assets/shell.svg"
                  alt=""
                  width={1203}
                  height={1662}
                  className="w-[140px] md:w-[200px]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[920px] mx-auto mb-10">
            <div className="rounded-[4px] p-11 px-9 flex flex-col bg-tic-salmon text-[#0b0d10]">
              <p className="font-[family-name:var(--font-gordon)] text-[10px] tracking-[0.2em] uppercase mb-[18px] opacity-85">
                For Helpers &amp; Seekers
              </p>
              <h3
                className="font-[family-name:var(--font-gordon)] font-normal tracking-[0.02em] leading-[1.25] mb-4"
                style={{ fontSize: "clamp(20px, 2.6vw, 26px)" }}
              >
                Weekly practice.
                <br />
                Real support.
              </h3>
              <p className="text-[15px] leading-[1.7] mb-7 grow">
                Weekly Friday sessions, monthly themes, the full integration library. For anyone ready to practice the capacities, not just learn about them.
              </p>
              <a
                href="https://the-infinity-container.mn.co/users/onboarding/plans/1898747"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-gordon)] text-xs tracking-[0.12em] uppercase no-underline px-6 py-3 rounded-[3px] self-start bg-[#0b0d10] text-[#fcfcfc]"
              >
                Explore the Practice Membership →
              </a>
            </div>
            <div className="rounded-[4px] p-11 px-9 flex flex-col bg-tic-blue text-[#fcfcfc]">
              <p className="font-[family-name:var(--font-gordon)] text-[10px] tracking-[0.2em] uppercase mb-[18px] opacity-85">
                For Practitioners
              </p>
              <h3
                className="font-[family-name:var(--font-gordon)] font-normal tracking-[0.02em] leading-[1.25] mb-4"
                style={{ fontSize: "clamp(20px, 2.6vw, 26px)" }}
              >
                Practice it — and learn to hold it.
              </h3>
              <p className="text-[15px] leading-[1.7] mb-7 grow">
                Everything in Practice, plus professional tools, practitioner-focused teaching, and a peer community doing their own work alongside their client work.
              </p>
              <a
                href="https://the-infinity-container.mn.co/users/onboarding/plans/1483936"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-gordon)] text-xs tracking-[0.12em] uppercase no-underline px-6 py-3 rounded-[3px] self-start bg-[#fcfcfc] text-tic-blue"
              >
                Explore the Practitioner Membership →
              </a>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/find-my-membership"
              className="font-[family-name:var(--font-noto-serif)] text-[16px] italic text-[#0b0d10] underline decoration-1 underline-offset-4 hover:text-tic-brown transition-colors"
            >
              Not sure which fits? Take the 7-question quiz →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
