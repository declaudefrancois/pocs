import cancelIcon from "../../assets/cross.png";
import downloadIcon from "../../assets/download.png";
import ProgressBar from "../ProgressBar";

export type TaskItemProps = {
  task: ITaskItem;
  onCancel: (task: ITaskItem) => void;
};

export type ITaskItem = {
  id: string;
  operation: string;
  filesCount: number;
  progress: number;
  status: string;
};

export default function TaskItem({ onCancel, task }: TaskItemProps) {
  return (
    <div className="flex items-center gap-4 p-2 py-4">
      <div className="w-9 h-9 border border-blue-500 rounded shadow-sm relative">
        <div className="flex justify-center items-center h-4 w-4 rounded-full absolute -top-2 -right-2 bg-blue-500 text-white text-xs">
          {task.filesCount}
        </div>
      </div>

      <div className="flex-1 h-full flex flex-col justify-center gap-2">
        <div className="flex gap-2">
          <p className="font-medium text-sm">{task.operation}</p>{" "}
          <p className="font-light text-gray-500 text-sm">( {task.status} )</p>
        </div>
        <ProgressBar value={task.progress} />
      </div>

      <div className="flex items-center gap-2">
        <button
          className="h-8 w-8 flex justify-center items-center border rounded-full"
          onClick={() => onCancel(task)}
        >
          <img
            src={downloadIcon}
            className="w-3 h-3 object-contain object-center"
            alt="Download icon"
          />
        </button>
        <button
          className="h-8 w-8 flex justify-center items-center border rounded-full"
          onClick={() => onCancel(task)}
        >
          <img
            src={cancelIcon}
            className="w-3 h-3 object-contain object-center"
            alt="Cancel icon"
          />
        </button>
      </div>
    </div>
  );
}
