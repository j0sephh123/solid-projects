import { useModal } from "../providers/ModalProvider";
import CreateProjectForm from "../form/CreateProjectForm";
import ConfirmDeleteControls from "./ConfirmDeleteControls";
import DialogWrapper from "./DialogWrapper";
import { createMemo } from "solid-js";
import { useNotifications } from "../providers/NotificationsProvider";

export default function DialogManager() {
  const { modalActions, getState } = useModal();
  const { notificationActions } = useNotifications();

  const handleConfirm = () => {
    const modalState = getState();
    if (modalState.callback) {
      modalState.callback();
    }

    modalActions.close();
    notificationActions.setMessage("Project deleted");
  };

  const title = createMemo(() => {
    const type = getState().type;

    if (type === "create") {
      return "Create Project";
    }

    if (type === "delete") {
      return "Are you sure you want to delete this project?";
    }

    return "Default title";
  });

  return (
    <DialogWrapper
      title={title()}
      isOpen={getState().type !== null}
      onClose={modalActions.close}
    >
      {getState().type === "create" && <CreateProjectForm />}
      {getState().type === "delete" && (
        <ConfirmDeleteControls
          onConfirm={handleConfirm}
          onCancel={modalActions.close}
        />
      )}
    </DialogWrapper>
  );
}
