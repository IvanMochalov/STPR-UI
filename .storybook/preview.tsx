import type { Preview } from "@storybook/react-vite";
import mainStyles from "../src/stories/Stories.module.scss";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={mainStyles.storyWrapper}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
