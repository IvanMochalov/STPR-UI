import React from "react";

import { ETooltipPosition } from "../../Tooltip";

export type TSelectOption = {
  value: string | null | number;
  label: string;
  key?: string;
};

export type TSelectVariant = "outlined" | "filled";

export interface ISelectProps {
  options: TSelectOption[];
  isAbsolutePositionError?: boolean;
  placeholder?: string;
  variant?: TSelectVariant;
  value?: string | null | number;
  name: string;
  onChange?: TOnChangeSelect;
  onBlur?: TOnBlurSelect;
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
  isSearchable?: boolean;
  searchPlaceholder?: string;
}

export type TOnChangeSelect = (
  event: React.MouseEvent<HTMLDivElement>,
  data: { value: string | null | number; name: string },
) => void;

export type TOnBlurSelect = (data: { value: string | null | number; name: string }) => void;
