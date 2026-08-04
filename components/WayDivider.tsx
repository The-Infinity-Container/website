interface WayDividerProps {
  lineOne?: string;
  lineTwo?: string;
}

export default function WayDivider({ lineOne = "Integration", lineTwo = "is the way" }: WayDividerProps) {
  return (
    <div className="bg-[#817202] px-2 pt-[50px] md:pt-[100px] pb-[118px] md:pb-[168px] text-center">
      <h2 className="font-[family-name:var(--font-gordon)] uppercase font-bold text-tic-yellow" style={{ fontSize: "clamp(24px, 8vw, 115px)", letterSpacing: "0.09em", marginBottom: "-68px" }}>
        {lineOne}
        <br />
        {lineTwo}
      </h2>
    </div>
  );
}
