import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import storybookPlugin from "eslint-plugin-storybook";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/storybook-static/**",
      "**/.next/**",
      "**/out/**",
      "**/.cache/**",
      "**/.vscode/**",
      "**/public/**",
      "**/*.log",
      "**/*.md",
      "**/*.html",
      "eslint.config.js",
      "vite.config.ts",
    ],
  },

  js.configs.recommended,

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-refresh": reactRefreshPlugin,
      "simple-import-sort": simpleImportSortPlugin,
      storybook: storybookPlugin,
    },
    rules: {
      ...(tsPlugin.configs.recommended?.rules ?? {}),
      ...(reactPlugin.configs.recommended?.rules ?? {}),
      ...(reactHooksPlugin.configs.recommended?.rules ?? {}),
      ...(storybookPlugin.configs.recommended?.rules ?? {}),

      "react/react-in-jsx-scope": "off",
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      // В eslint-plugin-react-hooks@7 добавились новые правила; выключаем, чтобы не ломать текущий код
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/refs": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_|^[A-Z]",
        },
      ],
    },
  },

  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-refresh": reactRefreshPlugin,
      "simple-import-sort": simpleImportSortPlugin,
      storybook: storybookPlugin,
    },
    rules: {
      ...(reactPlugin.configs.recommended?.rules ?? {}),
      ...(reactHooksPlugin.configs.recommended?.rules ?? {}),
      ...(storybookPlugin.configs.recommended?.rules ?? {}),

      "react/react-in-jsx-scope": "off",
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/refs": "off",
    },
  },

  // Storybook stories часто используют хуки внутри render-функций (args-based stories).
  // Это не production-код, поэтому отключаем rules-of-hooks только для stories.
  {
    files: ["src/**/*.stories.@(js|jsx|mjs|ts|tsx)", "src/**/*.story.@(js|jsx|mjs|ts|tsx)"],
    rules: {
      "react-hooks/rules-of-hooks": "off",
    },
  },
];

