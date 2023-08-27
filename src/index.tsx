/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import App from "./App";
import ModalProvider from "./components/providers/ModalProvider";
import ProjectsProvider from "./components/providers/ProjectsProvider";

render(
  () => (
    <ProjectsProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ProjectsProvider>
  ),
  document.getElementById("root")!
);
