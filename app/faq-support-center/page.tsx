import { FigmaViewPage } from "@/app/_components/figma-view-page";

export default function FaqSupportCenterPage() {
  return (
    <FigmaViewPage
      eyebrow="Support"
      title="FAQ and Support Center"
      description="Knowledge surface from Figma for troubleshooting, onboarding, and incident response playbooks."
      highlights={[
        {
          title: "Help Articles",
          metric: "128",
          detail:
            "Curated guidance covering cashier, manager, and admin workflows.",
        },
        {
          title: "First Response",
          metric: "7 min",
          detail: "Median initial response time on active support tickets.",
        },
        {
          title: "Resolution",
          metric: "92%",
          detail: "Issue closure inside SLA for operational-impact incidents.",
        },
      ]}
      links={[
        { label: "Support Center", href: "/support-center" },
        { label: "System Status", href: "/system-status" },
        { label: "Resources", href: "/resources" },
      ]}
    />
  );
}
