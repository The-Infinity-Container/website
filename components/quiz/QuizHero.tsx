import SectionLabel from "@/components/SectionLabel";

export default function QuizHero() {
  return (
    <header className="bg-black text-center px-6 pt-[50px] md:pt-[100px] pb-[45px] md:pb-[90px]">
      <SectionLabel color="text-tic-yellow">Find My Membership</SectionLabel>
      <h1 className="font-[family-name:var(--font-gordon)] font-normal text-[clamp(32px,5vw,54px)] tracking-[0.02em] leading-[1.15] text-white max-w-[700px] mx-auto mb-6">
        Not sure where to start?
        <br />
        Start here.
      </h1>
      <p className="font-[family-name:var(--font-noto-serif)] italic text-body text-tic-grey max-w-[540px] mx-auto">
        Seven questions. A few minutes. The right fit for where you actually are.
      </p>
    </header>
  );
}
