import type { Metadata } from "next";
import ToneGenerator from "@/components/ToneGenerator";

export const metadata: Metadata = {
  title: "Tone Generator",
  robots: { index: false, follow: false },
};

export default function ToneGeneratorPage() {
  return <ToneGenerator />;
}
