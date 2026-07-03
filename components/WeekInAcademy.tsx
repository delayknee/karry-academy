import { MonitorPlay, Ticket, Dumbbell, Gamepad2, MessagesSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { HudCorners } from "./HudCorners";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

type Event = {
  Icon: typeof MonitorPlay;
  title: string;
  body: string;
};

const week: { day: string; short: string; event?: Event }[] = [
  { day: "Monday", short: "Mon" },
  {
    day: "Tuesday",
    short: "Tue",
    event: {
      Icon: MonitorPlay,
      title: "Rapid Replay Review Clinic",
      body: "Fast-paced VOD clinic — one massive, high-impact insight per student replay.",
    },
  },
  { day: "Wednesday", short: "Wed" },
  {
    day: "Thursday",
    short: "Thu",
    event: {
      Icon: Ticket,
      title: "VOD Review Raffle",
      body: "Win a comprehensive, full-length deep-dive gameplay analysis with Kajor.",
    },
  },
  {
    day: "Friday",
    short: "Fri",
    event: {
      Icon: Dumbbell,
      title: "Live Skill Bootcamp",
      body: "Live group lesson isolating one competitive fundamental you can execute solo.",
    },
  },
  {
    day: "Saturday",
    short: "Sat",
    event: {
      Icon: Gamepad2,
      title: "Community PUGs",
      body: "Moderated pick-up games for zero-stress practice with like-minded players.",
    },
  },
  { day: "Sunday", short: "Sun" },
];

const anytime: Event = {
  Icon: MessagesSquare,
  title: "Direct Q&A Forum Support",
  body: "Drop clips or questions and get direct feedback from Kajor outside live hours.",
};

export function WeekInAcademy() {
  return (
    <section className="mx-auto max-w-[1280px] border-t border-ow-line1 px-6 py-24 lg:px-12 lg:py-[120px]">
      <Reveal>
        <SectionMarker n={5} title="The schedule" />
      </Reveal>

      <Reveal as="h2" delay={60} className="max-w-[900px] font-display text-[40px] font-bold leading-none tracking-[-0.035em] text-ow-fg1 lg:text-[56px]">
        A week in <span className="text-ow-orange">the Academy</span>.
      </Reveal>

      {/* Desktop: 7-day calendar grid */}
      <div className="mt-14 hidden gap-2.5 lg:grid lg:grid-cols-7">
        {week.map(({ day, short, event }, i) => (
          <Reveal
            key={day}
            delay={120 + i * 60}
            y={14}
            className={cn(
              "flex min-h-[240px] flex-col rounded-ow-1 border",
              event
                ? "group relative border-ow-line2 bg-ow-bg2 shadow-[0_1px_2px_rgba(11,18,32,0.04)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-ow-orange hover:shadow-[0_22px_48px_-22px_rgba(249,158,26,0.45)]"
                : "border-dashed border-ow-line2 bg-ow-bg1/60",
            )}
          >
            {event && <HudCorners />}
            <div
              className={cn(
                "border-b px-3.5 py-2.5 font-hud text-[10px]",
                event
                  ? "border-ow-line1 text-ow-orange"
                  : "border-dashed border-ow-line1 text-ow-fg4",
              )}
            >
              {day}
            </div>
            {event ? (
              <div className="flex flex-1 flex-col p-3.5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-ow-1 border border-ow-orange/30 bg-ow-orange/[0.08] text-ow-orange">
                  <event.Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </div>
                <div className="text-[15px] font-semibold leading-snug tracking-[-0.01em] text-ow-fg1">
                  {event.title}
                </div>
                <p className="mt-2 text-[12px] leading-[1.5] text-ow-fg3">
                  {event.body}
                </p>
                <span className="mt-auto flex items-center gap-1.5 pt-3 font-hud text-[9px] text-ow-fg4">
                  <span className="h-1.5 w-1.5 animate-pulseSoft rounded-full bg-ow-orange/70" />
                  Recorded
                </span>
              </div>
            ) : (
              <div className="flex flex-1 items-center justify-center font-hud text-[10px] text-ow-fg4">
                Free play
              </div>
            )}
          </Reveal>
        ))}
      </div>

      {/* Anytime bar — full width under the grid */}
      <Reveal delay={120} y={14} className="mt-2.5 hidden lg:block">
        <div className="group relative flex items-center gap-5 rounded-ow-1 border border-ow-line2 bg-ow-bg2 px-5 py-4 shadow-[0_1px_2px_rgba(11,18,32,0.04)] transition-[border-color,box-shadow] duration-300 ease-out hover:border-ow-orange hover:shadow-[0_22px_48px_-22px_rgba(249,158,26,0.45)]">
          <HudCorners />
          <span className="ow-chip inline-flex items-center rounded-ow-1 border border-ow-orange/40 bg-ow-orange/[0.06] px-3 py-[5px] font-hud text-[11px] text-ow-orange">
            <span>Anytime</span>
          </span>
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-ow-1 border border-ow-orange/30 bg-ow-orange/[0.08] text-ow-orange">
            <anytime.Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
          </div>
          <div className="min-w-0">
            <span className="text-[15px] font-semibold tracking-[-0.01em] text-ow-fg1">
              {anytime.title}
            </span>
            <p className="text-[12px] leading-[1.5] text-ow-fg3">
              {anytime.body}
            </p>
          </div>
          <span className="ml-auto hidden items-center gap-1.5 font-hud text-[9px] text-ow-fg4 xl:flex">
            <span className="h-1.5 w-1.5 animate-pulseSoft rounded-full bg-ow-orange/70" />
            24/7
          </span>
        </div>
      </Reveal>

      {/* Mobile: vertical list */}
      <div className="mt-14 flex flex-col lg:hidden">
        {[...week.filter((d) => d.event), { day: "Anytime", short: "Any", event: anytime }].map(
          ({ day, event }, i) => (
            <Reveal
              key={day}
              delay={120 + i * 70}
              className="grid grid-cols-[96px_1fr] items-center gap-5 border-t border-ow-line1 py-6"
            >
              <div>
                <span className="ow-chip inline-flex items-center rounded-ow-1 border border-ow-orange/40 bg-ow-orange/[0.06] px-3 py-[5px] font-hud text-[11px] text-ow-orange">
                  <span>{day}</span>
                </span>
              </div>
              <div>
                <div className="text-[18px] font-semibold tracking-[-0.02em] text-ow-fg1">
                  {event!.title}
                </div>
                <p className="mt-1 text-sm leading-[1.5] text-ow-fg3">
                  {event!.body}
                </p>
              </div>
            </Reveal>
          ),
        )}
        <div className="border-t border-ow-line1" />
      </div>

      <Reveal delay={80} className="mt-8">
        <p className="max-w-[720px] text-sm leading-[1.6] text-ow-fg3">
          The schedule of events in the Academy is subject to change — some
          weeks feature extra events like guest speakers and open Q&amp;A
          sessions.
        </p>
      </Reveal>
    </section>
  );
}
