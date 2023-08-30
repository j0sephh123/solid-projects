import { ProjectStatus } from "../../../types/projectTypes";

type StatusOption = {
  value: ProjectStatus; // Using the previously defined type ProjectStatus
  label: string;
};

export const projectStatusOptions: StatusOption[] = [
  { value: "todo", label: "To Do" },
  { value: "in_progress", label: "In Progress" },
  { value: "done", label: "Done" },
];
