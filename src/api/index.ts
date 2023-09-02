import { Project, ProjectStatus } from "../types/projectTypes";
import { ApiResponse, ProjectsResponse } from "../types/responses";

const baseURL = "http://localhost:1337/api/projects";

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

const fetchWithConfig = async (
  url: string,
  options: FetchOptions = {}
): Promise<any> => {
  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const response = await fetch(`${baseURL}${url}`, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  return handleResponse(response);
};

const handleResponse = async (response: Response): Promise<any> => {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }
  return response.json();
};

const getProjects = async (): ApiResponse<ProjectsResponse> =>
  fetchWithConfig("");

const createProject = async (newProject: {
  name: string;
  status: ProjectStatus;
}): ApiResponse<ProjectsResponse> =>
  fetchWithConfig("", {
    method: "POST",
    body: JSON.stringify({
      data: { name: newProject.name, status: newProject.status },
    }),
  });

const removeProject = async (
  id: Project["id"]
): ApiResponse<ProjectsResponse> =>
  fetchWithConfig(`/${id}`, {
    method: "DELETE",
  });

const updateProject = async (
  id: Project["id"],
  name: string
): ApiResponse<ProjectsResponse> =>
  fetchWithConfig(`/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      data: { name },
    }),
  });

const api = {
  getProjects,
  createProject,
  removeProject,
  updateProject,
};

export default api;
