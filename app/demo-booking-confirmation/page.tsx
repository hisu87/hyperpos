import { FigmaViewPage } from "@/app/_components/figma-view-page";

export default function DemoBookingConfirmationPage() {
  return (
    <FigmaViewPage
      eyebrow="Demo"
      title="Demo Booking Confirmation"
      description="Post-booking confirmation view to summarize next steps and preparation checklist before the session."
      highlights={[
        {
          title: "Session",
          metric: "Confirmed",
          detail:
            "The performance demo slot is reserved and added to delivery queue.",
        },
        {
          title: "Preparation",
          metric: "3 inputs",
          detail:
            "Store count, peak throughput, and current POS stack for tailoring.",
        },
        {
          title: "Follow-up",
          metric: "24h",
          detail:
            "Solution brief and migration recommendation delivered within one day.",
        },
      ]}
      links={[
        { label: "Book Another Demo", href: "/book-performance-demo" },
        { label: "Platform Overview", href: "/platform" },
        { label: "Contact Sales", href: "/contact-sales" },
      ]}
    />
  );
}
