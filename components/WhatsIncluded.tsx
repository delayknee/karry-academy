"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Check, RefreshCw } from "lucide-react";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

const pillars = [
  {
    number: "01",
    short: "Learn",
    hero: "Winston",
    heroCue: "Understand the system",
    image: "/overwatch/pillars/winston.jpg",
    avatar: "/overwatch/personas/winston.png",
    title: "The Execution Blueprints",
    focus: "Turn pro-level theory into solo-queue decisions",
    body: "We turn fundamentals like space, tempo, and cooldowns into rules you can execute without perfect teammates.",
    outcome: "You enter each match with fewer things to remember and a clearer plan.",
    items: [
      { lead: "Live Masterclasses", text: "Concepts explained through ranked examples." },
      { lead: "Academy Archive", text: "Every class available on demand." },
      { lead: "Ranked Cheat Sheets", text: "One focus for your next queue." },
    ],
  },
  {
    number: "02",
    short: "Review",
    hero: "Sojourn",
    heroCue: "Read the fight",
    image: "/overwatch/pillars/sojourn.jpg",
    avatar: "/overwatch/personas/sojourn.png",
    title: "The Feedback Loop",
    focus: "Find the blindspot that is actually holding you back",
    body: "Weekly reviews identify the highest-impact habit in your gameplay and turn it into one clear objective.",
    outcome: "Feedback becomes a specific practice target, not a page of forgotten notes.",
    items: [
      { lead: "Replay Reviews", text: "One high-impact insight from your VOD." },
      { lead: "VOD Raffle", text: "A chance at a complete deep dive." },
      { lead: "Coach Q&A", text: "Feedback between live events." },
    ],
  },
  {
    number: "03",
    short: "Practice",
    hero: "Genji",
    heroCue: "Master the reps",
    image: "/overwatch/pillars/genji.jpg",
    avatar: "/overwatch/personas/genji.png",
    title: "The Environment",
    focus: "Practice seriously without solo-queue toxicity",
    body: "Practice with mature players who care about learning, communication, and improvement rather than blame.",
    outcome: "You get room to experiment and build habits deliberately.",
    items: [
      { lead: "Academy PUGs", text: "Moderated, focused practice games." },
      { lead: "Mature LFG", text: "Find improvement-first teammates." },
      { lead: "Office Hours", text: "Discuss the game directly with Kajor." },
    ],
  },
];

export function WhatsIncluded() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const pillar = pillars[active];

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % pillars.length), 5600);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section id="included" className="solution-zone section-world relative overflow-hidden bg-ow-bg1">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-soft opacity-35" />
      <div aria-hidden className="solution-orb solution-orb--a pointer-events-none absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-ow-cyan/[0.12] blur-[110px]" />
      <div aria-hidden className="solution-orb solution-orb--b pointer-events-none absolute -right-32 bottom-0 h-[520px] w-[520px] rounded-full bg-ow-orange/[0.16] blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute right-[-4%] top-10 font-display text-[clamp(100px,18vw,260px)] font-black leading-none text-ow-fg1/[0.025]">CLIMB</div>
      <div className="site-shell section-block relative">
        <Reveal>
          <SectionMarker n={3} title="The solution // How we help" />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <Reveal as="h2" delay={60} className="max-w-[760px] font-display text-[40px] font-bold leading-none tracking-[-0.035em] text-ow-fg1 lg:text-[56px]">
            Improvement is a <span className="text-ow-orange">repeatable system</span>, not another video library.
          </Reveal>
          <Reveal as="p" delay={110} className="max-w-[520px] text-[16px] leading-[1.65] text-ow-fg2 lg:pb-1">
            Karry Academy connects learning, feedback, and deliberate practice so each part reinforces the next.
          </Reveal>
        </div>

        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
          <Reveal delay={140} y={12} className="mt-12">
            <div className="solution-tabs grid grid-cols-3 gap-2 sm:gap-3">
              {pillars.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  aria-label={`${item.number}. ${item.title}: ${item.heroCue}`}
                  className={`solution-tab group relative min-w-0 overflow-hidden rounded-[14px] border px-2 py-3 text-center outline-none transition-[background-color,border-color,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ow-orange md:px-4 md:py-3.5 md:text-left ${active === i ? "solution-tab--active border-ow-line2 bg-ow-bg2 shadow-[0_16px_34px_-26px_rgba(249,158,26,0.58)]" : "border-ow-line1 bg-ow-bg2/50 shadow-[0_12px_28px_-26px_rgba(11,18,32,0.42)] hover:border-ow-line2 hover:bg-ow-bg2/80"}`}
                >
                  <span className="flex flex-col items-center justify-center gap-2 md:flex-row md:justify-start md:gap-3">
                    <span className={`relative h-10 w-10 shrink-0 overflow-hidden rounded-[10px] border bg-ow-bg3 transition-[border-color,box-shadow] md:h-12 md:w-12 md:rounded-[11px] ${active === i ? "border-ow-orange/55 shadow-[0_0_0_3px_rgba(249,158,26,0.08)]" : "border-ow-line2"}`}>
                      <Image src={item.avatar} alt="" fill sizes="44px" className="object-cover" />
                    </span>
                    <span className="min-w-0">
                      <span className={`block font-hud text-[6px] md:text-[7px] ${active === i ? "text-ow-orange" : "text-ow-fg3"}`}>{item.number} // {item.short}</span>
                      <span className="hidden text-sm font-semibold text-ow-fg1 md:block">{item.title}</span>
                      <span className={`carousel-subtitle mt-1 hidden font-hud text-[6.5px] transition-colors duration-300 md:block ${active === i ? "carousel-subtitle--active" : ""}`}>{item.hero} // {item.heroCue}</span>
                    </span>
                    <span aria-hidden className={`absolute right-2 top-2 h-1.5 w-1.5 shrink-0 rounded-full transition-[background-color,box-shadow] md:static md:ml-auto md:h-2 md:w-2 ${active === i ? "bg-ow-orange shadow-[0_0_12px_rgba(249,158,26,0.55)]" : "bg-ow-line3"}`} />
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={170} y={16} className="mt-4 overflow-hidden rounded-[24px] border border-ow-line2 bg-ow-bg2 shadow-[0_36px_100px_-52px_rgba(37,99,235,0.58)]">
            <div key={active} className="pillar-panel solution-stage grid lg:grid-cols-[0.92fr_1.08fr]">
            <div className="solution-stage__visual relative min-h-[390px] overflow-hidden border-b border-white/10 lg:min-h-[560px] lg:border-b-0">
              <Image
                src={pillar.image}
                alt={`${pillar.hero} from Overwatch`}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="solution-stage__image object-cover object-top"
              />
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,20,0.12)_0%,rgba(5,10,20,0.08)_36%,rgba(5,10,20,0.93)_100%)]" />
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,20,0.12),transparent_55%,rgba(5,10,20,0.34))]" />
              <div aria-hidden className="game-grid absolute inset-0 opacity-20 mix-blend-overlay" />

              <div className="absolute inset-x-0 top-0 flex items-start justify-end p-5 sm:p-7">
                <div className="font-display text-[44px] font-bold leading-none text-white/25 sm:text-[58px]">{pillar.number}</div>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                <div className="mb-3 flex items-center gap-2 font-hud text-[8px] text-ow-orange">
                  <span className="h-px w-7 bg-ow-orange" />
                  {pillar.hero} // {pillar.heroCue}
                </div>
                <h3 className="max-w-[520px] font-display text-[34px] font-semibold leading-[0.98] tracking-[-0.035em] text-white sm:text-[44px]">{pillar.title}</h3>
                <p className="mt-4 max-w-[500px] font-hud text-[9px] leading-[1.7] text-white/72">{pillar.focus}</p>
              </div>
            </div>

            <div className="game-panel solution-stage__content relative flex flex-col p-7 sm:p-10 lg:p-11">
              <div aria-hidden className="game-grid pointer-events-none absolute inset-0 opacity-45" />
              <div className="game-faint relative font-hud text-[8px]">Academy loadout // equipped</div>

              <p className="game-muted relative mt-7 max-w-[600px] text-[16px] leading-[1.72]">{pillar.body}</p>

              <div className="game-border relative mt-8 border-t pt-3">
                {pillar.items.map(({ lead, text }, i) => (
                  <div key={lead} className="game-border grid grid-cols-[42px_1fr_auto] items-center gap-4 border-b py-[18px]">
                    <span className="font-display text-xl font-bold text-ow-orange/65">0{i + 1}</span>
                    <div>
                      <div className="text-sm font-semibold">{lead}</div>
                      <p className="game-muted mt-1 text-xs leading-[1.6]">{text}</p>
                    </div>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-ow-orange/25 bg-ow-orange/[0.07] text-ow-orange">
                      <Check className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                  </div>
                ))}
              </div>

              <div className="relative mt-7">
                <div className="font-hud text-[8px] text-ow-orange">What this unlocks</div>
                <p className="mt-2 text-[15px] font-medium leading-[1.55]">{pillar.outcome}</p>
              </div>

              <div className="game-faint relative mt-auto flex items-center gap-2 pt-7 font-hud text-[7px]">
                <RefreshCw className="h-3.5 w-3.5 text-ow-cyan" />
                Learn <span className="text-ow-orange">→</span> Review <span className="text-ow-orange">→</span> Practice <span className="text-ow-orange">→</span> Repeat
              </div>
            </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
