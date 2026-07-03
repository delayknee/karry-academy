import { Brain, Swords, Target, X } from "lucide-react";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

const personas = [
  {
    Icon: Brain,
    title: "The Overthinker",
    body: "You watch hours of pro breakdowns and conceptually understand the game at a high level, but your ranked games feel chaotic and you struggle to translate that theory into actually ranking up. You need structured frameworks, not more information.",
  },
  {
    Icon: Swords,
    title: "The Competitor",
    body: "You are tired of the solo queue lottery, muted voice chats, and toxic teammates who throw your games. You want a mature, positive environment where you can find reliable, like-minded teammates to play with.",
  },
  {
    Icon: Target,
    title: "The Grinder",
    body: "You don't just want to play Overwatch passively — you want to truly master your role, understand tempo changes, perfect your positioning, and clean up your decision making alongside a top coach with thousands of hours spent breaking down the game at a deeper level.",
  },
];

const notFor = [
  "Players looking for quick fixes, or magical secrets that don't require putting in the work",
  "Toxic individuals who blame their teammates instead of focusing on their own mistakes",
  "Casual players who aren't interested in actively applying new concepts to improve",
];

export function ForPlayers() {
  return (
    <section className="mx-auto max-w-[1280px] border-t border-ow-line1 px-6 py-24 lg:px-12 lg:py-[120px]">
      <Reveal>
        <SectionMarker n={4} title="Who it's for" />
      </Reveal>

      <Reveal as="h2" delay={60} className="max-w-[900px] font-display text-[40px] font-bold leading-none tracking-[-0.035em] text-ow-fg1 lg:text-[56px]">
        Is Karry Academy <span className="text-ow-orange">right for you</span>?
      </Reveal>

      <Reveal as="p" delay={120} className="mt-6 max-w-[720px] text-[17px] leading-[1.6] text-ow-fg2">
        The Academy is a specialized coaching community designed specifically
        for three types of players:
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {personas.map(({ Icon, title, body }, i) => (
          <Reveal
            key={title}
            delay={120 + i * 80}
            y={18}
            className="group rounded-ow-1 border border-ow-line2 bg-ow-bg2 p-8 shadow-[0_1px_2px_rgba(11,18,32,0.04)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-ow-orange hover:shadow-[0_22px_48px_-22px_rgba(249,158,26,0.45)]"
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-ow-1 border border-ow-orange/30 bg-ow-orange/[0.08] text-ow-orange transition-[transform,border-color] duration-300 ease-out group-hover:-translate-y-0.5 group-hover:border-ow-orange/60">
                <Icon className="h-6 w-6 transition-transform duration-300 ease-out group-hover:scale-110" strokeWidth={1.75} />
              </div>
              <span className="font-hud text-[10px] tracking-[0.18em] text-ow-fg4">
                // {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-display text-2xl font-semibold tracking-[-0.025em] text-ow-fg1">
              {title}
            </h3>
            <p className="mt-3.5 text-[15px] leading-relaxed text-ow-fg2">
              {body}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} y={18} className="relative mt-10 overflow-hidden rounded-ow-1 border border-dashed border-ow-line2 bg-ow-bg1 p-8">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-scanlines" />
        <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-ow-fg1">
          Who this is <span className="text-ow-orange">NOT</span> for:
        </h3>
        <ul className="mt-5 flex flex-col gap-3">
          {notFor.map((item) => (
            <li
              key={item}
              className="grid grid-cols-[16px_1fr] gap-3 text-[15px] leading-[1.5] text-ow-fg2"
            >
              <X className="mt-0.5 h-4 w-4 text-ow-fg4" strokeWidth={2.25} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
