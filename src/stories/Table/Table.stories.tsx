import { Confirm } from "@components/Confirm";
import { useModal } from "@components/Modal";
import { Table, type TableProps,useTableActions } from "@components/Table";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentType } from "react";
import { useState } from "react";

import { defaultColumns, SampleRow } from "./constants";
import { defaultTableData } from "./constants";
import styles from "./TableStories.module.scss";

const TableSampleRow = Table as ComponentType<TableProps<SampleRow>>;

const meta: Meta<typeof TableSampleRow> = {
  title: "Components/Table",
  component: TableSampleRow,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Универсальная таблица с поддержкой сортировки по колонкам, колонок действий (редактирование, удаление), состояний загрузки и ошибки. Используется в формах задания на проектирование для отображения списков заказчиков, исполнителей, этапов строительства, документов, земельных участков и т.д.

**Типизация:** компонент generic - \`Table<TData extends Record<string, any>>\`. Тип данных строки задаётся при использовании (\`TableProps<TCustomerInTable>\`, \`TableProps<SampleRow>\` и т.п.).


## Основные возможности

- **Сортировка:** колонки с \`isSortable: true\` - клик по заголовку сортирует по возрастанию/убыванию. Поле для сортировки задаётся \`key\` колонки или \`sortBy\` (если нужно сортировать по другому полю строки).
- **Колонки действий:** специальные \`key\`: \`"controls"\` (иконки редактирования и удаления), \`"editControl"\` (только редактирование), \`"deleteControl"\` (только удаление). Для работы передаётся \`dispatch\`.
- **Кастомное отображение ячеек:** \`renderCell: (row, col) => ReactNode\` в колонке или общий \`renderCellContent\` в пропсах таблицы.
- **Состояния:** \`loading\` - спиннер вместо тела таблицы; пустые данные - текст из \`noData.noDataText\`; \`hasError\` + \`errorText\` - тултип с ошибкой над таблицей.
- **Варианты оформления:** \`styleVariant: "default"\` (сетка по всем ячейкам) и \`"znp"\` (только нижние границы, другой стиль заголовка и ячеек).
- **Обработка действий:** \`dispatch\` - функция \`(action: TClickOnCellAction<TData>) => void\`. Удобно получать через хук \`useTableActions\`.


## Структура действия (TClickOnCellAction&lt;TData&gt;)

\`\`\`ts
type TClickOnCellAction<TData> = {
  clickOn: string;  // "row" | "edit" | "delete" | key колонки (при isClickable)
  rowData: TData;   // данные строки
};
\`\`\`

- **clickOn: "row"** - клик по строке (вне ячеек с отдельными обработчиками).
- **clickOn: "edit"** - нажатие на иконку редактирования (колонка \`editControl\` или \`controls\`).
- **clickOn: "delete"** - нажатие на иконку удаления (колонка \`deleteControl\` или \`controls\`).
- **clickOn: string** (ключ колонки) - клик по ячейке колонки с \`isClickable: true\`.


## Колонка (TColumn&lt;TData&gt;)

| Поле | Тип | Описание |
|--|--|--|
| \`key\` | \`keyof TData | "controls" | "editControl" | "deleteControl"\` | Ключ данных или специальный тип колонки. |
| \`title\` | \`string\` | Заголовок колонки. |
| \`isSortable\` | \`boolean?\` | Включить сортировку по колонке (клик по заголовку). |
| \`sortBy\` | \`keyof TData?\` | Поле строки для сортировки (если не совпадает с \`key\`). |
| \`isClickable\` | \`boolean?\` | Клик по ячейке вызывает \`dispatch\` с \`clickOn: key\`. |
| \`isDisabled\` | \`boolean?\` | Для колонок \`controls\` / \`editControl\` / \`deleteControl\` - отключить кнопки. |
| \`width\` | \`number?\` | Ширина колонки в пикселях. |
| \`renderCell\` | \`(row, col) => ReactNode\` | Кастомный рендер содержимого ячейки. |

Для колонок с \`key: "controls" | "editControl" | "deleteControl"\` таблица сама рендерит иконки; \`dispatch\` обязателен для реакции на клики.


## Хук useTableActions

Упрощает обработку \`dispatch\` в формах: принимает \`onEdit\`, \`onDelete\`, \`onRowClick\`, \`onCustomAction\` и возвращает функцию для \`dispatch\`.

\`\`\`jsx
const handleTableDispatch = useTableActions({
  onEdit: (rowData) => openEditModal(rowData),
  onDelete: (id) => removeItem(id),  // id берётся из rowData.key или rowData.id
  onRowClick: (rowData) => selectRow(rowData),
  onCustomAction: (action) => { /* свои действия по action.clickOn */ },
});

<Table data={data} columns={columns} dispatch={handleTableDispatch} />;
\`\`\`

Для \`onDelete\` хук ищет идентификатор в \`rowData.key\` или \`rowData.id\` и передаёт его строкой в \`onDelete(id)\`.


## Базовое использование (только данные, без действий)

\`\`\`jsx
<Table
  data={items}
  columns={[
    { key: "name", title: "Наименование", isSortable: true, width: 200 },
    { key: "description", title: "Описание" },
    { key: "count", title: "Кол-во", width: 80 },
  ]}
  styleVariant="znp"
/>
\`\`\`


## Таблица с колонкой «Действия» (редактирование и удаление)

\`\`\`jsx
const handleDispatch = useTableActions({
  onEdit: (row) => openEditModal(row),
  onDelete: (id) => removeFromList(id),
});

<Table
  data={items}
  columns={[
    { key: "name", title: "Наименование" },
    { key: "description", title: "Описание" },
    { key: "controls", title: "Действия", width: 92 },
  ]}
  dispatch={handleDispatch}
  styleVariant="znp"
/>
\`\`\`

Строки данных должны содержать \`key\` или \`id\` для корректной работы \`onDelete\`.


## Кастомный рендер ячейки (renderCell)

По аналогии с \`BuildersTable\`, \`DocumentsTable\`, \`AuthorsTable\`: для колонки задаётся \`renderCell\`.

\`\`\`jsx
const columns = [
  { key: "name", title: "Наименование" },
  {
    key: "type",
    title: "Тип",
    renderCell: (row) => (
      <Tag
        title={row.type === "FL" ? "Физ. лицо" : "Юр. лицо"}
        colorVariant="blue"
      />
    ),
  },
  { key: "controls", title: "", width: 92 },
];
<Table data={data} columns={columns} dispatch={dispatch} />
\`\`\`


## Состояния загрузки и ошибки

\`\`\`jsx
<Table
  data={data}
  columns={columns}
  loading={isLoading}
  hasError={hasError}
  errorText="Ошибка загрузки данных"
  noData={{ isVisibleHeader: true, noDataText: "Нет данных" }}
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    columns: {
      description:
        "Массив колонок: key (поле данных или 'controls' | 'editControl' | 'deleteControl'), title, опционально isSortable, sortBy, width, isClickable, isDisabled, renderCell.",
      control: false,
      table: {
        type: { summary: "TColumn[]" },
        defaultValue: { summary: "—" },
      },
    },
    data: {
      description:
        "Массив объектов — данные строк. Для useTableActions (onDelete) в каждом объекте желательно иметь поле key или id.",
      control: false,
      table: {
        type: { summary: "TData[]" },
        defaultValue: { summary: "—" },
      },
    },
    dispatch: {
      description:
        "Обработчик действий: (action) => void. action.clickOn — 'row' | 'edit' | 'delete' или key колонки; action.rowData — данные строки. Рекомендуется использовать useTableActions.",
      control: false,
      table: {
        type: { summary: "Dispatch(TClickOnCellAction)" },
        defaultValue: { summary: "undefined" },
      },
    },
    styleVariant: {
      description:
        "Вариант оформления: 'default' — границы у всех ячеек; 'znp' — только нижние границы, стиль для форм ЗНП.",
      control: { type: "radio" },
      options: ["default", "znp"],
      table: {
        type: { summary: '"default" | "znp"' },
        defaultValue: { summary: '"default"' },
      },
    },
    loading: {
      description: "Показывать индикатор загрузки (Spinner) вместо тела таблицы.",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    hasError: {
      description:
        "Показать состояние ошибки: тултип над таблицей с текстом errorText, красная обводка.",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    errorText: {
      description: "Текст ошибки в тултипе при hasError: true.",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '""' },
      },
    },
    noData: {
      description:
        "Настройки пустого состояния: isVisibleHeader — показывать ли заголовок при пустых data; noDataText — текст в ячейке «нет данных».",
      control: false,
      table: {
        type: {
          summary: "{ isVisibleHeader?: boolean; noDataText?: string }",
          detail: "По умолчанию: { isVisibleHeader: true, noDataText: 'Нет данных' }",
        },
        defaultValue: { summary: "{ isVisibleHeader: true, noDataText: 'Нет данных' }" },
      },
    },
    renderCellContent: {
      description:
        "Глобальный рендер ячейки: (row, col) => ReactNode. Используется для колонок без собственного renderCell, если нужна единая логика.",
      control: false,
      table: { type: { summary: "(row, col) => ReactNode" } },
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для обёртки таблицы (внутренний div с overflow).",
      control: false,
      table: { type: { summary: "string" } },
    },
    classNameTableRoot: {
      description: "Дополнительный CSS-класс для элемента table.",
      control: false,
      table: { type: { summary: "string" } },
    },
    classNameTdContentRoot: {
      description: "Дополнительный CSS-класс для обёртки содержимого ячейки (td > div).",
      control: false,
      table: { type: { summary: "string" } },
    },
  },
  args: {
    data: defaultTableData,
    styleVariant: "default",
    loading: false,
    hasError: false,
    errorText: "",
    noData: { isVisibleHeader: true, noDataText: "Нет данных" },
  },
};

export default meta;

type Story = StoryObj<typeof TableSampleRow>;

export const Default: Story = {
  name: "Default Table",
  args: {
    columns: defaultColumns,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Базовая таблица с сортируемыми колонками. Клик по заголовку «Наименование», «Описание» или «Кол-во» переключает сортировку по возрастанию/убыванию.",
      },
    },
  },
};

export const WithSorting: Story = {
  name: "With sorting",
  args: {
    columns: defaultColumns,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Те же колонки с isSortable: true. Иконки ↕ / ↑ / ↓ в заголовке показывают возможность и направление сортировки.",
      },
    },
  },
};

export const WithControls: Story = {
  name: "With edit/delete controls",
  args: {
    columns: [
      { key: "name", title: "Наименование", width: 200 },
      { key: "description", title: "Описание" },
      { key: "controls", title: "Действия", width: 92 },
    ],
    dispatch: (action) => {
      if (typeof window !== "undefined") {
        console.log("Table dispatch:", action);
      }
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Колонка с key: 'controls' отображает иконки редактирования и удаления. dispatch вызывается с clickOn: 'edit' или 'delete' и rowData. В реальных формах сюда передают результат useTableActions({ onEdit, onDelete }).",
      },
    },
  },
};

export const WithUseTableActions: Story = {
  name: "With useTableActions (interactive)",
  render: function WithUseTableActionsRender(args) {
    const [data, setData] = useState<SampleRow[]>(defaultTableData);
    const { modalData, onOpenModal, onCloseModal } = useModal();

    const handleDispatch = useTableActions<SampleRow>({
      onEdit: (row) => {
        onOpenModal({ type: "edit", row });
      },
      onDelete: (id) => {
        setData((prev) => prev.filter((row) => row.key !== id));
      },
      onRowClick: (row) => {
        onOpenModal({ type: "rowClick", row });
      },
    });

    return (
      <>
        <TableSampleRow
          {...args}
          data={data}
          columns={[
            { key: "name", title: "Наименование", width: 200 },
            { key: "description", title: "Описание" },
            { key: "controls", title: "Действия", width: 92 },
          ]}
          dispatch={handleDispatch}
        />
        {modalData?.type && (
          <Confirm
            size={"md"}
            zIndex={1000}
            header={modalData?.type === "edit" ? "Редактировать" : "Клик по строке"}
            subHeader={`${modalData?.row.name}${modalData?.row.description ? ` — ${modalData?.row.description}` : ""}`}
            cancelBtnContent="Закрыть"
            submitBtnContent="OK"
            onClose={onCloseModal}
            submit={onCloseModal}
          />
        )}
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Пример из практики: dispatch получен через useTableActions. onDelete удаляет строку из state по row.key; onEdit и onRowClick открывают Confirm с данными строки. Можно удалять строки кнопкой корзины и кликать по строке.",
      },
    },
  },
};

export const WithEditControlOnly: Story = {
  name: "With editControl only",
  args: {
    columns: [
      { key: "name", title: "Наименование", width: 200 },
      { key: "description", title: "Описание" },
      { key: "editControl", title: "", width: 60 },
    ],
    dispatch: (action) => {
      if (typeof window !== "undefined" && action.clickOn === "edit") {
        console.log("Edit:", action.rowData);
      }
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Колонка key: 'editControl' — только иконка редактирования (без удаления).",
      },
    },
  },
};

export const WithDeleteControlOnly: Story = {
  name: "With deleteControl only",
  args: {
    columns: [
      { key: "name", title: "Наименование", width: 200 },
      { key: "description", title: "Описание" },
      { key: "deleteControl", title: "", width: 60 },
    ],
    dispatch: (action) => {
      if (typeof window !== "undefined" && action.clickOn === "delete") {
        console.log("Delete:", action.rowData);
      }
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Колонка key: 'deleteControl' — только иконка удаления.",
      },
    },
  },
};

export const WithClickableCell: Story = {
  name: "With clickable cell",
  args: {
    columns: [
      { key: "name", title: "Наименование", isClickable: true, width: 200 },
      { key: "description", title: "Описание" },
      { key: "count", title: "Кол-во", width: 80 },
    ],
    dispatch: (action) => {
      if (typeof window !== "undefined" && action.clickOn === "name") {
        console.log("Clicked name:", action.rowData);
      }
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Колонка с isClickable: true: клик по ячейке вызывает dispatch с clickOn равным key колонки (здесь 'name'). Курсор над ячейкой — pointer.",
      },
    },
  },
};

export const WithCustomRenderCell: Story = {
  name: "With custom renderCell",
  args: {
    columns: [
      { key: "name", title: "Наименование", width: 200 },
      {
        key: "count",
        title: "Кол-во",
        width: 80,
        renderCell: (row) => (
          <span className={styles.countCellHighlight}>{row.count ?? "—"}</span>
        ),
      },
      { key: "description", title: "Описание" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Колонка «Кол-во» с кастомным renderCell — выделение значения стилем. По тому же принципу в проекте делают колонки с Tag, датами (dateFormat), составным контентом (несколько EllipsisTextWithTooltip).",
      },
    },
  },
};

export const Loading: Story = {
  name: "Loading state",
  args: {
    columns: defaultColumns,
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: "При loading: true вместо tbody отображается одна ячейка с Spinner (размер lg).",
      },
    },
  },
};

export const Empty: Story = {
  name: "Empty state",
  args: {
    columns: defaultColumns,
    data: [],
    noData: { isVisibleHeader: true, noDataText: "Нет данных" },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Пустой массив data: заголовок отображается (isVisibleHeader: true), в теле — одна ячейка с noDataText. Если isVisibleHeader: false, заголовок скрыт.",
      },
    },
  },
};

export const WithError: Story = {
  name: "With error",
  args: {
    columns: defaultColumns,
    hasError: true,
    errorText: "Ошибка в данных таблицы",
  },
  parameters: {
    docs: {
      description: {
        story:
          "hasError: true — красная обводка таблицы и тултип над ней с errorText (как в AuthorsTable при отсутствии утверждающего).",
      },
    },
  },
};

export const VariantZnp: Story = {
  name: "Variant ZNP",
  args: {
    columns: defaultColumns,
    styleVariant: "znp",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Вариант оформления для форм ЗНП: только нижние границы у строк, другой фон заголовка и стиль текста в ячейках. Используется в CustomersTable, BuildersTable, ConstructionStagesTable, TEIRequirements и др.",
      },
    },
  },
};
