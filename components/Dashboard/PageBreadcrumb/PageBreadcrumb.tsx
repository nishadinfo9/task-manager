"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

export function PageBreadcrumb() {
  const pathname = usePathname();
  console.log({ pathname }); // e.g., "/dashboard/overview"
  const pathSegments = pathname?.split("/").filter(Boolean) || []; // ["dashboard", "overview"]
  const lastSegment = pathSegments[pathSegments.length - 1] || "Home";

  // Capitalize first letter
  const currentPage =
    lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        {pathSegments.length > 1 && (
          <BreadcrumbSeparator className="hidden md:block" />
        )}
        <BreadcrumbItem>
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
