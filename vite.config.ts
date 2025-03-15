import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
<<<<<<< Updated upstream

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
=======
import svgr from "vite-plugin-svgr";
import { lingui } from "@lingui/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      plugins: [["@lingui/swc-plugin", {}]],
    }),
    tailwindcss(),
    svgr(),
    lingui(),
  ],
>>>>>>> Stashed changes
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
