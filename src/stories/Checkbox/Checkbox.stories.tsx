import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { Checkbox, ETooltipPosition } from "test-stpr-ui-kit";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Компонент чекбокса с поддержкой различных размеров, состояний и дополнительных функций. 
Реализован с использованием кастомного дизайна вместо нативного input[type="checkbox"].

## Основные возможности

- **Два размера**: md (20px) и lg (30px)
- **Состояния**: checked, disabled, error
- **Валидация**: поддержка required поля и отображения ошибок
- **Дополнительная информация**: тултипы для пояснений
- **Доступность**: правильная семантика и ARIA-атрибуты
- **Адаптивный дизайн**: увеличенный текст на планшетах и десктопе

## Базовое использование

\`\`\`jsx
import {TOnChangeCheckbox} from "test-stpr-ui-kit";
...

const [states, setStates] = useState({
  someCheck: false,
});
    
const handleChange: TOnChangeCheckbox = (_event, data,) => {
  setStates((prev) => ({
    ...prev,
    [data.name]: data.checked,
  }));
};

return (
  <Checkbox
    name="someCheck"
    checked={states.someCheck}
    onChange={handleChange}
  />
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    size: {
      description:
        "Размер чекбокса:\n- 'lg': большой (30x30px), галочка 16x16px\n- 'md': средний (20x20px), галочка 12x12px",
      control: { type: "radio" },
      options: ["md", "lg"],
      table: {
        defaultValue: { summary: "lg" },
        type: {
          summary: "TCheckboxSize",
          detail: "'md' | 'lg'",
        },
      },
    },
    checked: {
      description: "Состояние чекбокса (выбран/не выбран)",
      control: false,
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      description: "Блокирует взаимодействие с чекбоксом. Визуально затемняет элемент",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    name: {
      description: "Имя чекбокса (обязательное). Используется для идентификации в формах",
      control: { type: "text" },
    },
    label: {
      description: "Текстовая метка чекбокса. Отображается справа от квадрата",
      control: { type: "text" },
    },
    error: {
      description: "Текст ошибки валидации. Отображается под чекбоксом красным цветом",
      control: { type: "text" },
    },
    value: {
      description:
        "Значение чекбокса (опционально). Передается в onChange при изменении для дополнительной логики",
      control: { type: "text" },
    },
    required: {
      description: "Помечает поле как обязательное. Отображает звездочку (*) рядом с лейблом",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    tooltipPosition: {
      description: "Позиция всплывающей подсказки относительно чекбокса",
      control: { type: "select" },
      options: Object.values(ETooltipPosition),
      table: {
        defaultValue: { summary: "bottom-left" },
      },
    },
    infoTooltipText: {
      description: "Текст всплывающей подсказки. Отображается при наведении на иконку информации",
      control: { type: "text" },
    },
    onChange: {
      description:
        "Callback-функция при изменении состояния чекбокса. Передает event и данные чекбокса",
      control: false,
      table: {
        type: { summary: "TOnChangeCheckbox" },
      },
    },
    onMouseEnter: {
      description: "Callback-функция при наведении курсора на контейнер чекбокса",
      control: false,
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента чекбокса",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameError: {
      description: "Дополнительный CSS-класс для элемента отображения ошибки",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
  },
  args: {
    size: "lg",
    label: "Включить проверку",
    name: "checkbox-example",
    disabled: false,
    required: false,
    error: "",
    infoTooltipText: "",
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

// Базовый render function для управления состоянием
type CheckboxProps = React.ComponentProps<typeof Checkbox>;

const CheckboxWithState = (args: CheckboxProps) => {
  const [formData, setFormData] = useState({
    is: args.checked || false,
  });

  const onChange = (
    _event: React.ChangeEvent<HTMLInputElement>,
    data: {
      name: string;
      value?: string;
      checked?: boolean;
    },
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [data.name]: data.checked !== undefined ? data.checked : data.value,
    }));
  };

  return (
    <Checkbox
      {...args}
      error={args.error && !formData.is ? args.error : undefined}
      name={"is"}
      checked={formData.is}
      onChange={onChange}
    />
  );
};

export const Default: Story = {
  name: "Default Checkbox",
  render: CheckboxWithState,
  args: {
    size: "lg",
    label: "Включить проверку",
    checked: false,
  },
};

export const MediumSize: Story = {
  name: "Medium Size Checkbox",
  render: CheckboxWithState,
  args: {
    size: "md",
    label: "Компактный чекбокс",
  },
};

export const CheckedState: Story = {
  name: "Checked Checkbox",
  render: CheckboxWithState,
  args: {
    checked: true,
    label: "Предварительно выбранный",
  },
};

export const DisabledState: Story = {
  name: "Disabled Checkbox",
  render: CheckboxWithState,
  args: {
    disabled: true,
    label: "Заблокированный чекбокс",
  },
};

export const DisabledChecked: Story = {
  name: "Disabled and Checked",
  render: CheckboxWithState,
  args: {
    disabled: true,
    checked: true,
    label: "Заблокированный и выбранный",
  },
};

export const RequiredField: Story = {
  name: "Required Checkbox",
  render: CheckboxWithState,
  args: {
    required: true,
    label: "Обязательное поле",
  },
};

export const WithError: Story = {
  name: "Checkbox with Error",
  render: CheckboxWithState,
  args: {
    required: true,
    error: "Это поле обязательно для выбора",
    label: "Чекбокс с ошибкой",
  },
};

export const WithTooltip: Story = {
  name: "Checkbox with Tooltip",
  render: CheckboxWithState,
  args: {
    label: "Чекбокс с подсказкой",
    infoTooltipText: "Эта опция включает дополнительные функции безопасности",
    tooltipPosition: ETooltipPosition.Right,
  },
};

export const WithoutLabel: Story = {
  name: "Checkbox without Label",
  render: CheckboxWithState,
  args: {
    label: undefined,
    name: "no-label",
  },
};

export const SizesComparison: Story = {
  render: () => {
    const [states, setStates] = useState({
      large: false,
      medium: false,
    });

    const handleChange = (
      _event: React.ChangeEvent<HTMLInputElement>,
      data: { name: string; checked?: boolean },
    ) => {
      setStates((prev) => ({
        ...prev,
        [data.name]: data.checked,
      }));
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Checkbox
          name="large"
          size="lg"
          label="Large size (30x30px)"
          checked={states.large}
          onChange={handleChange}
        />
        <Checkbox
          name="medium"
          size="md"
          label="Medium size (20x20px)"
          checked={states.medium}
          onChange={handleChange}
        />
      </div>
    );
  },
};

export const AllStates: Story = {
  name: "All States Overview",
  render: () => {
    const [states, setStates] = useState({
      normal: false,
      checked: true,
      disabled: false,
      error: false,
      tooltip: false,
    });

    const handleChange = (
      _event: React.ChangeEvent<HTMLInputElement>,
      data: { name: string; checked?: boolean },
    ) => {
      setStates((prev) => ({
        ...prev,
        [data.name]: data.checked,
      }));
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Checkbox
          name="normal"
          label="Обычный чекбокс"
          checked={states.normal}
          onChange={handleChange}
        />

        <Checkbox
          name="checked"
          label="Предварительно выбранный"
          checked={states.checked}
          onChange={handleChange}
        />

        <Checkbox
          name="disabled"
          label="Заблокированный"
          disabled={true}
          checked={states.disabled}
          onChange={handleChange}
        />

        <Checkbox
          name="error"
          label="С ошибкой"
          error={!states.error ? "Необходимо согласие" : undefined}
          checked={states.error}
          onChange={handleChange}
        />

        <Checkbox
          name="tooltip"
          label="С подсказкой"
          infoTooltipText="Это пример всплывающей подсказки"
          tooltipPosition={ETooltipPosition.Right}
          checked={states.tooltip}
          onChange={handleChange}
        />
      </div>
    );
  },
};
