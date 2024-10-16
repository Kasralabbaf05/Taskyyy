import { TaskType as Task } from "./taskType";

export type TasksContextType = {
  tasks: Task[];
  handleAddTask: (newTask: Task) => void;
  handleRemoveTask: (taskName: string) => void;
};
