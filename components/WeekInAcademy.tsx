import { MonitorPlay, Ticket, Dumbbell, Gamepad2, MessagesSquare } from "lucide-react";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

const events = [
  {
    day: "Tuesday",
    Icon: MonitorPlay,
    title: "Rapid Replay Review Clinic",
    body: "Fast-paced VOD clinic — one massive, high-impact insight per student replay.",
  },
  {
    day: "Thursday",
    Icon: Ticket,
    title: "VOD Review Raffle",
    body: "Win a comprehensive, full-length deep-dive gameplay analysis with Kajor.",
  },
  {
    day: "Friday",
    Icon: Dumbbell,
    title: "Live Skill Bootcamp",
    body: "Live group lesson isolating one competitive fundamental you can execute solo.",
  },
  {
    day: "Saturday",
    Icon: Gamepad2,
    title: "Community PUGs",
    body: "Moderated pick-up games for zero-stress practice with like-minded players.",
  },
];

const anytime = {
  day: "Anytime",
  Icon: MessagesSquare,
  title: "Direct Q&A Forum Support with Kajor",
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

      {/* Desktop: curriculum timeline — rail with day markers, one card per event */}
      <div className="relative mt-16 hidden lg:block">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-[10px] h-px bg-ow-line2"
        />
        <div className="grid grid-cols-4 gap-5">
          {events.map(({ day, Icon, title, body }, i) => (
            <Reveal
              key={day}
              delay={120 + i * 80}
              y={16}
              className="flex flex-col"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="relative flex h-[21px] w-[21px] flex-shrink-0 items-center justify-center rounded-full border border-ow-orange/50 bg-[var(--bg-0)]">
                  <span className="h-[7px] w-[7px] rounded-full bg-ow-orange" />
                </span>
                {/* Opaque chip bg so the timeline rail doesn't show through the skewed shape */}
                <span className="ow-chip inline-flex items-center rounded-ow-1 border border-ow-orange/40 bg-[color-mix(in_srgb,var(--ow-orange)_6%,var(--bg-0))] px-3 py-[5px] font-hud text-[11px] text-ow-orange">
                  <span>{day}</span>
                </span>
              </div>
              <div className="flex flex-1 flex-col rounded-ow-1 border border-ow-line2 bg-ow-bg2 p-6 shadow-[0_1px_2px_rgba(11,18,32,0.04)]">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-ow-1 border border-ow-orange/30 bg-ow-orange/[0.08] text-ow-orange">
                  <Icon className="h-[22px] w-[22px]" strokeWidth={1.75} />
                </div>
                <div className="text-[17px] font-semibold leading-snug tracking-[-0.015em] text-ow-fg1">
                  {title}
                </div>
                <p className="mt-2.5 text-sm leading-[1.55] text-ow-fg3">
                  {body}
                </p>
                <span className="mt-auto flex items-center gap-1.5 pt-5 font-hud text-[9px] text-ow-fg4">
                  <span className="h-1.5 w-1.5 animate-pulseSoft rounded-full bg-ow-orange/70" />
                  Recorded
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Anytime bar — full width under the timeline */}
      <Reveal delay={120} y={14} className="mt-5 hidden lg:block">
        <div className="flex items-center gap-4 rounded-ow-1 border border-ow-line2 bg-ow-bg2 px-6 py-5 shadow-[0_1px_2px_rgba(11,18,32,0.04)]">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-ow-1 border border-ow-orange/30 bg-ow-orange/[0.08] text-ow-orange">
            <anytime.Icon className="h-[22px] w-[22px]" strokeWidth={1.75} />
          </div>
          <div className="min-w-0">
            <span className="text-[15px] font-semibold tracking-[-0.01em] text-ow-fg1">
              {anytime.title}
            </span>
            <p className="mt-0.5 text-[13px] leading-[1.5] text-ow-fg3">
              {anytime.body}
            </p>
          </div>
          <span className="ml-auto flex flex-shrink-0 items-center gap-1.5 font-hud text-[10px] text-ow-orange">
            <span className="h-1.5 w-1.5 animate-pulseSoft rounded-full bg-ow-orange/70" />
            Anytime · 24/7
          </span>
        </div>
      </Reveal>

      {/* Mobile: vertical list */}
      <div className="mt-14 flex flex-col lg:hidden">
        {[...events, anytime].map(({ day, title, body }, i) => (
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
                {title}
              </div>
              <p className="mt-1 text-sm leading-[1.5] text-ow-fg3">{body}</p>
            </div>
          </Reveal>
        ))}
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
