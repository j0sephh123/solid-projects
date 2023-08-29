import { JSXElement } from "solid-js";
import styles from "../Table.module.css";

type RowElement = { value: JSXElement };

type RowProps = {
  rowElements: RowElement[];
};

export default function TableRow(props: RowProps) {
  return (
    <tr class={styles.tr}>
      {props.rowElements.map((cell) => (
        <td class={styles.td}>{cell.value}</td>
      ))}
    </tr>
  );
}
