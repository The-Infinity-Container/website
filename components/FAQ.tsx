"use client";

import { useId, useState } from "react";
import SectionLabel from "@/components/SectionLabel";
import SectionHeading from "@/components/SectionHeading";
import BodyText from "@/components/BodyText";

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function FAQ({
  items,
  label = "FAQ",
  heading = "Questions, answered.",
}: {
  items: FAQItem[];
  label?: string;
  heading?: string;
}) {
  return (
    <section className="bg-tic-grey px-6 py-[55px] md:py-[110px]">
      <div className="max-w-[1290px] mx-auto">
        <div className="max-w-[820px] mx-auto">
          <SectionLabel>{label}</SectionLabel>
          <SectionHeading color="text-black">{heading}</SectionHeading>
          <div className="bg-white rounded-lg px-6 md:px-10">
            <div className="flex flex-col border-t border-black/10">
              {items.map((item, i) => (
                <FAQRow key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQRow({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="border-b border-black/10">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group w-full flex items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-[family-name:var(--font-gordon)] uppercase tracking-[0.02em] text-black leading-[1.4] transition-colors group-hover:text-tic-pink" style={{ fontSize: "clamp(15px, 1.8vw, 18px)" }}>
          {item.question}
        </span>
        <PlusMinusIcon open={open} />
      </button>
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6 pr-10">{item.answer}</div>
        </div>
      </div>
    </div>
  );
}

function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <span className="relative w-4 h-4 shrink-0" aria-hidden>
      <span className="absolute left-1/2 top-1/2 h-[1.5px] w-4 -translate-x-1/2 -translate-y-1/2 bg-black" />
      <span
        className={`absolute left-1/2 top-1/2 h-4 w-[1.5px] -translate-x-1/2 -translate-y-1/2 bg-black transition-opacity duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
    </span>
  );
}

export function FAQParagraph({ children }: { children: React.ReactNode }) {
  return <BodyText className="text-black mb-4 last:mb-0">{children}</BodyText>;
}
