import { Match, ParentProps, Switch } from "solid-js";

type Props = {
  isLoading: boolean;
  isError: boolean;
} & ParentProps;

export default function FetchStatusIndicator(props: Props) {
  return (
    <Switch fallback={props.children}>
      <Match when={props.isLoading}>
        <p>Loading...</p>
      </Match>
      <Match when={props.isError}>
        <p>Error</p>
      </Match>
    </Switch>
  );
}
