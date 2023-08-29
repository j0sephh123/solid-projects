import { Dialog } from "@kobalte/core";
import { ParentProps } from "solid-js";
import CloseIcon from "../../icons/CloseIcon";
import styles from "./Dialog.module.css";

type Props = {
  isOpen: boolean;
  onClose: VoidFunction;
  title: string;
} & ParentProps;

export default function DialogWrapper(props: Props) {
  return (
    <Dialog.Root open={props.isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          class={styles.dialog__overlay}
          onClick={props.onClose}
        />
        <div class={styles.dialog__positioner}>
          <Dialog.Content class={styles.dialog__content}>
            <div class={styles.dialog__header}>
              <Dialog.Title class={styles.dialog__title}>
                {props.title}
              </Dialog.Title>
              <Dialog.CloseButton
                onClick={props.onClose}
                class={styles.dialog__closeButton}
              >
                <CloseIcon />
              </Dialog.CloseButton>
            </div>
            <Dialog.Description class={styles.dialog__description}>
              {props.children}
            </Dialog.Description>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
