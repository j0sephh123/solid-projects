import { createEffect } from "solid-js";
import { useProjects } from "../../../components/providers/ProjectsProvider";

export function useConditionalRefetch(refetch: Function) {
  const { projectActions, state } = useProjects();

  createEffect(() => {
    if (state.shouldFetch) {
      refetch();
      projectActions.setShouldFetch(false);
    }
  });
}
