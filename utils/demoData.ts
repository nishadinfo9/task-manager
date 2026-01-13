import { Task } from "@/types/task";

export const demoTasks: Task[] = [
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
