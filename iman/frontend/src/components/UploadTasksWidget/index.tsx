import { useEffect, useState } from "react";
import TaskItem, { ITaskItem } from "./TaskItem";

export default function UploadTasksWidget() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const toggle = () => setExpanded((prev) => !prev);

  useEffect(() => {}, []);

  const tasks: ITaskItem[] = [
    {
      id: "1",
      operation: "Compress",
      status: "Processing",
      filesCount: 3,
      progress: 30,
    },
    {
      id: "2",
      operation: "Compress",
      status: "Processing",
      filesCount: 5,
      progress: 50,
    },
    {
      id: "3",
      operation: "Compress",
      status: "Processing",
      filesCount: 5,
      progress: 50,
    },
    {
      id: "4",
      operation: "Compress",
      status: "Processing",
      filesCount: 5,
      progress: 50,
    },
    {
      id: "5",
      operation: "Compress",
      status: "Processing",
      filesCount: 5,
      progress: 50,
    },
    {
      id: "6",
      operation: "Compress",
      status: "Processing",
      filesCount: 5,
      progress: 50,
    },
    {
      id: "7",
      operation: "Compress",
      status: "Processing",
      filesCount: 5,
      progress: 50,
    },
    {
      id: "8",
      operation: "Compress",
      status: "Processing",
      filesCount: 5,
      progress: 50,
    },
    {
      id: "9",
      operation: "Compress",
      status: "Processing",
      filesCount: 5,
      progress: 50,
    },
  ];

  return (
    <div className="absolute right-8 bottom-8 max-w-[400px] w-[400px] shadow rounded bg-white">
      <div className="flex justify-between items-center shadow p-4">
        <p>Vos fichiers</p>

        <button className="text-blue-500" onClick={toggle}>
          {expanded ? "Close" : "See all tasks"}
        </button>
      </div>
      <div
        className={`transition-all duration-300 divide-y border-b ${
          expanded
            ? "h-[300px] max-h-[300px] overflow-y-scroll"
            : "max-h-0 h-0 overflow-hidden"
        }`}
      >
        {expanded &&
          tasks.map((task) => (
            <TaskItem key={task.id} task={task} onCancel={() => {}} />
          ))}
      </div>
    </div>
  );
}
