import Link from "next/link";
import { cn, WHOP_URL } from "@/lib/utils";

type Props = {
  href?: string;
  children?: React.ReactNode;
  className?: string;
};

const DEFAULT = "Get Access for $14.99/Month";

function Arrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 10"
      className={cn("h-[10px] w-[16px]", className)}
    >
      <path
        d="M1 5h12M9 1l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

/* A — Linear / Vercel flat.
   Solid orange, 8px radius, tiny top hairline highlight,
   short orange-tinted shadow. Depth from shadow, nothing else. */
export function ButtonFlat({ href = WHOP_URL, children = DEFAULT, className }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "btn-flat group inline-flex h-12 select-none items-center justify-center gap-3 rounded-[8px] bg-ow-orange px-6 font-display text-[15px] font-semibold tabular-nums text-[#0b1220] outline-none",
        className,
      )}
    >
      <span>{children}</span>
      <Arrow className="btn-flat__arrow" />
    </Link>
  );
}

/* B — HUD / tactical precision.
   2px radius, thin orange outline, corner brackets.
   Hover: fills orange. Matches font-hud aesthetic. */
export function ButtonHUD({ href = WHOP_URL, children = DEFAULT, className }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "btn-hud group relative inline-flex h-12 select-none items-center justify-center gap-4 rounded-[2px] px-7 font-hud text-[12.5px] uppercase tabular-nums outline-none",
        className,
      )}
    >
      <span className="btn-hud__bracket btn-hud__bracket--tl" aria-hidden />
      <span className="btn-hud__bracket btn-hud__bracket--tr" aria-hidden />
      <span className="btn-hud__bracket btn-hud__bracket--bl" aria-hidden />
      <span className="btn-hud__bracket btn-hud__bracket--br" aria-hidden />
      <span className="btn-hud__tick" aria-hidden />
      <span className="relative">{children}</span>
      <Arrow className="btn-hud__arrow relative" />
    </Link>
  );
}

/* C — Ghost → solid on hover.
   Transparent, orange 1.5px border, orange text.
   Hover: orange fill, dark text. Patient, confident. */
export function ButtonGhost({ href = WHOP_URL, children = DEFAULT, className }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "btn-ghost group inline-flex h-12 select-none items-center justify-center gap-3 rounded-[8px] px-6 font-display text-[15px] font-semibold tabular-nums outline-none",
        className,
      )}
    >
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}

/* D — Soft-glow modern.
   Flat orange with orange-tinted shadow. Feels like an LED
   on a dark surface — depth from glow, not 3D tricks. */
export function ButtonGlow({ href = WHOP_URL, children = DEFAULT, className }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "btn-glow group inline-flex h-12 select-none items-center justify-center gap-3 rounded-[8px] bg-ow-orange px-6 font-display text-[15px] font-semibold tabular-nums text-[#0b1220] outline-none",
        className,
      )}
    >
      <span>{children}</span>
      <Arrow className="btn-glow__arrow" />
    </Link>
  );
}
