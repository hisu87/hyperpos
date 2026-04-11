import Link from "next/link";
import { ShieldCheck, Users, FileText, ArrowRight } from "lucide-react";
import GlobalManagementLayout from "@/app/global-management-layout";

export default function EnterpriseSettingsPage() {
  return (
    <GlobalManagementLayout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-semibold text-white mb-2 mt-2">
          Enterprise Settings
        </h1>
        <p className="text-white/60 mb-8">
          Administrative control plane for organization policies, permission
          boundaries, and security defaults.
        </p>
        {/* Stats Cards */}
        <div className="grid gap-8 lg:grid-cols-3 mb-10">
          <StatCard
            icon={FileText}
            title="Policy Sets"
            metric="12"
            detail="Reusable governance templates across chains and store groups."
          />
          <StatCard
            icon={Users}
            title="SSO Coverage"
            metric="100%"
            detail="All manager roles enforced through centralized identity provider."
          />
          <StatCard
            icon={ShieldCheck}
            title="Audit Trails"
            metric="Realtime"
            detail="Every settings mutation is logged with actor and trace metadata."
          />
        </div>

        {/* Policy Table Section */}
        <div className="rounded-3xl border border-white/10 bg-[#10161b] p-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <h2 className="text-2xl font-semibold text-white">
              Policy Overview
            </h2>
            <Link
              href="/chains-management"
              className="rounded-full border border-[#00D084]/30 bg-[#00D084]/10 px-5 py-2 text-sm font-medium text-[#00D084] hover:bg-[#00D084]/20 transition">
              Chains Management
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="text-[#00D084] border-b border-white/10">
                  <th className="py-3 pr-6 font-semibold">Policy</th>
                  <th className="py-3 pr-6 font-semibold">Scope</th>
                  <th className="py-3 pr-6 font-semibold">Status</th>
                  <th className="py-3 pr-6 font-semibold">Last Change</th>
                  <th className="py-3 pr-6 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {policyRows.map((row) => (
                  <tr
                    key={row.policy}
                    className="border-b border-white/5 last:border-0">
                    <td className="py-3 pr-6 text-white font-medium">
                      {row.policy}
                    </td>
                    <td className="py-3 pr-6 text-white/70">{row.scope}</td>
                    <td className="py-3 pr-6">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${row.status === "Active" ? "bg-[#00D084]/15 text-[#00D084]" : "bg-white/10 text-white/70"}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-3 pr-6 text-white/70">
                      {row.lastChange}
                    </td>
                    <td className="py-3 pr-6">
                      <button className="inline-flex items-center gap-1 rounded-full border border-[#00D084]/30 bg-[#00D084]/10 px-4 py-1.5 text-xs font-medium text-[#00D084] hover:bg-[#00D084]/20 transition">
                        Edit <ArrowRight className="h-3 w-3" />
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

// --- Policy table data ---
const policyRows = [
  {
    policy: "POS Security",
    scope: "All Chains",
    status: "Active",
    lastChange: "2h ago",
  },
  {
    policy: "Inventory Audit",
    scope: "VOLT, NEON",
    status: "Active",
    lastChange: "5h ago",
  },
  {
    policy: "Pricing Update",
    scope: "ZENITH",
    status: "Inactive",
    lastChange: "1d ago",
  },
  {
    policy: "User Access",
    scope: "AXIS",
    status: "Active",
    lastChange: "3d ago",
  },
];
