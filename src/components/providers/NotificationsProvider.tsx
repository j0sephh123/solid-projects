import { createContext, useContext, ParentProps } from "solid-js";
import {
  useNotificationsStore,
  NotificationsStoreType,
} from "../../store/notificationStore";

const NotificationsContext = createContext<NotificationsStoreType>({
  getState: () => ({
    message: undefined,
  }),
  notificationActions: {
    setMessage: () => undefined,
  },
});

export default function NotificationsProvider(props: ParentProps) {
  const notificationsStore = useNotificationsStore();

  return (
    <NotificationsContext.Provider value={notificationsStore}>
      {props.children}
    </NotificationsContext.Provider>
  );
}

export function useNotifications() {
  return useContext(NotificationsContext);
}
