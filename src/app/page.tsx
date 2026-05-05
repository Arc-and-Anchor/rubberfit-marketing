"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";
import { NestDemo } from "@/components/NestDemo";

const ease = [0.25, 1, 0.5, 1] as const;

const stats = [
  { label: "Material waste cut", value: "31", unit: "%", foot: "vs. legacy hand-planning across pilot lines." },
  { label: "Plans per shift", value: "12×", unit: "", foot: "Operators clear a queue that used to take a full day." },
  { label: "Active SKU shapes", value: "240", unit: "+", foot: "Mixed convex / concave parts. Rotation-aware." },
  { label: "Audit trail", value: "100", unit: "%", foot: "Every cut, every barcode, every operator. Forever." },
];

const features = [
  {
    num: "01",
    title: "Rust nesting engine",
    text: "FFD bin-assignment, 2D grid warm-start, sparrow-style guided local search, cross-bin swap orchestrator. Built in Rust because the inner loop runs millions of geometry checks per pack.",
    meta: ["Throughput", "≤ 2.4s / sheet", "Languages", "Rust + TypeScript"],
  },
  {
    num: "02",
    title: "Operator-grade UI",
    text: "Built for the floor, not the boardroom. Barcode-driven receiving, drag-to-pack overrides, auto-boost on overflow, and a Pack button that means business — no live-load latency.",
    meta: ["Frame", "Next.js 16 · React 19", "Inputs", "Barcode · Touch · Keyboard"],
  },
  {
    num: "03",
    title: "Audit-ready by default",
    text: "Every cut is recorded. Every roll is reconciled. Every layout is replayable from cut_history straight back to the original pack request — no drift, no doubt, no missing minutes.",
    meta: ["Storage", "Postgres · Supabase", "RBAC", "Six-role hierarchy"],
  },
  {
    num: "04",
    title: "AI-augmented planner",
    text: "An optional planner reads incoming POs and proposes a pack order before the operator even logs in. The operator stays in charge — but the queue is already half done.",
    meta: ["Models", "Multi-provider", "Default", "Off — opt-in per workspace"],
  },
];

const flow = [
  {
    code: "STEP 01",
    title: "Receive",
    text: "Scan rolls in. Length, width, durometer, and lot are captured at the dock — no manual entry.",
  },
  {
    code: "STEP 02",
    title: "Plan",
    text: "Operators select parts, dial in stock, and press Pack. The Rust engine returns a layout in under three seconds.",
  },
  {
    code: "STEP 03",
    title: "Cut",
    text: "Layouts print to the floor as a numbered cut list. Operators check off parts as they go — every part scanned, every offcut tracked.",
  },
  {
    code: "STEP 04",
    title: "Ship",
    text: "Finished parts roll into shipping with their barcode lineage intact. Customer PDFs auto-generate with no nesting diagrams attached.",
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
                rubber-roll fabricators. A Rust nesting engine plus an
                AI-augmented planner turn raw stock into operator-grade cut
                layouts — audit-ready, barcode-tracked, and dangerously fast.
              </motion.p>

              <motion.div
                className="rf-hero-actions"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.36, ease }}
              >
                <Link
                  href="https://rubberfit.app/login"
                  className="rf-cta-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Open the app</span>
                  <span className="arrow" aria-hidden="true">→</span>
                </Link>
                <a href="#features" className="rf-cta-secondary">
                  See the engine
                </a>
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

      {/* FEATURES */}
      <section id="features" className="rf-section">
        <div className="rf-wrap">
          <div className="fade-up" style={{ marginBottom: 56, maxWidth: "60ch" }}>
            <div className="rf-eyebrow">
              <span className="tick" aria-hidden="true" />
              <span>The engine · 04 components</span>
            </div>
            <h2 className="rf-h2">
              Software that takes <em>cutting</em> seriously.
            </h2>
            <p className="rf-body" style={{ marginTop: 16 }}>
              We didn’t build a generic ERP with a nesting bolt-on. Rubberfit
              is a single integrated stack — engine, UI, and audit trail —
              designed around how a rubber fabricator actually moves material.
            </p>
          </div>

          <div>
            {features.map((f, i) => (
              <motion.div
                key={f.num}
                className="rf-feature-row"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.07, ease }}
              >
                <div className="rf-feature-num">{f.num}</div>
                <div>
                  <h3 className="rf-feature-title">{f.title}</h3>
                </div>
                <p className="rf-feature-text">{f.text}</p>
                <div className="rf-feature-meta">
                  {f.meta.reduce<{ k: string; v: string }[]>(
                    (acc, val, idx) => {
                      if (idx % 2 === 0) acc.push({ k: val, v: "" });
                      else acc[acc.length - 1].v = val;
                      return acc;
                    },
                    []
                  ).map(({ k, v }) => (
                    <div key={k}>
                      {k} · <strong>{v}</strong>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section id="flow" className="rf-section" style={{ background: "var(--color-surface)" }}>
        <div className="rf-wrap">
          <div className="fade-up" style={{ marginBottom: 56, maxWidth: "60ch" }}>
            <div className="rf-eyebrow">
              <span className="tick" aria-hidden="true" />
              <span>How it ships · Receiving → Shipping</span>
            </div>
            <h2 className="rf-h2">
              Four steps. <em>One spine.</em>
            </h2>
            <p className="rf-body" style={{ marginTop: 16 }}>
              From the moment a roll hits the dock to the moment a cut part
              ships, every step is one query away — to the operator who needs
              it, to the supervisor who signs off on it, to the customer who
              ordered it.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 18,
            }}
          >
            <div
              style={{
                display: "grid",
                gap: 18,
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              }}
            >
              {flow.map((s, i) => (
                <motion.div
                  key={s.code}
                  className="rf-diagram"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease }}
                >
                  <div className="rf-diagram-header">
                    <span>{s.code}</span>
                    <span>0{i + 1} / 04</span>
                  </div>
                  <h3 className="rf-h3" style={{ marginBottom: 10 }}>
                    {s.title}
                  </h3>
                  <p className="rf-feature-text">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM / CREDIT */}
      <section id="team" className="rf-section">
        <div className="rf-wrap">
          <div
            className="fade-up"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 36,
              alignItems: "center",
            }}
          >
            <div>
              <div className="rf-eyebrow">
                <span className="tick" aria-hidden="true" />
                <span>The makers · Arc &amp; Anchor</span>
              </div>
              <h2 className="rf-h2">
                Built by a small team that <em>signs every cut</em>.
              </h2>
              <p className="rf-body" style={{ marginTop: 16, marginBottom: 28 }}>
                Rubberfit isn’t a bolt-on, an acquisition, or a side project.
                It’s an Arc &amp; Anchor original — designed, built, and
                maintained by the same five people who answer the support
                email.
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
        </div>
      </section>

      {/* CTA */}
      <section className="rf-section" style={{ background: "var(--color-graphite)", color: "#fff" }}>
        <div className="rf-wrap">
          <div className="fade-up" style={{ textAlign: "center" }}>
            <div
              className="rf-eyebrow"
              style={{ color: "#bcbfc6" }}
            >
              <span className="tick" aria-hidden="true" />
              <span>Ready when you are</span>
            </div>
            <h2
              className="rf-h2"
              style={{ color: "#fff", maxWidth: "20ch", margin: "0 auto" }}
            >
              Stop wasting <em style={{ color: "var(--color-signal)" }}>material</em>.
            </h2>
            <p
              className="rf-body"
              style={{
                color: "#bcbfc6",
                margin: "20px auto 36px",
                maxWidth: "44ch",
              }}
            >
              Open the app and run a real cut plan against your own stock.
              Takes ten minutes. No sales call required.
            </p>
            <Link
              href="https://rubberfit.app/login"
              className="rf-cta-primary"
              style={{ background: "var(--color-signal)", borderBottomColor: "#fff" }}
              target="_blank"
              rel="noreferrer"
            >
              <span>Open the app</span>
              <span className="arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
