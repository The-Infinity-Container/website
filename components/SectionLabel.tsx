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
      style={{ fontSize: "18px", letterSpacing: "0.42px", marginBottom: "50px" }}
    >
      {children}
    </p>
  );
}
