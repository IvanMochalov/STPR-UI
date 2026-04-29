import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import type { StorybookConfig } from "@storybook/react-vite";

const currentDir = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
  ],
  staticDirs: ["../public"],
  core: {
    builder: "@storybook/builder-vite",
  },
  viteFinal: async (config) => ({
    ...config,
    base: "/themes/main/assets/storybook/",
    resolve: {
      ...config.resolve,
      alias: {
        ...(config.resolve?.alias ?? {}),
        "local-stpr-ui-kit": resolve(currentDir, "../lib/test-stpr-ui-kit.ts"),
      },
    },
  }),
};
export default config;
