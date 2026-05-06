"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const links = [
  { href: "/cutting-engine", label: "Engine" },
  { href: "/inventory", label: "Inventory" },
  { href: "/jobs", label: "Jobs" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/security", label: "Security" },
  { href: "https://docs.rubberfit.app", label: "Docs", external: true },
];

export function SiteNav() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const close = () => setOpen(false);

  return (
    <LayoutGroup>
      <header className="rf-nav">
        <Link href="/" className="rf-nav-brand" aria-label="Rubberfit home" onClick={close}>
          <span className="rf-nav-brand-mark" aria-hidden="true" />
          <span className="rf-nav-brand-name">Rubberfit</span>
          <span className="rf-nav-brand-mono">REV · 2026.05</span>
        </Link>

        <div style={{ flex: 1 }} />

        <ul className="rf-nav-links rf-nav-links-desktop">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={close}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noreferrer" : undefined}
                >
                  {l.label}
                  {active ? (
                    <motion.span
                      layoutId="rf-nav-active-tick"
                      className="rf-nav-active-tick"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/pricing"
          className={`rf-nav-cta rf-nav-cta-desktop${
            isActive("/pricing") ? " rf-nav-cta--active" : ""
          }`}
          aria-current={isActive("/pricing") ? "page" : undefined}
          onClick={close}
        >
          See pricing →
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
            >
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.32,
                    delay: 0.06 + i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link href={l.href} onClick={close}>{l.label}</Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.32,
                  delay: 0.06 + links.length * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link href="/pricing" onClick={close}>
                  See pricing →
                </Link>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </LayoutGroup>
  );
}
