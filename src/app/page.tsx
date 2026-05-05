"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";
import { NestDemo } from "@/components/NestDemo";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { label: "Material waste", value: "-34", unit: "%", foot: "vs. legacy hand-planning across pilot lines." },
  { label: "Plans per shift", value: "12", unit: "×", foot: "Operators clear a queue that used to take a full day." },
  { label: "Audit ready", value: "100", unit: "%", foot: "Every cut, every barcode, every operator. Forever." },
  { label: "Pack time, p50", value: "1.8", unit: "s", foot: "Rust + sparrow GLS, single c5.large." },
];

const pillars = [
  {
    code: "01",
    href: "/cutting-engine",
    title: "The cutting engine",
    body: "Rust-powered nesting with sparrow GLS. Auto Nest plus Free-roam. Layout JSON archived to cut history forever.",
  },
  {
    code: "02",
    href: "/inventory",
    title: "Inventory & rolls",
    body: "Roll lineage, first-class offcuts, reorder rules, supplier price history, and barcode labels printed at the dock.",
  },
  {
    code: "03",
    href: "/jobs",
    title: "Jobs & customers",
    body: "Customer-aware jobs, operator queues, priority + due dates, and shareable PDF receipts the customer reads on their phone.",
  },
  {
    code: "04",
    href: "/how-it-works",
    title: "How it works",
    body: "Receive → plan → cut → ship. The four-step spine the whole app rides. One job, one source of truth, six roles.",
  },
  {
    code: "05",
    href: "/security",
    title: "Security",
    body: "RLS on every table. Six-role RBAC enforced twice. Honest about what's shipped, what's not, and the SOC 2 roadmap.",
  },
  {
    code: "06",
    href: "/pricing",
    title: "Pricing",
    body: "Three tiers, no per-pack metering, no PDF surcharges. The price you see is the price you pay.",
  },
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.18, rootMargin: "0px 0px -80px 0px" }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SiteNav />

      {/* HERO */}
      <section className="rf-hero">
        <div className="rf-wrap">
          <div className="rf-hero-grid">
            <div>
              <motion.div
                className="rf-hero-meta"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
              >
                <span>RUBBERFIT · REV 2026.05</span>
                <span className="v-sep" />
                <span>BUILT BY ARC &amp; ANCHOR</span>
                <span className="v-sep" />
                <span>LAS VEGAS · NV</span>
              </motion.div>

              <motion.h1
                className="rf-h1"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.08, ease }}
              >
                Material that <em>lands flat</em>.
              </motion.h1>

              <motion.p
                className="rf-lead"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.22, ease }}
              >
                Rubberfit is the manufacturing operations platform built for
                rubber-roll fabricators. A Rust nesting engine, AI-augmented
                planner, full inventory + jobs lifecycle, and audit-ready
                barcode lineage from receiving through shipping.
              </motion.p>

              <motion.div
                className="rf-hero-actions"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.36, ease }}
              >
                <Link href="/pricing" className="rf-cta-primary">
                  <span>See pricing</span>
                  <span className="arrow" aria-hidden="true">→</span>
                </Link>
                <Link href="/cutting-engine" className="rf-cta-secondary">
                  See the engine
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.25, ease }}
            >
              <NestDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="stats" className="rf-section" style={{ paddingTop: 0 }}>
        <div className="rf-wrap">
          <div className="rf-eyebrow fade-up">
            <span className="tick" aria-hidden="true" />
            <span>Spec sheet · Field measurements</span>
          </div>
          <motion.div
            className="rf-stats fade-up"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            {stats.map((s) => (
              <div key={s.label} className="rf-stat">
                <div className="rf-stat-label">{s.label}</div>
                <div className="rf-stat-value mono-data">
                  {s.value}
                  <span className="rf-stat-unit">{s.unit}</span>
                </div>
                <div className="rf-stat-foot">{s.foot}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WASTE & OFFCUT BENEFITS */}
      <section
        className="rf-section"
        style={{ background: "var(--color-surface)", paddingTop: "clamp(64px, 8vw, 96px)" }}
      >
        <div className="rf-wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 48,
              alignItems: "center",
            }}
            className="rf-waste-grid"
          >
            <div className="fade-up">
              <div className="rf-eyebrow">
                <span className="tick" aria-hidden="true" />
                <span>Waste reduction · Offcuts as inventory</span>
              </div>
              <h2 className="rf-h2">
                Stop scrapping <em>30% of every roll</em>.
              </h2>
              <p className="rf-body" style={{ marginTop: 16, marginBottom: 20 }}>
                Hand-planned cuts leave 25–40% of every roll on the floor as
                offcut waste. Rubberfit&apos;s Rust nesting engine packs parts
                tighter, and what doesn&apos;t fit becomes <strong>first-class
                inventory</strong> — searchable, reusable, and reached for
                automatically before the next fresh roll.
              </p>
              <p className="rf-body" style={{ marginBottom: 28 }}>
                Customers report material waste down 30–40% inside a quarter,
                with the offcut bank covering 15–25% of small-part demand
                without ever opening a new roll.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 18,
                  paddingTop: 24,
                  borderTop: "1px solid var(--color-rule)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--color-ink-soft)",
                      marginBottom: 6,
                    }}
                  >
                    Material waste
                  </div>
                  <div className="mono-data" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.02em", color: "var(--color-graphite)" }}>
                    -34<span style={{ color: "var(--color-signal-deep)" }}>%</span>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--color-ink-soft)",
                      marginBottom: 6,
                    }}
                  >
                    Offcut reuse
                  </div>
                  <div className="mono-data" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.02em", color: "var(--color-graphite)" }}>
                    18<span style={{ color: "var(--color-signal-deep)" }}>%</span>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--color-ink-soft)",
                      marginBottom: 6,
                    }}
                  >
                    Per-job savings
                  </div>
                  <div className="mono-data" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.02em", color: "var(--color-graphite)" }}>
                    $50K<span style={{ color: "var(--color-signal-deep)" }}>+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reuse loop SVG */}
            <motion.div
              className="fade-up"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease }}
              style={{
                position: "relative",
                aspectRatio: "1/1",
                background: "var(--color-surface-raised)",
                border: "1px solid var(--color-graphite)",
              }}
            >
              <svg viewBox="0 0 360 360" style={{ width: "100%", height: "100%" }}>
                {/* Three-loop offcut-reuse cycle */}
                {[
                  { label: "ROLL", subtitle: "Fresh stock", x: 180, y: 70, color: "var(--color-graphite)" },
                  { label: "CUT", subtitle: "Engine packs", x: 290, y: 240, color: "var(--color-blueprint)" },
                  { label: "OFFCUT", subtitle: "Banked + reused", x: 70, y: 240, color: "var(--color-signal)" },
                ].map((n, i) => (
                  <motion.g
                    key={n.label}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 18,
                      delay: 0.2 + i * 0.15,
                    }}
                    style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                  >
                    <circle cx={n.x} cy={n.y} r="42" fill="var(--color-canvas)" stroke={n.color} strokeWidth="1.8" />
                    <text
                      x={n.x}
                      y={n.y - 4}
                      textAnchor="middle"
                      fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
                      fontSize="11"
                      letterSpacing="0.22em"
                      fill={n.color}
                    >
                      {n.label}
                    </text>
                    <text
                      x={n.x}
                      y={n.y + 14}
                      textAnchor="middle"
                      fontFamily="Inter, sans-serif"
                      fontSize="10"
                      fill="var(--color-ink-soft)"
                    >
                      {n.subtitle}
                    </text>
                  </motion.g>
                ))}

                {/* Connecting arrows — triangular cycle */}
                {[
                  { from: { x: 210, y: 100 }, to: { x: 270, y: 210 }, delay: 0.7 },
                  { from: { x: 240, y: 264 }, to: { x: 120, y: 264 }, delay: 0.85 },
                  { from: { x: 90, y: 210 }, to: { x: 150, y: 100 }, delay: 1.0 },
                ].map((a, i) => {
                  const dx = a.to.x - a.from.x;
                  const dy = a.to.y - a.from.y;
                  const len = Math.sqrt(dx * dx + dy * dy);
                  const ux = dx / len;
                  const uy = dy / len;
                  const tipX = a.to.x;
                  const tipY = a.to.y;
                  const baseX = tipX - ux * 8;
                  const baseY = tipY - uy * 8;
                  const perpX = -uy * 4;
                  const perpY = ux * 4;
                  return (
                    <motion.g
                      key={`arrow-${i}`}
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.6, delay: a.delay, ease }}
                    >
                      <line
                        x1={a.from.x}
                        y1={a.from.y}
                        x2={a.to.x}
                        y2={a.to.y}
                        stroke="var(--color-signal)"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                      />
                      <polygon
                        points={`${tipX},${tipY} ${baseX + perpX},${baseY + perpY} ${baseX - perpX},${baseY - perpY}`}
                        fill="var(--color-signal)"
                      />
                    </motion.g>
                  );
                })}

                {/* Center label */}
                <motion.text
                  x="180"
                  y="180"
                  textAnchor="middle"
                  fontFamily="Manrope, sans-serif"
                  fontSize="18"
                  fontWeight="600"
                  fill="var(--color-graphite)"
                  letterSpacing="-0.02em"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 1.2, ease }}
                >
                  Closed loop
                </motion.text>
                <motion.text
                  x="180"
                  y="200"
                  textAnchor="middle"
                  fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
                  fontSize="10"
                  letterSpacing="0.22em"
                  fill="var(--color-signal-deep)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 1.4, ease }}
                >
                  ZERO MATERIAL UNTRACKED
                </motion.text>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PILLARS — links to deep routes */}
      <section className="rf-section">
        <div className="rf-wrap">
          <div className="fade-up" style={{ marginBottom: 56, maxWidth: "60ch" }}>
            <div className="rf-eyebrow">
              <span className="tick" aria-hidden="true" />
              <span>The whole platform · 06 routes</span>
            </div>
            <h2 className="rf-h2">
              One platform. <em>One source of truth.</em>
            </h2>
            <p className="rf-body" style={{ marginTop: 16 }}>
              Click any pillar to read the full breakdown — engine internals,
              inventory model, the job lifecycle, the security posture, and
              the pricing.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: 18,
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.05, ease }}
              >
                <Link
                  href={p.href}
                  className="rf-diagram"
                  style={{ display: "block", height: "100%", textDecoration: "none" }}
                >
                  <div className="rf-diagram-header">
                    <span>{p.code}</span>
                    <span>→</span>
                  </div>
                  <h3 className="rf-h3" style={{ marginBottom: 10 }}>{p.title}</h3>
                  <p className="rf-feature-text">{p.body}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM / CREDIT */}
      <section className="rf-section" style={{ background: "var(--color-surface)" }}>
        <div className="rf-wrap">
          <div className="fade-up">
            <div className="rf-eyebrow">
              <span className="tick" aria-hidden="true" />
              <span>The makers · Arc &amp; Anchor</span>
            </div>
            <h2 className="rf-h2">
              Built by a small team that <em>signs every cut</em>.
            </h2>
            <p className="rf-body" style={{ marginTop: 16, marginBottom: 28 }}>
              Rubberfit isn&apos;t a bolt-on, an acquisition, or a side
              project. It&apos;s an Arc &amp; Anchor original — designed,
              built, and maintained by the same five people who answer the
              support email.
            </p>
            <Link
              href="https://www.arcanchor.com/about-us"
              className="rf-cta-primary"
              target="_blank"
              rel="noreferrer"
            >
              <span>Meet the creators</span>
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rf-section" style={{ background: "var(--color-graphite)", color: "#fff" }}>
        <div className="rf-wrap">
          <div className="fade-up" style={{ textAlign: "center" }}>
            <div className="rf-eyebrow" style={{ color: "#bcbfc6" }}>
              <span className="tick" aria-hidden="true" />
              <span>Ready when you are</span>
            </div>
            <h2
              className="rf-h2"
              style={{ color: "#fff", maxWidth: "22ch", margin: "0 auto" }}
            >
              See the price. <em style={{ color: "var(--color-signal)" }}>Start a trial.</em>
            </h2>
            <p
              className="rf-body"
              style={{ color: "#bcbfc6", margin: "20px auto 36px", maxWidth: "48ch" }}
            >
              Per-seat pricing — Standard $199, Pro $349, Max $699 monthly
              (20% off annual). 14-day free trial, no credit card. Standard
              customers typically save $25K–$50K on a single optimized job.
            </p>
            <Link
              href="/pricing"
              className="rf-cta-primary"
              style={{ background: "var(--color-signal)", borderBottomColor: "#fff" }}
            >
              <span>See pricing</span>
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
