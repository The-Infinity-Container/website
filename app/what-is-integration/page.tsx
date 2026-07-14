import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "What is Integration? | The Infinity Container",
  description: "Integration is how an experience becomes part of who you are. Learn what psychedelic integration is, why it doesn't happen on its own, and how the Solar-Lunar Framework maps the full arc from preparation to becoming.",
};

const SOLAR_CAPACITIES = [
  "Ground",
  "Anchor",
  // Additional capacities shown in the framework
];

const LUNAR_CAPACITIES = [
  "Weave",
  "Conduct",
  // Additional capacities shown in the framework
];

export default function WhatIsIntegrationPage() {
  return (
    <main className="bg-white">

      {/* ── PAGE HERO ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#817202", padding: "100px 24px 90px", textAlign: "center" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "'CS Gordon', Georgia, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#d5d069",
            marginBottom: "24px"
          }}>
            What is Integration?
          </p>
          <h1 style={{
            fontFamily: "'CS Gordon', Georgia, sans-serif",
            fontSize: "clamp(34px, 5.5vw, 56px)",
            letterSpacing: "0.02em",
            lineHeight: "1.15",
            color: "#fcfcfc",
            maxWidth: "760px",
            margin: "0 auto"
          }}>
            How an experience
          </h1>
          <Image
            src="/assets/integration_handwritten.png"
            alt="becomes a part of who you are"
            width={440}
            height={120}
            style={{
              maxWidth: "min(440px, 72vw)",
              display: "block",
              margin: "4px auto",
              height: "auto"
            }}
          />
          <p style={{
            fontFamily: "'Noto Serif', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(17px, 2.2vw, 21px)",
            color: "#d5d069",
            maxWidth: "560px",
            margin: "26px auto 0"
          }}>
            A journey — psychedelic or otherwise — opens something. Integration is what you do with what opened.
          </p>
        </div>
      </section>

      {/* ── THE WORK SECTION ──────────────────────────────────────── */}
      <section style={{ padding: "100px 24px", backgroundColor: "#fcfcfc" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: "72px", alignItems: "start" }}>
          <div>
            <p style={{
              fontFamily: "'CS Gordon', Georgia, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#7b7b7a",
              marginBottom: "18px"
            }}>
              The work
            </p>
            <h2 style={{
              fontFamily: "'CS Gordon', Georgia, sans-serif",
              fontWeight: "normal",
              fontSize: "clamp(26px, 4vw, 42px)",
              letterSpacing: "0.02em",
              lineHeight: "1.2",
              marginBottom: "28px"
            }}>
              More than a conversation after the fact.
            </h2>
            <div style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: "17px", lineHeight: "1.85", marginBottom: "24px", color: "#222" }}>
              <p style={{ marginBottom: "24px" }}>
                Integration is often described as "making meaning" from a psychedelic experience — a session or two of talking about what happened. But meaning that stays in language stays in your head. Real integration lives in the body, in behavior, in relationship, in time.
              </p>
              <p style={{ marginBottom: "24px" }}>
                Integration is how insight becomes practice. How an opening becomes a capacity. How the person who returned from the journey and the person living your Tuesday afternoon become the same person.
              </p>
              <p>
                And it applies far beyond psychedelics. Life transitions, grief, awe, birth, loss, love — any experience big enough to change you asks to be integrated. The question is whether it gets what it needs.
              </p>
            </div>
            <div style={{ marginTop: "40px" }}>
              <a href="/blog/what-is-integration" style={{
                display: "inline-block",
                fontFamily: "'CS Gordon', Georgia, sans-serif",
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#142ec7",
                textDecoration: "none",
                borderBottom: "1.5px solid #142ec7",
                paddingBottom: "3px",
                marginTop: "4px"
              }}>
                Dive deeper: read the full essay on the blog →
              </a>
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: "'Noto Serif', Georgia, serif",
              fontStyle: "italic",
              fontSize: "15.5px",
              lineHeight: "1.65",
              color: "#0b0d10",
              borderLeft: "3px solid #d5d069",
              paddingLeft: "26px"
            }}>
              <p>Integration is a birthday<br />
                & a funeral.<br />
                It is playing in the unknown,<br />
                while knowing yourself more.<br />
                It is weaving.<br />
                It is collaborating.<br />
                It is titration & digestion.<br />
                It is process.<br />
                It is practice with awareness.<br />
                It is the evolution of a differentiated,<br />
                connected self.<br />
                It is intra-connected identity.<br />
                It is WE, it is us.<br />
                It is the link between possibility and actuality.<br />
                <br />
                It happens in The Infinity Container.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#817202", padding: "70px 8px", textAlign: "center" }}>
        <span style={{
          fontFamily: "'CS Gordon', Georgia, sans-serif",
          fontSize: "clamp(40px, 9.5vw, 124px)",
          letterSpacing: "0.03em",
          lineHeight: "1.12",
          textTransform: "uppercase",
          color: "#d5d069",
          display: "block"
        }}>
          Integration is the way
        </span>
      </section>

      {/* ── THE GAP SECTION ───────────────────────────────────────── */}
      <section style={{ padding: "100px 24px", backgroundColor: "#dfe3de" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "'CS Gordon', Georgia, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#7b7b7a",
            marginBottom: "18px"
          }}>
            The gap
          </p>
          <h2 style={{
            fontFamily: "'CS Gordon', Georgia, sans-serif",
            fontWeight: "normal",
            fontSize: "clamp(26px, 4vw, 42px)",
            letterSpacing: "0.02em",
            lineHeight: "1.2",
            marginBottom: "28px"
          }}>
            It doesn't happen on its own.
          </h2>

          <Image
            src="/assets/red-hand.svg"
            alt=""
            width={200}
            height={200}
            style={{
              float: "right",
              margin: "0 0 16px 24px",
              width: "200px",
              height: "auto"
            }}
            aria-hidden
          />

          <p style={{
            fontFamily: "'Noto Serif', Georgia, serif",
            fontSize: "17px",
            lineHeight: "1.85",
            marginBottom: "24px",
            color: "#222"
          }}>
            The experience is a doorway — but most people are handed the doorway and nothing else. No preparation beforehand. No container afterward. No community to witness the becoming.
          </p>

          <p style={{
            fontFamily: "'Noto Serif', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(20px, 3vw, 26px)",
            lineHeight: "1.6",
            color: "#7c3537",
            margin: "36px 0",
            paddingLeft: "28px",
            borderLeft: "3px solid #7c3537"
          }}>
            Insight without integration fades. The journey that could have changed everything becomes a story you tell.
          </p>

          <p style={{
            fontFamily: "'Noto Serif', Georgia, serif",
            fontSize: "17px",
            lineHeight: "1.85",
            marginBottom: "24px",
            color: "#222"
          }}>
            Integration takes structure, rhythm, and relationship. It takes a system that honors both the preparation before and the long, spiraling work after. That is what The Infinity Container was built for.
          </p>

          <a href="/blog/what-is-integration" style={{
            display: "inline-block",
            fontFamily: "'CS Gordon', Georgia, sans-serif",
            fontSize: "12px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#142ec7",
            textDecoration: "none",
            borderBottom: "1.5px solid #142ec7",
            paddingBottom: "3px",
            marginTop: "4px"
          }}>
            Dive deeper: why integration needs a container →
          </a>
        </div>
      </section>

      {/* ── WHY CAPACITIES SECTION ───────────────────────────────── */}
      <section style={{ padding: "100px 24px", backgroundColor: "#fcfcfc" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "'CS Gordon', Georgia, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#7b7b7a",
            marginBottom: "18px"
          }}>
            Why capacities
          </p>
          <h2 style={{
            fontFamily: "'CS Gordon', Georgia, sans-serif",
            fontWeight: "normal",
            fontSize: "clamp(26px, 4vw, 42px)",
            letterSpacing: "0.02em",
            lineHeight: "1.2",
            marginBottom: "28px"
          }}>
            Who are you becoming?
          </h2>

          <Image
            src="/assets/head.svg"
            alt=""
            width={190}
            height={200}
            style={{
              float: "right",
              margin: "-20px 0 16px 24px",
              width: "190px",
              height: "auto"
            }}
            aria-hidden
          />

          <p style={{
            fontFamily: "'Noto Serif', Georgia, serif",
            fontSize: "17px",
            lineHeight: "1.85",
            marginBottom: "24px",
            color: "#222"
          }}>
            Most learning asks: what can you do? Integration asks a different question — who are you becoming?
          </p>

          <p style={{
            fontFamily: "'Noto Serif', Georgia, serif",
            fontSize: "17px",
            lineHeight: "1.85",
            marginBottom: "24px",
            color: "#222"
          }}>
            That is why the framework is built around behavioral capacities, not skills. A skill is something you deploy in a context. A capacity changes what you are able to be — across contexts, across relationships, across time.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", margin: "44px 0" }}>
            <div style={{ padding: "32px 28px", borderRadius: "4px", backgroundColor: "#dfe3de" }}>
              <h4 style={{
                fontFamily: "'CS Gordon', Georgia, sans-serif",
                fontWeight: "normal",
                fontSize: "15px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "14px"
              }}>
                Skills, learned in isolation
              </h4>
              <p style={{ fontSize: "14.5px", lineHeight: "1.7", color: "#2a2a2a" }}>
                Acquired in a course. Practiced alone. Deployed when remembered. They add to what you can do — but leave who you are untouched.
              </p>
            </div>
            <div style={{ padding: "32px 28px", borderRadius: "4px", backgroundColor: "#d5d069" }}>
              <h4 style={{
                fontFamily: "'CS Gordon', Georgia, sans-serif",
                fontWeight: "normal",
                fontSize: "15px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "14px"
              }}>
                Capacities, built in community
              </h4>
              <p style={{ fontSize: "14.5px", lineHeight: "1.7", color: "#2a2a2a" }}>
                Developed in relationship, over time, inside a container. They change what is available to you — more resilience, less burnout, a deeper sense of oneness with your life and the people in it.
              </p>
            </div>
          </div>

          <p style={{
            fontFamily: "'Noto Serif', Georgia, serif",
            fontSize: "17px",
            lineHeight: "1.85",
            marginBottom: "24px",
            color: "#222"
          }}>
            This is why we integrate rather than simply learn. Insight that stays intellectual fades. Capacity that is practiced in community becomes who you are.
          </p>

          <a href="/blog/what-is-integration" style={{
            display: "inline-block",
            fontFamily: "'CS Gordon', Georgia, sans-serif",
            fontSize: "12px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#142ec7",
            textDecoration: "none",
            borderBottom: "1.5px solid #142ec7",
            paddingBottom: "3px",
            marginTop: "4px"
          }}>
            Dive deeper: capacities, not skills →
          </a>
        </div>
      </section>

      {/* ── DIVIDER ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#817202", padding: "70px 8px", textAlign: "center" }}>
        <span style={{
          fontFamily: "'CS Gordon', Georgia, sans-serif",
          fontSize: "clamp(40px, 9.5vw, 124px)",
          letterSpacing: "0.03em",
          lineHeight: "1.12",
          textTransform: "uppercase",
          color: "#d5d069",
          display: "block"
        }}>
          Integration is the way
        </span>
      </section>

    </main>
  );
}
