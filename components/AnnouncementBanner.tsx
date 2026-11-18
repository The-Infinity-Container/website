const JOIN_URL = "https://join.theinfinitycontainer.com/theendisthebeginning";

export default function AnnouncementBanner() {
  return (
    <aside
      aria-label="Announcement"
      className="bg-[#0a0e10] border-b border-tic-yellow/25 px-4 md:px-6 py-3 md:py-4 text-tic-yellow"
    >
      <div className="max-w-[1290px] mx-auto">
        <div className="flex items-center justify-center">
          {/* Decorative artwork — plain <img>: these are large SVGs that next/image would not optimize */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/banner-sun.svg"
            alt=""
            aria-hidden="true"
            className="w-[74px] sm:w-[116px] md:w-[185px] lg:w-[225px] h-auto shrink-0"
          />

          <div className="min-w-0">
            <h2 className="font-[family-name:var(--font-gordon)] font-normal uppercase text-center">
              <span
                className="block tracking-[0.08em] leading-[1.05]"
                style={{ fontSize: "clamp(22px, 4.6vw, 64px)" }}
              >
                The End is
              </span>
              <span
                className="block tracking-[0.08em] leading-[1.15] mt-[0.12em]"
                style={{ fontSize: "clamp(15px, 3.1vw, 43px)" }}
              >
                The Beginning
              </span>
            </h2>

            <p className="mt-3 md:mt-4 text-center font-[family-name:var(--font-noto-serif)] italic text-[16px] md:text-[18px] leading-[1.5]">
              A 5-week holiday container starts 11/28.{" "}
              <a
                href={JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap not-italic font-[family-name:var(--font-gordon)] uppercase tracking-[0.12em] text-[14px] md:text-[15px] ml-1 hover:text-white focus-visible:text-white transition-colors"
              >
                <span className="border-b-[1.5px] border-current pb-[2px] inline-block">
                  Join us →
                </span>
              </a>
            </p>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/banner-moon.svg"
            alt=""
            aria-hidden="true"
            className="w-[60px] sm:w-[92px] md:w-[150px] lg:w-[182px] h-auto shrink-0"
          />
        </div>
      </div>
    </aside>
  );
}
