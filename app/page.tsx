import Image from "next/image";
import InlineNewsletter from "@/components/InlineNewsletter";
import SpotifyEmbed from "@/components/SpotifyEmbed";

export default function HomePage() {
  return (
    <main>

      {/* ── Section 1: Orange hero video ──────────────────────────── */}
      <section className="relative min-h-screen bg-tic-orange flex flex-col overflow-hidden">
        {/* Poster / fallback — visible until video plays */}
        <div className="absolute inset-0 z-0 flex items-center justify-center" aria-hidden>
          <Image
            src="/assets/hero-logo.svg"
            alt="The Infinity Container globe"
            width={700}
            height={700}
            priority
            className="w-[85vmin] h-auto"
          />
        </div>
        {/* Video sits on top of poster once loaded */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-10 w-full h-full object-cover"
        >
          <source src="/assets/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* Spacer pushes footer to bottom */}
        <div className="flex-1 relative z-0" />
      </section>

      {/* ── Section 2: Olive — huge two-line text + newsletter ────── */}
      <section className="min-h-screen bg-tic-olive flex flex-col overflow-hidden">
        <div className="flex-1 flex flex-col justify-center pt-20">
          {/* Full-bleed text — no horizontal padding, matches live site */}
          <div className="overflow-visible leading-none text-center">
            <p
              className="font-[family-name:var(--font-gordon)] text-tic-pink whitespace-nowrap select-none"
              style={{ fontSize: "clamp(2.5rem, 9vw, 140px)", lineHeight: 1.05 }}
            >
              INTEGRATION
            </p>
            <p
              className="font-[family-name:var(--font-gordon)] text-tic-pink whitespace-nowrap select-none"
              style={{ fontSize: "clamp(2.5rem, 9vw, 140px)", lineHeight: 1.05 }}
            >
              AND SUPPORT
            </p>
          </div>
          <p className="text-center text-tic-pink font-[family-name:var(--font-noto-serif)] italic text-xl mt-10 px-4">
            Integration is the way.
          </p>
          <div className="mt-8 mb-16 px-10">
            <InlineNewsletter inputBg="bg-tic-pink" />
          </div>
        </div>
      </section>

      {/* ── Section 3: Yellow — space holders + TIC headline ─────── */}
      <section className="min-h-screen bg-tic-yellow flex flex-col">
        <div className="pt-16 pb-8 px-6 md:px-16">
          <p
            className="font-[family-name:var(--font-noto-serif)] leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 4.5rem)" }}
          >
            We&apos;re here for the space holders, the artists, the ones pitching in.
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
          <p className="font-[family-name:var(--font-noto-serif)] text-2xl">This is</p>
          <p
            className="font-[family-name:var(--font-gordon)] uppercase leading-none"
            style={{ fontSize: "clamp(1.8rem, 5vw, 5rem)" }}
          >
            THE INFINITY CONTAINER
          </p>
          <p className="font-[family-name:var(--font-noto-serif)] text-2xl mt-1">A place for integration</p>
        </div>

        <div className="px-6 md:px-16 pb-8 text-right">
          <p
            className="font-[family-name:var(--font-noto-serif)] leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 4.5rem)" }}
          >
            Tune into presence &amp; we&apos;ll meet you where you are.
          </p>
        </div>
      </section>

      {/* ── Section 4: Pink — scrolling marquee ───────────────────── */}
      <section className="min-h-screen bg-tic-pink flex flex-col overflow-hidden">
        <div className="flex-1 flex items-center overflow-hidden">
          <MarqueeRow
            text="INTEGRATION IS THE WAY"
            duration={28}
            fontSize="clamp(5rem, 18vw, 22rem)"
          />
        </div>
      </section>

      {/* ── Section 5: Yellow — integration poem + Spotify ───────── */}
      <section className="min-h-screen bg-tic-yellow flex flex-col relative">
        {/* Dropper SVG — absolute right */}
        <div
          className="absolute right-0 top-1/3 w-28 md:w-44 pointer-events-none z-10"
          aria-hidden
        >
          <Image
            src="/assets/dropper-learn-more.svg"
            alt=""
            width={160}
            height={260}
            className="w-full h-auto"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center px-6 md:px-20 pt-24 pb-10 relative z-0">
          {/* integration.svg handwriting heading */}
          <Image
            src="/assets/integration.svg"
            alt="Integration"
            width={680}
            height={200}
            className="w-full max-w-2xl h-auto mb-10"
          />

          {/* Prose poem */}
          <p
            className="font-[family-name:var(--font-noto-serif)] text-center leading-relaxed max-w-3xl mx-auto pr-24 md:pr-48"
            style={{ fontSize: "clamp(1rem, 2.2vw, 1.6rem)" }}
          >
            Integration is a birthday &amp; a funeral. It is playing in the unknown, while knowing
            yourself more. It is weaving. It is collaborating. It is titration &amp; digestion. It is
            process. It is practice with awareness. It is the evolution of a differentiated, connected
            self. It is intra-connected identity. It is WE, it is US. It is the link between
            possibility and actuality.
          </p>

          <p
            className="text-center mt-6 max-w-3xl mx-auto pr-24 md:pr-48 font-[family-name:var(--font-noto-serif)]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
          >
            It happens in the{" "}
            <strong className="font-[family-name:var(--font-gordon)] uppercase" style={{ fontSize: "1.15em" }}>
              THE INFINITY CONTAINER,
            </strong>{" "}
            where integration is the way.
          </p>

          {/* Spotify + mushrooms */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mt-12 mb-4">
            <Image
              src="/assets/mush-gio.svg"
              alt=""
              width={50}
              height={70}
              aria-hidden
              className="w-10 md:w-14 h-auto shrink-0"
            />
            <div className="w-full max-w-md">
              <SpotifyEmbed />
            </div>
            <Image
              src="/assets/mush-gio-mirrored.svg"
              alt=""
              width={50}
              height={70}
              aria-hidden
              className="w-10 md:w-14 h-auto shrink-0"
            />
          </div>
        </div>
      </section>

      {/* ── Section 6: Black — video (globe white) + spider drops ── */}
      <section className="relative min-h-screen bg-black flex flex-col overflow-hidden">
        {/* Placeholder — inverted globe until video is added */}
        <div className="absolute inset-0 z-0 flex items-center justify-center" aria-hidden>
          <Image
            src="/assets/hero-logo.svg"
            alt="The Infinity Container"
            width={500}
            height={500}
            className="w-[65vmin] h-auto"
            style={{ filter: "invert(1)" }}
          />
        </div>
        {/* Video loads on top: /assets/videos/globe-white.mp4 (TODO: add file) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-10 w-full h-full object-cover"
        >
          <source src="/assets/videos/globe-white.mp4" type="video/mp4" />
        </video>
        <div className="flex-1 relative z-0" />
      </section>

      {/* ── Section 7: Yellow — practitioner CTA + spider ────────── */}
      <section className="min-h-screen bg-tic-yellow flex flex-col">
        <div className="flex-1 grid md:grid-cols-2 gap-0 pt-16">

          {/* Left: thread + spider + practitioner names */}
          <div className="flex flex-col items-start px-6 md:px-12 pt-4">
            {/* Silk thread */}
            <div
              className="w-px bg-black"
              style={{ height: 100, marginLeft: "5rem" }}
              aria-hidden
            />
            {/* Spider */}
            <Image
              src="/assets/spider.svg"
              alt=""
              width={220}
              height={280}
              aria-hidden
              className="w-36 md:w-52 h-auto ml-2"
            />
            {/* Practitioner names — handwriting approximation */}
            <div className="mt-6 font-[family-name:var(--font-noto-serif)] italic leading-loose text-2xl md:text-3xl">
              <p className="ml-10">Nurturer &nbsp;&nbsp; Manager</p>
              <p>Coach &nbsp; Space Holder &nbsp; Doctor</p>
              <p className="ml-6">Teacher &nbsp; Leader &nbsp; Parent</p>
              <p>Therapist &nbsp; Doula &nbsp; Artist &nbsp; Creator</p>
              <p className="ml-14">Acts of Service</p>
            </div>
            {/* Hearts */}
            <div className="mt-6" aria-hidden>
              <Image
                src="/assets/hearts.svg"
                alt=""
                width={80}
                height={60}
                className="w-16 h-auto"
              />
            </div>
          </div>

          {/* Right: question copy + closed hand */}
          <div className="flex flex-col justify-between px-6 md:px-12 pt-8 pb-8">
            <div>
              <Image
                src="/assets/are-you-a-practitioner.svg"
                alt="Are you a Practitioner?"
                width={440}
                height={140}
                className="w-full max-w-sm h-auto mb-8"
              />
              <div
                className="font-[family-name:var(--font-noto-serif)] text-right leading-relaxed space-y-3"
                style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
              >
                <p>Are you <strong>holding</strong> &amp; <strong>creating</strong> without feeling held?</p>
                <p>Perhaps you&apos;re <strong>lacking mentorship</strong>?</p>
                <p>Feeling <strong>burnt out</strong>? <strong>Uninspired</strong>?</p>
                <p>Are you doing <strong>a lot of giving</strong> without <strong>enough receiving</strong>?</p>
              </div>

              <div
                className="mt-8 text-right font-[family-name:var(--font-noto-serif)] space-y-3"
                style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)" }}
              >
                <p className="font-bold text-xl">Join us in The Infinity Container.</p>
                <p>
                  We&apos;re <strong>embodying</strong> what we learn,{" "}
                  <strong>exploring</strong> what we teach, &amp;{" "}
                  <strong>teaching</strong> better ways to practice.
                  We&apos;re offering integration and expanded possibilities.
                </p>
              </div>
            </div>

            {/* Closed hand illustration */}
            <div className="flex justify-end mt-6" aria-hidden>
              <Image
                src="/assets/closed-hand.svg"
                alt=""
                width={220}
                height={220}
                className="w-40 md:w-56 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: Coral — space to expand + newsletter ──────── */}
      <section className="min-h-screen bg-tic-coral flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-20">
          <Image
            src="/assets/space-to-expand.svg"
            alt="Do you need space to expand + condense in? Us too."
            width={720}
            height={420}
            className="w-full max-w-2xl h-auto mb-14"
          />
          <InlineNewsletter inputBg="bg-tic-yellow" />
        </div>
      </section>

      {/* ── Section 9: Yellow — presence + arch CTA ───────────────── */}
      <section className="min-h-screen bg-tic-yellow flex flex-col">
        <h2
          className="text-center font-[family-name:var(--font-gordon)] uppercase tracking-[0.1em] pt-10 pb-4 px-4"
          style={{ fontSize: "clamp(0.9rem, 2.2vw, 1.7rem)" }}
        >
          PRESENCE IS THE ONLY THING THAT HAS NO END
        </h2>

        <div className="flex-1 flex items-center justify-between px-6 md:px-14 gap-4 py-6">
          <a
            href="https://the-infinity-container.mn.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block font-[family-name:var(--font-gordon)] font-bold uppercase tracking-widest leading-tight max-w-[180px] hover:opacity-70 transition-opacity"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.5rem)" }}
          >
            JOIN US IN THE<br />INFINITY<br />CONTAINER
          </a>

          <div className="flex-1 flex items-center justify-center min-w-0">
            <Image
              src="/assets/window-view.svg"
              alt="The Infinity Container portal — stained glass arch"
              width={480}
              height={660}
              className="w-full max-w-[260px] md:max-w-[420px] h-auto"
            />
          </div>

          <a
            href="https://the-infinity-container.mn.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block font-[family-name:var(--font-gordon)] font-bold uppercase tracking-widest leading-tight max-w-[180px] text-right hover:opacity-70 transition-opacity"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.5rem)" }}
          >
            ENTER OUR<br />MEMBERSHIP<br />PORTAL
          </a>
        </div>

        {/* Mobile CTAs */}
        <div className="md:hidden flex flex-col items-center gap-6 px-6 pb-10 text-center">
          <a
            href="https://the-infinity-container.mn.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-gordon)] font-bold text-2xl uppercase tracking-widest leading-tight"
          >
            JOIN US IN THE INFINITY CONTAINER
          </a>
          <a
            href="https://the-infinity-container.mn.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-gordon)] font-bold text-2xl uppercase tracking-widest leading-tight"
          >
            ENTER OUR MEMBERSHIP PORTAL
          </a>
        </div>
      </section>

    </main>
  );
}

/* Inline marquee — avoids importing Framer Motion at page level */
function MarqueeRow({
  text,
  duration,
  fontSize,
}: {
  text: string;
  duration: number;
  fontSize: string;
}) {
  const repeated = Array(8).fill(text).join("   ✦   ");
  return (
    <div className="overflow-hidden w-full">
      <p
        className="font-[family-name:var(--font-gordon)] text-tic-yellow whitespace-nowrap animate-marquee select-none"
        style={{ fontSize, lineHeight: 0.88 }}
      >
        {repeated}&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;{repeated}
      </p>
      <style>{`
        @keyframes marquee-row { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee-row ${duration}s linear infinite; }
      `}</style>
    </div>
  );
}
