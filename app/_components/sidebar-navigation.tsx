"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Layers3,
  BarChart3,
  Users,
  Settings,
  LifeBuoy,
  Server,
  LogOut,
  Repeat,
} from "lucide-react";

const navItems = [
  { label: "Overview", href: "/global-overview", icon: LayoutDashboard },
  { label: "Chains", href: "/chains-management", icon: Layers3 },
  { label: "Analytics", href: "/analytics-reporting", icon: BarChart3 },
  { label: "Employees", href: "/workforce-hub", icon: Users },
  { label: "Settings", href: "/enterprise-settings", icon: Settings },
  { label: "Support", href: "/support-center", icon: LifeBuoy },
  { label: "System Status", href: "/system-status", icon: Server },
];

export function SidebarNavigation() {
  const pathname = usePathname();
  const profileActive =
    pathname === "/personal-profile" ||
    pathname.startsWith("/personal-profile/");

  const isActive = (href: string) => {
    if (pathname === href) {
      return true;
    }

    if (href === "/workforce-hub" && pathname === "/workforce-hub-full-nav") {
      return true;
    }

    return pathname.startsWith(`${href}/`);
  };

  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-[#16181D] border-r border-white/5 py-8 px-4">
      <div className="mb-10 px-2 relative">
        <div
          className={`w-full flex items-center gap-2 rounded-2xl px-3 py-2 transition-colors ${profileActive ? "border border-[#00D084]/45 bg-[#1f2a25]" : "border border-white/10 bg-[#1b1d23]"}`}>
          <Link
            href="/personal-profile"
            className="h-10 w-10 rounded-full bg-[#00D084]/20 flex items-center justify-center hover:bg-[#00D084]/30 transition"
            aria-label="Go to personal profile">
            <span className="text-2xl font-bold text-[#00D084]">H</span>
          </Link>
          <div className="relative group/profile-menu">
            <button
              type="button"
              className="flex items-center gap-2 text-left rounded-xl px-1 py-1 hover:bg-white/5 transition"
              aria-label="Open account menu">
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-white">
                  Enterprise Admin
                </span>
                <span className="text-xs text-white/40">GLOBAL FLEET</span>
              </span>
            </button>

            <div className="pointer-events-none absolute left-0 top-[calc(100%+8px)] z-20 w-52 rounded-2xl border border-white/10 bg-[#101217] p-2 opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-150 group-hover/profile-menu:pointer-events-auto group-hover/profile-menu:opacity-100">
              <button
                type="button"
                className="w-full inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white">
                <Repeat className="h-4 w-4 text-[#00D084]" />
                Chuyển nhanh tài khoản
              </button>
              <button
                type="button"
                className="mt-1 w-full inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-red-300/90 transition-colors hover:bg-red-400/10 hover:text-red-200">
                <LogOut className="h-4 w-4" />
                Đăng xuất
              </button>
            </div>
          </div>
        </div>
      </div>
      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${active ? "bg-[#23262e] text-[#00D084]" : "text-white/70 hover:bg-[#1b1d23] hover:text-white"}`}>
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto px-2 pt-8">
        <button className="w-full rounded-full bg-[#00D084] py-2 text-sm font-semibold text-[#03150e] transition hover:bg-[#2ae8a4]">
          + NEW LOCATION
        </button>
      </div>
    </aside>
  );
}
