import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  ChevronRight,
  CircleCheckBig,
  LayoutGrid,
  MonitorSmartphone,
  Sparkles,
  TerminalSquare,
  Zap,
} from "lucide-react";

const navItems = [
  { label: "Main Terminal", href: "#main-terminal" },
  { label: "Inventory", href: "#inventory" },
  { label: "Analytics", href: "#analytics" },
  { label: "Terminal View", href: "#terminal-view" },
];

const featureCards = [
  {
    icon: Zap,
    title: "Instant Speed",
    description:
      "Sub-50ms interactions for cashiers who need to move fast without waiting on the network.",
  },
  {
    icon: Boxes,
    title: "Smart Inventory",
    description:
      "Real-time stock visibility with offline-safe sync logic that keeps every adjustment traceable.",
  },
  {
    icon: Sparkles,
    title: "Premium Aesthetics",
    description:
      "A refined interface built for high-end retail operations and a more confident sales floor.",
  },
];

const trustQuotes = [
  {
    quote:
      "Finally a POS that respects both cashier speed and system discipline.",
    company: "AZEL & CO.",
  },
  {
    quote:
      "The speed during peak hours feels native, not like a web app pretending to be one.",
    company: "VELD CAFE",
  },
  {
    quote:
      "Inventory and transactions stay aligned even when the connection drops mid-shift.",
    company: "NOMA COLLECTIVE",
  },
  {
    quote: "A technical interface that the team actually enjoys using all day.",
    company: "THE LUMEN LAB",
  },
];

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "System Status", href: "/system-status" },
  { label: "Contact Sales", href: "/contact-sales" },
];

function SectionTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-emerald-300/90 backdrop-blur-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-[#00D084]" />
      {label}
    </span>
  );
}

function DeviceMockup() {
  return (
    <figure className="relative overflow-hidden rounded-4xl border border-white/8 bg-[#101318] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.55)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,208,132,0.18),transparent_42%),linear-gradient(180deg,rgba(13,15,19,0.9),rgba(9,10,13,0.95))]" />
      <div className="relative rounded-[1.6rem] border border-white/8 bg-[#0f1519] p-4">
        <div className="mb-4 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.28em] text-white/40">
          <span>Hyper Terminal</span>
          <span>v1.0</span>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.25rem] border border-white/6 bg-[#0b1115] p-5">
            <div className="flex items-center gap-2 text-emerald-300">
              <TerminalSquare className="h-4 w-4" />
              <span className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-emerald-300/80">
                Main Terminal
              </span>
            </div>
            <div className="mt-4 space-y-2 font-mono text-[0.68rem] leading-5 text-cyan-100/80">
              <p>&gt; scanning cart items...</p>
              <p>&gt; syncing local journal...</p>
              <p>&gt; checkout prepared in 0.04s</p>
              <p className="text-emerald-300">&gt; transaction committed</p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-[1.25rem] border border-white/6 bg-[#121820] p-4">
              <div className="flex items-center gap-2 text-emerald-300">
                <LayoutGrid className="h-4 w-4" />
                <span className="text-[0.62rem] font-medium uppercase tracking-[0.25em] text-emerald-300/80">
                  Daily Status
                </span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-white/70">
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-[0.62rem] uppercase tracking-[0.24em] text-white/35">
                    Orders
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">186</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-[0.62rem] uppercase tracking-[0.24em] text-white/35">
                    Sync
                  </p>
                  <p className="mt-1 text-lg font-semibold text-emerald-300">
                    100%
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[1.25rem] border border-white/6 bg-[#10161b] p-4">
              <div className="flex items-center gap-2 text-emerald-300">
                <MonitorSmartphone className="h-4 w-4" />
                <span className="text-[0.62rem] font-medium uppercase tracking-[0.25em] text-emerald-300/80">
                  Live View
                </span>
              </div>
              <div className="mt-3 h-24 rounded-xl border border-dashed border-white/10 bg-[linear-gradient(135deg,rgba(0,208,132,0.12),rgba(10,14,18,0.4))]" />
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#090A0D] text-white antialiased">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#090A0D]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="text-sm font-semibold tracking-wide text-white">
            Hyper POS
          </a>

          <nav
            className="hidden items-center gap-2 md:flex"
            aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-white/55 transition hover:bg-white/5 hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full bg-[#00D084] px-4 py-2 text-sm font-semibold text-[#04110b] transition hover:-translate-y-px hover:bg-[#19e59a]">
            Request Demo
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main id="top" className="relative">
        <section className="relative isolate overflow-hidden px-4 pb-10 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pb-16 lg:pt-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,208,132,0.12),transparent_28%),radial-gradient(circle_at_50%_35%,rgba(12,69,47,0.24),transparent_45%)]" />
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
            <div className="mb-8 md:mb-10">
              <SectionTag label="Immersive retail system" />
            </div>

            <div className="max-w-4xl space-y-6">
              <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                The Future of{" "}
                <span className="bg-linear-to-r from-white via-white to-[#00D084] bg-clip-text text-transparent">
                  Retail Speed
                </span>
              </h1>

              <p className="mx-auto max-w-2xl text-pretty text-sm leading-7 text-white/48 sm:text-base lg:text-lg">
                An immersive commerce experience built for high-performance
                retail. Zero friction, total control, and an offline-first core
                designed to keep every counter moving.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a
                href="#main-terminal"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00D084] px-6 py-3 text-sm font-semibold text-[#04110b] transition hover:-translate-y-px hover:bg-[#19e59a]">
                Experience Hyper
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#terminal-view"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/20 hover:bg-white/10">
                Watch Film
              </a>
            </div>

            <div id="main-terminal" className="mt-12 w-full max-w-5xl lg:mt-14">
              <DeviceMockup />
            </div>
          </div>
        </section>

        <section
          id="analytics"
          className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="grid gap-4 md:grid-cols-3">
            {featureCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="rounded-3xl border border-white/6 bg-[#111319] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                  <Icon className="h-5 w-5 text-[#00D084]" />
                  <h2 className="mt-5 text-lg font-semibold text-white">
                    {card.title}
                  </h2>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/45">
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section
          id="terminal-view"
          className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <article className="order-2 lg:order-1">
              <SectionTag label="The main edge" />
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Hyper Terminal
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/50">
                A retail-grade command surface for fast checkout, inventory
                checks, and payment handling. It is designed to feel immediate
                under load, even when the connection is unstable.
              </p>

              <ul className="mt-7 space-y-4 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <CircleCheckBig className="mt-0.5 h-5 w-5 text-[#00D084]" />
                  <span>
                    Offline-safe actions with optimistic local writes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CircleCheckBig className="mt-0.5 h-5 w-5 text-[#00D084]" />
                  <span>
                    Minimal decision latency for cashiers on the floor.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CircleCheckBig className="mt-0.5 h-5 w-5 text-[#00D084]" />
                  <span>
                    One-screen workflow with zero unnecessary navigation.
                  </span>
                </li>
              </ul>
            </article>

            <div className="order-1 lg:order-2">
              <div className="rounded-4xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,20,25,0.96),rgba(9,10,13,0.95))] p-4 shadow-[0_25px_90px_rgba(0,0,0,0.5)]">
                <div className="rounded-3xl border border-white/6 bg-[#0d1318] p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[0.68rem] uppercase tracking-[0.28em] text-white/35">
                      Session Log
                    </span>
                    <span className="rounded-full border border-[#00D084]/20 bg-[#00D084]/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#00D084]">
                      Online Ready
                    </span>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/6 bg-[#0b1014] p-4 font-mono text-[0.72rem] leading-6 text-cyan-100/70">
                    <p>&gt; validating cart integrity...</p>
                    <p>&gt; applying local journal entry...</p>
                    <p>&gt; syncing inventory delta...</p>
                    <p className="text-[#00D084]">&gt; ready for checkout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-4xl border border-white/8 bg-[#0f1419] p-4 shadow-[0_25px_90px_rgba(0,0,0,0.45)]">
                <div className="rounded-[1.4rem] border border-white/6 bg-[#101a20] p-5">
                  <div className="mb-4 flex items-center gap-2 text-[#00D084]">
                    <Boxes className="h-4 w-4" />
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.26em]">
                      Live inventory
                    </span>
                  </div>
                  <div className="space-y-3 text-sm text-white/60">
                    <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                      <span>Stock level</span>
                      <span className="font-semibold text-white">97%</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                      <span>Sync queue</span>
                      <span className="font-semibold text-[#00D084]">
                        Healthy
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                      <span>Last local write</span>
                      <span className="font-semibold text-white">0.2s ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <article className="order-1 lg:order-2">
              <SectionTag label="The intelligence" />
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Live Inventory
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/50">
                Move through thousands of SKUs with a single unified view. The
                interface keeps stock state readable, fast, and calm even during
                peak retail traffic.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#00D084]/15 bg-[#00D084]/8 px-4 py-2 text-sm text-[#90f0c8]">
                <Sparkles className="h-4 w-4 text-[#00D084]" />
                AIO-powered inventory intelligence
              </div>
            </article>
          </div>
        </section>

        <section
          className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
          aria-labelledby="trust-heading">
          <div className="rounded-4xl border border-white/6 bg-[#101217] px-4 py-12 sm:px-6 lg:px-10">
            <h2
              id="trust-heading"
              className="text-center text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
              Trusted by Disruptors
            </h2>

            <div className="mt-8 grid gap-4 lg:grid-cols-4">
              {trustQuotes.map((item) => (
                <article
                  key={item.company}
                  className="rounded-[1.25rem] border border-white/6 bg-white/4 p-5">
                  <p className="text-sm leading-6 text-white/50">
                    “{item.quote}”
                  </p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#00D084]">
                    {item.company}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="cta"
          className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
          <div className="rounded-[2.25rem] border border-white/6 bg-[radial-gradient(circle_at_top,rgba(0,208,132,0.14),transparent_42%),linear-gradient(180deg,#11141a,#0b0d10)] px-6 py-16 text-center sm:px-10 lg:px-16">
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Elevate Your Business
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/48 sm:text-base">
              Bring the retail floor, inventory control, and sync reliability
              into a single interface designed for speed.
            </p>
            <a
              href="#top"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#00D084] px-6 py-3 text-sm font-semibold text-[#04110b] transition hover:-translate-y-px hover:bg-[#19e59a]">
              Get Started
            </a>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-[#47484b]/15 bg-[#0d0e11]">
        <div className="mx-auto flex w-full max-w-480 flex-col items-center justify-between px-12 py-12 md:flex-row">
          <div className="mb-8 flex flex-col gap-2 md:mb-0">
            <div className="text-2xl font-semibold tracking-tight text-[#f8f9fa]">
              Hyper POS
            </div>
            <div className="text-sm tracking-wide text-[#f8f9fa]/40">
              © 2024 Hyper POS. Kinetic Monolith Engineering.
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm tracking-wide text-[#f8f9fa]/45 md:gap-12">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                className="transition-colors hover:text-[#f8f9fa]"
                href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
