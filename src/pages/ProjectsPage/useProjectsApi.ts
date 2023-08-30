import { createResource } from "solid-js";
import { Project } from "../../types/projectTypes";
import { getProjects, removeProject } from "../../api";

export function useProjectsAPI() {
  const [query, { refetch }] = createResource(getProjects);

  const deleteProject = async (id: Project["id"], callback: VoidFunction) => {
    try {
      await removeProject(id);
      refetch(); // Refetching projects after successful deletion
    } catch (e) {
      console.error("An error occurred while deleting the project: ", e);
      // Handle error accordingly
    } finally {
      callback();
    }
  };

  return {
    query,
    deleteProject,
    refetch,
  };
}
