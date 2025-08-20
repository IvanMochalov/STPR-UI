import React from "react";

import { ApplyButtonsProps } from "../../ApplyButtons";
import { TModalAlign } from "../../Modal/types";

export interface ConfirmProps extends ApplyButtonsProps {
  zIndex: number;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  modalAlign?: TModalAlign;
  loading?: boolean;
}
