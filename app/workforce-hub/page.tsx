import GlobalManagementLayout from "@/app/global-management-layout";
import {
  Users,
  Wallet,
  Sparkles,
  UserRoundPlus,
  type LucideIcon,
} from "lucide-react";

const staffRows = [
  {
    name: "Alex Rivera",
    role: "Senior Store Manager",
    status: "Clocked In",
    performance: "94%",
  },
  {
    name: "Jordan Smith",
    role: "Shift Supervisor",
    status: "On Leave",
    performance: "82%",
  },
  {
    name: "Elena Vance",
    role: "Logistics Coordinator",
    status: "Clocked In",
    performance: "98%",
  },
  {
    name: "Marcus Chen",
    role: "Lead Associate",
    status: "Clocked In",
    performance: "88%",
  },
];

export default function WorkforceHubPage() {
  return (
    <GlobalManagementLayout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-semibold text-white mb-2 mt-2">
          Workforce Hub
        </h1>
        <p className="text-white/60 mb-8">
          Manage your chain workforce, staffing health, and employee performance
          from one authenticated console.
        </p>

        <div className="grid gap-8 lg:grid-cols-4 mb-10">
          <StatCard
            icon={Users}
            title="Active Staff"
            metric="1,284"
            detail="Currently clocked-in employees across your chain."
          />
          <StatCard
            icon={Wallet}
            title="Labor Cost Ratio"
            metric="42.1%"
            detail="Current labor cost against revenue for this period."
          />
          <StatCard
            icon={Sparkles}
            title="Efficiency Score"
            metric="4.8"
            detail="Operational efficiency score based on staffing and output."
          />
          <StatCard
            icon={UserRoundPlus}
            title="Open Positions"
            metric="14"
            detail="Open positions waiting for assignment and onboarding."
          />
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#10161b] p-8 mb-10">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Employee Overview
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="text-[#00D084] border-b border-white/10">
                  <th className="py-3 pr-6 font-semibold">Name</th>
                  <th className="py-3 pr-6 font-semibold">Role</th>
                  <th className="py-3 pr-6 font-semibold">Status</th>
                  <th className="py-3 pr-6 font-semibold">Performance</th>
                </tr>
              </thead>
              <tbody>
                {staffRows.map((row) => (
                  <tr
                    key={row.name}
                    className="border-b border-white/5 last:border-0">
                    <td className="py-3 pr-6 text-white font-medium">
                      {row.name}
                    </td>
                    <td className="py-3 pr-6 text-white/70">{row.role}</td>
                    <td className="py-3 pr-6">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${row.status === "Clocked In" ? "bg-[#00D084]/15 text-[#00D084]" : "bg-white/10 text-white/70"}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-3 pr-6 text-white/70">
                      {row.performance}
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
