import React, { ForwardedRef } from "react";

import { ETooltipPosition } from "../../BaseTooltip";

export interface InputProps {
  name: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: {
      name: string;
      value?: string;
      checked?: boolean;
    },
  ) => void;
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
