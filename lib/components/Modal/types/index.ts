import React, { CSSProperties, ReactNode } from "react";

export type TModalAlign = "center" | "top";

export interface ModalProps extends React.PropsWithChildren {
  zIndex: number;
  align?: TModalAlign;
  isHiddenModal?: boolean;
  isVisibleCloseButton?: boolean;
  classNameRoot?: string;
  classNameLayerRoot?: string;
  header: string | ReactNode;
  footer?: ReactNode;
  style?: CSSProperties;
  subHeader?: ReactNode;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
