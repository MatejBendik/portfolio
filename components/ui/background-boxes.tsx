"use client";

import { memo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const rows = Array.from({ length: 20 });
const columns = Array.from({ length: 30 });

function BoxesCore({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_14%,black_82%,transparent)]",
        className,
      )}
    >
      <div className="pointer-events-auto absolute -top-24 -left-32 flex -skew-y-6 opacity-70 dark:opacity-45">
        {rows.map((_, row) => (
          <div key={row} className="relative h-10 w-10 border-l border-border/70">
            {columns.map((__, column) => (
              <motion.div
                key={column}
                whileHover={{ backgroundColor: "var(--foreground)", opacity: 0.09 }}
                transition={{ duration: 0.16 }}
                className="relative h-10 w-10 border-t border-r border-border/70"
              >
                {row % 4 === 0 && column % 4 === 0 ? (
                  <span className="absolute -top-2 -left-1.5 font-mono text-[9px] text-muted-foreground/45">
                    +
                  </span>
                ) : null}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export const Boxes = memo(BoxesCore);
