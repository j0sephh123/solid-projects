import styles from "./CreateProjectForm.module.css";

type Props = {
  value: string;
  setValue: (arg: string) => void;
};

export default function Input(props: Props) {
  return (
    <input
      type="text"
      class={styles.input}
      placeholder="Enter task name"
      value={props.value}
      onInput={(e) => props.setValue(e.currentTarget.value)}
    />
  );
}
