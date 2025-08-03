import React, { CSSProperties, ReactNode } from "react";

export interface ModalProps extends React.PropsWithChildren {
  zIndex: number;
  isHiddenModal?: boolean;
  isVisibleCloseButton?: boolean;
  classNameRoot?: string;
  classNameLayerRoot?: string;
  modalName: string;
  style?: CSSProperties;
  subHeader?: ReactNode;
  align?: "center" | "top";
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
