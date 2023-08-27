import { ProjectStatus } from "../types";

const url = "http://localhost:1337/api/projects";

export const getProjects = () =>
  fetch(url)
    .then((r) => r.json())
    .then((r) => r.data);

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
  }).then((r) => r.json());
