import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "test-stpr-ui-kit",
      formats: ["es", "cjs"],
      fileName: (format) => `test-stpr-ui-kit.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src/components",
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: ["**/*.stories.ts"]
    }),
  ],
  css: {
    modules: {
      localsConvention: "camelCase"
    },
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api"],
        // additionalData: `@forward "./src/styles/_variables.scss";`
      }
    }
  }
});
