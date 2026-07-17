"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export function TracingBeam({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 72%", "end 38%"],
  });

  return (
    <div ref={targetRef} className={cn("relative", className)}>
      <svg
        aria-hidden="true"
        viewBox="0 0 32 720"
        preserveAspectRatio="none"
        className="pointer-events-none absolute top-8 bottom-8 left-[max(1rem,calc((100vw-80rem)/2+1.15rem))] z-10 hidden h-[calc(100%-4rem)] w-8 overflow-visible lg:block"
      >
        <path
          d="M16 0V130C16 148 3 154 3 172V310C3 329 26 336 26 355V534C26 553 16 560 16 580V720"
          fill="none"
          stroke="var(--border)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <motion.path
          d="M16 0V130C16 148 3 154 3 172V310C3 329 26 336 26 355V534C26 553 16 560 16 580V720"
          fill="none"
          stroke="var(--foreground)"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: scrollYProgress }}
          className="motion-reduce:hidden"
        />
        <path
          d="M16 0V130C16 148 3 154 3 172V310C3 329 26 336 26 355V534C26 553 16 560 16 580V720"
          fill="none"
          stroke="var(--foreground)"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="hidden motion-reduce:block"
        />
        <circle cx="16" cy="0" r="3" fill="var(--background)" stroke="var(--foreground)" />
        <circle cx="16" cy="720" r="3" fill="var(--background)" stroke="var(--foreground)" />
      </svg>
      {children}
    </div>
  );
}
