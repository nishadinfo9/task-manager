// export interface Task {
//   id: string;
//   title: string;
//   status: "Pending" | "In Progress" | "Completed";
//   priority: "Low" | "Medium" | "High";
//   dueDate: string;
// }

export type Task = {
  id: string;
  title: string;
  description?: string;
  priority: "Low" |"Medium" |"High";
  status: "Pending" | "In Progress" | "Completed";
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  assignedTo?: string;
  tags?: string[];
};
