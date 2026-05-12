import { Accordion } from "@components/Accordion";
import { Checkbox, type TOnChangeCheckbox } from "@components/Checkbox";
import { Form } from "@components/Form";
import { EIconName } from "@components/Icons";
import { Input, type TOnChangeInput } from "@components/Input";
import { Select, type TOnChangeSelect } from "@components/Select";
import { ETooltipPosition } from "@components/Tooltip";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { OKRUG_OPTIONS } from "../constants";
import styles from "./AccordionStories.module.scss";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
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
    expandIconName: {
      description:
        "Имя иконки для раскрытия/сворачивания аккордеона. Использует компонент Icon из библиотеки\n",
      control: { type: "select" },
      options: Object.values(EIconName),
      table: {
        defaultValue: { summary: "EIconName.ChevronDown" },
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
    infoTooltipText: {
      description: `Текст подсказки для имени аккордеона. Показывает иконку информации с тултипом.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    tooltipPosition: {
      description: `Позиция тултипа для подсказки имени аккордеона.\n`,
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
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента аккордеона\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameHeader: {
      description: "Дополнительный CSS-класс для заголовка аккордеона\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameTitle: {
      description: "Дополнительный CSS-класс для текста заголовка\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameIcon: {
      description: "Дополнительный CSS-класс для иконки раскрытия/сворачивания\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameChildrenWrapper: {
      description: "Дополнительный CSS-класс для обертки содержимого аккордеона\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    classNameBaseTooltipRoot: {
      description: "Дополнительный CSS-класс для корневого элемента тултипа имени аккордеона\n",
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
- \`noBorder={true} noPadding={true}\` - добавляется нижняя граница и отступ
- \`noBorder={false} noPadding={true}\` - только граница без внутренних отступов

## Дополнительные возможности:

- Поддержка кастомных иконок через \`expandIconName\`
- Возможность отключения анимации с помощью CSS-переменных
- Поддержка различных уровней вложенности заголовков
- Адаптивная верстка для мобильных устройств

## Базовое использование

\`\`\`jsx
<Accordion name={"Название раскрывающего блока"}>
  <div>
    Какое то содержимое раскрывающегося блока
  </div>
</Accordion>
\`\`\`

## Пример с формой

\`\`\`jsx
<Accordion name="Форма с полями">
  <Form>
    <Input name="username" label="Имя пользователя" />
    <Input name="email" label="Email" type="email" />
    <Checkbox name="subscribe" label="Подписаться на рассылку" />
  </Form>
</Accordion>
\`\`\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const DEFAULT_CONTENT = (
  <div className={styles.contentText}>
    Разработать комплексную стратегию устойчивого развития, направленную на баланс между ростом
    населения и ограниченными ресурсами Земли. Внедрить глобальные программы по повышению уровня
    образования, доступности контрацепции и гендерного равенства для снижения рождаемости в
    перенаселенных регионах. Одновременно стимулировать переход на возобновляемые ресурсы,
    технологии замкнутого цикла и альтернативные источники пищи (например, искусственное мясо).
    Создать международные стандарты экологичного производства и потребления, чтобы минимизировать
    нагрузку на планету. Реализовать эти меры через сотрудничество ООН, государств и частного
    сектора с учетом культурных особенностей регионов.
  </div>
);

export const Collapsed: Story = {
  name: "Collapsed",
  args: {
    defaultOpen: false,
    isHiddenExpandIcon: false,
    noBorder: false,
    noPadding: false,
    name: "Основное задание",
    level: 1,
    infoTooltipText: "",
    tooltipPosition: ETooltipPosition.BottomLeft,
    children: DEFAULT_CONTENT,
  },
};

export const Expanded: Story = {
  name: "Expanded",
  args: {
    ...Collapsed.args,
    defaultOpen: true,
  },
};

export const WithInfoTooltip: Story = {
  name: "Accordion with InfoTooltip",
  render: Collapsed.render,
  args: {
    ...Collapsed.args,
    infoTooltipText: "Информация о том, как работает аккордеон",
    name: "Аккордеон с информационным тултипом",
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

    const handleInputChange: TOnChangeInput = (_event, { name, value }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleCheckboxChange: TOnChangeCheckbox = (_event, { name, checked }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    };

    const handleSelectChange: TOnChangeSelect = (_event, { name, value }) => {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    return (
      <Accordion {...args}>
        <Form addMargin={true}>
          <Input
            name="addressName"
            label="Название адреса"
            value={formData.addressName}
            onChange={handleInputChange}
          />
          <Select
            name="okrug"
            label="Округ"
            options={OKRUG_OPTIONS}
            value={formData.okrug}
            onChange={handleSelectChange}
          />
          <Checkbox
            name="is"
            label="Является основным адресом"
            checked={formData.is}
            onChange={handleCheckboxChange}
          />
        </Form>
      </Accordion>
    );
  },
};
