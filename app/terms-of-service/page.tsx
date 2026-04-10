import Link from "next/link";
import { KeyRound, Landmark, ShieldAlert, Sparkles, Zap } from "lucide-react";

const navLinks = ["Platform", "Hardware", "Pricing", "Resources"];

const obligationCards = [
  {
    icon: KeyRound,
    title: "Identity Integrity",
    text: "Licensees are solely responsible for maintaining encryption keys and biometric credentials associated with their POS node.",
  },
  {
    icon: Zap,
    title: "System Thresholds",
    text: "Users shall not stress platform APIs beyond enterprise clearance limits or attempt reverse engineering under any condition.",
  },
  {
    icon: ShieldAlert,
    title: "Data Hygiene",
    text: "All customer records processed in HYPER nodes must satisfy local privacy rules and cryptographic retention policy.",
  },
  {
    icon: Landmark,
    title: "Deployment Ethics",
    text: "The software may not be used for restricted sectors listed by the HYPER Global Ethics Board and legal policy baseline.",
  },
];

export default function TermsOfServicePage() {
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

      <main className="mx-auto flex w-full max-w-7xl gap-8 px-5 pb-20 pt-10 lg:px-8">
        <aside className="hidden w-64 shrink-0 xl:block">
          <div className="sticky top-8 space-y-6">
            <nav className="space-y-2 text-sm">
              <div className="rounded-full bg-white/10 px-4 py-3 text-[#00D084]">
                01. Acceptance
              </div>
              <div className="px-4 py-2 text-white/45">
                02. User Obligations
              </div>
              <div className="px-4 py-2 text-white/45">03. IP Rights</div>
              <div className="px-4 py-2 text-white/45">04. Termination</div>
            </nav>

            <article className="rounded-4xl border border-white/6 bg-[#11151d] p-5">
              <Sparkles className="h-4 w-4 text-[#00D084]" />
              <h3 className="mt-3 text-xl font-semibold">Need Clarity?</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Our legal engineering team is available for deep-dive
                consultation regarding your enterprise agreement.
              </p>
              <Link
                href="/contact-sales"
                className="mt-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white/80 transition hover:bg-white/15">
                EMAIL COUNSEL
              </Link>
            </article>
          </div>
        </aside>

        <div className="flex-1 space-y-8">
          <section className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00D084]">
                Legal Framework v2.4
              </p>
              <h1 className="mt-3 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
                Terms of Service
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/45">
                The operational protocol for the Kinetic Monolith ecosystem. By
                engaging with HYPER POS, you align with these technical and
                ethical standards.
              </p>
            </div>
            <div className="rounded-3xl border border-white/6 bg-[#121820] px-5 py-4 text-right">
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/35">
                Last synchronized
              </p>
              <p className="mt-1 text-sm font-semibold text-white/80">
                October 24, 2024
              </p>
            </div>
          </section>

          <section className="rounded-4xl border border-white/6 bg-[#11151d] p-8">
            <h2 className="text-4xl font-semibold tracking-tight">
              Acceptance of Terms
            </h2>
            <p className="mt-5 text-base leading-8 text-white/55">
              By accessing, installing, or deploying the HYPER POS Kinetic
              Monolith architecture, you acknowledge that you have read and
              agreed to be bound by these Terms of Service.
            </p>
            <p className="mt-4 text-base leading-8 text-white/55">
              Continued use of the platform after updates are deployed
              constitutes automatic acceptance of the revised protocol.
            </p>
            <div className="mt-6 rounded-3xl border border-white/6 bg-white/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                Technical Caveat
              </p>
              <p className="mt-2 text-sm text-white/50">
                &ldquo;Access&rdquo; includes any interaction with APIs,
                hardware interfaces, or cloud dashboards via automated or manual
                means.
              </p>
            </div>
          </section>

          <section className="rounded-4xl border border-white/6 bg-[#11151d] p-8">
            <h2 className="text-4xl font-semibold tracking-tight">
              User Obligations
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {obligationCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="rounded-3xl bg-white/4 p-5">
                    <Icon className="h-5 w-5 text-[#00D084]" />
                    <h3 className="mt-4 text-2xl font-semibold">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/50">
                      {card.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="rounded-4xl border border-white/6 bg-[#11151d] p-8">
            <h2 className="text-4xl font-semibold tracking-tight">
              Intellectual Property
            </h2>
            <div className="mt-6 rounded-3xl border border-white/6 bg-[linear-gradient(130deg,#121722,#192535_40%,#10141b)] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00D084]">
                The Kinetic Source
              </p>
              <p className="mt-2 text-sm text-white/50">
                Protected by Universal Patent B.44.2109
              </p>
            </div>
            <p className="mt-6 text-sm leading-7 text-white/50">
              All logic gates, UI paradigms, the Hyper Emerald response
              algorithm, and the proprietary Kinetic Monolith architecture are
              exclusive property of HYPER RETAIL SYSTEMS.
            </p>
          </section>

          <section className="rounded-4xl border border-white/6 bg-[#11151d] p-8">
            <h2 className="text-4xl font-semibold tracking-tight">
              Termination
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/50">
              HYPER RETAIL SYSTEMS reserves the right to terminate service
              access immediately in the event of critical security breach or
              material violation of user obligations.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-full bg-white/6 px-5 py-4 text-center">
                <p className="font-semibold text-[#ff7070]">Critical Fault</p>
                <p className="text-xs text-white/35">Instant blackout</p>
              </div>
              <div className="rounded-full bg-white/6 px-5 py-4 text-center">
                <p className="font-semibold text-white/85">Standard Exit</p>
                <p className="text-xs text-white/35">30-day window</p>
              </div>
              <div className="rounded-full bg-white/6 px-5 py-4 text-center">
                <p className="font-semibold text-[#00D084]">Data Purge</p>
                <p className="text-xs text-white/35">Permanent erase</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/5 bg-[#090c12]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 text-sm text-white/40 md:grid-cols-4 lg:px-8">
          <div>
            <p className="font-semibold text-white">HYPER POS</p>
            <p className="mt-4 text-xs">
              Precision engineering for the retail frontier.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00D084]">
              Legal
            </p>
            <div className="mt-4 space-y-2">
              <Link
                className="block transition-colors hover:text-white/80"
                href="/privacy-policy">
                Privacy Policy
              </Link>
              <p className="text-white">Terms of Service</p>
              <Link
                className="block transition-colors hover:text-white/80"
                href="/system-status">
                System Status
              </Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00D084]">
              Connect
            </p>
            <div className="mt-4 space-y-2">
              <Link
                className="block transition-colors hover:text-white/80"
                href="/contact-sales">
                Contact Sales
              </Link>
              <span className="block">LinkedIn</span>
              <span className="block">Documentation</span>
            </div>
          </div>
          <div className="text-xs text-white/30">
            © 2024 HYPER RETAIL SYSTEMS. THE KINETIC MONOLITH.
          </div>
        </div>
      </footer>
    </div>
  );
}
