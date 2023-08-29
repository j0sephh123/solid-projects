import Button from "../ui/Button";

type Props = {
  onConfirm: VoidFunction;
  onCancel: VoidFunction;
};

export default function ConfirmDeleteControls(props: Props) {
  return (
    <>
      <Button onClick={props.onConfirm}>Delete</Button>
      <Button onClick={props.onCancel}>Cancel</Button>
    </>
  );
}
