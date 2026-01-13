import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

export default function TaskList() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  console.log("tasks", tasks);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="p-4 rounded-xl border bg-white shadow-sm flex flex-col gap-2"
        >
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p>
            Status: <span className="font-medium">{task.status}</span>
          </p>
          <p>
            Priority: <span className="font-medium">{task.priority}</span>
          </p>
          <p>
            Due: <span className="font-medium">{task.dueDate}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
