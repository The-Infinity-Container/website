import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-[28px] pb-[22.4px] px-6">
      {/* Main footer content */}
      <div className="max-w-[1290px] mx-auto mb-[19.6px]">
        <div className="flex flex-col md:flex-row md:items-center gap-[29.4px]" style={{ marginTop: "28px" }}>
          {/* Left column */}
          <div className="text-center md:flex-1 md:text-left">
            <h3 className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.09em] mb-[13.3px]" style={{ fontSize: "1.05em" }}>
              The infinity
              <br />
              container
            </h3>
            <p className="font-[family-name:var(--font-noto-serif)] italic text-[14.7px]" style={{ lineHeight: "23.8px" }}>
              Integration is the way.
            </p>
          </div>

          {/* Center column - window view image (equal-flex flanks on either side keep this
              mathematically centered regardless of how wide the left/right content is) */}
          <div className="flex flex-col items-center">
            <img
              src="/assets/window-view-yellow.svg"
              alt=""
              style={{ width: "213.5px", height: "auto", maxWidth: "100%" }}
              aria-hidden
            />
            <a href="https://the-infinity-container.mn.co/sign_in" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-noto-serif)] mt-[13.3px] hover:opacity-70 transition-opacity" style={{ color: "#D5D06A", fontSize: "14.7px", lineHeight: "23.8px" }}>
              Log In
            </a>
          </div>

          {/* Right column - socials and logo */}
          <div className="flex flex-col relative md:flex-1 xl:items-end">
            <div className="flex flex-col items-center gap-[16.8px] xl:flex-row xl:items-start xl:gap-[39.2px]">
              {/* Socials + email column */}
              <div className="xl:ml-[126px]">
                <p className="font-[family-name:var(--font-noto-serif)] text-[14.7px] mb-[8.4px]" style={{ lineHeight: "23.8px" }}>
                  <a href="https://www.instagram.com/theinfinitycontainer" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                    Instagram
                  </a>
                </p>
                <p className="font-[family-name:var(--font-noto-serif)] text-[14.7px] mb-[8.4px]" style={{ lineHeight: "23.8px" }}>
                  <a href="https://www.youtube.com/@TheInfinityContainer" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                    Youtube
                  </a>
                </p>
                <p className="font-[family-name:var(--font-noto-serif)] text-[14.7px] mb-[8.4px]" style={{ lineHeight: "23.8px" }}>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    Substack
                  </a>
                </p>
                <p className="font-[family-name:var(--font-noto-serif)] text-[14.7px]" style={{ lineHeight: "23.8px" }}>
                  <a href="mailto:info@theinfinitycontainer.com" className="hover:opacity-70 transition-opacity">
                    info@theinfinitycontainer.com
                  </a>
                </p>
              </div>
              {/* Globe */}
              <img
                src="/assets/tic-globe-logo.svg"
                alt="The Infinity Container"
                className="h-[130.9px] flex-shrink-0 -mt-[161.7px] -mr-[66.5px] md:mt-0 md:mr-0 xl:-mt-[27.3px] xl:-ml-[181.3px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="max-w-[1290px] mx-auto pt-[14px] flex justify-between items-center">
        <p className="font-[family-name:var(--font-noto-serif)] text-[14.7px] text-white/60">
          © 2026 The Infinity Container
        </p>
        <Link href="#" className="font-[family-name:var(--font-noto-serif)] text-[14.7px] text-white/60 hover:text-white transition-colors">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
