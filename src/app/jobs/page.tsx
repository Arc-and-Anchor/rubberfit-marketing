"use client";

import { SubPage, SectionHeader, FeatureRow } from "@/components/SubPage";

export default function JobsPage() {
  return (
    <SubPage
      hero={{
        eyebrow: "03 · Jobs",
        title: (
          <>
            Customer to cut <em>without re-typing</em>.
          </>
        ),
        lead: "Jobs are the spine of the shop floor. Customer info, dimensions, material, due date, operator assignment, status — and a shareable PDF receipt the customer reads on their phone.",
      }}
    >
      <section className="rf-section">
        <div className="rf-wrap">
          <SectionHeader
            num="A"
            eyebrow="The job lifecycle"
            title={
              <>
                Five states. <em>One source of truth.</em>
              </>
            }
            body="Jobs move through pending → in-progress → completed → cancelled, with shipped as a terminal state when material has left the building. Each transition is logged with the operator and timestamp."
          />

          <FeatureRow
            num="01"
            title="Customer-aware jobs"
            text="Customer name, email, phone, and notes live on the job record. Not a separate CRM with sync delays. Not a third-party tool. The data lives where the work happens."
            meta={[
              { k: "Tables", v: "jobs (customer_* fields)" },
              { k: "Why no CRM", v: "Jobs are the relationship" },
            ]}
          />
          <FeatureRow
            num="02"
            title="Operator assignment"
            text="Assign a job to a specific operator and they get a notification. Their queue surfaces it on login. A manager dashboard shows load by operator — no more verbal handoffs."
            meta={[
              { k: "Notify", v: "In-app, real-time" },
            ]}
          />
          <FeatureRow
            num="03"
            title="Priority + due date"
            text="Every job has priority and a due date. The dashboard sorts by both. Operators clear the priority lane before the standard lane — the system shows them which is which."
            meta={[
              { k: "Sort", v: "Priority desc · due asc" },
            ]}
          />
          <FeatureRow
            num="04"
            title="Customer-facing PDF receipt"
            text="Every job ships with a shareable PDF — clean, branded, no operator notes. Send the link, customer reads it on their phone. No login. Public-but-uncrawlable URL."
            meta={[
              { k: "Service", v: "jobPdfShareService" },
              { k: "Auth", v: "Signed/public URL — no login" },
            ]}
          />
        </div>
      </section>

      <section className="rf-section" style={{ background: "var(--color-surface)" }}>
        <div className="rf-wrap">
          <SectionHeader
            num="B"
            eyebrow="The customer view"
            title={
              <>
                What your customers <em>actually see</em>.
              </>
            }
            body="Customer-facing PDFs intentionally omit cut layouts and operator notes. They show what the customer ordered, the price, the delivery date, and a barcode for pickup. Internal artifacts (cut history, layout JSON, yield %) stay where they belong: with you."
          />

          <FeatureRow
            num="05"
            title="What's in the PDF"
            text="Order summary, materials, dimensions, quantity, due date, total price, customer-facing barcode for tracking. That's it. Operator notes, cost data, and yield metrics never leave the firm."
            meta={[
              { k: "Layout", v: "Hidden from customer" },
            ]}
          />
          <FeatureRow
            num="06"
            title="The internal cut history"
            text="Internally, every job carries a full cut history — every Auto Nest run, every Free-roam session, every yield percentage. Quality reviews, audit pulls, and operator efficiency reports all run off this table."
            meta={[
              { k: "Tables", v: "cut_history (full layout JSON)" },
            ]}
          />
        </div>
      </section>
    </SubPage>
  );
}
