"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SubPage, SectionHeader } from "@/components/SubPage";

const ease = [0.22, 1, 0.36, 1] as const;

type Plan = {
  code: string;
  name: string;
  price: string;
  annual: string;
  period: string;
  summary: string;
  forWho?: string;
  features: string[];
  cta: string;
  href: string;
  highlighted: boolean;
};

const plans: Plan[] = [
  {
    code: "STANDARD",
    name: "Standard",
    price: "$199",
    annual: "$159",
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
    price: "$349",
    annual: "$279",
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
    price: "$699",
    annual: "$559",
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
    annual: "",
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
    a: "Per-seat per month, billed monthly or annually. Annual gets a 20% discount, paid upfront. Each operator who logs in counts as one seat. No per-pack metering, no per-PDF charges, no hidden seat upgrades.",
  },
  {
    q: "Why is it priced this way?",
    a: "Rubberfit replaces a typical $750-$1000/seat industrial stack (ProNest or SigmaNEST for nesting, plus Plex or Epicor for ops, plus a CRM bolt-on). One product, one bill, one source of truth. Standard customers routinely report material savings of $25K-$50K per optimized job — typical payback is under one shift.",
  },
  {
    q: "What's the difference between Standard, Pro, and Max?",
    a: "Standard runs the floor — receive, plan, cut, ship. Pro adds the analytics and audit depth a manager needs (KPI dashboards, audit-log exports, supplier price-history). Max adds the full CRM and the AI-augmented planner. Most shops grow into Pro within a quarter.",
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
            Priced against the <em>material you save</em>, not the seats you fill.
          </>
        ),
        lead: "Rubberfit replaces a typical $750–$1,000/seat industrial stack with a single product. Per-seat pricing, predictable monthly bill, 20% annual discount. Standard customers routinely report $25K–$50K saved on a single optimized job — typical payback is under one shift.",
      }}
    >
      {/* ONE-JOB PAYBACK */}
      <section className="rf-section" style={{ paddingBottom: 0 }}>
        <div className="rf-wrap">
          <motion.div
            className="rf-diagram"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            style={{
              borderColor: "var(--color-graphite)",
              borderWidth: 1,
              padding: "clamp(28px, 4vw, 48px)",
              background: "var(--color-graphite)",
              color: "#fff",
              marginBottom: 56,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--color-signal)",
                marginBottom: 14,
              }}
            >
              One-job payback
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "clamp(28px, 4vw, 48px)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: "#fff",
                margin: 0,
                marginBottom: 18,
                maxWidth: "32ch",
              }}
            >
              5 seats at Standard pays for itself in <em style={{ color: "var(--color-signal)", fontStyle: "normal" }}>under one shift</em>.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 24,
                marginTop: 24,
                paddingTop: 24,
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-signal)", marginBottom: 8 }}>
                  5 seats at Standard
                </div>
                <div className="mono-data" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 36, letterSpacing: "-0.025em" }}>
                  $995<span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.55)", marginLeft: 6 }}>/ MONTH</span>
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-signal)", marginBottom: 8 }}>
                  Typical material savings
                </div>
                <div className="mono-data" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 36, letterSpacing: "-0.025em" }}>
                  $50K<span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.55)", marginLeft: 6 }}>/ JOB</span>
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-signal)", marginBottom: 8 }}>
                  Time to break even
                </div>
                <div className="mono-data" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 36, letterSpacing: "-0.025em" }}>
                  &lt; 1<span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", color: "rgba(255,255,255,0.55)", marginLeft: 6 }}>SHIFT</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STACK REPLACEMENT */}
      <section className="rf-section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="rf-wrap">
          <SectionHeader
            num="A"
            eyebrow="Stack replacement"
            title={
              <>
                One product. <em>One bill.</em>
              </>
            }
            body="The legacy way: a CAD nesting plugin, a generic MRP, a CRM bolt-on, and the integrations that try to keep them in sync. Rubberfit replaces all three with one product."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 0,
              border: "1px solid var(--color-graphite)",
              background: "var(--color-surface-raised)",
              marginBottom: 56,
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 140px 200px",
                padding: "16px 24px",
                borderBottom: "1px solid var(--color-graphite)",
                background: "var(--color-graphite)",
                color: "#fff",
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
              className="rf-stack-row"
            >
              <span>Vendor</span>
              <span>Covers</span>
              <span style={{ textAlign: "right" }}>Per seat / month</span>
            </div>
            {[
              { vendor: "ProNest or SigmaNEST", covers: "Nesting only", price: "$250–$500", muted: false },
              { vendor: "Plex / Epicor / E2 (MRP)", covers: "Inventory + jobs", price: "$150–$300", muted: false },
              { vendor: "Salesforce / HubSpot (CRM)", covers: "Sales pipeline", price: "$100–$300", muted: false },
              { vendor: "Integration / glue", covers: "Keeping them in sync", price: "$50–$200", muted: false },
            ].map((r) => (
              <div
                key={r.vendor}
                className="rf-stack-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 140px 200px",
                  padding: "18px 24px",
                  borderBottom: "1px solid var(--color-rule)",
                  alignItems: "center",
                  fontSize: 14,
                  color: "var(--color-ink-soft)",
                }}
              >
                <span>{r.vendor}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--color-ink-soft)" }}>
                  {r.covers}
                </span>
                <span
                  className="mono-data"
                  style={{
                    textAlign: "right",
                    fontFamily: "var(--font-mono)",
                    color: "var(--color-ink)",
                  }}
                >
                  {r.price}
                </span>
              </div>
            ))}
            <div
              className="rf-stack-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 140px 200px",
                padding: "20px 24px",
                borderTop: "2px solid var(--color-graphite)",
                background: "var(--color-canvas)",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-ink-soft)",
                alignItems: "center",
              }}
            >
              <span>Legacy stack total</span>
              <span></span>
              <span
                className="mono-data"
                style={{
                  textAlign: "right",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 22,
                  letterSpacing: "-0.02em",
                  textTransform: "none",
                  color: "var(--color-ink)",
                }}
              >
                $550–$1,300
              </span>
            </div>
            <div
              className="rf-stack-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 140px 200px",
                padding: "24px",
                background: "var(--color-graphite)",
                color: "#fff",
                alignItems: "center",
                borderTop: "3px solid var(--color-signal)",
              }}
            >
              <span style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600 }}>
                Rubberfit · one product
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--color-signal)" }}>
                Everything
              </span>
              <span
                className="mono-data"
                style={{
                  textAlign: "right",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: 22,
                  letterSpacing: "-0.02em",
                  color: "#fff",
                }}
              >
                $199–$699
              </span>
            </div>
          </div>
        </div>

        {/* responsive: stack columns on narrow screens */}
        <style>{`
          @media (max-width: 720px) {
            .rf-stack-row {
              grid-template-columns: 1fr 1fr !important;
              gap: 6px;
            }
            .rf-stack-row > span:nth-child(2) {
              display: none;
            }
          }
        `}</style>
      </section>

      {/* PLANS */}
      <section className="rf-section">
        <div className="rf-wrap">
          <SectionHeader
            num="B"
            eyebrow="Plans"
            title={
              <>
                Per-seat. <em>No surprises.</em>
              </>
            }
            body="Monthly numbers below. Annual billing carries a 20% discount, paid upfront — that's the figure in the small print."
          />

          <div
            className="rf-tier-grid"
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
                className={`rf-tier${p.highlighted ? " rf-tier--highlighted" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.07, ease }}
              >
                <div className="rf-tier-num">{p.code}</div>
                <h3 className="rf-h3 rf-tier-title">{p.name}</h3>
                <p className="rf-tier-summary">{p.summary}</p>

                <div className="rf-tier-price-row">
                  <span className="rf-tier-price">{p.price}</span>
                </div>
                <div className="rf-tier-period">{p.period}</div>
                {p.annual ? (
                  <div className="rf-tier-annual">
                    {p.annual} / seat / mo · billed annually
                  </div>
                ) : (
                  <div style={{ marginBottom: 24 }} />
                )}

                <Link
                  href={p.href}
                  className="rf-tier-cta"
                  target={
                    p.href.startsWith("http") || p.href.startsWith("mailto:")
                      ? "_blank"
                      : undefined
                  }
                  rel={p.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span>{p.cta}</span>
                  <span className="arrow" aria-hidden="true">→</span>
                </Link>

                {p.forWho ? (
                  <>
                    <div className="rf-tier-best-label">Best for</div>
                    <p className="rf-tier-best-text">{p.forWho}</p>
                  </>
                ) : null}

                <ul className="rf-tier-features">
                  {p.features.map((f) => (
                    <li key={f} className="rf-tier-feature">
                      <span className="rf-tier-feature-dot" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

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
            Annual billing · 20% discount · Paid upfront
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section id="contact" className="rf-section" style={{ background: "var(--color-surface)" }}>
        <div className="rf-wrap">
          <SectionHeader
            num="C"
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
