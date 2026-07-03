import { Compass, Crosshair, ShieldCheck, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { CTAButton } from "./CTAButton";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

const pillars = [
  {
    Icon: Compass,
    title: "The Execution Blueprints",
    focus: "Translating pro-level theory into solo-queue frameworks",
    body: "Stop trying to force complex professional metas into uncoordinated ranked lobbies. Every month, we host live group lessons that isolate competitive fundamentals like pathing, space creation, and cooldown management. We give you clear, actionable rules you can execute entirely on your own, regardless of what your teammates are doing.",
    items: [
      {
        lead: "Live Interactive Masterclasses",
        text: "Weekly deep dives breaking down concepts — how they work, why they work, and how you can make them work for yourself.",
      },
      {
        lead: "The Academy Archive",
        text: "Instant 24/7 access to every past lecture and strategy breakdown, catalogued with tags and a search function so you can learn at your own pace.",
      },
      {
        lead: "Ranked Cheat Sheets",
        text: "Actionable, weekly checklists to directly apply to your ranked games.",
      },
    ],
    featured: false,
  },
  {
    Icon: Crosshair,
    title: "The Feedback Loop",
    focus: "Eliminating your blindspots via targeted assistance",
    body: "You cannot fix a mistake you don't know you are making. Our feedback loop is designed to give you personalized direction without overwhelming you with information. By submitting your gameplay to our weekly review events, we cut through the noise to find the single biggest bad habit holding you back, leaving you with a clear objective for your next match.",
    items: [
      {
        lead: "Rapid-Fire Replay Reviews",
        text: "Weekly fast-paced clinics designed to extract one massive, high-impact insight from multiple student VODs.",
      },
      {
        lead: "The VOD Review Raffle",
        text: "Weekly chances to win a comprehensive, full-length, deep-dive gameplay analysis with Kajor.",
      },
      {
        lead: "Direct Coach Q&A Forum",
        text: "A dedicated, text-based forum where you can drop clips or questions to get direct feedback outside of live event hours.",
      },
    ],
    featured: true,
  },
  {
    Icon: ShieldCheck,
    title: "The Environment",
    focus: "Escaping solo-queue toxicity and practicing the right way",
    body: "The public ranked ladder is plagued by toxic comms, throws, and players who don't care about winning. The Academy serves as an exclusive, mature environment where you can practice what you learn alongside like-minded players. Whether you're looking for a reliable duo to queue with or want to test your limits in private matches, this is where Overwatch is played the right way.",
    items: [
      {
        lead: "Private Academy PUGs",
        text: "Moderated, internal pick-up games built purely for fun, mechanical practice, and zero-stress learning with like-minded players.",
      },
      {
        lead: "Mature LFG Channel",
        text: "Skip the public matchmaker lottery. Instantly find non-toxic, improvement-first teammates across all roles and ranks.",
      },
      {
        lead: "Casual Office Hours",
        text: "Regular, unscripted hangouts in voice channels to ask Kajor direct questions about meta updates and Overwatch advice alongside the community.",
      },
    ],
    featured: false,
  },
];

export function WhatsIncluded() {
  return (
    <section
      id="included"
      className="relative mx-auto max-w-[1280px] border-t border-ow-line1 px-6 py-24 lg:px-12 lg:py-[120px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-soft"
      />
      <Reveal>
        <SectionMarker n={3} title="How we help" />
      </Reveal>

      <Reveal as="h2" delay={60} className="max-w-[900px] font-display text-[40px] font-bold leading-none tracking-[-0.035em] text-ow-fg1 lg:text-[56px]">
        The Karry Academy <span className="text-ow-orange">Framework</span>.
      </Reveal>

      <Reveal as="p" delay={120} className="mt-6 max-w-[760px] text-[17px] leading-[1.6] text-ow-fg2">
        Most coaching platforms just throw a passive library of videos or
        guides at you and wish you luck. Karry Academy is built on a
        structured,{" "}
        <strong className="font-semibold text-ow-fg1">
          three-pillar system
        </strong>{" "}
        designed to translate game theory into real improvement.
      </Reveal>

      <div className="mt-16 grid items-start gap-5 lg:grid-cols-3">
        {pillars.map(({ Icon, title, focus, body, items, featured }, i) => (
          <Reveal
            key={title}
            delay={120 + i * 80}
            y={18}
            className={cn(
              "group relative flex flex-col rounded-ow-1 border bg-ow-bg2 p-8 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1",
              featured
                ? "border-ow-orange/60 shadow-[0_0_0_1px_rgba(249,158,26,0.25),0_24px_64px_-24px_rgba(249,158,26,0.5)] hover:border-ow-orange hover:shadow-[0_0_0_1px_rgba(249,158,26,0.35),0_28px_72px_-24px_rgba(249,158,26,0.6)] lg:-mt-6"
                : "border-ow-line2 shadow-[0_1px_2px_rgba(11,18,32,0.04)] hover:border-ow-orange hover:shadow-[0_22px_48px_-22px_rgba(249,158,26,0.45)]",
            )}
          >
            {featured && (
              <>
                <span aria-hidden className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-ow-orange" />
                <span aria-hidden className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-ow-orange" />
                <span aria-hidden className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-ow-orange" />
                <span aria-hidden className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-ow-orange" />
              </>
            )}
            <div className="mb-6 flex items-center justify-between">
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-ow-1 border bg-ow-orange/[0.08] text-ow-orange transition-[transform,border-color] duration-300 ease-out group-hover:-translate-y-0.5 group-hover:border-ow-orange/60",
                  featured ? "border-ow-orange/50" : "border-ow-orange/30",
                )}
              >
                <Icon className="h-6 w-6 transition-transform duration-300 ease-out group-hover:scale-110" strokeWidth={1.75} />
              </div>
              <span className="font-hud text-[10px] tracking-[0.18em] text-ow-fg4">
                Pillar {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-display text-2xl font-semibold tracking-[-0.025em] text-ow-fg1">
              {title}
            </h3>
            <p className="mt-2 font-hud text-[11px] leading-[1.6] text-ow-orange">
              {focus}
            </p>
            <p className="mt-4 mb-6 text-[15px] leading-relaxed text-ow-fg2">
              {body}
            </p>
            <ul className="mt-auto flex flex-col gap-2.5">
              {items.map(({ lead, text }) => (
                <li
                  key={lead}
                  className="grid grid-cols-[16px_1fr] gap-3 border-t border-dashed border-ow-line1 pt-2.5 text-sm leading-[1.5] text-ow-fg2"
                >
                  <Check
                    className="mt-0.5 h-3.5 w-3.5 text-ow-orange"
                    strokeWidth={2.25}
                  />
                  <span>
                    <strong className="font-semibold text-ow-fg1">
                      {lead}:
                    </strong>{" "}
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal delay={80} className="mt-14 flex justify-center">
        <CTAButton size="lg" location="framework">
          Claim Your Spot ($14.99/mo)
        </CTAButton>
      </Reveal>
    </section>
  );
}
