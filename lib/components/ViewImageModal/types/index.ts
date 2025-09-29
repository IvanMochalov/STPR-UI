import React from "react";

export interface ViewImageModalProps {
  src: string;
  fallbackSrc?: string;
  zIndex?: number;
  classNameRoot?: string;
  classNameImageRoot?: string;
  showLoader?: boolean;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
