"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackFaqOpen } from "@/lib/analytics";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "What ranks can join?",
    a: "The Karry Academy is designed for players of all skill levels and all ranks who are serious about improving. Whether you're just starting out or looking to refine your higher-level play, this community can help you grow.",
  },
  {
    q: "What is the age requirement?",
    a: "Members must be 16 or older. The community is moderated to stay mature, positive, and improvement-first — no flaming, no toxicity.",
  },
  {
    q: "What is your refund policy?",
    a: "Full refund within 14 days, no questions asked. If the Academy is not for you, contact support in the Discord and we will refund your most recent month in full.",
  },
  {
    q: "Is there a commitment?",
    a: "No. Billing is monthly at $14.99/month and you can cancel anytime from your account page. No contracts, no tricks.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="faq"
      className="mx-auto max-w-[1280px] border-t border-ow-line1 px-6 py-24 lg:px-12 lg:py-[120px]"
    >
      <Reveal>
        <SectionMarker n={5} title="Frequently Asked Questions" />
      </Reveal>

      <Reveal as="h2" delay={60} className="mb-12 max-w-[900px] font-display text-[40px] font-bold leading-none tracking-[-0.035em] text-ow-fg1 lg:text-[56px]">
        Frequently asked questions
      </Reveal>

      <div>
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={i} delay={120 + i * 60} className="border-t border-ow-line1">
              <button
                type="button"
                onClick={() => {
                  if (!isOpen) trackFaqOpen(f.q);
                  setOpen(isOpen ? -1 : i);
                }}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-trigger-${i}`}
                className="group flex w-full items-center justify-between gap-6 py-7 text-left outline-none transition-colors duration-200 ease-smooth focus-visible:[box-shadow:inset_0_0_0_1px_rgba(249,158,26,0.45)] hover:[&_.faq-q]:text-ow-orange"
              >
                <span className="faq-q font-display text-[20px] font-semibold tracking-[-0.02em] text-ow-fg1 transition-colors duration-200 ease-smooth lg:text-[22px]">
                  {f.q}
                </span>
                <span
                  className={cn(
                    "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-ow-1 border transition-[border-color,color] duration-200 ease-smooth",
                    isOpen
                      ? "border-ow-orange text-ow-orange"
                      : "border-ow-line3 text-ow-fg2",
                  )}
                >
                  {isOpen ? (
                    <Minus className="h-4 w-4" strokeWidth={2} />
                  ) : (
                    <Plus className="h-4 w-4" strokeWidth={2} />
                  )}
                </span>
              </button>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-trigger-${i}`}
                className="faq-grid"
                data-open={isOpen}
              >
                <div className="faq-grid-inner">
                  <div className="max-w-[720px] pb-8 text-base leading-[1.6] text-ow-fg2">
                    {f.a}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
        <div className="border-t border-ow-line1" />
      </div>
    </section>
  );
}
