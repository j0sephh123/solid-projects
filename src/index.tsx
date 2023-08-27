/* @refresh reload */
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { render } from "solid-js/web";
import "./index.css";
import App from "./App";
import { ModalProvider } from "./components/providers/ModalProvider";

const queryClient = new QueryClient();

const root = document.getElementById("root");

render(
  () => (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </QueryClientProvider>
  ),
  root!
);
