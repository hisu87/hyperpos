import GlobalManagementLayout from "@/app/global-management-layout";
import {
  CheckCircle2,
  Database,
  LayoutGrid,
  Repeat,
  Server,
  Sparkles,
} from "lucide-react";

const coreInfrastructure = [
  { icon: Sparkles, name: "API", detail: "Global endpoint latency: 14ms" },
  {
    icon: LayoutGrid,
    name: "Dashboard",
    detail: "Console & management interface",
  },
  {
    icon: Repeat,
    name: "Terminal Sync",
    detail: "Real-time edge device coordination",
  },
  {
    icon: Database,
    name: "Database",
    detail: "Transaction integrity & persistence",
  },
];

const incidents = [
  {
    date: "May 14",
    title: "Partial API Latency in EU-West-1",
    detail:
      "Resolved. Performance returned to baseline after automated failover.",
    tag: "ISSUE #9422",
  },
  {
    date: "Apr 28",
    title: "Scheduled Maintenance - Database Sharding",
    detail:
      "Completed. Systems remained operational during the maintenance window.",
    tag: "MAINTENANCE",
  },
  {
    date: "Mar 02",
    title: "Dashboard Authentication Timeout",
    detail: "Resolved. Fixed a rare condition in the SSO gateway.",
    tag: "ISSUE #8419",
  },
];

const regions = [
  "North America",
  "European Union",
  "Asia Pacific",
  "South America",
];

export default function SystemStatusPage() {
  return (
    <GlobalManagementLayout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-semibold text-white mb-2 mt-2">
          System Status
        </h1>
        <p className="text-white/60 mb-8">
          View the real-time status and operational health of your assigned
          chain. This page is only available to authenticated users.
        </p>

        <div className="grid gap-8 lg:grid-cols-2 mb-10">
          <div className="rounded-3xl border border-white/10 bg-[#10161b] p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Core Infrastructure
            </h2>
            <div className="space-y-3">
              {coreInfrastructure.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-3xl bg-white/5 p-4">
                    <div className="flex items-center gap-4">
                      <span className="rounded-full bg-white/5 p-3">
                        <Icon className="h-5 w-5 text-[#00D084]" />
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-sm text-white/45">{item.detail}</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-[#00D084]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#9ef2ca]">
                      Operational
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#10161b] p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Regional Availability
            </h2>
            <div className="space-y-3 text-sm">
              {regions.map((region) => (
                <div
                  key={region}
                  className="flex items-center justify-between text-white/70">
                  <span>{region}</span>
                  <CheckCircle2 className="h-4 w-4 text-[#00D084]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-10">
          <div className="rounded-3xl border border-white/10 bg-[#10161b] p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Incident History
            </h2>
            <div className="space-y-6">
              {incidents.map((incident) => (
                <article
                  key={incident.title}
                  className="grid gap-2 md:grid-cols-[80px_1fr]">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">
                    {incident.date}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold">{incident.title}</h3>
                    <p className="mt-1 text-sm text-white/50">
                      {incident.detail}
                    </p>
                    <span className="mt-3 inline-flex rounded-full bg-white/8 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white/65">
                      {incident.tag}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#10161b] p-8 text-sm text-white/55">
            <div className="flex items-center gap-2 text-[#00D084]">
              <Server className="h-4 w-4" />
              <span className="font-semibold uppercase tracking-[0.2em]">
                Ops Notes
              </span>
            </div>
            <p className="mt-4 leading-7">
              Hyper POS runs an edge-first architecture. Local terminals
              continue processing offline, then reconcile transactional deltas
              when connectivity is restored.
            </p>
            <p className="mt-4 leading-7">
              No critical incidents currently impact checkout or inventory
              journal consistency.
            </p>
          </div>
        </div>
      </div>
    </GlobalManagementLayout>
  );
}
