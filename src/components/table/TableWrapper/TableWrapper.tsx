import { JSXElement } from "solid-js";
import styles from "../Table.module.css";

type Props = {
  children: JSXElement;
  columns: string[];
};

export default function TableWrapper(props: Props) {
  return (
    <table class={styles.table}>
      <thead>
        <tr class={styles.tr}>
          {props.columns.map((column) => (
            <th class={styles.th}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}
