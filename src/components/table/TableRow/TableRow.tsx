import { JSXElement } from "solid-js";
import styles from "../Table.module.css";

type Props = {
  rowElements: JSXElement[];
};

export default function TableRow(props: Props) {
  return (
    <tr class={styles.tr}>
      {props.rowElements.map((cell) => (
        <td class={styles.td}>{cell}</td>
      ))}
    </tr>
  );
}
