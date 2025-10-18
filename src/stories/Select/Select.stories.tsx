import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Select, TOnChangeSelect } from "../../../lib/components/Select";
import { OKRUG_OPTIONS } from "../constants";
import mainStyles from "../Stories.module.scss";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      description: `Callback-функция, вызываемая при выборе значения из списка.
Получает два параметра:
- event: React событие MouseEvent<HTMLDivElement>
- data: объект с именем поля и выбранным значением

Особенности:
- При выборе значения передается \`string\` или \`null\` если сброс
- Автоматически закрывает выпадающий список после выбора
- Для работы с формами рекомендуется использовать вместе с состоянием React\n`,
      control: false,
      table: {
        type: {
          detail:
            "(event: React.MouseEvent<HTMLDivElement>,\n" +
            "data: {\n" +
            "  name: string;\n" +
            "  value: string | null\n" +
            "}) => void",
          summary: "TOnChangeSelect",
        },
      },
    },
    variant: {
      description: `Вариант стиля селекта:\n- "outlined" - с границей (по умолчанию)\n- "filled" - с заполненным фоном\n`,
      control: { type: "select" },
      options: ["outlined", "filled"],
      table: {
        type: { summary: "TSelectVariant", detail: "'outlined' | 'filled'" },
        defaultValue: { summary: '"outlined"' },
      },
    },
    disabled: {
      description: `Отключить селект. Заблокирует взаимодействие и изменит визуальный стиль.\n`,
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
      description: `Показывать стандартный title при наведении на селект с текстом значения.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    isScrollableList: {
      description: `Включить прокрутку для длинных списков опций. Автоматически добавляет скроллбар.\n`,
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
    maxHeightList: {
      description: `Максимальная высота выпадающего списка в пикселях. Работает только при \`isScrollableList={true}\`.\n`,
      control: { type: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "180" },
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
      description: `Текст лейбла селекта. Отображается над элементом выбора.\n`,
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
      description: `Текст ошибки валидации. Подсвечивает селект красным и показывает сообщение об ошибке.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    placeholder: {
      description: `Текст-подсказка когда значение не выбрано.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Выберите из списка..."' },
      },
    },
    value: {
      description: `Выбранное значение селекта. Должно соответствовать одному из \`options.value\`.\n`,
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
    options: {
      description: `Массив опций для выбора. Каждая опция должна содержать value и label.\n`,
      control: false,
      table: {
        defaultValue: { summary: "[]" },
        type: {
          summary: "TSelectOption[]",
          detail:
            "TSelectOption[] = {\n" +
            "  value: string | null;\n" +
            "  label: string;\n" +
            "  key?: string;\n" +
            "}[]",
        },
      },
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента селекта\n",
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
  },
  parameters: {
    docs: {
      description: {
        component: `
Компонент выпадающего списка с поддержкой различных состояний, валидации и дополнительных функций.

## Особенности:
- **Два варианта стиля**: outlined (с границей) и filled (с заполненным фоном)
- **Валидация и ошибки**: подсветка ошибок и текстовые сообщения
- **Подсказки лейбла**: встроенная поддержка тултипов для пояснений
- **Прокручиваемые списки**: поддержка длинных списков с настройкой максимальной высоты
- **Автоматическое закрытие**: клик вне области закрывает выпадающий список
- **Адаптивный дизайн**: разные размеры и отступы на мобильных и desktop
- **Визуальная обратная связь**: иконка галочки для выбранного элемента

## Состояния селекта:
- **Обычное**: стандартное состояние
- **Открытое**: раскрытый список опций
- **С ошибкой**: красная граница и текст ошибки
- **Отключенное**: серый цвет и блокировка взаимодействия
- **С фокусом**: синяя граница для указания активного состояния

## Рекомендации по использованию:
Используйте для выбора значений из предопределенного списка в формах.

### Базовое использование

\`\`\`jsx
const [formData, setFormData] = useState({
  district: "",
});

<Select
  name="district"
  value={formData.district}
  onChange={(event, {name, value}) => setFormData(prev => ({
    ...prev,
    [name]: value,
  }))}
  options={[
    { value: "center", label: "Центральный округ" },
    { value: "north", label: "Северный округ" },
    { value: "south", label: "Южный округ" },
  ]}
  label="Округ"
  placeholder="Выберите округ..."
/>
\`\`\`
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={mainStyles.storyWrapper}>
        <div style={{ width: "400px", marginTop: "80px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
  args: {
    options: OKRUG_OPTIONS,
    variant: "outlined",
    placeholder: "Выберите из списка...",
    disabled: false,
    required: false,
    isAbsolutePositionError: false,
    isScrollableList: false,
    isVisibleDefaultTitle: true,
    maxHeightList: 180,
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  name: "Default Select",
  render: (args) => {
    const [formData, setFormData] = useState({
      okrug: "",
    });

    const onChange: TOnChangeSelect = (_event, data) => {
      setFormData((prevState) => ({
        ...prevState,
        [data.name]: data.value,
      }));
    };

    return (
      <Select
        {...args}
        error={!formData.okrug ? args.error : undefined}
        name={"okrug"}
        value={formData.okrug}
        onChange={onChange}
      />
    );
  },
};

export const WithEmptyListOption: Story = {
  render: Default.render,
  args: {
    label: "Округ",
    options: [],
    placeholder: "Выберите округ...",
  },
};

export const WithLabel: Story = {
  name: "Select with Label",
  render: Default.render,
  args: {
    label: "Округ",
    placeholder: "Выберите округ...",
  },
};

export const WithLabelAndTooltip: Story = {
  name: "Select with Label and Tooltip",
  render: Default.render,
  args: {
    label: "Округ",
    infoTooltipText: "Выберите административный округ из доступного списка",
    placeholder: "Выберите округ...",
  },
};

export const RequiredField: Story = {
  name: "Required Select Field",
  render: (args) => {
    const [formData, setFormData] = useState({
      requiredField: "",
    });

    const onChange: TOnChangeSelect = (_event, data) => {
      setFormData((prevState) => ({
        ...prevState,
        [data.name]: data.value,
      }));
    };

    return (
      <Select
        {...args}
        name={"requiredField"}
        value={formData.requiredField}
        onChange={onChange}
        error={!formData.requiredField ? "Это поле обязательно для заполнения" : undefined}
      />
    );
  },
  args: {
    label: "Обязательный выбор",
    required: true,
    placeholder: "Сделайте выбор...",
  },
};

export const WithLabelAndTooltipAndError: Story = {
  name: "Select with Label, Tooltip and Error",
  render: Default.render,
  args: {
    label: "Округ",
    infoTooltipText: "Выберите административный округ из доступного списка",
    required: true,
    error: "Обязательное поле для заполнения",
    placeholder: "Выберите округ...",
  },
};

export const FilledVariant: Story = {
  name: "Filled Variant Select",
  render: Default.render,
  args: {
    label: "Округ с заполненным фоном",
    variant: "filled",
    placeholder: "Выберите округ...",
  },
};

export const DisabledSelect: Story = {
  render: (args) => {
    return (
      <Select {...args} name={"disabled"} value={OKRUG_OPTIONS[0].value} onChange={() => {}} />
    );
  },
  args: {
    label: "Заблокированный выбор",
    disabled: true,
    placeholder: "Выберите округ...",
  },
};

export const ScrollableList: Story = {
  name: "Select with Scrollable List",
  render: Default.render,
  args: {
    label: "Округ с прокруткой",
    isScrollableList: true,
    maxHeightList: 120,
    placeholder: "Выберите округ...",
  },
};

export const AbsolutePositionError: Story = {
  name: "Select with Absolute Position Error",
  render: (args) => {
    const [formData, setFormData] = useState({
      fieldWithError: "",
    });

    const onChange: TOnChangeSelect = (_event, data) => {
      setFormData((prevState) => ({
        ...prevState,
        [data.name]: data.value,
      }));
    };

    return (
      <div style={{ position: "relative", paddingBottom: "30px" }}>
        <Select
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
    placeholder: "Сделайте выбор...",
  },
};

export const AllVariants: Story = {
  name: "All Select Variants",
  render: () => {
    const [formData, setFormData] = useState({
      outlined: "",
      filled: "",
      withError: "",
      disabled: OKRUG_OPTIONS[1].value,
      withTooltip: "",
      scrollable: "",
    });

    const onChange: TOnChangeSelect = (_event, data) => {
      setFormData((prevState) => ({
        ...prevState,
        [data.name]: data.value,
      }));
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div>
          <div style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}>
            Outlined Variant (по умолчанию)
          </div>
          <Select
            name={"outlined"}
            value={formData.outlined}
            onChange={onChange}
            options={OKRUG_OPTIONS}
            label="Outlined селект"
            placeholder="Выберите округ..."
          />
        </div>

        <div>
          <div style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}>Filled Variant</div>
          <Select
            name={"filled"}
            value={formData.filled}
            onChange={onChange}
            options={OKRUG_OPTIONS}
            label="Filled селект"
            variant="filled"
            placeholder="Выберите округ..."
          />
        </div>

        <div>
          <div style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}>
            С ошибкой валидации
          </div>
          <Select
            name={"withError"}
            value={formData.withError}
            onChange={onChange}
            options={OKRUG_OPTIONS}
            label="Селект с ошибкой"
            error="Необходимо сделать выбор"
            placeholder="Выберите округ..."
          />
        </div>

        <div>
          <div style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}>
            Отключенный селект
          </div>
          <Select
            name={"disabled"}
            value={formData.disabled}
            onChange={onChange}
            options={OKRUG_OPTIONS}
            label="Заблокированный селект"
            disabled={true}
          />
        </div>

        <div>
          <div style={{ fontSize: "12px", color: "#666", marginBottom: "8px" }}>
            С подсказкой и прокруткой
          </div>
          <Select
            name={"withTooltip"}
            value={formData.withTooltip}
            onChange={onChange}
            options={OKRUG_OPTIONS}
            label="Селект с подсказкой"
            infoTooltipText="Этот выбор влияет на доступные параметры системы"
            isScrollableList={true}
            maxHeightList={120}
            placeholder="Выберите округ..."
          />
        </div>
      </div>
    );
  },
};

export const LongOptionsList: Story = {
  name: "Select with Long Options List",
  render: (args) => {
    const [formData, setFormData] = useState({
      longList: "",
    });

    const onChange: TOnChangeSelect = (_event, data) => {
      setFormData((prevState) => ({
        ...prevState,
        [data.name]: data.value,
      }));
    };

    const LONG_OPTIONS = [
      { value: "1", label: "Центральный административный округ города Москвы" },
      { value: "2", label: "Северный административный округ с очень длинным названием" },
      { value: "3", label: "Северо-Восточный административный округ" },
      { value: "4", label: "Восточный административный округ города Москвы" },
      { value: "5", label: "Юго-Восточный административный округ" },
      { value: "6", label: "Южный административный округ с длинным описанием" },
      { value: "7", label: "Юго-Западный административный округ города" },
      { value: "8", label: "Западный административный округ Москвы" },
      { value: "9", label: "Северо-Западный административный округ" },
      { value: "10", label: "Зеленоградский административный округ города Москвы" },
    ];

    return (
      <Select
        {...args}
        name={"longList"}
        value={formData.longList}
        onChange={onChange}
        options={LONG_OPTIONS}
      />
    );
  },
  args: {
    label: "Округ с длинными названиями",
    isScrollableList: true,
    maxHeightList: 200,
    placeholder: "Выберите из длинного списка...",
  },
};
