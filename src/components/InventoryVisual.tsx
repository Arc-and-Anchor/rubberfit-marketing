"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Inventory visual — the roll-to-offcut lifecycle.
 * A horizontal roll gets progressively cut, pieces labeled with mono codes,
 * offcuts highlighted in signal-orange (showing reuse, not scrap), and an
 * arrow loop completing the offcut → stock cycle.
 */
export function InventoryVisual() {
  return (
    <div className="rf-diagram" style={{ padding: 0, overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 14px",
          borderBottom: "1px solid var(--color-graphite)",
          background: "var(--color-canvas)",
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--color-ink-soft)",
        }}
      >
        <span>Stock — Roll R-018</span>
        <span style={{ color: "var(--color-signal-deep)" }}>4 OFFCUTS · REUSABLE</span>
      </div>
      <div style={{ position: "relative", aspectRatio: "5/4", padding: 18 }}>
        <svg viewBox="0 0 540 380" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
          {/* Roll outline */}
          <motion.rect
            x="20"
            y="60"
            width="500"
            height="100"
            rx="2"
            fill="rgba(20, 23, 27, 0.04)"
            stroke="var(--color-graphite)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease }}
          />
          <text
            x="20"
            y="50"
            fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
            fontSize="9"
            fill="var(--color-ink-soft)"
            letterSpacing="0.16em"
          >
            R-018 · 60 SQ FT · 70A DUROMETER
          </text>

          {/* Cut parts (2 main + 2 offcuts) */}
          {[
            { x: 32, y: 72, w: 140, h: 76, label: "P-001", primary: true, delay: 0.3 },
            { x: 184, y: 72, w: 110, h: 76, label: "P-002", primary: true, delay: 0.45 },
            { x: 306, y: 72, w: 70, h: 76, label: "OFF-A", primary: false, delay: 0.6 },
            { x: 388, y: 72, w: 120, h: 76, label: "P-003", primary: true, delay: 0.75 },
          ].map((p) => (
            <motion.g
              key={p.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: p.delay, ease }}
            >
              <rect
                x={p.x}
                y={p.y}
                width={p.w}
                height={p.h}
                fill={p.primary ? "rgba(43, 102, 194, 0.1)" : "rgba(238, 90, 36, 0.18)"}
                stroke={p.primary ? "var(--color-blueprint)" : "var(--color-signal)"}
                strokeWidth="1.4"
                strokeDasharray={p.primary ? "0" : "4 3"}
              />
              <text
                x={p.x + 6}
                y={p.y + 14}
                fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
                fontSize="9"
                fill={p.primary ? "var(--color-blueprint)" : "var(--color-signal-deep)"}
                letterSpacing="0.1em"
              >
                {p.label}
              </text>
            </motion.g>
          ))}

          {/* Reuse loop arrow — offcut feeds back to inventory */}
          <motion.g
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.1, ease }}
          >
            <path
              d="M 340 160 Q 340 240, 200 240 Q 80 240, 80 180"
              fill="none"
              stroke="var(--color-signal)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <polygon
              points="80,180 76,188 84,188"
              fill="var(--color-signal)"
            />
          </motion.g>
          <motion.text
            x="200"
            y="262"
            textAnchor="middle"
            fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
            fontSize="10"
            fill="var(--color-signal-deep)"
            letterSpacing="0.2em"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6, ease }}
          >
            OFFCUT · REUSABLE STOCK
          </motion.text>

          {/* Stat row at bottom */}
          <motion.g
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.9, ease }}
          >
            <line x1="20" y1="298" x2="520" y2="298" stroke="var(--color-rule)" strokeWidth="1" />
            <g fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace" fontSize="10" letterSpacing="0.16em" fill="var(--color-ink-soft)">
              <text x="20" y="328">YIELD</text>
              <text
                x="20"
                y="358"
                fontFamily="Manrope, sans-serif"
                fontSize="22"
                fontWeight="600"
                fill="var(--color-graphite)"
                letterSpacing="-0.02em"
              >
                93.4%
              </text>
            </g>
            <g fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace" fontSize="10" letterSpacing="0.16em" fill="var(--color-ink-soft)">
              <text x="200" y="328">OFFCUTS · BANKED</text>
              <text
                x="200"
                y="358"
                fontFamily="Manrope, sans-serif"
                fontSize="22"
                fontWeight="600"
                fill="var(--color-signal-deep)"
                letterSpacing="-0.02em"
              >
                4 (12 SQ FT)
              </text>
            </g>
            <g fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace" fontSize="10" letterSpacing="0.16em" fill="var(--color-ink-soft)">
              <text x="400" y="328">REUSED LIFETIME</text>
              <text
                x="400"
                y="358"
                fontFamily="Manrope, sans-serif"
                fontSize="22"
                fontWeight="600"
                fill="var(--color-graphite)"
                letterSpacing="-0.02em"
              >
                $48K
              </text>
            </g>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}
