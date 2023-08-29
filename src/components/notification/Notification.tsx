import { Toast } from "@kobalte/core";
import { Portal } from "solid-js/web";
import { createEffect } from "solid-js";
import renderToast from "./renderToast";
import { useNotifications } from "../providers/NotificationsProvider";
import styles from './Notification.module.css';

export default function Notification() {
  const { notificationActions, getState } = useNotifications();

  createEffect(() => {
    const message = getState().message;

    if (message) {
      renderToast(message);

      notificationActions.setMessage(undefined);
    }
  });

  return (
    <>
      <Portal>
        <Toast.Region>
          <Toast.List class={styles.toast__list} />
        </Toast.Region>
      </Portal>
    </>
  );
}
