interface WayDividerProps {
  lineOne?: string;
  lineTwo?: string;
}

export default function WayDivider({ lineOne = "Integration", lineTwo = "is the way" }: WayDividerProps) {
  return (
    <div className="bg-[#817202] py-[70px] px-2 text-center">
      <span
        className="block font-[family-name:var(--font-gordon)] uppercase text-tic-yellow leading-[1.12] tracking-[0.03em] text-[clamp(24px,8.5vw,124px)] md:text-[clamp(40px,9.5vw,124px)]"
      >
        {lineOne}
      </span>
      <span
        className="block font-[family-name:var(--font-gordon)] uppercase text-tic-yellow leading-[1.12] tracking-[0.03em] text-[clamp(24px,8.5vw,124px)] md:text-[clamp(40px,9.5vw,124px)]"
      >
        {lineTwo}
      </span>
    </div>
  );
}
