import Link from "next/link";

import { SubPage } from "@/components/SubPage";
import { appUrl } from "@/lib/app-url";

export const metadata = {
  title: "Checkout cancelled — Rubberfit",
  description: "Nothing was charged. Come back when you're ready.",
};

export default function CheckoutCancelPage() {
  return (
    <SubPage
      hero={{
        eyebrow: "No charge made",
        title: (
          <>
            Checkout cancelled. <em>Take your time.</em>
          </>
        ),
        lead: "Nothing was charged. Your account exists, your workspace exists, but the trial hasn't started yet. Come back when you're ready — we'll pick up where you left off.",
      }}
    >
      <section className="rf-section" style={{ paddingTop: 0 }}>
        <div className="rf-wrap">
          <div
            className="rf-diagram fade-up"
            style={{
              maxWidth: "60ch",
              margin: "0 auto",
              padding: "clamp(28px, 4vw, 48px)",
            }}
          >
            <p className="rf-feature-text" style={{ margin: 0 }}>
              <strong style={{ color: "var(--color-ink)" }}>
                Still deciding?
              </strong>{" "}
              Per-seat pricing, predictable monthly bill, 20% annual discount.
              The trial is 14 days — that&apos;s two full weeks of running real
              cuts against your real stock.
            </p>
            <p
              className="rf-feature-text"
              style={{ marginTop: 18, marginBottom: 0 }}
            >
              <strong style={{ color: "var(--color-ink)" }}>
                Have a question?
              </strong>{" "}
              Reply to your registration email or message{" "}
              <a
                href="mailto:sales@rubberfit.app"
                style={{
                  color: "var(--color-signal)",
                  textDecoration: "underline",
                }}
              >
                sales@rubberfit.app
              </a>
              . We&apos;ll walk you through it.
            </p>
            <p
              className="rf-feature-text"
              style={{ marginTop: 18, marginBottom: 0 }}
            >
              <strong style={{ color: "var(--color-ink)" }}>
                Already convinced?
              </strong>{" "}
              Pick up where you left off.
            </p>
          </div>

          <div
            className="fade-up"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 20,
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            <Link
              href={`${appUrl()}/checkout`}
              className="rf-cta-primary"
              style={{
                background: "var(--color-signal)",
                borderBottomColor: "var(--color-ink)",
              }}
            >
              <span>Resume checkout</span>
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <Link
              href="/pricing"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--color-ink-soft)",
                textDecoration: "underline",
                textDecorationColor: "var(--color-rule)",
                textUnderlineOffset: 4,
              }}
            >
              Read the pricing again →
            </Link>
          </div>
        </div>
      </section>
    </SubPage>
  );
}
