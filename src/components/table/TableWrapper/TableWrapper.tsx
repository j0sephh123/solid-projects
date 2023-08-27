import { JSXElement } from "solid-js";

type Props = {
  children: JSXElement;
  columns: string[];
};

export default function TableWrapper(props: Props) {
  return (
    <table>
      <thead>
        <tr>
          {props.columns.map((column) => (
            <th>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}
