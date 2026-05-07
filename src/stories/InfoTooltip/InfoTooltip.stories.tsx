import type { Meta, StoryObj } from "@storybook/react-vite";
import { ETooltipPosition, InfoTooltip, Text } from "local-stpr-ui-kit";

import styles from "./InfoTooltip.module.scss";

const meta: Meta<typeof InfoTooltip> = {
  title: "Components/InfoTooltip",
  component: InfoTooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Упрощенная версия компонента Tooltip с предустановленной иконкой информации \`EIconName.Info\` в качестве триггера.

## Особенности

- **Предопределенный триггер** - всегда использует иконку \`EIconName.Info\`
- **Hover режим по умолчанию** - активация при наведении
- **Наследует все свойства Tooltip** - поддерживает все позиции, кастомизацию и callback-и
- **Идеален для подсказок** - семантически правильное использование иконки информации

## Отличие от базового Tooltip

В отличие от \`Tooltip\`, где нужно передавать \`trigger\`, 
\`InfoTooltip\` уже настроен для самых распространенных сценариев использования подсказок.

## Базовое использование
Передайте текст подсказки в параметр \`text\` и уже всё готово!

\`\`\`jsx
// Простая подсказка
<InfoTooltip text="Поясняющая информация о поле" />

// С кастомной позицией
<InfoTooltip 
  text="Дополнительная информация" 
  position={ETooltipPosition.Right}
/>

// С расширенным контентом
<InfoTooltip 
  text={
    <div>
      <strong>Важная информация</strong>
      <br />
      <span>Подробное описание элемента</span>
    </div>
  } 
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
    classNameTriggerIcon: {
      description: "Дополнительный CSS-класс для кастомной стилизации иконки\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameTooltip: {
      description: "Дополнительный CSS-класс для родителя элемента триггера\n",
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
  args: {
    text: "Поясняющая информация о элементе интерфейса",
    isVisibleTooltip: true,
    hover: true,
    isStopPropagationClickOnTrigger: false,
    noPadding: false,
    isToggleClick: false,
  },
};

export default meta;

type Story = StoryObj<typeof InfoTooltip>;

export const Default: Story = {
  name: "Default InfoTooltip",
  args: {
    text: "Базовая подсказка с иконкой информации",
  },
};

export const WithFormattedContent: Story = {
  args: {
    noPadding: true,
    text: (
      <div className={styles.infoTooltipTextWrapper}>
        <Text type={"p1"}>Важная информация</Text>
        <Text type={"description"}>
          Это расширенная подсказка с форматированным содержимым и переносами строк
        </Text>
      </div>
    ),
  },
};
