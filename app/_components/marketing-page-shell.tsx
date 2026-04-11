import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ChevronRight } from "lucide-react";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "System Status", href: "/system-status" },
  { label: "Site Map", href: "/site-map" },
  { label: "Contact Sales", href: "/contact-sales" },
];

type MarketingPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  primaryCtaHref?: string;
  primaryCtaLabel?: string;
};

export function MarketingPageShell({
  eyebrow,
  title,
  description,
  children,
  primaryCtaHref = "/contact-sales",
  primaryCtaLabel = "Request Demo",
}: MarketingPageShellProps) {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#090A0D] text-white antialiased">
      <header className="border-b border-white/5 bg-[#090A0D]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-sm font-semibold tracking-wide text-white">
            Hyper POS
          </Link>

          <Link
            href="/"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition hover:bg-white/10 md:inline-flex">
            <ArrowLeft className="h-4 w-4" />
            Back to landing
          </Link>

          <Link
            href={primaryCtaHref}
            className="inline-flex items-center gap-2 rounded-full bg-[#00D084] px-4 py-2 text-sm font-semibold text-[#04110b] transition hover:-translate-y-px hover:bg-[#19e59a]">
            {primaryCtaLabel}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-14 lg:pt-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,208,132,0.12),transparent_28%),radial-gradient(circle_at_50%_35%,rgba(12,69,47,0.18),transparent_50%)]" />
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#00D084]/20 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#bff6df] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D084]" />
              {eyebrow}
            </span>

            <div className="max-w-4xl space-y-5">
              <h1 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="max-w-2xl text-pretty text-sm leading-7 text-white/48 sm:text-base lg:text-lg">
                {description}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          {children}
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
