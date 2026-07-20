import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | The Infinity Container",
  description:
    "Meet Dr. Victoria Sterkin — behavior analyst, therapist, and integration specialist with 25 years of clinical experience — and the story behind The Infinity Container.",
};

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
  { name: "Mariana", credit: "for the magic of movement" },
  { name: "Daniela", credit: "for the magic of design thinking" },
];

export default function AboutUsPage() {
  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <header className="bg-white px-6 pt-[100px] pb-[100px]">
        <div className="max-w-[1290px] mx-auto grid grid-cols-1 md:grid-cols-[1.25fr_0.9fr] gap-[60px] items-center">
          <div>
            <p
              className="font-[family-name:var(--font-gordon)] text-tic-dark-grey uppercase"
              style={{ fontSize: "25px", letterSpacing: "0.42px", marginBottom: "60px" }}
            >
              About
            </p>
            <h1
              className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.08] text-[#0b0d10]"
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
          <div className="aspect-[4/5] border border-[#0b0d10]/12 rounded-[3px] overflow-hidden bg-tic-grey">
            <Image
              src="/assets/victoria.jpg"
              alt="Dr. Victoria Sterkin"
              width={900}
              height={1125}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </header>

      {/* ── My story ───────────────────────────────────────────────── */}
      <section className="bg-tic-yellow px-6 py-[100px]">
        <div className="max-w-[1290px] mx-auto">
          <div className="max-w-[820px] mx-auto">
            <p
              className="font-[family-name:var(--font-gordon)] uppercase"
              style={{ fontSize: "25px", letterSpacing: "0.42px", marginBottom: "60px", color: "#6a6410" }}
            >
              My story
            </p>
            <h2
              className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.4] mb-[28px]"
              style={{ fontSize: "clamp(21px, 3.24vw, 34px)" }}
            >
              How I got here.
            </h2>
            <div className="font-[family-name:var(--font-noto-serif)]" style={{ fontSize: "23px", lineHeight: "37px", color: "#26240f" }}>
              <p className="mb-6">We are living in a crisis of unintegrated time — a world that keeps us fragmented, living in the past, and disconnected from the present. My own path to understanding this began with a talk by Dr. Dan Siegel at the former Blue School in lower Manhattan, where I was consulting at the time. He spoke about interpersonal neurobiology — about integration as collaborative communication between the parts of yourself, your body, and the larger Earth body. About what he now calls MWe: a sense of oneness. Something clicked into place I&apos;ve never been able to unsee. Fragmentation is at the root of dysfunction. Personal, biological, social — all of it.</p>
              <p className="mb-6">I started seeing integration opportunities everywhere. In grief. In role changes. In transformative moments and psychedelic journeys.</p>
              <p className="mb-6">And in myself. I was a young behaviorist then, working with children — and in doing that work, I began to update my own developmental holes, the ones that opened around age six, when my mother died. Riding the subway between clients&apos; homes and schools, I began to feel the in-between itself — the shift, the time it takes to shift, the awareness it takes to transform — and how the digital age was quietly taking that time from us.</p>
              <p className="mb-6">We stopped digesting life.</p>
              <p className="mb-6">We became trapped in a thinking mind that dictates reality, disconnected from the body that holds a more accurate reading of the present truth. Fragmentation causes overwhelm, burnout, dissociation, abuse, pain, disease, war, scarcity. We cut ourselves off from what&apos;s here, and often live inside a program written in the past.</p>
              <p className="mb-6">During COVID, that awareness became urgent. We needed something to better help people manage the new version of chaos life brought forward — and particularly a way to help buoy the helpers. The mushrooms came to me in my dreams, and I answered the call. I helped create a psychedelic company focused on microdosing — building a practitioner program, weekly trainings, and a curriculum certifying practitioners to help their clients work with the medicine.</p>
              <p className="mb-6">When I left that business, I saw a profound gap. Integration had become a buzzword — but no communities were offering the containment, consistency, and support the work actually requires. I hadn&apos;t seen a program that names the capacities needed to integrate more fluidly with life.</p>
              <p className="mb-6">I didn&apos;t just come to this work as a facilitator; I came to it as a behaviorist. Training with Dr. Douglas Greer taught me to think about human development not as a list of skills to teach, but as the induction of whole repertoires of capacity. The capacity, not the skill.</p>
              <p className="mb-6">So I built The Infinity Container. I was grieving many aspects of my life at the time and started paying closer attention to what I was needing to integrate. I needed a Salon, to listen to others and be heard. A practice space not to verbally process, but to feel the capacities I needed to grow. A practitioner&apos;s lab that could be both laboratory and playground. A container that was flexible but consistent, and an ecosystem that could hold the helpers, too.</p>
              <p className="mb-6">After decades of building these capacities with clients, what I found missing was a way for the nervous system to trust the bottom-up processing of life again. To trust the magic of the body — and its place in something larger. Our society relentlessly orients us toward the myopic top-down — the cognitive, the psychological — and the pace of modern life doesn&apos;t support anyone&apos;s growth toward a more integrated state. Watching what people move through with entheogens and integration, and what I moved through myself, has been like watching years of therapy get digested into the body in a matter of weeks. The entropic state of the journey moves us from the thinking mind down into the felt experience of awake aliveness.</p>
              <p>Grief has always done this to me too.</p>
            </div>
          </div>
        </div>
        <figure className="max-w-[1290px] mx-auto mt-16">
          <Image
            src="/assets/infinity-container-sketch.jpg"
            alt="Victoria's Infinity Container sketch page"
            width={1500}
            height={1159}
            className="w-full rounded-[4px]"
          />
          <figcaption className="font-[family-name:var(--font-noto-serif)] italic text-[13px] text-center mt-4" style={{ color: "#4f4a15" }}>
            A page from Victoria&apos;s original sketchbook, imagining the container before it existed.
          </figcaption>
        </figure>
      </section>

      {/* ── Training & lineage ─────────────────────────────────────── */}
      <section className="bg-white px-6 py-[100px]">
        <div className="max-w-[1290px] mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-16 items-start">
          <div>
            <p
              className="font-[family-name:var(--font-gordon)] text-tic-dark-grey uppercase"
              style={{ fontSize: "25px", letterSpacing: "0.42px", marginBottom: "60px" }}
            >
              Training &amp; lineage
            </p>
            <h2
              className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.4] mb-[28px]"
              style={{ fontSize: "clamp(21px, 3.24vw, 34px)" }}
            >
              Where the work comes from.
            </h2>
            <div className="font-[family-name:var(--font-noto-serif)] text-[#222]" style={{ fontSize: "23px", lineHeight: "37px" }}>
              <p className="mb-6">The Solar-Lunar Framework didn&apos;t come from one tradition. It was built at the intersection of several — held to the standard of each.</p>
              <p className="mb-6">My doctoral training in behavior analysis at Teachers College, Columbia University taught me how capacities are actually built: not through insight alone, but through practice, repetition, and the right conditions for change. Twenty-five years of clinical work taught me what the textbooks couldn&apos;t — that the body keeps its own counsel, and that transformation that ignores it doesn&apos;t last. My fairy godmother, clinical psychologist Dr. Joyce Wyden, taught me to see all human development as relational — starting in utero — so that our pasts can be resolved through awareness, comfort, and learning new sequences of behavior.</p>
              <p>The framework draws on verbal behavior science, somatic and body-based practice, interpersonal neurobiology, and contemplative traditions — woven into a system designed for one thing: helping experience become capacity.</p>
            </div>
          </div>
          <div>
            <ul className="list-none">
              {CREDENTIALS.map((item) => (
                <li key={item} className="relative text-[15.5px] leading-[1.55] text-[#1c1c1c] py-[14px] pl-[22px] border-b border-[#0b0d10]/10">
                  <span className="absolute left-0 top-[21px] w-[7px] h-[7px] rounded-full bg-tic-pink" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-[34px] text-center">
              <Image
                src="/assets/solar-lunar-combo.png"
                alt="Solar-Lunar dual spiral emblem"
                width={900}
                height={900}
                className="w-[190px] max-w-[60%] inline-block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Way divider ────────────────────────────────────────────── */}
      <div className="bg-[#817202] py-[70px] px-2 text-center">
        <span
          className="block font-[family-name:var(--font-gordon)] uppercase text-tic-yellow leading-[1.12] tracking-[0.03em] text-[clamp(24px,8.5vw,124px)] md:text-[clamp(40px,9.5vw,124px)]"
        >
          Integration
        </span>
        <span
          className="block font-[family-name:var(--font-gordon)] uppercase text-tic-yellow leading-[1.12] tracking-[0.03em] text-[clamp(24px,8.5vw,124px)] md:text-[clamp(40px,9.5vw,124px)]"
        >
          is the way
        </span>
      </div>

      {/* ── Why the Infinity Container ────────────────────────────── */}
      <section className="bg-tic-grey px-6 py-[100px]">
        <div className="max-w-[820px] mx-auto relative">
          <Image
            src="/assets/brain.svg"
            alt=""
            width={752}
            height={1173}
            className="float-right w-[110px] md:w-[150px] ml-7 mb-4 -mt-2"
            style={{ filter: "invert(0.48)" }}
          />
          <p
            className="font-[family-name:var(--font-gordon)] text-tic-dark-grey uppercase"
            style={{ fontSize: "25px", letterSpacing: "0.42px", marginBottom: "60px" }}
          >
            Why the Infinity Container
          </p>
          <h2
            className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.4] mb-[28px]"
            style={{ fontSize: "clamp(21px, 3.24vw, 34px)" }}
          >
            Built for the people who hold everyone else.
          </h2>
          <div className="font-[family-name:var(--font-noto-serif)] text-[#242424]" style={{ fontSize: "23px", lineHeight: "37px" }}>
            <p className="mb-6">Twenty-five years of clinical work showed me a pattern I couldn&apos;t unsee: the practitioners, healers, and helpers doing the most holding were the least likely to be held themselves. They gave endlessly and received rarely — not because support didn&apos;t exist, but because nothing was built for the way they actually needed it.</p>
            <p
              className="italic text-tic-brown border-l-[3px] border-tic-brown pl-[28px] my-8"
              style={{ fontSize: "clamp(19px, 2.8vw, 25px)", lineHeight: "1.55" }}
            >
              &quot;For the helpers, healers, and holders of space — a community built to hold you back.&quot;
            </p>
            <p>The Infinity Container is that structure: an ongoing practice community where integration is lived rather than studied, where the framework holds the rhythm, and where the people who spend their lives showing up for others finally have a place that shows up for them.</p>
          </div>
        </div>
      </section>

      {/* ── The people ─────────────────────────────────────────────── */}
      <section className="bg-white px-6 py-[100px]">
        <div className="max-w-[1290px] mx-auto">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p
                className="font-[family-name:var(--font-gordon)] text-tic-dark-grey uppercase"
                style={{ fontSize: "25px", letterSpacing: "0.42px", marginBottom: "60px" }}
              >
                The people
              </p>
              <h2
                className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.4]"
                style={{ fontSize: "clamp(21px, 3.24vw, 34px)" }}
              >
                The hands that build the container.
              </h2>
            </div>
            <Image
              src="/assets/spider-thick.svg"
              alt=""
              width={400}
              height={400}
              className="w-[84px] md:w-[120px] flex-shrink-0 -mt-1.5"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-[52px]">
            <div>
              <div className="aspect-square border border-[#0b0d10]/12 rounded-[3px] overflow-hidden bg-tic-grey mb-5">
                <Image
                  src="/assets/victoria.jpg"
                  alt="Dr. Victoria Sterkin"
                  width={900}
                  height={1125}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.06em] text-[20px] mb-1.5">Dr. Victoria Sterkin</p>
              <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.16em] text-[11px] text-tic-pink mb-3.5">Founder &amp; Creator</p>
              <p className="font-[family-name:var(--font-noto-serif)] text-[15px] leading-[1.75] text-[#333]">
                Behavior analyst, therapist, and integration specialist. Victoria designs and holds every practice, theme, and program inside TIC.
              </p>
            </div>
            <div>
              <div className="aspect-square border border-[#0b0d10]/12 rounded-[3px] overflow-hidden bg-tic-grey mb-5">
                <Image
                  src="/assets/edu.jpg"
                  alt="Edu Cerro"
                  width={900}
                  height={1200}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.06em] text-[20px] mb-1.5">Edu Cerro</p>
              <p className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.16em] text-[11px] text-tic-pink mb-3.5">Artist</p>
              <p className="font-[family-name:var(--font-noto-serif)] text-[15px] leading-[1.75] text-[#333]">
                Every capacity in the Solar-Lunar Framework has a face because Edu drew it one. His artwork gives the practice its visual language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── With gratitude ─────────────────────────────────────────── */}
      <section className="bg-white px-6 pt-10 pb-[100px]">
        <div className="max-w-[760px] mx-auto bg-tic-grey rounded-[6px] px-10 pt-16 pb-14 text-center">
          <h2 className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.2em] text-[16px] mb-[34px]">
            With gratitude
          </h2>
          {GRATITUDE.map((g) => (
            <div key={g.name} className="mb-[18px] leading-[1.5]">
              <span className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.1em] text-[17px]">{g.name}</span>{" "}
              <span className="font-[family-name:var(--font-noto-serif)] italic text-tic-brown text-[15px]">— {g.credit}</span>
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
              src="/assets/magic-of-collaboration.png"
              alt="Here's to the Magic of Collaboration"
              width={1600}
              height={900}
              className="w-[320px] max-w-[80%] inline-block"
            />
          </div>
        </div>
      </section>

      {/* ── Community call band ───────────────────────────────────── */}
      <section className="bg-[#0b0d10] py-24 px-6 text-center">
        <h2
          className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.03em] text-white mb-5"
          style={{ fontSize: "clamp(26px, 4vw, 40px)" }}
        >
          Meet us before you join anything.
        </h2>
        <p className="font-[family-name:var(--font-noto-serif)] text-tic-grey max-w-[560px] mx-auto mb-9" style={{ fontSize: "16.5px", lineHeight: "1.8" }}>
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
