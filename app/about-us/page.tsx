import { FigmaViewPage } from "@/app/_components/figma-view-page";

export default function AboutUsPage() {
  return (
    <FigmaViewPage
      eyebrow="Company"
      title="About Hyper POS"
      description="Company narrative page aligned to the Figma marketing flow, focused on offline-first retail execution and operational reliability."
      highlights={[
        {
          title: "Mission",
          metric: "Offline-first retail",
          detail:
            "Build cashier operations that stay fast and safe during network volatility.",
        },
        {
          title: "Promise",
          metric: "0 lost orders",
          detail:
            "Every transaction is journaled locally first and synced in deterministic replay.",
        },
        {
          title: "Velocity",
          metric: "< 50ms UX",
          detail:
            "Critical cashier interactions are optimized for instant local response.",
        },
      ]}
      links={[
        { label: "Platform Overview", href: "/platform" },
        { label: "Resources Hub", href: "/resources" },
        { label: "Contact Sales", href: "/contact-sales" },
      ]}
    />
  );
}
