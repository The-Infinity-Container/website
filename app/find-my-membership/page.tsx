import type { Metadata } from "next";
import { resolvePageMetadata } from "@/lib/pageSeo";
import QuizHero from "@/components/quiz/QuizHero";
import QuizEngine from "@/components/quiz/QuizEngine";
import WayDivider from "@/components/WayDivider";
import ConsoleMessage from "@/components/ConsoleMessage";

export async function generateMetadata(): Promise<Metadata> {
  return resolvePageMetadata("/find-my-membership", {
    title: "Find My Membership | The Infinity Container",
    description:
      "Not sure where to start? Answer 7 questions and find the right TIC membership for where you actually are.",
  });
}

export default function FindMyMembershipPage() {
  return (
    <>
      <ConsoleMessage
        messages={[
          "From Joyce: 'You bring wonder, creativity, growth and caring kindness into our world and Mama JoySee loves you soo very much' 🤗🥰💃🏼",
        ]}
      />
      <QuizHero />
      <section className="bg-white px-6 pt-10 md:pt-20 pb-[50px] md:pb-[100px]">
        <QuizEngine />
      </section>
      <WayDivider />
    </>
  );
}
