import React from "react";

import { ETooltipPosition } from "../../Tooltip";

export type TSelectOption = {
  value: string | null;
  label: string;
  key?: string;
};

export interface SelectProps {
  options: TSelectOption[];
  placeholder?: string;
  value?: string;
  name: string;
  onChange: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: { value: string | null; name: string },
  ) => void;
  onMouseEnter?: () => void;
  error?: string;
  label?: string;
  infoTooltipText?: string;
  tooltipPosition?: ETooltipPosition;
  disabled?: boolean;
  required?: boolean;
  maxHeightList?: number;
  isVisibleDefaultTitle?: boolean;
  isScrollableList?: boolean;
  classNameRoot?: string;
  classNameError?: string;
  classNameLabel?: string;
}
