import React from "react";

export interface ViewImageModalProps {
  src: string;
  /** Резерв при ошибке загрузки `src`. По умолчанию — статика пакета: `dist/components-assets/ViewImageModal/fallBackSrc.jpeg` (корень сайта); пустая строка отключает подмену. */
  fallbackSrc?: string;
  zIndex?: number;
  classNameRoot?: string;
  classNameImageRoot?: string;
  showLoader?: boolean;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
