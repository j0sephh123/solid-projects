import { createContext, useContext, ParentProps } from "solid-js";
import { useModalStore, type ModalStoreType } from "../../store/modalStore";

const ModalContext = createContext<ModalStoreType>({
  getState: () => ({
    type: null,
  }),
  actions: {
    open: () => undefined,
    close: () => undefined,
  },
});

export default function ModalProvider(props: ParentProps) {
  const modalStore = useModalStore();

  return (
    <ModalContext.Provider value={modalStore}>
      {props.children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
