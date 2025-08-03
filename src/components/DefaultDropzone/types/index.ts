import React from "react";
import { Accept, DropEvent, FileRejection } from "react-dropzone";

export interface DefaultDropzoneProps {
  onDropFiles: <T extends File>(
    acceptedFiles: T[],
    name: string,
    fileRejections?: FileRejection[],
    event?: DropEvent,
  ) => void;
  maxSize?: number;
  accept?: Accept;
  disabled?: boolean;
  multiple?: boolean;
  maxFiles?: number;
  files?: File[];
  children?: React.ReactNode;
  name: string;
}
