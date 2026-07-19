import Image from "next/image";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

const personas = [
  {
    hero: "Winston",
    portrait: "/overwatch/personas/winston.png",
    code: "01 / ANALYZE",
    title: "The Overthinker",
    signal: "You know the theory. You need a system.",
    body: "You understand the theory, but ranked still feels chaotic. You need a smaller set of decisions you can execute under pressure.",
  },
  {
    hero: "Sojourn",
    portrait: "/overwatch/personas/sojourn.png",
    code: "02 / COMPETE",
    title: "The Competitor",
    signal: "You want serious teammates, not more toxicity.",
    body: "You want a mature environment with improvement-first players—not another toxic solo-queue experience.",
  },
  {
    hero: "Genji",
    portrait: "/overwatch/personas/genji.png",
    code: "03 / MASTER",
    title: "The Grinder",
    signal: "You play to improve, not simply to pass time.",
    body: "You want to master your role and work with a coach who can see the habits you cannot.",
  },
];

export function ForPlayers() {
  return (
    <section className="identity-zone section-world relative overflow-hidden bg-ow-bg0">
      <div aria-hidden className="identity-zone__rings pointer-events-none absolute -right-32 top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full" />
      <div className="site-shell section-block relative">
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
          </div>

          <div className="space-y-4">
            {personas.map(({ hero, portrait, code, title, signal, body }, i) => (
              <Reveal
                key={title}
                delay={100 + i * 80}
                y={16}
                className="persona-card group relative grid grid-cols-[68px_1fr] gap-4 overflow-hidden rounded-[18px] border border-ow-line2 bg-ow-bg2 p-5 shadow-[0_18px_45px_-36px_rgba(0,0,0,0.35)] sm:grid-cols-[88px_1fr] sm:gap-7 sm:p-7"
              >
                <div aria-hidden className="absolute left-0 top-7 h-12 w-[3px] rounded-r-full bg-ow-orange" />
                <div className="relative h-[76px] w-[68px] self-start overflow-hidden bg-[linear-gradient(145deg,rgba(249,158,26,0.2),rgba(59,230,240,0.08)_55%,rgba(6,13,24,0.9))] [clip-path:polygon(12%_0,100%_0,100%_88%,88%_100%,0_100%,0_12%)] sm:ml-1 sm:h-[98px] sm:w-[88px]">
                  <div aria-hidden className="absolute inset-0 bg-grid-soft opacity-35" />
                  <Image
                    src={portrait}
                    alt=""
                    fill
                    sizes="88px"
                    className="object-cover object-center transition-transform duration-500 ease-smooth group-hover:scale-[1.06]"
                  />
                  <div aria-hidden className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#070d18]/95 to-transparent" />
                  <span className="absolute inset-x-0 bottom-1.5 text-center font-hud text-[7px] tracking-[0.16em] text-white/85">
                    {hero}
                  </span>
                  <div aria-hidden className="absolute inset-0 border border-ow-orange/30 [clip-path:polygon(12%_0,100%_0,100%_88%,88%_100%,0_100%,0_12%)]" />
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
