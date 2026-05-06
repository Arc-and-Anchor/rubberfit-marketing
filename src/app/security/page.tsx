"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SubPage, SectionHeader } from "@/components/SubPage";
import { SecurityVisual } from "@/components/SecurityVisual";

const ease = [0.22, 1, 0.36, 1] as const;

const previewItems = [
  {
    n: "01",
    title: "Row-level security on every table",
    body: "Postgres RLS policies on every customer-facing table. No app-layer bypass.",
  },
  {
    n: "02",
    title: "Six-role RBAC, enforced twice",
    body: "Middleware + RLS policies. Either layer alone is sufficient.",
  },
  {
    n: "03",
    title: "Admin audit log",
    body: "Before/after JSONB snapshots, IP, user agent. Field-level changes captured.",
  },
  {
    n: "04",
    title: "Signed-URL document sharing",
    body: "Customer PDFs share via signed URLs, not public-by-default access.",
  },
];

export default function SecurityPage() {
  return (
    <SubPage
      hero={{
        eyebrow: "Security",
        title: (
          <>
            Strong posture. <em>Honest about what we are.</em>
          </>
        ),
        lead: "Rubberfit runs the technical controls a SOC 2 auditor would expect — RLS at the database, six-role RBAC enforced twice, audit log with before/after JSONB snapshots, signed-URL document sharing, encryption at rest. We are not SOC 2 certified yet; the full unvarnished posture and roadmap live in the docs.",
      }}
    >
      {/* Visual */}
      <section className="rf-section" style={{ paddingTop: "clamp(48px, 6vw, 72px)", paddingBottom: 0 }}>
        <div className="rf-wrap">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease }}
          >
            <SecurityVisual />
          </motion.div>
        </div>
      </section>

      {/* Quick preview of the four headlines */}
      <section className="rf-section">
        <div className="rf-wrap">
          <SectionHeader
            num="A"
            eyebrow="What's shipped today"
            title={
              <>
                Four headlines. <em>Full inventory in the docs.</em>
              </>
            }
            body="The technical controls, the gaps, and the SOC 2 roadmap each get their own page in the docs site — including the parts that don't pass a security questionnaire today."
          />

          <div
            style={{
              display: "grid",
              gap: 18,
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {previewItems.map((p, i) => (
              <motion.div
                key={p.n}
                className="rf-diagram"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease }}
              >
                <div className="rf-diagram-header">
                  <span>{p.n}</span>
                  <span style={{ color: "var(--color-signal-deep)" }}>· Live</span>
                </div>
                <h3 className="rf-h3" style={{ marginBottom: 10 }}>{p.title}</h3>
                <p className="rf-feature-text">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Docs cross-link */}
      <section className="rf-section" style={{ background: "var(--color-surface)" }}>
        <div className="rf-wrap">
          <div className="fade-up" style={{ textAlign: "center", maxWidth: "60ch", margin: "0 auto" }}>
            <div className="rf-eyebrow" style={{ justifyContent: "center" }}>
              <span className="tick" aria-hidden="true" />
              <span>The full read · docs.rubberfit.app</span>
            </div>
            <h2 className="rf-h2">
              Three pages. <em>One honest write-up.</em>
            </h2>
            <p className="rf-body" style={{ margin: "20px auto 36px" }}>
              The full security posture, the SOC 2 roadmap, and the data-handling
              specifics — including what is <em>not</em> yet shipped — live on the docs site so a security questionnaire can paste a single URL into the response field.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <Link
                href="https://docs.rubberfit.app/security/posture"
                className="rf-cta-primary"
                target="_blank"
                rel="noreferrer"
              >
                <span>Read the full posture</span>
                <span className="arrow" aria-hidden="true">↗</span>
              </Link>
              <Link
                href="https://docs.rubberfit.app/security/soc2-roadmap"
                className="rf-cta-secondary"
                target="_blank"
                rel="noreferrer"
              >
                <span>SOC 2 roadmap</span>
              </Link>
            </div>
            <p
              style={{
                marginTop: 32,
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-ink-soft)",
              }}
            >
              Got a questionnaire? Email{" "}
              <a
                href="mailto:security@rubberfit.app"
                style={{ color: "var(--color-signal-deep)", borderBottom: "1px solid currentColor" }}
              >
                security@rubberfit.app
              </a>
            </p>
          </div>
        </div>
      </section>
    </SubPage>
  );
}
