import Link from "next/link";

import { SubPage } from "@/components/SubPage";
import { appUrl } from "@/lib/app-url";

export const metadata = {
  title: "Welcome to Rubberfit",
  description: "Your workspace is provisioned. Your 14-day trial is live.",
};

export default function CheckoutSuccessPage() {
  return (
    <SubPage
      hero={{
        eyebrow: "Welcome aboard",
        title: (
          <>
            You&apos;re in. <em>Let&apos;s cut.</em>
          </>
        ),
        lead: "Your workspace is provisioned. Your 14-day trial is live. Sign in to start receiving stock and planning your first job — no charge today, no charge until day 15.",
      }}
    >
      <section className="rf-section" style={{ paddingTop: 0 }}>
        <div className="rf-wrap">
          <div
            className="fade-up"
            style={{
              border: "1px solid var(--color-graphite)",
              background: "var(--color-surface-raised)",
              padding: "clamp(28px, 4vw, 48px)",
              maxWidth: "44ch",
              margin: "0 auto",
            }}
          >
            <div className="rf-eyebrow">
              <span className="tick" aria-hidden="true" />
              <span>Next steps</span>
            </div>

            <ol
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                marginTop: 24,
                display: "grid",
                gap: 28,
              }}
            >
              <li
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--color-signal)",
                    paddingTop: 4,
                  }}
                >
                  01 ·
                </span>
                <div>
                  <h3 className="rf-h3" style={{ marginBottom: 6 }}>
                    Sign in.
                  </h3>
                  <p className="rf-feature-text" style={{ margin: 0 }}>
                    Use the email + password you just created.
                  </p>
                </div>
              </li>

              <li
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--color-signal)",
                    paddingTop: 4,
                  }}
                >
                  02 ·
                </span>
                <div>
                  <h3 className="rf-h3" style={{ marginBottom: 6 }}>
                    Receive your first stock.
                  </h3>
                  <p className="rf-feature-text" style={{ margin: 0 }}>
                    Barcode the rolls you have on the floor. Rubberfit tracks
                    every cut against them.
                  </p>
                </div>
              </li>

              <li
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--color-signal)",
                    paddingTop: 4,
                  }}
                >
                  03 ·
                </span>
                <div>
                  <h3 className="rf-h3" style={{ marginBottom: 6 }}>
                    Plan a real job.
                  </h3>
                  <p className="rf-feature-text" style={{ margin: 0 }}>
                    Pick parts, dial in stock, press Pack. If it doesn&apos;t
                    save material on the first job, walk.
                  </p>
                </div>
              </li>
            </ol>

            <div style={{ marginTop: 36 }}>
              <Link
                href={`${appUrl()}/login`}
                className="rf-cta-primary"
                style={{
                  background: "var(--color-signal)",
                  borderBottomColor: "#fff",
                }}
              >
                <span>Sign in to Rubberfit</span>
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-ink-soft)",
                  marginTop: 18,
                }}
              >
                Trial reminder on day 12 · Cancel anytime in Settings → Billing
              </p>
            </div>
          </div>
        </div>
      </section>
    </SubPage>
  );
}
