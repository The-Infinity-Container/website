export type CategoryKey = "integration" | "psychedelics" | "practitioners" | "reflection";

export const CATEGORIES: { key: CategoryKey; label: string; color: string }[] = [
  { key: "integration", label: "Integration", color: "#817202" },
  { key: "psychedelics", label: "Psychedelics", color: "#236c7f" },
  { key: "practitioners", label: "Practitioners", color: "#1948a7" },
  { key: "reflection", label: "Reflection", color: "#f56e71" },
];

export function categoryLabel(key: string): string {
  return CATEGORIES.find((c) => c.key === key)?.label ?? key;
}

export function categoryColor(key: string): string {
  return CATEGORIES.find((c) => c.key === key)?.color ?? "#000000";
}
