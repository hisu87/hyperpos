import { MarketingPageShell } from "@/app/_components/marketing-page-shell";

const hardwareNodes = [
  {
    name: "Terminal Node",
    text: "Touch-optimized cashier interface with secure local storage and rapid wake.",
  },
  {
    name: "Peripheral Mesh",
    text: "Barcode scanner, printer, and payment module orchestration with fail-safe retries.",
  },
  {
    name: "Edge Gateway",
    text: "Background sync channel with integrity checks and queued delta replay.",
  },
];

export default function HardwarePage() {
  return (
    <MarketingPageShell
      eyebrow="Hardware"
      title="Built for Real Counters"
      description="Device-grade reliability engineered for continuous store operation, even during network instability."
      primaryCtaLabel="Talk to Hardware Team">
      <div className="grid gap-5">
        {hardwareNodes.map((node) => (
          <article
            key={node.name}
            className="rounded-3xl border border-white/10 bg-[#11161b] p-6">
            <h2 className="text-xl font-semibold text-white">{node.name}</h2>
            <p className="mt-3 text-sm leading-7 text-white/55">{node.text}</p>
          </article>
        ))}
      </div>
    </MarketingPageShell>
  );
}
