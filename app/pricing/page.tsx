import Link from "next/link";
import { MarketingPageShell } from "@/app/_components/marketing-page-shell";

const plans = [
  {
    name: "Launch",
    price: "$99",
    period: "/terminal/month",
    points: ["Core POS", "Inventory sync", "Email support"],
  },
  {
    name: "Scale",
    price: "$179",
    period: "/terminal/month",
    points: ["Advanced analytics", "Priority support", "Loyalty features"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "deployment",
    points: [
      "Dedicated architecture",
      "SLA + onboarding",
      "Custom integrations",
    ],
  },
];

export default function PricingPage() {
  return (
    <MarketingPageShell
      eyebrow="Pricing"
      title="Simple Plans for Fast Retail"
      description="Choose a plan based on terminal scale, then expand without migrating your data model."
      primaryCtaLabel="Get Pricing Call">
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className="rounded-3xl border border-white/10 bg-[#11161b] p-6">
            <h2 className="text-xl font-semibold text-white">{plan.name}</h2>
            <p className="mt-5 text-4xl font-semibold text-[#00D084]">
              {plan.price}
            </p>
            <p className="mt-1 text-sm text-white/50">{plan.period}</p>
            <ul className="mt-5 space-y-2 text-sm text-white/65">
              {plan.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="mt-8 text-sm text-white/55">
        Need volume discounts or multi-brand rollout?{" "}
        <Link
          href="/contact-sales"
          className="font-semibold text-[#00D084] hover:text-[#7af2b4]">
          Contact sales
        </Link>
        .
      </p>
    </MarketingPageShell>
  );
}
