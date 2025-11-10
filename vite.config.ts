import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import copy from "rollup-plugin-copy";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
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
      plugins: [
        copy({
          targets: [
            {
              src: "public/fonts/*",
              dest: "dist/fonts",
            },
          ],
          hook: "writeBundle",
          copyOnce: true,
        }),
      ],
    },
  },
  plugins: [
    react(),
    svgr(),
    dts({
      insertTypesEntry: true,
      include: ["lib"],
      rollupTypes: true,
    }),
    libInjectCss(),
  ],
});
