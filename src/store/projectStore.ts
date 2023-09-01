import { createStore } from "solid-js/store";

export type ProjectsState = {
  shouldFetch: boolean;
  // projects: Project[];
};

export const initialProjectsState: ProjectsState = {
  shouldFetch: false,
  // projects: [],
};

export type ProjectsStoreType = {
  state: ProjectsState;
  projectActions: {
    setShouldFetch: (arg: ProjectsState["shouldFetch"]) => void;
  };
};

export function useProjectsStore(): ProjectsStoreType {
  const [state, setState] = createStore(initialProjectsState);

  const setShouldFetch = (shouldFetch: ProjectsState["shouldFetch"]) => {
    setState((prev) => ({ ...prev, shouldFetch }));
  };

  // const setProjects = (newProjects) => {
  //   setProjectsState('projects', newProjects);
  // };

  return {
    state,
    projectActions: {
      setShouldFetch,
    },
  };
}
