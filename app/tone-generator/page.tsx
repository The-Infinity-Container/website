import type { Metadata } from "next";
import ToneGenerator from "@/components/ToneGenerator";

export const metadata: Metadata = {
  title: "Tone Generator | The Infinity Container",
  robots: { index: false, follow: false },
};

export default function ToneGeneratorPage() {
  return <ToneGenerator />;
}
