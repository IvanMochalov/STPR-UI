import { ReactNode } from "react";

export interface BaseTooltipProps {
  text?: string | ReactNode;
  noPadding?: boolean;
  classNameRoot?: string;
  classNameContentRoot?: string;
}
