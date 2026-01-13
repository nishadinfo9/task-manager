import DialogOpen from "@/components/Dashboard/AllTask/DialogOpen";
import SearchAndSorting from "@/components/Dashboard/AllTask/SearchAndSorting";
import TableForm from "@/components/Dashboard/TableForm/TableForm";
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
const AllTasks = () => {
  return (
    <div className="w-full p-4">
      <div className="overflow-hidden rounded-xl bg-white dark:bg-gray-800 border p-4">
        <DialogOpen headline="All Tasks" />
        <SearchAndSorting />
        <div className="overflow-hidden rounded-xl bg-white dark:bg-gray-800 border p-4">
          <TableForm data={data} />
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
