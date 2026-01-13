"use client";

import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogOut, ChevronDown } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

// --- Sidebar menu data ---
export const sidebarData = {
  navMain: [
    {
      title: "Dashboard",
      items: [
        {
          title: "Overview",
          url: "/dashboard/overview",
          isActive: true,
          icon: <LayoutDashboard className="h-4 w-4" />,
        },
        {
          title: "All Tasks",
          url: "/dashboard/all-tasks",
          isActive: false,
          icon: <CheckSquare className="h-4 w-4" />,
        },
        {
          title: "Today's Tasks",
          url: "/dashboard/todays-tasks",
          isActive: false,
          icon: <CalendarDays className="h-4 w-4" />,
        },
        {
          title: "Completed Tasks",
          url: "/dashboard/completed-tasks",
          isActive: false,
          icon: <CheckCircle className="h-4 w-4" />,
        },
        {
          title: "Overdue Tasks",
          url: "/dashboard/overdue-tasks",
          isActive: false,
          icon: <AlertCircle className="h-4 w-4" />,
        },
      ],
    },
  ],
};

// --- Sidebar component ---
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="flex flex-col h-screen">
      {/* Sidebar content: navigation */}
      <SidebarContent className="flex-1 overflow-y-auto px-2 py-4">
        {sidebarData.navMain.map((group) => (
          <SidebarGroup key={group.title} className="mb-4">
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <Link className="flex items-center gap-2" href={item.url}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {/* Footer: user profile */}
      <div className="px-4 py-4 border-t">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatar.png" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <span className="flex-1 text-left">John Doe</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <SidebarRail />
    </Sidebar>
  );
}
