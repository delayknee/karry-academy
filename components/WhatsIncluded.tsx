import { Radio, Users, Library, Check } from "lucide-react";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

const pillars = [
  {
    Icon: Radio,
    title: "Live Group Events",
    lead: "12+ monthly live events to help you learn, improve, and rank up faster.",
    items: [
      "Weekly classes on OW concepts",
      "Weekly Rapid VOD review",
      "Weekly VOD review raffle",
      "OWCS Pro Match analysis",
    ],
  },
  {
    Icon: Users,
    title: "Like-Minded Community",
    lead: "Learn Overwatch alongside mature, committed players in a positive, improvement-first community.",
    items: [
      "Find teammates of any rank who take the game as seriously as you do",
      "Discuss Overwatch with a passionate group of players",
      "Improve alongside a community so you can have fun while you rank up",
    ],
  },
  {
    Icon: Library,
    title: "Exclusive Resources",
    lead: "Access a library of content not posted anywhere else.",
    items: [
      "Archive of all previously held live events and lessons",
      "Library of coaching sessions organized by rank",
      "Forum channel to ask Kajor your OW questions for personalized feedback",
    ],
  },
];

export function WhatsIncluded() {
  return (
    <section
      id="included"
      className="mx-auto max-w-[1280px] border-t border-ow-line1 px-6 py-24 lg:px-12 lg:py-[120px]"
    >
      <Reveal>
        <SectionMarker n={3} title="What's included in the Academy" />
      </Reveal>

      <Reveal as="h2" delay={60} className="max-w-[900px] font-display text-[40px] font-bold leading-none tracking-[-0.035em] text-ow-fg1 lg:text-[56px]">
        Everything you need to <span className="text-ow-orange">rank up</span>.
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {pillars.map(({ Icon, title, lead, items }, i) => (
          <Reveal
            key={title}
            delay={120 + i * 80}
            y={18}
            className="group flex flex-col rounded-ow-1 border border-ow-line2 bg-ow-bg2 p-8 shadow-[0_1px_2px_rgba(11,18,32,0.04)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-ow-orange hover:shadow-[0_22px_48px_-22px_rgba(249,158,26,0.45)]"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-ow-1 border border-ow-line3 text-ow-orange transition-[transform,border-color] duration-300 ease-out group-hover:-translate-y-0.5 group-hover:border-ow-orange/60">
              <Icon className="h-6 w-6 transition-transform duration-300 ease-out group-hover:scale-110" strokeWidth={1.75} />
            </div>
            <h3 className="font-display text-2xl font-semibold tracking-[-0.025em] text-ow-fg1">
              {title}
            </h3>
            <p className="mt-3.5 mb-6 text-[15px] leading-relaxed text-ow-fg2">
              {lead}
            </p>
            <ul className="flex flex-col gap-2.5">
              {items.map((it) => (
                <li
                  key={it}
                  className="grid grid-cols-[16px_1fr] gap-3 border-t border-dashed border-ow-line1 pt-2.5 text-sm leading-[1.5] text-ow-fg2"
                >
                  <Check
                    className="mt-0.5 h-3.5 w-3.5 text-ow-orange"
                    strokeWidth={2.25}
                  />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
