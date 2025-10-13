import React from "react";

export type TOnChangeDatePickerInput = (
  event: React.ChangeEvent<HTMLInputElement>,
  data: {
    name: string;
    value: Date | null;
  },
) => void;

export type TDatePickerInputVariant = "outlined" | "filled";

export type TDatePickerInputSize = "md" | "lg";

export interface IDatePickerInputProps {
  value?: string;
  name?: string;
  onChange?: TOnChangeDatePickerInput;
  dateFormatMask: string | (string | RegExp)[];
  variant?: TDatePickerInputVariant;
  size?: TDatePickerInputSize;
  disabled?: boolean;
  error?: string;
  placeholderText?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onBlur?: () => void;
  onMouseDownInput?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  readOnlyInput?: boolean;
  focused?: boolean;
  changed?: boolean;
  classNameRoot?: string;
}
