import { FigmaViewPage } from "@/app/_components/figma-view-page";

export default function SecurityProtocolPage() {
  return (
    <FigmaViewPage
      eyebrow="Security"
      title="Security Protocol"
      description="Security-focused page matching Figma scope for controls, auditability, and compliance guardrails."
      highlights={[
        {
          title: "Encryption",
          metric: "At rest + transit",
          detail:
            "Local and remote data channels are encrypted by default policies.",
        },
        {
          title: "Role Access",
          metric: "Least privilege",
          detail:
            "Fine-grained permission boundaries for cashier, manager, and admin roles.",
        },
        {
          title: "Traceability",
          metric: "100%",
          detail:
            "All transactional and admin events retain trace identifiers.",
        },
      ]}
      links={[
        { label: "Developer API Docs", href: "/developer-api-documentation" },
        { label: "System Status", href: "/system-status" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ]}
    />
  );
}
