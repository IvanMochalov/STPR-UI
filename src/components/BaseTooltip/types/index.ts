import { ReactNode } from "react";

export enum ETooltipPosition {
  Top = "top",
  TopLeft = "top-left",
  TopRight = "top-right",
  Bottom = "bottom",
  BottomLeft = "bottom-left",
  BottomRight = "bottom-right",
  Left = "left",
  LeftTop = "left-top",
  LeftBottom = "left-bottom",
  Right = "right",
  RightTop = "right-top",
  RightBottom = "right-bottom",
}

export interface BaseTooltipProps {
  position?: ETooltipPosition;
  text?: string | ReactNode;
  noPadding?: boolean;
  classNameRoot?: string;
}
