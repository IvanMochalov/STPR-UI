import { DefaultDropzoneProps } from "../../DefaultDropzone";
import { ETooltipPosition } from "../../Tooltip";

export interface UploadFilesProps extends Omit<DefaultDropzoneProps, "children"> {
  classNameRoot?: string;
  variant?: "input" | "dropzone";
  tooltipPosition?: ETooltipPosition;
  infoTooltipText?: string;
  error?: string;
  placeholder?: string;
}
