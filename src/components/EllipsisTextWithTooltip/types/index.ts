import { TextProps } from "../../Text";
import { ETooltipPosition } from "../../Tooltip";

export interface EllipsisTextWithTooltipProps
  extends Omit<TextProps, "children" | "isEllipsis" | "ref"> {
  text: string;
  classNameRoot?: string;
  classNameTooltipRoot?: string;
  defaultTooltipPosition?: ETooltipPosition;
  classNameBaseTooltipContentRoot?: string;
  classNameBaseTooltipRoot?: string;
}
