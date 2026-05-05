"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SubPage, SectionHeader } from "@/components/SubPage";

const ease = [0.22, 1, 0.36, 1] as const;

const plans = [
  {
    code: "STARTER",
    name: "Starter",
    price: "$249",
    period: "/ month",
    summary: "For small fabricators running a single shop floor.",
    features: [
      "Up to 3 operators",
      "Up to 200 jobs / month",
      "Auto Nest + Free-roam",
      "Customer-facing PDF receipts",
      "In-app notifications",
      "Standard support",
    ],
    cta: "Start free trial",
    href: "https://app.rubberfit.app/signup?plan=starter",
    highlighted: false,
  },
  {
    code: "PROFESSIONAL",
    name: "Professional",
    price: "$649",
    period: "/ month",
    summary: "For growing fabricators with audit and operator-tracking needs.",
    features: [
      "Up to 12 operators",
      "Up to 1,500 jobs / month",
      "Everything in Starter",
      "Full audit log + cut-history exports",
      "Reorder rules + supplier price history",
      "Priority support · same-day response",
      "Custom branded customer PDFs",
    ],
    cta: "Start free trial",
    href: "https://app.rubberfit.app/signup?plan=pro",
    highlighted: true,
  },
  {
    code: "ENTERPRISE",
    name: "Enterprise",
    price: "Custom",
    period: "",
    summary: "For multi-shop operations or regulated industries.",
    features: [
      "Unlimited operators",
      "Unlimited jobs",
      "Everything in Professional",
      "Dedicated infrastructure",
      "SOC 2 questionnaire support",
      "Custom integrations",
      "Onboarding + change-management partnership",
      "Quarterly business reviews",
    ],
    cta: "Talk to sales",
    href: "mailto:sales@rubberfit.app?subject=Enterprise%20pricing",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes — 14 days, full Professional features, no credit card. Run real cuts against real stock; if it doesn't pay for itself in the first week, walk.",
  },
  {
    q: "How is pricing structured?",
    a: "Per-shop monthly subscription. The Starter and Professional tiers are flat — predictable monthly bill, no per-pack-call fees, no per-PDF charges. Enterprise is bespoke.",
  },
  {
    q: "What counts as a 'job'?",
    a: "A job is one customer order. Multi-line orders count as one job. Re-cuts off the same job don't count again.",
  },
  {
    q: "Can I migrate off another system?",
    a: "Yes. We provide a CSV importer for materials, suppliers, and customers, and a guided migration call for Professional and Enterprise customers.",
  },
  {
    q: "Where is data hosted?",
    a: "U.S. region on Supabase (Postgres + Storage). Data is encrypted at rest by default. See the security page for details.",
  },
  {
    q: "What if my shop has more than 12 operators?",
    a: "Move to Enterprise. We won't soft-cap you in the middle of a busy day.",
  },
];

export default function PricingPage() {
  return (
    <SubPage
      hero={{
        eyebrow: "Pricing",
        title: (
          <>
            Predictable monthly bill. <em>No surprises.</em>
          </>
        ),
        lead: "Three tiers. No per-pack metering, no PDF surcharges, no seat upgrades hidden behind a sales call. The price you see is the price you pay.",
      }}
    >
      {/* Plan grid */}
      <section className="rf-section">
        <div className="rf-wrap">
          <hr style={{ border: 0, borderTop: "1px solid var(--color-graphite)", marginBottom: 56 }} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 0,
              border: "1px solid var(--color-graphite)",
              background: "var(--color-surface-raised)",
            }}
          >
            {plans.map((p, i) => (
              <motion.div
                key={p.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.07, ease }}
                style={{
                  padding: "clamp(28px, 3.5vw, 44px)",
                  borderRight: "1px solid var(--color-rule)",
                  background: p.highlighted ? "var(--color-graphite)" : "transparent",
                  color: p.highlighted ? "#fff" : "inherit",
                  position: "relative",
                  borderTop: p.highlighted ? "3px solid var(--color-signal)" : "0",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    color: p.highlighted ? "var(--color-signal)" : "var(--color-signal-deep)",
                    marginBottom: 12,
                  }}
                >
                  {p.code}
                </div>
                <h3
                  className="rf-h3"
                  style={{
                    color: p.highlighted ? "#fff" : "var(--color-graphite)",
                    marginBottom: 8,
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: p.highlighted ? "rgba(255,255,255,0.7)" : "var(--color-ink-soft)",
                    marginBottom: 18,
                    minHeight: 44,
                  }}
                >
                  {p.summary}
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 24 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: 44,
                      letterSpacing: "-0.025em",
                      color: p.highlighted ? "#fff" : "var(--color-graphite)",
                    }}
                  >
                    {p.price}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: p.highlighted ? "rgba(255,255,255,0.6)" : "var(--color-ink-soft)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.period}
                  </span>
                </div>
                <Link
                  href={p.href}
                  className="rf-cta-primary"
                  target={p.href.startsWith("http") ? "_blank" : undefined}
                  rel={p.href.startsWith("http") ? "noreferrer" : undefined}
                  style={{
                    background: p.highlighted ? "var(--color-signal)" : "var(--color-graphite)",
                    borderBottomColor: p.highlighted ? "#fff" : "var(--color-signal)",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <span>{p.cta}</span>
                  <span className="arrow" aria-hidden="true">→</span>
                </Link>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "28px 0 0 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {p.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "16px 1fr",
                        gap: 10,
                        fontSize: 14,
                        color: p.highlighted ? "rgba(255,255,255,0.85)" : "var(--color-ink)",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          width: 6,
                          height: 6,
                          background: p.highlighted ? "var(--color-signal)" : "var(--color-signal-deep)",
                          marginTop: 8,
                        }}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="rf-section" style={{ background: "var(--color-surface)" }}>
        <div className="rf-wrap">
          <SectionHeader
            num="A"
            eyebrow="Common questions"
            title={
              <>
                Things <em>everyone</em> asks.
              </>
            }
          />
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            {faqs.map((f) => (
              <div key={f.q} className="rf-diagram">
                <h3 className="rf-h3" style={{ marginBottom: 10 }}>{f.q}</h3>
                <p className="rf-feature-text">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SubPage>
  );
}
