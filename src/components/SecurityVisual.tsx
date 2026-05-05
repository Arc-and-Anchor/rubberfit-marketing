"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Security visual — layered defense diagram showing concentric rings of
 * protection (Browser → RBAC → RLS → Encrypted Postgres) with a request
 * "punching through" the layers.
 */
export function SecurityVisual() {
  const layers = [
    { r: 150, label: "BROWSER · TLS 1.3", color: "var(--color-graphite)", thickness: 1 },
    { r: 120, label: "RBAC · 6 ROLES", color: "var(--color-blueprint)", thickness: 1.5 },
    { r: 90, label: "RLS · POSTGRES POLICIES", color: "var(--color-signal-deep)", thickness: 1.5 },
    { r: 60, label: "ENCRYPTED AT REST", color: "var(--color-graphite)", thickness: 2 },
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
        <span>Defense in depth</span>
        <span style={{ color: "var(--color-signal-deep)" }}>4 LAYERS · DB-ENFORCED</span>
      </div>
      <div style={{ position: "relative", aspectRatio: "5/4", padding: 18 }}>
        <svg viewBox="0 0 540 380" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
          <g transform="translate(270 190)">
            {/* Concentric rings */}
            {layers.map((l, i) => (
              <motion.circle
                key={l.label}
                cx="0"
                cy="0"
                r={l.r}
                fill="none"
                stroke={l.color}
                strokeWidth={l.thickness}
                strokeDasharray={i === 0 ? "0" : "3 4"}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease }}
              />
            ))}

            {/* Center — encrypted vault */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.65 }}
            >
              <rect x="-22" y="-22" width="44" height="44" fill="var(--color-graphite)" />
              <rect x="-12" y="-8" width="24" height="20" fill="none" stroke="var(--color-signal)" strokeWidth="1.5" />
              <circle cx="0" cy="2" r="3" fill="var(--color-signal)" />
            </motion.g>
          </g>

          {/* Layer labels — bracket-style, reading left to right */}
          {layers.map((l, i) => (
            <motion.g
              key={`label-${l.label}`}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.1, ease }}
            >
              <line
                x1="20"
                y1={70 + i * 22}
                x2="60"
                y2={70 + i * 22}
                stroke={l.color}
                strokeWidth="1"
              />
              <circle cx="60" cy={70 + i * 22} r="3" fill={l.color} />
              <text
                x="70"
                y={73 + i * 22}
                fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
                fontSize="10"
                fill={l.color}
                letterSpacing="0.16em"
              >
                {l.label}
              </text>
            </motion.g>
          ))}

          {/* Sample request — arrow punching through layers */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.6, ease }}
          >
            <motion.line
              x1="60"
              y1="300"
              x2="270"
              y2="190"
              stroke="var(--color-signal)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1.7, ease }}
            />
            <motion.circle
              r="4"
              fill="var(--color-signal)"
              initial={{ cx: 60, cy: 300 }}
              animate={{ cx: 270, cy: 190 }}
              transition={{
                duration: 1.4,
                delay: 1.7,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease,
              }}
            />
            <text
              x="60"
              y="320"
              fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
              fontSize="10"
              fill="var(--color-signal-deep)"
              letterSpacing="0.16em"
            >
              REQUEST · JWT
            </text>
          </motion.g>

          {/* Bottom stat */}
          <motion.text
            x="270"
            y="358"
            textAnchor="middle"
            fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
            fontSize="10"
            fill="var(--color-ink-soft)"
            letterSpacing="0.22em"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.4, ease }}
          >
            ROW-LEVEL SECURITY · 12+ TABLES
          </motion.text>
        </svg>
      </div>
    </div>
  );
}
