"use client";

import TableForm from "../TableForm/TableForm";
import { Task } from "@/types/task";

const data: Task[] = [
  {
    id: "1",
    title: "Design Landing Page",
    status: "Pending",
    priority: "High",
    due: "Today",
  },
  {
    id: "2",
    title: "Fix Login Bug",
    status: "In Progress",
    priority: "Medium",
    due: "Tomorrow",
  },
  {
    id: "3",
    title: "Update Dashboard UI",
    status: "Completed",
    priority: "Low",
    due: "Tomorrow",
  },
  {
    id: "4",
    title: "Prepare Report",
    status: "Pending",
    priority: "High",
    due: "Today",
  },
];

export default function TaskTable() {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-xl bg-white dark:bg-gray-800 border p-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Recent Urgent Tasks
        </h2>
        <TableForm data={data} />
      </div>
    </div>
  );
}
