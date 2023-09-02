import { createEffect, createMemo, createResource } from "solid-js";
import { getProjects } from "../../../api";
import { useProjects } from "../../../components/providers/ProjectsProvider";

export function useProjectsData() {
  const { projectActions, state } = useProjects();
  const [query, { refetch }] = createResource(getProjects);

  createEffect(() => {
    const projectsResponse = query();
    if (projectsResponse) {
      projectActions.setProjects(projectsResponse.data);
    }
  });

  const projects = createMemo(() => state.projects);

  return {
    projects,
    refetch,
  };
}
