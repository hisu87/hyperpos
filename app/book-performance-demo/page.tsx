import { FigmaViewPage } from "@/app/_components/figma-view-page";

export default function BookPerformanceDemoPage() {
  return (
    <FigmaViewPage
      eyebrow="Demo"
      title="Book a Performance Demo"
      description="Demo booking flow aligned to Figma, focused on operational pain points and rollout readiness."
      highlights={[
        {
          title: "Discovery",
          metric: "30 min",
          detail: "Map current stack, throughput bottlenecks, and sync risks.",
        },
        {
          title: "Pilot Scope",
          metric: "1-3 stores",
          detail:
            "Define a low-risk pilot that captures cashier and manager workflows.",
        },
        {
          title: "Go-live Plan",
          metric: "2 weeks",
          detail:
            "Cutover checklist, data migration, and staff enablement timeline.",
        },
      ]}
      links={[
        { label: "Contact Sales", href: "/contact-sales" },
        { label: "Demo Confirmation", href: "/demo-booking-confirmation" },
        { label: "Pricing", href: "/pricing" },
      ]}
    />
  );
}
