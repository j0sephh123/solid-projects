import { createSignal, createContext, useContext, JSXElement } from "solid-js";

export type ModalState = {
  type: "create" | "delete" | null;
};

export const initialModalState: ModalState = {
  type: null,
};

export type ModalContextType = [
  () => ModalState,
  {
    open: (type: ModalState["type"]) => void;
    close: VoidFunction;
  }
];

const ModalContext = createContext<ModalContextType>([
  () => initialModalState,
  {
    open: () => undefined,
    close: () => undefined,
  },
]);

type Props = {
  children: JSXElement;
};

export default function ModalProvider(props: Props) {
  const [modalStore, setModalStore] = createSignal(initialModalState);

  return (
    <ModalContext.Provider
      value={[
        modalStore as () => ModalState,
        {
          open(type: ModalState["type"]) {
            setModalStore((prev) => ({ ...prev, type }));
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
