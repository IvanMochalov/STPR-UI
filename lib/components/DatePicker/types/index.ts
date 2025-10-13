import React from "react";

import { IDatePickerInputProps, TOnChangeDatePickerInput } from "../../DatePickerInput";
import { ETooltipPosition } from "../../Tooltip";

export type TOnChangeDatePicker = TOnChangeDatePickerInput;

export interface IDatePickerProps extends Omit<IDatePickerInputProps, "classNameRoot"> {
  dateFormat?: string;
  selected: Date | null;
  minDate?: Date;
  maxDate?: Date;
  isRelative?: boolean;
  required?: boolean;
  isClearable?: boolean;
  closeOnScroll?: boolean;
  shouldCloseOnSelect?: boolean;
  label?: string;
  infoTooltipText?: string;
  tooltipPosition?: ETooltipPosition;
  onCalendarOpen?: () => void;
  onCalendarClose?: () => void;
  onFocus?: () => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  classNameRoot?: string;
  classNameDatePickerInputRoot?: string;
  classNameLabel?: string;
  classNameBaseTooltipRoot?: string;
}
