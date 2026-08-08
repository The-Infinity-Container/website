export default function CharCounter({ value, max }: { value: string; max: number }) {
  const len = value.length;
  const color = len >= max ? "text-tic-coral" : len >= max * 0.85 ? "text-tic-orange" : "text-black/40";
  return (
    <span className={`text-xs font-bold ${color}`}>
      {len}/{max}
    </span>
  );
}
