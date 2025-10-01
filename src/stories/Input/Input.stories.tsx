import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

import { Input } from "../../../lib/components/Input";
import { Text } from "../../../lib/components/Text";
import mainStyles from "../Stories.module.scss";
import styles from "./InputStories.module.scss";
import { Form } from "../../../lib/components/Form";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      description: `Callback-функция, вызываемая при изменении значения поля ввода.
Получает два параметра:
- event: стандартное React событие ChangeEvent<HTMLInputElement>
- data: объект с именем поля и новым значением

Особенности:
- Значение всегда передается как \`string\` даже для числовых полей
- При очистке поля (isClearable) передается пустая строка
- Паттерн валидации применяется до вызова onChange
- Для работы с формами рекомендуется использовать вместе с состоянием React\n`,
      control: false,
      table: {
        type: {
          detail:
            "(event: React.ChangeEvent<HTMLInputElement>,\n" +
            "data: {\n" +
            "  name: string;\n" +
            "  value?: string;\n" +
            "  checked?: boolean\n" +
            "}) => void",
          summary: "TOnChangeInput",
        },
      },
    },
    variant: {
      description: `Вариант стиля поля ввода:\n- "outlined" - с границей (по умолчанию)\n- "filled" - с заполненным фоном\n`,
      control: { type: "select" },
      options: ["outlined", "filled"],
      table: {
        type: { summary: "TInputVariant", detail: "'outlined' | 'filled'" },
        defaultValue: { summary: '"outlined"' },
      },
    },
    disabled: {
      description: `Отключить поле ввода. Заблокирует взаимодействие и изменит визуальный стиль.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    isAbsolutePositionError: {
      description: `Позиционировать текст ошибки абсолютно. Полезно для компактных форм.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    isVisibleDefaultTitle: {
      description: `Показывать стандартный title при наведении на поле с текстом значения.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    isClearable: {
      description: `Показывать иконку очистки поля когда есть значение. Автоматически добавляет обработчик очистки.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    required: {
      description: `Пометить поле как обязательное для заполнения. Добавляет звездочку к лейблу.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    pattern: {
      description: `RegExp паттерн для валидации ввода. Ввод будет игнорироваться если значение не соответствует регулярному выражению.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "RegExp | string" },
      },
    },
    tooltipPosition: {
      description: `Позиция тултипа для подсказки лейбла.\n`,
      control: { type: "select" },
      options: [
        "top",
        "top-left",
        "top-right",
        "bottom",
        "bottom-left",
        "bottom-right",
        "left",
        "left-top",
        "left-bottom",
        "right",
        "right-top",
        "right-bottom",
      ],
      table: {
        type: { summary: "ETooltipPosition" },
        defaultValue: { summary: '"bottom-left"' },
      },
    },
    label: {
      description: `Текст лейбла поля. Отображается над полем ввода.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    infoTooltipText: {
      description: `Текст подсказки для лейбла. Показывает иконку информации с тултипом.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    error: {
      description: `Текст ошибки валидации. Подсвечивает поле красным и показывает сообщение об ошибке.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    placeholder: {
      description: `Текст-подсказка внутри поля когда значение отсутствует.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Введите..."' },
      },
    },
    value: {
      description: `Значение поля ввода. Контролируемое свойство.\n`,
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    name: {
      description: `Имя поля для формы. Обязательный параметр.\n`,
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента поля ввода\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameLabel: {
      description: "Дополнительный CSS-класс для элемента лейбла\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameError: {
      description: "Дополнительный CSS-класс для элемента ошибки\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameBaseTooltipRoot: {
      description: "Дополнительный CSS-класс для корневого элемента тултипа лейбла\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    ref: {
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Компонент поля ввода с поддержкой различных состояний, валидации и дополнительных функций.

## Особенности:
- **Два варианта стиля**: outlined (с границей) и filled (с заполненным фоном)
- **Валидация и ошибки**: подсветка ошибок и текстовые сообщения
- **Очистка значения**: иконка очистки при включенном \`isClearable\`
- **Подсказки лейбла**: встроенная поддержка тултипов для пояснений
- **Паттерны ввода**: валидация по регулярным выражениям
- **Адаптивный дизайн**: разные размеры и отступы на мобильных и desktop
- **Доступность**: правильная семантика и поддержка screen readers

## Состояния поля:
- **Обычное**: стандартное состояние
- **С ошибкой**: красная граница и текст ошибки
- **Отключенное**: серый цвет и блокировка взаимодействия
- **С фокусом**: синяя граница для указания активного состояния

## Рекомендации по использованию:
Используйте для текстового ввода в формах с поддержкой валидации и подсказок.

### Базовое использование

\`\`\`jsx
const [formData, setFormData] = useState({
  address: "",
});

<Input
  name="address"
  value={formData.address}
  onChange={(event, {name, value}) => setFormData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
  label="Имя пользователя"
  placeholder="Введите ваше имя"
/>
\`\`\`
        `,
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
    variant: "outlined",
    isAbsolutePositionError: false,
    disabled: false,
    required: false,
    isClearable: false,
    infoTooltipText: "",
    label: "",
    pattern: "",
    error: "",
    isVisibleDefaultTitle: true,
    placeholder: "Введите...",
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  name: "Default Input",
  render: (args) => {
    const [formData, setFormData] = useState({
      description: "",
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
      <div className={styles.storiesWrapper}>
        <Input
          {...args}
          error={!formData.description ? args.error : undefined}
          name={"description"}
          value={formData.description}
          onChange={onChange}
        />
        <div className={styles.viewInputList}>
          <div className={styles.viewInputListItem}>
            <Text type={"description"} classNameRoot={styles.viewInputListItem__description}>
              Input with Error
            </Text>
            <Input
              {...args}
              name={"description"}
              value={formData.description}
              error={"Обязательное поле для заполнения"}
              onChange={(event) => event.stopPropagation()}
            />
          </div>
          <div className={styles.viewInputListItem}>
            <Text type={"description"} classNameRoot={styles.viewInputListItem__description}>
              Disabled Input
            </Text>
            <Input
              {...args}
              name={"description"}
              value={formData.description}
              disabled={true}
              onChange={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      </div>
    );
  },
};

export const WithLabel: Story = {
  name: "Input with Label",
  render: Default.render,
  args: {
    label: "Описание строения",
    isClearable: true,
    placeholder: "Начните вводить описание...",
  },
};

export const WithLabelAndTooltip: Story = {
  name: "Input with Label and Tooltip",
  render: Default.render,
  args: {
    label: "Описание строения",
    infoTooltipText:
      "Подсказка для поля 'Описание строения'. Введите подробное описание объекта строительства.",
    placeholder: "Введите описание объекта...",
  },
};

export const RequiredField: Story = {
  name: "Required Input Field",
  render: (args) => {
    const [formData, setFormData] = useState({
      requiredField: "",
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
      <Input
        {...args}
        name={"requiredField"}
        value={formData.requiredField}
        onChange={onChange}
        error={!formData.requiredField ? "Это поле обязательно для заполнения" : undefined}
      />
    );
  },
  args: {
    label: "Обязательное поле",
    required: true,
    placeholder: "Заполните это поле...",
  },
};

export const FilledVariant: Story = {
  name: "Filled Variant Input",
  render: Default.render,
  args: {
    label: "Поле с заполненным фоном",
    variant: "filled",
    placeholder: "Введите значение...",
  },
};

export const WithPatternValidation: Story = {
  name: "Input with Pattern Validation",
  render: (args) => {
    const [formData, setFormData] = useState({
      numbersOnly: "",
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
      <div className={styles.storiesWrapper}>
        <Input {...args} name={"numbersOnly"} value={formData.numbersOnly} onChange={onChange} />
        <Text type="description" style={{ marginTop: "8px", color: "#666" }}>
          Попробуйте ввести буквы - они не будут приниматься
        </Text>
      </div>
    );
  },
  args: {
    label: "Только цифры",
    pattern: "^[0-9]*$",
    placeholder: "Введите только цифры...",
  },
};

export const AbsolutePositionError: Story = {
  name: "Input with Absolute Position Error",
  render: (args) => {
    const [formData, setFormData] = useState({
      fieldWithError: "",
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
      <div className={styles.storiesWrapper}>
        <Input
          {...args}
          name={"fieldWithError"}
          value={formData.fieldWithError}
          onChange={onChange}
          error={!formData.fieldWithError ? "Ошибка с абсолютным позиционированием" : undefined}
        />
      </div>
    );
  },
  args: {
    label: "Поле с абсолютной ошибкой",
    isAbsolutePositionError: true,
    placeholder: "Заполните поле...",
  },
};

export const AllVariants: Story = {
  name: "All Input Variants",
  render: () => {
    const [formData, setFormData] = useState({
      outlined: "",
      filled: "",
      withError: "",
      disabled: "Заблокированное значение",
      withTooltip: "",
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
      <div className={styles.storiesWrapper}>
        <Form addMargin={true} size={"md"} withSeparator={true}>
          <div className={styles.viewInputListItem}>
            <Text type={"description"} classNameRoot={styles.viewInputListItem__description}>
              Outlined Variant (по умолчанию)
            </Text>
            <Input
              name={"outlined"}
              value={formData.outlined}
              onChange={onChange}
              label="Outlined поле"
              placeholder="Введите текст..."
            />
          </div>

          <div className={styles.viewInputListItem}>
            <Text type={"description"} classNameRoot={styles.viewInputListItem__description}>
              Filled Variant
            </Text>
            <Input
              name={"filled"}
              value={formData.filled}
              onChange={onChange}
              label="Filled поле"
              variant="filled"
              placeholder="Введите текст..."
            />
          </div>

          <div className={styles.viewInputListItem}>
            <Text type={"description"} classNameRoot={styles.viewInputListItem__description}>
              С ошибкой валидации
            </Text>
            <Input
              name={"withError"}
              value={formData.withError}
              onChange={onChange}
              label="Поле с ошибкой"
              error="Некорректное значение"
              placeholder="Введите текст..."
            />
          </div>

          <div className={styles.viewInputListItem}>
            <Text type={"description"} classNameRoot={styles.viewInputListItem__description}>
              Отключенное поле
            </Text>
            <Input
              name={"disabled"}
              value={formData.disabled}
              onChange={onChange}
              label="Заблокированное поле"
              disabled={true}
            />
          </div>

          <div className={styles.viewInputListItem}>
            <Text type={"description"} classNameRoot={styles.viewInputListItem__description}>
              С подсказкой и очисткой
            </Text>
            <Input
              name={"withTooltip"}
              value={formData.withTooltip}
              onChange={onChange}
              label="Поле с подсказкой"
              infoTooltipText="Это поле требует особого внимания при заполнении"
              isClearable={true}
              placeholder="Введите текст..."
            />
          </div>
        </Form>
      </div>
    );
  },
};
