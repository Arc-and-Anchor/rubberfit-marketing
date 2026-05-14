"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SubPage } from "@/components/SubPage";

const ease = [0.22, 1, 0.36, 1] as const;

const sections = [
  { id: "s01", num: "§01", title: "Who we are" },
  { id: "s02", num: "§02", title: "What we collect" },
  { id: "s03", num: "§03", title: "How we use it" },
  { id: "s04", num: "§04", title: "Sub-processors" },
  { id: "s05", num: "§05", title: "Cookies" },
  { id: "s06", num: "§06", title: "Retention" },
  { id: "s07", num: "§07", title: "Your rights" },
  { id: "s08", num: "§08", title: "Security" },
  { id: "s09", num: "§09", title: "Changes" },
  { id: "s10", num: "§10", title: "Contact" },
];

export default function PrivacyPage() {
  const [activeId, setActiveId] = useState<string>("s01");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <SubPage
      hideCtaSection
      hero={{
        eyebrow: "LEGAL · PRIVACY POLICY",
        title: "Privacy Policy",
        lead: "How Rubberfit collects, uses, and protects your data. Effective 2026-05-13.",
      }}
    >
      <section className="rf-section" style={{ paddingTop: "clamp(32px, 4vw, 56px)" }}>
        <div className="rf-wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(32px, 4vw, 56px)" }}>
            {/* Mobile TOC */}
            <nav
              aria-label="Privacy policy contents (mobile)"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-ink-faint)",
                borderBottom: "1px solid var(--color-rule)",
                paddingBottom: 24,
              }}
              className="mobile-toc"
            >
              <div style={{ marginBottom: 12 }}>Contents</div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px 16px",
                }}
              >
                {sections.map((s) => (
                  <Link
                    key={s.id}
                    href={`#${s.id}`}
                    aria-label={`${s.num} ${s.title}`}
                    aria-current={activeId === s.id ? "location" : undefined}
                    style={{
                      color: activeId === s.id ? "var(--color-signal-deep)" : "var(--color-ink-soft)",
                      transition: "color 150ms ease",
                    }}
                  >
                    {s.num}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="legal-layout">
              {/* Desktop sticky TOC */}
              <nav
                aria-label="Privacy policy contents"
                className="desktop-toc"
                style={{
                  position: "sticky",
                  top: 96,
                  alignSelf: "start",
                  height: "fit-content",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--color-ink-faint)",
                    marginBottom: 20,
                    paddingBottom: 12,
                    borderBottom: "1px solid var(--color-rule)",
                  }}
                >
                  Contents
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  {sections.map((s) => (
                    <li key={s.id}>
                      <Link
                        href={`#${s.id}`}
                        aria-current={activeId === s.id ? "location" : undefined}
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: 10,
                          fontFamily: "var(--font-mono)",
                          fontSize: 12,
                          letterSpacing: "0.08em",
                          color: activeId === s.id ? "var(--color-ink)" : "var(--color-ink-faint)",
                          padding: "4px 0",
                          transition: "color 150ms ease",
                          borderLeft: activeId === s.id ? "2px solid var(--color-signal)" : "2px solid transparent",
                          paddingLeft: activeId === s.id ? 10 : 12,
                          marginLeft: activeId === s.id ? -2 : 0,
                        }}
                      >
                        <span style={{ fontSize: 11, color: activeId === s.id ? "var(--color-signal-deep)" : "inherit" }}>
                          {s.num}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: 13,
                            letterSpacing: "0",
                            textTransform: "none",
                            fontWeight: activeId === s.id ? 500 : 400,
                          }}
                        >
                          {s.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Main content */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                }}
              >
                <LegalSection id="s01" num="§01" title="Who we are">
                  <p>
                    Rubberfit is operated by Arc & Anchor, a Nevada-based software firm. When you use the application at <code>rubberfit.app</code> or any of its subdomains, Arc & Anchor is the controller of the personal data described in this policy. You can reach us at <a href="mailto:legal@rubberfit.app">legal@rubberfit.app</a> (privacy questions) or <a href="mailto:security@rubberfit.app">security@rubberfit.app</a> (security questionnaires).
                  </p>
                </LegalSection>

                <LegalSection id="s02" num="§02" title="What we collect">
                  <ul className="legal-list">
                    <li>
                      <strong>Account data.</strong> Email, name, organization name, and password hash. When you sign in with Google OAuth, we receive your email and name; we do not store the OAuth credential itself.
                    </li>
                    <li>
                      <strong>Workspace content.</strong> The inventory, jobs, customers, cut histories, and PDFs you create inside the application. This is your data — we process it on your behalf.
                    </li>
                    <li>
                      <strong>Billing data.</strong> Subscription plan, billing cycle, seat count, and Stripe customer ID. Card numbers, expiration dates, and ZIP codes never touch our servers; Stripe is the processor of record.
                    </li>
                    <li>
                      <strong>Usage telemetry.</strong> Anonymized request paths, error traces, and aggregate performance metrics. No session replay, no third-party analytics on the dashboard. Marketing pages use Vercel Analytics, which is cookieless.
                    </li>
                    <li>
                      <strong>Support correspondence.</strong> Emails you send to <a href="mailto:support@rubberfit.app">support@rubberfit.app</a>, <a href="mailto:security@rubberfit.app">security@rubberfit.app</a>, or <a href="mailto:legal@rubberfit.app">legal@rubberfit.app</a>.
                    </li>
                  </ul>
                </LegalSection>

                <LegalSection id="s03" num="§03" title="How we use it">
                  <p>
                    We use this data to deliver and operate the application, send transactional email (magic links, billing receipts, password resets), respond to support and security questions, bill your subscription, prevent abuse, and meet legal obligations. We do not use customer data to train models. We do not sell or rent data to third parties.
                  </p>
                </LegalSection>

                <LegalSection id="s04" num="§04" title="Sub-processors">
                  <div className="legal-table-wrap">
                    <table className="legal-table">
                      <caption className="sr-only">Sub-processors that touch customer data</caption>
                      <thead>
                        <tr>
                          <th scope="col">Vendor</th>
                          <th scope="col">Purpose</th>
                          <th scope="col">Region</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Vercel</th>
                          <td>Web hosting + Fluid Compute</td>
                          <td>U.S. (iad1)</td>
                        </tr>
                        <tr>
                          <th scope="row">Supabase</th>
                          <td>Postgres database, Auth, Storage</td>
                          <td>U.S. (us-east-1)</td>
                        </tr>
                        <tr>
                          <th scope="row">AWS</th>
                          <td>Underlying compute and storage for Supabase</td>
                          <td>U.S. (us-east-1)</td>
                        </tr>
                        <tr>
                          <th scope="row">Resend</th>
                          <td>Transactional email</td>
                          <td>U.S.</td>
                        </tr>
                        <tr>
                          <th scope="row">Stripe</th>
                          <td>Subscription billing and payment processing</td>
                          <td>U.S.</td>
                        </tr>
                        <tr>
                          <th scope="row">Cloudflare</th>
                          <td>DNS for rubberfit.app and subdomains</td>
                          <td>Global</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p style={{ marginTop: 16, fontSize: 14 }}>
                    All sub-processors publish their own SOC 2 reports. No customer data leaves the U.S.
                  </p>
                </LegalSection>

                <LegalSection id="s05" num="§05" title="Cookies">
                  <p>
                    We use a session cookie and a refresh cookie to keep you logged in. Both are <code>HttpOnly</code>, <code>Secure</code>, and <code>SameSite=Lax</code>. We do not use third-party advertising cookies on the application. Marketing pages may set a cookieless analytics identifier via Vercel Analytics.
                  </p>
                </LegalSection>

                <LegalSection id="s06" num="§06" title="Retention">
                  <div className="legal-table-wrap">
                    <table className="legal-table">
                      <caption className="sr-only">Retention windows by data class</caption>
                      <thead>
                        <tr>
                          <th scope="col">Class</th>
                          <th scope="col">Window</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Active inventory, jobs, customers, cut history</th>
                          <td>While the workspace is active</td>
                        </tr>
                        <tr>
                          <th scope="row">Admin audit log</th>
                          <td>Indefinite — required for compliance</td>
                        </tr>
                        <tr>
                          <th scope="row">Notifications</th>
                          <td>90 days</td>
                        </tr>
                        <tr>
                          <th scope="row">Email transcripts at Resend</th>
                          <td>30 days</td>
                        </tr>
                        <tr>
                          <th scope="row">Vercel access logs</th>
                          <td>30 days</td>
                        </tr>
                        <tr>
                          <th scope="row">Supabase database logs</th>
                          <td>7 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p style={{ marginTop: 16, fontSize: 14 }}>
                    When a workspace is deleted, all associated workspace content is removed within 30 days. Audit-log entries that reference a deleted user are anonymized so the audit chain remains intact.
                  </p>
                </LegalSection>

                <LegalSection id="s07" num="§07" title="Your rights">
                  <p>
                    You can request a full data export from <code>Settings → Data → Export</code> inside the application, or by emailing <a href="mailto:legal@rubberfit.app">legal@rubberfit.app</a>. You can request hard deletion of your workspace and all associated personal data by the same email; we complete the deletion within 30 days. If you are a California resident, you have the rights granted under the CCPA, including the right to know, the right to delete, and the right to non-discrimination for exercising those rights. We do not sell personal information.
                  </p>
                </LegalSection>

                <LegalSection id="s08" num="§08" title="Security">
                  <p>
                    The technical controls behind this policy — Postgres RLS, six-role RBAC, audit log, signed-URL document sharing, encryption at rest — are documented at <Link href="/security">/security</Link> and in the docs site under <code>docs.rubberfit.app/security/posture</code>.
                  </p>
                </LegalSection>

                <LegalSection id="s09" num="§09" title="Changes">
                  <p>
                    We will update this policy when we change the underlying practices. The &ldquo;Effective&rdquo; date at the top reflects the version currently in force. Material changes will be announced by email to workspace owners and noted on the application sign-in page.
                  </p>
                </LegalSection>

                <LegalSection id="s10" num="§10" title="Contact">
                  <p>
                    <a href="mailto:legal@rubberfit.app">legal@rubberfit.app</a> · Arc & Anchor · Las Vegas, NV, USA.
                  </p>
                </LegalSection>

                {/* Closing block */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, ease }}
                  style={{
                    marginTop: "clamp(40px, 5vw, 64px)",
                    paddingTop: 32,
                    borderTop: "1px solid var(--color-rule)",
                    textAlign: "center",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    letterSpacing: "0.1em",
                    color: "var(--color-ink-faint)",
                    lineHeight: 1.8,
                  }}
                >
                  <div>Last updated: 2026-05-13 · Effective: 2026-05-13</div>
                  <div>
                    Questions? <a href="mailto:legal@rubberfit.app" style={{ color: "var(--color-signal-deep)" }}>legal@rubberfit.app</a>
                  </div>
                  <div style={{ marginTop: 8, fontSize: 11, letterSpacing: "0.06em" }}>
                    This document is governed by the laws of the State of Nevada, USA.
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SubPage>
  );
}

function LegalSection({
  id,
  num,
  title,
  children,
}: {
  id: string;
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="legal-section"
      aria-labelledby={`${id}-title`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease }}
      style={{
        paddingTop: "clamp(32px, 4vw, 48px)",
        paddingBottom: "clamp(32px, 4vw, 48px)",
        borderBottom: "1px solid var(--color-rule)",
      }}
    >
      <h2
        id={`${id}-title`}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(22px, 2.2vw, 28px)",
          fontWeight: 600,
          lineHeight: 1.25,
          color: "var(--color-ink)",
          margin: "0 0 clamp(16px, 2vw, 24px) 0",
          display: "flex",
          alignItems: "baseline",
          gap: 14,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "0.12em",
            color: "var(--color-signal-deep)",
            flexShrink: 0,
          }}
        >
          {num}
        </span>
        {title}
      </h2>
      <div
        style={{
          fontSize: 15,
          lineHeight: 1.7,
          color: "var(--color-ink)",
          maxWidth: "65ch",
        }}
        className="legal-body"
      >
        {children}
      </div>
    </motion.section>
  );
}
