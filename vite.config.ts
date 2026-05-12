import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@components": resolve(__dirname, "lib/components"),
    },
  },
  build: {
    outDir: "dist",
    lib: {
      entry: resolve(__dirname, "lib/test-stpr-ui-kit.ts"),
      name: "test-stpr-ui-kit",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
  },
  plugins: [
    react(),
    svgr(),
    dts({
      tsconfigPath: "tsconfig.json",
      insertTypesEntry: true,
      include: ["lib/**/*.ts", "lib/**/*.tsx"],
    }),
    libInjectCss(),
  ],
});
