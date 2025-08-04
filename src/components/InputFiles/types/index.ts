import { ETooltipPosition } from "../../BaseTooltip";
import { DefaultDropzoneProps } from "../../DefaultDropzone";

export interface InputFilesProps extends Omit<DefaultDropzoneProps, "children"> {
  classNameRoot?: string;
  tooltipPosition?: ETooltipPosition;
  infoTooltipText?: string;
  error?: string;
  placeholder?: string;
}
