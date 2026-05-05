"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Jobs visual — the customer→cut→ship spine, with status transitions
 * animating into place. Customer card on left, engine indicator middle,
 * shipped PDF on right. Status pucks animate left-to-right.
 */
export function JobsVisual() {
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
        <span>Job J-2026-218</span>
        <span style={{ color: "var(--color-signal-deep)" }}>SHIPPED · 36 MIN</span>
      </div>
      <div style={{ position: "relative", aspectRatio: "5/4", padding: 18 }}>
        <svg viewBox="0 0 540 380" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
          {/* Three station boxes */}
          {[
            { x: 20, y: 80, label: "CUSTOMER", code: "C-04829", subtitle: "Rev Industries" },
            { x: 210, y: 80, label: "CUT", code: "P-001…003", subtitle: "Auto-nest · 1.8s" },
            { x: 400, y: 80, label: "SHIPPED", code: "PDF SENT", subtitle: "Tracking attached" },
          ].map((s, i) => (
            <motion.g
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.18, ease }}
            >
              <rect
                x={s.x}
                y={s.y}
                width="120"
                height="120"
                fill="rgba(20, 23, 27, 0.04)"
                stroke="var(--color-graphite)"
                strokeWidth="1.4"
              />
              <text
                x={s.x + 10}
                y={s.y + 22}
                fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
                fontSize="9"
                fill="var(--color-signal-deep)"
                letterSpacing="0.18em"
              >
                {s.label}
              </text>
              <text
                x={s.x + 10}
                y={s.y + 60}
                fontFamily="Manrope, sans-serif"
                fontSize="18"
                fontWeight="600"
                fill="var(--color-graphite)"
                letterSpacing="-0.01em"
              >
                {s.code}
              </text>
              <text
                x={s.x + 10}
                y={s.y + 90}
                fontFamily="Inter, sans-serif"
                fontSize="11"
                fill="var(--color-ink-soft)"
              >
                {s.subtitle}
              </text>
            </motion.g>
          ))}

          {/* Connecting arrows */}
          {[
            { x1: 142, x2: 208 },
            { x1: 332, x2: 398 },
          ].map((a, i) => (
            <motion.g
              key={`arrow-${i}`}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.18, ease }}
            >
              <line
                x1={a.x1}
                y1="140"
                x2={a.x2 - 6}
                y2="140"
                stroke="var(--color-graphite)"
                strokeWidth="1.4"
                strokeDasharray="4 3"
              />
              <polygon
                points={`${a.x2 - 6},140 ${a.x2 - 12},135 ${a.x2 - 12},145`}
                fill="var(--color-graphite)"
              />
            </motion.g>
          ))}

          {/* Status puck — animates along the spine */}
          <motion.g
            initial={{ x: 80 }}
            animate={{ x: [80, 270, 460] }}
            transition={{
              duration: 5,
              delay: 1.2,
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatType: "reverse",
              ease,
            }}
          >
            <circle cx="0" cy="222" r="9" fill="var(--color-signal)" />
            <circle cx="0" cy="222" r="9" fill="none" stroke="var(--color-graphite)" strokeWidth="1" />
            <text
              x="0"
              y="248"
              textAnchor="middle"
              fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
              fontSize="9"
              letterSpacing="0.18em"
              fill="var(--color-signal-deep)"
            >
              JOB
            </text>
          </motion.g>

          {/* Status timeline */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4, ease }}
          >
            <line x1="20" y1="290" x2="520" y2="290" stroke="var(--color-rule)" strokeWidth="1" />
            {[
              { x: 80, label: "Pending", time: "08:14" },
              { x: 270, label: "Cutting", time: "08:18" },
              { x: 460, label: "Shipped", time: "08:50" },
            ].map((t) => (
              <g key={t.label}>
                <circle cx={t.x} cy="290" r="4" fill="var(--color-graphite)" />
                <text
                  x={t.x}
                  y="312"
                  textAnchor="middle"
                  fontFamily="Inter, sans-serif"
                  fontSize="11"
                  fontWeight="500"
                  fill="var(--color-graphite)"
                >
                  {t.label}
                </text>
                <text
                  x={t.x}
                  y="328"
                  textAnchor="middle"
                  fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
                  fontSize="9"
                  letterSpacing="0.16em"
                  fill="var(--color-ink-soft)"
                >
                  {t.time}
                </text>
              </g>
            ))}
          </motion.g>
        </svg>
      </div>
    </div>
  );
}
