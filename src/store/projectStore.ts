import { createSignal } from "solid-js";

export type ProjectsState = {
  shouldFetch: boolean;
};

export const initialProjectsState: ProjectsState = {
  shouldFetch: false,
};

export type ProjectsStoreType = {
  getState: () => ProjectsState;
  actions: {
    setShouldFetch: (arg: ProjectsState["shouldFetch"]) => void;
  };
};

export function useProjectsStore(): ProjectsStoreType {
  const [projectsState, setProjectsState] = createSignal(initialProjectsState);

  const setShouldFetch = (shouldFetch: ProjectsState["shouldFetch"]) => {
    setProjectsState((prev) => ({ ...prev, shouldFetch }));
  };

  return {
    getState: projectsState,
    actions: {
      setShouldFetch,
    },
  };
}
