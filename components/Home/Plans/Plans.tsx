import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import PlansCard from "./PlansCard";
import { Plan } from "@/types/plan";

const plansList: Plan[] = [
  {
    plan: "Basic Plan",
    description: "Ideal for individuals & small teams",
    price: "$19",
    features: [
      "Up to 5 projects",
      "Basic task management",
      "Due dates & reminders",
      "Email support",
    ],
  },
  {
    plan: "Pro Plan",
    description: "Perfect for growing teams",
    price: "$49",
    features: [
      "Unlimited projects",
      "Team collaboration",
      "Task priority & labels",
      "File attachments",
      "Advanced reports",
      "Priority email support",
    ],
  },
  {
    plan: "Enterprise Plan",
    description: "Best for large organizations",
    price: "$99",
    features: [
      "Unlimited users",
      "Advanced analytics",
      "Role-based access",
      "Custom workflows",
      "API access",
      "24/7 dedicated support",
    ],
  },
];

const Plans = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-center gap-1 bg-black/10 w-xs  py-1 rounded-full mx-auto">
        <Image
          className="w-5"
          src={"/logo.png"}
          width={50}
          height={50}
          alt="logo"
        />
        <p>Plants Built For Growth</p>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-center font-bold text-4xl">
          Flaxiable Plans For Every Team
        </h2>
        <div className="flex items-center gap-2 bg-black/10 rounded-full px-5 py-2 ">
          <Button className="rounded-full ">Monthly</Button>
          <Button className="rounded-full bg-transparent hover:bg-transparent text-black">
            Yearly
          </Button>
          <div className="border border-red-400 text-red-400 px-2 py-1 rounded-full">
            Save 40 %
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {plansList.map((plan, index) => (
          <PlansCard key={plan.plan} plan={plan} isPopular={index === 1} />
        ))}
      </div>
    </div>
  );
};

export default Plans;
