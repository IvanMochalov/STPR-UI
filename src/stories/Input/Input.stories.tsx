import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Form, Input, Text,TOnChangeInput } from "test-stpr-ui-kit";

import styles from "./InputStories.module.scss";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      description: `Callback-функция, вызываемая при изменении значения поля ввода.
Получает два параметра:
- event: стандартное React событие ChangeEvent&lt;HTMLInputElement&gt;
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
            "(event: React.ChangeEvent&lt;HTMLInputElement&gt;,\n" +
            "data: {\n" +
            "  name: string;\n" +
            "  value: string | null;\n" +
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
    mask: {
      description: `Маска для форматирования ввода. Может быть строкой или массивом строк/регулярных выражений.
Поддерживает стандартные шаблоны маски:
- "99.99.9999" - для дат
- "+7 (999) 999-99-99" - для телефонов
- "aa-9999-aa" - для смешанного ввода
- [/[a-zA-Zа-яА-Я]/, /[a-zA-Zа-яА-Я]/, " ", /\\\\d/, /\\\\d/] - для смешанного ввода с любыми буквами

Особенности:
- Символ "9" представляет цифру
- Символ "a" представляет букву
- Остальные символы считаются статическими разделителями\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string | (string | RegExp)[]" },
      },
    },
    maskChar: {
      description: `Символ, закрывающий незаполненные части маски. По умолчанию — символ «_». Если задано значение null или пустая строка, незаполненные части будут пустыми, как при обычном вводе.`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "_" },
      },
    },
    alwaysShowMask: {
      description: `Всегда показывать маску, даже когда поле пустое.
Полезно для визуального указания ожидаемого формата ввода.

Особенности:
- При \`false\` маска появляется только во время ввода
- При \`true\` маска всегда видна, включая плейсхолдеры\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
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
- **Маски ввода**: поддержка форматирования через \`react-input-mask\`
- **Подсказки лейбла**: встроенная поддержка тултипов для пояснений
- **Паттерны ввода**: валидация по регулярным выражениям
- **Адаптивный дизайн**: разные размеры и отступы на мобильных и desktop
- **Доступность**: правильная семантика и поддержка screen readers

## Состояния поля:
- **Обычное**: стандартное состояние
- **С ошибкой**: красная граница и текст ошибки
- **Отключенное**: серый цвет и блокировка взаимодействия
- **С фокусом**: синяя граница для указания активного состояния

## Маски ввода:
Компонент поддерживает форматирование ввода через маски. Используйте параметр \`mask\` для указания шаблона:
- **Телефоны**: "+7 (999) 999-99-99"
- **Даты**: "99.99.9999" 
- **Серии документов**: "99 99"
- **Смешанный ввод**: "aa-9999-aa"
- **Регулярные выражения**: [/[a-zA-Zа-яА-Я]/, /[a-zA-Zа-яА-Я]/, " ", /\\\\d/, /\\\\d/] (подробнее на https://www.npmjs.com/package/react-input-mask)

## Рекомендации по использованию:
Используйте для текстового ввода в формах с поддержкой валидации, масок и подсказок.

### Базовое использование

\`\`\`jsx
const [formData, setFormData] = useState({
  address: "",
});

<Input
  name="address"
  value={formData.address}
  onChange={(_event, { name, value }) =>
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  label="Имя пользователя"
  placeholder="Введите ваше имя"
/>
\`\`\`

### Использование с маской

\`\`\`jsx
<Input
  name="phone"
  value={formData.phone}
  onChange={onChange}
  label="Телефон"
  mask="+7 (999) 999-99-99"
  placeholder="+7 (___) ___-__-__"
/>
\`\`\`
        `,
      },
    },
  },
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
    mask: "",
    maskChar: "_",
    alwaysShowMask: false,
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

    const onChange: TOnChangeInput = (_event, { name, value }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
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

export const WithMask: Story = {
  name: "Input with Mask",
  render: (args) => {
    const [formData, setFormData] = useState({
      phone: "",
      date: "",
      serial: "",
      phoneAlways: "",
    });

    const onChange: TOnChangeInput = (_event, { name, value }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    return (
      <div className={styles.storiesWrapper}>
        <Form addMargin={true} size={"md"} withSeparator={true}>
          <div className={styles.viewInputListItem}>
            <Input
              {...args}
              name={"phone"}
              value={formData.phone}
              onChange={onChange}
              label="Номер телефона"
              mask="+7 (999) 999-99-99"
              placeholder="Введите номер телефона"
            />
          </div>
          <div className={styles.viewInputListItem}>
            <Input
              {...args}
              name={"date"}
              value={formData.date}
              onChange={onChange}
              label="Дата"
              mask="99.99.9999"
              placeholder="дд.мм.гггг"
            />
          </div>
          <div className={styles.viewInputListItem}>
            <Input
              {...args}
              name={"serial"}
              value={formData.serial}
              onChange={onChange}
              label="Серия документа"
              mask="aa 999999"
              placeholder="aa 999999"
            />
          </div>
          <div className={styles.viewInputListItem}>
            <Input
              {...args}
              name={"phoneAlways"}
              value={formData.phoneAlways}
              onChange={onChange}
              label="Телефон (маска всегда видна)"
              mask="+7 (999) 999-99-99"
              alwaysShowMask={true}
              placeholder="меня не видно"
            />
          </div>
        </Form>
      </div>
    );
  },
  args: {
    label: "Поле с маской",
    placeholder: "Введите значение...",
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

    const onChange: TOnChangeInput = (_event, { name, value }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
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

    const onChange: TOnChangeInput = (_event, { name, value }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
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

    const onChange: TOnChangeInput = (_event, { name, value }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
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

    const onChange: TOnChangeInput = (_event, { name, value }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
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
