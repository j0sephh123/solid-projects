import { DropdownMenu } from "@kobalte/core";
import TrashIcon from "../../../icons/TrashIcon";

type Props = {
  onRequestDelete: () => void;
};

export default function TableRowActionsMenu(props: Props) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger class="dropdown-menu__trigger">
        <span>Actions</span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content class="dropdown-menu__content">
          <DropdownMenu.Item
            onClick={props.onRequestDelete}
            class="dropdown-menu__item"
          >
            Remove
            <div class="dropdown-menu__item-right-slot">
              <TrashIcon />
            </div>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
