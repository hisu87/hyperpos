import Link from "next/link";
import { MarketingPageShell } from "@/app/_components/marketing-page-shell";

export default function PlatformPage() {
  return (
    <MarketingPageShell
      eyebrow="Platform"
      title="Unified Retail Platform"
      description="One control surface for checkout speed, inventory confidence, and resilient offline-first operations.">
      <div className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-3xl border border-white/10 bg-[#11161b] p-6">
          <h2 className="text-xl font-semibold text-white">POS Core</h2>
          <p className="mt-3 text-sm leading-7 text-white/55">
            Sub-50ms cashier interactions with local-first transaction
            journaling.
          </p>
        </article>
        <article className="rounded-3xl border border-white/10 bg-[#11161b] p-6">
          <h2 className="text-xl font-semibold text-white">Inventory Grid</h2>
          <p className="mt-3 text-sm leading-7 text-white/55">
            Unified stock state from edge terminals with deterministic sync
            replay.
          </p>
        </article>
        <article className="rounded-3xl border border-white/10 bg-[#11161b] p-6">
          <h2 className="text-xl font-semibold text-white">Customer Loyalty</h2>
          <p className="mt-3 text-sm leading-7 text-white/55">
            Loyalty-aware transactions wired directly into the checkout flow.
          </p>
        </article>
      </div>

      <div className="mt-8 rounded-3xl border border-[#00D084]/20 bg-[#00D084]/10 p-6 text-sm text-white/70">
        Explore implementation details in the{" "}
        <Link
          href="/resources"
          className="font-semibold text-[#00D084] hover:text-[#7af2b4]">
          resources hub
        </Link>{" "}
        or request a tailored rollout plan on the contact page.
      </div>
    </MarketingPageShell>
  );
}
