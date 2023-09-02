import { ParentProps } from "solid-js";

export default function Heading(props: ParentProps) {
  return <h3>{props.children}</h3>;
}
