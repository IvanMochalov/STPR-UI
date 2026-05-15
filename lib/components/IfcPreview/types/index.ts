import type { ReactNode } from "react";

import type { TIfcPreviewMaxFileSizeMb } from "../utils/fileSizeLimit";

export type { TIfcPreviewMaxFileSizeMb } from "../utils/fileSizeLimit";

export type TIfcPreviewMode = "view" | "dev";

/**
 * Предпросмотр IFC: карточка и полноэкранный просмотр в Layer.
 * Источник модели: `ifcData` / `url` и/или локальный `file` (см. приоритет в `readonly`).
 */
export type IIfcPreviewProps = {
  /**
   * `true` — только просмотр: модель через `ifcData` или `url`, без загрузки и удаления с диска.
   * `false` — просмотр, загрузка файла (иконка Upload) и удаление (иконка Trash) при наличии модели.
   */
  readonly: boolean;

  /**
   * Бинарные данные IFC с родителя (приоритет над `url`).
   * При `readonly={false}` используется как fallback, если локальный `file` не выбран.
   */
  ifcData?: ArrayBuffer | Uint8Array | null;

  /**
   * URL модели: `fetch` при открытии просмотра.
   * При `readonly={false}` — fallback после `file` и `ifcData`. Не используется, если задан непустой `ifcData`.
   */
  url?: string;

  /**
   * Локальный файл при `readonly={false}` (приоритет над `ifcData` и `url`).
   * Если проп передан — компонент controlled; иначе файл хранится во внутреннем состоянии.
   */
  file?: File | null;

  /**
   * Колбэк при смене или сбросе файла (`readonly={false}`).
   * Вызывается и в controlled-, и в uncontrolled-режиме.
   */
  onFileChange?: (file: File | null) => void;

  /**
   * Вызывается при нажатии «Удалить»: сброс локального `file` и скрытие `ifcData`/`url` в UI.
   * В controlled-режиме обнулите у родителя `file`, `url` и `ifcData` в этом колбэке.
   */
  onClear?: () => void;

  /**
   * Режим отображения. Зарезервировано: сейчас ведёт себя как `"view"`.
   */
  mode?: TIfcPreviewMode;

  /**
   * Базовый URL каталога со статикой `web-ifc.wasm` (слэш в конце не обязателен).
   * Должен совпадать с путём, по которому приложение отдаёт wasm из `public/`.
   * По умолчанию: `/components-assets/IfcPreview/web-ifc/`.
   * Пример: `` `${import.meta.env.BASE_URL}components-assets/IfcPreview/web-ifc/` ``.
   */
  wasmPublicPath?: string;

  /**
   * Вызывается после успешной загрузки модели в WebGL-сцену
   * (аналог `onModelLoaded` в react-ifc-viewer).
   */
  onModelLoaded?: () => void;

  /**
   * Ошибка загрузки IFC (`fetch` / `url`), открытия файла или инициализации viewer (в т.ч. wasm).
   */
  onError?: (error: Error) => void;

  /** Вызывается при успешном открытии слоя просмотра и подготовке буфера модели. */
  onOpenViewer?: () => void;

  /** Вызывается при закрытии слоя просмотра пользователем. */
  onCloseViewer?: () => void;

  /**
   * Максимальный размер IFC для **просмотра** в браузере (МБ). Файл на карточку можно выбрать больше;
   * при открытии просмотра показывается ошибка, если размер превышен.
   * @default 50
   */
  maxFileSizeMb?: TIfcPreviewMaxFileSizeMb;

  /**
   * Отключить проверку `maxFileSizeMb` при просмотре.
   * @default false
   */
  disableFileSizeLimit?: boolean;

  /** Дополнительный CSS-класс корневого контейнера карточки. */
  classNameRoot?: string;

  /**
   * Дополнительный контент в панели просмотра под канвасом
   * (слот под оверлеи; аналог `children` у `IfcViewer` в react-ifc-viewer).
   */
  children?: ReactNode;
};
