import { JSXElement } from "solid-js";

type Props = {
  children: JSXElement;
  size?: number;
};

export default function IconWrapper(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="black"
      stroke-width={1.5}
      stroke="white"
      width={props.size || 30}
      height={props.size || 30}
    >
      {props.children}
    </svg>
  );
}
