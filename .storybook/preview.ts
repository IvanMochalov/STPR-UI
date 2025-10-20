import type { Preview } from "@storybook/react-vite";
import { version } from "./../package.json";

const preview: Preview = {
  parameters: {
    version: {
      major: `Version: ${version.split(".")[0]}`,
      minor: version.split(".")[1],
      patch: version.split(".")[2],
      style: {
        color: "#036bfd",
        "font-family": "'ALSHauss', Verdana, Arial, Sans-serif;",
        "font-weight": "400",
        "font-size": "14px",
      },
    },
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
