import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@/src", replacement: path.resolve(__dirname, "src") },
      { find: "@/components", replacement: path.resolve(__dirname, "src/components") },
      { find: "@/routes", replacement: path.resolve(__dirname, "src/routes") },
      { find: "@/utils", replacement: path.resolve(__dirname, "src/utils") },
      { find: "@/assets", replacement: path.resolve(__dirname, "src/assets") },
    ],
  },
});
