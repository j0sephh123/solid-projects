import { ProjectStatus } from "../../types/projectTypes";
import styles from "./CreateProjectForm.module.css";

type Props = {
  value: string;
  setValue: (arg: ProjectStatus) => void;
};

export default function SingleSelect(props: Props) {
  return (
    <select
      value={props.value}
      onInput={(e) => props.setValue(e.target.value as ProjectStatus)}
      id="taskStatus"
      class={styles.select}
    >
      <option class={styles.option} value="todo">
        To Do
      </option>
      <option class={styles.option} value="in_progress">
        In Progress
      </option>
      <option class={styles.option} value="done">
        Done
      </option>
    </select>
  );
}
