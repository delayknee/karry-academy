import { MonitorPlay, Ticket, Dumbbell, Gamepad2, MessagesSquare } from "lucide-react";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

const schedule = [
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
  {
    day: "Anytime",
    Icon: MessagesSquare,
    title: "Direct Q&A Forum Support",
    body: "Drop clips or questions and get direct feedback from Kajor outside live hours.",
    alwaysOn: true,
  },
];

export function WeekInAcademy() {
  return (
    <section className="mx-auto max-w-[1280px] border-t border-ow-line1 px-6 py-24 lg:px-12 lg:py-[120px]">
      <Reveal>
        <SectionMarker n={5} title="The schedule" />
      </Reveal>

      <Reveal as="h2" delay={60} className="max-w-[900px] font-display text-[40px] font-bold leading-none tracking-[-0.035em] text-ow-fg1 lg:text-[56px]">
        A week in <span className="text-ow-orange">the Academy</span>.
      </Reveal>

      <div className="mt-14 flex flex-col">
        {schedule.map(({ day, Icon, title, body, alwaysOn }, i) => (
          <Reveal
            key={day}
            delay={120 + i * 70}
            className="group grid grid-cols-[88px_1fr] items-center gap-6 border-t border-ow-line1 py-6 sm:grid-cols-[140px_48px_1fr] sm:gap-8 lg:grid-cols-[180px_48px_1fr] lg:gap-12"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-ow-1 border border-ow-orange/40 bg-ow-orange/[0.06] px-2.5 py-[5px] font-hud text-[11px] text-ow-orange">
                {day}
              </span>
            </div>
            <div className="hidden h-12 w-12 items-center justify-center rounded-ow-1 border border-ow-orange/30 bg-ow-orange/[0.08] text-ow-orange transition-[border-color] duration-200 ease-smooth group-hover:border-ow-orange/60 sm:flex">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display text-[20px] font-semibold tracking-[-0.02em] text-ow-fg1 lg:text-[24px]">
                  {title}
                </span>
                <span className="hidden items-center gap-1.5 font-hud text-[9px] text-ow-fg4 sm:inline-flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-ow-orange/70" />
                  {alwaysOn ? "24/7" : "Recorded"}
                </span>
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
