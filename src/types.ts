export type ProjectStatus = "todo" | "in_progress" | "done";

export type Project = {
  id: number;
  attributes: {
    name: string;
    status: ProjectStatus;
    createdAt: Date;
    updatedAt: Date;
  };
};
