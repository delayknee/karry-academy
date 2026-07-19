"use client";

import { useEffect, useState } from "react";
import { Crosshair, Eye, TimerReset, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionMarker } from "./SectionMarker";

const frames = [
  {
    time: "-8s",
    phase: "The setup",
    title: "The fight is already forming.",
    note: "Your team has the corner and both supports have line of sight. This is the moment to hold pressure, not search for a new angle.",
    verdict: "Good position. No action needed yet.",
    accent: "#39D5E3",
    player: { x: 32, y: 58 },
    threat: { x: 72, y: 42 },
  },
  {
    time: "-3s",
    phase: "The window",
    title: "The enemy uses their escape.",
    note: "Their movement cooldown is gone. You now have five seconds where your angle is stronger—but only if you keep the space you already earned.",
    verdict: "This is the pressure window Kajor wants you to recognize.",
    accent: "#F99E1A",
    player: { x: 39, y: 53 },
    threat: { x: 67, y: 46 },
  },
  {
    time: "0s",
    phase: "The decision",
    title: "You rotate instead of committing.",
    note: "The new angle looks proactive, but the rotation removes your pressure and breaks support line of sight. The enemy gets the corner for free.",
    verdict: "The fight flips here—not when the first player dies.",
    accent: "#FF5964",
    player: { x: 25, y: 32 },
    threat: { x: 54, y: 55 },
  },
  {
    time: "+4s",
    phase: "The result",
    title: "The kill feed makes it look random.",
    note: "A teammate falls, the tank backs out, and the fight collapses. The visible loss happens now; the decisive mistake happened four seconds earlier.",
    verdict: "One correction: hold the winning angle two seconds longer.",
    accent: "#FF5964",
    player: { x: 18, y: 28 },
    threat: { x: 45, y: 58 },
  },
];

export function FightDecoder() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const frame = frames[active];

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % frames.length), 4800);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section className="problem-zone section-world relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-soft opacity-60" />
      <div aria-hidden className="pointer-events-none absolute -left-40 top-[18%] h-[520px] w-[520px] rounded-full bg-[#ff3b4f]/10 blur-[130px]" />
      <div aria-hidden className="pointer-events-none absolute -right-44 bottom-[-15%] h-[560px] w-[560px] rounded-full bg-ow-orange/10 blur-[140px]" />
      <div aria-hidden className="problem-zone__code pointer-events-none absolute right-[-2rem] top-16 font-display text-[clamp(90px,16vw,230px)] font-black leading-none">MISPLAY</div>
      <div className="site-shell section-block relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <Reveal><SectionMarker n={2} title="The problem // Why ranked feels impossible" /></Reveal>
            <Reveal as="h2" delay={60} className="mt-5 max-w-[820px] font-display text-[42px] font-bold leading-[0.96] tracking-[-0.035em] text-ow-fg1 lg:text-[60px]">
            The fight was lost <span className="problem-accent">before the kill feed</span> explained it.
            </Reveal>
          </div>
          <Reveal as="p" delay={100} className="max-w-[470px] text-[16px] leading-[1.65] text-ow-fg2 lg:pb-1">
            This is how the Academy turns four seconds of chaotic gameplay into one decision you can recognize and fix next game.
          </Reveal>
        </div>

        <Reveal delay={130} y={18} className="mt-12">
          <div className="relative">
            <div
              className="game-panel overflow-hidden shadow-[0_34px_110px_-55px_rgba(255,70,82,0.45)] [clip-path:polygon(1.2%_0,100%_0,100%_96.5%,98.8%_100%,0_100%,0_3.5%)]"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={() => setPaused(false)}
            >
              <div className="game-border flex flex-wrap items-center justify-between gap-3 border-b px-5 py-3.5 sm:px-7">
                <div className="game-muted flex items-center gap-3 font-hud text-[8px]"><Eye className="h-3.5 w-3.5 text-ow-orange" /> VOD // Midtown // Diamond 3</div>
                <div className="game-faint flex items-center gap-4 font-hud text-[8px]"><span>1.0× review</span><span className="text-ow-orange">Analysis live</span></div>
              </div>

              <div className="grid lg:grid-cols-[1.18fr_0.82fr]">
                <div className="game-border relative min-h-[430px] overflow-hidden border-b lg:border-b-0 lg:border-r">
                  <div aria-hidden className="game-grid absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_92%)]" />

                {/* One shared coordinate system keeps the arena and route aligned at every breakpoint. */}
                <svg aria-hidden className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <g fill="var(--game-fill)" stroke="var(--game-line)" strokeWidth="0.22" vectorEffect="non-scaling-stroke">
                    <path d="M5 17 H32 L36 23 L31 44 L5 41 Z" />
                    <path d="M59 9 H94 V28 L89 33 L59 30 Z" />
                    <path d="M63 73 L68 67 H92 V91 H66 Z" />
                    <path d="M7 69 L29 72 L25 88 L7 84 Z" />
                  </g>
                  <g fill="var(--game-fill-strong)" stroke="var(--game-line)" strokeWidth="0.24" vectorEffect="non-scaling-stroke">
                    <path d="M37 17 L49 14 L51 33 L39 36 Z" />
                    <path d="M43 59 L54 62 L52 77 L41 73 Z" />
                    <path d="M65 36 L75 34 L76 47 L66 49 Z" />
                  </g>
                  <path
                    d="M20 72 C31 67 38 59 47 57 S65 55 78 52"
                    fill="none"
                    stroke="rgba(249,158,26,0.42)"
                    strokeDasharray="1.15 1.2"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                <ObjectiveMarker x={78} y={52} />

                <div className="game-faint absolute right-[11%] top-[16%] font-hud text-[7px]">HIGH GROUND</div>
                <div className="game-faint absolute left-[49%] top-[43%] font-hud text-[7px]">CHOKE</div>
                <div aria-hidden className="decoder-scan absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-ow-cyan to-transparent shadow-[0_0_18px_rgba(59,230,240,0.55)]" />

                <Marker label="YOU" x={frame.player.x} y={frame.player.y} color={frame.accent} active />
                <Marker label="TARGET" x={frame.threat.x} y={frame.threat.y} color="#FF5964" />
                <Marker label="SUPPORT" x={20} y={72} color="#39D5E3" />
                <Marker label="TANK" x={47} y={68} color="#39D5E3" />

                  <div className="game-faint absolute bottom-5 left-5 flex items-center gap-2 font-hud text-[8px]"><Users className="h-3.5 w-3.5" /> Team pressure map // not to scale</div>
                </div>

                <div key={active} className="decoder-note flex min-h-[430px] flex-col p-7 sm:p-9">
                  <div className="flex items-center justify-between"><span className="game-faint font-hud text-[8px]">Kajor&apos;s read // frame {active + 1} of {frames.length}</span><TimerReset className="h-4 w-4" style={{ color: frame.accent }} /></div>
                  <div className="mt-8 font-display text-[34px] font-semibold leading-[1.02] tracking-[-0.025em] sm:text-[42px]">{frame.title}</div>
                  <p className="game-muted mt-6 text-[15px] leading-[1.7]">{frame.note}</p>
                  <div className="game-border mt-auto border-t pt-5">
                    <div className="font-hud text-[8px]" style={{ color: frame.accent }}>The correction</div>
                    <p className="mt-2 text-sm font-medium leading-relaxed">{frame.verdict}</p>
                  </div>
                </div>
              </div>

              <div className="game-border grid border-t sm:grid-cols-4">
                {frames.map((item, i) => (
                  <button
                    key={item.time}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={active === i}
                    className={`game-border relative border-b px-5 py-4 text-left outline-none transition-colors last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 ${active === i ? "game-fill-strong" : "hover:bg-[var(--game-fill)]"} focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ow-orange`}
                  >
                    {active === i && !paused && <span key={`${active}-decoder`} aria-hidden className="decoder-progress absolute bottom-0 left-0 h-[2px]" style={{ backgroundColor: item.accent }} />}
                    <span className="font-display text-lg font-bold" style={{ color: active === i ? item.accent : "var(--game-faint)" }}>{item.time}</span>
                    <span className="game-muted ml-3 font-hud text-[8px]">{item.phase}</span>
                  </button>
                ))}
              </div>
            </div>

            <svg
              aria-hidden
              className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon
                points="1.2,0 100,0 100,96.5 98.8,100 0,100 0,3.5"
                fill="none"
                stroke="var(--game-line)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Marker({ label, x, y, color, active = false }: { label: string; x: number; y: number; color: string; active?: boolean }) {
  return (
    <div className="absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-[left,top] duration-700 ease-smooth" style={{ left: `${x}%`, top: `${y}%` }}>
      <span className={`${active ? "h-5 w-5" : "h-3.5 w-3.5"} relative block rotate-45 border-2 bg-[var(--game-bg)]`} style={{ borderColor: color, boxShadow: `0 0 18px ${color}55` }}>
        {active && <span className="absolute inset-[-8px] animate-ping border opacity-35" style={{ borderColor: color }} />}
      </span>
      <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap font-hud text-[7px]" style={{ color }}>{label}</span>
    </div>
  );
}

function ObjectiveMarker({ x, y }: { x: number; y: number }) {
  return (
    <div className="absolute z-[5] -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
      <div className="relative flex h-[68px] w-[68px] rotate-45 items-center justify-center border border-ow-orange/40 bg-ow-orange/[0.055] sm:h-20 sm:w-20">
        <span className="flex h-9 w-9 items-center justify-center border border-ow-orange/65 bg-[var(--game-bg)]/80 sm:h-10 sm:w-10">
          <span className="-rotate-45 font-display text-xs font-bold text-ow-orange">A</span>
        </span>
      </div>
      <span className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap font-hud text-[7px] text-ow-orange">Objective A</span>
    </div>
  );
}
