export function SectionMarker({ n, title }: { n: number; title: string }) {
  return (
    <div className="mb-8 flex items-baseline gap-3.5">
      <span className="font-display text-sm font-medium tracking-[0.12em] text-ow-orange">
        // {String(n).padStart(2, "0")}
      </span>
      <span className="font-hud text-[12px] text-ow-fg3">{title}</span>
    </div>
  );
}
