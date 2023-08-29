import { For, Match, Switch, createEffect, createResource } from "solid-js";
import { getProjects, removeProject } from "../api";
import TableRow from "../components/table/TableRow/TableRow";
import TableWrapper from "../components/table/TableWrapper/TableWrapper";
import { Project } from "../types/projectTypes";
import { useProjects } from "../components/providers/ProjectsProvider";
import TableRowActionsMenu from "../components/table/TableRow/TableRowActionsMenu";
import { useModal } from "../components/providers/ModalProvider";

export default function ProjectsPage() {
  const { modalActions } = useModal();
  const { projectActions, getState } = useProjects();
  const [query, { refetch }] = createResource<Project[]>(getProjects);
  const handleDelete = async (id: Project["id"]) => {
    try {
      await removeProject(id);
    } catch (e) {
      console.log(e);
    } finally {
      projectActions.setShouldFetch(true);
    }
  };

  const requestDelete = async (id: Project["id"]) => {
    modalActions.open("delete", () => handleDelete(id));
  };

  createEffect(() => {
    if (getState().shouldFetch) {
      refetch();
      projectActions.setShouldFetch(false);
    }
  });

  return (
    <>
      <h3>Shown Projects: {query()?.length}</h3>
      <Switch>
        <Match when={query.loading}>
          <p>Loading...</p>
        </Match>
        <Match when={query.error}>
          <p>Error</p>
        </Match>
        <Match when={query.state === "ready"}>
          <TableWrapper columns={["id", "name", "status", "actions"]}>
            <For each={query()}>
              {({ id, attributes }) => (
                <TableRow
                  rowElements={[
                    {
                      value: id,
                    },
                    {
                      value: attributes.name,
                    },
                    {
                      value: attributes.status,
                    },
                    {
                      value: (
                        <TableRowActionsMenu
                          onRequestDelete={() => requestDelete(id)}
                        />
                      ),
                    },
                  ]}
                />
              )}
            </For>
          </TableWrapper>
        </Match>
      </Switch>
    </>
  );
}
