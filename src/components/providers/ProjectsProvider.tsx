import { createSignal, createContext, useContext, JSXElement } from "solid-js";

export type ProjectsState = {
  shouldFetch: boolean;
};

export const initialProjectsState: ProjectsState = {
  shouldFetch: false,
};

export type ProjectsStateContextType = [
  () => ProjectsState,
  {
    setShouldFetch: (arg: ProjectsState["shouldFetch"]) => void;
  }
];

const ProjectsContext = createContext<ProjectsStateContextType>([
  () => initialProjectsState,
  {
    setShouldFetch: () => undefined,
  },
]);

type Props = {
  children: JSXElement;
};

export default function ProjectsProvider(props: Props) {
  const [projectsStore, setProjects] = createSignal(initialProjectsState);

  return (
    <ProjectsContext.Provider
      value={[
        projectsStore as () => ProjectsState,
        {
          setShouldFetch(shouldFetch) {
            setProjects((prev) => ({ ...prev, shouldFetch }));
          },
        },
      ]}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  return useContext(ProjectsContext);
}
