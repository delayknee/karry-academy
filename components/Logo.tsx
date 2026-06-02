import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = 32,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block", className)}
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="10" fill="#0B1220" />
      <path d="M 42 14 L 48 14 L 26 50 L 20 50 Z" fill="#F99E1A" />
    </svg>
  );
}

export function Wordmark({
  size = 22,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-display inline-flex items-center tracking-[-0.03em] text-ow-fg1",
        className,
      )}
      style={{ fontSize: size }}
    >
      <Image
        src="/karry-academy-icon.png"
        alt=""
        width={size}
        height={size}
        priority
        className="mr-[0.45em] inline-block h-[1em] w-auto select-none"
        aria-hidden
      />
      <span className="inline-flex items-baseline">
        <span className="font-bold">Karry</span>
        <span className="mx-[0.18em] font-bold text-ow-orange">/</span>
        <span className="font-medium">Academy</span>
      </span>
    </span>
  );
}
