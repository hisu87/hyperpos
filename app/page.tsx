"use client";

import Link from "next/link";
import ScrollReveal from "@/app/_components/scroll-reveal";
import {
  ArrowRight,
  Boxes,
  ChevronRight,
  CircleCheckBig,
  Sparkles,
  Zap,
} from "lucide-react";
import { useState } from "react";

type TitleVariant = "cinematic" | "luxury";

const defaultTitleVariant: TitleVariant = "luxury";

const titleClassNames: Record<TitleVariant, string> = {
  cinematic: "title-highlight",
  luxury: "title-highlight-luxury",
};

const titleAccentClassNames: Record<TitleVariant, string> = {
  cinematic: "title-highlight-soft",
  luxury: "title-highlight-luxury-soft",
};

const titleSectionLabels: Record<TitleVariant, string> = {
  cinematic: "Cinematic",
  luxury: "Luxury",
};

const titleSectionDescriptions: Record<TitleVariant, string> = {
  cinematic: "High glow, stronger contrast, more dramatic motion.",
  luxury: "Softer, premium, and quieter for a refined impression.",
};

const navItems = [
  { label: "Main Terminal", href: "#terminal-view" },
  { label: "Inventory", href: "#inventory" },
  { label: "Analytics", href: "#analytics" },
  { label: "Testimonials", href: "#testimonials" },
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
  { label: "Site Map", href: "/site-map" },
  { label: "Contact Sales", href: "/contact-sales" },
];

function SectionTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-hyper-primary/20 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-hyper-primary/90 backdrop-blur-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-hyper-primary" />
      {label}
    </span>
  );
}

function DeviceMockup() {
  return (
    <figure className="terminal-green-wash terminal-green-wash--phase-1 relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-[#0c1116] p-8 shadow-[0_45px_100px_rgba(0,0,0,0.45)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_center,rgba(0,208,132,0.14),transparent_70%)] blur-3xl" />
      <div className="relative space-y-6">
        <div className="flex items-center justify-between rounded-[1.75rem] border border-white/10 bg-[#10161b]/95 px-4 py-3 text-sm text-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
          <div className="inline-flex items-center gap-3">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-hyper-primary" />
            <span>Hyper Terminal</span>
          </div>
          <span className="terminal-pill-glow rounded-full border border-hyper-primary/20 bg-hyper-primary/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-hyper-primary">
            Live
          </span>
        </div>

        <div className="rounded-4xl border border-white/10 bg-[#0b1116] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
          <div className="grid gap-5 lg:grid-cols-[1.12fr_0.95fr]">
            <div className="space-y-5">
              <div className="rounded-3xl border border-white/10 bg-[#11161b] p-5">
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span>Checkout snapshot</span>
                  <span className="font-semibold text-hyper-primary">
                    0.04s
                  </span>
                </div>
                <div className="mt-5 space-y-3 text-sm">
                  <p className="terminal-log-line terminal-log-line--motion terminal-log-line--delay-1">
                    &gt; product bundle loaded
                  </p>
                  <p className="terminal-log-line terminal-log-line--motion terminal-log-line--delay-2">
                    &gt; payment gateway warmed
                  </p>
                  <p className="terminal-log-line terminal-log-line--motion terminal-log-line--delay-3 terminal-log-line--active">
                    &gt; ready for next basket
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-[#10161b] p-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/40">
                    Orders
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">186</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[#10161b] p-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/40">
                    Sync
                  </p>
                  <p className="mt-3 text-xl font-semibold text-hyper-primary">
                    100%
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111a21] p-5">
              <div className="flex items-center justify-between text-sm text-white/60">
                <div className="space-y-1">
                  <p className="uppercase tracking-[0.28em] text-white/40">
                    Live view
                  </p>
                  <p className="text-sm text-white/70">Inventory + terminal</p>
                </div>
                <span className="terminal-pill-glow rounded-full border border-hyper-primary/20 bg-hyper-primary/10 px-2 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-hyper-primary">
                  sync
                </span>
              </div>
              <div className="mt-5 h-48 rounded-[1.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(0,208,132,0.14),rgba(9,14,18,0.45))]" />
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

export default function Home() {
  const [titleVariant, setTitleVariant] =
    useState<TitleVariant>(defaultTitleVariant);

  const titleClassName = titleClassNames[titleVariant];
  const titleAccentClassName = titleAccentClassNames[titleVariant];

  return (
    <div className="min-h-screen overflow-x-clip bg-hyper-bg text-hyper-text antialiased">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-hyper-bg/80 backdrop-blur-xl">
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

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="/login"
              className="rounded-full px-4 py-2 text-sm text-white/55 transition hover:bg-white/5 hover:text-white">
              Sign In
            </a>
            <a
              href="/signup"
              className="inline-flex items-center gap-2 rounded-full bg-hyper-primary px-4 py-2 text-sm font-semibold text-[#04110b] transition hover:-translate-y-px hover:bg-[#19e59a]">
              Sign Up
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="relative">
        <section className="relative isolate overflow-hidden px-4 pb-16 pt-20 sm:px-6 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,208,132,0.16),transparent_30%),radial-gradient(circle_at_50%_35%,rgba(12,69,47,0.22),transparent_45%)]" />
          <div className="ambient-drift pointer-events-none absolute left-[8%] top-[14%] h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(0,208,132,0.18),transparent_70%)] blur-3xl" />
          <div className="ambient-float pointer-events-none absolute right-[10%] top-[22%] h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(72,230,166,0.16),transparent_72%)] blur-2xl" />
          <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] xl:gap-24">
            <ScrollReveal className="flex flex-col justify-center gap-10 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start">
                <span className="inline-flex items-center rounded-full border border-hyper-primary/20 bg-white/5 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-hyper-primary backdrop-blur-sm">
                  Immersive retail system
                </span>
              </div>

              <div className="flex flex-col items-center gap-3 lg:items-start">
                <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
                  <button
                    type="button"
                    onClick={() => setTitleVariant("cinematic")}
                    aria-pressed={titleVariant === "cinematic"}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                      titleVariant === "cinematic"
                        ? "bg-hyper-primary text-[#04110b] shadow-[0_0_18px_rgba(0,208,132,0.25)]"
                        : "text-white/55 hover:text-white"
                    }`}>
                    Cinematic
                  </button>
                  <button
                    type="button"
                    onClick={() => setTitleVariant("luxury")}
                    aria-pressed={titleVariant === "luxury"}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                      titleVariant === "luxury"
                        ? "bg-hyper-primary text-[#04110b] shadow-[0_0_18px_rgba(0,208,132,0.25)]"
                        : "text-white/55 hover:text-white"
                    }`}>
                    Luxury
                  </button>
                </div>
                <p className="text-[0.72rem] tracking-[0.18em] text-white/38 uppercase">
                  {titleSectionLabels[titleVariant]} mode active -{" "}
                  {titleSectionDescriptions[titleVariant]}
                </p>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                  The Future of{" "}
                  <span className={titleClassName}>Retail Speed</span>
                </h1>
                <p className="mx-auto max-w-3xl text-sm leading-7 text-white/50 sm:text-base lg:mx-0 lg:max-w-2xl lg:text-lg">
                  An immersive commerce experience built for high-performance
                  retail. Zero friction, total control, and an offline-first
                  core designed to keep every counter moving.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
                <a
                  href="#terminal-view"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-hyper-primary px-6 py-3 text-sm font-semibold text-[#04110b] transition hover:-translate-y-px hover:bg-[#19e59a]">
                  Experience Hyper
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#testimonials"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/20 hover:bg-white/10">
                  Read Stories
                </a>
              </div>

              <div className="grid w-full max-w-3xl grid-cols-3 gap-3 text-left sm:gap-4 lg:mx-0">
                <article className="metric-card-glow rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                  <p className="text-[0.62rem] uppercase tracking-[0.24em] text-white/45">
                    Avg Checkout
                  </p>
                  <p className="metric-value-glow mt-2 text-xl font-semibold">
                    0.04s
                  </p>
                </article>
                <article className="metric-card-glow rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                  <p className="text-[0.62rem] uppercase tracking-[0.24em] text-white/45">
                    Sync Uptime
                  </p>
                  <p className="metric-value-glow mt-2 text-xl font-semibold">
                    99.98%
                  </p>
                </article>
                <article className="metric-card-glow rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                  <p className="text-[0.62rem] uppercase tracking-[0.24em] text-white/45">
                    Active Terminals
                  </p>
                  <p className="metric-value-glow mt-2 text-xl font-semibold">
                    2,400+
                  </p>
                </article>
              </div>
            </ScrollReveal>

            <ScrollReveal
              delayMs={120}
              className="ambient-float relative flex items-center justify-center">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_center,rgba(0,208,132,0.12),transparent_70%)] blur-3xl" />
              <DeviceMockup />
            </ScrollReveal>
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
                  className="rounded-3xl border border-white/6 bg-hyper-surface p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                  <Icon className="h-5 w-5 text-hyper-primary" />
                  <h2
                    className={`${titleAccentClassName} mt-5 text-lg font-semibold`}>
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
                Hyper <span className={titleClassName}>Terminal</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/50">
                A retail-grade command surface for fast checkout, inventory
                checks, and payment handling. It is designed to feel immediate
                under load, even when the connection is unstable.
              </p>

              <ul className="mt-7 space-y-4 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <CircleCheckBig className="mt-0.5 h-5 w-5 text-hyper-primary" />
                  <span>
                    Offline-safe actions with optimistic local writes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CircleCheckBig className="mt-0.5 h-5 w-5 text-hyper-primary" />
                  <span>
                    Minimal decision latency for cashiers on the floor.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CircleCheckBig className="mt-0.5 h-5 w-5 text-hyper-primary" />
                  <span>
                    One-screen workflow with zero unnecessary navigation.
                  </span>
                </li>
              </ul>
            </article>

            <div className="order-1 lg:order-2">
              <div className="terminal-green-wash terminal-green-wash--phase-2 rounded-4xl border border-white/8 bg-[linear-gradient(180deg,rgba(17,20,25,0.96),rgba(9,10,13,0.95))] p-4 shadow-[0_25px_90px_rgba(0,0,0,0.5)]">
                <div className="rounded-3xl border border-white/6 bg-[#0d1318] p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[0.68rem] uppercase tracking-[0.28em] text-white/35">
                      Session Log
                    </span>
                    <span className="terminal-pill-glow rounded-full border border-hyper-primary/20 bg-hyper-primary/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-hyper-primary">
                      Online Ready
                    </span>
                  </div>
                  <div className="terminal-feed-sweep rounded-[1.25rem] border border-white/6 bg-hyper-surface p-4 font-mono text-[0.72rem] leading-6">
                    <p className="terminal-log-line terminal-log-line--motion terminal-log-line--delay-1">
                      &gt; validating cart integrity...
                    </p>
                    <p className="terminal-log-line terminal-log-line--motion terminal-log-line--delay-2">
                      &gt; applying local journal entry...
                    </p>
                    <p className="terminal-log-line terminal-log-line--motion terminal-log-line--delay-3">
                      &gt; syncing inventory delta...
                    </p>
                    <p className="terminal-log-line terminal-log-line--motion terminal-log-line--delay-4 terminal-log-line--active">
                      &gt; ready for checkout
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="inventory"
          className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-4xl border border-white/8 bg-hyper-surface p-4 shadow-[0_25px_90px_rgba(0,0,0,0.45)]">
                <div className="rounded-[1.4rem] border border-white/6 bg-hyper-surface p-5">
                  <div className="mb-4 flex items-center gap-2 text-hyper-primary">
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
                      <span className="font-semibold text-hyper-primary">
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
                Live <span className={titleClassName}>Inventory</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/50">
                Move through thousands of SKUs with a single unified view. The
                interface keeps stock state readable, fast, and calm even during
                peak retail traffic.
              </p>

              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-hyper-primary/15 bg-hyper-primary/8 px-4 py-2 text-sm text-[#90f0c8]">
                <Sparkles className="h-4 w-4 text-hyper-primary" />
                AIO-powered inventory intelligence
              </div>
            </article>
          </div>
        </section>

        <section
          id="testimonials"
          className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
          aria-labelledby="trust-heading">
          <ScrollReveal className="relative overflow-hidden rounded-4xl border border-white/8 bg-hyper-surface px-4 py-12 sm:px-6 lg:px-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_center,rgba(0,208,132,0.16),transparent_70%)] blur-2xl" />
            <h2
              id="trust-heading"
              className="relative text-center text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
              Trusted by <span className={titleClassName}>Disruptors</span>
            </h2>

            <div className="relative mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <ScrollReveal
                delayMs={80}
                className="terminal-green-wash terminal-green-wash--phase-1 rounded-[1.6rem] border border-hyper-primary/25 bg-[linear-gradient(145deg,rgba(0,208,132,0.18),rgba(22,24,29,0.95))] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
                <p className="text-[0.62rem] uppercase tracking-[0.24em] text-hyper-primary/85">
                  Flagship Feedback
                </p>
                <p className="mt-4 text-xl leading-8 text-white sm:text-2xl">
                  “Hyper POS changed our peak-hour rhythm. The team processes
                  lines faster, and our inventory never drifts after offline
                  periods.”
                </p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
                  Nova Market Group
                </p>
              </ScrollReveal>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {trustQuotes.slice(0, 2).map((item) => (
                  <article
                    key={item.company}
                    className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <p className="text-sm leading-6 text-white/55">
                      “{item.quote}”
                    </p>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-hyper-primary">
                      {item.company}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative mt-4 grid gap-4 sm:grid-cols-2">
              {trustQuotes.slice(2).map((item) => (
                <article
                  key={item.company}
                  className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-sm leading-6 text-white/55">
                    “{item.quote}”
                  </p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-hyper-primary">
                    {item.company}
                  </p>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section
          id="cta"
          className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
          <div className="ambient-drift rounded-[2.25rem] border border-white/6 bg-[radial-gradient(circle_at_top,rgba(0,208,132,0.14),transparent_42%),linear-gradient(180deg,#11141a,#0b0d10)] px-6 py-16 text-center sm:px-10 lg:px-16">
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              Elevate Your <span className={titleClassName}>Business</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/48 sm:text-base">
              Bring the retail floor, inventory control, and sync reliability
              into a single interface designed for speed.
            </p>
            <a
              href="#top"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-hyper-primary px-6 py-3 text-sm font-semibold text-[#04110b] transition hover:-translate-y-px hover:bg-[#19e59a]">
              Get Started
            </a>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-[#47484b]/15 bg-[#0d0e11]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-6 py-12 md:flex-row md:px-8">
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
