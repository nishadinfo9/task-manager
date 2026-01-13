import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Task Magager | Track Every Seconds",
  description: "Track your time easily with task manager",
};

interface RootLayoutProps {
  children: React.ReactNode;
}
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  FaTasks,
  FaCheckCircle,
  FaClock,
  FaExclamationCircle,
} from "react-icons/fa";
import ClientWrapper from "./overview/ClientWrapper";
import { PageBreadcrumb } from "@/components/Dashboard/PageBreadcrumb/PageBreadcrumb";

export default function RootLayout({ children }: RootLayoutProps) {
  const stats = [
    {
      title: "Total Tasks",
      value: 120,
      icon: <FaTasks className="text-3xl text-blue-500" />,
    },
    {
      title: "Completed Tasks",
      value: 80,
      icon: <FaCheckCircle className="text-3xl text-green-500" />,
    },
    {
      title: "Pending Tasks",
      value: 30,
      icon: <FaClock className="text-3xl text-yellow-500" />,
    },
    {
      title: "Overdue Tasks",
      value: 10,
      icon: <FaExclamationCircle className="text-3xl text-red-500" />,
    },
  ];

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
