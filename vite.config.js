import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Tắt các cảnh báo cụ thể của Sass
        silenceDeprecations: ["legacy-js-api", "mixed-decls", "color-functions"]
      }
    }
  }
});
