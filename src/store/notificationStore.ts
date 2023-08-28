import { createSignal } from "solid-js";

export type NotificationsState = {
  message?: string;
};

export const initialNotificationsState: NotificationsState = {
  message: undefined,
};

export type NotificationsStoreType = {
  getState: () => NotificationsState;
  actions: {
    setMessage: (arg: NotificationsState["message"]) => void;
  };
};

export function useNotificationsStore(): NotificationsStoreType {
  const [notificationsState, setNotificationsState] = createSignal(
    initialNotificationsState
  );

  const setMessage = (message: NotificationsState["message"]) => {
    setNotificationsState((prev) => ({ ...prev, message }));
  };

  return {
    getState: notificationsState,
    actions: {
      setMessage,
    },
  };
}
