import React from "react";

import { ETooltipPosition } from "../../Tooltip";

export interface CheckboxProps {
  size?: "md" | "lg";
  checked?: boolean;
  disabled?: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    data: {
      name: string;
      value?: string;
      checked?: boolean;
    },
  ) => void;
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
