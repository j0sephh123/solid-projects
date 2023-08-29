import { Toast, toaster } from "@kobalte/core";
import CloseIcon from "../../icons/CloseIcon";

// TODO create a function for title
export default function renderToast(name: string) {
  return toaster.show((props) => (
    <Toast.Root duration={2000} toastId={props.toastId} class="toast">
      <div class="toast__content">
        <div>
          <Toast.Title class="toast__title">
            {name} has been created
          </Toast.Title>
          <Toast.Description class="toast__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Toast.Description>
        </div>
        <Toast.CloseButton class="toast__close-button">
          <CloseIcon />
        </Toast.CloseButton>
      </div>
    </Toast.Root>
  ));
}
