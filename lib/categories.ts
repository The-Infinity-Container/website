export type CategoryKey =
  | "professional-support"
  | "community"
  | "therapeutic-education"
  | "inspiration";

export const CATEGORIES: { key: CategoryKey; label: string; color: string }[] = [
  { key: "professional-support", label: "Professional Support", color: "#7C3537" },
  { key: "community", label: "Community", color: "#EB731F" },
  { key: "therapeutic-education", label: "Therapeutic Education", color: "#817203" },
  { key: "inspiration", label: "Inspiration", color: "#F25FC1" },
];

export function categoryLabel(key: string): string {
  return CATEGORIES.find((c) => c.key === key)?.label ?? key;
}

export function categoryColor(key: string): string {
  return CATEGORIES.find((c) => c.key === key)?.color ?? "#000000";
}
