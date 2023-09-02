/* @refresh reload */
import { render } from "solid-js/web";
import "solid-devtools";
import "./index.css";
import App from "./App";
import ModalProvider from "./components/providers/ModalProvider";
import ProjectsProvider from "./components/providers/ProjectsProvider";
import NotificationsProvider from "./components/providers/NotificationsProvider";

render(
  () => (
    <ProjectsProvider>
      <ModalProvider>
        <NotificationsProvider>
          <App />
        </NotificationsProvider>
      </ModalProvider>
    </ProjectsProvider>
  ),
  document.getElementById("root")!
);
