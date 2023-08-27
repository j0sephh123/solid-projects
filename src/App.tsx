import TheNavbar from "./components/TheNavbar";
import DialogManager from "./components/dialog/DialogManager";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  return (
    <>
      <TheNavbar />
      <ProjectsPage />
      <DialogManager />
    </>
  );
}
