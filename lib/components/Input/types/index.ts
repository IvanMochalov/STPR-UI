import React, { ForwardedRef } from "react";

import { ETooltipPosition } from "../../Tooltip";

export type TInputVariant = "outlined" | "filled";

export interface IInputProps {
  name: string;
  variant?: TInputVariant;
  onChange?: TOnChangeInput;
  onBlur?: TOnBlurInput;
  value?: string;
  error?: string;
  isAbsolutePositionError?: boolean;
  isClearable?: boolean;
  pattern?: RegExp | string;
  onMouseEnter?: () => void;
  label?: string;
  infoTooltipText?: string;
  tooltipPosition?: ETooltipPosition;
  disabled?: boolean;
  required?: boolean;
  isVisibleDefaultTitle?: boolean;
  placeholder?: string;
  classNameError?: string;
  classNameLabel?: string;
  classNameRoot?: string;
  classNameBaseTooltipRoot?: string;
  ref?: ForwardedRef<HTMLInputElement>;
  mask?: string | (string | RegExp)[];
  alwaysShowMask?: boolean;
  maskChar?: string;
}

export type TOnChangeInput = (
  event: React.ChangeEvent<HTMLInputElement>,
  data: {
    name: string;
    value: string | null;
  },
) => void;

export type TOnBlurInput = (
  event: React.FocusEvent<HTMLInputElement>,
  data: {
    name: string;
    value: string | null;
  },
) => void;
