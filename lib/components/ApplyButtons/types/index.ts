import React from "react";

import { EIconName } from "../../Icons";

export type TApplyButtonsMobile = "row" | "column" | "column-reverse";
export type TApplyButtonsAlign = "left" | "center" | "right";

export interface ApplyButtonsProps {
  mobile?: TApplyButtonsMobile;
  align?: TApplyButtonsAlign;
  cancelBtnContent?: string;
  cancelBtnIconName?: EIconName;
  submitBtnContent?: string;
  cancelBtnDisabled?: boolean;
  formId?: string;
  disabled?: boolean;
  loading?: boolean;
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  submit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
