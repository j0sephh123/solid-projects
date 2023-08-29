import { JSXElement } from "solid-js";

type RowElement = { value: JSXElement };

type RowProps = {
  rowElements: RowElement[];
};

export default function TableRow(props: RowProps) {
  return (
    <tr>
      {props.rowElements.map((cell) => (
        <td>{cell.value}</td>
      ))}
    </tr>
  );
}
