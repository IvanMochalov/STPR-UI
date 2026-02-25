import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Form } from "../../../lib/components/Form";
import { Text } from "../../../lib/components/Text";
import { Textarea, TOnChangeTextarea } from "../../../lib/components/Textarea";
import mainStyles from "../Stories.module.scss";
import styles from "./TextareaStories.module.scss";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      description: `Callback-функция, вызываемая при изменении значения текстового поля.
Получает два параметра:
- event: стандартное React событие ChangeEvent&lt;HTMLTextAreaElement&gt;
- data: объект с именем поля и новым значением

Особенности:
- Значение всегда передается как \`string\`
- При очистке поля передается пустая строка
- Для работы с формами рекомендуется использовать вместе с состоянием React\n`,
      control: false,
      table: {
        type: {
          detail:
            "(event: React.ChangeEvent&lt;HTMLTextAreaElement&gt;,\n" +
            "data: {\n" +
            "  name: string;\n" +
            "  value: string | null;\n" +
            "}) => void",
          summary: "TOnChangeTextarea",
        },
      },
    },
    variant: {
      description: `Вариант стиля текстового поля:\n- "outlined" - с границей (по умолчанию)\n- "filled" - с заполненным фоном\n`,
      control: { type: "select" },
      options: ["outlined", "filled"],
      table: {
        type: { summary: "TTextareaVariant", detail: "'outlined' | 'filled'" },
        defaultValue: { summary: '"outlined"' },
      },
    },
    resize: {
      description: `Поведение изменения размера текстового поля:\n- "none" - запретить изменение размера\n- "both" - разрешить изменение по горизонтали и вертикали\n- "horizontal" - разрешить только горизонтальное изменение\n- "vertical" - разрешить только вертикальное изменение\n`,
      control: { type: "select" },
      options: ["none", "both", "horizontal", "vertical"],
      table: {
        type: { summary: "TTextareaResize", detail: "'none' | 'both' | 'horizontal' | 'vertical'" },
        defaultValue: { summary: '"both"' },
      },
    },
    wrap: {
      description: `Поведение переноса текста:\n- "hard" - перенос на новую строку с добавлением символов перевода\n- "soft" - перенос только для отображения (по умолчанию)\n- "off" - отключить перенос текста\n`,
      control: { type: "select" },
      options: ["hard", "soft", "off"],
      table: {
        type: { summary: "TTextareaWrap", detail: "'hard' | 'soft' | 'off'" },
        defaultValue: { summary: '"soft"' },
      },
    },
    autoSize: {
      description: `Автоматически подстраивать высоту поля под содержимое. Использует react-textarea-autosize.
      
**Взаимосвязь с fluidHeight:**
- При \`fluidHeight={true}\` автоматический размер отключается
- При \`fluidHeight={false}\` работает обычное автоизменение размера\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    disabled: {
      description: `Отключить текстовое поле. Заблокирует взаимодействие и изменит визуальный стиль.\n`,
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
    fluidHeight: {
      description: `Растянуть поле на всю доступную высоту контейнера. Полезно для больших текстовых областей.

**Взаимосвязь с autoSize:**
- При \`fluidHeight={true}\` автоматический размер (\`autoSize\`) отключается
- Поле занимает всю доступную высоту родительского контейнера\n`,
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
    readOnly: {
      description: `Сделать поле доступным только для чтения. Отличается от disabled более мягким визуальным стилем.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    autoFocus: {
      description: `Автоматически установить фокус на поле при монтировании компонента.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    spellCheck: {
      description: `Включить проверку орфографии в браузере.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
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
      description: `Текст лейбла поля. Отображается над текстовым полем.\n`,
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
    rows: {
      description: `Начальное количество видимых строк текста. Минимальная высота поля.\n`,
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
    },
    maxRows: {
      description: `Максимальное количество видимых строк при включенном autoSize. Ограничивает максимальную высоту.\n`,
      control: { type: "number" },
      table: {
        type: { summary: "number" },
      },
    },
    cols: {
      description: `Ширина поля в символах. Рекомендуется использовать CSS для контроля ширины.\n`,
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "20" },
      },
    },
    maxLength: {
      description: `Максимальное количество символов, которое можно ввести в поле.\n`,
      control: { type: "number" },
      table: {
        type: { summary: "number" },
      },
    },
    minLength: {
      description: `Минимальное количество символов, которое должно быть введено в поле.\n`,
      control: { type: "number" },
      table: {
        type: { summary: "number" },
      },
    },
    autoComplete: {
      description: `Управление автозаполнением браузера. Может принимать значения "on", "off" или конкретные типы полей.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "off" },
      },
    },
    value: {
      description: `Значение текстового поля. Контролируемое свойство.\n`,
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
    onBlur: {
      description: `Callback-функция, вызываемая при потере фокуса полем.\n`,
      control: false,
      table: {
        type: { summary: "(event: React.FocusEvent<HTMLTextAreaElement>) => void" },
      },
    },
    onFocus: {
      description: `Callback-функция, вызываемая при получении фокуса полем.\n`,
      control: false,
      table: {
        type: { summary: "(event: React.FocusEvent<HTMLTextAreaElement>) => void" },
      },
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента текстового поля\n",
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
Компонент многострочного текстового поля с поддержкой автоматического изменения размера, валидации и различных состояний.

## Особенности:
- **Автоматический размер**: автоматическая подстройка высоты под содержимое (через \`react-textarea-autosize\`)
- **Fluid Height режим**: растягивание на всю высоту контейнера (отключает autoSize)
- **Два варианта стиля**: outlined (с границей) и filled (с заполненным фоном)
- **Контроль изменения размера**: гибкая настройка поведения resize
- **Валидация и ошибки**: подсветка ошибок и текстовые сообщения
- **Подсказки лейбла**: встроенная поддержка тултипов для пояснений
- **Адаптивный дизайн**: разные размеры и отступы на мобильных и desktop
- **Кастомный скроллбар**: стилизованный скроллбар через миксин \`custom-scrollbar\`
- **Доступность**: правильная семантика и поддержка screen readers

## Взаимосвязь autoSize и fluidHeight:
Компонент имеет два режима управления высотой, которые **взаимоисключают** друг друга:

### AutoSize режим (по умолчанию)
- Включен при \`autoSize={true}\` и \`fluidHeight={false}\`
- Поле автоматически подстраивает высоту под содержимое
- Использует \`react-textarea-autosize\`
- Контролируется параметрами \`rows\` (мин. строк) и \`maxRows\` (макс. строк)

### Fluid Height режим
- Активируется при \`fluidHeight={true}\`
- **Автоматически отключает autoSize**
- Поле растягивается на всю доступную высоту родительского контейнера
- Идеально для больших текстовых областей в ограниченном пространстве

## Состояния поля:
- **Обычное**: стандартное состояние
- **С ошибкой**: красная граница и текст ошибки
- **Отключенное**: серый цвет и блокировка взаимодействия
- **Только для чтения**: более мягкий стиль чем disabled
- **С фокусом**: синяя граница для указания активного состояния

## Рекомендации по использованию:

### Базовое использование с авторазмером
\`\`\`jsx
<Textarea
  name="description"
  value={value}
  onChange={onChange}
  label="Описание"
  autoSize={true}
  rows={2}
  maxRows={6}
/>
\`\`\`

### Fluid Height для больших областей
\`\`\`jsx
<div style={{ height: "300px" }}>
  <Textarea
    name="largeText"
    value={value}
    onChange={onChange}
    label="Большой текст"
    fluidHeight={true}
    // autoSize автоматически отключается
  />
</div>
\`\`\`

### Фиксированная высота
\`\`\`jsx
<Textarea
  name="fixedText"
  value={value}
  onChange={onChange}
  label="Фиксированная высота"
  autoSize={false}
  rows={5}
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
    resize: "none",
    autoSize: true,
    isAbsolutePositionError: false,
    disabled: false,
    required: false,
    readOnly: false,
    autoFocus: false,
    infoTooltipText: "",
    label: "",
    error: "",
    isVisibleDefaultTitle: true,
    fluidHeight: false,
    placeholder: "Введите...",
    rows: 1,
    cols: 20,
    spellCheck: true,
    autoComplete: "off",
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  name: "Default Textarea",
  render: (args) => {
    const [formData, setFormData] = useState({
      description: "",
    });

    const onChange: TOnChangeTextarea = (_event, { name, value }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    return (
      <div className={styles.storiesWrapper}>
        <Textarea
          {...args}
          error={!formData.description ? args.error : undefined}
          name={"description"}
          value={formData.description}
          onChange={onChange}
        />
        <div className={styles.viewTextareaList}>
          <div className={styles.viewTextareaListItem}>
            <Text type={"description"} classNameRoot={styles.viewTextareaListItem__description}>
              Textarea with Error
            </Text>
            <Textarea
              {...args}
              name={"description"}
              value={formData.description}
              error={"Обязательное поле для заполнения"}
              onChange={(event) => event.stopPropagation()}
            />
          </div>
          <div className={styles.viewTextareaListItem}>
            <Text type={"description"} classNameRoot={styles.viewTextareaListItem__description}>
              Disabled Textarea
            </Text>
            <Textarea
              {...args}
              name={"description"}
              value={formData.description}
              disabled={true}
              onChange={(event) => event.stopPropagation()}
            />
          </div>
          <div className={styles.viewTextareaListItem}>
            <Text type={"description"} classNameRoot={styles.viewTextareaListItem__description}>
              ReadOnly Textarea
            </Text>
            <Textarea
              {...args}
              name={"description"}
              value="Это значение только для чтения и не может быть изменено пользователем"
              readOnly={true}
              onChange={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      </div>
    );
  },
};

export const WithAutoSize: Story = {
  name: "Textarea with Auto Size",
  render: (args) => {
    const [formData, setFormData] = useState({
      autoSizeText: "",
      limitedSizeText: "",
      fixedSizeText: "",
    });

    const onChange: TOnChangeTextarea = (_event, { name, value }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    return (
      <div className={styles.storiesWrapper}>
        <Form addMargin={true} size={"md"} withSeparator={true}>
          <div className={styles.viewTextareaListItem}>
            <Textarea
              {...args}
              name={"autoSizeText"}
              value={formData.autoSizeText}
              onChange={onChange}
              label="Автоматический размер (без ограничений)"
              placeholder="Начните вводить текст - поле будет расти автоматически..."
              autoSize={true}
              rows={2}
            />
          </div>
          <div className={styles.viewTextareaListItem}>
            <Textarea
              {...args}
              name={"limitedSizeText"}
              value={formData.limitedSizeText}
              onChange={onChange}
              label="Ограниченный рост (максимум 6 строк)"
              placeholder="Введите текст - поле вырастет до 6 строк и появится скролл..."
              autoSize={true}
              rows={2}
              maxRows={6}
            />
          </div>
          <div className={styles.viewTextareaListItem}>
            <Textarea
              {...args}
              name={"fixedSizeText"}
              value={formData.fixedSizeText}
              onChange={onChange}
              label="Фиксированный размер (без autoSize)"
              placeholder="Это поле имеет фиксированную высоту..."
              autoSize={false}
              rows={4}
            />
          </div>
        </Form>
      </div>
    );
  },
};

export const WithResizeOptions: Story = {
  name: "Textarea with Resize Options",
  render: (args) => {
    const [formData, setFormData] = useState({
      noResize: "",
      horizontalResize: "",
      verticalResize: "",
      bothResize: "",
    });

    const onChange: TOnChangeTextarea = (_event, { name, value }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    return (
      <div className={styles.storiesWrapper}>
        <Form addMargin={true} size={"md"} withSeparator={true}>
          <div className={styles.viewTextareaListItem}>
            <Textarea
              {...args}
              name={"noResize"}
              value={formData.noResize}
              onChange={onChange}
              label="Без изменения размера (resize: none)"
              placeholder="Это поле нельзя изменить..."
              resize="none"
              rows={3}
            />
          </div>
          <div className={styles.viewTextareaListItem}>
            <Textarea
              {...args}
              name={"horizontalResize"}
              value={formData.horizontalResize}
              onChange={onChange}
              label="Только горизонтальное изменение (resize: horizontal)"
              placeholder="Можно изменить только ширину..."
              resize="horizontal"
              rows={3}
            />
          </div>
          <div className={styles.viewTextareaListItem}>
            <Textarea
              {...args}
              name={"verticalResize"}
              value={formData.verticalResize}
              onChange={onChange}
              label="Только вертикальное изменение (resize: vertical)"
              placeholder="Можно изменить только высоту..."
              resize="vertical"
              rows={3}
            />
          </div>
          <div className={styles.viewTextareaListItem}>
            <Textarea
              {...args}
              name={"bothResize"}
              value={formData.bothResize}
              onChange={onChange}
              label="Изменение в обе стороны (resize: both)"
              placeholder="Можно изменить и ширину и высоту..."
              resize="both"
              rows={3}
            />
          </div>
        </Form>
      </div>
    );
  },
};

export const WithLabel: Story = {
  name: "Textarea with Label",
  render: Default.render,
  args: {
    label: "Подробное описание",
    placeholder: "Начните вводить подробное описание...",
    rows: 4,
  },
};

export const WithLabelAndTooltip: Story = {
  name: "Textarea with Label and Tooltip",
  render: Default.render,
  args: {
    label: "Техническое описание",
    infoTooltipText:
      "Подсказка для поля 'Техническое описание'. Введите детальное техническое описание объекта с указанием всех характеристик и особенностей.",
    placeholder: "Введите техническое описание объекта...",
    rows: 4,
  },
};

export const RequiredField: Story = {
  name: "Required Textarea Field",
  render: (args) => {
    const [formData, setFormData] = useState({
      requiredDescription: "",
    });

    const onChange: TOnChangeTextarea = (_event, { name, value }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    return (
      <Textarea
        {...args}
        name={"requiredDescription"}
        value={formData.requiredDescription}
        onChange={onChange}
        error={!formData.requiredDescription ? "Это поле обязательно для заполнения" : undefined}
      />
    );
  },
  args: {
    label: "Обязательное поле",
    required: true,
    placeholder: "Заполните это поле...",
    rows: 3,
  },
};

export const FilledVariant: Story = {
  name: "Filled Variant Textarea",
  render: Default.render,
  args: {
    label: "Поле с заполненным фоном",
    variant: "filled",
    placeholder: "Введите значение...",
    rows: 3,
  },
};

export const AbsolutePositionError: Story = {
  name: "Textarea with Absolute Position Error",
  render: (args) => {
    const [formData, setFormData] = useState({
      fieldWithError: "",
    });

    const onChange: TOnChangeTextarea = (_event, { name, value }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    return (
      <div className={styles.storiesWrapper}>
        <Textarea
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
    rows: 3,
  },
};

export const FluidHeight: Story = {
  name: "Textarea with Fluid Height",
  render: (args) => {
    const [formData, setFormData] = useState({
      fluidText: "",
    });

    const onChange: TOnChangeTextarea = (_event, { name, value }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    return (
      <div
        className={styles.storiesWrapper}
        style={{ height: "300px", display: "flex", flexDirection: "column" }}
      >
        <Textarea
          {...args}
          name={"fluidText"}
          value={formData.fluidText}
          onChange={onChange}
          fluidHeight={true}
          // autoSize автоматически отключается при fluidHeight={true}
        />
      </div>
    );
  },
  args: {
    label: "Поле с растягиваемой высотой",
    placeholder:
      "Это поле растягивается на всю доступную высоту контейнера (autoSize автоматически отключается)...",
    rows: 3,
  },
  parameters: {
    docs: {
      description: {
        story: `
Пример использования Textarea в режиме Fluid Height.

**Особенности:**
- При \`fluidHeight={true}\` автоматически отключается \`autoSize\`
- Поле занимает всю доступную высоту родительского контейнера
- Идеально для больших текстовых областей в фиксированных по высоте контейнерах

**Родительский контейнер должен иметь явно заданную высоту для правильной работы fluidHeight.**
        `,
      },
    },
  },
};

export const AutoSizeVsFluidHeight: Story = {
  name: "AutoSize vs Fluid Height Comparison",
  render: () => {
    const [formData, setFormData] = useState({
      autoSizeText: "",
      fluidHeightText: "",
      fixedSizeText: "",
    });

    const onChange: TOnChangeTextarea = (_event, { name, value }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    return (
      <div className={styles.storiesWrapper}>
        <Form addMargin={true} size={"md"} withSeparator={true}>
          <div className={styles.viewTextareaListItem}>
            <Text type={"description"} classNameRoot={styles.viewTextareaListItem__description}>
              AutoSize режим (autoSize=true, fluidHeight=false)
            </Text>
            <Textarea
              name={"autoSizeText"}
              value={formData.autoSizeText}
              onChange={onChange}
              label="Автоматический размер"
              placeholder="Поле растет автоматически по мере ввода текста..."
              autoSize={true}
              fluidHeight={false}
              rows={2}
              maxRows={6}
            />
          </div>

          <div className={styles.viewTextareaListItem}>
            <Text type={"description"} classNameRoot={styles.viewTextareaListItem__description}>
              Fluid Height режим (fluidHeight=true, autoSize автоматически отключается)
            </Text>
            <div style={{ height: "200px", border: "1px dashed #ccc", padding: "8px" }}>
              <Textarea
                name={"fluidHeightText"}
                value={formData.fluidHeightText}
                onChange={onChange}
                label="Fluid Height"
                placeholder="Поле занимает всю высоту контейнера..."
                fluidHeight={true}
                // autoSize автоматически отключается
              />
            </div>
          </div>

          <div className={styles.viewTextareaListItem}>
            <Text type={"description"} classNameRoot={styles.viewTextareaListItem__description}>
              Фиксированная высота (autoSize=false, fluidHeight=false)
            </Text>
            <Textarea
              name={"fixedSizeText"}
              value={formData.fixedSizeText}
              onChange={onChange}
              label="Фиксированная высота"
              placeholder="Поле имеет фиксированную высоту..."
              autoSize={false}
              fluidHeight={false}
              rows={4}
            />
          </div>
        </Form>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
Сравнение различных режимов управления высотой Textarea.

## Режимы работы:

### 1. AutoSize (рекомендуется для динамического контента)
- Поле автоматически подстраивается под содержимое
- Контролируется параметрами \`rows\` и \`maxRows\`
- Идеально для форм с переменным объемом текста

### 2. Fluid Height (для больших текстовых областей)
- **Автоматически отключает autoSize**
- Занимает всю высоту родительского контейнера
- Требует явно заданной высоты у родителя

### 3. Фиксированная высота (для статичного дизайна)
- Высота определяется параметром \`rows\`
- Никакого автоматического изменения размера
- Простой и предсказуемый вариант
        `,
      },
    },
  },
};
