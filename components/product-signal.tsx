"use client";

import { motion } from "motion/react";

const path = "M640 12V42C640 54 630 60 618 60H96C84 60 76 68 76 80V104M640 60H372C360 60 352 68 352 80V104M640 60H908C920 60 928 68 928 80V104M640 60H1184C1196 60 1204 68 1204 80V104";

export function ProductSignal() {
  return (
    <div className="relative mb-2 hidden h-28 overflow-hidden lg:block" aria-hidden="true">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 border border-border bg-background px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em]">
        Built · tested · shipped
      </div>
      <svg viewBox="0 0 1280 112" preserveAspectRatio="none" className="absolute inset-0 size-full overflow-visible">
        <path d={path} fill="none" stroke="var(--border)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <motion.path
          d={path}
          fill="none"
          stroke="var(--foreground)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.5 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        {[76, 352, 928, 1204].map((x) => (
          <circle key={x} cx={x} cy="104" r="3" fill="var(--background)" stroke="var(--foreground)" />
        ))}
      </svg>
    </div>
  );
}
