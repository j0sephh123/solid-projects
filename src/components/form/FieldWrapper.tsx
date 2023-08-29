import { ParentProps } from "solid-js";
import styles from "./CreateProjectForm.module.css";

type Props = {
  label: string;
} & ParentProps;

export default function FieldWrapper(props: Props) {
  return (
    <div class={styles.field}>
      <label>{props.label}</label>
      {props.children}
    </div>
  );
}
