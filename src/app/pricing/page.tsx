"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SubPage, SectionHeader } from "@/components/SubPage";

const ease = [0.22, 1, 0.36, 1] as const;

type Plan = {
  code: string;
  name: string;
  price: string;
  period: string;
  summary: string;
  features: string[];
  cta: string;
  href: string;
  highlighted: boolean;
  forWho?: string;
};

const plans: Plan[] = [
  {
    code: "STANDARD",
    name: "Standard",
    price: "$49",
    period: "/ seat / month",
    summary: "Everything an operator needs to receive, plan, cut, and ship.",
    forWho: "Small fabricators, single shop floor.",
    features: [
      "Auto Nest + Free-roam",
      "Roll lineage & first-class offcuts",
      "Job lifecycle + customer PDFs",
      "Barcode receiving + scanning",
      "In-app notifications",
      "Six-role RBAC",
    ],
    cta: "Start a trial",
    href: "/pricing#contact",
    highlighted: false,
  },
  {
    code: "PRO",
    name: "Pro",
    price: "$89",
    period: "/ seat / month",
    summary: "Standard plus the analytics and audit depth a manager needs.",
    forWho: "Growing fabricators with multi-operator shops.",
    features: [
      "Everything in Standard",
      "Full analytics + KPI dashboards",
      "Cut-history exports",
      "Supplier price-history reports",
      "Branded customer PDFs",
      "Priority support · same-day response",
      "Custom barcode formats",
    ],
    cta: "Start a trial",
    href: "/pricing#contact",
    highlighted: true,
  },
  {
    code: "MAX",
    name: "Max",
    price: "$199",
    period: "/ seat / month",
    summary: "Pro plus the full CRM + AI nesting engine, fully unlocked.",
    forWho: "Mid-market fabricators with sales pipelines and complex jobs.",
    features: [
      "Everything in Pro",
      "Full CRM (contacts, accounts, pipeline)",
      "AI-augmented planner",
      "Advanced nesting heuristics",
      "Multi-shop coordination",
      "Cross-team operator scheduling",
      "Phone support",
    ],
    cta: "Start a trial",
    href: "/pricing#contact",
    highlighted: false,
  },
  {
    code: "ENTERPRISE",
    name: "Enterprise",
    price: "Custom",
    period: "fixed-rate · 100+ seats",
    summary: "Fixed-rate contracts for organizations with 100+ employees.",
    forWho: "Enterprise manufacturers, regulated industries.",
    features: [
      "Everything in Max",
      "Fixed-rate contract (no per-seat metering)",
      "Dedicated infrastructure",
      "SOC 2 questionnaire support",
      "Custom integrations",
      "Dedicated onboarding partner",
      "Quarterly business reviews",
      "Volume discounting",
    ],
    cta: "Contact sales",
    href: "mailto:sales@rubberfit.app?subject=Enterprise%20pricing%20inquiry",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes — 14 days, full Pro features, no credit card. Run real cuts against real stock; if it doesn't pay for itself in the first week, walk away.",
  },
  {
    q: "How is pricing structured?",
    a: "Per-seat per month, billed monthly. Annual gets a discount (~20%). Each operator who logs in counts as one seat. No per-pack metering, no per-PDF charges, no hidden seat upgrades.",
  },
  {
    q: "What's the difference between Standard, Pro, and Max?",
    a: "Standard runs the floor — receive, plan, cut, ship. Pro adds the analytics and audit depth a manager needs. Max adds the full CRM and the AI-augmented planner. Most shops grow into Pro within a quarter.",
  },
  {
    q: "When does Enterprise make sense?",
    a: "Once you cross 100 employees or run multi-site operations, fixed-rate contracts become more economical and predictable than per-seat. Enterprise also includes SOC 2 questionnaire support, custom integrations, and dedicated onboarding.",
  },
  {
    q: "Can I migrate off another system?",
    a: "Yes. CSV importers for materials, suppliers, and customers ship with every plan. Pro and Max include a guided migration call.",
  },
  {
    q: "Where is data hosted?",
    a: "U.S. region on Supabase (Postgres + Storage). Encrypted at rest by default, RLS on every table, six-role RBAC enforced at the database. See the security page for details.",
  },
];

export default function PricingPage() {
  return (
    <SubPage
      hero={{
        eyebrow: "Pricing",
        title: (
          <>
            One price per operator. <em>No surprises.</em>
          </>
        ),
        lead: "Per-seat, per-month. Most shops start on Standard, grow into Pro within a quarter, and move to Max once the sales pipeline takes off. Enterprise is fixed-rate for organizations with 100+ employees.",
      }}
    >
      {/* Plan grid */}
      <section className="rf-section">
        <div className="rf-wrap">
          <hr style={{ border: 0, borderTop: "1px solid var(--color-graphite)", marginBottom: 56 }} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
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
                  padding: "clamp(28px, 3vw, 40px)",
                  borderRight: "1px solid var(--color-rule)",
                  borderBottom: "1px solid var(--color-rule)",
                  background: p.highlighted ? "var(--color-graphite)" : "transparent",
                  color: p.highlighted ? "#fff" : "inherit",
                  position: "relative",
                  borderTop: p.highlighted ? "3px solid var(--color-signal)" : "0",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    color: p.highlighted ? "var(--color-signal)" : "var(--color-signal-deep)",
                    marginBottom: 14,
                  }}
                >
                  {p.code}
                </div>
                <h3
                  className="rf-h3"
                  style={{
                    color: p.highlighted ? "#fff" : "var(--color-graphite)",
                    marginBottom: 10,
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.55,
                    color: p.highlighted ? "rgba(255,255,255,0.72)" : "var(--color-ink-soft)",
                    marginBottom: 18,
                    minHeight: 64,
                  }}
                >
                  {p.summary}
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 8 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: 40,
                      letterSpacing: "-0.025em",
                      color: p.highlighted ? "#fff" : "var(--color-graphite)",
                    }}
                  >
                    {p.price}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: p.highlighted ? "rgba(255,255,255,0.65)" : "var(--color-ink-soft)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 24,
                  }}
                >
                  {p.period}
                </div>
                <Link
                  href={p.href}
                  className="rf-cta-primary"
                  target={p.href.startsWith("http") || p.href.startsWith("mailto:") ? "_blank" : undefined}
                  rel={p.href.startsWith("http") ? "noreferrer" : undefined}
                  style={{
                    background: p.highlighted ? "var(--color-signal)" : "var(--color-graphite)",
                    borderBottomColor: p.highlighted ? "#fff" : "var(--color-signal)",
                    width: "100%",
                    justifyContent: "center",
                    marginBottom: 24,
                  }}
                >
                  <span>{p.cta}</span>
                  <span className="arrow" aria-hidden="true">→</span>
                </Link>
                {p.forWho ? (
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: p.highlighted ? "var(--color-signal)" : "var(--color-signal-deep)",
                      marginBottom: 12,
                    }}
                  >
                    Best for
                  </div>
                ) : null}
                {p.forWho ? (
                  <p
                    style={{
                      fontSize: 13,
                      lineHeight: 1.5,
                      color: p.highlighted ? "rgba(255,255,255,0.78)" : "var(--color-ink)",
                      marginBottom: 18,
                    }}
                  >
                    {p.forWho}
                  </p>
                ) : null}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {p.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "16px 1fr",
                        gap: 10,
                        fontSize: 13,
                        color: p.highlighted ? "rgba(255,255,255,0.85)" : "var(--color-ink)",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          width: 6,
                          height: 6,
                          background: p.highlighted ? "var(--color-signal)" : "var(--color-signal-deep)",
                          marginTop: 7,
                        }}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Annual discount note */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--color-ink-soft)",
              marginTop: 20,
              textAlign: "center",
            }}
          >
            Annual billing · ≈ 20% discount across all per-seat tiers
          </p>
        </div>
      </section>

      {/* Compare strip */}
      <section className="rf-section" style={{ paddingTop: 0 }}>
        <div className="rf-wrap">
          <SectionHeader
            num="A"
            eyebrow="How we compare"
            title={
              <>
                Where Rubberfit <em>fits the market</em>.
              </>
            }
            body="Rubberfit is the only product that pairs a real Rust nesting engine with a full operations suite. Everyone else is one or the other."
          />
          <div className="rf-stats" style={{ marginTop: 8 }}>
            <div className="rf-stat">
              <div className="rf-stat-label">Free Rhino plugin</div>
              <div className="rf-stat-value mono-data">$0</div>
              <div className="rf-stat-foot">
                CAD-only nesting plugin. No inventory, no jobs, no operator UI.
              </div>
            </div>
            <div className="rf-stat">
              <div className="rf-stat-label">Legacy nesting (ProNest, SigmaNEST)</div>
              <div className="rf-stat-value mono-data">$200<span className="rf-stat-unit">+</span></div>
              <div className="rf-stat-foot">
                Per seat / month. Nesting only. Desktop-only.
              </div>
            </div>
            <div className="rf-stat">
              <div className="rf-stat-label">General manufacturing SaaS</div>
              <div className="rf-stat-value mono-data">$49<span className="rf-stat-unit">–</span>149</div>
              <div className="rf-stat-foot">
                Per seat / month. No real nesting engine — you&apos;d run two products.
              </div>
            </div>
            <div className="rf-stat" style={{ background: "var(--color-graphite)", color: "#fff" }}>
              <div className="rf-stat-label" style={{ color: "var(--color-signal)" }}>Rubberfit</div>
              <div className="rf-stat-value mono-data" style={{ color: "#fff" }}>
                $49<span className="rf-stat-unit" style={{ color: "var(--color-signal)" }}>–</span>199
              </div>
              <div className="rf-stat-foot" style={{ color: "rgba(255,255,255,0.65)" }}>
                Per seat / month. Real nesting + full ops. One product, one bill.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="contact" className="rf-section" style={{ background: "var(--color-surface)" }}>
        <div className="rf-wrap">
          <SectionHeader
            num="B"
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
