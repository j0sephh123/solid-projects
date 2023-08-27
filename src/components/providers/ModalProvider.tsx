import { createSignal, createContext, useContext } from "solid-js";

export type ModalState = {
  type: "create" | "delete" | null;
};

export type ModalContextType = [
  () => ModalState,
  {
    open: (type: ModalState["type"]) => void;
    close: VoidFunction;
  }
];

export const initialModalState: ModalState = {
  type: null,
};

const ModalContext = createContext<ModalContextType>([
  () => initialModalState,
  {
    open: () => undefined,
    close: () => undefined,
  },
]);

export function ModalProvider(props: any) {
  const [modalStore, setModalStore] = createSignal(initialModalState);

  return (
    <ModalContext.Provider
      value={[
        modalStore as () => ModalState,
        {
          open(type: ModalState["type"]) {
            console.log("here");

            setModalStore(() => ({ type }));
          },
          close() {
            setModalStore(initialModalState);
          },
        },
      ]}
    >
      {props.children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
