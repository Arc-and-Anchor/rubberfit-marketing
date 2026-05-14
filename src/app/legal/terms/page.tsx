"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SubPage } from "@/components/SubPage";

const ease = [0.22, 1, 0.36, 1] as const;

const sections = [
  { id: "s01", num: "01", title: "Acceptance" },
  { id: "s02", num: "02", title: "The service" },
  { id: "s03", num: "03", title: "Accounts" },
  { id: "s04", num: "04", title: "Subscription, billing, and trials" },
  { id: "s05", num: "05", title: "Acceptable use" },
  { id: "s06", num: "06", title: "Your data" },
  { id: "s07", num: "07", title: "Intellectual property" },
  { id: "s08", num: "08", title: "Confidentiality" },
  { id: "s09", num: "09", title: "Term and termination" },
  { id: "s10", num: "10", title: "Disclaimer of warranties" },
  { id: "s11", num: "11", title: "Limitation of liability" },
  { id: "s12", num: "12", title: "Indemnification" },
  { id: "s13", num: "13", title: "Governing law" },
  { id: "s14", num: "14", title: "Changes to these Terms" },
  { id: "s15", num: "15", title: "Contact" },
];

export default function TermsPage() {
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
        eyebrow: "LEGAL · TERMS OF SERVICE",
        title: "Terms of Service",
        lead: "The rules that govern use of the Rubberfit application. Effective 2026-05-13.",
      }}
    >
      <section className="rf-section" style={{ paddingTop: "clamp(32px, 4vw, 56px)" }}>
        <div className="rf-wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(32px, 4vw, 56px)" }}>
            {/* Mobile TOC */}
            <nav
              aria-label="Terms of service contents (mobile)"
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
                aria-label="Terms of service contents"
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
                <LegalSection id="s01" num="01" title="Acceptance">
                  <p>
                    By creating an account or using Rubberfit, you agree to these Terms. If you are using Rubberfit on behalf of an organization, you represent that you have the authority to bind that organization to these Terms. If you do not agree, do not use the service.
                  </p>
                </LegalSection>

                <LegalSection id="s02" num="02" title="The service">
                  <p>
                    Rubberfit is a manufacturing-operations application for rubber-roll fabricators, delivered as software-as-a-service over the public internet. The features available to your account depend on the subscription tier you select. The service description on <Link href="/pricing">/pricing</Link> reflects what is included at each tier as of the Effective date above.
                  </p>
                </LegalSection>

                <LegalSection id="s03" num="03" title="Accounts">
                  <p>
                    You are responsible for keeping your sign-in credentials confidential and for all activity that occurs under your account. You will provide accurate account information and keep it updated. You will not share your account with another person or transfer it without our written consent.
                  </p>
                </LegalSection>

                <LegalSection id="s04" num="04" title="Subscription, billing, and trials">
                  <p>
                    Subscriptions are sold on a per-seat basis, billed monthly or annually through Stripe. Free trials, when offered, run for the duration disclosed at sign-up and convert to a paid subscription unless cancelled before the trial ends. Subscriptions auto-renew at the end of each billing period at the then-current rate for your selected plan. You can cancel at any time from the Stripe Customer Portal accessible from <code>Settings → Billing</code> inside the application. Cancellation takes effect at the end of the current billing period; we do not pro-rate refunds for partial periods unless required by law.
                  </p>
                </LegalSection>

                <LegalSection id="s05" num="05" title="Acceptable use">
                  <p>
                    You will not (a) use the service to violate any applicable law, (b) attempt to reverse engineer, decompile, or extract source code from the service, (c) probe, scan, or test the vulnerability of any part of the service except as expressly authorized in our security program, (d) interfere with the service for other customers, (e) use the service to send unsolicited commercial messages, or (f) use automated means to extract data beyond what is documented in the public API.
                  </p>
                </LegalSection>

                <LegalSection id="s06" num="06" title="Your data">
                  <p>
                    You own the inventory, customers, jobs, cut histories, and PDFs you create inside Rubberfit. You grant us a limited license to host, process, and transmit that content solely to deliver the service to you and to the users you authorize. We will not use your workspace data to train models or sell it to third parties. The technical, organizational, and physical controls that protect your data are described in our <Link href="/legal/privacy">Privacy Policy</Link>.
                  </p>
                </LegalSection>

                <LegalSection id="s07" num="07" title="Intellectual property">
                  <p>
                    The Rubberfit software, brand, designs, and documentation are owned by Arc & Anchor and are licensed to you under these Terms, not transferred. The license terminates when your subscription ends. We welcome feedback; if you submit suggestions or feature requests, we may use them without obligation to you.
                  </p>
                </LegalSection>

                <LegalSection id="s08" num="08" title="Confidentiality">
                  <p>
                    If we share non-public information with you under these Terms (pricing not on the public site, security questionnaires, roadmaps), you will use that information only for the purpose for which it was shared and will not disclose it to third parties except as required by law.
                  </p>
                </LegalSection>

                <LegalSection id="s09" num="09" title="Term and termination">
                  <p>
                    These Terms apply for as long as you have an active account. We may suspend or terminate access for material breach of these Terms — with notice and an opportunity to cure, unless the breach causes immediate risk to other customers, the service, or us. You may terminate by cancelling your subscription and requesting workspace deletion under our <Link href="/legal/privacy">Privacy Policy</Link>.
                  </p>
                </LegalSection>

                <LegalSection id="s10" num="10" title="Disclaimer of warranties">
                  <p>
                    The service is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; To the maximum extent permitted by law, we disclaim all implied warranties, including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the service will be uninterrupted or error-free, or that the cut layouts, estimates, or reports it produces will be free of defects.
                  </p>
                </LegalSection>

                <LegalSection id="s11" num="11" title="Limitation of liability">
                  <p>
                    To the maximum extent permitted by law, neither party will be liable for indirect, incidental, consequential, special, or punitive damages, including lost profits or lost data, even if advised of the possibility. Our aggregate liability for any claim arising from or related to these Terms or the service will not exceed the fees you paid for the service in the twelve months preceding the event giving rise to the claim.
                  </p>
                </LegalSection>

                <LegalSection id="s12" num="12" title="Indemnification">
                  <p>
                    You will defend, indemnify, and hold harmless Arc & Anchor from any third-party claim arising from your violation of these Terms or your misuse of the service. We will defend, indemnify, and hold you harmless from a third-party claim that your authorized use of the service infringes that third party&rsquo;s intellectual property rights, provided you notify us promptly and let us control the defense.
                  </p>
                </LegalSection>

                <LegalSection id="s13" num="13" title="Governing law">
                  <p>
                    These Terms are governed by the laws of the State of Nevada, USA, without regard to conflict-of-laws rules. The state and federal courts located in Clark County, Nevada have exclusive jurisdiction over any dispute arising from these Terms, and you consent to that jurisdiction.
                  </p>
                </LegalSection>

                <LegalSection id="s14" num="14" title="Changes to these Terms">
                  <p>
                    We may update these Terms. Material changes will be announced by email to workspace owners at least 30 days before they take effect. Continued use of the service after the effective date of a change constitutes acceptance of the updated Terms.
                  </p>
                </LegalSection>

                <LegalSection id="s15" num="15" title="Contact">
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
                    These Terms are governed by the laws of the State of Nevada, USA.
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
