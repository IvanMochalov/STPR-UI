import React, { CSSProperties, ReactNode } from "react";

export type TModalVerticalAlign = "center" | "top";
export type TTextAlign = "center" | "left" | "right";
export type TModalSize = "md" | "lg";

export interface ModalProps extends React.PropsWithChildren {
  zIndex?: number;
  size?: TModalSize;
  modalVerticalAlign?: TModalVerticalAlign;
  textAlign?: TTextAlign;
  isHiddenModal?: boolean;
  isVisibleCloseButton?: boolean;
  classNameRoot?: string;
  classNameHeaderRoot?: string;
  classNameFooterRoot?: string;
  classNameLayerRoot?: string;
  header: string | ReactNode;
  footer?: ReactNode;
  style?: CSSProperties;
  subHeader?: ReactNode;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}
