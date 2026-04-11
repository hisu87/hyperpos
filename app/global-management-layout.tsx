import { SidebarNavigation } from "@/app/_components/sidebar-navigation";

export default function GlobalManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#090A0D]">
      <SidebarNavigation />
      <main className="flex-1 px-0 lg:px-12 py-8">{children}</main>
    </div>
  );
}
