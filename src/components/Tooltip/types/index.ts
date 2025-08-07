import React from "react";

import { BaseTooltipProps } from "../../BaseTooltip";

export interface TooltipProps
  extends Omit<BaseTooltipProps, "classNameRoot" | "classNameContentRoot"> {
  hover?: boolean;
  isToggleClick?: boolean;
  isVisibleTooltip?: boolean;
  trigger?: React.ReactNode;
  triggerAction?: () => void;
  actionOnClose?: () => void;
  classNameTooltip?: string;
  classNameTriggerTooltip?: string;
  classNameBaseTooltipRoot?: string;
  classNameBaseTooltipContentRoot?: string;
}
