import { JSX } from "solid-js";
import styles from "./CreateProjectForm.module.css";

type Props = {
  value: string;
  setValue: (arg: string) => void;
  onKeyDown?: JSX.EventHandlerUnion<HTMLInputElement, KeyboardEvent>;
  autoFocus?: boolean;
};

export default function Input(props: Props) {
  return (
    <input
      autofocus={props.autoFocus ? props.autoFocus : undefined}
      onKeyDown={props.onKeyDown}
      type="text"
      class={styles.input}
      placeholder="Enter task name"
      value={props.value}
      onInput={(e) => props.setValue(e.currentTarget.value)}
    />
  );
}
