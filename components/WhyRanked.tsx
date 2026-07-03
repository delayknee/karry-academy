import { Dices, Layers, BookOpen } from "lucide-react";
import { HudCorners } from "./HudCorners";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

const problems = [
  {
    Icon: Dices,
    title: "The Solo Queue Lottery",
    body: "You watch pro teams execute flawless strategy, but trying to copy them with zero-comm teammates in ranked just leads to frustration.",
  },
  {
    Icon: Layers,
    title: "Information Overload",
    body: "There are thousands of generic guides online telling you what to do, but none of them show you how to apply it to your ranked games.",
  },
  {
    Icon: BookOpen,
    title: "The Theory Trap",
    body: "Knowing how a top-tier team plays is completely different from knowing how to carry your weight in a Diamond lobby.",
  },
];

export function WhyRanked() {
  return (
    <section className="mx-auto max-w-[1280px] border-t border-ow-line1 px-6 py-24 lg:px-12 lg:py-[120px]">
      <Reveal>
        <SectionMarker n={2} title="The problem" />
      </Reveal>

      <Reveal as="h2" delay={60} className="max-w-[900px] font-display text-[40px] font-bold leading-none tracking-[-0.035em] text-ow-fg1 lg:text-[56px]">
        Why ranked feels <span className="text-ow-orange">impossible</span>.
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {problems.map(({ Icon, title, body }, i) => (
          <Reveal
            key={title}
            delay={120 + i * 80}
            y={18}
            className="group relative rounded-ow-1 border border-ow-line2 bg-ow-bg2 p-8 shadow-[0_1px_2px_rgba(11,18,32,0.04)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-ow-orange hover:shadow-[0_22px_48px_-22px_rgba(249,158,26,0.45)]"
          >
            <HudCorners />
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
    </section>
  );
}
