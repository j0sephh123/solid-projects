import { createSignal } from "solid-js";
import { useModal } from "../providers/ModalProvider";
import { ProjectStatus } from "../../types/projectTypes";
import api from "../../api";
import { useProjects } from "../providers/ProjectsProvider";
import { useNotifications } from "../providers/NotificationsProvider";
import styles from "./CreateProjectForm.module.css";
import Button from "../ui/Button";
import SingleSelect from "./SingleSelect/SingleSelect";
import FieldWrapper from "./FieldWrapper";
import Input from "./Input";

export default function CreateProjectForm() {
  const [name, setName] = createSignal<string>("");
  const [status, setStatus] = createSignal<ProjectStatus>("todo");
  const { modalActions } = useModal();
  const { projectActions } = useProjects();
  const { notificationActions } = useNotifications();
  const handleCreate = async () => {
    try {
      await api.createProject({ name: name(), status: status() });
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
      <FieldWrapper label="Task Name">
        <Input value={name()} setValue={setName} />
      </FieldWrapper>
      <FieldWrapper label="Task Status">
        <SingleSelect value={status()} setValue={setStatus} />
      </FieldWrapper>
      <div class={styles["modal-actions"]}>
        <Button
          isDisabled={name().length < 2 || name().length > 50}
          onClick={handleCreate}
        >
          Create
        </Button>
      </div>
    </>
  );
}
