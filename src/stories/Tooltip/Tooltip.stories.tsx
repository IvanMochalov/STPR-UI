import type { Meta, StoryObj } from "@storybook/react-vite";
import cx from "clsx";
import { useState } from "react";

import {
  Button,
  EIconName,
  ETooltipPosition,
  Icon,
  Text,
  Tooltip,
} from "../../../lib/test-stpr-ui-kit.ts";
import mainStyles from "../Stories.module.scss";
import styles from "./TooltipStories.module.scss";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Компонент тултипа для отображения всплывающих подсказок с поддержкой различных режимов активации и позиционирования.

## Основные возможности

- **Два режима активации**: по наведению (\`hover\`) и по клику (\`click\`)
- **12 позиций отображения**: полная поддержка всех сторон и углов
- **Автоматическое позиционирование**: предотвращает выход за границы \`viewport\` (отключается параметром \`lockPosition\`)
- **Портальное отображение**: рендеринг вне DOM-иерархии для избежания \`overflow\`
- **Гибкая кастомизация**: поддержка кастомных триггеров и содержимого
- **Обработка кликов вне области**: автоматическое закрытие при клике вне тултипа

## Режимы работы

- **Hover режим** (по умолчанию) - тултип показывается при наведении на триггер
- **Click режим** - тултип показывается по клику на триггер
- **Toggle режим** - тултип переключается по клику (открывается/закрывается)

## Позиционирование

Поддерживаются 12 позиций относительно триггера:
- **Top**: сверху по центру
- **TopLeft**: сверху слева  
- **TopRight**: сверху справа
- **Bottom**: снизу по центру
- **BottomLeft**: снизу слева
- **BottomRight**: снизу справа
- **Left**: слева по центру
- **LeftTop**: слева сверху
- **LeftBottom**: слева снизу
- **Right**: справа по центру
- **RightTop**: справа сверху
- **RightBottom**: справа снизу

## Базовое использование
Тултип - это всего лишь обертка над вашим компонентом, который вы передаёте в параметр \`trigger\`, а в параметр \`text\` передаёте текст подсказки для оторбажения при наведении на \`trigger\`.

\`\`\`jsx
// Простой тултип по наведению
<Tooltip
  text="Это всплывающая подсказка"
  trigger={<Button>Наведи на меня</Button>}
/>

// Тултип по клику с кастомной позицией
<Tooltip
  text="Подсказка появляется по клику"
  hover={false}
  position={ETooltipPosition.Right}
  trigger={<Icon name={EIconName.Info} />}
/>

// Тултип с React-компонентом внутри
<Tooltip
  text={
    <div>
      <strong>Форматированное содержимое</strong>
      <br />
      <span>С поддержкой HTML-разметки</span>
    </div>
  }
  trigger={<span>Кастомный контент</span>}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    hover: {
      description: `Режим активации тултипа:\n- true: показывать при наведении (по умолчанию)\n- false: показывать по клику\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    isToggleClick: {
      description: `Режим переключения для клика:\n- true: тултип переключается по клику (открывается/закрывается)\n- false: тултип открывается по клику, закрывается по клику вне области\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    isVisibleTooltip: {
      description: `Видимость тултипа. Если false, тултип не будет отображаться даже при активации.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    isStopPropagationClickOnTrigger: {
      description: `Останавливать всплытие события клика на триггере. Полезно когда тултип находится внутри другого кликабельного элемента.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    position: {
      description: `Позиция тултипа относительно триггера. Автоматически корректируется при выходе за границы viewport.\n`,
      control: { type: "select" },
      options: Object.values(ETooltipPosition),
      table: {
        type: {
          summary: "ETooltipPosition",
        },
        defaultValue: { summary: '"bottom-left"' },
      },
    },
    lockPosition: {
      description: `Запрещает перерасчёт позиции. Если true, используется только переданная позиция без проверки viewport и подбора альтернатив. Полезно для выпадающих списков.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    text: {
      description: `Содержимое тултипа. Может быть строкой или React-компонентом. Поддерживает многострочный текст и HTML-разметку.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string | ReactNode" },
      },
    },
    noPadding: {
      description: `Убрать внутренние отступы у тултипа. Полезно для кастомного оформления контента.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    trigger: {
      description: `React-компонент, который активирует показ тултипа. Может быть любой кликабельный или hover-элемент.\n`,
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    triggerAction: {
      description: `Callback-функция, вызываемая при активации тултипа (открытии).\n`,
      control: false,
      table: {
        type: { summary: "() => void" },
      },
    },
    actionOnClose: {
      description: `Callback-функция, вызываемая при закрытии тултипа.\n`,
      control: false,
      table: {
        type: { summary: "() => void" },
      },
    },
    classNameTooltip: {
      description: "Дополнительный CSS-класс для корневого элемента тултипа (триггера)\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameBaseTooltipRoot: {
      description: "Дополнительный CSS-класс для корневого элемента базового тултипа\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameBaseTooltipContentRoot: {
      description: "Дополнительный CSS-класс для контентной области базового тултипа\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    styleTooltip: {
      description: "Инлайн-стили для кастомизации внешнего вида контейнера тултипа\n",
      control: { type: "object" },
      table: {
        type: { summary: "CSSProperties" },
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
  args: {
    position: ETooltipPosition.BottomLeft,
    isVisibleTooltip: true,
    hover: true,
    isStopPropagationClickOnTrigger: false,
    noPadding: false,
    isToggleClick: false,
    lockPosition: false,
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  name: "Default Hover Tooltip",
  args: {
    text: "Дефолтный тултип, который появляется при наведении на элемент",
    trigger: <Text classNameRoot={cx(styles.defaultTooltipTrigger)}>Наведи на меня</Text>,
  },
};

export const Clickable: Story = {
  name: "Click Activated Tooltip",
  args: {
    hover: false,
    text: "Этот тултип появляется только по клику и закрывается при клике вне области",
    trigger: (
      <Text classNameRoot={cx(styles.clickableTooltipTrigger, styles.defaultTooltipTrigger)}>
        Кликни на меня
      </Text>
    ),
  },
};

export const ToggleClickable: Story = {
  name: "Toggle Click Tooltip",
  args: {
    isToggleClick: true,
    hover: false,
    text: "Этот тултип переключается по клику - открывается и закрывается при повторном клике на триггер",
    trigger: (
      <Text classNameRoot={cx(styles.toggleClickableTooltipTrigger, styles.defaultTooltipTrigger)}>
        Кликай для переключения
      </Text>
    ),
  },
};

export const IconTooltip: Story = {
  name: "Icon with Tooltip",
  args: {
    text: "Информационная иконка с подсказкой. Идеально для пояснения сложных элементов интерфейса.",
    trigger: <Icon className={styles.iconTooltipTrigger} name={EIconName.Info} />,
  },
  render: (args) => {
    return (
      <div className={styles.iconTooltipWrapper}>
        <Text>Статус операции</Text>
        <Tooltip {...args} />
      </div>
    );
  },
};

export const ButtonWithTooltip: Story = {
  name: "Button with Tooltip",
  args: {
    text: "Эта кнопка выполняет важное действие. Убедитесь, что все данные корректны перед нажатием.",
    trigger: <Button>Важное действие</Button>,
  },
};

export const AllPositions: Story = {
  name: "All Tooltip Positions",
  render: () => {
    const positions = [
      { position: ETooltipPosition.Top, label: "Top" },
      { position: ETooltipPosition.TopLeft, label: "Top Left" },
      { position: ETooltipPosition.TopRight, label: "Top Right" },
      { position: ETooltipPosition.Bottom, label: "Bottom" },
      { position: ETooltipPosition.BottomLeft, label: "Bottom Left" },
      { position: ETooltipPosition.BottomRight, label: "Bottom Right" },
      { position: ETooltipPosition.Left, label: "Left" },
      { position: ETooltipPosition.LeftTop, label: "Left Top" },
      { position: ETooltipPosition.LeftBottom, label: "Left Bottom" },
      { position: ETooltipPosition.Right, label: "Right" },
      { position: ETooltipPosition.RightTop, label: "Right Top" },
      { position: ETooltipPosition.RightBottom, label: "Right Bottom" },
    ];

    return (
      <div className={styles.allPositionTooltipWrapper}>
        {positions.map(({ position, label }) => (
          <div key={position} className={styles.allPositionTooltipWrapper__item}>
            <Tooltip
              position={position}
              text={`Позиция: ${label}`}
              trigger={
                <Text
                  classNameRoot={cx(styles.defaultTooltipTrigger, styles.allPositionTooltipTrigger)}
                >
                  {label}
                </Text>
              }
            />
          </div>
        ))}
      </div>
    );
  },
};

export const RichContentTooltip: Story = {
  name: "Tooltip with Rich Content",
  args: {
    text: (
      <div className={styles.richContentTooltipTextWrapper}>
        <Text classNameRoot={styles.richContentTooltipTextWrapper__title}>
          Расширенная информация
        </Text>
        <Text classNameRoot={styles.richContentTooltipTextWrapper__subtitle}>
          Этот тултип содержит форматированный контент с:
        </Text>
        <ul className={styles.richContentTooltipTextWrapper__list}>
          <li>Заголовком</li>
          <li>Списком элементов</li>
          <li>Разными стилями текста</li>
        </ul>
        <Text classNameRoot={styles.richContentTooltipTextWrapper__description}>
          Поддержка любого React-контента
        </Text>
      </div>
    ),
    trigger: <Text classNameRoot={styles.defaultTooltipTrigger}>Расширенный контент</Text>,
  },
};

export const NoPaddingTooltip: Story = {
  name: "Tooltip without Padding",
  args: {
    noPadding: true,
    text: (
      <Text classNameRoot={styles.noPaddingTooltipTextWrapper}>
        Кастомный контент без стандартных отступов
      </Text>
    ),
    trigger: <Text classNameRoot={styles.defaultTooltipTrigger}>Без отступов</Text>,
  },
};

export const ActionCallbacks: Story = {
  name: "Tooltip with Action Callbacks",
  render: () => {
    const [log, setLog] = useState<string[]>([]);

    const addLog = (message: string) => {
      setLog((prev) => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${message}`]);
    };

    return (
      <div className={styles.actionCallbacksTooltipWrapper}>
        <Tooltip
          hover={false}
          position={ETooltipPosition.TopLeft}
          text="Этот тултип вызывает callback-функции при открытии и закрытии"
          triggerAction={() => addLog("Тултип открыт")}
          actionOnClose={() => addLog("Тултип закрыт")}
          trigger={<Text classNameRoot={styles.defaultTooltipTrigger}>С callback-ами</Text>}
        />
        <div className={styles.actionCallbacksTooltipWrapper__logsWrapper}>
          <Text type={"p1"}>Лог событий:</Text>
          {log.length > 0 ? (
            <ul className={styles.actionCallbacksTooltipWrapper__logsWrapper__list}>
              {log.map((entry, index) => (
                <Text
                  key={index}
                  classNameRoot={styles.actionCallbacksTooltipWrapper__logsWrapper__list__item}
                >
                  {entry}
                </Text>
              ))}
            </ul>
          ) : (
            <Text classNameRoot={styles.actionCallbacksTooltipWrapper__logsWrapper__description}>
              События будут отображаться здесь...
            </Text>
          )}
        </div>
      </div>
    );
  },
};

export const StopPropagationExample: Story = {
  name: "Tooltip with Stop Propagation",
  render: () => {
    const handleParentClick = () => {
      alert("Клик по родительскому элементу!");
    };

    return (
      <div className={styles.stopPropagationTooltipWrapper} onClick={handleParentClick}>
        <Text type={"p1"}>Кликабельная область (кликните здесь)</Text>
        <Tooltip
          hover={false}
          isStopPropagationClickOnTrigger={true}
          text="Этот тултип останавливает всплытие события клика"
          trigger={
            <Text
              classNameRoot={cx(styles.toggleClickableTooltipTrigger, styles.defaultTooltipTrigger)}
            >
              Кликни (всплытие остановлено)
            </Text>
          }
        />
        <Text type={"description"}>Обычный текст в той же области</Text>
      </div>
    );
  },
};
