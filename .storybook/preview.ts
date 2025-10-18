import type { Preview } from "@storybook/react-vite";
import { name, version } from "./../package.json";

const preview: Preview = {
  parameters: {
    version: {
      major: `${name}: version ${version.split(".")[0]}`,
      minor: version.split(".")[1],
      patch: version.split(".")[2],
      prefix: `${name}`,
      style: {
        color: "#036bfd",
        "font-weight": "900",
        "font-size": "24px",
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
