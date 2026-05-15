import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { peerDependencies } from "./package.json";

const libRoot = resolve(__dirname, "lib");
const peerNames = Object.keys(peerDependencies);

/** Peer'ы и их подпути (`three/examples/jsm/...`, `react-dom/client` и т.д.) — не бандлим в dist. */
const isExternalPeer = (id: string): boolean => {
  if (id === "react/jsx-runtime") {
    return true;
  }

  if (id.startsWith(".") || id.startsWith("/") || id.startsWith("\0")) {
    return false;
  }

  return peerNames.some((name) => id === name || id.startsWith(`${name}/`));
};

// https://vitejs.dev/config/ — плоский dist: один ESM entry + CSS + типы (+ public: fonts, components-assets).
export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@components": resolve(__dirname, "lib/components"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    copyPublicDir: true,
    lib: {
      entry: resolve(libRoot, "test-stpr-ui-kit.ts"),
      name: "test-stpr-ui-kit",
      formats: ["es"],
      fileName: "test-stpr-ui-kit",
    },
    rollupOptions: {
      external: isExternalPeer,
      output: {
        inlineDynamicImports: true,
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
      outDir: "dist",
      rollupTypes: true,
    }),
    libInjectCss(),
  ],
});
