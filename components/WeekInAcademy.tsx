"use client";

import { useState } from "react";
import { MonitorPlay, Ticket, Dumbbell, Gamepad2, MessagesSquare, Play, Radio } from "lucide-react";
import { SectionMarker } from "./SectionMarker";
import { Reveal } from "./Reveal";

const events = [
  {
    day: "Tuesday",
    shortDay: "TUE",
    Icon: MonitorPlay,
    title: "Rapid Replay Review Clinic",
    body: "A fast-paced VOD clinic built to find the one mistake creating the biggest drag on your games.",
    lesson: "Fixing lost fights before they happen",
    module: "Replay Clinic 042",
    duration: "48:16",
    accent: "Coach review",
  },
  {
    day: "Thursday",
    shortDay: "THU",
    Icon: Ticket,
    title: "VOD Review Raffle",
    body: "Win a comprehensive, full-length gameplay analysis with every important decision examined in context.",
    lesson: "Tempo, pressure, and the next fight",
    module: "Deep Dive 018",
    duration: "1:12:04",
    accent: "Full VOD",
  },
  {
    day: "Friday",
    shortDay: "FRI",
    Icon: Dumbbell,
    title: "Live Skill Bootcamp",
    body: "A group lesson isolating one competitive fundamental you can deliberately practice in solo queue.",
    lesson: "Creating space without overextending",
    module: "Bootcamp 027",
    duration: "56:40",
    accent: "Live class",
  },
  {
    day: "Saturday",
    shortDay: "SAT",
    Icon: Gamepad2,
    title: "Community PUGs",
    body: "Moderated pick-up games for focused, zero-stress practice with other improvement-minded players.",
    lesson: "Practice lobby: coordinated pressure",
    module: "Academy PUGs",
    duration: "Live",
    accent: "Community",
  },
  {
    day: "Anytime",
    shortDay: "24/7",
    Icon: MessagesSquare,
    title: "Direct Q&A with Kajor",
    body: "Drop a clip or question and get direct feedback outside scheduled live sessions.",
    lesson: "Ask, clip, review, improve",
    module: "Coach Q&A Forum",
    duration: "Open",
    accent: "Direct access",
  },
];

function LessonPreview({ event }: { event: (typeof events)[number] }) {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-ow-2 border border-ow-line2 bg-[#0B1220] text-white shadow-[0_28px_90px_-48px_rgba(249,158,26,0.65)]">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-20" />
      <div aria-hidden className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-ow-orange/20 blur-[90px]" />
      <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
        <div className="flex items-center gap-2 font-hud text-[9px] text-white/50">
          <Radio className="h-3.5 w-3.5 text-ow-orange" />
          Academy archive // {event.module}
        </div>
        <span className="rounded-ow-1 border border-white/10 bg-white/5 px-2.5 py-1 font-hud text-[8px] text-white/60">{event.duration}</span>
      </div>

      <div className="relative flex min-h-[300px] flex-col justify-between p-6 sm:p-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-ow-1 border border-ow-orange/35 bg-ow-orange/10 px-3 py-1.5 font-hud text-[9px] text-ow-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-ow-orange" />
            {event.accent}
          </div>
          <h3 className="mt-6 max-w-[560px] font-display text-[32px] font-bold leading-[1.02] tracking-[-0.04em] sm:text-[42px]">{event.lesson}</h3>
          <p className="mt-4 max-w-[500px] text-sm leading-relaxed text-white/60">Watch the concept, see it applied to a real ranked game, then take one clear focus into your next queue.</p>
        </div>

        <div className="mt-10">
          <div className="mb-3 flex items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ow-orange text-[#0B1220] shadow-[0_0_32px_rgba(249,158,26,0.35)]">
                <Play className="h-4 w-4 translate-x-px fill-current" strokeWidth={0} />
              </span>
              <div>
                <div className="text-xs font-semibold">{event.title}</div>
                <div className="mt-1 font-hud text-[8px] text-white/40">Recorded for every member</div>
              </div>
            </div>
            <span className="font-hud text-[8px] text-white/40">12:42 / {event.duration}</span>
          </div>
          <div className="h-1 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[38%] rounded-full bg-ow-orange" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function WeekInAcademy() {
  const [selected, setSelected] = useState(0);
  const active = events[selected];

  return (
    <section className="relative overflow-hidden border-t border-ow-line1 bg-ow-bg1">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-soft opacity-60" />
      <div className="relative mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-[120px]">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <SectionMarker n={5} title="The schedule" />
            </Reveal>
            <Reveal as="h2" delay={60} className="max-w-[760px] font-display text-[40px] font-bold leading-none tracking-[-0.035em] text-ow-fg1 lg:text-[56px]">
              Your week has a <span className="text-ow-orange">clear improvement rhythm</span>.
            </Reveal>
          </div>
          <Reveal as="p" delay={100} className="max-w-[400px] text-[15px] leading-[1.65] text-ow-fg2 lg:pb-1">
            Learn live, practice deliberately, receive feedback, and revisit every recorded session whenever you need it.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-8">
          <Reveal delay={100} className="overflow-hidden rounded-ow-1 border border-ow-line2 bg-ow-bg2">
            <div className="border-b border-ow-line1 px-5 py-4 font-hud text-[9px] text-ow-fg4">Weekly program // select a session</div>
            {events.map((event, i) => {
              const Icon = event.Icon;
              const isActive = selected === i;
              return (
                <button
                  key={event.day}
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-pressed={isActive}
                  className={`group grid w-full grid-cols-[58px_42px_1fr] items-center gap-3 border-b border-ow-line1 px-4 py-4 text-left outline-none transition-colors duration-200 last:border-b-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ow-orange ${isActive ? "bg-ow-orange/[0.08]" : "hover:bg-ow-bg1"}`}
                >
                  <span className={`font-hud text-[9px] ${isActive ? "text-ow-orange" : "text-ow-fg4"}`}>{event.shortDay}</span>
                  <span className={`flex h-9 w-9 items-center justify-center rounded-ow-1 border transition-colors ${isActive ? "border-ow-orange/45 bg-ow-orange/[0.1] text-ow-orange" : "border-ow-line2 text-ow-fg3"}`}>
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ow-fg1">{event.title}</span>
                    <span className="mt-1 hidden text-xs leading-relaxed text-ow-fg3 sm:block">{event.body}</span>
                  </span>
                </button>
              );
            })}
          </Reveal>

          <Reveal delay={160} y={18}>
            <LessonPreview event={active} />
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-7">
          <p className="max-w-[720px] text-xs leading-[1.6] text-ow-fg4">The event schedule may change, with some weeks featuring guest speakers, additional classes, and open Q&amp;A sessions.</p>
        </Reveal>
      </div>
    </section>
  );
}
