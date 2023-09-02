import { For } from "solid-js";
import api from "../../api";
import EditableText from "../../components/form/EditableText/EditableText";
import { useModal } from "../../components/providers/ModalProvider";
import TableRow from "../../components/table/TableRow/TableRow";
import TableRowActionsMenu from "../../components/table/TableRow/TableRowActionsMenu";
import ProjectsPageWrapper from "./ProjectsPageWrapper";
import { useProjectDeletion } from "./hooks/useProjectDeletion";
import { useProjectsActions } from "./hooks/useProjectsActions";
import { useProjectsData } from "./hooks/useProjectsData";

const ProjectsPage = () => {
  const { projects, refetch } = useProjectsData();
  const { fetchProjectActions } = useProjectsActions(refetch);
  const { modalActions } = useModal();
  const { handleDeleteProject } = useProjectDeletion();

  const handleSaveName = async (id: number, value: string) => {
    await api.updateProject(id, value);
  };

  return (
    <>
      <ProjectsPageWrapper heading={() => projects().length}>
        <For each={projects()}>
          {({ id, attributes: { name, status } }) => (
            <TableRow
              rowElements={[
                id,
                <EditableText
                  value={name}
                  onSave={(value) => handleSaveName(id, value)}
                />,
                status,
                <TableRowActionsMenu
                  onRequestDelete={() =>
                    modalActions.open("delete", () =>
                      handleDeleteProject(id, fetchProjectActions)
                    )
                  }
                />,
              ]}
            />
          )}
        </For>
      </ProjectsPageWrapper>
    </>
  );
};

export default ProjectsPage;
