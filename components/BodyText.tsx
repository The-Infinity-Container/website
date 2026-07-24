export default function BodyText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-[family-name:var(--font-noto-serif)] ${className}`}
      style={{ fontSize: "23px", lineHeight: "37px" }}
    >
      {children}
    </p>
  );
}
