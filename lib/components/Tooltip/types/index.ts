import React from "react";

import { BaseTooltipProps } from "../../BaseTooltip";

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

export interface TooltipProps
  extends Omit<BaseTooltipProps, "classNameRoot" | "classNameContentRoot"> {
  hover?: boolean;
  isToggleClick?: boolean;
  isVisibleTooltip?: boolean;
  position?: ETooltipPosition;
  trigger?: React.ReactNode;
  triggerAction?: () => void;
  actionOnClose?: () => void;
  classNameTooltip?: string;
  classNameBaseTooltipRoot?: string;
  classNameBaseTooltipContentRoot?: string;
  isStopPropagationClickOnTrigger?: boolean;
  styleTooltip?: React.CSSProperties;
}

export interface InfoTooltipProps extends Omit<TooltipProps, "trigger"> {}
