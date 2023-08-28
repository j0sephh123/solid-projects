export type ProjectStatus = "todo" | "in_progress" | "done";

export type ProjectAttributes = {
  name: string;
  status: ProjectStatus;
  createdAt: Date;
  updatedAt: Date;
};

export type Project = {
  id: number;
  attributes: ProjectAttributes;
};
