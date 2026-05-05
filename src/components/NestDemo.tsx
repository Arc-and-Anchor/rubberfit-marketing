"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Animated nesting-engine demo — parts pack into a sheet of stock,
 * cycle resets every ~6 seconds. The visual showpiece of the page.
 */

type Part = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
};

const SHEET_WIDTH = 720;
const SHEET_HEIGHT = 420;

const parts: Part[] = [
  { id: "p1", x: 16, y: 16, w: 220, h: 140, label: "P-001" },
  { id: "p2", x: 244, y: 16, w: 180, h: 140, label: "P-002" },
  { id: "p3", x: 432, y: 16, w: 272, h: 90, label: "P-003" },
  { id: "p4", x: 432, y: 114, w: 130, h: 130, label: "P-004" },
  { id: "p5", x: 570, y: 114, w: 134, h: 130, label: "P-005" },
  { id: "p6", x: 16, y: 164, w: 200, h: 110, label: "P-006" },
  { id: "p7", x: 224, y: 164, w: 200, h: 110, label: "P-007" },
  { id: "p8", x: 16, y: 282, w: 320, h: 122, label: "P-008" },
  { id: "p9", x: 344, y: 282, w: 220, h: 122, label: "P-009" },
  { id: "p10", x: 572, y: 252, w: 132, h: 152, label: "P-010" },
];

export function NestDemo() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 7200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rf-nest-demo">
      <div className="rf-nest-demo-header">
        <div>SHEET 01 · 96 × 56 in · 60A</div>
        <div className="live">PACKING</div>
      </div>
      <div className="rf-nest-demo-canvas">
        <svg
          viewBox={`0 0 ${SHEET_WIDTH} ${SHEET_HEIGHT}`}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* faint mm grid */}
          <defs>
            <pattern id="rf-mm" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#14171b" strokeWidth="0.4" opacity="0.06" />
            </pattern>
            <pattern id="rf-cm" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#14171b" strokeWidth="0.6" opacity="0.12" />
            </pattern>
          </defs>
          <rect width={SHEET_WIDTH} height={SHEET_HEIGHT} fill="url(#rf-mm)" />
          <rect width={SHEET_WIDTH} height={SHEET_HEIGHT} fill="url(#rf-cm)" />
          <rect
            x={0.5}
            y={0.5}
            width={SHEET_WIDTH - 1}
            height={SHEET_HEIGHT - 1}
            fill="none"
            stroke="#14171b"
            strokeWidth="1"
          />

          {/* dimension lines */}
          <g stroke="#14171b" strokeWidth="0.6" fill="none">
            <line x1="0" y1={-8} x2={SHEET_WIDTH} y2={-8} />
            <line x1="0" y1={-12} x2="0" y2={-4} />
            <line x1={SHEET_WIDTH} y1={-12} x2={SHEET_WIDTH} y2={-4} />
          </g>

          <AnimatePresence mode="wait">
            <motion.g key={tick}>
              {parts.map((p, i) => (
                <motion.g
                  key={`${tick}-${p.id}`}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.08 + i * 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ transformOrigin: `${p.x + p.w / 2}px ${p.y + p.h / 2}px` }}
                >
                  <rect
                    x={p.x}
                    y={p.y}
                    width={p.w}
                    height={p.h}
                    fill="#ee5a24"
                    fillOpacity={0.12}
                    stroke="#ee5a24"
                    strokeWidth="1.2"
                  />
                  <text
                    x={p.x + 8}
                    y={p.y + 16}
                    fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
                    fontSize="9"
                    fill="#c54214"
                    letterSpacing="0.12em"
                  >
                    {p.label}
                  </text>
                  <text
                    x={p.x + p.w - 8}
                    y={p.y + p.h - 8}
                    fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
                    fontSize="9"
                    fill="#14171b"
                    opacity="0.55"
                    textAnchor="end"
                    letterSpacing="0.1em"
                  >
                    {p.w}×{p.h}
                  </text>
                </motion.g>
              ))}

              {/* travel path between cuts */}
              <motion.path
                d={`M ${parts.map((p) => `${p.x + p.w / 2} ${p.y + p.h / 2}`).join(" L ")}`}
                fill="none"
                stroke="#14171b"
                strokeWidth="0.8"
                strokeDasharray="3 4"
                opacity="0.45"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, delay: 1.2, ease: [0.25, 1, 0.5, 1] }}
              />
            </motion.g>
          </AnimatePresence>
        </svg>
      </div>
    </div>
  );
}
