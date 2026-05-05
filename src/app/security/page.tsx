"use client";

import { motion } from "framer-motion";
import { SubPage, SectionHeader } from "@/components/SubPage";

const ease = [0.22, 1, 0.36, 1] as const;

const inProductionToday = [
  {
    title: "Row-level security on every table",
    body: "Postgres RLS policies on every customer-facing table — rolls, jobs, POs, cut history, audit log. No app-layer bypass. If the JWT can't see it, the database refuses to return it.",
  },
  {
    title: "Six-role RBAC, enforced twice",
    body: "Roles (super-admin, admin, manager, operator, viewer, customer) are enforced both in middleware (defense in depth) and in RLS policies (last line). Either layer alone is sufficient.",
  },
  {
    title: "Admin audit log",
    body: "Sensitive admin actions write to an audit_log table with before/after JSONB snapshots, IP address, and user agent. Field-level changes captured.",
  },
  {
    title: "Security headers",
    body: "Every response carries a Content Security Policy, X-Frame-Options, HSTS, and a strict referrer policy via dedicated middleware.",
  },
  {
    title: "Signed-URL document sharing",
    body: "Customer-facing PDFs use signed Supabase Storage URLs, not public-by-default access. Cut history and operator notes never leave the firm without explicit export.",
  },
  {
    title: "Auth via Supabase, MFA-capable",
    body: "Authentication uses Supabase Auth (JWT, refresh tokens, secure session cookies). MFA is supported and can be enforced for admin/manager roles.",
  },
];

const notYetCertified = [
  {
    title: "SOC 2 (Type I or Type II)",
    body: "We are not SOC 2 certified yet. We have the technical controls in place; we have not engaged an auditor. We're transparent about this rather than implying otherwise.",
  },
  {
    title: "Formal security policy + risk register",
    body: "We run a strong technical posture but have not yet codified the people-and-process side — formal policies, training records, vendor-risk scoring. On the roadmap.",
  },
  {
    title: "External SIEM / log aggregation",
    body: "Audit log lives in Postgres today. We have not yet wired an external SIEM or long-term log retention pipeline.",
  },
  {
    title: "Forced MFA across the org",
    body: "MFA is supported and recommended; it is not currently enforced as a hard requirement for every role.",
  },
  {
    title: "Penetration testing",
    body: "No third-party penetration test has been conducted. We will commission one as part of SOC 2 preparation.",
  },
];

const roadmap = [
  { code: "Q1", item: "Forced MFA for admin and manager roles" },
  { code: "Q1", item: "Dependency scanning in CI (npm audit + cargo audit, fail on high)" },
  { code: "Q2", item: "Formal security policy + risk register" },
  { code: "Q2", item: "External log aggregation + 1-year retention" },
  { code: "Q3", item: "Third-party penetration test" },
  { code: "Q3", item: "SOC 2 Type I audit engagement" },
  { code: "Q4", item: "SOC 2 Type II observation period begins" },
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
        lead: "We are not SOC 2 certified yet — but we run the controls a SOC 2 auditor would expect to find. This page is the unvarnished version: what's in production today, what's not, and what's on the roadmap to certification.",
      }}
    >
      {/* Honesty banner */}
      <section className="rf-section" style={{ paddingTop: "clamp(40px, 6vw, 72px)", paddingBottom: 0 }}>
        <div className="rf-wrap">
          <motion.div
            className="rf-diagram"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            style={{ borderColor: "var(--color-signal)", borderWidth: 2 }}
          >
            <div className="rf-diagram-header">
              <span style={{ color: "var(--color-signal-deep)" }}>Status · 2026.05</span>
              <span>Honest read</span>
            </div>
            <h3 className="rf-h3" style={{ marginBottom: 10 }}>
              We are not SOC 2 certified.
            </h3>
            <p className="rf-feature-text">
              We have a strong technical security posture, our data lives in
              SOC 2-compliant infrastructure (Supabase / AWS), and we have
              the engineering controls in place. We have not yet engaged a
              SOC 2 auditor, do not have a Type I report, and are not
              representing ourselves as certified. The roadmap below is real
              and tracked.
            </p>
          </motion.div>
        </div>
      </section>

      {/* In production today */}
      <section className="rf-section">
        <div className="rf-wrap">
          <SectionHeader
            num="A"
            eyebrow="In production today"
            title={
              <>
                What we run <em>right now</em>.
              </>
            }
            body="Every item below is shipped, in code, on production. No marketing fluff."
          />
          <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {inProductionToday.map((s, i) => (
              <motion.div
                key={s.title}
                className="rf-diagram"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease }}
              >
                <div className="rf-diagram-header">
                  <span>0{i + 1}</span>
                  <span style={{ color: "var(--color-signal-deep)" }}>· Live</span>
                </div>
                <h3 className="rf-h3" style={{ marginBottom: 10 }}>{s.title}</h3>
                <p className="rf-feature-text">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Not yet */}
      <section className="rf-section" style={{ background: "var(--color-surface)" }}>
        <div className="rf-wrap">
          <SectionHeader
            num="B"
            eyebrow="Not yet in production"
            title={
              <>
                What we don&apos;t have. <em>Yet.</em>
              </>
            }
            body="If a security questionnaire is asking about any of these, the answer is 'not yet, here's the timeline'."
          />
          <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {notYetCertified.map((s, i) => (
              <motion.div
                key={s.title}
                className="rf-diagram"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease }}
                style={{ borderColor: "var(--color-rule-strong)" }}
              >
                <div className="rf-diagram-header">
                  <span>0{i + 1}</span>
                  <span>· Pending</span>
                </div>
                <h3 className="rf-h3" style={{ marginBottom: 10 }}>{s.title}</h3>
                <p className="rf-feature-text">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="rf-section">
        <div className="rf-wrap">
          <SectionHeader
            num="C"
            eyebrow="The roadmap to SOC 2"
            title={
              <>
                Where this <em>is going</em>.
              </>
            }
            body="Each item below has an owner and a target quarter. We update this page when an item ships."
          />
          <div className="rf-diagram">
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" }}>
              {roadmap.map((r, i) => (
                <li
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "60px 1fr",
                    gap: 24,
                    alignItems: "center",
                    padding: "18px 0",
                    borderTop: i === 0 ? "0" : "1px solid var(--color-rule)",
                    fontSize: 16,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: "0.18em",
                      color: "var(--color-signal-deep)",
                    }}
                  >
                    {r.code}
                  </span>
                  <span style={{ color: "var(--color-ink)" }}>{r.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact for security questionnaires */}
      <section className="rf-section" style={{ background: "var(--color-surface)" }}>
        <div className="rf-wrap">
          <div className="fade-up" style={{ textAlign: "center" }}>
            <div className="rf-eyebrow"><span className="tick" aria-hidden="true" /><span>Got a security questionnaire?</span></div>
            <h2 className="rf-h2" style={{ maxWidth: "20ch", margin: "0 auto" }}>
              Talk to us. <em>Directly.</em>
            </h2>
            <p className="rf-body" style={{ margin: "20px auto 28px", maxWidth: "44ch" }}>
              Email <a href="mailto:security@rubberfit.app" style={{ color: "var(--color-signal-deep)", borderBottom: "1px solid currentColor" }}>security@rubberfit.app</a> with your questionnaire. We answer questionnaires honestly, even when the honest answer is &quot;not yet.&quot;
            </p>
          </div>
        </div>
      </section>
    </SubPage>
  );
}
