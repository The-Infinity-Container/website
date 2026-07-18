import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-[40px] pb-[32px] px-6">
      {/* Main footer content */}
      <div className="max-w-[1290px] mx-auto mb-[28px]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-[42px]" style={{ marginTop: "40px" }}>
          {/* Left column */}
          <div>
            <h3 className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.09em] mb-[19px]" style={{ fontSize: "1.5em" }}>
              The infinity
              <br />
              container
            </h3>
            <p className="font-[family-name:var(--font-noto-serif)] italic text-[21px]" style={{ lineHeight: "34px" }}>
              Integration is the way.
            </p>
          </div>

          {/* Center column - window view image */}
          <div className="flex flex-col items-center">
            <img
              src="/assets/window-view-yellow.svg"
              alt=""
              style={{ width: "305px", height: "auto", maxWidth: "100%" }}
              aria-hidden
            />
            <a href="https://the-infinity-container.mn.co/sign_in" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-noto-serif)] mt-[19px] hover:opacity-70 transition-opacity" style={{ color: "#D5D06A", fontSize: "21px", lineHeight: "34px" }}>
              Log In
            </a>
          </div>

          {/* Right column - socials and logo */}
          <div className="flex flex-col relative">
            <div className="flex gap-[56px] mb-[28px] items-start">
              {/* Socials column */}
              <div>
                <p className="font-[family-name:var(--font-noto-serif)] text-[21px] mb-[12px]" style={{ lineHeight: "34px" }}>
                  <a href="https://www.instagram.com/theinfinitycontainer" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                    Instagram
                  </a>
                </p>
                <p className="font-[family-name:var(--font-noto-serif)] text-[21px] mb-[12px]" style={{ lineHeight: "34px" }}>
                  <a href="https://www.youtube.com/@TheInfinityContainer" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                    Youtube
                  </a>
                </p>
                <p className="font-[family-name:var(--font-noto-serif)] text-[21px]" style={{ lineHeight: "34px" }}>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    Substack
                  </a>
                </p>
              </div>
              {/* Globe */}
              <img
                src="/assets/tic-globe-logo.svg"
                alt="The Infinity Container"
                style={{ height: "187px", flexShrink: 0, marginTop: "-39px", marginLeft: "-72px" }}
              />
            </div>
            {/* Email row - full width */}
            <p className="font-[family-name:var(--font-noto-serif)] text-[21px]" style={{ lineHeight: "34px", marginTop: "-48px" }}>
              <a href="mailto:info@theinfinitycontainer.com" className="hover:opacity-70 transition-opacity">
                info@theinfinitycontainer.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="max-w-[1290px] mx-auto pt-[20px] flex justify-between items-center">
        <p className="font-[family-name:var(--font-noto-serif)] text-[21px] text-white/60">
          © 2026 The Infinity Container
        </p>
        <Link href="#" className="font-[family-name:var(--font-noto-serif)] text-[21px] text-white/60 hover:text-white transition-colors">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
