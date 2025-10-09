import React from "react";

import { TButtonVariant } from "../../Button";
import { EIconName } from "../../Icons";

export type TApplyButtonsMobileDirection = "row" | "column" | "column-reverse";
export type TApplyButtonsAlign = "left" | "center" | "right";

export interface ApplyButtonsProps {
  applyButtonsMobileDirection?: TApplyButtonsMobileDirection;
  applyButtonsAlign?: TApplyButtonsAlign;
  cancelBtnContent?: string;
  cancelBtnClassName?: string;
  submitBtnClassName?: string;
  cancelBtnVariant?: TButtonVariant;
  cancelBtnIconName?: EIconName;
  submitBtnIconName?: EIconName;
  submitBtnContent?: string;
  submitBtnVariant?: TButtonVariant;
  cancelBtnDisabled?: boolean;
  formId?: string;
  disabled?: boolean;
  loading?: boolean;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  submit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
