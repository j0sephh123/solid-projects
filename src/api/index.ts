import { Project, ProjectStatus } from "../types/projectTypes";
import { ProjectsResponse } from "../types/responses";

const url = "http://localhost:1337/api/projects";

export const getProjects = (): Promise<ProjectsResponse> =>
  fetch(url)
    .then((r) => r.json())
    .then((r) => r);

export const createProject = (newProject: {
  name: string;
  status: ProjectStatus;
}) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: { name: newProject.name, status: newProject.status },
    }),
  });

export const removeProject = (id: Project["id"]) =>
  fetch(`${url}/${id}`, { method: "DELETE" });

export const updateProject = (id: Project["id"], name: string) =>
  fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        name,
      },
    }),
  }).then((response) => response.json());
