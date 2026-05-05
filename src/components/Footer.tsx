"use client";

import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="rf-footer">
      <div className="rf-wrap">
        <div className="rf-footer-grid">
          <div>
            <div className="rf-footer-brand">
              <span
                className="rf-nav-brand-mark"
                aria-hidden="true"
                style={{ width: 18, height: 18 }}
              />
              <span>Rubberfit</span>
            </div>
            <p className="rf-footer-tag">
              Manufacturing operations for rubber-roll fabricators. Built by
              Arc &amp; Anchor — Las Vegas, NV.
            </p>
          </div>

          <div className="rf-footer-col">
            <div className="rf-footer-col-label">Product</div>
            <ul>
              <li>
                <Link href="https://app.rubberfit.app/login" target="_blank" rel="noreferrer">
                  Open the app →
                </Link>
              </li>
              <li><Link href="/cutting-engine">The cutting engine</Link></li>
              <li><Link href="/inventory">Inventory</Link></li>
              <li><Link href="/jobs">Jobs</Link></li>
              <li><Link href="/how-it-works">How it works</Link></li>
            </ul>
          </div>

          <div className="rf-footer-col">
            <div className="rf-footer-col-label">Trust</div>
            <ul>
              <li><Link href="/security">Security</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li>
                <a href="mailto:security@rubberfit.app">security@rubberfit.app</a>
              </li>
            </ul>
          </div>

          <div className="rf-footer-col">
            <div className="rf-footer-col-label">Firm</div>
            <ul>
              <li>
                <Link
                  href="https://www.arcanchor.com/about-us"
                  target="_blank"
                  rel="noreferrer"
                >
                  Meet the creators →
                </Link>
              </li>
              <li>
                <Link href="https://www.arcanchor.com" target="_blank" rel="noreferrer">
                  Arc &amp; Anchor
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.arcanchor.com/projects"
                  target="_blank"
                  rel="noreferrer"
                >
                  Other projects
                </Link>
              </li>
              <li><a href="mailto:hello@rubberfit.app">hello@rubberfit.app</a></li>
            </ul>
          </div>
        </div>

        <div className="rf-footer-bottom">
          <span>© {year} Rubberfit · Built by Arc &amp; Anchor</span>
          <span>Las Vegas, NV — operating nationwide</span>
        </div>
      </div>
    </footer>
  );
}
