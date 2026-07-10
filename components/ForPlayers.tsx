import { Brain, Swords, Target, X } from "lucide-react";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

const personas = [
  {
    Icon: Brain,
    code: "01 / ANALYZE",
    title: "The Overthinker",
    signal: "You know the theory. You need a system.",
    body: "You watch hours of breakdowns and understand the game at a high level, but ranked still feels chaotic. The Academy turns scattered knowledge into a small set of decisions you can execute under pressure.",
  },
  {
    Icon: Swords,
    code: "02 / COMPETE",
    title: "The Competitor",
    signal: "You want serious teammates, not more toxicity.",
    body: "You are tired of muted voice chats, throwers, and the solo queue lottery. You want a mature environment with improvement-first players who are trying to win for the right reasons.",
  },
  {
    Icon: Target,
    code: "03 / MASTER",
    title: "The Grinder",
    signal: "You play to improve, not simply to pass time.",
    body: "You want to master your role, understand tempo, clean up positioning, and make better decisions alongside a coach who can see the habits you cannot.",
  },
];

const notFor = [
  "Quick fixes without practice",
  "Blaming every loss on teammates",
  "Passive learning without application",
];

export function ForPlayers() {
  return (
    <section className="relative border-t border-ow-line1">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-[120px]">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionMarker n={4} title="Who it's for" />
            </Reveal>
            <Reveal as="h2" delay={60} className="max-w-[520px] font-display text-[40px] font-bold leading-none tracking-[-0.035em] text-ow-fg1 lg:text-[56px]">
              Built for players who want to <span className="text-ow-orange">get better on purpose</span>.
            </Reveal>
            <Reveal as="p" delay={110} className="mt-6 max-w-[480px] text-[17px] leading-[1.65] text-ow-fg2">
              Different players arrive with different frustrations. What they share is the willingness to understand their mistakes and put better decisions into practice.
            </Reveal>

            <Reveal delay={150} className="mt-10 overflow-hidden rounded-ow-1 border border-dashed border-ow-line2 bg-ow-bg1">
              <div className="border-b border-ow-line1 px-5 py-3 font-hud text-[9px] text-ow-fg4">Admission filter // not a fit</div>
              <ul className="space-y-0 px-5 py-2">
                {notFor.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-ow-line1 py-3 text-sm text-ow-fg3 last:border-b-0">
                    <X className="h-4 w-4 flex-shrink-0 text-red-400/80" strokeWidth={2.25} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="border-y border-ow-line2">
            {personas.map(({ Icon, code, title, signal, body }, i) => (
              <Reveal
                key={title}
                delay={100 + i * 80}
                y={16}
                className="group relative grid gap-6 overflow-hidden border-b border-ow-line1 py-9 last:border-b-0 sm:grid-cols-[76px_1fr] sm:gap-7"
              >
                <div aria-hidden className="absolute inset-y-0 left-0 w-[3px] origin-bottom scale-y-0 bg-ow-orange transition-transform duration-300 ease-smooth group-hover:scale-y-100" />
                <div className="flex h-14 w-14 items-center justify-center rounded-ow-1 border border-ow-orange/30 bg-ow-orange/[0.07] text-ow-orange transition-all duration-300 ease-smooth group-hover:border-ow-orange/60 group-hover:bg-ow-orange/[0.12] sm:ml-3">
                  <Icon className="h-7 w-7" strokeWidth={1.6} />
                </div>
                <div>
                  <div className="font-hud text-[9px] text-ow-orange">{code}</div>
                  <h3 className="mt-2 font-display text-[28px] font-semibold tracking-[-0.035em] text-ow-fg1">{title}</h3>
                  <p className="mt-2 text-[15px] font-semibold text-ow-fg1">{signal}</p>
                  <p className="mt-3 max-w-[690px] text-[15px] leading-[1.65] text-ow-fg2">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
