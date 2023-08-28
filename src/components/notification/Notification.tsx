import { Toast } from "@kobalte/core";
import { Portal } from "solid-js/web";
import { useProjects } from "../providers/ProjectsProvider";
import { createEffect } from "solid-js";
import renderToast from "./renderToast";

export default function Notification() {
  const [projects, projectActions] = useProjects();

  createEffect(() => {
    const createdProject = projects().createdProject;

    if (createdProject?.name) {
      const projectName = createdProject.name as string;

      renderToast(projectName);

      projectActions.setCreatedProject(undefined);
    }
  });

  return (
    <>
      <Portal>
        <Toast.Region>
          <Toast.List class="toast__list" />
        </Toast.Region>
      </Portal>
    </>
  );
}
