export default function SectionLabel({
  children,
  className = "",
  color = "text-tic-dark-grey",
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <p
      className={`font-[family-name:var(--font-gordon)] uppercase ${color} ${className}`}
      style={{ fontSize: "25px", letterSpacing: "0.42px", marginBottom: "60px" }}
    >
      {children}
    </p>
  );
}
