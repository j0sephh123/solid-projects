import { createContext, useContext, ParentProps } from "solid-js";
import { useProjectsStore, ProjectsStoreType } from "../../store/projectStore"; // adjust to your folder structure

const ProjectsContext = createContext<ProjectsStoreType>({
  getState: () => ({
    shouldFetch: false,
  }),
  actions: {
    setShouldFetch: () => undefined,
  },
});

export default function ProjectsProvider(props: ParentProps) {
  const projectsStore = useProjectsStore();

  return (
    <ProjectsContext.Provider value={projectsStore}>
      {props.children}
    </ProjectsContext.Provider>
  );
}

export function useProjects() {
  return useContext(ProjectsContext);
}
