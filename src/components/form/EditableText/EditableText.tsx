import { createSignal } from "solid-js";
import Input from "../Input";
import styles from "../CreateProjectForm.module.css";

type Props = {
  value: string;
  onSave: (value: string) => void;
};

const isEnter = (key: string) => key === "Enter";
const isEscape = (key: string) => key === "Escape";

export default function EditableText(props: Props) {
  const [value, setValue] = createSignal(props.value);
  const [isEditMode, setIsEditMode] = createSignal(false);
  const [effectTrigger, setEffectTrigger] = createSignal(false);

  const handleSave = () => {
    setEffectTrigger(true);

    setTimeout(() => setEffectTrigger(false), 500);

    props.onSave(value());
    setIsEditMode(false);
    setValue(props.value);
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setValue(props.value);
    console.log("exit without saving", props.value);
  };

  const handleTyping = async ({ code }: KeyboardEvent) => {
    if (isEnter(code)) {
      handleSave();
    } else if (isEscape(code)) {
      handleCancel();
    } else {
      console.log("else");
    }
  };

  return (
    <div class={effectTrigger() ? styles.glowEffect : ""}>
      {isEditMode() ? (
        <Input
          autoFocus
          onKeyDown={handleTyping}
          value={value()}
          setValue={setValue}
        />
      ) : (
        <div onClick={() => setIsEditMode(true)}>{props.value}</div>
      )}
    </div>
  );
}
