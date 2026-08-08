import type { Metadata } from "next";
import Image from "next/image";
import { resolvePageMetadata } from "@/lib/pageSeo";
import SectionLabel from "@/components/SectionLabel";
import SectionHeading from "@/components/SectionHeading";
import BodyText from "@/components/BodyText";
import ReadMoreCollapse from "@/components/ReadMoreCollapse";

export async function generateMetadata(): Promise<Metadata> {
  return resolvePageMetadata("/about-us", {
    title: "About | The Infinity Container",
    description:
      "Meet Dr. Victoria Sterkin — behavior analyst, therapist, and integration specialist with 25 years of clinical experience — and the story behind The Infinity Container.",
  });
}

const CREDENTIALS = [
  "PhD in Applied Behavior Analysis and two master's degrees, Teachers College, Columbia University",
  "25 years of clinical experience as a behavior analyst and therapist",
  "Published peer-reviewed research; speaker at scientific and educational conferences",
  "Co-host of Ghost Stories, a podcast about grief and surviving the inevitable",
  "Co-creator of a microdosing practitioner program",
  "Teaching faculty within Dr. Mindy Pelz's Reset Academy",
  "Founder, The Infinity Container",
];

const GRATITUDE = [
  { name: "Catie", credit: "for the magic of coding" },
  { name: "Erika", credit: "for the magic of support" },
  { name: "Mariana", credit: "for the magic of movement", href: "https://www.marianamartincapriles.com/" },
  { name: "Daniela", credit: "for the magic of design thinking", href: "https://hum783.com/" },
];

export default function AboutUsPage() {
  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <header className="bg-white px-6 pt-[50px] md:pt-[100px] pb-[50px] md:pb-[100px]">
        <div className="max-w-[1290px] mx-auto">
          <SectionLabel>About</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-[1.25fr_0.9fr] gap-[60px] items-start">
            <div>
              <h1
                className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.08] text-[#0b0d10] mt-2"
                style={{ fontSize: "clamp(34px, 5.2vw, 58px)" }}
              >
                The container was built by someone who needed one.
              </h1>
              <p
                className="font-[family-name:var(--font-noto-serif)] italic text-[#333] max-w-[460px] mt-7"
                style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: "1.7" }}
              >
                I&apos;m Dr. Victoria Sterkin — behavior analyst, therapist, integration specialist, and above all else, a helper. The Infinity Container is the space I spent twenty-five years learning how to build.
              </p>
            </div>
            <div className="flex justify-center md:block md:-ml-[1em] rounded-[3px] overflow-hidden">
              <Image
                src="/assets/victoria.jpg"
                alt="Dr. Victoria Sterkin"
                width={900}
                height={1125}
                className="w-[65%] h-[87%] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* ── My story ───────────────────────────────────────────────── */}
      <section className="bg-tic-yellow px-6 py-[50px] md:py-[100px] relative overflow-hidden">
        {/* Desktop: two stacked, mirrored copies sized to a fixed height (unchanged). */}
        <div
          className="hidden md:flex md:flex-col absolute top-0 left-1/2 -mt-[14em] w-screen -translate-x-1/2 opacity-30 pointer-events-none select-none"
          aria-hidden="true"
        >
          <Image
            src="/assets/infinity-container-sketch.jpg"
            alt=""
            width={1500}
            height={1159}
            className="block w-full h-auto"
          />
          <Image
            src="/assets/infinity-container-sketch.jpg"
            alt=""
            width={1500}
            height={1159}
            className="relative bottom-[3em] block w-full h-auto -scale-y-100"
          />
        </div>
        {/* Mobile: a true repeating background, so it always covers the section however
            tall the story text (and its "read more" expansion) makes it — the fixed-height
            stacked-image approach above runs out well before the content does on mobile. */}
        <div
          className="md:hidden absolute inset-0 opacity-30 pointer-events-none select-none"
          style={{
            backgroundImage: "url(/assets/infinity-container-sketch.jpg)",
            backgroundRepeat: "repeat-y",
            backgroundSize: "100% auto",
            backgroundPosition: "top center",
          }}
          aria-hidden="true"
        />
        <div className="max-w-[1290px] mx-auto relative">
          <div className="relative z-10">
            <SectionLabel color="text-[#6a6410]">My story</SectionLabel>
            <SectionHeading>How I got here.</SectionHeading>
            <div className="text-[#26240f] w-[80%]">
              <BodyText className="mb-6">We are living in a crisis of unintegrated time — a world that keeps us fragmented, living in the past, and disconnected from the present. My own path to understanding this began with a talk by Dr. Dan Siegel at the former Blue School in lower Manhattan, where I was consulting at the time. He spoke about interpersonal neurobiology — about integration as collaborative communication between the parts of yourself, your body, and the larger Earth body. About what he now calls MWe: a sense of oneness. Something clicked into place I&apos;ve never been able to unsee. Fragmentation is at the root of dysfunction. Personal, biological, social — all of it.</BodyText>
              <BodyText className="mb-6">I started seeing integration opportunities everywhere. In grief. In role changes. In transformative moments and psychedelic journeys.</BodyText>
              <BodyText className="mb-6">And in myself. I was a young behaviorist then, working with children — and in doing that work, I began to update my own developmental holes, the ones that opened around age six, when my mother died. Riding the subway between clients&apos; homes and schools, I began to feel the in-between itself — the shift, the time it takes to shift, the awareness it takes to transform — and how the digital age was quietly taking that time from us.</BodyText>
              <BodyText className="mb-6">We stopped digesting life.</BodyText>
              <ReadMoreCollapse buttonClassName="text-[#6a6410]">
                <BodyText className="mb-6">We became trapped in a thinking mind that dictates reality, disconnected from the body that holds a more accurate reading of the present truth. Fragmentation causes overwhelm, burnout, dissociation, abuse, pain, disease, war, scarcity. We cut ourselves off from what&apos;s here, and often live inside a program written in the past.</BodyText>
                <BodyText className="mb-6">During COVID, that awareness became urgent. We needed something to better help people manage the new version of chaos life brought forward — and particularly a way to help buoy the helpers. The mushrooms came to me in my dreams, and I answered the call. I helped create a psychedelic company focused on microdosing — building a practitioner program, weekly trainings, and a curriculum certifying practitioners to help their clients work with the medicine.</BodyText>
                <BodyText className="mb-6">When I left that business, I saw a profound gap. Integration had become a buzzword — but no communities were offering the containment, consistency, and support the work actually requires. I hadn&apos;t seen a program that names the capacities needed to integrate more fluidly with life.</BodyText>
                <BodyText className="mb-6">I didn&apos;t just come to this work as a facilitator; I came to it as a behaviorist. Training with Dr. R. Douglas Greer taught me to think about human development not as a list of skills to teach, but as the induction of whole repertoires of capacity. The capacity, not the skill.</BodyText>
                <BodyText className="mb-6">So I built The Infinity Container. I was grieving many aspects of my life at the time and started paying closer attention to what I was needing to integrate. I needed a Salon, to listen to others and be heard. A practice space not to verbally process, but to feel the capacities I needed to grow. A practitioner&apos;s lab that could be both laboratory and playground. A container that was flexible but consistent, and an ecosystem that could hold the helpers, too.</BodyText>
                <BodyText className="mb-6">After decades of building these capacities with clients, what I found missing was a way for the nervous system to trust the bottom-up processing of life again. To trust the magic of the body — and its place in something larger. Our society relentlessly orients us toward the myopic top-down — the cognitive, the psychological — and the pace of modern life doesn&apos;t support anyone&apos;s growth toward a more integrated state. Watching what people move through with entheogens and integration, and what I moved through myself, has been like watching years of therapy get digested into the body in a matter of weeks. The entropic state of the journey moves us from the thinking mind down into the felt experience of awake aliveness.</BodyText>
                <BodyText className="mb-6">Grief has always done this to me too.</BodyText>
                <p className="font-[family-name:var(--font-noto-serif)] italic text-[13px] mt-2" style={{ color: "#4f4a15" }}>
                  A page from Edu&apos;s sketchbook, imagining the container before it existed.
                </p>
              </ReadMoreCollapse>
            </div>
          </div>
        </div>
      </section>

      {/* ── Training & lineage ─────────────────────────────────────── */}
      <section className="bg-white px-6 pt-[50px] md:pt-[100px] pb-[40px]">
        <div className="max-w-[1290px] mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-x-16 items-start">
          <div className="md:col-span-2">
            <SectionLabel>Training &amp; lineage</SectionLabel>
            <SectionHeading>Where the work comes from.</SectionHeading>
          </div>
          <div className="text-[#222]">
            <BodyText className="mb-6">The Solar-Lunar Framework didn&apos;t come from one tradition. It was built at the intersection of several — held to the standard of each.</BodyText>
            <BodyText className="mb-6">My doctoral training in behavior analysis at Teachers College, Columbia University taught me how capacities are actually built: not through insight alone, but through practice, repetition, and the right conditions for change. Twenty-five years of clinical work taught me what the textbooks couldn&apos;t — that the body keeps its own counsel, and that transformation that ignores it doesn&apos;t last. My fairy godmother, clinical psychologist Dr. Joyce Wyden, taught me to see all human development as relational — starting in utero — so that our pasts can be resolved through awareness, comfort, and learning new sequences of behavior.</BodyText>
            <BodyText>The framework draws on verbal behavior science, somatic and body-based practice, interpersonal neurobiology, and contemplative traditions — woven into a system designed for one thing: helping experience become capacity.</BodyText>
          </div>
          <div className="mt-[10px]">
            <ul className="list-none -mt-[14px]">
              {CREDENTIALS.map((item) => (
                <li key={item} className="relative text-[15.5px] leading-[1.55] text-[#1c1c1c] py-[14px] pl-[22px] border-b border-[#0b0d10]/10">
                  <span className="absolute left-0 top-[21px] w-[7px] h-[7px] rounded-full bg-tic-pink" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-[34px] text-center">
          <Image
            src="/assets/solar-lunar-combo.png"
            alt="Solar-Lunar dual spiral emblem"
            width={900}
            height={900}
            className="w-[380px] max-w-[60%] inline-block"
          />
        </div>
      </section>

      {/* ── Way divider ────────────────────────────────────────────── */}
      <div className="bg-[#817202] px-2 pt-[50px] md:pt-[100px] pb-[118px] md:pb-[168px] text-center">
        <h2 className="font-[family-name:var(--font-gordon)] uppercase font-bold text-tic-yellow" style={{ fontSize: "clamp(24px, 8vw, 115px)", letterSpacing: "0.09em", marginBottom: "-68px" }}>
          Integration
          <br />
          is the way
        </h2>
      </div>

      {/* ── Why the Infinity Container ────────────────────────────── */}
      <section className="relative z-10 bg-tic-grey px-6 py-[50px] md:py-[100px]">
        <div className="max-w-[1290px] mx-auto relative">
          <Image
            src="/assets/brain.svg"
            alt=""
            width={752}
            height={1173}
            className="float-right w-[70px] md:w-[213px] ml-7 mb-4 -mt-2"
            style={{ filter: "invert(0.48)" }}
          />
          <SectionLabel>Why the Infinity Container</SectionLabel>
          <SectionHeading>Built for the people who hold everyone else.</SectionHeading>
          <div className="text-[#242424]">
            <BodyText className="mb-6">Twenty-five years of clinical work showed me a pattern I couldn&apos;t unsee: the practitioners, healers, and helpers doing the most holding were the least likely to be held themselves. They gave endlessly and received rarely — not because support didn&apos;t exist, but because nothing was built for the way they actually needed it.</BodyText>
            <p
              className="italic text-tic-brown border-l-[3px] border-tic-brown pl-[28px] my-8"
              style={{ fontSize: "clamp(19px, 2.8vw, 25px)", lineHeight: "1.55" }}
            >
              &quot;For the helpers, healers, and holders of space — a community built to hold you back.&quot;
            </p>
            <BodyText>The Infinity Container is that structure: an ongoing practice community where integration is lived rather than studied, where the framework holds the rhythm, and where the people who spend their lives showing up for others finally have a place that shows up for them.</BodyText>
          </div>
        </div>
      </section>

      {/* ── The people ─────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-[50px] md:py-[100px]">
        <div className="max-w-[1290px] mx-auto">
          <div className="relative">
            <div className="max-w-[900px]">
              <SectionLabel>The people</SectionLabel>
              <SectionHeading marginBottom="0">The hands that build the container.</SectionHeading>
            </div>
            <div className="absolute right-[36em] top-[8em] w-[252px] md:w-[390px]">
              <Image
                src="/assets/spider-with-line.svg"
                alt=""
                width={612}
                height={612}
                className="relative bottom-[14.3em] left-[8em] w-full h-auto"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[53px] md:gap-22 mt-[40px] md:mt-[150px]">
            <div className="border-[3px] border-[#0b0d10]/12 px-4 py-8">
              <div className="w-[70%] mx-auto">
                <div className="aspect-square overflow-hidden bg-tic-grey mb-5">
                  <Image
                    src="/assets/vic-2.jpg"
                    alt="Dr. Victoria Sterkin"
                    width={600}
                    height={900}
                    className="w-full h-full object-cover"
                  />
                </div>
                <a
                  href="https://victoriasterkin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-[family-name:var(--font-gordon)] uppercase tracking-[0.06em] text-[20px] underline mb-1.5 hover:text-tic-pink transition-colors"
                >
                  Dr. Victoria Sterkin
                </a>
                <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.16em] text-[11px] text-black mb-3.5">Founder &amp; Creator</p>
                <p className="font-[family-name:var(--font-noto-serif)] text-body text-[#333]">
                  Behavior analyst, therapist, and integration specialist. Victoria designs and holds every practice, theme, and program inside TIC.
                </p>
              </div>
            </div>
            <div className="border-[3px] border-[#0b0d10]/12 px-4 py-8">
              <div className="w-[70%] mx-auto">
                <div className="aspect-square overflow-hidden bg-tic-grey mb-5">
                  <Image
                    src="/assets/edu.jpg"
                    alt="Edu Cerro"
                    width={900}
                    height={1200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <a
                  href="https://www.educerro.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-[family-name:var(--font-gordon)] uppercase tracking-[0.06em] text-[20px] underline mb-1.5 hover:text-tic-pink transition-colors"
                >
                  Edu Cerro
                </a>
                <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.16em] text-[11px] text-black mb-3.5">Artist</p>
                <p className="font-[family-name:var(--font-noto-serif)] text-body text-[#333]">
                  Every capacity in the Solar-Lunar Framework has a face because Edu drew it one. His artwork gives the practice its visual language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── With gratitude ─────────────────────────────────────────── */}
      <section className="bg-white px-6 pb-[50px] md:pb-[100px]">
        <div className="max-w-[760px] mx-auto bg-tic-grey rounded-[6px] px-10 pt-16 pb-14 text-center">
          <h2 className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.2em] text-[18px] mb-[34px]">
            With gratitude
          </h2>
          {GRATITUDE.map((g) => (
            <div key={g.name} className="mb-[18px] leading-[1.5]">
              {g.href ? (
                <a
                  href={g.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.1em] text-[17px] underline hover:text-tic-pink transition-colors"
                >
                  {g.name}
                </a>
              ) : (
                <span className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.1em] text-[17px]">{g.name}</span>
              )}
              <br className="md:hidden" />
              <span className="hidden md:inline"> </span>
              <span className="font-[family-name:var(--font-noto-serif)] italic text-tic-brown text-[15px]">
                <span className="hidden md:inline">— </span>
                {g.credit}
              </span>
            </div>
          ))}
          <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.08em] text-[15px] leading-[1.5] max-w-[480px] mx-auto mt-6">
            And the founding members of the TIC community
            <span className="block font-[family-name:var(--font-noto-serif)] italic normal-case tracking-normal text-tic-brown text-[14px] mt-1.5">
              — who trusted the container before it had walls
            </span>
          </p>
          <div className="mt-10">
            <Image
              src="/assets/magic-of-collaboration.svg"
              alt="Here's to the Magic of Collaboration"
              width={598}
              height={131}
              className="w-[420px] max-w-[85%] inline-block"
            />
          </div>
        </div>
      </section>

      {/* ── Community call band ───────────────────────────────────── */}
      <section className="bg-black py-12 md:py-24 px-6 text-center">
        <h2
          className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.03em] text-white mb-5"
          style={{ fontSize: "clamp(26px, 4vw, 40px)" }}
        >
          Meet us before you join anything.
        </h2>
        <p className="font-[family-name:var(--font-noto-serif)] text-body text-tic-grey max-w-[560px] mx-auto mb-9">
          Once a month, we gather for a free community call — open to anyone curious about the work. Join the free membership and the call link is yours.
        </p>
        <a
          href="/community-call"
          className="inline-block font-[family-name:var(--font-gordon)] text-sm uppercase tracking-[0.12em] bg-[#eb731f] text-[#0b0d10] px-[26px] py-[17px] rounded-[3px] hover:bg-tic-pink transition-colors"
        >
          About the Community Call →
        </a>
      </section>
    </main>
  );
}
