import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

const items = [
  { num: "01", text: "Want to learn from a top coach in a private group setting" },
  { num: "02", text: "Are tired of solo queue and want to find reliable, mature teammates" },
  { num: "03", text: "Want somewhere besides grinding ranked games to learn and improve" },
];

export function ForPlayers() {
  return (
    <section className="mx-auto max-w-[1280px] border-t border-ow-line1 px-6 py-24 lg:px-12 lg:py-[120px]">
      <Reveal>
        <SectionMarker n={2} title="Made for players who" />
      </Reveal>

      <Reveal as="h2" delay={60} className="max-w-[900px] font-display text-[40px] font-bold leading-none tracking-[-0.035em] text-ow-fg1 lg:text-[56px]">
        The Academy is made for players who:
      </Reveal>

      <div className="mt-14 flex flex-col">
        {items.map((item, i) => (
          <Reveal
            key={item.num}
            delay={120 + i * 70}
            className="grid grid-cols-[64px_1fr] items-center gap-8 border-t border-ow-line1 py-7 lg:grid-cols-[120px_1fr] lg:gap-12"
          >
            <div className="font-display text-sm tracking-[0.18em] text-ow-orange">
              // {item.num}
            </div>
            <div className="text-balance text-[20px] font-medium leading-[1.3] text-ow-fg1 lg:text-[26px]">
              {item.text}
            </div>
          </Reveal>
        ))}
        <div className="border-t border-ow-line1" />
      </div>
    </section>
  );
}
