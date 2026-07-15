export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-[family-name:var(--font-gordon)] uppercase text-tic-dark-grey"
      style={{ fontSize: "28px", letterSpacing: "0.42px", marginBottom: "60px" }}
    >
      {children}
    </p>
  );
}
