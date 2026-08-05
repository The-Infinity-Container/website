import Image from "next/image";

export default function BlogHero() {
  return (
    <header className="bg-black px-6 pt-20 pb-10 md:pb-0 overflow-hidden">
      <div className="max-w-[1290px] mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="font-[family-name:var(--font-gordon)] text-tic-yellow uppercase tracking-[0.24em] text-[11px] mb-[18px]">
            Writing from the container
          </p>
          <h1
            className="font-[family-name:var(--font-gordon)] font-normal text-white uppercase tracking-[0.02em] leading-[1.12] mb-5"
            style={{ fontSize: "clamp(36px, 5.5vw, 58px)" }}
          >
            Integration &amp; Reflection
          </h1>
          <p className="font-[family-name:var(--font-noto-serif)] italic text-tic-dark-grey max-w-[480px] leading-[1.7] text-lg">
            Essays, frameworks, and field notes from the practice of becoming.
          </p>
        </div>
        <div className="hidden md:flex items-end justify-end">
          <Image
            src="/assets/blog-hero-octopus-blue.svg"
            alt=""
            aria-hidden
            width={476}
            height={268}
            className="w-full max-w-[616px] h-auto -translate-y-5"
            priority
          />
        </div>
      </div>
    </header>
  );
}
