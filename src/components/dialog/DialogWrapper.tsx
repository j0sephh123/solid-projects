import { Dialog } from "@kobalte/core";
import { JSXElement, ParentProps } from "solid-js";
import CloseIcon from "../../icons/CloseIcon";

type Props = {
  isOpen: boolean;
  onClose: VoidFunction;
  title: string;
} & ParentProps;

export default function DialogWrapper(props: Props) {
  return (
    <Dialog.Root open={props.isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay class="dialog__overlay" onClick={props.onClose} />
        <div class="dialog__positioner">
          <Dialog.Content class="dialog__content">
            <div class="dialog__header">
              <Dialog.Title class="dialog__title">{props.title}</Dialog.Title>
              <Dialog.CloseButton
                onClick={props.onClose}
                class="dialog__closeButton"
              >
                <CloseIcon />
              </Dialog.CloseButton>
            </div>
            <Dialog.Description class="dialog__description">
              {props.children}
            </Dialog.Description>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
