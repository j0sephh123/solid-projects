import { ProjectStatus } from "../../../types/projectTypes";
import styles from "../CreateProjectForm.module.css";
import { projectStatusOptions } from "./utils";

type Props = {
  value: string;
  setValue: (arg: ProjectStatus) => void;
};

export default function SingleSelect(props: Props) {
  return (
    <select
      value={props.value}
      onInput={(e) => props.setValue(e.target.value as ProjectStatus)}
      class={styles.select}
    >
      {projectStatusOptions.map(({ label, value }) => (
        <option class={styles.option} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
