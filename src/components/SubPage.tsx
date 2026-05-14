"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";

const ease = [0.22, 1, 0.36, 1] as const;

export type SubPageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
};

export function SubPage({
  hero,
  children,
  hideCtaSection,
}: {
  hero: SubPageHeroProps;
  children: React.ReactNode;
  hideCtaSection?: boolean;
}) {
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

      <section className="rf-section" style={{ paddingTop: "clamp(96px, 12vw, 160px)", paddingBottom: 0 }}>
        <div className="rf-wrap">
          <motion.div
            className="rf-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="tick" aria-hidden="true" />
            <span>{hero.eyebrow}</span>
          </motion.div>
          <motion.h1
            className="rf-h1"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease }}
            style={{ maxWidth: "20ch" }}
          >
            {hero.title}
          </motion.h1>
          <motion.p
            className="rf-lead"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22, ease }}
          >
            {hero.lead}
          </motion.p>
        </div>
      </section>

      {children}

      {!hideCtaSection && (
        <section className="rf-section" style={{ background: "var(--color-graphite)", color: "#fff" }}>
          <div className="rf-wrap">
            <div className="fade-up" style={{ textAlign: "center" }}>
              <div className="rf-eyebrow" style={{ color: "#bcbfc6" }}>
                <span className="tick" aria-hidden="true" />
                <span>Ready when you are</span>
              </div>
              <h2 className="rf-h2" style={{ color: "#fff", maxWidth: "22ch", margin: "0 auto" }}>
                See the price. <em style={{ color: "var(--color-signal)" }}>Start a trial.</em>
              </h2>
              <p className="rf-body" style={{ color: "#bcbfc6", margin: "20px auto 36px", maxWidth: "44ch" }}>
                Per-seat pricing. 14-day free trial, no credit card. Run real
                cuts against your own stock — if it doesn&apos;t pay for itself
                the first week, walk.
              </p>
              <Link
                href="/pricing"
                className="rf-cta-primary"
                style={{ background: "var(--color-signal)", borderBottomColor: "#fff" }}
              >
                <span>See pricing</span>
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}

/* Reusable section primitives */

export function SectionHeader({
  num,
  eyebrow,
  title,
  body,
}: {
  num?: string;
  eyebrow: string;
  title: React.ReactNode;
  body?: React.ReactNode;
}) {
  return (
    <div className="fade-up" style={{ marginBottom: "clamp(40px, 5vw, 64px)", maxWidth: "60ch" }}>
      <div className="rf-eyebrow">
        <span className="tick" aria-hidden="true" />
        <span>{num ? `${num} · ${eyebrow}` : eyebrow}</span>
      </div>
      <h2 className="rf-h2">{title}</h2>
      {body ? <p className="rf-body" style={{ marginTop: 16 }}>{body}</p> : null}
    </div>
  );
}

export function FeatureRow({
  num,
  title,
  text,
  meta,
}: {
  num: string;
  title: string;
  text: string;
  meta: { k: string; v: string }[];
}) {
  return (
    <motion.div
      className="rf-feature-row"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="rf-feature-num">{num}</div>
      <div>
        <h3 className="rf-feature-title">{title}</h3>
      </div>
      <p className="rf-feature-text">{text}</p>
      <div className="rf-feature-meta">
        {meta.map(({ k, v }) => (
          <div key={k}>
            {k} · <strong>{v}</strong>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
