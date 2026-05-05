"use client";

import { motion } from "framer-motion";
import { SubPage, SectionHeader, FeatureRow } from "@/components/SubPage";
import { NestDemo } from "@/components/NestDemo";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CuttingEnginePage() {
  return (
    <SubPage
      hero={{
        eyebrow: "01 · The cutting engine",
        title: (
          <>
            Rust-powered nesting that <em>actually packs</em>.
          </>
        ),
        lead: "Two modes for two kinds of cuts. Auto Nest runs a Rust pipeline with sparrow-style Guided Local Search to optimize roll yield in seconds. Free-roam gives operators a manual canvas when the spec demands it.",
      }}
    >
      {/* Live demo */}
      <section className="rf-section">
        <div className="rf-wrap">
          <SectionHeader
            num="A"
            eyebrow="Auto Nest · live demo"
            title={
              <>
                Press Pack. <em>Watch material land flat.</em>
              </>
            }
            body="The real engine packs in under three seconds for typical sheet sizes. The animation below cycles every seven seconds — same parts, same logic, same Rust code path."
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease }}
          >
            <NestDemo />
          </motion.div>
        </div>
      </section>

      {/* Engine internals */}
      <section className="rf-section" style={{ background: "var(--color-surface)" }}>
        <div className="rf-wrap">
          <SectionHeader
            num="B"
            eyebrow="Engine internals"
            title={
              <>
                Real algorithms. <em>Not chatbots.</em>
              </>
            }
            body="The packing pipeline is a real Rust workspace — four crates, full Cargo test coverage, and a CLI binary the Next.js app shells out to via stdin/stdout JSON."
          />

          <FeatureRow
            num="01"
            title="Polygon bin packing — jagua-rs"
            text="The geometry layer is jagua-rs, a research-grade polygon nesting library. It handles non-rectangular parts, rotation, and concave shapes — not just rectangles."
            meta={[
              { k: "Crate", v: "rf-geometry" },
              { k: "Geometry", v: "Convex + concave + rotation" },
            ]}
          />
          <FeatureRow
            num="02"
            title="Guided Local Search — sparrow"
            text="A sparrow-style GLS metaheuristic explores the placement space, escaping local optima the greedy heuristic can't. The result is yields that beat hand-planning by double digits."
            meta={[
              { k: "Crate", v: "rf-layout" },
              { k: "Method", v: "Sparrow GLS" },
            ]}
          />
          <FeatureRow
            num="03"
            title="Pack-CLI"
            text="A standalone Rust binary that takes a JSON pack request on stdin and writes the layout on stdout. Same binary runs locally, in CI, in the production server, and in a future native desktop build."
            meta={[
              { k: "Crate", v: "pack-cli" },
              { k: "Binary", v: "rubberfit-pack" },
            ]}
          />
          <FeatureRow
            num="04"
            title="Audit-grade layout JSON"
            text="Every Auto Nest run records its full layout JSON to cut_history. The exact placement of every part, the yield percent, the operator, and the timestamp — replayable forever."
            meta={[
              { k: "Storage", v: "cut_history.layout_json" },
              { k: "Replay", v: "Lossless" },
            ]}
          />
        </div>
      </section>

      {/* Free-roam */}
      <section className="rf-section">
        <div className="rf-wrap">
          <SectionHeader
            num="C"
            eyebrow="Free-roam mode"
            title={
              <>
                When the cut needs <em>a human eye</em>.
              </>
            }
            body="Some cuts don't optimize cleanly — a defect on the roll, a customer-specific orientation, a rush job. Free-roam gives the operator a live canvas with snap, rotate, and overlap detection while preserving the same audit trail Auto Nest produces."
          />

          <div className="rf-stats" style={{ marginTop: 24 }}>
            <div className="rf-stat">
              <div className="rf-stat-label">Snap precision</div>
              <div className="rf-stat-value mono-data">
                0.5<span className="rf-stat-unit">mm</span>
              </div>
              <div className="rf-stat-foot">
                Sub-millimeter snap on grid lines, sheet edges, and existing parts.
              </div>
            </div>
            <div className="rf-stat">
              <div className="rf-stat-label">Rotation</div>
              <div className="rf-stat-value mono-data">
                Free<span className="rf-stat-unit">°</span>
              </div>
              <div className="rf-stat-foot">
                Continuous rotation with optional 15°/45°/90° snap.
              </div>
            </div>
            <div className="rf-stat">
              <div className="rf-stat-label">Overlap detection</div>
              <div className="rf-stat-value mono-data">
                Live
              </div>
              <div className="rf-stat-foot">
                Polygon-aware collision detection. The cut tool refuses overlapping placements.
              </div>
            </div>
            <div className="rf-stat">
              <div className="rf-stat-label">Audit log</div>
              <div className="rf-stat-value mono-data">
                Same
              </div>
              <div className="rf-stat-foot">
                Manual cuts share the same cut_history record format as Auto Nest.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speed */}
      <section className="rf-section" style={{ background: "var(--color-surface)" }}>
        <div className="rf-wrap">
          <SectionHeader
            num="D"
            eyebrow="What it costs"
            title={
              <>
                Fast enough that <em>operators wait on you</em>, not the engine.
              </>
            }
            body="The engine is benchmarked against typical sheet sizes (4–9 sqm) with 8–24 parts. These numbers are measured on a single c5.large equivalent."
          />

          <div className="rf-stats">
            <div className="rf-stat">
              <div className="rf-stat-label">Median pack time</div>
              <div className="rf-stat-value mono-data">
                1.8<span className="rf-stat-unit">s</span>
              </div>
              <div className="rf-stat-foot">8 parts, 6 sqm sheet, 95th percentile under 4s.</div>
            </div>
            <div className="rf-stat">
              <div className="rf-stat-label">Yield improvement</div>
              <div className="rf-stat-value mono-data">
                +18<span className="rf-stat-unit">%</span>
              </div>
              <div className="rf-stat-foot">vs. hand-planned cuts on the same job spec.</div>
            </div>
            <div className="rf-stat">
              <div className="rf-stat-label">Concurrent operators</div>
              <div className="rf-stat-value mono-data">
                Unlimited
              </div>
              <div className="rf-stat-foot">Each pack request runs in its own process.</div>
            </div>
            <div className="rf-stat">
              <div className="rf-stat-label">Cold start</div>
              <div className="rf-stat-value mono-data">
                ~50<span className="rf-stat-unit">ms</span>
              </div>
              <div className="rf-stat-foot">Rust binary, no JIT warmup.</div>
            </div>
          </div>
        </div>
      </section>
    </SubPage>
  );
}
