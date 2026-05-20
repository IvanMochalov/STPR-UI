import React from "react";

import { EIconName } from "../../Icons";
import { ETooltipPosition } from "../../Tooltip";

export type TAccordionSize = "md" | "xl";

export interface AccordionProps extends React.PropsWithChildren {
  name?: string;
  onOpen?: (open: boolean) => void;
  defaultOpen?: boolean;
  isHiddenExpandIcon?: boolean;
  noBorder?: boolean;
  noPadding?: boolean;
  classNameRoot?: string;
  classNameHeader?: string;
  classNameTitle?: string;
  classNameIcon?: string;
  classNameChildrenWrapper?: string;
  expandIconName?: EIconName;
  size?: TAccordionSize;
  infoTooltipText?: string;
  tooltipPosition?: ETooltipPosition;
  classNameBaseTooltipRoot?: string;
}
