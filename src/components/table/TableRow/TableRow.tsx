import { JSXElement } from "solid-js";

export type RowElement = { value: JSXElement };

type RowProps = {
  rowElements: RowElement[];
};

export default function TableRow(props: RowProps) {
  return (
    <tr>
      {props.rowElements.map((cell, index) => (
        <td>{cell.value}</td>
      ))}
    </tr>
  );
}
