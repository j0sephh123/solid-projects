import { createStore } from "solid-js/store";
import { Project } from "../types/projectTypes";

export type ProjectsState = {
  shouldFetch: boolean;
  projects: Project[];
};

export const initialProjectsState: ProjectsState = {
  shouldFetch: false,
  projects: [],
};

export type ProjectsStoreType = {
  state: ProjectsState;
  projectActions: {
    setShouldFetch: (arg: ProjectsState["shouldFetch"]) => void;
    setProjects: (newProjects: Project[]) => void;
  };
};

export function useProjectsStore(): ProjectsStoreType {
  const [state, setState] = createStore(initialProjectsState);

  const setShouldFetch = (shouldFetch: ProjectsState["shouldFetch"]) => {
    setState((prev) => ({ ...prev, shouldFetch }));
  };

  const setProjects = (newProjects: Project[]) => {
    console.log({ newProjects });

    setState("projects", () => newProjects);
  };

  return {
    state,
    projectActions: {
      setShouldFetch,
      setProjects,
    },
  };
}
