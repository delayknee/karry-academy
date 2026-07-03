"use client";

import { useEffect, useState } from "react";

export function CountUp({
  to,
  suffix = "+",
  duration = 1400,
  delay = 500,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(to);
      return;
    }
    let raf = 0;
    const timer = window.setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(to * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [to, duration, delay]);

  return (
    <>
      {val.toLocaleString("en-US")}
      {suffix}
    </>
  );
}
