import { createQuery } from "@tanstack/solid-query";
import { For, Match, Switch } from "solid-js";
import { getProjects } from "../api";
import TableRow from "../components/TableRow/TableRow";
import TableWrapper from "../components/TableWrapper/TableWrapper";
import { Project } from "../types";
import { queries } from "../api/queries";

export default function ProjectsPage() {
  const query = createQuery<Project[]>(() => [queries.projects], getProjects);

  // createEffect(() => {
  //   console.log(JSON.stringify(query, null, 2));
  // }, [query]);

  return (
    <>
      <Switch>
        <Match when={query.isLoading}>
          <p>Loading...</p>
        </Match>
        <Match when={query.isError}>
          <p>Error</p>
        </Match>
        <Match when={query.isSuccess}>
          <TableWrapper columns={["id", "name", "status"]}>
            <For each={query.data}>
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
