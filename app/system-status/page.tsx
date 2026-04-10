import Link from "next/link";
import {
  CheckCircle2,
  Database,
  LayoutGrid,
  Repeat,
  Server,
  Sparkles,
} from "lucide-react";

const navLinks = ["Platform", "Hardware", "Pricing", "Resources"];

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
    <div className="min-h-screen bg-[#090A0D] text-[#F8F9FA]">
      <header className="border-b border-white/5">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            HYPER POS
          </Link>
          <nav className="hidden items-center gap-9 text-sm text-white/45 md:flex">
            {navLinks.map((item) => (
              <span
                key={item}
                className="transition-colors hover:text-white/75">
                {item}
              </span>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-white/55 md:inline">
              Sign In
            </span>
            <Link
              href="/contact-sales"
              className="rounded-full bg-[#00D084] px-5 py-2.5 text-sm font-semibold text-[#03150e] transition hover:-translate-y-px hover:bg-[#2ae8a4]">
              Contact Sales
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl space-y-8 px-5 pb-24 pt-10 lg:px-8">
        <section className="rounded-[2.25rem] bg-[#00D084] px-8 py-8 text-[#032118]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em]">
                Real-time network status
              </p>
              <h1 className="mt-2 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
                All Systems Operational.
              </h1>
            </div>
            <div className="lg:text-right">
              <p className="text-sm font-medium">Uptime Last 90 Days</p>
              <p className="text-6xl font-semibold tracking-tight">99.998%</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <article className="rounded-4xl border border-white/6 bg-[#10141d] p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-4xl font-semibold tracking-tight">
                Core Infrastructure
              </h2>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00D084]">
                Global Clusters
              </span>
            </div>

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
          </article>

          <aside className="space-y-6">
            <article className="rounded-4xl border border-white/6 bg-[#10141d] p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00D084]">
                Traffic Matrix
              </h3>
              <div className="mt-5 space-y-3">
                <div className="rounded-full bg-white/5 p-4">
                  <p className="text-xs uppercase text-white/35">
                    Requests / sec
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="h-1.5 w-3/4 rounded bg-[#00D084]" />
                    <span className="text-sm font-semibold text-[#00D084]">
                      128.4k
                    </span>
                  </div>
                </div>
                <div className="rounded-full bg-white/5 p-4">
                  <p className="text-xs uppercase text-white/35">Error Rate</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="h-1.5 w-1/12 rounded bg-[#00D084]" />
                    <span className="text-sm font-semibold text-[#00D084]">
                      0.001%
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-6 gap-2">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-8 rounded ${i % 4 === 0 ? "bg-[#57e4ab]" : i % 3 === 0 ? "bg-[#21513f]" : "bg-[#317b5c]"}`}
                  />
                ))}
              </div>
            </article>

            <article className="rounded-4xl border border-white/6 bg-[#10141d] p-5">
              <h3 className="text-2xl font-semibold">Regional Availability</h3>
              <div className="mt-4 space-y-3 text-sm">
                {regions.map((region) => (
                  <div
                    key={region}
                    className="flex items-center justify-between text-white/70">
                    <span>{region}</span>
                    <CheckCircle2 className="h-4 w-4 text-[#00D084]" />
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-4xl border border-[#00D084]/20 bg-[linear-gradient(160deg,#0d2a22,#10141d)] p-5">
              <h3 className="text-2xl font-semibold">Automated Alerts</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">
                Subscribe to real-time incident reports via Webhook, Slack, or
                SMS.
              </p>
              <button className="mt-6 w-full rounded-full bg-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/20">
                Configure Alerts
              </button>
            </article>
          </aside>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <article className="rounded-4xl border border-white/6 bg-[#10141d] p-6">
            <h2 className="text-4xl font-semibold tracking-tight">
              Incident History
            </h2>
            <div className="mt-6 space-y-6">
              {incidents.map((incident) => (
                <article
                  key={incident.title}
                  className="grid gap-2 md:grid-cols-[80px_1fr]">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">
                    {incident.date}
                  </p>
                  <div>
                    <h3 className="text-2xl font-semibold">{incident.title}</h3>
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
          </article>

          <div className="rounded-4xl border border-white/6 bg-[#10141d] p-5 text-sm text-white/55">
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
        </section>
      </main>

      <footer className="border-t border-white/5 bg-[#090c12]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 text-sm text-white/40 md:grid-cols-4 lg:px-8">
          <div>
            <p className="font-semibold text-white">HYPER POS</p>
            <p className="mt-4 text-xs">
              © 2024 HYPER RETAIL SYSTEMS. THE KINETIC MONOLITH.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00D084]">
              Product
            </p>
            <div className="mt-4 space-y-2">
              <span className="block">Documentation</span>
              <span className="block text-white">System Status</span>
              <span className="block">Pricing</span>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00D084]">
              Company
            </p>
            <div className="mt-4 space-y-2">
              <Link
                className="block transition-colors hover:text-white/80"
                href="/privacy-policy">
                Privacy Policy
              </Link>
              <Link
                className="block transition-colors hover:text-white/80"
                href="/terms-of-service">
                Terms of Service
              </Link>
              <span className="block">LinkedIn</span>
            </div>
          </div>
          <div className="text-xs text-white/30">
            Always-on operational transparency for enterprise retail
            infrastructure.
          </div>
        </div>
      </footer>
    </div>
  );
}
