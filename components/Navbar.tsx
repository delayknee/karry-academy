"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Wordmark } from "./Logo";
import { CTAButton } from "./CTAButton";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "About", id: "about" },
  { label: "Included", id: "included" },
  { label: "Testimonials", id: "testimonials" },
  { label: "FAQ", id: "faq" },
];

export function Navbar() {
  const [activeId, setActiveId] = useState<string>("");
  const [hoveredId, setHoveredId] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let raf = 0;
    const calc = () => {
      const y = window.scrollY;
      setScrolled(y > 8);

      const threshold = window.innerHeight * 0.35;
      let current = "";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - threshold <= 0) current = l.id;
      }
      if (y < 120) current = "";
      setActiveId(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(calc);
    };
    calc();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const pill = pillRef.current;
    const nav = navRef.current;
    if (!pill || !nav) return;

    const targetId = hoveredId || activeId;
    if (!targetId) {
      pill.style.opacity = "0";
      return;
    }
    const link = nav.querySelector<HTMLAnchorElement>(
      `[data-section="${targetId}"]`,
    );
    if (!link) return;

    const wasHidden = pill.style.opacity !== "1";
    if (wasHidden) {
      pill.style.transition = "none";
      pill.style.transform = `translate3d(${link.offsetLeft}px, 0, 0)`;
      pill.style.width = `${link.offsetWidth}px`;
      void pill.offsetWidth;
      pill.style.transition = "";
      pill.style.opacity = "1";
    } else {
      pill.style.transform = `translate3d(${link.offsetLeft}px, 0, 0)`;
      pill.style.width = `${link.offsetWidth}px`;
    }
  }, [activeId, hoveredId]);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  }

  return (
    <header
      data-scrolled={scrolled}
      className="sticky top-0 z-50 border-b border-transparent bg-ow-bg0/55 backdrop-blur-xl transition-[background-color,border-color] duration-[320ms] ease-[cubic-bezier(0.23,1,0.32,1)] data-[scrolled=true]:border-ow-line1 data-[scrolled=true]:bg-ow-bg0/85"
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-6 py-3 lg:px-12">
        <Link href="/" aria-label="Karry Academy home" className="shrink-0">
          <Wordmark size={22} />
        </Link>

        <nav
          ref={navRef}
          onMouseLeave={() => setHoveredId("")}
          className="relative hidden items-center p-1 md:flex"
          aria-label="Primary"
        >
          <span
            ref={pillRef}
            aria-hidden
            style={{ opacity: 0 }}
            className="pointer-events-none absolute inset-y-1 left-0 rounded-full bg-ow-fg1/[0.06] ring-1 ring-inset ring-ow-fg1/[0.04] transition-[transform,width,opacity] duration-[320ms] ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform"
          />
          {links.map((l) => {
            const active = l.id === activeId;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                data-section={l.id}
                data-active={active}
                onMouseEnter={() => setHoveredId(l.id)}
                onFocus={() => setHoveredId(l.id)}
                onBlur={() => setHoveredId("")}
                onClick={(e) => handleClick(e, l.id)}
                className="relative z-10 rounded-full px-3.5 py-1.5 text-[13px] font-medium text-ow-fg3 outline-none transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-ow-fg1 focus-visible:text-ow-fg0 data-[active=true]:text-ow-fg0"
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <CTAButton size="sm" location="nav">Get Access</CTAButton>
        </div>
      </div>
    </header>
  );
}
