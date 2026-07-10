"use client";

import { useState } from "react";
import { Compass, Crosshair, ShieldCheck, Check, ArrowRight, ChevronRight } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

const pillars = [
  {
    Icon: Compass,
    number: "01",
    short: "Learn",
    title: "The Execution Blueprints",
    focus: "Turn pro-level theory into solo-queue decisions",
    body: "Stop forcing professional metas into uncoordinated ranked lobbies. The Academy isolates fundamentals like pathing, space creation, and cooldown management, then converts them into rules you can execute without relying on perfect teammates.",
    outcome: "You enter every match with fewer things to remember and a much clearer idea of what good play looks like.",
    items: [
      { lead: "Live Masterclasses", text: "Weekly concept breakdowns with practical ranked examples." },
      { lead: "Academy Archive", text: "Every past class, searchable and available on demand." },
      { lead: "Ranked Cheat Sheets", text: "Simple focuses to take directly into your next queue." },
    ],
  },
  {
    Icon: Crosshair,
    number: "02",
    short: "Review",
    title: "The Feedback Loop",
    focus: "Find the blindspot that is actually holding you back",
    body: "You cannot fix a mistake you cannot see. Weekly review events cut through the noise and identify the highest-impact habit in your gameplay, leaving you with one clear objective instead of an overwhelming list of corrections.",
    outcome: "Every review ends with a specific practice target, so feedback turns into visible progress instead of forgotten notes.",
    items: [
      { lead: "Rapid Replay Reviews", text: "One high-impact insight extracted from each submitted VOD." },
      { lead: "VOD Review Raffle", text: "Weekly chances to receive a complete gameplay deep dive." },
      { lead: "Direct Coach Q&A", text: "Drop clips and questions for feedback outside live events." },
    ],
  },
  {
    Icon: ShieldCheck,
    number: "03",
    short: "Practice",
    title: "The Environment",
    focus: "Practice seriously without solo-queue toxicity",
    body: "The Academy gives improvement-minded players a mature place to test new ideas. Find reliable teammates, join moderated practice games, and talk through the game with people who care about learning rather than blaming.",
    outcome: "You get a safer place to experiment, fail, ask questions, and build the habits that ranked rarely lets you practice deliberately.",
    items: [
      { lead: "Private Academy PUGs", text: "Moderated games for focused, zero-stress practice." },
      { lead: "Mature LFG", text: "Find non-toxic teammates across roles and ranks." },
      { lead: "Casual Office Hours", text: "Discuss the meta and ask Kajor questions live." },
    ],
  },
];

export function WhatsIncluded() {
  const [active, setActive] = useState(0);
  const pillar = pillars[active];
  const ActiveIcon = pillar.Icon;

  return (
    <section id="included" className="relative overflow-hidden border-t border-ow-line1">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid-soft" />
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-[120px]">
        <Reveal>
          <SectionMarker n={3} title="How we help" />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <Reveal as="h2" delay={60} className="max-w-[760px] font-display text-[40px] font-bold leading-none tracking-[-0.035em] text-ow-fg1 lg:text-[56px]">
            Improvement is a <span className="text-ow-orange">repeatable system</span>, not another video library.
          </Reveal>
          <Reveal as="p" delay={110} className="max-w-[520px] text-[16px] leading-[1.65] text-ow-fg2 lg:pb-1">
            Karry Academy connects learning, feedback, and deliberate practice so each part reinforces the next.
          </Reveal>
        </div>

        <Reveal delay={140} y={12} className="mt-12">
          <div className="grid gap-2 rounded-ow-1 border border-ow-line2 bg-ow-bg1 p-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
            {pillars.map((item, i) => (
              <div key={item.title} className="contents">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className={`flex items-center gap-4 rounded-ow-1 border px-4 py-3.5 text-left outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ow-orange ${active === i ? "border-ow-orange/45 bg-ow-orange/[0.09]" : "border-transparent hover:border-ow-line2 hover:bg-ow-bg2"}`}
                >
                  <span className={`font-display text-xl font-bold ${active === i ? "text-ow-orange" : "text-ow-fg4"}`}>{item.number}</span>
                  <span>
                    <span className="block text-sm font-semibold text-ow-fg1">{item.short}</span>
                    <span className="mt-0.5 block font-hud text-[8px] text-ow-fg4">{item.title}</span>
                  </span>
                </button>
                {i < 2 && <ArrowRight className="hidden h-4 w-4 text-ow-orange/60 sm:block" aria-hidden />}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={170} y={16} className="mt-5 overflow-hidden rounded-ow-2 border border-ow-line2 bg-ow-bg2 shadow-[0_22px_70px_-48px_rgba(249,158,26,0.5)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden border-b border-ow-line1 bg-ow-bg1 p-7 sm:p-10 lg:border-b-0 lg:border-r">
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-scanlines opacity-40" />
              <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-ow-orange/10 blur-[90px]" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-ow-1 border border-ow-orange/40 bg-ow-orange/[0.09] text-ow-orange">
                    <ActiveIcon className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <span className="font-hud text-[9px] text-ow-fg4">Pillar // {pillar.number}</span>
                </div>
                <h3 className="mt-8 font-display text-[30px] font-semibold leading-tight tracking-[-0.035em] text-ow-fg1 sm:text-[36px]">{pillar.title}</h3>
                <p className="mt-3 font-hud text-[10px] leading-[1.65] text-ow-orange">{pillar.focus}</p>
                <p className="mt-6 text-[15px] leading-[1.7] text-ow-fg2">{pillar.body}</p>
              </div>
            </div>

            <div className="flex flex-col p-7 sm:p-10">
              <div className="font-hud text-[9px] text-ow-fg4">What members get</div>
              <ul className="mt-4">
                {pillar.items.map(({ lead, text }) => (
                  <li key={lead} className="grid grid-cols-[24px_1fr] gap-3 border-b border-ow-line1 py-4 first:pt-2 last:border-b-0">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-ow-orange/35 bg-ow-orange/[0.08]">
                      <Check className="h-3 w-3 text-ow-orange" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm leading-[1.6] text-ow-fg2"><strong className="font-semibold text-ow-fg1">{lead}</strong> — {text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto rounded-ow-1 border border-dashed border-ow-orange/30 bg-ow-orange/[0.05] p-5">
                <div className="font-hud text-[8px] text-ow-orange">The outcome</div>
                <p className="mt-2 text-sm leading-[1.6] text-ow-fg2">{pillar.outcome}</p>
              </div>

              <button
                type="button"
                onClick={() => setActive((active + 1) % pillars.length)}
                className="mt-5 inline-flex items-center gap-2 self-start font-hud text-[9px] text-ow-fg3 outline-none transition-colors hover:text-ow-orange focus-visible:text-ow-orange"
              >
                Explore next pillar <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-12 flex justify-center">
          <CTAButton size="lg" location="framework">Claim Your Spot ($14.99/mo)</CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
