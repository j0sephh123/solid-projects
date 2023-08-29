import { useModal } from "./providers/ModalProvider";

export default function TheNavbar() {
  const { modalActions } = useModal();

  return (
    <nav>
      <div>Home</div>
      <div>
        <button onClick={() => modalActions.open("create")} class="button">
          Create Project
        </button>
      </div>
    </nav>
  );
}
