import { createSignal } from "solid-js";

export type ModalState = {
  type: "create" | "delete" | null;
};

export const initialModalState: ModalState = {
  type: null,
};

export type ModalStoreType = {
  getState: () => ModalState;
  actions: {
    open: (type: ModalState["type"]) => void;
    close: VoidFunction;
  };
};

export function useModalStore(): ModalStoreType {
  const [modalState, setModalState] = createSignal(initialModalState);

  const open = (type: ModalState["type"]) => {
    setModalState((prev) => ({ ...prev, type }));
  };

  const close = () => {
    setModalState(initialModalState);
  };

  return {
    getState: modalState,
    actions: {
      open,
      close,
    },
  };
}
