import { ParentProps } from "solid-js";
import styles from "./Button.module.css";

type Props = {
  onClick: VoidFunction;
} & ParentProps;

export default function Button(props: Props) {
  return (
    <button onClick={props.onClick} class={styles.button}>
      {props.children}
    </button>
  );
}
