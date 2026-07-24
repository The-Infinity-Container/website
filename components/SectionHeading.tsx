export default function SectionHeading({
  children,
  className = "",
  color = "",
  marginBottom = "28px",
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
  marginBottom?: string;
}) {
  return (
    <h2
      className={`font-[family-name:var(--font-gordon)] font-normal uppercase tracking-[0.02em] leading-[1.4] ${color} ${className}`}
      style={{ fontSize: "clamp(21px, 3.24vw, 34px)", marginBottom }}
    >
      {children}
    </h2>
  );
}
