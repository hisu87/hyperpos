"use client";

import { clsx } from "clsx";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
};

export default function ScrollReveal({
  children,
  className,
  delayMs = 0,
  threshold = 0.18,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const node = elementRef.current;
    if (!node) {
      return;
    }

    if (visible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, visible]);

  return (
    <div
      ref={elementRef}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={clsx(
        "transition-[transform,opacity,filter] duration-700 ease-out will-change-[transform,opacity,filter]",
        visible
          ? "translate-y-0 scale-100 opacity-100 blur-0"
          : "translate-y-6 scale-[0.985] opacity-0 blur-[2px]",
        className,
      )}>
      {children}
    </div>
  );
}
