import Link from "next/link";
import { MarketingPageShell } from "@/app/_components/marketing-page-shell";

const docs = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "System Status", href: "/system-status" },
  { label: "Contact Sales", href: "/contact-sales" },
];

export default function ResourcesPage() {
  return (
    <MarketingPageShell
      eyebrow="Resources"
      title="Documentation and Operational Links"
      description="Everything operators and technical teams need to validate compliance, uptime, and rollout paths."
      primaryCtaLabel="Open Contact Form">
      <div className="grid gap-4 sm:grid-cols-2">
        {docs.map((doc) => (
          <Link
            key={doc.label}
            href={doc.href}
            className="rounded-3xl border border-white/10 bg-[#11161b] p-6 text-white transition hover:border-[#00D084]/30 hover:bg-[#131a21]">
            <p className="text-lg font-semibold">{doc.label}</p>
            <p className="mt-2 text-sm text-white/55">
              Open {doc.label.toLowerCase()}
            </p>
          </Link>
        ))}
      </div>
    </MarketingPageShell>
  );
}
