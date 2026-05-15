import { Accept, DropEvent, ErrorCode, FileError, FileRejection } from "react-dropzone";

import { ETooltipPosition } from "../../Tooltip";

export interface IUploadFilesProps {
  placeholder?: string;
  variant?: "input" | "dropzone";
  name: string;
  onDropFiles: <T extends File>(
    acceptedFiles: T[],
    name: string,
    fileRejections?: FileRejection[],
    event?: DropEvent,
  ) => void;
  label?: string;
  required?: boolean;
  accept?: Accept;
  disabled?: boolean;
  multiple?: boolean;
  files: File[];
  infoTooltipText?: string;
  tooltipPosition?: ETooltipPosition;
  classNameRoot?: string;
  classNameLabel?: string;
  loading?: boolean;
  error?: string;
  classNameBaseInfoTooltipRoot?: string;
  maxSizeMb?: number;
  requiredImageDimensionsPx?: TImageDimensionsPx;
}

export type TImageDimensionsPx = {
  width: number;
  height: number;
};

export type TLocalErrorFile = {
  file: File;
  errors: readonly FileError[];
};

export type { Accept, FileError, FileRejection };
export { ErrorCode };
