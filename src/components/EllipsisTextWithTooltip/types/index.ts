import { ETooltipPosition } from "../../BaseTooltip";
import { TextProps } from "../../Text";

export interface EllipsisTextWithTooltipProps
  extends Omit<TextProps, "children" | "isEllipsis" | "ref"> {
  text: string;
  classNameRoot?: string;
  classNameTooltipRoot?: string;
  defaultTooltipPosition?: ETooltipPosition;
  classNameBaseTooltipContentRoot?: string;
  classNameBaseTooltipRoot?: string;
}
