import { ReactNode } from "react";

import { TextProps } from "../../Text";
import { ETooltipPosition } from "../../Tooltip";

export interface EllipsisTextWithTooltipProps
  extends Omit<TextProps, "children" | "isEllipsis" | "ref"> {
  text?: string | ReactNode;
  classNameRoot?: string;
  defaultTooltipPosition?: ETooltipPosition;
  classNameBaseTooltipContentRoot?: string;
  classNameTooltipRoot?: string;
  classNameBaseTooltipRoot?: string;
  isWithFixedEnd?: boolean;
  isInheritFontStyles?: boolean;
}
