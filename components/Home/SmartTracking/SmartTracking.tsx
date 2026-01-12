import Image from "next/image";
import React from "react";
import StartTrackingCard from "./StartTrackingCard";
import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const list = [
  {
    title: "Effortless Time Track",
    icon: (
      <FaCheck size={20} className="rounded-full bg-red-400 text-white p-1 " />
    ),
  },
  {
    title: "Effortless Time Track",
    icon: (
      <FaCheck size={20} className="rounded-full bg-red-400 text-white p-1 " />
    ),
  },
  {
    title: "Effortless Time Track",
    icon: (
      <FaCheck size={20} className="rounded-full bg-red-400 text-white p-1 " />
    ),
  },
  {
    title: "Effortless Time Track",
    icon: (
      <FaCheck size={20} className="rounded-full bg-red-400 text-white p-1 " />
    ),
  },
];

const SmartTracking = () => {
  return (
    <div className="space-y-10 ">
      <div className="flex items-center justify-center gap-1 bg-black/10 w-xs  py-1 rounded-full mx-auto">
        <Image
          className="w-5"
          src={"/logo.png"}
          width={50}
          height={50}
          alt="logo"
        />
        <p>The Smart Way To Time Tracking</p>
      </div>
      <h2 className="text-center font-bold text-5xl">
        3 Easy Step To Smarter Tracking
      </h2>
      <div className="grid grid-cols-3 gap-5 px-30">
        <StartTrackingCard image="/tracking.png" title="Start Tracking" />
        <StartTrackingCard
          image="/connected-user.png"
          title="Origanize Monitor"
        />
        <StartTrackingCard image="/data-analysis.png" title="Analyze Improve" />
      </div>
      <div className="w-full border flex gap-10 bg-black/10 p-10 rounded-xl">
        <div className="flex-1 my-auto space-y-5">
          <h2 className="text-2xl font-semibold">Start Time Tracking Now</h2>
          <p>
            Geeting started to gettingless Geeting started to gettingless
            Geeting started to gettingless Geeting started to gettingless
            Geeting started to gettingless Geeting started to gettingless
            Geeting started to gettingless
          </p>
          <div>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-5">
              {list.map((item, i) => (
                <div className="flex gap-1 items-center " key={i}>
                  {item.icon}
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <Button className="rounded-full">
            Start Today
            <ArrowUpRight />
          </Button>
        </div>

        <div className="flex-1 relative">
          <div className="absolute w-36 top-15 -left-5 rounded-xl shadow-md">
            <Image
              width={600}
              height={600}
              src={"/bar-chart.png"}
              alt="chart"
              className=" w-full h-32 object-cover rounded-xl "
            />
          </div>
          <div className="bg-black/10  rounded-xl m-5">
            <Image
              width={600}
              height={600}
              src={"/dashboard.png"}
              alt="dashboard"
              className="p-3 w-full rounded-2xl  "
            />
          </div>
          <div className="absolute w-36 -bottom-5 -right-5  rounded-xl p-1">
            <Image
              width={600}
              height={600}
              src={"/pie-chart.png"}
              alt="chart"
              className="w-full h-32 p-2 object-cover rounded-xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartTracking;
