import { useModal } from "../providers/ModalProvider";
import Button from "../ui/Button";
import styles from "./TheNavbar.module.css";

export default function TheNavbar() {
  const { modalActions } = useModal();

  return (
    <nav class={styles.nav}>
      <div>Home</div>
      <div>
        <Button onClick={() => modalActions.open("create")}>
          Create Project
        </Button>
      </div>
    </nav>
  );
}
