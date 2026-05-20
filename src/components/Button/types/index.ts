import React, { CSSProperties } from "react";

import { EIconName } from "../../Icons";

export type TButtonType = "submit" | "reset" | "button";

export type TButtonVariant = "primary" | "secondary" | "text" | "link";
export type TButtonSize = "md" | "xl";

export interface ButtonProps extends React.PropsWithChildren {
  variant?: TButtonVariant;
  size?: TButtonSize;
  style?: CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: TButtonType;
  form?: string;
  isFullWidth?: boolean;
  noPadding?: boolean;
  isOnlyIcon?: boolean;
  loading?: boolean;
  startIconName?: EIconName;
  endIconName?: EIconName;
  classNameRoot?: string;
  classNameTextRoot?: string;
  classNameIconContainerRoot?: string;
  startIconRotate?: number;
  endIconRotate?: number;
}
