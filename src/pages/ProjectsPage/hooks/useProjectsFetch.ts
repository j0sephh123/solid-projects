import { createResource, splitProps, createMemo, createEffect } from "solid-js";
import { getProjects } from "../../../api";
import { useProjects } from "../../../components/providers/ProjectsProvider";

export function useProjectsFetch() {
  const { projectActions, state } = useProjects();
  const [query, { refetch }] = createResource(getProjects);
  const [props] = splitProps(query, ["loading", "error"]);

  const isError = createMemo(() => props.error);
  const isLoading = createMemo(() => props.loading);

  createEffect(() => {
    const projectsResponse = query();
    if (projectsResponse) {
      projectActions.setProjects(projectsResponse.data);
    }
  });

  createEffect(() => {
    if (state.shouldFetch) {
      refetch();
      projectActions.setShouldFetch(false);
    }
  });

  return {
    isError,
    isLoading,
    refetch,
  };
}
