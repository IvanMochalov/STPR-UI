import { Accordion } from "@components/Accordion";
import { ProgressWrapper } from "@components/ProgressWrapper";
import { TextWithLabel } from "@components/TextWithLabel";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { useInterval } from "../../hooks/useInterval.ts";
import styles from "./ProgressWrapperStories.module.scss";

const meta: Meta<typeof ProgressWrapper> = {
  title: "Components/ProgressWrapper",
  component: ProgressWrapper,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "number" },
      description: `Текущее значение прогресса (от 0 до doneValue).
Анимация плавно доводит отображаемое значение до этого числа за указанную длительность.\n`,
      table: {
        type: { summary: "number" },
      },
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента ProgressWrapper\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameProgressBadgeRoot: {
      description: "Дополнительный CSS-класс для элемента с процентами прогресса\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    duration: {
      description: `Время в миллисекундах, за которое анимация прогресса обновит отображаемое значение до актуального.
Рекомендуется устанавливать равным интервалу обновления данных с бэкенда.\n`,
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "2000" },
      },
    },
    doneValue: {
      description: `Максимальное значение, соответствующее 100% завершению.
Когда value достигает этого значения, индикатор прогресса скрывается.\n`,
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
      },
    },
    animationVariant: {
      description: `Вариант визуального отображения прогресса:
- "backgroundProgress" - заполнение фона градиентом слева направо
- "pulse" - пульсирующая анимация прозрачности содержимого\n`,
      control: { type: "select" },
      options: ["pulse", "backgroundProgress"],
      table: {
        type: {
          summary: "TProgressWrapperAnimationVariant",
          detail: "'pulse' | 'backgroundProgress'",
        },
        defaultValue: { summary: '"backgroundProgress"' },
      },
    },
    onSuccessLoaded: {
      description: "Callback-функция вызываемая после визуальной загрузки компонента\n",
      control: false,
      table: {
        type: {
          detail:
            "onSuccessLoaded={() => {\n" + "  // логика обработки завершения загрузки;\n" + "}}",
        },
      },
    },
    children: {
      description: `Контент, который оборачивается индикатором прогресса.
Может быть любым React-компонентом или элементом.\n`,
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Компонент-обертка для отображения индикатора прогресса поверх любого контента.

## Особенности:
- **Плавная анимация значений** с easing-функцией для естественного движения
- **Автоматическое скрытие** при достижении 100% прогресса
- **Два варианта анимации** - заполнение фона или пульсация
- **Адаптивный дизайн** с изменением размеров для мобильных устройств
- **CSS-переменные** для кастомизации отображения прогресса
- **Табличные цифры** (tabular-nums) для стабильного отображения процентов

## Визуальные эффекты:
- **Progress Badge** - абсолютно позиционированный индикатор с процентами
- **Заполнение фона** - градиентное заполнение слева направо при \`variant="backgroundProgress"\`
- **Пульсация** - плавное изменение прозрачности при \`variant="pulse"\`
- **Состояние загрузки** - снижение \`opacity\` и блокировка взаимодействия

## Поведение:
- При изменении \`value\` запускается плавная анимация к новому значению
- Когда \`value\` достигает \`doneValue\`, индикатор скрывается через \`500мс\`
- Во время анимации контент становится полупрозрачным и недоступным для взаимодействия

## Рекомендации по использованию:
Как правило компонент \`ProgressWrapper\` используется в случаях, когда данные о состоянии загрузки меняются в интервале времени\n
Для выполнении какой-то логики (актуализации данных о состоянии загрузки через API) в интервале времени рекомендовано использовать хук \`useInterval\`, который принимает два аргумента:
- \`callback\` с логикой актуализации данных о состоянии загрузки
- интервал времени\n
Хук \`useInterval\` экспортируется также из "test-stpr-ui-kit"

### Базовое использование
\`\`\`jsx
import { useInterval } from "test-stpr-ui-kit";

...
const doneValue = 100;
const duration = 2000;
const [progress, setProgress] = useState(0);
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
    <TextWithLabel label={"Шифр модели раздела WIP"}>К01_АР_П_R19</TextWithLabel>
  </ProgressWrapper>
)
\`\`\`
        `,
      },
    },
  },
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

export const PulseAnimation: Story = {
  name: "Pulse Animation Variant",
  args: {
    value: 0,
    doneValue: 100,
    duration: 1500,
    animationVariant: "pulse",
  },
  render: ({ animationVariant, duration = 1500, doneValue, value }) => {
    const [progress, setProgress] = useState(value);
    const [delay, setDelay] = useState<number | null>(duration);

    useInterval(() => {
      if (progress === doneValue) {
        setDelay(null);
        return;
      }
      setProgress((prev) => prev + 20);
    }, delay);

    return (
      <ProgressWrapper
        value={progress}
        duration={duration}
        doneValue={doneValue}
        animationVariant={animationVariant}
      >
        <div className={styles.customProgressContent}>
          <TextWithLabel label={"Пульсирующая анимация"}>Я пульсирую</TextWithLabel>
        </div>
      </ProgressWrapper>
    );
  },
};

export const MultiComponents: Story = {
  name: "Multiple Components Progress Wrappers",
  args: {
    value: 0,
    doneValue: 100,
    duration: 2000,
    animationVariant: "backgroundProgress",
  },
  render: ({ animationVariant, duration = 2000, doneValue = 100, value }) => {
    const [dataProgress, setDataProgress] = useState([
      { id: 0, progress: value, text: "ProgressWrapper это просто обертка над компонентом" },
      {
        id: 1,
        progress: value,
        text: "Можно абсолютно любой компонент обернуть в ProgressWrapper",
      },
      {
        id: 2,
        progress: 100,
        text: "ProgressWrapper при этом просто добавит абсолютно-позиционированный индикатор загрузки к вашему компоненту",
      },
    ]);
    const [delay, setDelay] = useState<number | null>(duration);
    const [currentIndex, setCurrentIndex] = useState(0);

    useInterval(() => {
      setDataProgress((prev) => {
        const newData = [...prev];
        const currentItem = newData[currentIndex];

        // Увеличиваем progress текущего элемента
        currentItem.progress = Math.min(currentItem.progress + 25, doneValue);

        // Если текущий элемент завершен, переходим к следующему
        if (currentItem.progress >= doneValue && currentIndex < newData.length - 1) {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }

        // Если все элементы завершены, останавливаем интервал
        if (newData.every((item) => item.progress >= doneValue)) {
          setDelay(null);
        }

        return newData;
      });
    }, delay);

    return (
      <ul className={styles.progressList}>
        {dataProgress.map(({ progress, id, text }, index) => {
          const [isDone, setIsDone] = useState(progress === doneValue);

          return (
            <ProgressWrapper
              key={id}
              value={progress}
              duration={duration}
              doneValue={doneValue}
              animationVariant={animationVariant}
              onSuccessLoaded={() => {
                setIsDone(true);
                console.log(`подсказка номер ${++index} успешно загружена`);
              }}
            >
              <Accordion
                name={`${++index}. ` + (isDone ? "Компонент загружен" : "Загружаемый компонент")}
                isHiddenExpandIcon={!isDone}
              >
                <TextWithLabel label={"Описание ProgressWrapper"}>{text}</TextWithLabel>
              </Accordion>
            </ProgressWrapper>
          );
        })}
      </ul>
    );
  },
};
