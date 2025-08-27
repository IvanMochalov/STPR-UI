import React, { ForwardedRef } from "react";

import { ETooltipPosition } from "../../Tooltip";

export type TInputVariant = "outlined" | "filled";

export interface InputProps {
  name: string;
  variant?: TInputVariant;
  onChange: TOnChangeInput;
  value?: string;
  error?: string;
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
  ref?: ForwardedRef<HTMLInputElement>;
}

export type TOnChangeInput = (
  event: React.ChangeEvent<HTMLInputElement>,
  data: {
    name: string;
    value?: string;
    checked?: boolean;
  },
) => void;
