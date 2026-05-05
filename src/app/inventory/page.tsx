"use client";

import { SubPage, SectionHeader, FeatureRow } from "@/components/SubPage";

export default function InventoryPage() {
  return (
    <SubPage
      hero={{
        eyebrow: "02 · Inventory",
        title: (
          <>
            Every roll. Every offcut. <em>Tracked.</em>
          </>
        ),
        lead: "Rubberfit treats material like an engineering asset, not a line item. Rolls have lineage. Offcuts are first-class. Reorder rules fire before you run out — not after.",
      }}
    >
      {/* Rolls */}
      <section className="rf-section">
        <div className="rf-wrap">
          <SectionHeader
            num="A"
            eyebrow="Rolls"
            title={
              <>
                From dock <em>to last offcut</em>.
              </>
            }
            body="Every roll lives a lifecycle: receive, scan a barcode, assign to jobs, cut, retire. Every step writes to history. Every offcut keeps a parent_roll_id pointer so you can trace any scrap back to its origin."
          />

          <FeatureRow
            num="01"
            title="Roll-level lineage"
            text="Each roll carries dimensions, durometer, lot, supplier, and cost. Cuts decrement length on the same record. When a roll falls below your minimum, it auto-retires and routes to scrap or sample stock."
            meta={[
              { k: "Tables", v: "rolls · cut_history" },
              { k: "Lineage", v: "Receipt → cut → retire" },
            ]}
          />
          <FeatureRow
            num="02"
            title="Offcuts as first-class inventory"
            text="Most ERPs treat offcuts as scrap. Rubberfit makes them findable: the engine searches offcut stock first when a small part can fit, before pulling a fresh roll. Yield goes up without changing your pricing."
            meta={[
              { k: "Tables", v: "offcuts" },
              { k: "Reuse", v: "Engine searches offcuts first" },
            ]}
          />
          <FeatureRow
            num="03"
            title="Reorder rules per material"
            text="Set a threshold and a preferred supplier. When you cross the line, a notification ships and a draft PO is queued — ready for the manager to review and send."
            meta={[
              { k: "Tables", v: "reorder_rules" },
              { k: "Trigger", v: "DB-side, not polled" },
            ]}
          />
          <FeatureRow
            num="04"
            title="Cost-per-square-meter, live"
            text="As receipts land, price history updates. Per-material cost trends are visible to the manager dashboard. When a supplier's pricing drifts, you see it in days, not at quarterly review."
            meta={[
              { k: "Tables", v: "price_history" },
              { k: "Granularity", v: "Per material × supplier" },
            ]}
          />
        </div>
      </section>

      {/* POs and suppliers */}
      <section className="rf-section" style={{ background: "var(--color-surface)" }}>
        <div className="rf-wrap">
          <SectionHeader
            num="B"
            eyebrow="Purchase orders & suppliers"
            title={
              <>
                Raise it. Receive it. <em>Watch rolls appear.</em>
              </>
            }
            body="Suppliers are first-class entities with contact details and lead times. POs flow draft → sent → received with partial-receipt support. Receiving a PO automatically creates roll records — no manual data entry, no duplicate keys."
          />

          <FeatureRow
            num="05"
            title="Suppliers"
            text="Vendor records carry contact info, payment terms, and historical lead time. The system surfaces the supplier with the best blended price + reliability per material — not just the cheapest."
            meta={[
              { k: "Tables", v: "suppliers · material_suppliers" },
            ]}
          />
          <FeatureRow
            num="06"
            title="Purchase orders"
            text="Draft a PO from a reorder rule or from scratch. Send it with a single click. Receive it partially or fully when the truck shows up. Open balances stay visible."
            meta={[
              { k: "Tables", v: "purchase_orders · purchase_order_items" },
              { k: "Receipt", v: "Partial-aware" },
            ]}
          />
          <FeatureRow
            num="07"
            title="Auto-create rolls on receipt"
            text="When you mark a PO line received, the receive-purchase-order use-case writes the matching roll records with correct supplier, material type, and dimensions. Zero re-keying."
            meta={[
              { k: "Use-case", v: "receive-purchase-order" },
              { k: "Side effect", v: "rolls table populated" },
            ]}
          />
        </div>
      </section>

      {/* Barcodes */}
      <section className="rf-section">
        <div className="rf-wrap">
          <SectionHeader
            num="C"
            eyebrow="Barcodes"
            title={
              <>
                Operators <em>scan</em>, not type.
              </>
            }
            body="Every roll, every job, every scan event. The /scan page resolves any barcode and routes the operator straight to the right screen — cut, receive, ship, or label."
          />

          <FeatureRow
            num="08"
            title="Roll labels at receiving"
            text="Print a label the moment a roll lands on the dock. UUID barcode, dimensions, material spec, supplier code. Scan to confirm receipt, scan to start a cut, scan to retire."
            meta={[
              { k: "Format", v: "Code 128 · UUID" },
              { k: "Print", v: "Browser-driven" },
            ]}
          />
          <FeatureRow
            num="09"
            title="Job barcodes"
            text="Every job carries its own barcode. Operators scan at the cut table to load the right pack request. No typed job IDs. No wrong-roll cuts."
            meta={[
              { k: "Tables", v: "jobs.barcode" },
              { k: "UX", v: "Scan-to-load" },
            ]}
          />
        </div>
      </section>
    </SubPage>
  );
}
