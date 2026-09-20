import type { Metadata } from "next";
import CookieChoiceReset from "@/components/CookieChoiceReset";
import SectionLabel from "@/components/SectionLabel";
import BodyText from "@/components/BodyText";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How The Infinity Container collects, uses, and shares information, and the choices you have.",
};

const providers: [string, string][] = [
  ["Mighty Networks", "Our community, memberships, checkout, member profiles, and messages"],
  ["Zoom", "Live events and recordings"],
  ["Stripe", "Payments"],
  ["Kit", "Newsletter email"],
  ["Substack", "Our Substack publication"],
  ["Supabase", "Website data and hosting"],
  ["Spotify", "Embedded playlist player on our website"],
];

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.4] text-black text-[22px] md:text-[26px] mt-14 mb-4">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] text-black text-[18px] mt-8 mb-3">
      {children}
    </h3>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc pl-6 space-y-2 mb-6 font-[family-name:var(--font-noto-serif)] text-body text-[#222]">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <BodyText className="text-[#222] mb-6">{children}</BodyText>;
}

const email = (
  <a href="mailto:hello@theinfinitycontainer.com" className="underline underline-offset-2 hover:opacity-70">
    hello@theinfinitycontainer.com
  </a>
);

export default function PrivacyPage() {
  return (
    <main className="bg-white px-6 py-[60px] md:py-[100px]">
      <div className="max-w-[1290px] mx-auto">
        <SectionLabel>Legal</SectionLabel>
        <h1
          className="font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.15] text-black mb-4"
          style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
        >
          Privacy Policy
        </h1>
        <p className="font-[family-name:var(--font-noto-serif)] italic text-body text-[#444] mb-12">
          The Infinity Container, Inc. · Effective date: Sep 18, 2026
        </p>

        <div className="max-w-[820px]">
          <P>
            The Infinity Container, Inc. (&ldquo;TIC,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) is a California
            corporation. This policy explains what information we collect when you visit our website, take our quiz,
            join our newsletter, join our community, or attend our events, how we use it, who else can see it, and the
            choices you have.
          </P>
          <P>Contact: {email}</P>

          <H2>1. What TIC is</H2>
          <P>
            TIC is an education membership and community about preparation and integration. It is not therapy, medical
            care, or a healthcare service, and we do not diagnose or treat anyone.
          </P>

          <H2>2. Information we collect</H2>
          <H3>Information you give us</H3>
          <List
            items={[
              "Contact and account information: your name, email address, and anything you add to your profile.",
              "Membership and payment information: your membership level and billing status. Payments are processed by Stripe.",
              "What you share: posts, comments, messages, chat, questions, and anything you say at events.",
              "Quiz: our “Find My Membership” quiz asks questions about why you are here and collects your email address. Some answers may say something about your reasons for joining.",
              "Your communications with us, such as support emails.",
            ]}
          />
          <P>
            We do not ask for health information. You do not need to share any to take part. Because TIC is a
            community about preparation and integration, some members choose to talk about their experiences or
            personal circumstances. Please share only what you are comfortable having in a group setting. Other
            members can see what you post, and while we ask every member to keep others&apos; shares confidential, we
            cannot control what another person does with what they hear or read.
          </P>
          <H3>Information collected automatically</H3>
          <P>
            Device and browser type, pages visited, and similar usage information, collected through cookies and
            similar tools.
          </P>

          <H2>3. Event recordings and replays</H2>
          <P>
            We record our events on Zoom and show replays in TIC&apos;s libraries. What participants share is edited
            out of replays and stays private to the container. We do not use AI transcription or automated
            note-taking at our events. Please do not record or screenshot events, and please keep what others share
            confidential. If you find something you shared in a replay, email us and we will work to remove it
            promptly.
          </P>

          <H2>4. How we use information</H2>
          <List
            items={[
              "To run your membership and provide the community, events, and content.",
              "To send messages you asked for, such as the newsletter, and service messages, such as receipts or schedule changes.",
              "To moderate the community and enforce our guidelines.",
              "To respond to your questions and support requests.",
              "To improve our programs and website.",
              "To meet legal obligations and protect our rights.",
            ]}
          />

          <H2>5. Who we share information with</H2>
          <P>We use service providers to run TIC:</P>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left font-[family-name:var(--font-noto-serif)] text-[16px] leading-[26px] text-[#222] border-collapse">
              <thead>
                <tr className="border-b-[1.5px] border-black">
                  <th className="py-2 pr-6 font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.06em] text-[15px]">
                    Provider
                  </th>
                  <th className="py-2 font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.06em] text-[15px]">
                    Used for
                  </th>
                </tr>
              </thead>
              <tbody>
                {providers.map(([name, use]) => (
                  <tr key={name} className="border-b border-black/15">
                    <td className="py-2 pr-6 align-top whitespace-nowrap">{name}</td>
                    <td className="py-2 align-top">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            Our community lives on Mighty Networks, which collects and processes information under its own terms and
            privacy policy.
          </P>
          <P>
            We may also share information with other members when you post in the community; when required by law or
            legal process; to protect someone&apos;s safety or our rights; if TIC is sold or merged; or with your
            consent.
          </P>

          <H2>6. Cookies and analytics</H2>
          <P>
            We use cookies and similar tools, including those set by embedded third-party content such as our Spotify
            playlist player. Through our cookie banner, you can choose whether to allow optional cookies. Our website does not
            currently respond to &ldquo;Do Not Track&rdquo; browser signals. You can also control cookies in your
            browser settings.
          </P>
          <CookieChoiceReset />

          <H2>7. How long we keep information</H2>
          <P>
            We keep information for as long as we need it to run TIC, meet legal and accounting obligations, and
            resolve disputes. You can ask us to delete your information (see Section 8).
          </P>

          <H2>8. Your choices and rights</H2>
          <List
            items={[
              "Unsubscribe from the newsletter using the link in any email.",
              "Update your profile in the community at any time.",
              "Cancel your membership at any time.",
              "Ask us to access, correct, or delete your information by emailing us at the address above. We may need to verify your identity, and we may need to keep some records for legal or billing reasons.",
            ]}
          />
          <P>
            If you live in California, Washington, the European Union or United Kingdom, or Canada, you may have
            additional rights under local law. Contact us and we will honor requests as required by the law that
            applies to you.
          </P>

          <H2>9. Security</H2>
          <P>
            We use reasonable safeguards to protect your information. No system is perfectly secure. If a breach
            affecting you occurs, we will notify you as required by law.
          </P>

          <H2>10. Age</H2>
          <P>
            TIC is for adults age 21 and over. We do not knowingly collect information from anyone younger, and will
            delete it if we learn we have.
          </P>

          <H2>11. Where information is processed</H2>
          <P>
            We are based in the United States. If you live outside the United States, your information is transferred
            to and processed in the United States.
          </P>

          <H2>12. Changes to this policy</H2>
          <P>
            If we make significant changes, we will notify you by email or in the community and update the effective
            date above.
          </P>

          <H2>13. Contact</H2>
          <P>
            The Infinity Container, Inc.
            <br />
            {email}
          </P>
        </div>
      </div>
    </main>
  );
}
