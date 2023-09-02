import { createEffect, createMemo, createResource, splitProps } from "solid-js";
import { Project } from "../../types/projectTypes";
import { getProjects, removeProject } from "../../api";
import { useProjects } from "../../components/providers/ProjectsProvider";

export function useProjectsAPI() {
  const { projectActions, state } = useProjects();
  const [query, { refetch }] = createResource(getProjects);

  const deleteProject = async (id: Project["id"], callback: VoidFunction) => {
    try {
      await removeProject(id);
      refetch();
    } catch (e) {
      console.error("An error occurred while deleting the project: ", e);
    } finally {
      callback();
    }
  };

  const [props] = splitProps(query, ["loading", "error", "latest"]);

  createEffect(() => {
    projectActions.setProjects(query()?.data as Project[]);
  });

  createEffect(() => {
    if (state.shouldFetch) {
      refetch();
      projectActions.setShouldFetch(false);
    }
  });

  const isError = createMemo(() => props.error);
  const isLoading = createMemo(() => props.loading);
  const length = createMemo(() => props.latest?.data.length);
  const projects = createMemo(() => state.projects);

  return {
    isError,
    isLoading,
    projects,
    length,
    deleteProject,
    refetch,
    fetchProjectActions: () => projectActions.setShouldFetch(true),
  };
}
