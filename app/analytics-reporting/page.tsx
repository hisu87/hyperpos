import Link from "next/link";
import {
  BarChart3,
  TrendingUp,
  PercentCircle,
  Layers3,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import GlobalManagementLayout from "@/app/global-management-layout";

export default function AnalyticsReportingPage() {
  return (
    <GlobalManagementLayout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-semibold text-white mb-2 mt-2">
          Analytics Reporting
        </h1>
        <p className="text-white/60 mb-8">
          Reporting view with KPI focus for revenue, margin, and operational
          efficiency snapshots.
        </p>
        {/* Stats Cards */}
        <div className="grid gap-8 lg:grid-cols-3 mb-10">
          <StatCard
            icon={TrendingUp}
            title="Revenue Trend"
            metric="+18.6%"
            detail="Week-over-week uplift across all active chains and terminals."
          />
          <StatCard
            icon={PercentCircle}
            title="Gross Margin"
            metric="41.3%"
            detail="Blended margin tracked against real-time COGS and promo effects."
          />
          <StatCard
            icon={Layers3}
            title="Stock Turns"
            metric="5.2x"
            detail="Inventory velocity by category with anomaly detection flags."
          />
        </div>

        {/* KPI Chart Section (placeholder for chart) */}
        <div className="rounded-3xl border border-white/10 bg-[#10161b] p-8 mb-10 flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white mb-2">
              KPI Overview
            </h2>
            <p className="text-white/70 mb-4">
              Visualize revenue, margin, and inventory velocity trends. Use
              filters to drill down by chain, region, or time period.
            </p>
            <div className="flex gap-3 mt-6">
              <Link
                href="/global-overview"
                className="rounded-full border border-[#00D084]/30 bg-[#00D084]/10 px-5 py-2 text-sm font-medium text-[#00D084] hover:bg-[#00D084]/20 transition">
                Global Overview
              </Link>
              <Link
                href="/chains-management"
                className="rounded-full border border-white/15 bg-[#0f1419] px-5 py-2 text-sm font-medium text-white/80 hover:border-[#00D084]/40 hover:text-[#c4ffe4] transition">
                Chains Management
              </Link>
              <Link
                href="/resources"
                className="rounded-full border border-white/15 bg-[#0f1419] px-5 py-2 text-sm font-medium text-white/80 hover:border-[#00D084]/40 hover:text-[#c4ffe4] transition">
                Resources
              </Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            {/* Placeholder for chart/graph */}
            <div className="h-64 w-full max-w-lg rounded-2xl bg-linear-to-br from-[#00D084]/10 to-[#10161b] border border-[#00D084]/15 flex items-center justify-center">
              <BarChart3 className="h-20 w-20 text-[#00D084]/40" />
            </div>
          </div>
        </div>

        {/* KPI Table Section */}
        <div className="rounded-3xl border border-white/10 bg-[#10161b] p-8 mb-10">
          <h3 className="text-xl font-semibold text-white mb-4">
            KPI Breakdown
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="text-[#00D084] border-b border-white/10">
                  <th className="py-3 pr-6 font-semibold">Metric</th>
                  <th className="py-3 pr-6 font-semibold">Current</th>
                  <th className="py-3 pr-6 font-semibold">Change</th>
                  <th className="py-3 pr-6 font-semibold">Trend</th>
                </tr>
              </thead>
              <tbody>
                {kpiRows.map((row) => (
                  <tr
                    key={row.metric}
                    className="border-b border-white/5 last:border-0">
                    <td className="py-3 pr-6 text-white font-medium">
                      {row.metric}
                    </td>
                    <td className="py-3 pr-6 text-white/70">{row.current}</td>
                    <td
                      className={`py-3 pr-6 font-semibold ${row.change.startsWith("+") ? "text-[#00D084]" : "text-[#ff4d4f]"}`}>
                      {row.change}
                    </td>
                    <td className="py-3 pr-6">
                      {row.trend === "up" ? (
                        <ArrowUpRight className="h-4 w-4 text-[#00D084]" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-[#ff4d4f]" />
                      )}
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

// --- KPI table data ---
const kpiRows = [
  { metric: "Revenue", current: "$2.8M", change: "+18.6%", trend: "up" },
  { metric: "Gross Margin", current: "41.3%", change: "+2.1%", trend: "up" },
  { metric: "Stock Turns", current: "5.2x", change: "-0.3x", trend: "down" },
];
