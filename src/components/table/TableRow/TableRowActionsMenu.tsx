import { DropdownMenu } from "@kobalte/core";
import TrashIcon from "../../../icons/TrashIcon";
import styles from "./TableRowActionsMenu.module.css";
import { createEffect, createSignal } from "solid-js";

type Props = {
  onRequestDelete: () => void;
};

export default function TableRowActionsMenu(props: Props) {
  const [isOpen, setIsOpen] = createSignal(false);

  createEffect(() => {
    console.log(isOpen());
  });

  return (
    <DropdownMenu.Root
      // open={isOpen()}
      // onOpenChange={(isOpenArg) => {
      //   console.log("isOpen:", isOpenArg);
      //   setIsOpen(() => isOpenArg);
      // }}
    >
      <DropdownMenu.Trigger class={styles["dropdown-menu__trigger"]}>
        <span>Actions</span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content class={styles["dropdown-menu__content"]}>
          <DropdownMenu.Item
            onClick={props.onRequestDelete}
            class={styles["dropdown-menu__item"]}
          >
            Remove
            <div class={styles["dropdown-menu__item-right-slot"]}>
              <TrashIcon />
            </div>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
