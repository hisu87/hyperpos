import { FigmaViewPage } from "@/app/_components/figma-view-page";

export default function OnboardingPage() {
  return (
    <FigmaViewPage
      eyebrow="Authentication"
      title="Onboarding Experience"
      description="First-run setup view from Figma for account initialization, store profile, and terminal readiness."
      highlights={[
        {
          title: "Setup Steps",
          metric: "5",
          detail:
            "Guided sequence from account verification to POS activation.",
        },
        {
          title: "Data Import",
          metric: "CSV + API",
          detail:
            "Product and customer bootstrap through validated import channels.",
        },
        {
          title: "Readiness",
          metric: "98%",
          detail: "Typical completion rate before first live checkout session.",
        },
      ]}
      links={[
        { label: "Sign Up", href: "/signup" },
        { label: "Login", href: "/login" },
        { label: "Book Demo", href: "/book-performance-demo" },
      ]}
    />
  );
}
