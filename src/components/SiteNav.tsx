"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const links = [
  { href: "#features", label: "Engine" },
  { href: "#stats", label: "Numbers" },
  { href: "#flow", label: "How it ships" },
  { href: "#team", label: "Creators" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <LayoutGroup>
      <header className="rf-nav">
        <Link href="/" className="rf-nav-brand" aria-label="Rubberfit home">
          <span className="rf-nav-brand-mark" aria-hidden="true" />
          <span className="rf-nav-brand-name">Rubberfit</span>
          <span className="rf-nav-brand-mono">REV · 2026.05</span>
        </Link>

        <div style={{ flex: 1 }} />

        <ul className="rf-nav-links rf-nav-links-desktop">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>

        <Link
          href="https://rubberfit.app/login"
          className="rf-nav-cta rf-nav-cta-desktop"
          target="_blank"
          rel="noreferrer"
        >
          Open the app →
        </Link>

        <button
          className="rf-nav-hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <AnimatePresence>
          {open ? (
            <motion.div
              key="rf-mobile"
              className="rf-nav-mobile"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setOpen(false)}
            >
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.32,
                    delay: 0.06 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link href={l.href}>{l.label}</Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.32,
                  delay: 0.06 + links.length * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href="https://rubberfit.app/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open the app →
                </Link>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </LayoutGroup>
  );
}
