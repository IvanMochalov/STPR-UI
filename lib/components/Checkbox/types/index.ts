import React from "react";

import { ETooltipPosition } from "../../Tooltip";

export type TCheckboxSize = "md" | "lg";

export interface CheckboxProps {
  size?: TCheckboxSize;
  checked?: boolean;
  disabled?: boolean;
  onChange: TOnChangeCheckbox;
  name: string;
  label?: string;
  error?: string;
  value?: string;
  required?: boolean;
  tooltipPosition?: ETooltipPosition;
  infoTooltipText?: string;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
  classNameRoot?: string;
  classNameError?: string;
}

export type TOnChangeCheckbox = (
  event: React.ChangeEvent<HTMLInputElement>,
  data: {
    name: string;
    value?: string;
    checked: boolean;
  },
) => void;
