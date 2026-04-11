import GlobalManagementLayout from "@/app/global-management-layout";
import {
  Users,
  AlertTriangle,
  ShieldCheck,
  MessageCircle,
  Zap,
} from "lucide-react";

export default function SupportCenterPage() {
  return (
    <GlobalManagementLayout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-semibold text-white mb-2 mt-2">
          Support Center
        </h1>
        <p className="text-white/60 mb-8">
          Operational support hub for escalations, ticket workflows, and service
          guidance. Only available to authenticated users.
        </p>

        {/* Stats Cards */}
        <div className="grid gap-8 lg:grid-cols-3 mb-10">
          <StatCard
            icon={Users}
            title="Open Tickets"
            metric="34"
            detail="Current unresolved support items across all organizations."
          />
          <StatCard
            icon={AlertTriangle}
            title="P1 Incidents"
            metric="1"
            detail="Critical production issue currently tracked by incident command."
          />
          <StatCard
            icon={ShieldCheck}
            title="SLA Health"
            metric="96%"
            detail="Ticket handling compliance against contracted response windows."
          />
        </div>

        {/* Ticket Table Section */}
        <div className="rounded-3xl border border-white/10 bg-[#10161b] p-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <h2 className="text-2xl font-semibold text-white">
              Active Support Tickets
            </h2>
            <a
              href="/faq-support-center"
              className="rounded-full border border-[#00D084]/30 bg-[#00D084]/10 px-5 py-2 text-sm font-medium text-[#00D084] hover:bg-[#00D084]/20 transition">
              FAQ & Support
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="text-[#00D084] border-b border-white/10">
                  <th className="py-3 pr-6 font-semibold">Ticket</th>
                  <th className="py-3 pr-6 font-semibold">Status</th>
                  <th className="py-3 pr-6 font-semibold">Priority</th>
                  <th className="py-3 pr-6 font-semibold">Opened</th>
                  <th className="py-3 pr-6 font-semibold">Owner</th>
                </tr>
              </thead>
              <tbody>
                {ticketRows.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-white/5 last:border-0">
                    <td className="py-3 pr-6 text-white font-medium">
                      {row.title}
                    </td>
                    <td className="py-3 pr-6">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${row.status === "Open" ? "bg-[#00D084]/15 text-[#00D084]" : "bg-white/10 text-white/70"}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-3 pr-6">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${row.priority === "P1" ? "bg-[#ff4d4f]/15 text-[#ff4d4f]" : row.priority === "P2" ? "bg-[#fbbf24]/15 text-[#fbbf24]" : "bg-white/10 text-white/70"}`}>
                        {row.priority}
                      </span>
                    </td>
                    <td className="py-3 pr-6 text-white/70">{row.opened}</td>
                    <td className="py-3 pr-6 text-white/70">{row.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="grid gap-8 lg:grid-cols-2 mb-10">
          <div className="rounded-3xl border border-white/10 bg-[#10161b] p-8 flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-white mb-2">
              Quick Actions
            </h3>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full border border-[#00D084]/30 bg-[#00D084]/10 px-5 py-2 text-sm font-medium text-[#00D084] hover:bg-[#00D084]/20 transition">
                Open New Ticket
              </button>
              <button className="rounded-full border border-white/15 bg-[#0f1419] px-5 py-2 text-sm font-medium text-white/80 hover:border-[#00D084]/40 hover:text-[#c4ffe4] transition">
                Escalate Incident
              </button>
              <button className="rounded-full border border-white/15 bg-[#0f1419] px-5 py-2 text-sm font-medium text-white/80 hover:border-[#00D084]/40 hover:text-[#c4ffe4] transition">
                View SLA Policy
              </button>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#10161b] p-8 flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-white mb-2">
              Contact Channels
            </h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:support@hyperpos.com"
                className="inline-flex items-center gap-2 rounded-full border border-[#00D084]/30 bg-[#00D084]/10 px-5 py-2 text-sm font-medium text-[#00D084] hover:bg-[#00D084]/20 transition">
                <MessageCircle className="h-4 w-4" /> Email
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0f1419] px-5 py-2 text-sm font-medium text-white/80 hover:border-[#00D084]/40 hover:text-[#c4ffe4] transition">
                <Zap className="h-4 w-4" /> Live Chat
              </a>
            </div>
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

// --- Ticket table data ---
const ticketRows = [
  {
    id: 1,
    title: "POS terminal not syncing",
    status: "Open",
    priority: "P1",
    opened: "2h ago",
    owner: "Nguyen Van A",
  },
  {
    id: 2,
    title: "Inventory mismatch alert",
    status: "Open",
    priority: "P2",
    opened: "5h ago",
    owner: "Tran Thi B",
  },
  {
    id: 3,
    title: "Cannot print receipt",
    status: "Closed",
    priority: "P3",
    opened: "1d ago",
    owner: "Le Van C",
  },
  {
    id: 4,
    title: "Slow dashboard loading",
    status: "Open",
    priority: "P2",
    opened: "3d ago",
    owner: "Pham D",
  },
];
