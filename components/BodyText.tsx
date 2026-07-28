export default function BodyText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-[family-name:var(--font-noto-serif)] text-body ${className}`}
    >
      {children}
    </p>
  );
}
