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
              <svg viewBox="0 0 360 360" fill="none" style={{ width: "100%", height: "100%" }}>
                {/* Return rail — signal-orange recirculation pipe */}
                <motion.path
                  d="M 144 286 L 104 286 Q 92 286 92 274 L 92 86 Q 92 74 104 74 L 144 74"
                  stroke="var(--color-signal)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1.2, ease }}
                />
                <motion.polygon
                  points="138,69 150,74 138,79"
                  fill="var(--color-signal)"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.3, delay: 1.0, ease }}
                />

                {/* Forward flow — subordinate ink-soft */}
                <motion.g
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.5, ease }}
                >
                  <line x1="216" y1="100" x2="216" y2="148" stroke="var(--color-ink-soft)" strokeWidth="1.5" />
                  <polygon points="212,148 220,148 216,156" fill="var(--color-ink-soft)" />
                  <line x1="216" y1="206" x2="216" y2="254" stroke="var(--color-ink-soft)" strokeWidth="1.5" />
                  <polygon points="212,254 220,254 216,262" fill="var(--color-ink-soft)" />
                </motion.g>

                {/* ROLL — fresh stock */}
                <motion.g
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.2, ease }}
                >
                  <rect x="144" y="48" width="144" height="52" rx="4" fill="var(--color-surface-raised)" stroke="var(--color-graphite)" strokeWidth="1.5" />
                  <text
                    x="216"
                    y="68"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
                    fontSize="12"
                    fontWeight="600"
                    fill="var(--color-graphite)"
                    letterSpacing="0.1em"
                  >
                    ROLL
                  </text>
                  <text
                    x="216"
                    y="86"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
                    fontSize="9"
                    fill="var(--color-ink-faint)"
                    letterSpacing="0.22em"
                  >
                    FRESH STOCK
                  </text>
                </motion.g>

                {/* CUT — engine packs */}
                <motion.g
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.35, ease }}
                >
                  <rect x="144" y="154" width="144" height="52" rx="4" fill="var(--color-surface-raised)" stroke="var(--color-graphite)" strokeWidth="1.5" />
                  <text
                    x="216"
                    y="174"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
                    fontSize="12"
                    fontWeight="600"
                    fill="var(--color-graphite)"
                    letterSpacing="0.1em"
                  >
                    CUT
                  </text>
                  <text
                    x="216"
                    y="192"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
                    fontSize="9"
                    fill="var(--color-ink-faint)"
                    letterSpacing="0.22em"
                  >
                    ENGINE PACKS
                  </text>
                </motion.g>

                {/* OFFCUT — signal hero */}
                <motion.g
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.5, ease }}
                >
                  <rect x="144" y="260" width="144" height="52" rx="4" fill="var(--color-surface-raised)" stroke="var(--color-signal)" strokeWidth="2" />
                  <text
                    x="216"
                    y="280"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
                    fontSize="12"
                    fontWeight="600"
                    fill="var(--color-signal-deep)"
                    letterSpacing="0.1em"
                  >
                    OFFCUT
                  </text>
                  <text
                    x="216"
                    y="298"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
                    fontSize="9"
                    fill="var(--color-ink-faint)"
                    letterSpacing="0.22em"
                  >
                    BANKED + REUSED
                  </text>
                </motion.g>

                {/* Spec stamp */}
                <motion.text
                  x="180"
                  y="340"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="ui-monospace, JetBrains Mono, Menlo, monospace"
                  fontSize="10"
                  fill="var(--color-signal-deep)"
                  letterSpacing="0.22em"
                  initial={{ opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.85, ease }}
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
