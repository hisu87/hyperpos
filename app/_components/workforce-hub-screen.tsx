import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Building2,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  LayoutDashboard,
  MoreVertical,
  Search,
  Settings,
  Shield,
  SlidersHorizontal,
  Sparkles,
  UserRoundPlus,
  Users,
  Wallet,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
};

type StatCard = {
  label: string;
  value: string;
  accent: string;
  icon: LucideIcon;
};

type EmployeeRow = {
  name: string;
  email: string;
  role: string;
  status: string;
  statusTone: "green" | "muted";
  performance: string;
  progress: number;
  avatarTone: string;
};

const navItems: NavItem[] = [
  { label: "Overview", href: "/global-overview", icon: LayoutDashboard },
  { label: "Chains", href: "/chains-management", icon: Building2 },
  { label: "Analytics", href: "/analytics-reporting", icon: BarChart3 },
  { label: "Employees", href: "/workforce-hub", icon: Users, active: true },
  { label: "Settings", href: "/enterprise-settings", icon: Settings },
  { label: "Support", href: "/support-center", icon: CircleHelp },
  { label: "System Status", href: "/system-status", icon: Shield },
];

const statCards: StatCard[] = [
  {
    label: "Active Staff",
    value: "1,284",
    accent: "+12%",
    icon: Users,
  },
  {
    label: "Labor Cost Ratio",
    value: "42.1%",
    accent: "$2.4M",
    icon: Wallet,
  },
  {
    label: "Efficiency Score",
    value: "4.8",
    accent: "Top 5%",
    icon: Sparkles,
  },
  {
    label: "Open Positions",
    value: "14",
    accent: "Active",
    icon: UserRoundPlus,
  },
];

const employeeRows: EmployeeRow[] = [
  {
    name: "Alex Rivera",
    email: "alex.r@hyperpos.com",
    role: "Senior Store Manager",
    status: "CLOCKED IN",
    statusTone: "green",
    performance: "94%",
    progress: 94,
    avatarTone: "from-amber-300 via-orange-500 to-rose-500",
  },
  {
    name: "Jordan Smith",
    email: "j.smith@hyperpos.com",
    role: "Shift Supervisor",
    status: "ON LEAVE",
    statusTone: "muted",
    performance: "82%",
    progress: 82,
    avatarTone: "from-sky-300 via-cyan-400 to-slate-500",
  },
  {
    name: "Elena Vance",
    email: "e.vance@hyperpos.com",
    role: "Logistics Coordinator",
    status: "CLOCKED IN",
    statusTone: "green",
    performance: "98%",
    progress: 98,
    avatarTone: "from-fuchsia-400 via-pink-500 to-indigo-500",
  },
  {
    name: "Marcus Chen",
    email: "m.chen@hyperpos.com",
    role: "Lead Associate",
    status: "CLOCKED IN",
    statusTone: "green",
    performance: "88%",
    progress: 88,
    avatarTone: "from-emerald-300 via-teal-400 to-slate-600",
  },
];

function Avatar({ name, tone }: { name: string; tone: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-linear-to-br ${tone} text-[0.65rem] font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]`}>
      {initials}
    </div>
  );
}

function StatIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1f342d] bg-[#101714] text-[#45e6aa]">
      <Icon className="h-4 w-4" />
    </div>
  );
}

export function WorkforceHubScreen() {
  return (
    <div className="min-h-screen bg-[#090A0D] text-white">
      <div className="flex min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(0,208,132,0.12),transparent_34%),linear-gradient(180deg,#090A0D_0%,#08090B_100%)]">
        <aside className="hidden w-70 flex-col border-r border-white/6 bg-[#0b0c10] px-6 py-5 xl:flex">
          <div className="flex items-center gap-3 pb-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00D084]/12 text-sm font-semibold text-[#00D084] shadow-[0_0_28px_rgba(0,208,132,0.2)]">
              HP
            </div>
            <div>
              <div className="text-lg font-semibold tracking-[-0.04em] text-[#00D084]">
                Hyper POS
              </div>
              <div className="text-[0.72rem] uppercase tracking-[0.28em] text-white/32">
                Precision Retail
              </div>
            </div>
          </div>

          <div className="mb-7 rounded-[1.6rem] border border-white/8 bg-white/3 px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#4de6a1,#0e3324_74%)] text-sm font-semibold text-[#effff7] shadow-[0_0_24px_rgba(0,208,132,0.28)]">
                GA
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  Global Admin
                </div>
                <div className="text-[0.66rem] uppercase tracking-[0.28em] text-white/35">
                  Precision Retail
                </div>
              </div>
            </div>
          </div>

          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-full px-4 py-3 text-sm transition ${
                    item.active
                      ? "bg-white/6 text-[#00D084] shadow-[inset_0_0_0_1px_rgba(0,208,132,0.12)]"
                      : "text-white/35 hover:bg-white/5 hover:text-white/70"
                  }`}>
                  <Icon
                    className={`h-4 w-4 ${item.active ? "text-[#00D084]" : "text-white/34"}`}
                  />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-8">
            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2be98f] px-5 py-3 text-sm font-semibold text-[#06140d] shadow-[0_16px_34px_rgba(0,208,132,0.25)] transition hover:-translate-y-px hover:bg-[#44f3a0]">
              <span className="text-lg leading-none">+</span>
              Add New Chain
            </button>
          </div>
        </aside>

        <main className="flex min-h-screen flex-1 flex-col">
          <div className="border-b border-white/5 px-5 py-4 sm:px-6 xl:px-8">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex items-center gap-6">
                <div className="hidden items-center gap-6 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/26 sm:flex">
                  <span className="text-[#00D084]">WORKFORCE</span>
                  <span>INVENTORY</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/6 bg-white/4 px-4 py-2 text-sm text-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                  <Search className="h-4 w-4 text-white/25" />
                  Global Search...
                </div>
              </div>

              <div className="flex items-center gap-3 text-white/35">
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/6 bg-white/3 transition hover:border-white/12 hover:bg-white/5">
                  <Bell className="h-4 w-4" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/6 bg-white/3 transition hover:border-white/12 hover:bg-white/5">
                  <CircleHelp className="h-4 w-4" />
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/6 bg-white/3 transition hover:border-white/12 hover:bg-white/5">
                  <Users className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 px-5 py-5 sm:px-6 xl:px-8 xl:py-8">
            <div className="mx-auto flex w-full max-w-277.5 flex-col gap-7">
              <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
                <div className="max-w-160">
                  <h1 className="text-[clamp(3.3rem,6vw,5.8rem)] font-semibold leading-[0.9] tracking-[-0.08em] text-white">
                    Workforce
                    <br />
                    Hub.
                  </h1>
                  <p className="mt-6 max-w-115 text-sm leading-7 text-white/28 sm:text-base">
                    Manage your global talent fleet across all active retail
                    chains with kinetic real-time monitoring.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row xl:pb-3">
                  <button className="inline-flex h-15 items-center justify-center rounded-full border border-white/6 bg-white/2 px-6 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white/86 transition hover:border-white/12 hover:bg-white/4">
                    View
                    <span className="ml-1 block">Schedules</span>
                  </button>
                  <button className="inline-flex h-15 items-center justify-center rounded-full bg-[#2be98f] px-7 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#07140d] shadow-[0_16px_34px_rgba(0,208,132,0.28)] transition hover:-translate-y-0.5 hover:bg-[#44f3a0]">
                    Global
                    <span className="ml-1 block">Recruitment</span>
                  </button>
                </div>
              </section>

              <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {statCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <article
                      key={card.label}
                      className="rounded-4xl border border-white/5 bg-[#121418] px-6 py-5 shadow-[0_18px_42px_rgba(0,0,0,0.28)]">
                      <div className="flex items-start justify-between gap-3">
                        <StatIcon icon={Icon} />
                        <span className="rounded-full bg-[#152a1f] px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[#71e9b3]">
                          {card.accent}
                        </span>
                      </div>
                      <div className="mt-10 text-[2.4rem] font-semibold tracking-[-0.08em] text-white">
                        {card.value}
                      </div>
                      <div className="mt-1 text-[0.67rem] uppercase tracking-[0.24em] text-white/28">
                        {card.label}
                      </div>
                    </article>
                  );
                })}
              </section>

              <section className="overflow-hidden rounded-[2.25rem] border border-white/5 bg-[#111317] shadow-[0_24px_70px_rgba(0,0,0,0.34)]">
                <div className="flex flex-col gap-4 border-b border-white/5 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                  <div>
                    <h2 className="text-[1.4rem] font-semibold tracking-[-0.05em] text-white">
                      Employee Directory
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex rounded-full border border-white/5 bg-white/4 p-1 text-xs font-medium">
                      <button className="rounded-full bg-white/8 px-4 py-2 text-[#7ff2bf]">
                        All Staff
                      </button>
                      <button className="rounded-full px-4 py-2 text-white/30">
                        By Chain
                      </button>
                    </div>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-white/4 text-white/40 transition hover:text-white/70">
                      <SlidersHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full border-separate border-spacing-0 text-left">
                    <thead className="bg-white/2 text-[0.63rem] uppercase tracking-[0.26em] text-white/20">
                      <tr>
                        <th className="px-6 py-4 font-medium">Employee</th>
                        <th className="px-6 py-4 font-medium">Role</th>
                        <th className="px-6 py-4 font-medium">Status</th>
                        <th className="px-6 py-4 font-medium">Performance</th>
                        <th className="px-6 py-4 text-right font-medium">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {employeeRows.map((row) => (
                        <tr key={row.name} className="border-t border-white/5">
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-4">
                              <Avatar name={row.name} tone={row.avatarTone} />
                              <div>
                                <div className="text-sm font-semibold text-white">
                                  {row.name}
                                </div>
                                <div className="text-[0.72rem] text-white/28">
                                  {row.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5 text-sm text-white/44">
                            {row.role}
                          </td>
                          <td className="px-6 py-5">
                            <div
                              className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] ${
                                row.statusTone === "green"
                                  ? "text-[#43e39d]"
                                  : "text-white/35"
                              }`}>
                              <span
                                className={`h-2 w-2 rounded-full ${
                                  row.statusTone === "green"
                                    ? "bg-[#43e39d] shadow-[0_0_10px_rgba(67,227,157,0.7)]"
                                    : "bg-white/28"
                                }`}
                              />
                              {row.status}
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-4">
                              <div className="h-1.5 w-24 rounded-full bg-white/8">
                                <div
                                  className="h-1.5 rounded-full bg-[#43e39d] shadow-[0_0_20px_rgba(67,227,157,0.36)]"
                                  style={{ width: `${row.progress}%` }}
                                />
                              </div>
                              <span className="text-sm font-semibold text-white/76">
                                {row.performance}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-5 text-right text-white/30">
                            <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/5 bg-white/3 transition hover:text-white/70">
                              <MoreVertical className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex items-center justify-between px-6 py-5 text-xs text-white/20">
                  <span>Showing 4 of 1,284 employees</span>
                  <div className="flex items-center gap-1.5">
                    <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/5 bg-white/3 text-white/30 transition hover:text-white/70">
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/5 bg-white/3 text-white/30 transition hover:text-white/70">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </section>

              <section className="grid gap-5 xl:grid-cols-2">
                <article className="relative overflow-hidden rounded-4xl border border-white/5 bg-[#121418] px-6 py-6 shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
                  <div className="max-w-65">
                    <h3 className="text-[1.45rem] font-semibold tracking-[-0.05em] text-white">
                      Workforce Insights
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/28">
                      Download comprehensive labor cost reports and efficiency
                      trends.
                    </p>
                    <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#43e39d] transition hover:text-[#76f2bb]">
                      Generate Report
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 rounded-tl-4xl bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.08))]" />
                  <div className="pointer-events-none absolute bottom-5 right-7 grid h-16 w-16 grid-cols-2 gap-1 opacity-30">
                    <span className="rounded-sm bg-white/8" />
                    <span className="rounded-sm bg-white/8" />
                    <span className="rounded-sm bg-white/10" />
                    <span className="rounded-sm bg-white/14" />
                  </div>
                </article>

                <article className="overflow-hidden rounded-4xl bg-[#52f0a0] px-6 py-6 text-[#07140d] shadow-[0_24px_70px_rgba(0,208,132,0.18)]">
                  <h3 className="max-w-65 text-[1.55rem] font-semibold tracking-[-0.05em]">
                    Talent Pipeline
                  </h3>
                  <p className="mt-3 max-w-[320px] text-sm leading-7 text-[#08331f]/74">
                    We are currently hiring for 14 roles across 3 regions.
                    Expand your reach.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <button className="rounded-full bg-[#0b5d36] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0a6d3f]">
                      Open Recruitment
                    </button>
                    <button className="rounded-full border border-[#0d5c38]/20 bg-transparent px-6 py-3 text-sm font-semibold text-[#0c4a2b] transition hover:bg-[#ffffff]/15">
                      Manage Postings
                    </button>
                  </div>
                </article>
              </section>
            </div>
          </div>
        </main>
      </div>

      <button className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#31e595] text-[#062114] shadow-[0_18px_40px_rgba(49,229,149,0.35)] transition hover:-translate-y-0.5 hover:bg-[#45f2a2]">
        <span className="text-3xl leading-none">+</span>
      </button>
    </div>
  );
}
