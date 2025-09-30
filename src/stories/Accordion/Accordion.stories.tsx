import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

import { Accordion, Checkbox, Form, Input, Select } from "../../../lib/test-stpr-ui-kit.ts";
import { OKRUG_OPTIONS } from "../constants";
import mainStyles from "../Stories.module.scss";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "Заголовок аккордеона, отображаемый в свернутом состоянии\n",
      control: { type: "text" },
    },
    children: {
      description: "Содержимое аккордеона, которое отображается при раскрытии\n",
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    defaultOpen: {
      description: "Состояние открыт/закрыт по умолчанию при первоначальной загрузке\n",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    isHiddenExpandIcon: {
      description:
        "Скрыть иконку раскрытия/сворачивания. Если true, аккордеон нельзя будет раскрыть/свернуть\n",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    noBorder: {
      description: "Убрать границу вокруг аккордеона. Добавляет нижнюю границу и отступ\n",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    noPadding: {
      description: "Убрать внутренние отступы (padding) аккордеона\n",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
      },
    },
    level: {
      description:
        "Уровень вложенности аккордеона. Влияет на размер шрифта заголовка:\n- 1: 24px на всех устройствах\n- 2: 16px (мобильные) / 24px (планшеты и выше)\n",
      control: { type: "radio" },
      table: {
        defaultValue: { summary: "1" },
        type: {
          summary: "TAccordionLevel",
          detail: "1 | 2",
        },
      },
    },
    onOpen: {
      description:
        "Callback-функция, вызываемая при изменении состояния аккордеона (раскрытии/сворачивании). Передает текущее состояние (boolean)\n",
      control: false,
      table: {
        type: {
          detail: "onOpen={(open) => {\n" + "  console.log(open ? 'открыт' : 'закрыт');\n" + "}}",
        },
      },
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента аккордеона\n",
      control: false,
    },
    classNameHeader: {
      description: "Дополнительный CSS-класс для заголовка аккордеона\n",
      control: false,
    },
    classNameTitle: {
      description: "Дополнительный CSS-класс для текста заголовка\n",
      control: false,
    },
    classNameIcon: {
      description: "Дополнительный CSS-класс для иконки раскрытия/сворачивания\n",
      control: false,
    },
    classNameChildrenWrapper: {
      description: "Дополнительный CSS-класс для обертки содержимого аккордеона\n",
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Аккордеон-компонент для организации контента в раскрывающихся секциях.

## Особенности анимации:

- Плавное раскрытие через CSS Grid (\`grid-template-rows\`)
- Постепенное появление контента с задержкой через opacity/visibility
- Вращение иконки на 180 градусов при раскрытии
- Адаптивные отступы: 16px (мобильные) / 32px (планшеты и выше)

## Состояния аккордеона:

- **Открыт**: контент виден, иконка перевернута
- **Закрыт**: контент скрыт, иконка в исходном положении
- **Заблокирован** (\`isHiddenExpandIcon=true\`): нельзя взаимодействовать

## Комбинации noBorder и noPadding:

- \`noBorder={true}\` - убирает все границы
- \`noBorder={true} noPadding={true}\` - добавляется нижняя границу и отступ
- \`noBorder={false} noPadding={true}\` - только граница без внутренних отступов

## Базовое использование

\`\`\`jsx
<Accordion name={"Название раскрывающего блока"}>
  <div>
    Какое то содержимое раскрывающегося блока
  </div>
</Accordion>
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
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  name: "Default Accordion",
  args: {
    defaultOpen: false,
    isHiddenExpandIcon: false,
    noBorder: false,
    noPadding: false,
    name: "Основное задание",
    level: 1,
    children: (
      <div style={{ textAlign: "justify" }}>
        Разработать комплексную стратегию устойчивого развития, направленную на баланс между ростом
        населения и ограниченными ресурсами Земли. Внедрить глобальные программы по повышению уровня
        образования, доступности контрацепции и гендерного равенства для снижения рождаемости в
        перенаселенных регионах. Одновременно стимулировать переход на возобновляемые ресурсы,
        технологии замкнутого цикла и альтернативные источники пищи (например, искусственное мясо).
        Создать международные стандарты экологичного производства и потребления, чтобы
        минимизировать нагрузку на планету. Реализовать эти меры через сотрудничество ООН,
        государств и частного сектора с учетом культурных особенностей регионов.
      </div>
    ),
  },
};

export const InitiallyOpen: Story = {
  name: "Initially Open Accordion",
  args: {
    defaultOpen: true,
    name: "Предварительно открытый аккордеон",
    children: "Этот аккордеон изначально открыт при загрузке страницы",
  },
};

export const Level2Accordion: Story = {
  args: {
    name: "Аккордеон второго уровня",
    level: 2,
    children: "Этот аккордеон имеет меньший размер заголовка на мобильных устройствах",
  },
};

export const NoBorderNoPadding: Story = {
  name: "No Border & No Padding",
  args: {
    name: "Аккордеон без границ и отступов",
    noBorder: true,
    noPadding: true,
    children: "Минималистичный вариант аккордеона без визуального обрамления",
  },
};

export const NonCollapsible: Story = {
  name: "Non-Collapsible Accordion",
  args: {
    name: "Нескладываемый аккордеон",
    isHiddenExpandIcon: true,
    defaultOpen: true,
    children: "Этот аккордеон всегда открыт и его нельзя свернуть",
  },
};

export const WithForm: Story = {
  name: "Accordion with Form",
  args: {
    name: "Аккордеон с формой",
  },
  render: (args) => {
    const [formData, setFormData] = useState({
      addressName: "",
      okrug: "",
      is: false,
    });

    const handleInputChange = (
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

    const handleSelectChange = (
      _event: React.MouseEvent<HTMLDivElement>,
      data: { value: string | null; name: string },
    ) => {
      setFormData((prevState) => ({
        ...prevState,
        [data.name]: data.value || "",
      }));
    };

    return (
      <Accordion name={args.name}>
        <Form addMargin={true} fullWidth={true} withSeparator={true}>
          <Checkbox
            label={"Включить проверку"}
            name={"is"}
            checked={formData.is}
            onChange={handleInputChange}
          />
          <Input
            label={"Наименование адреса"}
            name={"addressName"}
            value={formData.addressName}
            onChange={handleInputChange}
          />
          <Select
            label={"Округ"}
            options={OKRUG_OPTIONS}
            name={"okrug"}
            value={formData.okrug}
            onChange={handleSelectChange}
          />
        </Form>
      </Accordion>
    );
  },
};

export const NestedAccordions: Story = {
  args: {
    name: "Родительский аккордеон",
    noBorder: true,
  },
  render: (args) => {
    return (
      <Accordion name={args.name}>
        <div style={{ padding: "16px 0" }}>
          <p>Содержимое родительского аккордеона</p>

          <Accordion name="Вложенный аккордеон уровень 2" level={2}>
            <div style={{ padding: "16px 0" }}>
              Содержимое вложенного аккордеона второго уровня
              <Accordion name="Вложенный аккордеон уровень 2" level={2}>
                <div style={{ padding: "16px 0" }}>Еще один вложенный аккордеон</div>
              </Accordion>
            </div>
          </Accordion>
        </div>
      </Accordion>
    );
  },
};

export const CallbackExample: Story = {
  name: "Accordion with Callback",
  args: {
    name: "Аккордеон с callback на открытие/закрытие",
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const [log, setLog] = useState<string[]>([]);

    const handleOpen = (open: boolean) => {
      setIsOpen(open);
      setLog((prev) => [
        ...prev,
        `Аккордеон ${open ? "открыт" : "закрыт"} в ${new Date().toLocaleTimeString()}`,
      ]);
    };
    return (
      <div>
        <Accordion {...args} onOpen={handleOpen}>
          <div>
            <p>Текущее состояние: {isOpen ? "Открыт" : "Закрыт"}</p>
            <p>Этот аккордеон отслеживает события открытия/закрытия</p>
          </div>
        </Accordion>

        <div style={{ marginTop: "20px", fontSize: "14px" }}>
          <strong>История событий:</strong>
          {log.map((entry, index) => (
            <div key={index}>{entry}</div>
          ))}
        </div>
      </div>
    );
  },
};
