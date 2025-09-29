import React, { CSSProperties, ReactNode } from "react";

export type TModalVerticalAlign = "center" | "top";
export type TTextAlign = "center" | "left" | "right";

export interface ModalProps extends React.PropsWithChildren {
  zIndex?: number;
  size?: "md" | "lg";
  modalVerticalAlign?: TModalVerticalAlign;
  textAlign?: TTextAlign;
  isHiddenModal?: boolean;
  isVisibleCloseButton?: boolean;
  classNameRoot?: string;
  classNameLayerRoot?: string;
  header: string | ReactNode;
  footer?: ReactNode;
  style?: CSSProperties;
  subHeader?: ReactNode;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
