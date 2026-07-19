export default function QuizHero() {
  return (
    <header className="bg-black text-center px-6 pt-[100px] pb-[90px]">
      <p className="font-[family-name:var(--font-gordon)] text-[11px] tracking-[0.24em] uppercase text-tic-yellow mb-6">
        Find My Membership
      </p>
      <h1 className="font-[family-name:var(--font-gordon)] font-normal text-[clamp(32px,5vw,54px)] tracking-[0.02em] leading-[1.15] text-white max-w-[700px] mx-auto mb-6">
        Not sure where to start?
        <br />
        Start here.
      </h1>
      <p className="font-[family-name:var(--font-noto-serif)] italic text-[clamp(16px,2vw,20px)] text-tic-grey max-w-[540px] mx-auto leading-[1.75]">
        Seven questions. A few minutes. The right fit for where you actually are.
      </p>
    </header>
  );
}
