import Image from "next/image";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-tic-yellow flex flex-col">
      <SiteNav />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col pt-14 pb-[5em]">
        {/* Heading */}
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.15em] uppercase px-4 pt-6 pb-4 font-[family-name:var(--font-gordon)]">
          PRESENCE IS THE ONLY THING THAT HAS NO END
        </h1>

        {/* Three-column layout: CTA | Arch | CTA */}
        <div className="flex-1 flex items-center justify-between px-6 md:px-12 gap-4">
          {/* Left CTA */}
          <div className="hidden sm:flex flex-col justify-center max-w-[180px]">
            <a
              href="https://the-infinity-container.mn.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-xl md:text-2xl tracking-widest uppercase leading-tight hover:opacity-70 transition-opacity font-[family-name:var(--font-gordon)]"
            >
              JOIN US IN THE
              <br />
              INFINITY
              <br />
              CONTAINER
            </a>
          </div>

          {/* Arch SVG — centrepiece */}
          <div className="flex-1 flex items-center justify-center min-w-0">
            <Image
              src="/assets/window-view.svg"
              alt="The Infinity Container — stained glass arch portal"
              width={480}
              height={660}
              priority
              className="w-full max-w-[320px] md:max-w-[460px] h-auto"
            />
          </div>

          {/* Right CTA */}
          <div className="hidden sm:flex flex-col justify-center items-end max-w-[180px] text-right">
            <a
              href="https://the-infinity-container.mn.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-xl md:text-2xl tracking-widest uppercase leading-tight hover:opacity-70 transition-opacity font-[family-name:var(--font-gordon)]"
            >
              ENTER OUR
              <br />
              MEMBERSHIP
              <br />
              PORTAL
            </a>
          </div>
        </div>

        {/* Mobile CTAs — stacked below arch */}
        <div className="sm:hidden flex flex-col items-center gap-6 px-6 pb-4 text-center">
          <a
            href="https://the-infinity-container.mn.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-2xl tracking-widest uppercase leading-tight font-[family-name:var(--font-gordon)]"
          >
            JOIN US IN THE INFINITY CONTAINER
          </a>
          <a
            href="https://the-infinity-container.mn.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-2xl tracking-widest uppercase leading-tight font-[family-name:var(--font-gordon)]"
          >
            ENTER OUR MEMBERSHIP PORTAL
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
