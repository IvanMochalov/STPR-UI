import React from "react";

export type TFormSize = "md" | "lg";

export interface FormProps extends React.PropsWithChildren {
  size?: TFormSize;
  withSeparator?: boolean;
  classNameRoot?: string;
  addMargin?: boolean;
  fullWidth?: boolean;
  onSubmit?: () => void;
  id?: string;
  name?: string;
  noValidate?: boolean;
}
