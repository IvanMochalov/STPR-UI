import { ETooltipPosition } from "../../Tooltip";

export interface LabelProps {
  required?: boolean;
  label?: string;
  infoTooltipText?: string;
  tooltipPosition?: ETooltipPosition;
  classNameRoot?: string;
  classNameBaseTooltipRoot?: string;
}
