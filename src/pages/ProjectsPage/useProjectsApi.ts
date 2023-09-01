import { createEffect, createResource } from "solid-js";
import { Project } from "../../types/projectTypes";
import { getProjects, removeProject } from "../../api";
import { useProjects } from "../../components/providers/ProjectsProvider";

export function useProjectsAPI() {
  const { projectActions, state } = useProjects();
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

  createEffect(() => {
    projectActions.setProjects(query());
  });

  createEffect(() => {
    if (state.shouldFetch) {
      refetch();
      projectActions.setShouldFetch(false);
    }
  });

  return {
    state,
    query,
    deleteProject,
    refetch,
    fetchProjectActions: () => projectActions.setShouldFetch(true),
  };
}
