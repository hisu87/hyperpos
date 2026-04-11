import Link from "next/link";
import { BarChart3, Users, ShieldCheck, Zap, Activity } from "lucide-react";
import GlobalManagementLayout from "@/app/global-management-layout";

export default function GlobalOverviewPage() {
  return (
    <GlobalManagementLayout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-semibold text-white mb-2 mt-2">
          Global Overview
        </h1>
        <p className="text-white/60 mb-8">
          Executive command view to monitor chain performance, operational
          anomalies, and deployment posture.
        </p>
        <div className="grid gap-8 lg:grid-cols-3 mb-10">
          {/* Stats Cards */}
          <StatCard
            icon={Users}
            title="Active Terminals"
            metric="1,842"
            detail="Live POS terminals reporting healthy heartbeat and sync state."
          />
          <StatCard
            icon={BarChart3}
            title="Daily GMV"
            metric="$2.8M"
            detail="Aggregated gross merchandise value across all managed entities."
          />
          <StatCard
            icon={ShieldCheck}
            title="Inventory Risk"
            metric="Low"
            detail="No severe stock drift or unresolved adjustment conflict events."
          />
        </div>

        {/* Visual Overview Section */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#10161b] mb-10">
          <div className="flex flex-col lg:flex-row items-center justify-between px-8 py-10 gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-white mb-2">
                Operational Map
              </h2>
              <p className="text-white/70 max-w-md mb-4">
                Visual map of key modules and data flow for global operations.
                Monitor real-time status, performance, and anomaly detection
                across all managed chains.
              </p>
              <div className="flex gap-3 mt-6">
                <Link
                  href="/analytics-reporting"
                  className="rounded-full border border-[#00D084]/30 bg-[#00D084]/10 px-5 py-2 text-sm font-medium text-[#00D084] hover:bg-[#00D084]/20 transition">
                  Analytics Reporting
                </Link>
                <Link
                  href="/workforce-hub"
                  className="rounded-full border border-white/15 bg-[#0f1419] px-5 py-2 text-sm font-medium text-white/80 hover:border-[#00D084]/40 hover:text-[#c4ffe4] transition">
                  Workforce Hub
                </Link>
                <Link
                  href="/chains-management"
                  className="rounded-full border border-white/15 bg-[#0f1419] px-5 py-2 text-sm font-medium text-white/80 hover:border-[#00D084]/40 hover:text-[#c4ffe4] transition">
                  Chains Management
                </Link>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              {/* Placeholder for visual grid/graph, replace with SVG or chart as needed */}
              <div className="h-64 w-full max-w-lg rounded-2xl bg-linear-to-br from-[#00D084]/10 to-[#10161b] border border-[#00D084]/15 flex items-center justify-center">
                <Zap className="h-20 w-20 text-[#00D084]/40" />
              </div>
            </div>
          </div>
        </div>

        {/* Activity Feed Section */}
        <div className="rounded-3xl border border-white/10 bg-[#10161b] p-8 mb-10">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Recent Activity
          </h3>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#00D084]/30 bg-[#00D084]/10 text-[#00D084]">
                <Activity className="h-5 w-5" />
              </span>
              <div>
                <p className="text-white font-medium">
                  Terminal sync completed
                </p>
                <p className="text-white/60 text-sm">
                  All POS terminals reported successful sync at 09:12 UTC.
                </p>
                <span className="text-xs text-[#00D084] font-semibold">
                  Now
                </span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#00D084]/30 bg-[#00D084]/10 text-[#00D084]">
                <BarChart3 className="h-5 w-5" />
              </span>
              <div>
                <p className="text-white font-medium">GMV spike detected</p>
                <p className="text-white/60 text-sm">
                  Unusual sales volume in EU region, review analytics for
                  details.
                </p>
                <span className="text-xs text-[#00D084] font-semibold">
                  12m ago
                </span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#00D084]/30 bg-[#00D084]/10 text-[#00D084]">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-white font-medium">Inventory audit passed</p>
                <p className="text-white/60 text-sm">
                  No discrepancies found in last scheduled inventory check.
                </p>
                <span className="text-xs text-[#00D084] font-semibold">
                  1h ago
                </span>
              </div>
            </li>
          </ul>
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
