import React from "react";

import { BaseTooltipProps } from "../../BaseTooltip";

export interface TooltipProps extends BaseTooltipProps {
  hover?: boolean;
  toggleClick?: boolean;
  trigger?: React.ReactNode;
  triggerAction?: () => void;
  classNameTriggerTooltip?: string;
  classNameRootBaseTooltip?: string;
}
