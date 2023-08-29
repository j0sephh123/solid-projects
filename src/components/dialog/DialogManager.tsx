import { Dialog } from "@kobalte/core";
import { useModal } from "../providers/ModalProvider";
import CloseIcon from "../../icons/CloseIcon";
import CreateProjectForm from "../form/CreateProjectForm";
import ConfirmDeleteControls from "./ConfirmDeleteControls";

export default function DialogManager() {
  const { modalActions, getState } = useModal();

  const handleConfirm = () => {
    const modalState = getState();
    if (modalState.callback) {
      modalState.callback();
    }
    // You can optionally close the modal after confirming.
    modalActions.close();
  };

  return (
    <Dialog.Root open={getState().type !== null}>
      <Dialog.Portal>
        <Dialog.Overlay class="dialog__overlay" onClick={modalActions.close} />
        <div class="dialog__positioner">
          <Dialog.Content class="dialog__content">
            <div class="dialog__header">
              <Dialog.Title class="dialog__title">
                {getState().type === "create" && "Create Project"}
                {getState().type === "delete" &&
                  "Are you sure you want to delete this project"}
              </Dialog.Title>
              <Dialog.CloseButton
                onClick={modalActions.close}
                class="dialog__closeButton"
              >
                <CloseIcon />
              </Dialog.CloseButton>
            </div>
            <Dialog.Description class="dialog__description">
              {getState().type === "create" && <CreateProjectForm />}
              {getState().type === "delete" && (
                <ConfirmDeleteControls
                  onConfirm={handleConfirm}
                  onCancel={modalActions.close}
                />
              )}
            </Dialog.Description>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
