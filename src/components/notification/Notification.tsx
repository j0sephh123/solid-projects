import { Toast } from "@kobalte/core";
import { Portal } from "solid-js/web";
import { createEffect } from "solid-js";
import renderToast from "./renderToast";
import { useNotifications } from "../providers/NotificationsProvider";

export default function Notification() {
  const {actions, getState} = useNotifications();

  createEffect(() => {
    const message = getState().message;

    if (message) {
      renderToast(message);

      actions.setMessage(undefined);
    }
  });

  return (
    <>
      <Portal>
        <Toast.Region>
          <Toast.List class="toast__list" />
        </Toast.Region>
      </Portal>
    </>
  );
}
