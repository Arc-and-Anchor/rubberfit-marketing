"use client";

import { motion } from "framer-motion";
import { SubPage, SectionHeader } from "@/components/SubPage";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    code: "STEP 01",
    title: "Receive",
    body: "Trucks arrive. Operators scan rolls in at the dock. Length, width, durometer, and lot are captured at receipt — no manual entry, no clipboard. Each roll gets a barcode label printed before it leaves the receiving area.",
    detail: [
      "Barcode label printed at the dock",
      "Roll record auto-created from PO line",
      "Supplier + lot lineage attached",
    ],
  },
  {
    code: "STEP 02",
    title: "Plan",
    body: "Operators select parts from the queue, dial in stock, and press Pack. The Rust engine returns an optimized layout in under three seconds. Free-roam is one click away when the spec demands a manual cut.",
    detail: [
      "Auto Nest with sparrow GLS",
      "Free-roam canvas with sub-millimeter snap",
      "Job + operator captured before the cut starts",
    ],
  },
  {
    code: "STEP 03",
    title: "Cut",
    body: "Layouts print to the floor as a numbered cut list. Operators check off parts as they go — every part scanned, every offcut tracked. The full layout JSON is recorded the moment the cut session closes.",
    detail: [
      "Numbered cut list, no whiteboards",
      "Offcuts auto-recorded as first-class inventory",
      "Layout JSON archived to cut_history",
    ],
  },
  {
    code: "STEP 04",
    title: "Ship",
    body: "Finished parts roll into shipping with their barcode lineage intact. Customer PDFs auto-generate without internal artifacts — no nesting diagrams, no operator notes, no yield numbers.",
    detail: [
      "Customer-facing PDF (no internal artifacts)",
      "Shareable public-but-uncrawlable link",
      "Job status transitions logged to audit trail",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <SubPage
      hero={{
        eyebrow: "How it works",
        title: (
          <>
            Receive. Plan. Cut. <em>Ship.</em>
          </>
        ),
        lead: "Rubberfit is built around the way a rubber-roll fabricator actually moves material — not the way a generic ERP imagines it. Every step on the floor maps to one place in the app.",
      }}
    >
      <section className="rf-section">
        <div className="rf-wrap">
          <SectionHeader
            num="A"
            eyebrow="The four-step spine"
            title={
              <>
                One spine. <em>Every job rides it.</em>
              </>
            }
            body="From the moment a roll hits the dock to the moment a cut part ships, every step is one query away — to the operator who needs it, to the supervisor who signs off, to the customer who ordered it."
          />

          <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {steps.map((s, i) => (
              <motion.div
                key={s.code}
                className="rf-diagram"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
              >
                <div className="rf-diagram-header">
                  <span>{s.code}</span>
                  <span>0{i + 1} / 04</span>
                </div>
                <h3 className="rf-h3" style={{ marginBottom: 10 }}>{s.title}</h3>
                <p className="rf-feature-text" style={{ marginBottom: 14 }}>{s.body}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--color-ink-soft)" }}>
                  {s.detail.map((d) => (
                    <li key={d} style={{ paddingLeft: 14, position: "relative" }}>
                      <span aria-hidden="true" style={{ position: "absolute", left: 0, top: 6, width: 6, height: 6, background: "var(--color-signal)" }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="rf-section" style={{ background: "var(--color-surface)" }}>
        <div className="rf-wrap">
          <SectionHeader
            num="B"
            eyebrow="Roles on the spine"
            title={
              <>
                Six roles. <em>Each one sees what they need.</em>
              </>
            }
            body="The same job moves through the floor and the office, but each role sees the slice that matters to them. Permissions are enforced at the database — not just hidden in the UI."
          />

          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {[
              { role: "Operator", view: "Cut queue, scan, layout, offcuts." },
              { role: "Manager", view: "All operators, all jobs, KPIs, POs." },
              { role: "Admin", view: "Materials, suppliers, settings, audit log." },
              { role: "Super-admin", view: "Org-wide, user roles, RLS overrides." },
              { role: "Viewer", view: "Read-only across the dashboard." },
              { role: "Customer", view: "Their job, their PDF, nothing else." },
            ].map((r) => (
              <div key={r.role} className="rf-diagram">
                <div className="rf-diagram-header">
                  <span>Role</span>
                </div>
                <h3 className="rf-h3" style={{ marginBottom: 8 }}>{r.role}</h3>
                <p className="rf-feature-text">{r.view}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SubPage>
  );
}
