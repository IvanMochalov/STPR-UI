import type { StorybookConfig } from "@storybook/react-vite";

const STORYBOOK_BASE_PATHS: Record<string, string> = {
  "build:storybook": "/themes/main/assets/storybook/",
  "build:storybook-pages": "/STPR-UI/",
};

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
  staticDirs: ["../public", "../src/story-assets"],
  core: {
    builder: "@storybook/builder-vite",
  },
  viteFinal: async (config) => {
    const base =
      process.env.STORYBOOK_BASE_PATH ??
      STORYBOOK_BASE_PATHS[process.env.npm_lifecycle_event ?? ""] ??
      "/";

    return {
      ...config,
      base,
    };
  },
};
export default config;
