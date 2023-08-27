import { DropdownMenu } from "@kobalte/core";
import { For, Match, Switch, createEffect, createResource } from "solid-js";
import { getProjects, removeProject } from "../api";
import TableRow from "../components/TableRow/TableRow";
import TableWrapper from "../components/TableWrapper/TableWrapper";
import { Project } from "../types/projectTypes";
import TrashIcon from "../icons/TrashIcon";
import { useProjects } from "../components/providers/ProjectsProvider";

export default function ProjectsPage() {
  const [ctx, actions] = useProjects();
  const [query, { refetch }] = createResource<Project[]>(getProjects);

  const handleDelete = async (id: Project["id"]) => {
    try {
      await removeProject(id);
    } catch (e) {
      console.log(e);
    } finally {
      actions.setShouldFetch(true);
    }
  };

  createEffect(() => {
    if (ctx().shouldFetch) {
      refetch();
      actions.setShouldFetch(false);
    } 
  }, [ctx().shouldFetch]);

  return (
    <>
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
                        <DropdownMenu.Root>
                          <DropdownMenu.Trigger class="dropdown-menu__trigger">
                            <span>Actions</span>
                          </DropdownMenu.Trigger>
                          <DropdownMenu.Portal>
                            <DropdownMenu.Content class="dropdown-menu__content">
                              <DropdownMenu.Item
                                onClick={() => handleDelete(id)}
                                class="dropdown-menu__item"
                              >
                                Remove
                                <div class="dropdown-menu__item-right-slot">
                                  <TrashIcon />
                                </div>
                              </DropdownMenu.Item>
                            </DropdownMenu.Content>
                          </DropdownMenu.Portal>
                        </DropdownMenu.Root>
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
