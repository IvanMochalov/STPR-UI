import React, { CSSProperties, ReactNode } from "react";

import { EIconName } from "../../Icons";

export type TButtonColor = "blue" | "white";

export type TButtonType = "submit" | "reset" | "button";

export type TButtonVariant = "primary" | "secondary" | "link";

export interface ButtonProps extends React.PropsWithChildren {
  color?: TButtonColor;
  variant?: TButtonVariant;
  style?: CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: TButtonType;
  form?: string;
  isFullWidth?: boolean;
  noPadding?: boolean;
  isOnlyIcon?: boolean;
  loading?: boolean;
  iconName?: EIconName;
  icon?: ReactNode;
  classNameRoot?: string;
  classNameIconContainerRoot?: string;
  iconRotate?: number;
}
