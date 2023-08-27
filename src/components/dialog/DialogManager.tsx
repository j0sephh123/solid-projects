import { useModal } from "../providers/ModalProvider";
import { Dialog } from "@kobalte/core";
import CloseIcon from "../../icons/CloseIcon";
import CreateProjectForm from "../form/CreateProjectForm";

export default function DialogManager() {
  const [ctx, actions] = useModal();

  return (
    <Dialog.Root open={ctx().type !== null}>
      <Dialog.Portal>
        <Dialog.Overlay class="dialog__overlay" onClick={actions.close} />
        <div class="dialog__positioner">
          <Dialog.Content class="dialog__content">
            <div class="dialog__header">
              <Dialog.Title class="dialog__title">
                {ctx().type === "create" && "Create Project"}
              </Dialog.Title>
              <Dialog.CloseButton
                onClick={actions.close}
                class="dialog__closeButton"
              >
                <CloseIcon />
              </Dialog.CloseButton>
            </div>
            <Dialog.Description class="dialog__description">
              {ctx().type === "create" && <CreateProjectForm />}
            </Dialog.Description>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
