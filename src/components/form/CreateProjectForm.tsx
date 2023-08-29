import { createSignal } from "solid-js";
import { useModal } from "../providers/ModalProvider";
import { ProjectStatus } from "../../types/projectTypes";
import { createProject } from "../../api";
import { useProjects } from "../providers/ProjectsProvider";
import { useNotifications } from "../providers/NotificationsProvider";

export default function CreateProjectForm() {
  const [name, setName] = createSignal<string>("");
  const [status, setStatus] = createSignal<ProjectStatus>("todo");
  const { modalActions } = useModal();
  const { projectActions } = useProjects();
  const { notificationActions } = useNotifications();

  const handleCreate = async () => {
    try {
      await createProject({ name: name(), status: status() });
    } catch (e) {
      console.log(e);
    } finally {
      modalActions.close();
      projectActions.setShouldFetch(true);
      notificationActions.setMessage(name());
    }
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
