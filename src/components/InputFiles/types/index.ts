import { DefaultDropzoneProps } from "../../DefaultDropzone";
import { ETooltipPosition } from "../../Tooltip";

export interface InputFilesProps extends Omit<DefaultDropzoneProps, "children"> {
  classNameRoot?: string;
  tooltipPosition?: ETooltipPosition;
  infoTooltipText?: string;
  error?: string;
  placeholder?: string;
}
