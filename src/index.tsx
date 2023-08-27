/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import App from "./App";
import { ModalProvider } from "./components/providers/ModalProvider";

const root = document.getElementById("root");

render(
  () => (
    <ModalProvider>
      <App />
    </ModalProvider>
  ),
  root!
);
