type Props = {
  onConfirm: VoidFunction;
  onCancel: VoidFunction;
};

export default function ConfirmDeleteControls(props: Props) {
  return (
    <>
      <button onClick={props.onConfirm} class="button">
        Delete
      </button>
      <button onClick={props.onCancel} class="button">
        Cancel
      </button>
    </>
  );
}
