import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { dependencies, peerDependencies } from "./package.json";
import { libDistPostprocess } from "./scripts/vite-plugin-lib-dist-postprocess";

const distDir = resolve(__dirname, "dist");

const externalDeps = [
  "react",
  "react/jsx-runtime",
  "react-dom",
  ...Object.keys(peerDependencies),
  ...Object.keys(dependencies),
];

// ESM library: preserveModules для tree-shaking у потребителя + per-component CSS (+ public assets).
export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    copyPublicDir: true,
    lib: {
      entry: resolve(__dirname, "src/test-stpr-ui-kit.ts"),
      name: "test-stpr-ui-kit",
      formats: ["es"],
      fileName: "test-stpr-ui-kit",
    },
    rollupOptions: {
      external: (id) =>
        externalDeps.some((dep) => id === dep || id.startsWith(`${dep}/`)),
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
      },
    },
  },
  plugins: [react(), svgr(), libInjectCss(), libDistPostprocess(distDir)],
});
