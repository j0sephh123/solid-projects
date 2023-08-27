import { createSignal } from "solid-js";
import { useModal } from "../providers/ModalProvider";
import { ProjectStatus } from "../../types";
import { createMutation, useQueryClient } from "@tanstack/solid-query";
import { createProject } from "../../api";
import { queries } from "../../api/queries";

export default function CreateProjectForm() {
  const queryClient = useQueryClient();

  const mutation = createMutation(createProject, {
    onSuccess() {
      queryClient.invalidateQueries([queries.projects]);
      setName("");
      setStatus("todo");
      actions.close();
    },
  });

  const [name, setName] = createSignal<string>("");
  const [status, setStatus] = createSignal<ProjectStatus>("todo");
  const [, actions] = useModal();

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
        <button
          onClick={() => mutation.mutate({ name: name(), status: status() })}
          class="button"
        >
          Create
        </button>
      </div>
    </>
  );
}
