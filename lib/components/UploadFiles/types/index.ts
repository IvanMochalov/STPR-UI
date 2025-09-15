import { Accept, DropEvent, FileError, FileRejection } from "react-dropzone";

import { ETooltipPosition } from "../../Tooltip";

export interface UploadFilesProps {
  placeholder?: string;
  variant?: "input" | "dropzone";
  name: string;
  onDropFiles: <T extends File>(
    acceptedFiles: T[],
    name: string,
    fileRejections?: FileRejection[],
    event?: DropEvent,
  ) => void;
  accept: Accept;
  disabled?: boolean;
  multiple?: boolean;
  files: File[];
  infoTooltipText?: string;
  tooltipPosition?: ETooltipPosition;
  classNameRoot?: string;
  loading?: boolean;
  error?: string;
}

export type TLocalErrorFile = {
  fileName: string;
  errors: readonly FileError[];
};

export type { Accept, FileRejection };
