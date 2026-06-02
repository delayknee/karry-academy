import Link from "next/link";
import { cn, WHOP_URL } from "@/lib/utils";

type Props = {
  href?: string;
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
};

export function CTAButton({
  href = WHOP_URL,
  children = "Get Access for $14.99/Month",
  className,
  size = "md",
  variant = "primary",
}: Props) {
  const sizes = {
    sm: "h-9 rounded-[6px] px-4 text-[12.5px] gap-2.5",
    md: "h-11 rounded-[7px] px-5 text-[14px] gap-3",
    lg: "h-[56px] rounded-[8px] px-7 text-[16px] gap-3.5",
  };

  const variants = {
    primary: "bg-ow-orange text-[#0b1220]",
    secondary: "bg-ow-bg2 text-ow-fg1",
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "btn-flat group inline-flex select-none items-center justify-center whitespace-nowrap font-display font-semibold tabular-nums outline-none",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      <span>{children}</span>
      <svg
        aria-hidden
        viewBox="0 0 16 10"
        className="btn-flat__arrow h-[10px] w-[16px]"
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
    </Link>
  );
}
