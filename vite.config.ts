import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "test-stpr-ui-kit",
      fileName: (format) => `test-stpr-ui-kit.${format}.js`,
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
              src: "src/fonts/*",
              dest: "dist/assets/fonts",
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
      exclude: ["**/*.stories.ts"],
      rollupTypes: true,
    }),
    copy(),
  ],
});
