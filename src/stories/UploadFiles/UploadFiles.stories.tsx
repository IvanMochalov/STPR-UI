import type { Meta, StoryObj } from "@storybook/react";
import cx from "clsx";
import React, { useState } from "react";

import { UploadFiles } from "../../../lib/components/UploadFiles";
import { Text } from "../../../lib/components/Text";
import mainStyles from "../Stories.module.scss";
import styles from "./UploadFilesStories.module.scss";

const meta: Meta<typeof UploadFiles> = {
  component: UploadFiles,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      description: `Текст-подсказка когда файлы не загружены.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Загрузите файл"' },
      },
    },
    variant: {
      description: `Вариант стиля компонента загрузки файлов:\n- "input" - компактный вариант в виде поля ввода (по умолчанию)\n- "dropzone" - расширенная область для перетаскивания файлов\n`,
      control: { type: "select" },
      options: ["input", "dropzone"],
      table: {
        type: { summary: "TUploadFilesVariant", detail: "'input' | 'dropzone'" },
        defaultValue: { summary: '"input"' },
      },
    },
    disabled: {
      description: `Отключить компонент загрузки файлов. Заблокирует взаимодействие и изменит визуальный стиль.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    multiple: {
      description: `Разрешить загрузку нескольких файлов. В режиме "input" отображает список файлов.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    loading: {
      description: `Состояние загрузки. Показывает спиннер и блокирует взаимодействие.\n`,
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    tooltipPosition: {
      description: `Позиция тултипа для подсказки.\n`,
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
        defaultValue: { summary: '"top-right"' },
      },
    },
    name: {
      description: `Имя поля для формы. Обязательный параметр.\n`,
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
    infoTooltipText: {
      description: `Текст подсказки для компонента. Показывает иконку информации с тултипом.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    error: {
      description: `Текст ошибки валидации. Подсвечивает компонент красным и показывает сообщение об ошибке.\n`,
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    accept: {
      description: `Объект с разрешенными типами файлов. Ключ - MIME-тип, значение - массив расширений.\n`,
      control: { type: "object" },
      table: {
        type: {
          summary: "Accept",
          detail: `{
  // Изображения
  "image/*": [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"],
  // PDF документы
  "application/pdf": [".pdf"],
  // Word документы
  "application/msword": [".doc"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
  // Excel таблицы
  "application/vnd.ms-excel": [".xls"],
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
  // PowerPoint презентации
  "application/vnd.ms-powerpoint": [".ppt"],
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": [".pptx"],
  // Текстовые файлы
  "text/plain": [".txt"],
  "text/csv": [".csv"],
  // Архивы
  "application/zip": [".zip"],
  "application/x-rar-compressed": [".rar"],
  // Специфичные форматы
  "application/ifc": [".ifc"],
  "application/json": [".json"],
  "application/xml": [".xml"]
}`,
        },
      },
    },
    files: {
      description: `Массив загруженных файлов. Используется для контролируемого состояния.\n`,
      control: false,
      table: {
        type: { summary: "File[]" },
      },
    },
    onDropFiles: {
      description: `Callback-функция, вызываемая при загрузке файлов.
Получает параметры:
- acceptedFiles: File[] - принятые файлы
- name: string - имя поля
- fileRejections?: FileRejection[] - отклоненные файлы с ошибками
- event?: DropEvent - событие dropzone

Особенности:
- Автоматически обрабатывает drag & drop и клик по области
- Валидирует файлы по формату и размеру
- Для работы с формами рекомендуется использовать вместе с состоянием React\n`,
      control: false,
      table: {
        type: {
          detail:
            "<T extends File>(\n" +
            "  acceptedFiles: T[],\n" +
            "  name: string,\n" +
            "  fileRejections?: FileRejection[],\n" +
            "  event?: DropEvent\n" +
            ") => void",
          summary: "TOnDropFiles",
        },
      },
    },
    classNameRoot: {
      description: "Дополнительный CSS-класс для корневого элемента компонента\n",
      control: false,
      table: {
        type: { summary: "string" },
      },
    },
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Компонент для загрузки файлов с поддержкой drag & drop, валидации и различных состояний.

## Особенности:
- **Два варианта стиля**: input (компактный) и dropzone (расширенная область)
- **Drag & Drop**: поддержка перетаскивания файлов в область загрузки
- **Валидация файлов**: автоматическая проверка формата и размера файлов
- **Визуальная обратная связь**: подсветка при наведении и состоянии перетаскивания
- **Список файлов**: отображение загруженных файлов с информацией и возможностью удаления
- **Адаптивный дизайн**: разные размеры и отступы на мобильных и desktop
- **Поддержка ошибок**: отображение ошибок валидации и системных ошибок

## Поддерживаемые функции:
- **Одиночная и множественная загрузка** файлов
- **Ограничение типов файлов** через MIME-типы и расширения
- **Визуализация процесса загрузки** через состояние loading
- **Удаление отдельных файлов** из списка загруженных
- **Подсказки и тултипы** для пояснения требований к файлам
- **Автоматическая обрезка длинных имен** файлов с тултипами

## Состояния компонента:
- **Обычное**: стандартное состояние с плейсхолдером
- **С файлами**: отображение списка загруженных файлов
- **С ошибкой**: красная граница и текст ошибки
- **Отключенное**: серый цвет и блокировка взаимодействия
- **Загрузка**: спиннер и блокировка взаимодействия
- **Перетаскивание**: подсветка области при drag over

## Рекомендации по использованию:
Используйте для загрузки файлов в формах, где требуется валидация и визуальная обратная связь.

### Базовое использование

\`\`\`jsx
const [formData, setFormData] = useState({
  documents: []
});

<UploadFiles
  name="documents"
  files={formData.documents}
  onDropFiles={(acceptedFiles, name) => setFormData(prev => {...prev, [name]: acceptedFiles})}
  accept={{ "application/pdf": [".pdf"] }}
  placeholder="Загрузите PDF файл"
  variant="input"
/>
\`\`\`

### Множественная загрузка с подсказкой

\`\`\`jsx
const [formData, setFormData] = useState({
  images: []
});

<UploadFiles
  name="images"
  files={formData.images}
  onDropFiles={(acceptedFiles, name) => setFormData(prev => {...prev, [name]: acceptedFiles})}
  accept={{ "image/*": [".jpg", ".png", ".gif"] }}
  placeholder="Загрузите изображения"
  variant="dropzone"
  multiple={true}
/>
\`\`\`
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={cx(mainStyles.storyWrapper, styles.localStoryWrapper)}>
        <Story />
      </div>
    ),
  ],
  args: {
    placeholder: "Загрузите файл .ifc",
    variant: "input",
    accept: { "application/ifc": [".ifc"] },
    disabled: false,
    multiple: false,
    infoTooltipText: "Подсказка для поля загрузки модель/-и формата IFC",
    loading: false,
    error: "",
  },
};

export default meta;

type Story = StoryObj<typeof UploadFiles>;

export const Default: Story = {
  name: "Default Upload Files",
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);

    const uploadFiles = (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
    };

    return <UploadFiles {...args} onDropFiles={uploadFiles} name={"file"} files={files} />;
  },
};

export const InputVariant: Story = {
  render: Default.render,
  args: {
    placeholder: "Загрузите документ PDF",
    variant: "input",
    accept: { "application/pdf": [".pdf"] },
    infoTooltipText: "Поддерживается только формат PDF. Максимальный размер 10MB",
  },
};

export const DropzoneVariant: Story = {
  render: Default.render,
  args: {
    placeholder: "Перетащите файлы сюда или нажмите для выбора",
    variant: "dropzone",
    accept: { "image/*": [".jpg", ".jpeg", ".png", ".gif"] },
    infoTooltipText: "Поддерживаются изображения JPG, PNG, GIF. Максимальный размер 5MB",
  },
};

export const MultipleFiles: Story = {
  name: "Multiple Files Upload",
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);

    const uploadFiles = (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
    };

    return <UploadFiles {...args} onDropFiles={uploadFiles} name={"files"} files={files} />;
  },
  args: {
    placeholder: "Загрузите один или несколько файлов",
    variant: "input",
    multiple: true,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    infoTooltipText: "Поддерживаются PDF, DOC, DOCX. Максимальный размер каждого файла 5MB",
  },
};

export const LoadingState: Story = {
  name: "Upload Files in Loading State",
  render: Default.render,
  args: {
    placeholder: "Загрузите файл",
    variant: "input",
    loading: true,
    infoTooltipText: "Идет обработка файла...",
  },
};

export const WithUploadedFiles: Story = {
  name: "Upload Files with Uploaded Files",
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);

    // Создаем mock файлы для демонстрации
    React.useEffect(() => {
      const mockFiles = [
        new File(["content"], "project-documentation.pdf", { type: "application/pdf" }),
        new File(["content"], "technical-specifications.docx", {
          type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        }),
        new File(["content"], "presentation-materials.pptx", {
          type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        }),
      ];
      setFiles(mockFiles);
    }, []);

    const uploadFiles = (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
    };

    return <UploadFiles {...args} onDropFiles={uploadFiles} name={"files"} files={files} />;
  },
  args: {
    placeholder: "Загрузите файлы",
    variant: "input",
    multiple: true,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": [".pptx"],
    },
    infoTooltipText: "Поддерживаются PDF, DOCX, PPTX",
  },
};

export const ImageFiles: Story = {
  name: "Image Files Only",
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);
    const uploadFiles = (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
    };
    return (
      <div className={styles.differentFileTypesWrapper}>
        <UploadFiles {...args} onDropFiles={uploadFiles} name={"images"} files={files} />
        <Text type={"description"} classNameRoot={styles.differentFileTypesWrapper__description}>
          Поддерживаемые форматы:{" "}
          {Object.values(args.accept || {})
            .flat()
            .join(", ")
            .toUpperCase()}
        </Text>
      </div>
    );
  },
  args: {
    placeholder: "Загрузите изображения",
    variant: "dropzone",
    multiple: true,
    accept: {
      "image/*": [".jpg", ".jpeg", ".png", ".gif", ".webp"],
    },
    infoTooltipText: "Поддерживаются JPG, PNG, GIF, WebP. Максимальный размер 5MB",
  },
};

export const DocumentFiles: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);
    const uploadFiles = (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
    };
    return (
      <div className={styles.differentFileTypesWrapper}>
        <UploadFiles {...args} onDropFiles={uploadFiles} name={"documents"} files={files} />
        <Text type={"description"} classNameRoot={styles.differentFileTypesWrapper__description}>
          Поддерживаемые форматы:{" "}
          {Object.values(args.accept || {})
            .flat()
            .join(", ")
            .toUpperCase()}
        </Text>
      </div>
    );
  },
  args: {
    placeholder: "Загрузите документы",
    variant: "input",
    multiple: true,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    infoTooltipText: "Поддерживаются PDF, DOC, DOCX",
  },
};

export const SpreadsheetFiles: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);
    const uploadFiles = (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
    };
    return (
      <div className={styles.differentFileTypesWrapper}>
        <UploadFiles {...args} onDropFiles={uploadFiles} name={"spreadsheets"} files={files} />
        <Text type={"description"} classNameRoot={styles.differentFileTypesWrapper__description}>
          Поддерживаемые форматы:{" "}
          {Object.values(args.accept || {})
            .flat()
            .join(", ")
            .toUpperCase()}
        </Text>
      </div>
    );
  },
  args: {
    placeholder: "Загрузите таблицы",
    variant: "input",
    multiple: false,
    accept: {
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
      "text/csv": [".csv"],
    },
    infoTooltipText: "Поддерживаются XLS, XLSX, CSV",
  },
};

export const ArchiveFiles: Story = {
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);
    const uploadFiles = (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
    };
    return (
      <div className={styles.differentFileTypesWrapper}>
        <UploadFiles {...args} onDropFiles={uploadFiles} name={"archives"} files={files} />
        <Text type={"description"} classNameRoot={styles.differentFileTypesWrapper__description}>
          Поддерживаемые форматы:{" "}
          {Object.values(args.accept || {})
            .flat()
            .join(", ")
            .toUpperCase()}
        </Text>
      </div>
    );
  },
  args: {
    placeholder: "Загрузите архив",
    variant: "input",
    multiple: false,
    accept: {
      "application/zip": [".zip"],
      "application/x-rar-compressed": [".rar"],
    },
    infoTooltipText: "Поддерживаются ZIP и RAR архивы",
  },
};

export const SpecificFormat: Story = {
  name: "Specific Format (IFC)",
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);
    const uploadFiles = (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
    };
    return (
      <div className={styles.differentFileTypesWrapper}>
        <UploadFiles {...args} onDropFiles={uploadFiles} name={"ifc"} files={files} />
        <Text type={"description"} classNameRoot={styles.differentFileTypesWrapper__description}>
          Поддерживаемые форматы:{" "}
          {Object.values(args.accept || {})
            .flat()
            .join(", ")
            .toUpperCase()}
        </Text>
      </div>
    );
  },
  args: {
    placeholder: "Загрузите файл .ifc",
    variant: "input",
    multiple: false,
    accept: {
      "application/ifc": [".ifc"],
    },
    infoTooltipText: "Только файлы формата IFC",
  },
};

export const DifferentFileTypes: Story = {
  name: "Upload Files with Different File Types",
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);

    const uploadFiles = (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
    };

    return (
      <div className={styles.differentFileTypesWrapper}>
        <UploadFiles {...args} onDropFiles={uploadFiles} name={"files"} files={files} />
        <Text type={"description"} classNameRoot={styles.differentFileTypesWrapper__description}>
          Поддерживаемые форматы:{" "}
          {Object.values(args.accept || {})
            .flat()
            .join(", ")
            .toUpperCase()}
        </Text>
      </div>
    );
  },
  args: {
    placeholder: "Загрузите файлы различных форматов",
    variant: "dropzone",
    multiple: true,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
      "image/*": [".jpg", ".jpeg", ".png", ".gif"],
      "text/plain": [".txt"],
    },
    infoTooltipText: "Поддерживаются документы, таблицы, изображения и текстовые файлы",
  },
};
