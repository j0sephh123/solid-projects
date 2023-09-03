/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import devtools from "solid-devtools/vite";

export default defineConfig({
  plugins: [devtools(), solidPlugin()],
  test: {
    environment: "jsdom",
    globals: true,
    threads: false,
    isolate: false,
  },
});
