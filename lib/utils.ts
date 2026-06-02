import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHOP_URL =
  process.env.NEXT_PUBLIC_WHOP_URL ?? "https://whop.com/checkout/plan_ucEYjkWebLr7K";
