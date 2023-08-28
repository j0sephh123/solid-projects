import { createSignal, createContext, useContext, JSXElement } from "solid-js";
import { ProjectAttributes } from "../../types/projectTypes";

export type ProjectsState = {
  shouldFetch: boolean;
  createdProject?: {
    name: ProjectAttributes["name"];
  };
};

export const initialProjectsState: ProjectsState = {
  shouldFetch: false,
  createdProject: undefined,
};

export type ProjectsStateContextType = [
  () => ProjectsState,
  {
    setShouldFetch: (arg: ProjectsState["shouldFetch"]) => void;
    setCreatedProject: (arg?: ProjectAttributes["name"]) => void;
  }
];

const ProjectsContext = createContext<ProjectsStateContextType>([
  () => initialProjectsState,
  {
    setShouldFetch: () => undefined,
    setCreatedProject: () => undefined,
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
          setCreatedProject(name) {
            setProjects((prev) => ({
              ...prev,
              createdProject: name ? { name } : undefined,
            }));
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
