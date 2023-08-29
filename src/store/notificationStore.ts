import { createSignal } from "solid-js";

export type NotificationsState = {
  message?: string;
};

export const initialNotificationsState: NotificationsState = {
  message: undefined,
};

export type NotificationsStoreType = {
  getState: () => NotificationsState;
  notificationActions: {
    setMessage: (arg: NotificationsState["message"]) => void;
  };
};

export function useNotificationsStore(): NotificationsStoreType {
  const [getState, setNotificationsState] = createSignal(
    initialNotificationsState
  );

  const setMessage = (message: NotificationsState["message"]) => {
    setNotificationsState((prev) => ({ ...prev, message }));
  };

  return {
    getState,
    notificationActions: {
      setMessage,
    },
  };
}
