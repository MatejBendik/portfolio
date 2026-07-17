"use client";

import { motion } from "motion/react";

const branches = [
  "M640 38V48C640 56 632 62 620 62H96C84 62 76 70 76 82V104",
  "M640 38V48C640 56 632 62 620 62H372C360 62 352 70 352 82V104",
  "M640 38V48C640 56 648 62 660 62H908C920 62 928 70 928 82V104",
  "M640 38V48C640 56 648 62 660 62H1184C1196 62 1204 70 1204 82V104",
] as const;

export function ProductSignal() {
  return (
    <div className="relative mb-2 hidden h-28 overflow-hidden lg:block" aria-hidden="true">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 border border-border bg-background px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em]">
        Built · tested · shipped
      </div>
      <svg viewBox="0 0 1280 112" preserveAspectRatio="none" className="absolute inset-0 size-full">
        {branches.map((branch) => (
          <path key={branch} d={branch} fill="none" stroke="var(--border)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        ))}
        {branches.map((branch, index) => (
          <motion.path
            key={`signal-${branch}`}
            d={branch}
            fill="none"
            stroke="var(--foreground)"
            strokeWidth="2.5"
            strokeLinecap="round"
            pathLength="1"
            strokeDasharray="0.075 0.925"
            vectorEffect="non-scaling-stroke"
            className="motion-reduce:hidden"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -1 }}
            transition={{
              duration: 3.4 + index * 0.25,
              delay: index * 0.34,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        ))}
        {[76, 352, 928, 1204].map((x) => (
          <circle key={x} cx={x} cy="104" r="3" fill="var(--background)" stroke="var(--foreground)" />
        ))}
      </svg>
    </div>
  );
}
