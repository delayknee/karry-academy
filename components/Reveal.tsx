"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  threshold?: number;
};

export function Reveal({
  children,
  delay = 0,
  y = 14,
  as: Tag = "div",
  className,
  style,
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      className={cn("reveal", className)}
      style={{
        ...style,
        ["--reveal-delay" as never]: `${delay}ms`,
        ["--reveal-y" as never]: `${y}px`,
      }}
    >
      {children}
    </Tag>
  );
}
