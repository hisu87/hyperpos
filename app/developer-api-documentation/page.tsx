import { FigmaViewPage } from "@/app/_components/figma-view-page";

export default function DeveloperApiDocumentationPage() {
  return (
    <FigmaViewPage
      eyebrow="Developer"
      title="Developer API Documentation"
      description="Developer-facing surface mapped from Figma for API onboarding, authentication model, and integration lifecycles."
      highlights={[
        {
          title: "Endpoints",
          metric: "42",
          detail:
            "Core POS, inventory, customer, and synchronization operations.",
        },
        {
          title: "Auth",
          metric: "Token + scopes",
          detail:
            "Scoped credentials with audit traces for all partner operations.",
        },
        {
          title: "Sandbox",
          metric: "Ready",
          detail:
            "Deterministic test environment for webhook and order lifecycle testing.",
        },
      ]}
      links={[
        { label: "Resources Hub", href: "/resources" },
        { label: "Platform", href: "/platform" },
        { label: "Security Protocol", href: "/security-protocol" },
      ]}
    />
  );
}
