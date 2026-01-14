"use client";

import TableForm from "../TableForm/TableForm";
import { Task } from "@/types/task";

const data: Task[] = [
  {
    id: "1",
    title: "Fix Login Bug",
    status: "In Progress",
    priority: "Medium",
    dueDate: new Date("2026-01-14"),
    createdAt: new Date("2026-01-10"),
    updatedAt: new Date("2026-01-12"),
    createdBy: "user_1",
  },
  {
    id: "2",
    title: "Update Dashboard UI",
    status: "Pending",
    priority: "High",
    dueDate: new Date("2026-01-15"),
    createdAt: new Date("2026-01-11"),
    updatedAt: new Date("2026-01-11"),
    createdBy: "user_2",
  },
];

export default function TaskTable() {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-xl bg-white dark:bg-gray-800 border p-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          Recent Urgent Tasks
        </h2>
        <TableForm data={data} />
      </div>
    </div>
  );
}
