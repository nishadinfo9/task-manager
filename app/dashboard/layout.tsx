import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dashboard | Task Magager | Track Every Seconds",
  description: "Track your time easily with task manager",
};

interface RootLayoutProps {
  children: React.ReactNode;
}
import { AppSidebar } from "@/components/ui/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ClientWrapper from "./overview/ClientWrapper";
import { PageBreadcrumb } from "@/components/Dashboard/PageBreadcrumb/PageBreadcrumb";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClientWrapper>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <PageBreadcrumb />
          </header>

          <body className={`${poppins.className}`}>{children}</body>
        </SidebarInset>
      </SidebarProvider>
    </ClientWrapper>
  );
}
