import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-[80px] pb-[60px] px-6">
      {/* Main footer content */}
      <div className="max-w-[1290px] mx-auto mb-[60px]">
        <div className="grid md:grid-cols-3 gap-[60px] items-center" style={{ marginTop: "100px" }}>
          {/* Left column */}
          <div>
            <h3 className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.09em] mb-[24px]" style={{ fontSize: "2em" }}>
              The infinity
              <br />
              container
            </h3>
            <p className="font-[family-name:var(--font-noto-serif)] italic text-[28px]" style={{ lineHeight: "45px" }}>
              Integration is the way.
            </p>
          </div>

          {/* Center column - window view image */}
          <div className="flex flex-col items-center">
            <img
              src="/assets/window-view-yellow.svg"
              alt=""
              style={{ width: "390px", height: "auto", maxWidth: "100%" }}
              aria-hidden
            />
            <a href="https://the-infinity-container.mn.co/sign_in" target="_blank" rel="noopener noreferrer" className="font-[family-name:var(--font-noto-serif)] mt-[24px] hover:opacity-70 transition-opacity" style={{ color: "#D5D06A", fontSize: "28px", lineHeight: "45px" }}>
              Log In
            </a>
          </div>

          {/* Right column - socials and logo */}
          <div className="flex flex-col relative">
            <div className="flex gap-[80px] mb-[40px] items-start">
              {/* Socials column */}
              <div>
                <p className="font-[family-name:var(--font-noto-serif)] text-[28px] mb-[16px]" style={{ lineHeight: "45px" }}>
                  <a href="https://www.instagram.com/theinfinitycontainer" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                    Instagram
                  </a>
                </p>
                <p className="font-[family-name:var(--font-noto-serif)] text-[28px] mb-[16px]" style={{ lineHeight: "45px" }}>
                  <a href="https://www.youtube.com/@TheInfinityContainer" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                    Youtube
                  </a>
                </p>
                <p className="font-[family-name:var(--font-noto-serif)] text-[28px]" style={{ lineHeight: "45px" }}>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    Substack
                  </a>
                </p>
              </div>
              {/* Globe */}
              <img
                src="/assets/tic-globe-logo.svg"
                alt="The Infinity Container"
                style={{ height: "250px", flexShrink: 0, marginTop: "-50px", marginLeft: "-95px" }}
              />
            </div>
            {/* Email row - full width */}
            <p className="font-[family-name:var(--font-noto-serif)] text-[28px]" style={{ lineHeight: "45px", marginTop: "-65px" }}>
              <a href="mailto:info@theinfinitycontainer.com" className="hover:opacity-70 transition-opacity">
                info@theinfinitycontainer.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="max-w-[1290px] mx-auto pt-[40px] flex justify-between items-center">
        <p className="font-[family-name:var(--font-noto-serif)] text-[28px] text-white/60">
          © 2026 The Infinity Container
        </p>
        <Link href="#" className="font-[family-name:var(--font-noto-serif)] text-[28px] text-white/60 hover:text-white transition-colors">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
