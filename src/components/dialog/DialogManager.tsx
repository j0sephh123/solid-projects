import { Dialog } from "@kobalte/core";
import { useModal } from "../providers/ModalProvider";
import CloseIcon from "../../icons/CloseIcon";
import CreateProjectForm from "../form/CreateProjectForm";

export default function DialogManager() {
  const { actions, getState } = useModal();

  return (
    <Dialog.Root open={getState().type !== null}>
      <Dialog.Portal>
        <Dialog.Overlay class="dialog__overlay" onClick={actions.close} />
        <div class="dialog__positioner">
          <Dialog.Content class="dialog__content">
            <div class="dialog__header">
              <Dialog.Title class="dialog__title">
                {getState().type === "create" && "Create Project"}
              </Dialog.Title>
              <Dialog.CloseButton
                onClick={actions.close}
                class="dialog__closeButton"
              >
                <CloseIcon />
              </Dialog.CloseButton>
            </div>
            <Dialog.Description class="dialog__description">
              {getState().type === "create" && <CreateProjectForm />}
            </Dialog.Description>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
