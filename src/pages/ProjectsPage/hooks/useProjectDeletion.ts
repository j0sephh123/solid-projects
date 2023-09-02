import api from "../../../api";

export function useProjectDeletion() {
  const handleDeleteProject = async (id: number, refetch: VoidFunction) => {
    try {
      await api.removeProject(id);
      refetch();
    } catch (e) {
      console.error("An error occurred while deleting the project: ", e);
    }
  };

  return {
    handleDeleteProject,
  };
}
