import { Toast, toaster } from "@kobalte/core";
import CloseIcon from "../../icons/CloseIcon";
import { Portal } from "solid-js/web";

export default function Notification() {
  const showToast = () => {
    toaster.show((props) => (
      <Toast.Root toastId={props.toastId} class="toast">
        <div class="toast__content">
          <div>
            <Toast.Title class="toast__title">
              Event has been created
            </Toast.Title>
            <Toast.Description class="toast__description">
              Monday, January 3rd at 6:00pm
            </Toast.Description>
          </div>
          <Toast.CloseButton class="toast__close-button">
            <CloseIcon />
          </Toast.CloseButton>
        </div>
        <Toast.ProgressTrack class="toast__progress-track">
          <Toast.ProgressFill class="toast__progress-fill" />
        </Toast.ProgressTrack>
      </Toast.Root>
    ));
  };

  return (
    <>
      <button onClick={showToast}>Show toast</button>
      <Portal>
        <Toast.Region>
          <Toast.List class="toast__list" />
        </Toast.Region>
      </Portal>
    </>
  );
}
