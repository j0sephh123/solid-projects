import { createEffect, createResource, createSignal } from "solid-js";
import { useModal } from "../providers/ModalProvider";
import { ProjectStatus } from "../../types/projectTypes";
import { createProject, getProjects } from "../../api";

export default function CreateProjectForm() {
  // , {
  //   onSuccess() {
  //     queryClient.invalidateQueries([queries.projects]);
  //     setName("");
  //     setStatus("todo");
  //     actions.close();
  //   },
  // }

  const [name, setName] = createSignal<string>("");
  const [status, setStatus] = createSignal<ProjectStatus>("todo");
  const [, actions] = useModal();

  // You can keep your `createResource` for `getProjects` if you're using it somewhere else
  const [projects, { refetch }] = createResource(getProjects);

  const handleCreate = async () => {
    // Call your API function here
    await createProject({ name: name(), status: status() });

    // Refetch projects or invalidate cache or whatever you want to do next
    refetch();

    // Close the modal
    actions.close();
  };

  return (
    <>
      <div class="input-group">
        <label for="myInput">Task Name</label>
        <input
          type="text"
          id="myInput"
          class="input"
          placeholder="Enter task name"
          value={name()}
          onInput={(e) => setName(e.currentTarget.value)}
        />
      </div>

      {/* Select with options */}
      <div class="select-group">
        <label for="taskStatus">Task Status</label>
        <select
          value={status()}
          onInput={(e) => setStatus(e.target.value as ProjectStatus)}
          id="taskStatus"
          class="select"
        >
          <option value="todo">To Do</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div class="modal-actions">
        <button onClick={handleCreate} class="button">
          Create
        </button>
      </div>
    </>
  );
}
