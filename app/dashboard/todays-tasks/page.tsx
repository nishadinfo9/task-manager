import DialogOpen from "@/components/Dashboard/AllTask/DialogOpen";
import SearchAndSorting from "@/components/Dashboard/AllTask/SearchAndSorting";
import TableForm from "@/components/Dashboard/Overview/TableForm/TableForm";
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

const TodaysTasks = () => {
  return (
    <div className="w-full p-4">
      <div className="overflow-hidden rounded-xl bg-white dark:bg-gray-800 border p-4">
        <DialogOpen headline={"Todays Tasks"} />
        <SearchAndSorting />
        <div className="overflow-hidden rounded-xl bg-white dark:bg-gray-800 border p-4">
          <TableForm data={data} />
        </div>
      </div>
    </div>
  );
};

export default TodaysTasks;
