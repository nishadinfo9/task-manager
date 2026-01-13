export interface Task {
  id: string;
  title: string;
  status: "Pending" | "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High";
  due: string;
}
