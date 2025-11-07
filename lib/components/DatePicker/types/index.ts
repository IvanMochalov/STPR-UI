import React from "react";

import { IDatePickerInputProps } from "../../DatePickerInput";
import { ETooltipPosition } from "../../Tooltip";

export type TOnChangeDatePicker = (
  data: {
    name: string;
    value: Date | null;
  },
  event?: React.ChangeEvent<HTMLInputElement>,
) => void;

export interface IDatePickerProps
  extends Omit<
    IDatePickerInputProps,
    | "classNameRoot"
    | "focused"
    | "onClick"
    | "value"
    | "onChange"
    | "dateFormatMask"
    | "isVisibleErrorText"
    | "isVisibleLabelText"
    | "isVisibleCalendarIcon"
    | "onMouseEnter"
  > {
  dateFormatMask?: string | (string | RegExp)[];
  dateFormat?: string;
  value?: string;
  onChange?: TOnChangeDatePicker;
  selected: Date | null;
  minDate?: Date;
  maxDate?: Date;
  isRelative?: boolean;
  required?: boolean;
  isClearable?: boolean;
  closeOnScroll?: boolean;
  shouldCloseOnSelect?: boolean;
  enablePortal?: boolean;
  label?: string;
  infoTooltipText?: string;
  tooltipPosition?: ETooltipPosition;
  onCalendarOpen?: () => void;
  onCalendarClose?: () => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  classNameRoot?: string;
  classNameDatePickerInputRoot?: string;
  classNameLabel?: string;
  classNameBaseTooltipRoot?: string;
  classNamePortalRoot?: string;
}
