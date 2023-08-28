import { useModal } from "./providers/ModalProvider";

export default function TheNavbar() {
  const { actions } = useModal();

  return (
    <nav>
      <div>Home</div>
      <div>
        <button onClick={() => actions.open("create")} class="button">
          Create Project
        </button>
      </div>
    </nav>
  );
}
