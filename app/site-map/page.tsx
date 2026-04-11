"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ChevronDown,
  FileText,
  FolderOpen,
  Home,
  Link2,
  MapPinned,
  Search,
  X,
} from "lucide-react";
import { MarketingPageShell } from "@/app/_components/marketing-page-shell";

type TreeNode = {
  label: string;
  href?: string;
  description?: string;
  children?: TreeNode[];
};

type TreeSection = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  nodes: TreeNode[];
};

type TreeBranchProps = {
  section: TreeSection;
  isOpen: boolean;
  onToggle: () => void;
  matchCount: number;
  query: string;
};

const treeSections: TreeSection[] = [
  {
    title: "Core Experience",
    description: "Marketing and product pages.",
    icon: FolderOpen,
    accent: "text-[#00D084]",
    nodes: [
      { label: "Home", href: "/", description: "Landing experience." },
      { label: "About Us", href: "/about-us" },
      { label: "Platform", href: "/platform" },
      { label: "Hardware", href: "/hardware" },
      { label: "Pricing", href: "/pricing" },
      { label: "Resources", href: "/resources" },
      { label: "Contact Sales", href: "/contact-sales" },
    ],
  },
  {
    title: "Access",
    description: "Authentication and first-run flows.",
    icon: FolderOpen,
    accent: "text-[#9cf3cb]",
    nodes: [
      { label: "Login", href: "/login" },
      { label: "Sign Up", href: "/signup" },
      { label: "Loading", href: "/loading" },
      { label: "Onboarding", href: "/onboarding" },
    ],
  },
  {
    title: "Operations",
    description: "Management, monitoring, and support pages.",
    icon: FolderOpen,
    accent: "text-[#bff6df]",
    nodes: [
      { label: "Global Overview", href: "/global-overview" },
      { label: "Analytics Reporting", href: "/analytics-reporting" },
      { label: "Workforce Hub", href: "/workforce-hub" },
      { label: "Chains Management", href: "/chains-management" },
      { label: "Enterprise Settings", href: "/enterprise-settings" },
      { label: "Dashboard Service Detail", href: "/dashboard-service-detail" },
      { label: "System Status", href: "/system-status" },
      { label: "Support Center", href: "/support-center" },
      { label: "FAQ and Support Center", href: "/faq-support-center" },
      { label: "Security Protocol", href: "/security-protocol" },
    ],
  },
  {
    title: "Demo and Documentation",
    description: "Conversion and reference flows.",
    icon: FolderOpen,
    accent: "text-[#d8ffe9]",
    nodes: [
      { label: "Book a Performance Demo", href: "/book-performance-demo" },
      {
        label: "Demo Booking Confirmation",
        href: "/demo-booking-confirmation",
      },
      {
        label: "Developer API Documentation",
        href: "/developer-api-documentation",
      },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
  {
    title: "Redirect Aliases",
    description: "Alternate slugs kept for Figma parity and compatibility.",
    icon: Link2,
    accent: "text-[#86eab4]",
    nodes: [
      { label: "About Us - Hyper POS", href: "/about-us-hyper-pos" },
      {
        label: "Analytics Reporting - Full Nav",
        href: "/analytics-reporting-full-nav",
      },
      { label: "Book a Performance Demo", href: "/book-a-performance-demo" },
      {
        label: "Chains Management - Full Nav",
        href: "/chains-management-full-nav",
      },
      {
        label: "Enterprise Settings - Full Nav",
        href: "/enterprise-settings-full-nav",
      },
      { label: "FAQ and Support Center", href: "/faq-and-support-center" },
      {
        label: "Global Overview - Full Nav",
        href: "/global-overview-full-nav",
      },
      { label: "Hardware Showcase", href: "/hardware-showcase" },
      { label: "Hyper POS - Landing Page", href: "/hyper-pos-landing-page" },
      { label: "Loading Screen", href: "/loading-screen" },
      { label: "Login Screen - Updated", href: "/login-screen-updated" },
      { label: "Onboarding Experience", href: "/onboarding-experience" },
      { label: "Platform Overview", href: "/platform-overview" },
      { label: "Pricing Page", href: "/pricing-page" },
      { label: "Resources Hub", href: "/resources-hub" },
      { label: "Sign Up", href: "/sign-up" },
      { label: "Support Center - Full Nav", href: "/support-center-full-nav" },
      { label: "Workforce Hub - Full Nav", href: "/workforce-hub-full-nav" },
    ],
  },
];

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightText(text: string, query: string) {
  if (!query.trim()) {
    return text;
  }

  const regex = new RegExp(`(${escapeRegExp(query.trim())})`, "ig");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <mark
        key={`${part}-${index}`}
        className="rounded-md bg-[#00D084]/20 px-1 text-[#d7ffe9]">
        {part}
      </mark>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    ),
  );
}

function TreeLeaf({ node, query }: { node: TreeNode; query: string }) {
  return (
    <li className="group rounded-2xl border border-white/8 bg-white/5 p-4 transition hover:border-[#00D084]/25 hover:bg-white/[0.07]">
      <Link href={node.href ?? "#"} className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#00D084]/15 bg-[#00D084]/10 text-[#00D084] transition group-hover:border-[#00D084]/30 group-hover:bg-[#00D084]/15">
          <FileText className="h-4 w-4" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-2 text-sm font-medium text-white">
            {highlightText(node.label, query)}
            <ArrowRight className="h-3.5 w-3.5 text-white/30 transition group-hover:translate-x-0.5 group-hover:text-[#00D084]" />
          </span>
          <span className="mt-1 block text-xs text-white/45">
            {highlightText(node.href ?? "", query)}
          </span>
          {node.description ? (
            <span className="mt-2 block text-sm leading-6 text-white/55">
              {highlightText(node.description, query)}
            </span>
          ) : null}
        </span>
      </Link>
    </li>
  );
}

function matchesQuery(node: TreeNode, query: string) {
  if (!query) {
    return true;
  }

  const needle = query.toLowerCase();
  return [node.label, node.href ?? "", node.description ?? ""]
    .join(" ")
    .toLowerCase()
    .includes(needle);
}

function TreeBranch({
  section,
  isOpen,
  onToggle,
  matchCount,
  query,
}: TreeBranchProps) {
  const Icon = section.icon;

  return (
    <section className="rounded-4xl border border-white/10 bg-[#11161b] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start gap-4 text-left">
        <div
          className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 ${section.accent}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-white">
              {section.title}
            </h2>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-white/45">
              {matchCount} children
            </span>
          </div>
          <p className="mt-1 text-sm leading-6 text-white/50">
            {section.description}
          </p>
        </div>
        <ChevronDown
          className={`mt-1 h-5 w-5 shrink-0 text-white/35 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen ? (
        <ul className="mt-6 space-y-3 border-l border-white/10 pl-5">
          {section.nodes.map((node) => (
            <TreeLeaf key={node.href ?? node.label} node={node} query={query} />
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export default function SiteMapPage() {
  const [query, setQuery] = useState("");
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    () =>
      Object.fromEntries(treeSections.map((section) => [section.title, true])),
  );

  const canonicalCount = treeSections
    .slice(0, 4)
    .reduce((count, section) => count + section.nodes.length, 0);
  const aliasCount = treeSections[4].nodes.length;

  const filteredSections = useMemo(() => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return treeSections.map((section) => ({
        ...section,
        nodes: section.nodes,
      }));
    }

    return treeSections
      .map((section) => ({
        ...section,
        nodes: section.nodes.filter((node) => matchesQuery(node, trimmedQuery)),
      }))
      .filter((section) => section.nodes.length > 0);
  }, [query]);

  const visibleNodeCount = filteredSections.reduce(
    (count, section) => count + section.nodes.length,
    0,
  );

  return (
    <MarketingPageShell
      eyebrow="Navigation"
      title="Site Map"
      description="Tree view of all accessible pages and compatibility aliases in the current Hyper POS workspace."
      primaryCtaHref="/contact-sales"
      primaryCtaLabel="Request Demo">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-sm text-white/45">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition hover:border-[#00D084]/25 hover:text-white">
              <Home className="h-4 w-4 text-[#00D084]" />
              Home
            </Link>
            <span className="text-white/20">/</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/70">
              Site Map
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-[#11161b] p-5">
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/40">
                Canonical Routes
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">
                {canonicalCount}
              </p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-[#11161b] p-5">
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/40">
                Alias Routes
              </p>
              <p className="mt-3 text-3xl font-semibold text-white">
                {aliasCount}
              </p>
            </article>
            <article className="rounded-3xl border border-[#00D084]/20 bg-[#00D084]/10 p-5">
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-[#bff6df]">
                Quick Access
              </p>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Use the tree below to jump to product, auth, operations, and
                support views without searching the codebase.
              </p>
            </article>
          </div>

          <section className="rounded-4xl border border-white/10 bg-[#11161b] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.2)]">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/40">
                  Search tree
                </p>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  Filter by page title, slug, or description.
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0f1419] px-4 py-3 lg:w-md">
                <Search className="h-4 w-4 shrink-0 text-white/35" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search pages or aliases..."
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/35 transition hover:border-[#00D084]/25 hover:text-white">
                    <X className="h-4 w-4" />
                  </button>
                ) : null}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/35">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                {visibleNodeCount} visible
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                {query ? "Filtered" : "All sections open"}
              </span>
            </div>
          </section>

          <div className="space-y-5">
            {filteredSections.length > 0 ? (
              filteredSections.map((section) => (
                <TreeBranch
                  key={section.title}
                  section={section}
                  isOpen={query ? true : openSections[section.title] !== false}
                  onToggle={() =>
                    setOpenSections((current) => ({
                      ...current,
                      [section.title]: !(current[section.title] !== false),
                    }))
                  }
                  matchCount={section.nodes.length}
                  query={query}
                />
              ))
            ) : (
              <section className="rounded-4xl border border-white/10 bg-[#11161b] p-6 text-white/65">
                No matching pages found for “{query}”.
              </section>
            )}
          </div>
        </div>

        <aside className="space-y-6 xl:sticky xl:top-28 xl:self-start">
          <section className="rounded-4xl border border-white/10 bg-[#11161b] p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#00D084]/20 bg-[#00D084]/10 text-[#00D084]">
                <MapPinned className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Navigation guide
                </h2>
                <p className="text-sm text-white/50">
                  Canonical routes first, redirect aliases second.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm text-white/60">
              <p>
                The tree mirrors the current App Router structure and keeps the
                Figma-derived compatibility slugs in one place.
              </p>
              <p>
                Pages are grouped by user intent: marketing, access, operations,
                and documentation.
              </p>
            </div>
          </section>

          <section className="rounded-4xl border border-white/10 bg-[#11161b] p-6">
            <p className="text-[0.65rem] uppercase tracking-[0.24em] text-white/40">
              Common entry points
            </p>
            <div className="mt-4 grid gap-3">
              {[
                ["Home", "/"],
                ["Login", "/login"],
                ["Signup", "/signup"],
                ["Platform", "/platform"],
                ["System Status", "/system-status"],
                ["Contact Sales", "/contact-sales"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75 transition hover:border-[#00D084]/25 hover:bg-white/[0.07]">
                  <span>{label}</span>
                  <Link2 className="h-4 w-4 text-white/30" />
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </MarketingPageShell>
  );
}
