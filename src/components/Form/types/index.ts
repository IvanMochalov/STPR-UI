import React from "react";

export interface FormProps extends React.PropsWithChildren {
  size?: "md" | "lg";
  withSeparator?: boolean;
  classNameRoot?: string;
  addMargin?: boolean;
  fullWidth?: boolean;
  onSubmit?: () => void;
  id?: string;
  name?: string;
  noValidate?: boolean;
  autoComplete?: React.AutoFillBase;
}
