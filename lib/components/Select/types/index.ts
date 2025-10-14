import React from "react";

import { ETooltipPosition } from "../../Tooltip";

export type TSelectOption = {
  value: string | null | number;
  label: string;
  key?: string;
};

export type TSelectVariant = "outlined" | "filled";

export interface SelectProps {
  options: TSelectOption[];
  isAbsolutePositionError?: boolean;
  placeholder?: string;
  variant?: TSelectVariant;
  value?: string | null | number;
  name: string;
  onChange: TOnChangeSelect;
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
  classNameBaseTooltipRoot?: string;
}

export type TOnChangeSelect = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  data: { value: string | null; name: string },
) => void;
