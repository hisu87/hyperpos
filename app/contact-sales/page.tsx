import Link from "next/link";
import { ArrowRight, Shield, Sparkles, Zap } from "lucide-react";

const navLinks = ["Platform", "Hardware", "Pricing", "Resources"];

const featureCards = [
  {
    icon: Zap,
    title: "Sub-Second Processing",
    text: "Local-first engine ensures checkouts happen instantly, even during peak surges.",
  },
  {
    icon: Sparkles,
    title: "Real-Time Insight Engine",
    text: "Multi-store inventory and behavioral analytics streamed to your dashboard in real-time.",
  },
  {
    icon: Shield,
    title: "Obsidian-Grade Security",
    text: "End-to-end encrypted hardware and biometric login protocols for high-value environments.",
  },
];

const brandRail = ["VOLT", "NEON", "ZENITH", "AXIS"];

export default function ContactSalesPage() {
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

      <main className="mx-auto w-full max-w-7xl px-5 pb-16 pt-12 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00D084]">
              Accelerate Growth
            </p>
            <h1 className="mt-4 text-6xl font-semibold tracking-[-0.05em] sm:text-7xl">
              Upgrade to the
              <br />
              <span className="text-[#00D084]">Kinetic Monolith.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-white/45">
              Join 5,000+ high-volume retail leaders modernizing checkout. Our
              team will build your custom migration plan in 24 hours.
            </p>

            <article className="mt-10 rounded-4xl border border-white/6 bg-[#11151d] p-7">
              <form className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                    Full Name
                    <input
                      className="w-full rounded-full bg-white/8 px-4 py-3 text-sm outline-none placeholder:text-white/25"
                      placeholder="Julian Veldt"
                    />
                  </label>
                  <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                    Email Address
                    <input
                      className="w-full rounded-full bg-white/8 px-4 py-3 text-sm outline-none placeholder:text-white/25"
                      placeholder="julian@hyperretail.com"
                    />
                  </label>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                    Business Type
                    <select className="w-full rounded-full bg-white/8 px-4 py-3 text-sm outline-none">
                      <option>High-End Apparel</option>
                      <option>Restaurant Chain</option>
                      <option>Convenience Retail</option>
                    </select>
                  </label>
                  <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                    Estimated Volume
                    <select className="w-full rounded-full bg-white/8 px-4 py-3 text-sm outline-none">
                      <option>$1M - $5M ARR</option>
                      <option>$5M - $20M ARR</option>
                      <option>$20M+ ARR</option>
                    </select>
                  </label>
                </div>
                <label className="space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                  Message (Optional)
                  <textarea
                    className="min-h-28 w-full rounded-3xl bg-white/8 px-4 py-3 text-sm outline-none placeholder:text-white/25"
                    placeholder="Tell us about your current friction points..."
                  />
                </label>
                <button
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#00D084] px-5 py-4 text-lg font-semibold text-[#04291d] transition hover:-translate-y-px hover:bg-[#2ae8a4]"
                  type="submit">
                  Initiate Partnership
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </article>
          </div>

          <aside className="space-y-5">
            <div>
              <p className="text-sm tracking-[0.2em] text-[#00D084]">★★★★★</p>
              <blockquote className="mt-4 text-3xl leading-tight text-white/90">
                &ldquo;Hyper POS isn&apos;t just software; it&apos;s the nervous
                system of our flagship stores.&rdquo;
              </blockquote>
              <p className="mt-3 text-sm text-white/45">
                Marcus Thorne, CEO - Aether Retail
              </p>
            </div>

            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className="rounded-4xl bg-[#11151d] p-5">
                  <div className="flex items-start gap-4">
                    <span className="rounded-full bg-white/10 p-2.5">
                      <Icon className="h-4 w-4 text-[#00D084]" />
                    </span>
                    <div>
                      <h3 className="text-2xl font-semibold">{card.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/50">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className="pt-4">
              <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                Trusted by the Kinetic Network
              </p>
              <div className="mt-4 flex flex-wrap gap-6 text-3xl font-semibold tracking-tight text-white/35">
                {brandRail.map((brand) => (
                  <span key={brand}>{brand}</span>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <footer className="mt-32 rounded-[2.5rem] border border-white/6 bg-[#11151d] px-8 py-12">
          <div className="grid gap-8 md:grid-cols-4 text-sm text-white/45">
            <div>
              <p className="font-semibold text-white">HYPER POS</p>
              <p className="mt-4 text-xs">
                THE KINETIC MONOLITH. BUILT FOR SPEED.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00D084]">
                Product
              </p>
              <div className="mt-4 space-y-2">
                <span className="block">Platform</span>
                <span className="block">Hardware</span>
                <span className="block">Pricing</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00D084]">
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
                <Link
                  className="block transition-colors hover:text-white/80"
                  href="/system-status">
                  System Status
                </Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00D084]">
                Social
              </p>
              <div className="mt-4 space-y-2">
                <span className="block">LinkedIn</span>
                <span className="block">Documentation</span>
                <span className="block">Contact Sales</span>
              </div>
            </div>
          </div>
          <p className="mt-10 text-xs text-white/25">
            © 2024 HYPER RETAIL SYSTEMS. THE KINETIC MONOLITH.
          </p>
        </footer>
      </main>
    </div>
  );
}
