import { createContext } from "react";
import { TasksContextType as Tasks } from "../Types/TasksContextType";

export const TasksContext = createContext<Tasks | null>(null)