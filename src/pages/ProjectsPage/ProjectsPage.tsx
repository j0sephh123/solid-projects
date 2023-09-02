import { For } from "solid-js";
import TableRow from "../../components/table/TableRow/TableRow";
import TableWrapper from "../../components/table/TableWrapper/TableWrapper";
import TableRowActionsMenu from "../../components/table/TableRow/TableRowActionsMenu";
import { useModal } from "../../components/providers/ModalProvider";
import FetchStatusIndicator from "./FetchStatusIndicator";
import Heading from "../../components/ui/Heading";
import EditableText from "../../components/form/EditableText/EditableText";
import { updateProject } from "../../api";
import { useProjectDeletion } from "./hooks/useProjectDeletion";
import { useProjectsFetch } from "./hooks/useProjectsFetch";
import { useProjectsActions } from "./hooks/useProjectsActions";
import { useProjectsData } from "./hooks/useProjectsData";

const ProjectsPage = () => {
  const { projects, refetch } = useProjectsData();
  const { fetchProjectActions } = useProjectsActions(refetch);
  const { modalActions } = useModal();
  const { isError, isLoading } = useProjectsFetch();

  const { handleDeleteProject } = useProjectDeletion();

  const handleSaveName = async (id: number, value: string) => {
    await updateProject(id, value);
  };

  return (
    <>
      <Heading>Shown Projects: {projects().length}</Heading>
      <FetchStatusIndicator isError={isError()} isLoading={isLoading()}>
        <TableWrapper columns={["id", "name", "status", "actions"]}>
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
        </TableWrapper>
      </FetchStatusIndicator>
    </>
  );
};

export default ProjectsPage;
