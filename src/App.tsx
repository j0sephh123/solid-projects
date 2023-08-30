import TheNavbar from "./components/TheNavbar/TheNavbar";
import DialogManager from "./components/dialog/DialogManager";
import Notification from "./components/notification/Notification";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

export default function App() {
  return (
    <>
      <TheNavbar />
      <ProjectsPage />
      <DialogManager />
      <Notification />
    </>
  );
}
