import { For, Match, Switch, createResource } from "solid-js";
import { getProjects } from "../api";
import TableRow from "../components/TableRow/TableRow";
import TableWrapper from "../components/TableWrapper/TableWrapper";
import { Project } from "../types/projectTypes";

export default function ProjectsPage() {
  const [query] = createResource<Project[]>(getProjects);

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
          <TableWrapper columns={["id", "name", "status"]}>
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
