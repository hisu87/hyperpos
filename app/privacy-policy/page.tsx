import Link from "next/link";
import {
  ChartSpline,
  Database,
  Lock,
  MapPin,
  Shield,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const dataPoints = [
  {
    icon: Shield,
    title: "Account Identity",
    text: "Legal name, business registration IDs, and encrypted authentication tokens required for secure ecosystem entry.",
  },
  {
    icon: Database,
    title: "Transaction Logs",
    text: "Kinetic sale data, SKU velocities, and payment terminal metadata processed through secure emerald tunnels.",
  },
  {
    icon: Smartphone,
    title: "Hardware Telemetry",
    text: "Diagnostic health records from HYPER terminals, including peripheral connectivity and uptime events.",
  },
  {
    icon: MapPin,
    title: "Store Geolocation",
    text: "Regional coordinates for legal compliance checks and anti-fraud location signatures.",
  },
];

const logicItems = [
  "Optimizing system latency and checkout responsiveness.",
  "Automating retail analytics and performance forecasting.",
  "Facilitating secure hardware-to-cloud communication.",
  "Ensuring compliance with global financial regulations.",
];

const rights = [
  {
    number: "01",
    title: "Access & Inspection",
    text: "Request a full export of telemetry and sales data associated with your business identity.",
  },
  {
    number: "02",
    title: "Rectification",
    text: "Update your corporate identity or tax documentation through Monolith Command Center.",
  },
  {
    number: "03",
    title: "The Right to Erase",
    text: "Initiate a factory-grade wipe of cloud and terminal backups on contract termination.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#090A0D] text-[#F8F9FA]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight">
          <ShieldCheck className="h-5 w-5 text-[#00D084]" />
          HYPER POS
        </Link>
        <Link
          href="/"
          className="text-sm text-white/55 transition hover:text-white/85">
          ← Return to Dashboard
        </Link>
      </header>

      <main className="mx-auto w-full max-w-7xl space-y-6 px-5 pb-24 pt-5 lg:px-8">
        <section className="max-w-4xl">
          <span className="inline-flex rounded-full bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#85ecc2]">
            Privacy Protocol v2.4
          </span>
          <h1 className="mt-6 text-6xl font-semibold tracking-[-0.05em] sm:text-7xl">
            Security is the
            <br />
            <span className="text-[#4EF0A9]">New Standard.</span>
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-white/45">
            At HYPER POS, we treat your data with the same precision engineering
            we apply to our hardware. This is how we protect the kinetic energy
            of your business.
          </p>
        </section>

        <section className="rounded-4xl border border-white/6 bg-[linear-gradient(135deg,#0d2b22,#121821_48%,#11151d)] p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-[#4EF0A9]">
                01. Introduction
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-[#4EF0A9]" />
            </div>
            <div className="space-y-4 text-base leading-8 text-white/55">
              <p>
                This Privacy Policy describes how{" "}
                <strong className="text-white">HYPER RETAIL SYSTEMS</strong>{" "}
                collects, uses, and shares information in connection with your
                use of our Point of Sale platforms.
              </p>
              <p>
                By accessing Monolith Dashboard, you consent to the processing
                of your information as described in this policy.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.4fr_0.7fr]">
          <article className="rounded-4xl border border-white/6 bg-[#12161f] p-8">
            <h2 className="text-4xl font-semibold tracking-tight text-[#4EF0A9]">
              02. Data Collection
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {dataPoints.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}>
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
                      <Icon className="h-4 w-4 text-[#00D084]" />
                      {item.title}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/50">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </article>

          <aside className="rounded-4xl border border-white/6 bg-[linear-gradient(155deg,#1a2431,#12161f)] p-8">
            <Lock className="h-12 w-12 text-white/35" />
            <h3 className="mt-24 text-2xl font-semibold text-[#4EF0A9]">
              Encrypted by Default
            </h3>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/35">
              AES-256 GCM architecture
            </p>
          </aside>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.8fr_1.4fr]">
          <article className="rounded-4xl bg-[#4EF0A9] p-8 text-[#053324]">
            <h2 className="text-5xl font-semibold tracking-tight">
              03. Usage Logic
            </h2>
            <ChartSpline className="mt-8 h-10 w-10" />
          </article>
          <article className="rounded-4xl border border-white/6 bg-[#12161f] p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {logicItems.map((item, index) => (
                <p key={item} className="text-sm leading-7 text-white/55">
                  <span className="mr-2 font-semibold text-[#4EF0A9]">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {item}
                </p>
              ))}
            </div>
          </article>
        </section>

        <section className="rounded-4xl border border-white/6 bg-[#12161f] p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-4xl font-semibold tracking-tight">
              04. Sovereignty & Rights
            </h2>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4EF0A9]">
              Data portability enabled
            </span>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {rights.map((right) => (
              <article key={right.title}>
                <p className="text-4xl text-white/25">{right.number}</p>
                <h3 className="mt-2 text-2xl font-semibold">{right.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/50">
                  {right.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-4xl border border-white/6 bg-[#11151d] px-8 py-12 text-center">
          <h2 className="text-4xl font-semibold tracking-tight">
            Questions Regarding the Protocol?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-white/45">
            Our Data Sovereignty Team is available for technical deep-dives into
            encryption and storage methodologies.
          </p>
          <Link
            href="/contact-sales"
            className="mt-8 inline-flex rounded-full bg-[#4EF0A9] px-8 py-3 text-sm font-semibold text-[#073725] transition hover:-translate-y-px hover:bg-[#6af2b4]">
            Contact Compliance
          </Link>
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
              Legals
            </p>
            <div className="mt-4 space-y-2">
              <span className="block text-white">Privacy Policy</span>
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00D084]">
              Network
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
            Privacy rules engineered for high-throughput retail systems.
          </div>
        </div>
      </footer>
    </div>
  );
}
