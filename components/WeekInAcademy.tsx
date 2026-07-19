import { MonitorPlay, Ticket, Dumbbell, Gamepad2, MessagesSquare, Radio, Archive } from "lucide-react";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

const events = [
  {
    day: "Tuesday",
    code: "TUE",
    Icon: MonitorPlay,
    title: "Rapid Replay Review Clinic",
    body: "Fast VOD reviews designed to identify the one mistake creating the biggest drag on your games.",
    format: "Live + recording",
    focus: "Individual feedback",
  },
  {
    day: "Thursday",
    code: "THU",
    Icon: Ticket,
    title: "VOD Review Raffle",
    body: "A complete gameplay analysis where every important decision is examined in context.",
    format: "Weekly draw",
    focus: "Full VOD deep dive",
  },
  {
    day: "Friday",
    code: "FRI",
    Icon: Dumbbell,
    title: "Live Skill Bootcamp",
    body: "One competitive fundamental isolated and converted into a deliberate solo-queue practice focus.",
    format: "Live + recording",
    focus: "Concept training",
  },
  {
    day: "Saturday",
    code: "SAT",
    Icon: Gamepad2,
    title: "Community PUGs",
    body: "Moderated games for focused, zero-stress practice with other improvement-minded players.",
    format: "Live lobby",
    focus: "Team practice",
  },
];

export function WeekInAcademy() {
  return (
    <section className="schedule-zone section-world relative overflow-hidden bg-ow-bg1">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(249,158,26,0.13),transparent_30%),radial-gradient(circle_at_86%_78%,rgb(var(--ow-accent-rgb)/0.1),transparent_30%)]" />
      <div aria-hidden className="schedule-zone__dots pointer-events-none absolute inset-0 opacity-55" />
      <div className="site-shell section-block relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <Reveal><SectionMarker n={5} title="The weekly program" /></Reveal>
            <Reveal as="h2" delay={60} className="max-w-[800px] font-display text-[40px] font-bold leading-none tracking-[-0.035em] text-ow-fg1 lg:text-[56px]">
              A complete training week, <span className="text-ow-orange">not a content dump</span>.
            </Reveal>
          </div>
          <Reveal as="p" delay={100} className="max-w-[480px] text-[16px] leading-[1.65] text-ow-fg2 lg:pb-1">
            Every event has a job: learn the concept, expose the mistake, practice the correction, and get support when you need it.
          </Reveal>
        </div>

        <Reveal delay={120} y={16} className="mt-14 overflow-hidden rounded-[20px] border border-ow-line2 bg-ow-bg2/85 shadow-[0_28px_80px_-58px_rgba(11,18,32,0.5)] backdrop-blur">
          <div className="flex items-center justify-between gap-5 border-b border-ow-line1 bg-ow-bg1/65 px-5 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-2 w-2 rotate-45 bg-ow-orange shadow-[0_0_14px_rgba(249,158,26,0.65)]" />
              <span className="font-hud text-[10px] font-semibold text-ow-fg2">The live week</span>
            </div>
            <span className="hidden text-xs text-ow-fg3 sm:block">Learn → Review → Practice → Play</span>
          </div>

          <ol className="grid lg:grid-cols-4">
            {events.map(({ day, code, Icon, title, body, format, focus }) => (
              <li key={day} className="flex min-h-[292px] flex-col border-b border-ow-line1 p-5 last:border-b-0 sm:p-6 lg:min-h-[326px] lg:border-b-0 lg:border-r lg:last:border-r-0">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="font-hud text-[8px] font-semibold text-ow-orange">{code}</span>
                    <p className="mt-1 font-display text-[20px] font-semibold tracking-[-0.025em] text-ow-fg1">{day}</p>
                  </div>
                  <span aria-hidden className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-ow-orange/30 bg-ow-orange/[0.055] text-ow-orange">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                </div>

                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="mt-7 text-[17px] font-semibold leading-tight text-ow-fg1">{title}</h3>
                  <p className="mt-1.5 font-hud text-[8px] text-ow-orange">{focus}</p>
                  <p className="mt-3 text-sm leading-[1.6] text-ow-fg2 lg:flex-1">{body}</p>

                  <div className="mt-4 flex items-center gap-2 font-hud text-[9px] text-ow-fg3">
                    <Radio className="h-3.5 w-3.5 text-ow-orange" />
                    {format}
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="grid gap-4 border-t border-ow-cyan/20 bg-ow-cyan/[0.045] px-5 py-5 sm:grid-cols-[auto_1fr] sm:items-center sm:px-6 lg:grid-cols-[auto_0.85fr_1.25fr_auto] lg:gap-7">
            <div className="flex items-baseline gap-2 lg:block">
              <span className="font-display text-[22px] font-bold tracking-[-0.035em] text-ow-cyan">24/7</span>
              <span className="font-hud text-[8px] text-ow-fg4 lg:mt-1.5 lg:block">Always open</span>
            </div>

            <div className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-ow-cyan/30 bg-ow-bg2 text-ow-cyan">
                <MessagesSquare className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="text-[16px] font-semibold leading-tight text-ow-fg1">Direct Q&amp;A with Kajor</h3>
                <p className="mt-1 font-hud text-[8px] text-ow-cyan">Between live sessions</p>
              </div>
            </div>

            <p className="border-t border-ow-line1 pt-4 text-sm leading-[1.6] text-ow-fg2 sm:col-span-2 lg:col-span-1 lg:border-l lg:border-t-0 lg:py-1 lg:pl-7">Drop a clip or question whenever it happens. Direct support closes the gaps between scheduled events.</p>

            <div className="flex items-center gap-2 font-hud text-[9px] text-ow-fg3 sm:col-span-2 lg:col-span-1">
              <Archive className="h-3.5 w-3.5 text-ow-cyan" />
              Everything archived
            </div>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-7"><p className="max-w-[720px] text-xs leading-[1.6] text-ow-fg4">The program can shift with the competitive season and may include guest speakers, additional classes, and open Q&amp;A sessions.</p></Reveal>
      </div>
    </section>
  );
}
