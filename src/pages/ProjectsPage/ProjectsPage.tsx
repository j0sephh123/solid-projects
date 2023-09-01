import { For, createEffect } from "solid-js";
import TableRow from "../../components/table/TableRow/TableRow";
import TableWrapper from "../../components/table/TableWrapper/TableWrapper";
import { useProjects } from "../../components/providers/ProjectsProvider";
import TableRowActionsMenu from "../../components/table/TableRow/TableRowActionsMenu";
import { useModal } from "../../components/providers/ModalProvider";
import { useProjectsAPI } from "./useProjectsApi";
import FetchStatusIndicator from "./FetchStatusIndicator";
import Heading from "../../components/ui/Heading";
import EditableText from "../../components/form/EditableText/EditableText";
import { updateProject } from "../../api";

export default function ProjectsPage() {
  const { query, deleteProject, refetch } = useProjectsAPI();
  const { modalActions } = useModal();
  const { projectActions, getState } = useProjects();

  const handleSaveName = async (id: number, value: string) => {
    const result = await updateProject(id, value);

    console.log(result);
  };

  createEffect(() => {
    if (getState().shouldFetch) {
      refetch();
      projectActions.setShouldFetch(false);
    }
  });

  return (
    <>
      <Heading>Shown Projects: {query()?.length}</Heading>
      <FetchStatusIndicator isError={query.error} isLoading={query.loading}>
        <TableWrapper columns={["id", "name", "status", "actions"]}>
          <For each={query()}>
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
                        deleteProject(id, () =>
                          projectActions.setShouldFetch(true)
                        )
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
}
