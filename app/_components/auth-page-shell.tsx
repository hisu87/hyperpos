import Link from "next/link";
import type { ReactNode } from "react";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "System Status", href: "/system-status" },
  { label: "Site Map", href: "/site-map" },
  { label: "Contact Sales", href: "/contact-sales" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Login", href: "/login" },
  { label: "Sign Up", href: "/signup" },
  { label: "Loading", href: "/loading" },
];

type AuthPageShellProps = {
  children: ReactNode;
  title: string;
  description?: string;
};

export function AuthPageShell({
  children,
  title,
  description,
}: AuthPageShellProps) {
  return (
    <div className="min-h-screen bg-[#090A0D] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,208,132,0.14),transparent_28%),radial-gradient(circle_at_50%_35%,rgba(12,69,47,0.18),transparent_50%)]" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="border-b border-white/5 bg-[#090A0D]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="text-sm font-semibold tracking-wide text-white">
              Hyper POS
            </Link>
            <nav className="hidden items-center gap-4 md:flex">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-white/55 transition hover:bg-white/5 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1 px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <div className="space-y-3 text-center">
              <p className="text-sm uppercase tracking-[0.32em] text-[#00D084]/80">
                {title}
              </p>
              {description ? (
                <p className="mx-auto max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                  {description}
                </p>
              ) : null}
            </div>
            {children}
          </div>
        </main>
        <footer className="border-t border-[#47484b]/15 bg-[#0d0e11]">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-sm text-white/60 md:flex-row md:px-8">
            <div className="space-y-1 text-center md:text-left">
              <p className="text-base font-semibold text-white">Hyper POS</p>
              <p>© 2024 Hyper POS. Kinetic Monolith Engineering.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
