import type { ReactNode } from "react";

import type { TIfcPreviewMaxFileSizeMb } from "../utils/fileSizeLimit";

export type { TIfcPreviewMaxFileSizeMb } from "../utils/fileSizeLimit";

/**
 * Предпросмотр IFC: карточка и полноэкранный просмотр в Layer (`IfcViewer`).
 * Источник модели: `url` и/или локальный `file` (см. приоритет в `readonly`).
 */
export type IIfcPreviewProps = {
  /**
   * `true` — только просмотр по `url`, без загрузки и удаления с диска.
   * `false` — просмотр, загрузка файла (Upload) и удаление (Trash) при наличии модели.
   */
  readonly: boolean;

  /**
   * URL IFC-модели (HTTP(S) или `blob:`). Передаётся в `IfcViewer` при открытии просмотра.
   * При `readonly={false}` — fallback после локального `file`.
   */
  url?: string;

  /**
   * Локальный файл при `readonly={false}` (приоритет над `url`).
   * Если проп передан — компонент controlled; иначе файл хранится во внутреннем состоянии.
   */
  file?: File | null;

  /**
   * Колбэк при смене или сбросе файла (`readonly={false}`).
   */
  onFileChange?: (file: File | null) => void;

  /**
   * Вызывается при нажатии «Удалить»: сброс локального `file` и скрытие `url` в UI.
   * В controlled-режиме обнулите у родителя `file` и `url` в этом колбэке.
   */
  onClear?: () => void;

  /**
   * Базовый URL каталога со статикой `web-ifc.wasm`.
   * @default "/components-assets/IfcPreview/web-ifc/"
   */
  wasmPublicPath?: string;

  onModelLoaded?: () => void;
  onError?: (error: Error) => void;
  onOpenViewer?: () => void;
  onCloseViewer?: () => void;

  /**
   * Максимальный размер IFC для просмотра (МБ).
   * @default 50
   */
  maxFileSizeMb?: TIfcPreviewMaxFileSizeMb;

  /** @default false */
  disableFileSizeLimit?: boolean;

  classNameRoot?: string;

  /** Контент в панели просмотра под канвасом (после загрузки модели). */
  children?: ReactNode;
};
