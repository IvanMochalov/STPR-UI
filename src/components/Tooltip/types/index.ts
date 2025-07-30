import React from "react";

import { BaseTooltipProps } from "../../BaseTooltip";

export interface TooltipProps extends BaseTooltipProps {
  hover?: boolean;
  toggleClick?: boolean;
  isVisibleTooltip?: boolean;
  trigger?: React.ReactNode;
  triggerAction?: () => void;
  classNameTooltip?: string;
  classNameTriggerTooltip?: string;
}
