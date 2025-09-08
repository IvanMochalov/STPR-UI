import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { ProgressWrapper, TextWithLabel } from "../../../lib/test-stpr-ui-kit.ts";
import { useInterval } from "../../hooks/useInterval.ts";
import styles from "./ProgressWrapperStories.module.scss";

const meta: Meta<typeof ProgressWrapper> = {
  component: ProgressWrapper,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: false,
      description: "Текущее значение.\n" + "\n*как правило обновляемое в интервале времени",
    },
    classNameRoot: {
      control: false,
      description: "className для элемента с классом progressWrapper.\n" + "\n*внешняя обёртка",
    },
    classNameProgressBadgeRoot: {
      control: false,
      description:
        "className для элемента с классом progressWrapper__progressBadge.\n" +
        "\n *элемент с % прогресса",
    },
    duration: {
      table: {
        defaultValue: { summary: "2000 ms" },
      },
      description:
        "Время, за которое прогресс обновится до актуального значения.\n" +
        "\nЖелательно устанавливать равным времени интервала актуализации данных с BE",
    },
    doneValue: {
      description: "Конечное значение, соответствующее 100%",
      table: {
        defaultValue: { summary: "100" },
      },
    },
    animationVariant: {
      description: "Вариант анимации прогресса",
      table: {
        defaultValue: { summary: "backgroundProgress" },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "20vh", display: "flex", alignItems: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProgressWrapper>;

export const Default: Story = {
  name: "Default ProgressWrapper",
  args: {
    value: 0,
    doneValue: 100,
    duration: 2000,
    animationVariant: "backgroundProgress",
  },
  render: ({ animationVariant, duration = 2000, doneValue, value }) => {
    const [progress, setProgress] = useState(value);
    const [delay, setDelay] = useState<number | null>(duration);

    useInterval(() => {
      if (progress === doneValue) {
        setDelay(null);

        return;
      }
      setProgress((prev) => prev + 25);
    }, delay);

    return (
      <ProgressWrapper
        value={progress}
        duration={duration}
        doneValue={doneValue}
        animationVariant={animationVariant}
      >
        <div className={styles.customProgressContent}>
          <TextWithLabel label={"Шифр модели раздела WIP"}>К01_АР_П_R19</TextWithLabel>
        </div>
      </ProgressWrapper>
    );
  },
};
