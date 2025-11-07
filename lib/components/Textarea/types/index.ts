import React, { ForwardedRef } from "react";

import { ETooltipPosition } from "../../Tooltip";

export type TTextareaVariant = "outlined" | "filled";
export type TTextareaResize = "none" | "both" | "horizontal" | "vertical";
export type TTextareaWrap = "hard" | "soft" | "off";

export interface TextareaProps {
  name: string;
  variant?: TTextareaVariant;
  onChange: TOnChangeTextarea;
  value?: string;
  error?: string;
  isAbsolutePositionError?: boolean;
  onMouseEnter?: () => void;
  label?: string;
  infoTooltipText?: string;
  tooltipPosition?: ETooltipPosition;
  disabled?: boolean;
  required?: boolean;
  autoSize?: boolean;
  isVisibleDefaultTitle?: boolean;
  fluidHeight?: boolean;
  placeholder?: string;
  classNameError?: string;
  classNameLabel?: string;
  classNameRoot?: string;
  classNameBaseTooltipRoot?: string;
  ref?: ForwardedRef<HTMLTextAreaElement>;
  resize?: TTextareaResize;
  rows?: number;
  maxRows?: number;
  cols?: number;
  maxLength?: number;
  minLength?: number;
  readOnly?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  spellCheck?: boolean;
  wrap?: TTextareaWrap;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export type TOnChangeTextarea = (
  event: React.ChangeEvent<HTMLTextAreaElement>,
  data: {
    name: string;
    value: string | null;
  },
) => void;
