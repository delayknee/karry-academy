import { cn } from "@/lib/utils";

/**
 * Four orange corner brackets, OW-HUD style. `visible` renders them
 * permanently; otherwise they fade in on the parent `group` hover.
 * Parent must be `relative`.
 */
export function HudCorners({ visible = false }: { visible?: boolean }) {
  const base = cn(
    "pointer-events-none absolute h-3 w-3 border-ow-orange",
    !visible &&
      "opacity-0 transition-opacity duration-200 ease-smooth group-hover:opacity-100",
  );
  return (
    <>
      <span aria-hidden className={cn(base, "-left-px -top-px border-l-2 border-t-2")} />
      <span aria-hidden className={cn(base, "-right-px -top-px border-r-2 border-t-2")} />
      <span aria-hidden className={cn(base, "-bottom-px -left-px border-b-2 border-l-2")} />
      <span aria-hidden className={cn(base, "-bottom-px -right-px border-b-2 border-r-2")} />
    </>
  );
}
