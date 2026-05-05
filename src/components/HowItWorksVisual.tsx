"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * How-it-works visual — the 4-step spine with a job puck animating
 * through Receive → Plan → Cut → Ship.
 */
export function HowItWorksVisual() {
  const steps = [
    { code: "01", label: "Receive", x: 60 },
    { code: "02", label: "Plan", x: 200 },
    { code: "03", label: "Cut", x: 340 },
    { code: "04", label: "Ship", x: 480 },
  ];

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
        <span>The four-step spine</span>
        <span style={{ color: "var(--color-signal-deep)" }}>ONE SOURCE OF TRUTH</span>
      </div>
      <div style={{ position: "relative", aspectRatio: "5/4", padding: 18 }}>
        <svg viewBox="0 0 540 380" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
          {/* Horizontal spine */}
          <motion.line
            x1="60"
            y1="180"
            x2="480"
            y2="180"
            stroke="var(--color-graphite)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease }}
          />

          {/* Step nodes */}
          {steps.map((s, i) => (
            <motion.g
              key={s.code}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 18,
                delay: 0.4 + i * 0.15,
              }}
              style={{ transformOrigin: `${s.x}px 180px` }}
            >
              <rect
                x={s.x - 32}
                y="148"
                width="64"
                height="64"
                fill="var(--color-canvas)"
                stroke="var(--color-graphite)"
                strokeWidth="1.5"
              />
              <text
                x={s.x}
                y="172"
                textAnchor="middle"
                fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
                fontSize="9"
                letterSpacing="0.22em"
                fill="var(--color-signal-deep)"
              >
                {s.code}
              </text>
              <text
                x={s.x}
                y="194"
                textAnchor="middle"
                fontFamily="Manrope, sans-serif"
                fontSize="14"
                fontWeight="600"
                fill="var(--color-graphite)"
                letterSpacing="-0.01em"
              >
                {s.label}
              </text>
            </motion.g>
          ))}

          {/* Tick marks under each node — subtle dimension-line vibe */}
          {steps.map((s) => (
            <line
              key={`tick-${s.code}`}
              x1={s.x}
              y1="220"
              x2={s.x}
              y2="226"
              stroke="var(--color-graphite)"
              strokeWidth="1"
              opacity="0.5"
            />
          ))}

          {/* Job puck — animates along the spine */}
          <motion.g
            animate={{ x: [60, 200, 340, 480] }}
            transition={{
              duration: 5.5,
              delay: 1.2,
              times: [0, 0.33, 0.66, 1],
              repeat: Infinity,
              repeatType: "loop",
              ease,
            }}
          >
            <circle
              cx="0"
              cy="180"
              r="11"
              fill="var(--color-signal)"
              stroke="var(--color-graphite)"
              strokeWidth="1.5"
            />
            <circle cx="0" cy="180" r="3.5" fill="var(--color-canvas)" />
          </motion.g>

          {/* Tags below each step */}
          {[
            { x: 60, label: "Scan rolls in" },
            { x: 200, label: "Press Pack" },
            { x: 340, label: "Print + cut" },
            { x: 480, label: "PDF + barcode" },
          ].map((t, i) => (
            <motion.text
              key={`tag-${i}`}
              x={t.x}
              y="252"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="11"
              fill="var(--color-ink-soft)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.15, ease }}
            >
              {t.label}
            </motion.text>
          ))}

          {/* Bottom rail with audit-trail tag */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.0, ease }}
          >
            <line
              x1="60"
              y1="300"
              x2="480"
              y2="300"
              stroke="var(--color-rule)"
              strokeWidth="1"
              strokeDasharray="3 4"
            />
            <text
              x="270"
              y="324"
              textAnchor="middle"
              fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
              fontSize="10"
              letterSpacing="0.22em"
              fill="var(--color-ink-soft)"
            >
              EVERY STEP — AUDIT-LOGGED
            </text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}
