import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), tsconfigPaths()],
    css: {
      preprocessorOptions: {
        scss: {
          // Tắt các cảnh báo cụ thể của Sass
          silenceDeprecations: [
            "legacy-js-api",
            "mixed-decls",
            "color-functions"
          ],
          additionalData: `$prefix: ${env.VITE_BRAND_SHORTHAND}-;`
        }
      }
    }
  };
});
