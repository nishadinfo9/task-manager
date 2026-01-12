import React from "react";

import {
  Brain,
  Wallet,
  Workflow,
  Plug,
  Share2,
  ShieldCheck,
  Cloud,
  BarChart3,
  Bell,
  Users,
  FileText,
  Lock,
  Zap,
  Settings,
  Database,
  Search,
  RefreshCcw,
  Monitor,
  MessageSquare,
  Calendar,
  CreditCard,
  Gauge,
} from "lucide-react";
import Marquee from "react-fast-marquee";
import ServiceListCard from "./ServiceListCard";

const Services = () => {
  const servicesOne = [
    { name: "AI Powered Insights", icon: Brain },
    { name: "Expense Tracking", icon: Wallet },
    { name: "Automated Workflow", icon: Workflow },
    { name: "API Integration", icon: Plug },
    { name: "File Sharing", icon: Share2 },
    { name: "Security & Compliance", icon: ShieldCheck },
    { name: "Cloud Storage", icon: Cloud },
    { name: "Advanced Analytics", icon: BarChart3 },
    { name: "Smart Notifications", icon: Bell },
    { name: "Team Collaboration", icon: Users },
    { name: "Document Management", icon: FileText },
    { name: "Data Encryption", icon: Lock },
    { name: "Performance Optimization", icon: Zap },
  ];
  const servicesTwo = [
    { name: "Performance Optimization", icon: Zap },
    { name: "Custom Settings", icon: Settings },
    { name: "Database Management", icon: Database },
    { name: "Global Search", icon: Search },
    { name: "Auto Sync", icon: RefreshCcw },
    { name: "Dashboard Monitoring", icon: Monitor },
    { name: "Live Chat Support", icon: MessageSquare },
    { name: "Task Scheduling", icon: Calendar },
    { name: "Payment Processing", icon: CreditCard },
    { name: "System Health Metrics", icon: Gauge },
  ];

  return (
    <div className="space-y-5">
      {servicesOne && (
        <Marquee gradient={true} gradientWidth={100} pauseOnHover={true}>
          <div className="flex overflow-hidden gap-6 ">
            {servicesOne.map(({ name, icon: Icon }) => (
              <ServiceListCard key={name} name={name} Icon={Icon} />
            ))}
          </div>
        </Marquee>
      )}
      {servicesTwo && (
        <Marquee gradient={true} gradientWidth={100} pauseOnHover={true}>
          <div className="flex overflow-hidden gap-6 ">
            <div className="flex overflow-hidden gap-6 ">
              {servicesTwo.map(({ name, icon: Icon }) => (
                <ServiceListCard key={name} name={name} Icon={Icon} />
              ))}
            </div>
          </div>
        </Marquee>
      )}
    </div>
  );
};

export default Services;
