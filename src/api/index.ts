import { Project, ProjectStatus } from "../types/projectTypes";
import { ApiResponse, ProjectsResponse } from "../types/responses";

const baseURL = "http://localhost:1337/api/projects";

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

const fetchWithConfig = (url: string, options: FetchOptions = {}) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  return fetch(`${baseURL}/${url}`, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });
};

const handleResponse = (response: Response) => {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }
  return response.json();
};

export const getProjects = (): ApiResponse<ProjectsResponse> =>
  fetchWithConfig("")
    .then(handleResponse)
    .then((r) => r);

export const createProject = (newProject: {
  name: string;
  status: ProjectStatus;
}): ApiResponse<ProjectsResponse> => {
  return fetchWithConfig("", {
    method: "POST",
    body: JSON.stringify({
      data: { name: newProject.name, status: newProject.status },
    }),
  }).then(handleResponse);
};

export const removeProject = (
  id: Project["id"]
): ApiResponse<ProjectsResponse> => {
  return fetchWithConfig(`/${id}`, {
    headers: { method: "DELETE" },
  }).then(handleResponse);
};

export const updateProject = (
  id: Project["id"],
  name: string
): ApiResponse<ProjectsResponse> => {
  return fetchWithConfig(`/${id}`, {
    headers: {
      method: "PUT",
      body: JSON.stringify({
        data: { name },
      }),
    },
  }).then(handleResponse);
};
