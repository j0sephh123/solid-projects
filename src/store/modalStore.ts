import { createSignal } from "solid-js";

export type ModalState = {
  type: "create" | "delete" | null;
  callback?: VoidFunction;
};

export const initialModalState: ModalState = {
  type: null,
};

export type ModalStoreType = {
  getState: () => ModalState;
  modalActions: {
    open: (type: ModalState["type"], callback?: VoidFunction) => void;
    close: VoidFunction;
  };
};

export function useModalStore(): ModalStoreType {
  const [getState, setModalState] = createSignal(initialModalState);

  const open = (type: ModalState["type"], callback?: VoidFunction) => {
    setModalState((prev) => ({
      ...prev,
      type,
      ...(callback ? { callback } : {}),
    }));
  };

  const close = () => {
    setModalState(initialModalState);
  };

  return {
    getState,
    modalActions: {
      open,
      close,
    },
  };
}
