import { BookOpen, Dices, Layers, ShieldAlert } from "lucide-react";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

const problems = [
  {
    Icon: Dices,
    label: "Matchmaking",
    title: "The Solo Queue Lottery",
    body: "You copy coordinated pro strategies, then load into ranked with five strangers and no shared plan.",
  },
  {
    Icon: Layers,
    label: "Advice overload",
    title: "Information Without Direction",
    body: "Another guide gives you ten more things to remember, but never tells you which mistake is costing your games.",
  },
  {
    Icon: BookOpen,
    label: "The knowledge gap",
    title: "The Theory Trap",
    body: "Understanding perfect Overwatch is not the same as making the right decision in a chaotic Diamond lobby.",
  },
];

const matches = [
  { map: "King's Row", role: "Tank", score: "2 — 3", delta: "-21%" },
  { map: "Suravasa", role: "Damage", score: "1 — 3", delta: "-19%" },
  { map: "Dorado", role: "Support", score: "0 — 2", delta: "-23%" },
  { map: "Colosseo", role: "Damage", score: "2 — 3", delta: "-18%" },
];

function LossStreak() {
  return (
    <div className="ranked-console relative overflow-hidden rounded-ow-2 border border-ow-line2 bg-ow-bg2 shadow-[0_24px_80px_-42px_rgba(249,158,26,0.45)]">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-soft opacity-60" />
      <div className="relative flex items-center justify-between border-b border-ow-line1 px-5 py-4 sm:px-6">
        <div>
          <div className="font-hud text-[10px] text-ow-fg4">Competitive update</div>
          <div className="mt-1 text-sm font-semibold text-ow-fg1">Recent match history</div>
        </div>
        <div className="flex items-center gap-2 rounded-ow-1 border border-red-500/25 bg-red-500/[0.07] px-3 py-2 font-hud text-[10px] text-red-400">
          <span className="h-1.5 w-1.5 animate-pulseSoft rounded-full bg-red-400" />
          4 loss streak
        </div>
      </div>

      <div className="relative p-3 sm:p-4">
        {matches.map((match, i) => (
          <div
            key={`${match.map}-${match.role}`}
            className="group grid grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-3 border-b border-ow-line1 px-2 py-3.5 last:border-b-0"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-ow-1 border border-red-500/20 bg-red-500/[0.06] font-display text-xs font-bold text-red-400">
              L{i + 1}
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-ow-fg1">{match.map}</div>
              <div className="mt-1 font-hud text-[9px] text-ow-fg4">{match.role} queue · {match.score}</div>
            </div>
            <div className="text-right">
              <div className="font-display text-sm font-semibold tabular-nums text-red-400">{match.delta}</div>
              <div className="mt-0.5 font-hud text-[7px] text-ow-fg4">Progress</div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex items-center gap-3 border-t border-ow-line1 bg-ow-bg1 px-5 py-4 sm:px-6">
        <ShieldAlert className="h-4 w-4 flex-shrink-0 text-ow-orange" />
        <p className="text-xs leading-relaxed text-ow-fg3">
          Demotion protection active. One more loss puts your current rank at risk.
        </p>
      </div>
    </div>
  );
}

export function WhyRanked() {
  return (
    <section className="relative overflow-hidden border-t border-ow-line1 bg-ow-bg1">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-scanlines opacity-35" />
      <div className="relative mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-[120px]">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionMarker n={2} title="The problem" />
            </Reveal>
            <Reveal as="h2" delay={60} className="max-w-[590px] font-display text-[40px] font-bold leading-none tracking-[-0.035em] text-ow-fg1 lg:text-[56px]">
              Why ranked feels <span className="text-ow-orange">impossible</span>.
            </Reveal>
            <Reveal as="p" delay={110} className="mt-6 max-w-[560px] text-[17px] leading-[1.65] text-ow-fg2">
              It is not a motivation problem. Most players are stuck inside a loop of random games, generic advice, and no useful feedback.
            </Reveal>
          </div>
          <Reveal delay={120} y={20}>
            <LossStreak />
          </Reveal>
        </div>

        <div className="mt-16 border-y border-ow-line2">
          {problems.map(({ Icon, label, title, body }, i) => (
            <Reveal
              key={title}
              delay={100 + i * 70}
              y={12}
              className="group grid gap-5 border-b border-ow-line1 py-7 last:border-b-0 md:grid-cols-[72px_0.8fr_1.2fr] md:items-center md:gap-8"
            >
              <div className="flex items-center gap-4 md:block">
                <div className="flex h-12 w-12 items-center justify-center rounded-ow-1 border border-ow-orange/30 bg-ow-orange/[0.08] text-ow-orange transition-transform duration-300 ease-smooth group-hover:-translate-y-0.5">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <span className="font-hud text-[9px] text-ow-fg4 md:hidden">0{i + 1} · {label}</span>
              </div>
              <div>
                <div className="hidden font-hud text-[9px] text-ow-fg4 md:block">0{i + 1} · {label}</div>
                <h3 className="mt-1.5 font-display text-xl font-semibold tracking-[-0.025em] text-ow-fg1 md:text-2xl">{title}</h3>
              </div>
              <p className="text-[15px] leading-relaxed text-ow-fg2">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
