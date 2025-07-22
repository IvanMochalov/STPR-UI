import react from "@vitejs/plugin-react";
import {resolve} from "path";
import {defineConfig} from "vite";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
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
                    "react/jsx-runtime": "jsxRuntime"
                },
            },
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
    ],
});
