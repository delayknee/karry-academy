"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackFaqOpen } from "@/lib/analytics";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "What is the difference between The Karry Academy and other coaching services?",
    a: "The biggest difference between TKA and other Overwatch coaching services is cost. The Academy is built to be an affordable and effective alternative to coaching, focused on group learning, community building and focusing on the 20% of concepts that provide you with 80% of the results. The Karry Academy aims to be a valuable resource for OW players to improve without breaking the bank.",
  },
  {
    q: "Why join the Academy instead of just watching free YouTube guides?",
    a: "YouTube guides are built for mass appeal. They give generic advice to thousands of people at once. The problem isn't a lack of information, it's a lack of application. Creators do not (and cannot) tell you which bad habit is keeping you hardstuck, and it won't give you an active group of non-toxic players to climb with. The Academy provides a structured system and a curated environment where you stop passively consuming content and start actively correcting your gameplay week to week.",
  },
  {
    q: "What if I can't make the live session times?",
    a: "No problem. More than half of our members work full-time or are in school and rarely catch the live sessions. Every single lesson, event, and replay clinic is recorded and catalogued in our private Lesson Library archive within 48 hours. You can learn entirely at your own pace and submit questions to the community forum at any time, as well as follow along with improvement blueprints posted each week.",
  },
  {
    q: "How realistic is it that I'll actually get my gameplay reviewed by Kajor?",
    a: "We intentionally structured our events so everyone gets value. Our weekly Rapid Replay Reviews are built for speed, allowing Kajor to break down multiple student replays in a single session. Additionally, you can enter a raffle to win a VOD review each week. We can't guarantee you will get your gameplay reviewed by Kajor, but we do our best to prioritize those who have not been reviewed. You can also ask strategic and personalized questions in our forum channel at any time to get feedback directly from Kajor outside of live event hours.",
  },
  {
    q: "Are there rank restrictions or requirements to join?",
    a: "Absolutely not. Whether you are stuck in Silver trying to build fundamentals or a Masters player looking to polish your micro decisions, our lessons, blueprints and events focus on universal concepts that apply to every rank.",
  },
  {
    q: "Why is the Academy 16+?",
    a: "The Academy is 16+ because we aim to provide a high quality, mature experience for every member. By setting an age requirement, we can better protect the community's experience and reduce toxicity and immaturity across the board.",
  },
  {
    q: "What happens after I purchase my membership?",
    a: "After you check out, you'll be asked to link your Discord to Whop. Whop will then add you to the private Karry Academy Discord server and give you a Student role, which gives you access to all of the private Academy channels.",
  },
  {
    q: "How does the subscription work? Can I cancel easily?",
    a: "There are zero contracts, hidden loops or commitments. You pay month to month and you can cancel with a few clicks in your Whop dashboard. Under memberships, you have the option to manage → cancel. Once cancelled, you'll continue to have access until the end of your billing period. We also proudly back the Academy with a 14 day, no questions asked refund policy. If you join, look around, and decide it's not right for you, just message support inside the server and we'll process your refund immediately.",
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
        <SectionMarker n={7} title="Frequently Asked Questions" />
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
