import { Toast, toaster } from "@kobalte/core";
import CloseIcon from "../../icons/CloseIcon";
import styles from "./Notification.module.css";

// TODO create a function for title
export default function renderToast(name: string) {
  return toaster.show((props) => (
    <Toast.Root duration={2000} toastId={props.toastId} class={styles.toast}>
      <div class={styles.toast__content}>
        <div>
          <Toast.Title class={styles.toast__title}>
            {name} has been created
          </Toast.Title>
          <Toast.Description class={styles.toast__description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Toast.Description>
        </div>
        <Toast.CloseButton class={styles["toast__close-button"]}>
          <CloseIcon />
        </Toast.CloseButton>
      </div>
    </Toast.Root>
  ));
}
