import Link from "next/link";
import { Layers3, CheckCircle2, Timer, ArrowRight } from "lucide-react";
import GlobalManagementLayout from "@/app/global-management-layout";

export default function ChainsManagementPage() {
  return (
    <GlobalManagementLayout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-semibold text-white mb-2 mt-2">
          Chains Management
        </h1>
        <p className="text-white/60 mb-8">
          Multi-chain operations view for templates, governance, and rollout
          control across locations.
        </p>
        {/* Stats Cards */}
        <div className="grid gap-8 lg:grid-cols-3 mb-10">
          <StatCard
            icon={Layers3}
            title="Active Chains"
            metric="27"
            detail="Centralized policy control with chain-level override boundaries."
          />
          <StatCard
            icon={CheckCircle2}
            title="Standardization"
            metric="93%"
            detail="POS profile and pricing policy conformance across all stores."
          />
          <StatCard
            icon={Timer}
            title="Rollout Latency"
            metric="14 min"
            detail="Median time to apply configuration updates network-wide."
          />
        </div>

        {/* Chain Table Section */}
        <div className="rounded-3xl border border-white/10 bg-[#10161b] p-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <h2 className="text-2xl font-semibold text-white">
              Chain Overview
            </h2>
            <Link
              href="/enterprise-settings"
              className="rounded-full border border-[#00D084]/30 bg-[#00D084]/10 px-5 py-2 text-sm font-medium text-[#00D084] hover:bg-[#00D084]/20 transition">
              Enterprise Settings
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="text-[#00D084] border-b border-white/10">
                  <th className="py-3 pr-6 font-semibold">Chain</th>
                  <th className="py-3 pr-6 font-semibold">Stores</th>
                  <th className="py-3 pr-6 font-semibold">Status</th>
                  <th className="py-3 pr-6 font-semibold">Last Update</th>
                  <th className="py-3 pr-6 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {chainRows.map((row) => (
                  <tr
                    key={row.name}
                    className="border-b border-white/5 last:border-0">
                    <td className="py-3 pr-6 text-white font-medium">
                      {row.name}
                    </td>
                    <td className="py-3 pr-6 text-white/70">{row.stores}</td>
                    <td className="py-3 pr-6">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${row.status === "Active" ? "bg-[#00D084]/15 text-[#00D084]" : "bg-white/10 text-white/70"}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-3 pr-6 text-white/70">
                      {row.lastUpdate}
                    </td>
                    <td className="py-3 pr-6">
                      <button className="inline-flex items-center gap-1 rounded-full border border-[#00D084]/30 bg-[#00D084]/10 px-4 py-1.5 text-xs font-medium text-[#00D084] hover:bg-[#00D084]/20 transition">
                        Manage <ArrowRight className="h-3 w-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </GlobalManagementLayout>
  );
}

// --- StatCard component ---
import type { LucideIcon } from "lucide-react";

function StatCard({
  icon: Icon,
  title,
  metric,
  detail,
}: {
  icon: LucideIcon;
  title: string;
  metric: string;
  detail: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#11161b] p-6 flex flex-col gap-2">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#00D084]/30 bg-[#00D084]/10 text-[#00D084]">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-2 text-[0.65rem] uppercase tracking-[0.24em] text-[#9aa5b1]">
        {title}
      </p>
      <p className="text-2xl font-semibold text-white">{metric}</p>
      <p className="text-sm leading-7 text-white/55">{detail}</p>
    </div>
  );
}

// --- Chain table data ---
const chainRows = [
  { name: "VOLT", stores: 12, status: "Active", lastUpdate: "2h ago" },
  { name: "NEON", stores: 8, status: "Active", lastUpdate: "5h ago" },
  { name: "ZENITH", stores: 4, status: "Inactive", lastUpdate: "1d ago" },
  { name: "AXIS", stores: 3, status: "Active", lastUpdate: "3d ago" },
];
