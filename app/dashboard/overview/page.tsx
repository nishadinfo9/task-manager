"use client";
import {
  FaTasks,
  FaCheckCircle,
  FaClock,
  FaExclamationCircle,
} from "react-icons/fa";
import DashboardPieChart from "@/components/Dashboard/PieChart/PieChart";
import DashboardAreaChart from "@/components/Dashboard/AreaChart/AreaChart";
import TaskTable from "@/components/Dashboard/TaskTable/TaskTable";

export default function Page() {
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
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-xl border shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {stat.title}
              </span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </span>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-full">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="rounded-xl bg-white dark:bg-gray-800">
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="flex-1  h-[200px]">
            <DashboardAreaChart />
          </div>
          <div className="w-full md:w-[350px] h-[200px]">
            <DashboardPieChart />
          </div>
        </div>
      </div>
      {/* Table Section */}
      <div className="rounded-xl bg-white dark:bg-gray-800 mt-30">
        <TaskTable />
      </div>
    </div>
  );
}
