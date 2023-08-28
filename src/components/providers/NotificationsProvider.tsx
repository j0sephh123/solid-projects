import { createSignal, createContext, useContext, JSXElement } from "solid-js";
import { ProjectAttributes } from "../../types/projectTypes";

export type NotificationsState = {
  message?: string;
};

export const initialNotificationsState: NotificationsState = {
  message: undefined,
};

export type NotificationsStateContextType = [
  () => NotificationsState,
  {
    setMessage: (arg: NotificationsState["message"]) => void;
  }
];

const NotificationsContext = createContext<NotificationsStateContextType>([
  () => initialNotificationsState,
  {
    setMessage: () => undefined,
  },
]);

type Props = {
  children: JSXElement;
};

export default function NotificationsProvider(props: Props) {
  const [notificationsStore, setNotificationsStore] = createSignal(
    initialNotificationsState
  );

  return (
    <NotificationsContext.Provider
      value={[
        notificationsStore as () => NotificationsState,
        {
          setMessage(message) {
            setNotificationsStore((prev) => ({ ...prev, message }));
          },
        },
      ]}
    >
      {props.children}
    </NotificationsContext.Provider>
  );
}

export function useNotifications() {
  return useContext(NotificationsContext);
}
