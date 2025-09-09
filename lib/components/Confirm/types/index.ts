import React from "react";

import { ApplyButtonsProps } from "../../ApplyButtons";
import { TModalAlign, TTextAlign } from "../../Modal/types";

export interface ConfirmProps extends ApplyButtonsProps {
  zIndex: number;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  modalAlign?: TModalAlign;
  textAlign?: TTextAlign;
  loading?: boolean;
  isHiddenModal?: boolean;
  isVisibleCloseButton?: boolean;
  size?: "md" | "lg";
}
