import { useProjects } from "../../../components/providers/ProjectsProvider";

export function useProjectsActions(refetch: VoidFunction) {
  const { projectActions } = useProjects();

  const fetchProjectActions = () => {
    projectActions.setShouldFetch(true);
    refetch();
  };

  return {
    fetchProjectActions,
  };
}
