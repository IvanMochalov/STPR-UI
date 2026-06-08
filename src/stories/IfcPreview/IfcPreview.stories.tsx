import { IfcPreview } from "@components/IfcPreview";
import type { Meta, StoryObj } from "@storybook/react-vite";

import fixtureIfcUrl from "../../story-assets/fixtures/sample.ifc?url";
import styles from "./IfcPreviewStories.module.scss";

const wasmPublicPath = `${import.meta.env.BASE_URL}components-assets/IfcPreview/web-ifc/`;

const meta: Meta<typeof IfcPreview> = {
  title: "Components/IfcPreview",
  component: IfcPreview,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Карточка предпросмотра IFC с оверлеем действий. 3D открывается в \`Layer\` через внутренний [\`IfcViewer\`](?path=/docs/components-ifcviewer--docs).

## Источники модели

| Проп | Назначение |
|------|------------|
| \`url\` | HTTP(S) или \`blob:\` — URL IFC для просмотра |
| \`file\` | Локальный файл (\`readonly={false}\`), приоритет над \`url\` |

При открытии просмотра \`file\` превращается в \`blob:\` URL и передаётся в \`IfcViewer\`.

## Режимы (\`readonly\`)

- **\`readonly={true}\`** — только просмотр по \`url\`, без Upload и Trash.
- **\`readonly={false}\`** — Upload, Trash и просмотр; приоритет источника: \`file\` → \`url\`.

## Лимит размера для просмотра

- **\`maxFileSizeMb\`**: \`50\` | \`100\` | \`150\` (по умолчанию **50**).
- **\`disableFileSizeLimit\`**: по умолчанию \`false\`.
- Файл на карточку можно выбрать любого размера; при превышении лимита в Layer показывается ошибка.
- Отключение: \`disableFileSizeLimit={true}\`.

## Зависимости

- **Peer**: \`three\`, \`web-ifc\` (те же мажорные версии, что у UI-кита).
- **\`web-ifc.wasm\`**: поставляется в пакете в \`dist/components-assets/IfcPreview/web-ifc/\` (копируется при \`npm run build:lib\` в репозитории библиотеки). Установка пакета не запускает дополнительных скриптов.

## \`wasmPublicPath\`

По умолчанию: \`/components-assets/IfcPreview/web-ifc/\`. В Vite с \`base\` не \`"/"\` передайте каталог с \`\${import.meta.env.BASE_URL}\`.

\`\`\`jsx
const wasmPublicPath =
  \`\${import.meta.env.BASE_URL}components-assets/IfcPreview/web-ifc/\`;

<IfcPreview readonly={false} wasmPublicPath={wasmPublicPath} />
<IfcPreview readonly url={modelUrl} wasmPublicPath={wasmPublicPath} />
\`\`\`
        `,
      },
    },
  },
  args: {
    wasmPublicPath,
    disableFileSizeLimit: false,
    readonly: false,
    maxFileSizeMb: 50,
  },
  argTypes: {
    readonly: {
      control: "boolean",
      description: "Только просмотр по url (true) или ещё загрузка/удаление файла (false).",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    url: {
      control: false,
      description: "URL IFC-модели. В readonly — основной источник; иначе fallback после file.",
    },
    file: {
      control: false,
      description: "Локальный File (readonly=false). Controlled, если проп передан явно.",
      table: {
        type: { summary: "File | null | undefined" },
      },
    },
    wasmPublicPath: {
      description: "Каталог со статикой web-ifc.wasm (слэш в конце не обязателен).",
      table: {
        defaultValue: { summary: "/components-assets/IfcPreview/web-ifc/" },
      },
    },
    maxFileSizeMb: {
      control: { type: "radio" },
      options: [50, 100, 150],
      description: "Лимит размера IFC для открытия 3D-просмотра (МБ).",
      table: {
        type: { summary: "TIfcPreviewMaxFileSizeMb", detail: "50 | 100 | 150" },
        defaultValue: { summary: "50" },
      },
    },
    disableFileSizeLimit: {
      control: "boolean",
      description: "Отключить проверку maxFileSizeMb перед просмотром.",
      table: { defaultValue: { summary: "false" } },
    },
    onFileChange: { action: "onFileChange", description: "Смена или сброс file (readonly=false)." },
    onClear: { action: "onClear", description: "После Trash: сбросьте file и url у родителя в controlled-режиме." },
    onModelLoaded: { action: "onModelLoaded", description: "Модель отображена в IfcViewer." },
    onError: { action: "onError", description: "Ошибка лимита, загрузки или IfcViewer." },
    onOpenViewer: { action: "onOpenViewer", description: "Layer открыт, viewerUrl подготовлен." },
    onCloseViewer: { action: "onCloseViewer", description: "Пользователь закрыл Layer." },
    classNameRoot: { control: false, description: "CSS-класс корня карточки." },
    children: { control: false, description: "Слот под канвасом в Layer (после onModelLoaded)." },
  },
};

export default meta;

type Story = StoryObj<typeof IfcPreview>;

export const Default: Story = {
  name: "Default IfcPreview",
};

export const ReadonlyWithFixtureUrl: Story = {
  name: "Readonly (fixture URL)",
  args: {
    readonly: true,
    url: fixtureIfcUrl,
  },
  render: (args) => (
    <div className={styles.storyShell}>
      <IfcPreview {...args} />
    </div>
  ),
};
