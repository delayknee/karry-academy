import {
  CalendarDays,
  CircleHelp,
  PlayCircle,
  Sparkles,
  Target,
  Trophy,
  UsersRound,
} from "lucide-react";

const markerIcons = {
  1: PlayCircle,
  2: Target,
  3: Sparkles,
  4: UsersRound,
  5: CalendarDays,
  6: Trophy,
  7: CircleHelp,
} as const;

export function SectionMarker({ n, title }: { n: number; title: string }) {
  const Icon = markerIcons[n as keyof typeof markerIcons] ?? Sparkles;

  return (
    <div className="section-marker mb-8 inline-flex items-center gap-3" data-marker={n}>
      <span className="section-marker__icon relative flex h-9 w-9 items-center justify-center rounded-full border border-ow-orange/35 bg-ow-orange/[0.08] text-ow-orange shadow-[0_0_24px_-10px_rgba(249,158,26,0.65)]">
        <span aria-hidden className="absolute inset-[-5px] rounded-full border border-dashed border-ow-orange/15" />
        <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden />
      </span>
      <span className="font-hud text-[10px] text-ow-fg3">{title}</span>
      <span aria-hidden className="h-px w-10 bg-gradient-to-r from-ow-orange/60 to-transparent" />
    </div>
  );
}
