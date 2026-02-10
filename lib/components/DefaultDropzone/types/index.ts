import React from "react";
import { DropzoneOptions, DropzoneState } from "react-dropzone";

export interface DefaultDropzoneProps {
  getRootProps: DropzoneState["getRootProps"];
  getInputProps: DropzoneState["getInputProps"];
  disabled?: boolean;
  name: string;
  children?: React.ReactNode;
}

export type TUseDefaultDropzoneProps = DropzoneOptions;
