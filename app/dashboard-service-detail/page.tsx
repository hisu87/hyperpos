import { FigmaViewPage } from "@/app/_components/figma-view-page";

export default function DashboardServiceDetailPage() {
  return (
    <FigmaViewPage
      eyebrow="Operations"
      title="Dashboard Service Detail"
      description="Service-level dashboard page from Figma for observing queue health, sync status, and component uptime."
      highlights={[
        {
          title: "Service Health",
          metric: "99.97%",
          detail:
            "Realtime status of transaction pipeline and edge sync workers.",
        },
        {
          title: "Avg Queue Delay",
          metric: "120 ms",
          detail: "Rolling median latency from terminal queue to commit event.",
        },
        {
          title: "Critical Alerts",
          metric: "2",
          detail:
            "Open incidents requiring operator action in the current window.",
        },
      ]}
      links={[
        { label: "System Status", href: "/system-status" },
        { label: "Global Overview", href: "/global-overview" },
        { label: "Security Protocol", href: "/security-protocol" },
      ]}
    />
  );
}
