import { For } from "solid-js";
import TableRow from "../../components/table/TableRow/TableRow";
import TableWrapper from "../../components/table/TableWrapper/TableWrapper";
import TableRowActionsMenu from "../../components/table/TableRow/TableRowActionsMenu";
import { useModal } from "../../components/providers/ModalProvider";
import { useProjectsAPI } from "./useProjectsApi";
import FetchStatusIndicator from "./FetchStatusIndicator";
import Heading from "../../components/ui/Heading";
import EditableText from "../../components/form/EditableText/EditableText";
import { updateProject } from "../../api";

const ProjectsPage = () => {
  const {
    query,
    deleteProject,
    fetchProjectActions,
    state,
    isError,
    isLoading,
  } = useProjectsAPI();
  const { modalActions } = useModal();

  const handleSaveName = async (id: number, value: string) => {
    const result = await updateProject(id, value);

    console.log(result);
  };

  return (
    <>
      <Heading>Shown Projects: {query()?.data.length}</Heading>
      <FetchStatusIndicator isError={isError()} isLoading={isLoading()}>
        <TableWrapper columns={["id", "name", "status", "actions"]}>
          <For each={state.projects}>
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
                        deleteProject(id, fetchProjectActions)
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
