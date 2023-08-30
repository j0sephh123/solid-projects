import { ParentProps } from "solid-js";
import cx from "clsx";
import styles from "./Button.module.css";

type Props = {
  onClick: VoidFunction;
  isDisabled?: boolean;
} & ParentProps;

export default function Button(props: Props) {
  return (
    <button
      disabled={props.isDisabled}
      onClick={props.onClick}
      class={cx(styles.button, props.isDisabled && styles.disabled)}
    >
      {props.children}
    </button>
  );
}
